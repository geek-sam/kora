
export interface Service {
  number: string;
  category: string;
  title: string;
  description: string;
  offerings: string[];
  image: string;
  testimonial: string;
  author: string;
  role: string;
  avatar: string;
}

export const services: Service[] = [
  {
    number: "01",
    category: "Go-to-Market",
    title: "Launches that land and scale.",
    description:
      "Whether you're launching a new product or entering a new segment, we design the GTM motion that lands and scales.",
    offerings: [
      "Launch Strategy & Execution",
      "ICP & Persona Development",
      "Messaging & Value Proposition",
      "Channel Selection & Activation",
      "Partner & Alliance Programs",
      "Market Entry Playbooks",
    ],
    image: "/services/go-to-market.png",
    testimonial:
      "Kora designed something that actually made our brand stronger.",
    author: "James Martin",
    role: "CEO, Hamilton",
    avatar: "/team/james.png",
  },
  {
    number: "02",
    category: "Growth Strategy",
    title: "Growth built around what works.",
    description:
      "We identify your strongest growth opportunities and build a focused strategy that turns momentum into measurable results.",
    offerings: [
      "Growth Opportunity Mapping",
      "Revenue Growth Strategy",
      "Market & Competitor Research",
      "Customer Acquisition Strategy",
      "Growth Experiments",
      "Performance Measurement",
    ],
    image: "/services/strategy.png",
    testimonial:
      "We finally have a clear direction and a strategy our entire team believes in.",
    author: "Alex Morgan",
    role: "Founder, Northstar",
    avatar: "/team/alex.png",
  },
  {
    number: "03",
    category: "Revenue Operations",
    title: "Turn revenue into a repeatable system.",
    description:
      "We connect your people, processes and technology to create a revenue engine that performs consistently as you scale.",
    offerings: [
      "Revenue Operations Strategy",
      "Sales Process Design",
      "CRM Architecture",
      "Pipeline Management",
      "Revenue Forecasting",
      "Performance Dashboards",
    ],
    image: "/services/revenue.png",
    testimonial:
      "Our sales and marketing teams now work as one connected system.",
    author: "Daniel Carter",
    role: "COO, Elevate",
    avatar: "/team/david.png",
  },
  {
    number: "04",
    category: "Brand & Positioning",
    title: "Make your difference impossible to miss.",
    description:
      "We sharpen your positioning and create a compelling brand narrative that connects with the right customers.",
    offerings: [
      "Brand Strategy",
      "Market Positioning",
      "Brand Messaging",
      "Value Proposition Design",
      "Competitive Differentiation",
      "Brand Experience Strategy",
    ],
    image: "/services/brand.png",
    testimonial:
      "Kora helped us articulate what makes our business different.",
    author: "Sarah Williams",
    role: "CMO, Forma",
    avatar: "/team/priya.png",
  },
  {
    number: "05",
    category: "Business Systems",
    title: "Build systems that scale with you.",
    description:
      "We design the operational foundations, workflows and structures that help your business scale without unnecessary complexity.",
    offerings: [
      "Operating Model Design",
      "Workflow Optimization",
      "Process Documentation",
      "Team & Role Alignment",
      "Technology Integration",
      "Performance Management",
    ],
    image: "/services/business.png",
    testimonial:
      "We have transformed the way our business operates and makes decisions.",
    author: "Michael Reed",
    role: "CEO, Meridian",
    avatar: "/testimonials/marcus.png",
  },
];



export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  email: string;
  socials: {
    x?: string;
    linkedin?: string;
    instagram?: string;
    facebook?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Koraline Spencer",
    role: "Founder & CEO",
    image: "/team/koraline.png",
    bio: "Koraline built Kora after a decade leading growth at two venture-backed startups, where she took both from Series A through acquisition. She founded Kora to give mid-market companies access to the same caliber of growth strategy that used to be reserved for companies with eight-figure budgets. She specializes in go-to-market architecture and has personally led engagements that have generated over $200M in client revenue.",
    email: "koraline@kora.com",
    socials: {
      x: "https://x.com/",
      linkedin: "https://linkedin.com/",
      instagram: "https://instagram.com/",
      facebook: "https://facebook.com/",
    },
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Head of Growth Strategy",
    image: "/team/priya.png",
    bio: "Priya leads growth strategy at Kora, helping businesses identify new opportunities, sharpen their positioning and develop strategies that create measurable commercial impact.",
    email: "priya@kora.com",
    socials: {
      x: "https://x.com/",
      linkedin: "https://linkedin.com/",
      instagram: "https://instagram.com/",
    },
  },
  {
    id: 3,
    name: "James Okoro",
    role: "Senior Growth Consultant",
    image: "/team/james.png",
    bio: "James works closely with leadership teams to uncover growth opportunities, improve commercial performance and turn strategic priorities into practical execution plans.",
    email: "james@kora.com",
    socials: {
      linkedin: "https://linkedin.com/",
      instagram: "https://instagram.com/",
    },
  },
  {
    id: 4,
    name: "Alex Tanaka",
    role: "Growth Operations Lead",
    image: "/team/alex.png",
    bio: "Alex builds the systems and operational processes that help teams work more efficiently, improve visibility and create repeatable revenue operations.",
    email: "alex@kora.com",
    socials: {
      x: "https://x.com/",
      linkedin: "https://linkedin.com/",
    },
  },
  {
    id: 5,
    name: "David Wilson",
    role: "Head of Client Solutions",
    image: "/team/david.png",
    bio: "David leads client solutions, ensuring every engagement is aligned with business objectives and delivers meaningful outcomes for Kora's clients.",
    email: "david@kora.com",
    socials: {
      linkedin: "https://linkedin.com/",
      facebook: "https://facebook.com/",
    },
  },
  {
    id: 6,
    name: "Rachel Andersen",
    role: "Revenue Strategist",
    image: "/team/rachel.png",
    bio: "Rachel specializes in revenue strategy, helping businesses optimize their customer journeys, strengthen commercial models and build sustainable growth.",
    email: "rachel@kora.com",
    socials: {
      linkedin: "https://linkedin.com/",
      instagram: "https://instagram.com/",
    },
  },
];



export interface Testimonial {
  id: number;
  quote: string;
  description?: string;
  name: string;
  role: string;
  avatar: string;
  logo?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "I was skeptical of consultants—we'd been burned before by firms that delivered pretty slides and then disappeared. Kora was different. They rolled up their sleeves, challenged our assumptions, and stayed until the changes actually stuck.",
    name: "Marcus Thompson",
    role: "President, Theo",
    avatar: "/testimonials/marcus.png",
    logo: "/images/testimonials/theo-signature.svg",
  },
  {
    id: 2,
    quote:
      "Kora helped us see around corners. When everyone else was telling us to grow headcount, they helped us realize we had a conversion problem, not a capacity problem. That insight alone saved us from making a costly mistake.",
    name: "David Kim",
    role: "VP Strategy, Sitemark",
    avatar: "/testimonials/david.png",
  },
  {
    id: 3,
    quote:
      "What sets Kora apart is their commitment to building our capabilities, not creating dependency. A year after our engagement ended, we're still using the frameworks they taught us. That's the mark of a true partner.",
    name: "Jennifer Holland",
    role: "CFO, Elevance",
    avatar: "/testimonials/jennifer.png",
  },
];



export interface PricingPlan {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  icon: "sprint" | "partnership" | "custom";
  popular?: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "sprint",
    name: "Growth Sprint",
    subtitle: "Starts at $2500/mo",
    price: "$2500",
    period: "/mo",
    description:
      "A focused, 8-week engagement to diagnose your biggest growth blocker and build the plan to fix it.",
    icon: "sprint",
    features: [
      "Full-funnel diagnostic audit",
      "90-day growth roadmap",
      "Weekly strategy sessions",
      "Conversion optimization plan",
      "30-day post-engagement check-in",
    ],
  },
  {
    id: "partnership",
    name: "Growth Partnership",
    subtitle: "Starts at $8500/mo",
    price: "$8500",
    period: "/mo",
    description:
      "An ongoing strategic growth partnership. We work alongside your team to execute, optimize and scale your revenue engine.",
    icon: "partnership",
    popular: true,
    features: [
      "Dedicated growth strategy team",
      "Full-funnel growth execution",
      "Weekly leadership sessions",
      "Revenue operations optimization",
      "Continuous experimentation",
      "Monthly performance reviews",
    ],
  },
  {
    id: "custom",
    name: "Custom",
    subtitle: "Get a quote",
    price: "Custom",
    description:
      "A tailored engagement designed around your business model, growth objectives and operational requirements.",
    icon: "custom",
    features: [
      "Bespoke growth strategy",
      "Custom engagement roadmap",
      "Flexible team structure",
      "Dedicated strategic support",
      "Customized performance reporting",
    ],
  },
];



export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  id: string;
  label: string;
  questions: FAQItem[];
}

export const faqCategories: FAQCategory[] = [
  {
    id: "general",
    label: "General",
    questions: [
      {
        question: "What exactly does Kora do?",
        answer:
          "We help B2B companies between $2M and $50M in revenue grow faster and more predictably. That means diagnosing what is stalling your growth, building the strategy to fix it, and working alongside your team to execute. We are not an agency that runs campaigns. We are a growth partner that works on the systems, processes, and positioning that drive sustainable revenue.",
      },
      {
        question: "What industries do you work with?",
        answer:
          "We work primarily with B2B companies across technology, SaaS, professional services, and other growth-oriented industries. Our approach is tailored to each company's business model, market, and growth objectives.",
      },
      {
        question: "How is Kora different from a marketing agency?",
        answer:
          "We focus on the entire growth system, not just marketing campaigns. We work on positioning, revenue operations, customer acquisition, conversion, and execution alongside your internal team.",
      },
      {
        question: "Who on our team would work with Kora?",
        answer:
          "You work directly with experienced growth strategists and operators. Our team collaborates with your leadership, marketing, sales, and operations teams to make sure strategies translate into measurable business outcomes.",
      },
    ],
  },
  {
    id: "pricing",
    label: "Pricing",
    questions: [
      {
        question: "How much does working with Kora cost?",
        answer:
          "Our Growth Sprint starts at $2,500 per month, while Growth Partnership starts at $8,500 per month. Custom engagements are scoped according to your business needs and objectives.",
      },
      {
        question: "Do you offer fixed-price engagements?",
        answer:
          "Yes. Our Growth Sprint follows a defined engagement structure. Ongoing Growth Partnerships and custom engagements are scoped based on the level of support and execution required.",
      },
      {
        question: "Is there a minimum commitment?",
        answer:
          "Our Growth Sprint is an 8-week engagement. Ongoing partnerships are structured around your growth priorities and agreed engagement terms.",
      },
      {
        question: "Is the discovery call free?",
        answer:
          "Yes. Every engagement starts with a free 30-minute discovery call. We use it to understand your challenges, discuss your goals, and determine whether Kora is the right fit.",
      },
    ],
  },
  {
    id: "process",
    label: "Process",
    questions: [
      {
        question: "How does the engagement process work?",
        answer:
          "We start by understanding your business and diagnosing the biggest barriers to growth. We then develop a focused roadmap and work alongside your team to execute, measure, and continuously improve.",
      },
      {
        question: "How quickly can we get started?",
        answer:
          "After an initial discovery call and alignment on scope, we establish the engagement plan, identify priorities, and begin onboarding.",
      },
      {
        question: "Will our internal team be involved?",
        answer:
          "Yes. We work collaboratively with your existing team. Our goal is to strengthen your internal capabilities while delivering measurable improvements.",
      },
      {
        question: "How do you measure success?",
        answer:
          "We align on measurable business outcomes such as revenue growth, customer acquisition costs, conversion rates, retention, and revenue efficiency.",
      },
    ],
  },
  {
    id: "results",
    label: "Results",
    questions: [
      {
        question: "How soon can we expect to see results?",
        answer:
          "The timeline depends on your starting point, growth constraints, and engagement scope. We prioritize meaningful improvements and focus on creating measurable impact as early as possible.",
      },
      {
        question: "What results have your clients achieved?",
        answer:
          "Across the client results presented by Kora, companies have experienced improvements in revenue growth, customer acquisition efficiency, and retention.",
      },
      {
        question: "Do you provide performance reports?",
        answer:
          "Yes. We use performance tracking and regular reviews to monitor progress, identify opportunities, and adjust the growth strategy.",
      },
      {
        question: "What happens after the engagement ends?",
        answer:
          "We help ensure your team has the systems, frameworks, and knowledge to continue executing. Selected engagements also include a post-engagement check-in.",
      },
    ],
  },
];



export interface Insight {
  id: number;
  category: string;
  date: string;
  title: string;
  image: string;
  slug: string;
}

export const insights: Insight[] = [
  {
    id: 1,
    category: "Technology Selection",
    date: "March 4, 2026",
    title: "Your CRM is not the problem. Your process is.",
    image: "/insights/insight-01.png",
    slug: "your-crm-is-not-the-problem",
  },
  {
    id: 2,
    category: "Implementation",
    date: "March 3, 2026",
    title: "5 growth levers most companies ignore until it is too late.",
    image: "/insights/insight-02.png",
    slug: "5-growth-levers-companies-ignore",
  },
];
