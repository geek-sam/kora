import React, { useState } from "react";
import {
  TrendingUp,
  Users,
  ListChecks,
  CircleCheck,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const services = [
  "Go-to-Market",
  "Growth Strategy",
  "Revenue Operations",
  "Sales Optimization",
  "Pricing & Packaging",
];

const revenues = ["Under $1M", "$1M - $5M", "$5M - $20M", "$20M+"];

const features = [
  {
    icon: TrendingUp,
    label: "Actionable growth roadmap",
  },
  {
    icon: Users,
    label: "Channel & funnel diagnostics",
  },
  {
    icon: ListChecks,
    label: "Clear next steps & timeline",
  },
];

const ContactSection: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedRevenue, setSelectedRevenue] = useState("$20M+");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    challenge: "",
    terms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((item) => item !== service)
        : [...prev, service],
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const target = e.target;

    setFormData((prev) => ({
      ...prev,
      [target.name]:
        target instanceof HTMLInputElement && target.type === "checkbox"
          ? target.checked
          : target.value,
    }));

    if (submitStatus !== "idle") {
      setSubmitStatus("idle");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

      if (!accessKey) {
        throw new Error("Web3Forms access key is missing.");
      }

      const payload = {
        access_key: accessKey,
        subject: `New Kora Consultation Request - ${formData.name}`,
        from_name: "Kora Website",
        name: formData.name,
        email: formData.email,
        services:
          selectedServices.length > 0
            ? selectedServices.join(", ")
            : "Not specified",
        annual_revenue: selectedRevenue,
        growth_challenge: formData.challenge || "Not specified",
        terms_accepted: formData.terms ? "Yes" : "No",
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Something went wrong.");
      }

      setSubmitStatus("success");

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        challenge: "",
        terms: false,
      });

      setSelectedServices([]);
      setSelectedRevenue("$20M+");
    } catch (error) {
      console.error("Web3Forms submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="px-3 py-3 md:px-4 md:py-4">
      <div className="relative w-full mx-auto max-w-[1920px] overflow-hidden rounded-[24px] bg-[#28658B] px-6 py-12 text-white md:rounded-[32px] md:px-[7.6%] md:py-16 lg:py-[6.5%]">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `
            linear-gradient(
              90deg,
              rgba(27, 74, 99, 0.42),
              rgba(25, 91, 128, 0.25)
            ),
            url('/hero-flower.jpg')
          `,
          }}
        />

        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#7895A4]/40 via-transparent to-[#124D79]/50" />

        {/* Main Content */}
        <div className="relative z-10 mx-auto grid max-w-[1500px] grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] ">
          {/* Left Content */}
          <div className="flex flex-col justify-between gap-16 lg:gap-10">
            {/* Heading and Features */}
            <div>
              <h1 className="max-w-[540px] text-5xl font-medium leading-[1.05] tracking-[-0.055em] sm:text-6xl lg:text-[64px]">
                Let's find
                <br />
                your next
                <br />
                growth lever.
              </h1>

              <div className="mt-12 flex flex-col gap-4">
                {features.map((feature) => {
                  const Icon = feature.icon;

                  return (
                    <div
                      key={feature.label}
                      className="flex items-center gap-3"
                    >
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/90 text-[#356D88]">
                        <Icon size={14} strokeWidth={2.5} />
                      </span>

                      <span className="text-sm font-medium tracking-tight">
                        {feature.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Testimonial */}
            <div className="max-w-[440px] pb-4">
              <div className="mb-5 flex gap-1.5">
                {[1, 2, 3, 4, 5].map((dot) => (
                  <span
                    key={dot}
                    className="h-2 w-2 rounded-full bg-[#58D2A6]"
                  />
                ))}
              </div>

              <blockquote className="text-xl font-medium leading-[1.3] tracking-tight sm:text-[22px]">
                "What sets Kora apart is their commitment to building our
                capabilities, not creating dependency."
              </blockquote>

              <div className="mt-7 flex items-center gap-3">
                <img
                  src="/team/priya.png"
                  alt="Jennifer Holland"
                  className="h-10 w-10 rounded-full object-cover"
                />

                <div>
                  <p className="text-sm font-semibold">Jennifer Holland</p>
                  <p className="mt-0.5 text-xs text-white/75">CEO, Elevance</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col items-center lg:items-end">
            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-[520px] overflow-hidden rounded-[26px] border border-white/35 bg-white/35 text-[#222C31] shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur-2xl"
            >
              {/* Form Body */}
              <div className="p-6 sm:p-8">
                {/* Logo */}
                <div className="mb-5 flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#5BDBB0] text-white">
                    <CircleCheck size={13} />
                  </span>

                  <span className="text-base font-bold tracking-tight">
                    kora<sup className="text-[9px]">™</sup>
                  </span>
                </div>

                <h2 className="mb-6 text-xl font-medium leading-[1.3] tracking-tight sm:text-[21px]">
                  No pitch decks, no pressure. Tell us where you are and we'll
                  share how we can help.
                </h2>

                {/* Name & Email */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[11px] font-medium">
                      Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      className="h-9 w-full rounded-full border border-white/30 bg-white/55 px-4 text-xs outline-none transition placeholder:text-[#626A6E] focus:border-white focus:bg-white/80"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[11px] font-medium">
                      Email
                    </label>

                    <input
                      type="email"
                      name="email"
                      required
                      autoComplete="email"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="h-9 w-full rounded-full border border-white/30 bg-white/55 px-4 text-xs outline-none transition placeholder:text-[#626A6E] focus:border-white focus:bg-white/80"
                    />
                  </div>
                </div>

                {/* Services */}
                <div className="mt-5">
                  <label className="mb-3 block text-[11px] font-medium">
                    What services are you interested in?
                  </label>

                  <div className="flex flex-wrap gap-2">
                    {services.map((service) => {
                      const active = selectedServices.includes(service);

                      return (
                        <button
                          key={service}
                          type="button"
                          onClick={() => toggleService(service)}
                          aria-pressed={active}
                          className={`flex items-center gap-2 rounded-full border px-3 py-2 text-[11px] font-medium transition-all ${
                            active
                              ? "border-white/80 bg-[#26363C] text-white"
                              : "border-white/30 bg-white/45 text-[#29343A] hover:bg-white/70"
                          }`}
                        >
                          <span
                            className={`h-3 w-3 rounded-full ${
                              active ? "bg-[#5BD9AD]" : "bg-white/80"
                            }`}
                          />
                          {service}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Revenue */}
                <div className="mt-6">
                  <label className="mb-3 block text-[11px] font-medium">
                    Annual revenue
                  </label>

                  <div className="flex flex-wrap gap-2">
                    {revenues.map((revenue) => {
                      const active = selectedRevenue === revenue;

                      return (
                        <button
                          key={revenue}
                          type="button"
                          onClick={() => setSelectedRevenue(revenue)}
                          aria-pressed={active}
                          className={`flex items-center gap-2 rounded-full border px-3 py-2 text-[11px] font-medium transition-all ${
                            active
                              ? "border-white/80 bg-[#26363C] text-white"
                              : "border-white/30 bg-white/45 text-[#29343A] hover:bg-white/70"
                          }`}
                        >
                          <span
                            className={`h-3 w-3 rounded-full ${
                              active ? "bg-[#5BD9AD]" : "bg-white/80"
                            }`}
                          />
                          {revenue}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Challenge */}
                <div className="mt-6">
                  <label className="mb-2 block text-[11px] font-medium">
                    Biggest growth challenge?
                  </label>

                  <textarea
                    name="challenge"
                    rows={4}
                    value={formData.challenge}
                    onChange={handleChange}
                    placeholder="We've plateaued at $8M ARR..."
                    className="w-full resize-y rounded-2xl border border-white/40 bg-white/95 px-4 py-3 text-xs outline-none transition placeholder:text-[#73787B] focus:border-white"
                  />
                </div>

                {/* Terms */}
                <label className="mt-5 flex cursor-pointer items-center gap-2 text-[10px]">
                  <input
                    type="checkbox"
                    name="terms"
                    checked={formData.terms}
                    onChange={handleChange}
                    required
                    className="h-3.5 w-3.5 accent-[#55CFA7]"
                  />
                  By submitting, you agree to our terms of service.
                </label>

                {/* Submission Feedback */}
                {submitStatus === "success" && (
                  <div
                    role="status"
                    className="mt-5 flex items-center gap-2 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-xs font-medium text-green-800"
                  >
                    <CheckCircle2 size={16} className="shrink-0" />
                    Your request has been submitted successfully. We'll be in
                    touch soon.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div
                    role="alert"
                    className="mt-5 flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-xs font-medium text-red-700"
                  >
                    <AlertCircle size={16} className="shrink-0" />
                    Something went wrong. Please try again.
                  </div>
                )}
              </div>

              {/* Form Footer */}
              <div className="flex items-center justify-between gap-4 border-t border-white/35 px-6 py-5 sm:px-8">
                <p className="max-w-[180px] text-[11px] font-medium leading-[1.5]">
                  We'll reach out within 24 hours to schedule your call.
                </p>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex shrink-0 items-center gap-4 rounded-full bg-[#202527] px-4 py-3 text-[11px] font-semibold text-white transition hover:bg-[#35464B] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      Sending...
                      <Loader2 size={14} className="animate-spin" />
                    </>
                  ) : (
                    <>
                      Book a call
                      <span className="h-2 w-2 rounded-full bg-white" />
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Statistics */}
            <div className="mt-14 grid w-full max-w-[490px] grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <span className="text-5xl font-medium tracking-[-0.06em] sm:text-[52px]">
                  40+
                </span>

                <span className="text-[11px] leading-[1.4] text-white/90">
                  Long-term
                  <br />
                  partnerships.
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-5xl font-medium tracking-[-0.06em] sm:text-[52px]">
                  99%
                </span>

                <span className="text-[11px] leading-[1.4] text-white/90">
                  Satisfaction
                  <br />
                  Rate.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
