import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  ALREADY_ON_WAITLIST_COPY,
  DemoForm,
  WAITLIST_ENDPOINT,
  WaitlistForm,
} from "./LeadForm";

type DataLayerWindow = Window & { dataLayer?: unknown[] };

const fetchMock = vi.fn();

function jsonResponse(status: number, body: unknown): Response {
  return {
    ok: status >= 200 && status < 300,
    status,
    json: async () => body,
  } as Response;
}

function dataLayer(): unknown[] {
  return (window as DataLayerWindow).dataLayer ?? [];
}

async function submitEmail(email: string) {
  fireEvent.change(screen.getByLabelText("Email address"), { target: { value: email } });
  fireEvent.submit(screen.getByRole("form"));
}

beforeEach(() => {
  fetchMock.mockReset();
  fetchMock.mockRejectedValue(new Error("blocked: tests must not post to the waitlist endpoint"));
  vi.stubGlobal("fetch", fetchMock);
  delete (window as DataLayerWindow).dataLayer;
});

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

describe("waitlist duplicate copy", () => {
  it.each([
    ["waitlist", WaitlistForm, "waitlist", "waitlist_submit", "You\u2019re on the list."],
    ["demo", DemoForm, "final_cta", "demo_request", "Demo request received."],
  ] as const)(
    "shows new-submission success and records one %s conversion on 201",
    async (intent, Form, location, eventName, successCopy) => {
      fetchMock.mockResolvedValueOnce(jsonResponse(201, { success: true }));
      render(<Form location={location} />);

      await submitEmail("facility@example.com");

      expect(await screen.findByText(successCopy)).toBeTruthy();
      expect(screen.queryByText(/already on the waitlist/i)).toBeNull();
      expect(fetchMock).toHaveBeenCalledTimes(1);
      expect(fetchMock).toHaveBeenCalledWith(
        WAITLIST_ENDPOINT,
        expect.objectContaining({
          method: "POST",
          body: JSON.stringify({
            email: "facility@example.com",
            source: intent === "demo" ? "demo_cta" : "waitlist",
          }),
        })
      );
      expect(dataLayer()).toEqual([
        { event: eventName, form_location: location, form_intent: intent },
      ]);
    }
  );

  it.each([
    ["waitlist", WaitlistForm, "waitlist"],
    ["demo", DemoForm, "final_cta"],
  ] as const)(
    "shows already-on-the-waitlist copy for a 409 EMAIL_EXISTS %s submission",
    async (_intent, Form, location) => {
      (window as DataLayerWindow).dataLayer = [];
      fetchMock.mockResolvedValueOnce(
        jsonResponse(409, { error: "EMAIL_EXISTS", message: "Account exists" })
      );
      render(<Form location={location} />);

      await submitEmail("facility@example.com");

      const notice = await screen.findByRole("status");
      expect(notice.textContent).toBe(ALREADY_ON_WAITLIST_COPY);
      expect(notice.textContent).not.toMatch(/example\.com/i);
      expect(notice.textContent).not.toMatch(/Account exists/);
      expect(screen.queryByRole("alert")).toBeNull();
      expect(screen.queryByText(/something went wrong/i)).toBeNull();
      expect(screen.queryByText(/you\u2019re on the list/i)).toBeNull();
      expect(screen.queryByText(/demo request received/i)).toBeNull();

      const input = screen.getByLabelText("Email address") as HTMLInputElement;
      expect(input.disabled).toBe(false);
      expect(input.value).toBe("facility@example.com");
      expect((screen.getByRole("button") as HTMLButtonElement).disabled).toBe(false);
      expect(dataLayer()).toEqual([]);
      expect(fetchMock).toHaveBeenCalledTimes(1);
    }
  );

  it("does not treat a 409 without EMAIL_EXISTS as already subscribed", async () => {
    fetchMock.mockResolvedValueOnce(jsonResponse(409, { error: "CONFLICT", message: "Account exists" }));
    render(<WaitlistForm location="waitlist" />);

    await submitEmail("facility@example.com");

    expect(await screen.findByRole("alert")).toHaveProperty(
      "textContent",
      "Something went wrong. Please try again."
    );
    expect(screen.queryByText(/already on the waitlist/i)).toBeNull();
    expect(screen.queryByText(/Account exists/)).toBeNull();
    expect(dataLayer()).toEqual([]);
  });

  it("keeps a 400 as an invalid-email error", async () => {
    fetchMock.mockResolvedValueOnce(jsonResponse(400, { error: "Invalid email address" }));
    render(<WaitlistForm location="waitlist" />);

    await submitEmail("facility@example.com");

    expect(await screen.findByRole("alert")).toHaveProperty(
      "textContent",
      "Please enter a valid email address."
    );
    expect(screen.queryByText(/already on the waitlist/i)).toBeNull();
    expect(dataLayer()).toEqual([]);
  });

  it("keeps a 429 as a rate-limit error", async () => {
    fetchMock.mockResolvedValueOnce(jsonResponse(429, { error: "Too many requests" }));
    render(<DemoForm location="final_cta" />);

    await submitEmail("facility@example.com");

    expect(await screen.findByRole("alert")).toHaveProperty(
      "textContent",
      "Too many requests. Please try again later."
    );
    expect(screen.queryByText(/already on the waitlist/i)).toBeNull();
    expect(dataLayer()).toEqual([]);
  });

  it("does not rewrite a 500 as already subscribed, even if the body says EMAIL_EXISTS", async () => {
    fetchMock.mockResolvedValueOnce(
      jsonResponse(500, { error: "EMAIL_EXISTS", message: "Account exists" })
    );
    render(<WaitlistForm location="waitlist" />);

    await submitEmail("facility@example.com");

    expect(await screen.findByRole("alert")).toHaveProperty(
      "textContent",
      "Something went wrong. Please try again."
    );
    expect(screen.queryByText(/already on the waitlist/i)).toBeNull();
    expect(dataLayer()).toEqual([]);
  });

  it("shows a connection error when fetch rejects and does not record a conversion", async () => {
    fetchMock.mockRejectedValueOnce(new TypeError("Failed to fetch"));
    render(<DemoForm location="final_cta" />);

    await submitEmail("facility@example.com");

    expect(await screen.findByRole("alert")).toHaveProperty(
      "textContent",
      "Unable to connect. Please try again."
    );
    expect(screen.queryByText(/already on the waitlist/i)).toBeNull();
    expect(dataLayer()).toEqual([]);
  });

  it("rejects an invalid address locally without calling fetch", async () => {
    render(<WaitlistForm location="waitlist" />);

    await submitEmail("not-an-email");

    expect(await screen.findByRole("alert")).toHaveProperty("textContent", "Enter a valid email.");
    await waitFor(() => {
      expect(fetchMock).not.toHaveBeenCalled();
    });
    expect(dataLayer()).toEqual([]);
  });
});
