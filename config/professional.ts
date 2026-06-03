// ─────────────────────────────────────────────────────────────────────────────
// GS INNOVATORS — SOLEIMAN GHAZZAWI PORTFOLIO CONFIGURATION
// ─────────────────────────────────────────────────────────────────────────────

export const config = {

  // ── META / SEO ───────────────────────────────────────────────────────────
  meta: {
    name: 'Soleiman Ghazzawi',
    title: 'Founder & Execution Partner at GS Innovators | Commercial & Luxury Fit-Out UAE',
    description:
      'Soleiman Ghazzawi is the Founder of GS Innovators, an Abu Dhabi-based execution partner for high-end commercial and luxury fit-out projects. Bridging design intent and on-site delivery with precision.',
    url: 'https://gsinnovators.ae',
    ogImage: '/og-image.jpg',
  },

  // ── NAVIGATION ───────────────────────────────────────────────────────────
  nav: {
    logo: 'Soleiman Ghazzawi',
    logoSuffix: 'GS Innovators',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Results', href: '#results' },
      { label: 'Process', href: '#process' },
      { label: 'FAQ', href: '#faq' },
    ],
    cta: { label: 'Discuss Your Project', href: '#contact' },
    languageSwitch: { label: 'العربية', href: '/ar' },
  },

  // ── HERO ─────────────────────────────────────────────────────────────────
  hero: {
    eyebrow: 'Founder & Project Director, GS Innovators, Abu Dhabi UAE',
    headline: 'I Don\'t Design Projects.\nI Make Sure They Succeed.',
    subheadline:
      'As an execution partner for commercial and luxury fit-out, I bridge the gap between vision and reality. Design intent, budget, and delivery aligned from day one so your project performs the way it was meant to.',
    primaryCta: { label: 'Discuss Your Project', href: '#contact' },
    secondaryCta: { label: 'See How We Work', href: '#process' },
    socialProof: {
      stat1: { value: '16+', label: 'Years delivering commercial & luxury projects in the UAE' },
      stat2: { value: '50+', label: 'Projects managed from concept to handover' },
      stat3: { value: '100%', label: 'Selective. We only take projects we can truly deliver.' },
    },
    availability: 'Now reviewing new project opportunities for H2 2026',
    floatingCard: { title: 'Luxury F&B Concept, Abu Dhabi', metric: 'On-time delivery, 14 weeks' },
    floatingBadge: { label: 'B.Eng', sublabel: 'Project Management' },
  },

  // ── TRUST BAR ────────────────────────────────────────────────────────────
  trustBar: {
    eyebrow: 'Specialising in',
    logos: [
      { name: 'Commercial Fit-Out', abbr: 'FIT' },
      { name: 'MEP Coordination', abbr: 'MEP' },
      { name: 'Luxury Interiors', abbr: 'LUX' },
      { name: 'Development Advisory', abbr: 'DEV' },
      { name: 'Project Controls', abbr: 'PRC' },
    ],
    credentials: [
      'B.Eng Project Management, Rafik Hariri University',
      '16+ Years UAE Construction & Fit-Out',
      'Abu Dhabi Based, Regional Delivery',
      'Execution Partner, Not Just a Contractor',
    ],
  },

  // ── ABOUT ────────────────────────────────────────────────────────────────
  about: {
    eyebrow: 'About Soleiman',
    headline: 'Built for the gap between\nconcept and reality',
    body: [
      'I don\'t design projects. I make sure they succeed in reality. As Founder of GS Innovators, I work closely with investors, business owners, and designers to bring complex commercial and luxury projects into execution with clarity, structure, and precision.',
      'My role is to bridge the gap between concept and reality. Vision, budget, and delivery need to be aligned from day one. Alongside execution, I\'m also involved in the development side of selected projects, giving me a deeper understanding of both the investment perspective and the realities of delivery on site.',
      'At GS Innovators, we approach every project as execution partners, not contractors. We are selective about the projects we take on, focusing on opportunities where we can contribute beyond construction and genuinely influence the overall success of the project.',
    ],
    credentials: [
      { label: 'B.Eng', sublabel: 'Project Management, Rafik Hariri University' },
      { label: '16+', sublabel: 'Years delivering complex fit-out projects' },
      { label: '50+', sublabel: 'High-end commercial & luxury spaces' },
      { label: 'UAE', sublabel: 'Abu Dhabi based, regional reach' },
    ],
    image: '/soleiman-upscaled.jpeg',
    imageAlt: 'Soleiman Ghazzawi, Founder of GS Innovators',
    companyLink: {
      label: 'Explore GS Innovators',
      sublabel: 'See the company behind the work',
      href: 'https://gs-innovators.vercel.app/',
    },
  },

  // ── SERVICES ─────────────────────────────────────────────────────────────
  services: {
    eyebrow: 'How We Work Together',
    headline: 'Three ways to partner\nwith GS Innovators',
    subheadline:
      'Every engagement is tailored to the project. We don\'t apply generic processes to complex spaces. We engage where we can add measurable value.',
    items: [
      {
        icon: 'Target',
        title: 'Turnkey Fit-Out Execution',
        description:
          'End-to-end execution management for commercial and luxury fit-out. We translate design intent into a precisely delivered built environment, with full accountability across every discipline.',
        outcomes: [
          'Design-to-site translation with zero compromise',
          'Full MEP, civil, and finishes coordination',
          'Quality control at every stage of delivery',
          'On-time, on-budget project handover',
        ],
        investment: 'Project-based engagement',
        duration: 'Scope-defined timeline',
        badge: null,
      },
      {
        icon: 'Zap',
        title: 'Project Management & Control',
        description:
          'Structured oversight from early planning through final handover, with strict control over quality, cost, timelines, and full stakeholder coordination across every discipline.',
        outcomes: [
          'Full scope management: fit-out, MEP, civil',
          'Cost and schedule control with live reporting',
          'Stakeholder alignment from planning to close-out',
          'Risk identification and early mitigation',
        ],
        investment: 'Engagement-based fee',
        duration: 'Full project duration',
        badge: 'Core Offering',
      },
      {
        icon: 'Users',
        title: 'Development Advisory',
        description:
          'Strategic input from an operator who understands both the investment perspective and the realities of execution on site. We help investors and owners structure high-value projects correctly from the start.',
        outcomes: [
          'Early-stage feasibility and scope structuring',
          'Budget framework and value engineering',
          'Designer and consultant coordination',
          'Commercial and delivery alignment',
        ],
        investment: 'Advisory retainer',
        duration: 'Project-aligned engagement',
        badge: null,
      },
    ],
  },

  // ── RESULTS ──────────────────────────────────────────────────────────────
  results: {
    eyebrow: 'Track Record',
    headline: 'Execution speaks\nlouder than promises',
    stats: [
      { value: '16+', label: 'Years delivering UAE commercial and luxury projects' },
      { value: '50+', label: 'Projects managed from concept to final handover' },
      { value: '0', label: 'Projects abandoned. We finish what we start.' },
    ],
    caseStudies: [
      {
        company: 'Luxury F&B Concept, Abu Dhabi',
        industry: 'Hospitality Fit-Out',
        challenge:
          'A high-end restaurant interior with a compressed 14-week timeline, complex custom joinery with imported materials, and a client team with no prior construction experience managing the process.',
        result:
          'Delivered on schedule with the full design vision preserved. Managed all procurement, site sequencing, and MEP integration without a single stakeholder escalation from start to handover.',
        metric: '14 Weeks',
        metricLabel: 'on-time delivery, zero compromise',
      },
      {
        company: 'Commercial Office Tower, UAE',
        industry: 'Commercial Fit-Out & MEP',
        challenge:
          'Multi-floor office fit-out with overlapping tenant scopes, conflicting MEP requirements across levels, and a cost envelope that had already overrun significantly under previous project management.',
        result:
          'Restructured the coordination framework, aligned all MEP sub-contractors under one sequencing plan, and delivered the remaining scope within the revised budget. Client confidence restored.',
        metric: 'AED 3.2M',
        metricLabel: 'in cost overrun recovered',
      },
    ],
  },

  // ── TESTIMONIALS ─────────────────────────────────────────────────────────
  testimonials: {
    eyebrow: 'From the People We Work With',
    headline: 'Execution builds trust.\nResults confirm it.',
    items: [
      {
        quote:
          'Soleiman and the GS Innovators team are different from every contractor I\'ve worked with. They understood the design intent from the first meeting and never lost sight of it, even when the site threw challenges at us. The result speaks for itself.',
        name: 'A. Al Mansoori',
        title: 'Investor & Developer',
        company: 'Abu Dhabi, UAE',
        result: 'Luxury hospitality project delivered on schedule',
        avatar: 'https://ui-avatars.com/api/?name=A+Al+Mansoori&background=1C1917&color=D97706&size=128',
      },
      {
        quote:
          'What sets Soleiman apart is that he thinks like an investor, not just a builder. He flagged cost and sequencing risks before they became problems. That kind of thinking saved us both time and significant money on the project.',
        name: 'F. Khalil',
        title: 'Business Owner & Developer',
        company: 'UAE',
        result: 'Cost overrun reversed, project completed cleanly',
        avatar: 'https://ui-avatars.com/api/?name=F+Khalil&background=1C1917&color=D97706&size=128',
      },
      {
        quote:
          'As a designer, I need an execution partner who respects the vision, not one who cuts corners to save a day. GS Innovators delivers exactly that. They communicate clearly, they take ownership, and they deliver what they promise. I recommend them to every client I have in the UAE.',
        name: 'N. Boustany',
        title: 'Interior Design Principal',
        company: 'Beirut / Dubai',
        result: 'Design intent delivered without compromise',
        avatar: 'https://ui-avatars.com/api/?name=N+Boustany&background=1C1917&color=D97706&size=128',
      },
    ],
  },

  // ── PROCESS ──────────────────────────────────────────────────────────────
  process: {
    eyebrow: 'How It Works',
    headline: 'From first conversation\nto successful handover',
    subheadline:
      'A structured process built for complex projects, giving every stakeholder clarity and confidence from day one through final close-out.',
    steps: [
      {
        number: '01',
        title: 'Project Assessment',
        description:
          'A focused conversation to understand your project scope, design intent, budget, and timeline. From there, we determine whether GS Innovators is the right execution partner.',
        duration: '30–60 min',
      },
      {
        number: '02',
        title: 'Scope Definition & Planning',
        description:
          'We go deep before we go to site. Detailed scoping, stakeholder mapping, procurement planning, and sequencing strategy. All of it resolved before a single day is spent on the ground.',
        duration: 'Week 1–2',
      },
      {
        number: '03',
        title: 'Coordinated Execution',
        description:
          'GS Innovators manages every discipline across fit-out, MEP, and civil as one integrated delivery. Daily control of quality, cost, sequence, and team accountability across the full project.',
        duration: 'Full project duration',
      },
      {
        number: '04',
        title: 'Handover & Close-Out',
        description:
          'Structured, documented handover to the agreed standard. We don\'t walk away at the finish line. We ensure the space is delivered and performs exactly as designed.',
        duration: 'Final stage',
      },
    ],
  },

  // ── FAQ ──────────────────────────────────────────────────────────────────
  faq: {
    eyebrow: 'Common Questions',
    headline: 'What you should know\nbefore we connect',
    items: [
      {
        question: 'What types of projects does GS Innovators take on?',
        answer:
          'We focus on high-end commercial and luxury fit-out projects, including hospitality, corporate offices, retail, and mixed-use spaces across the UAE. We also support development-driven projects where execution and investment strategy need to be aligned from the outset. If you\'re unsure whether your project is a fit, let\'s talk. I\'ll give you an honest answer.',
      },
      {
        question: 'How is GS Innovators different from a standard contractor?',
        answer:
          'A contractor delivers what they\'re told. We engage as execution partners. That means bringing early-stage input, identifying scope and cost risks before they become problems, coordinating across all disciplines, and taking accountability for the overall outcome. We are selective precisely because we can only work this way with the right projects.',
      },
      {
        question: 'Do you work with designers, or do you replace them?',
        answer:
          'We work alongside designers, never in place of them. My role is to ensure the design vision is translated into reality without compromise. Designers who work with GS Innovators consistently describe it as one of the most reliable partnerships they\'ve experienced in the UAE market.',
      },
      {
        question: 'How do you control project cost and timeline?',
        answer:
          'Through rigorous upfront scoping, a structured sequencing plan, and live reporting throughout the project. We identify risks before they become cost events, and we maintain direct accountability over every sub-contractor and supplier. Cost and schedule visibility is provided at every stage, not just at milestones.',
      },
      {
        question: 'How selective is GS Innovators with projects?',
        answer:
          'Very. We choose projects where we can deliver at the level we stand for: quality, execution, and long-term value. We would rather deliver fewer projects exceptionally well than take on volume and dilute the outcome. If we take your project, you have our full commitment.',
      },
    ],
  },

  // ── CONTACT / BOOKING ────────────────────────────────────────────────────
  contact: {
    eyebrow: 'Let\'s Talk',
    headline: 'Ready to deliver your project\nat the highest standard?',
    subheadline:
      'Let\'s discuss your project scope, timeline, and objectives. We\'ll assess fit and outline how GS Innovators can add value. No pitch, no pressure.',
    availability: 'Now reviewing new project opportunities for H2 2026',
    responseTime: 'I respond to every inquiry within 24 hours',
    revenueOptions: [
      'AED 500K – AED 2M',
      'AED 2M – AED 10M',
      'AED 10M – AED 50M',
      'AED 50M+',
      'Development / Advisory engagement',
    ],
  },

  // ── UI STRINGS ───────────────────────────────────────────────────────────
  // Hardcoded text inside components — change here for each locale
  ui: {
    dir: 'ltr' as 'ltr' | 'rtl',
    // About floating badge — uses credentials[1]
    aboutBadgeIndex: 1,
    // Results case study labels
    caseChallenge: 'The Challenge',
    caseResult: 'The Result',
    // Process bottom strip
    processCtaTitle: 'Ready to start with Step 01?',
    processCtaSubtitle: 'The first conversation is free, focused, and no longer than an hour.',
    processCtaButton: 'Discuss Your Project',
    // FAQ bottom CTA
    faqStillHaveQuestions: 'Have a question not covered here?',
    faqCtaLink: 'Reach out directly. I read every message.',
    // Contact form
    contactTrustSignals: [
      'Response within 24 hours',
      'No obligation, no pitch',
      'Focused conversation, no longer than an hour',
    ],
    formTitle: 'Tell Us About Your Project',
    formSubtitle: 'Share a few details and Soleiman will follow up within 24 hours to discuss fit and next steps.',
    formName: 'Full Name',
    formEmail: 'Email Address',
    formCompany: 'Company Name',
    formBudget: 'Project Budget Range',
    formBudgetPlaceholder: 'Select a range…',
    formMessage: 'Tell us about your project',
    formMessagePlaceholder: 'Describe your project: type, location, scope, timeline, and any specific challenges you\'re facing.',
    formSubmit: 'Send My Request',
    formDisclaimer: 'No pressure, no generic pitch. Soleiman reviews every inquiry personally.',
    formSuccessTitle: 'Request received!',
    formSuccessMessage: 'I\'ll review your message and reply within 24 hours with available times for a call.',
    // Footer
    footerCredit: 'Built for professionals who deliver high-value projects.',
  },

  // ── FOOTER ───────────────────────────────────────────────────────────────
  footer: {
    tagline: 'Precision execution for high-value commercial and luxury projects across the UAE.',
    links: [
      { label: 'GS Innovators ↗', href: 'https://gs-innovators.vercel.app/' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/soleiman-ghazzawi' },
      { label: 'WhatsApp', href: 'https://wa.me/971506890569' },
      { label: 'Privacy Policy', href: '/privacy' },
    ],
    copyright: '© 2026 GS Innovators. All rights reserved.',
  },
}

export type Config = typeof config
