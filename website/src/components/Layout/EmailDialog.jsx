import { useEffect, useId, useRef, useState } from "react";
import { HiOutlineMail, HiArrowRight, HiX, HiCheck } from "react-icons/hi";
import { cn } from "util/cn";

const RECIPIENT = "faithux.co@gmail.com";

const INITIAL_FORM = {
  email: "",
  subject: "",
  message: "",
};

export function EmailDialog({ open, onClose }) {
  const titleId = useId();
  const emailRef = useRef(null);
  const wasOpenRef = useRef(false);

  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  // Only reset when the dialog transitions from closed → open
  useEffect(() => {
    if (open && !wasOpenRef.current) {
      setEmail(INITIAL_FORM.email);
      setSubject(INITIAL_FORM.subject);
      setMessage(INITIAL_FORM.message);
      setErrors({});
      setSending(false);
      setSent(false);

      const t = window.setTimeout(() => {
        if (emailRef.current) emailRef.current.focus();
      }, 60);

      wasOpenRef.current = true;
      return () => window.clearTimeout(t);
    }

    if (!open) {
      wasOpenRef.current = false;
    }
  }, [open]);

  // Body scroll lock + Escape key
  useEffect(() => {
    if (!open) return;

    document.body.classList.add("dialog-open");

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.classList.remove("dialog-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const clearError = (field) => {
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    clearError("email");
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
    clearError("subject");
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    clearError("message");
  };

  const validate = () => {
    const next = {};
    const emailVal = email.trim();
    const subjectVal = subject.trim();
    const messageVal = message.trim();

    if (!emailVal) {
      next.email = "Your email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
      next.email = "Enter a valid email address";
    }

    if (!subjectVal) {
      next.subject = "Subject is required";
    }

    if (!messageVal) {
      next.message = "Message is required";
    } else if (messageVal.length < 10) {
      next.message = "Please write a bit more detail";
    }

    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSending(true);

    const body = [
      message.trim(),
      "",
      "—",
      `From: ${email.trim()}`,
      "(Sent from B Design Hub contact form)",
    ].join("\n");

    const mailto =
      `mailto:${RECIPIENT}` +
      `?subject=${encodeURIComponent(subject.trim())}` +
      `&body=${encodeURIComponent(body)}`;

    const link = document.createElement("a");
    link.href = mailto;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    window.setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 400);
  };

  if (!open) return null;

  return (
    <div
      className="animate-fade-in fixed inset-0 z-[100] flex items-end justify-center p-4 sm:items-center"
      role="presentation"
    >
      <button
        type="button"
        aria-label="Close dialog"
        className="absolute inset-0 backdrop-blur-[3px]"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="animate-slide-up relative z-10 w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl shadow-[#6899a1]/20"
      >
        {/* Header */}
        <div className="relative border-b border-[#6899a1]/40 bg-[#244d53] px-6 pb-5 pt-6">
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-white"
            aria-label="Close"
          >
            <HiX className="h-4 w-4" />
          </button>

          <div className="mb-3 flex h-5 w-5 items-center justify-center rounded-xl">
            <HiOutlineMail className="h-5 w-5" />
          </div>

          <h2
            id={titleId}
            className="font-serif text-3xl font-medium tracking-tight text-white"
          >
            Get in touch
          </h2>
          <p className="mt-1 text-sm text-[#d6e5e8]">
            Send an email to{" "}
            <span className="font-medium text-brand-blue-ink">{RECIPIENT}</span>
          </p>
        </div>

        {/* Body */}
        <div className="px-6 py-5">
          {sent ? (
            <div className="flex flex-col items-center py-6 text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full text-[#244d53]">
                <HiCheck className="h-7 w-7" />
              </div>
              <h3 className="font-serif text-xl font-medium text-slate-900">
                Opening your email app
              </h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-500">
                Your message is ready to send. Review it in your mail app and
                hit send. No user data is stored on this site.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-6 rounded-full bg-[#244d53] px-6 py-2.5 text-sm font-medium text-white transition hover:bg-[#244d53]/80"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-500"
                >
                  Your email
                </label>
                <input
                  ref={emailRef}
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={handleEmailChange}
                  className={inputClass(!!errors.email)}
                />
                {errors.email ? (
                  <p className="mt-1.5 text-xs text-rose-500" role="alert">
                    {errors.email}
                  </p>
                ) : null}
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-500"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  autoComplete="off"
                  placeholder="Project inquiry, collab, greeting…"
                  value={subject}
                  onChange={handleSubjectChange}
                  className={inputClass(!!errors.subject)}
                />
                {errors.subject ? (
                  <p className="mt-1.5 text-xs text-rose-500" role="alert">
                    {errors.subject}
                  </p>
                ) : null}
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-500"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  placeholder="Tell me a little about what you're working on…"
                  value={message}
                  onChange={handleMessageChange}
                  className={cn(
                    inputClass(!!errors.message),
                    "resize-y min-h-[96px]",
                  )}
                />
                {errors.message ? (
                  <p className="mt-1.5 text-xs text-rose-500" role="alert">
                    {errors.message}
                  </p>
                ) : null}
              </div>

              <p className="text-[11px] leading-relaxed text-slate-400">
                This opens your default email app with the message pre-filled.
                No data is sent to any third-party service.
              </p>

              <div className="flex items-center gap-3 pt-1">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 rounded-full border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={sending}
                  className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#244d53] px-4 py-2.5 text-sm text-white font-medium text-brand-blue transition  hover:bg-[#244d53]/80 disabled:opacity-10"
                >
                  {sending ? (
                    <>
                      <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-brand-blue/30 border-t-brand-blue" />
                      Opening…
                    </>
                  ) : (
                    <>
                      Send message
                      <HiArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

function inputClass(hasError) {
  return cn(
    "w-full rounded-xl border bg-slate-50/80 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:bg-white focus:ring-2",
    hasError
      ? "border-rose-300 focus:border-rose-400 focus:ring-rose-100"
      : "border-slate-200 focus:border-brand-blue-mid focus:ring-brand-blue/50",
  );
}
