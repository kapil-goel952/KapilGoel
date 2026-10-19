
import { useState } from "react";
import {
  User,
  Mail,
  BookOpen,
  MessageSquare,
  Send,
  Lock,
} from "lucide-react";

// We will replace this placeholder with your form endpoint.
const FORM_ENDPOINT = "https://formsubmit.app/f/YOUR_FORM_ID";

const SendMessage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (FORM_ENDPOINT.includes("YOUR_FORM_ID")) {
      setStatus({
        type: "error",
        message:
          "The contact form is not connected yet. Configure the form endpoint first.",
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({
      type: "loading",
      message: "Sending your message...",
    });

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: new FormData(form),
      });

      const result = await response.json();

      if (!response.ok || result.ok !== true) {
        throw new Error(result.error || "Message could not be sent.");
      }

      form.reset();

      setStatus({
        type: "success",
        message: "Message sent successfully! Thank you for reaching out.",
      });
    } catch {
      setStatus({
        type: "error",
        message:
          "We could not send your message. Please try again in a moment.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="rounded-2xl border border-gray-800 bg-gray-950 p-5 sm:p-6 lg:p-8">
      <p className="mb-2 text-xs font-medium uppercase tracking-widest text-purple-400">
        Get in touch
      </p>

      <h2 className="text-2xl font-semibold text-white">
        Send me a message
      </h2>

      <p className="mt-2 text-sm leading-6 text-gray-400">
        Have an idea, question, or project to discuss? Write me a message.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        {/* Name */}
        <div>
          <label
            htmlFor="contact-name"
            className="mb-2 block text-sm text-gray-300"
          >
            Your name
          </label>

          <div className="relative">
            <User
              size={18}
              aria-hidden="true"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400"
            />

            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Enter your name"
              minLength={2}
              maxLength={80}
              required
              className="w-full rounded-xl border border-gray-800 bg-black/40 py-3.5 pl-11 pr-4 text-white outline-none transition focus:border-purple-500"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="contact-email"
            className="mb-2 block text-sm text-gray-300"
          >
            Email address
          </label>

          <div className="relative">
            <Mail
              size={18}
              aria-hidden="true"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400"
            />

            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              maxLength={254}
              required
              className="w-full rounded-xl border border-gray-800 bg-black/40 py-3.5 pl-11 pr-4 text-white outline-none transition focus:border-purple-500"
            />
          </div>
        </div>

        {/* Subject */}
        <div>
          <label
            htmlFor="contact-subject"
            className="mb-2 block text-sm text-gray-300"
          >
            Subject
          </label>

          <div className="relative">
            <BookOpen
              size={18}
              aria-hidden="true"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400"
            />

            <input
              id="contact-subject"
              name="subject"
              type="text"
              placeholder="What is this about?"
              maxLength={120}
              required
              className="w-full rounded-xl border border-gray-800 bg-black/40 py-3.5 pl-11 pr-4 text-white outline-none transition focus:border-purple-500"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="contact-message"
            className="mb-2 block text-sm text-gray-300"
          >
            Message
          </label>

          <div className="relative">
            <MessageSquare
              size={18}
              aria-hidden="true"
              className="absolute left-4 top-4 text-purple-400"
            />

            <textarea
              id="contact-message"
              name="message"
              rows={6}
              minLength={10}
              maxLength={3000}
              placeholder="Tell me a little about your idea..."
              required
              className="w-full resize-y rounded-xl border border-gray-800 bg-black/40 py-3.5 pl-11 pr-4 text-white outline-none transition focus:border-purple-500"
            />
          </div>
        </div>

        {/* Spam-trap field: leave empty */}
        <input
          type="text"
          name="_gotcha"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />

        <input
          type="hidden"
          name="_subject"
          value="New message from Kapil's portfolio"
        />

        {/* Feedback */}
        {status.message && (
          <p
            role={status.type === "error" ? "alert" : "status"}
            aria-live="polite"
            className={`rounded-lg border p-3 text-sm ${
              status.type === "success"
                ? "border-green-500/30 bg-green-500/10 text-green-300"
                : status.type === "error"
                  ? "border-red-500/30 bg-red-500/10 text-red-300"
                  : "border-purple-500/30 bg-purple-500/10 text-purple-300"
            }`}
          >
            {status.message}
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 px-5 py-3.5 font-semibold text-white transition-colors hover:bg-purple-500 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Send size={17} aria-hidden="true" />

          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        <p className="flex items-center justify-center gap-2 text-xs leading-5 text-gray-500">
          <Lock size={13} aria-hidden="true" />
          Your message is sent through the configured form service.
        </p>
      </form>
    </section>
  );
};

export default SendMessage;
