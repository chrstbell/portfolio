export default {
  nav: {
    links: [
      { label: 'About', href: '#about' },
      { label: 'Expertise', href: '#expertise' },
      { label: 'Projects', href: '#projects' },
      { label: 'Graphic Design', href: '#graphic-design' },
      { label: 'Education', href: '#education' },
      { label: 'Certificates', href: '#certificates' },
      { label: 'Experience', href: '#experience' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  hero: {
    greeting: "Hi, I'm Christabel Aurelia Rufana",
    avatarUrl: `${import.meta.env.BASE_URL}profile.jpg`,
    tagline: 'Graphic Designer · UI/UX · Developer',
    subTagline:
      'Designer & Developer with a focus on clean digital experiences',
    bio: 'Final-year Information Systems student at Universitas BSI Tasikmalaya, and a UI/UX Designer & Front-End Developer who builds digital products from research to code. I also stay active doing visual design for campus organizations and my own small business.',
    badge1: 'Based in Tasikmalaya, Indonesia',
    badge2: 'Open to remote or on-site work',
    scrollLabel: 'Scroll',
  },
  about: {
    eyebrow: '(Hi, i am)',
    heading: 'About Me',
    paragraphs: [
      'Information Systems student and UI/UX Designer who builds digital products end-to-end — from user research and wireframes in Figma to functioning code with Laravel and HTML/CSS.',
      'My interest in design has been there since a long time ago, and it became more focused on UI/UX while working as a Social Media Officer & UI/UX Designer at Basain, where I got my first challenge designing their website from scratch. That experience made me even more certain about pursuing and continuing to learn deeper in UI/UX and Front-End Development.',
      'Since then, I have designed and developed HOZOF, a hotel food-ordering platform that is officially registered under Indonesia HKI (intellectual property registration), as well as HERO, an e-commerce site I built myself from the interface down to the database. I work with the same process on every project: understand the problem, design the solution, then ship it.',
      'Currently studying at Universitas BSI Tasikmalaya, previously active in campus organizations, and open to UI/UX Design, Graphic Design, or Front-End Developer roles — on-site or remote.',
    ],
    profileAlt:
      'Portrait photo of Christabel Aurelia Rufana, UI/UX Designer and Front-End Developer',
  },
  expertise: {
    eyebrow: 'What I do',
    title: 'Areas of Expertise',
    subtitle:
      'From pixels to production — design and build with the same care.',
    areas: {
      'ui-ux': {
        skills: [
          'Figma (wireframing → high-fidelity prototyping)',
          'User Flow Design',
          'Usability-focused Design',
        ],
      },
      frontend: {
        skills: ['HTML', 'CSS', 'PHP', 'MySQL', 'Laravel', 'Git/GitHub'],
      },
      visual: {
        skills: [
          'Canva',
          'Brand Asset Design',
          'Menu & Product Visual Design',
        ],
      },
      workflow: {
        skills: [
          'AI-assisted development (design-to-code acceleration)',
          'Cross-team remote collaboration',
        ],
      },
    },
  },
  projects: {
    featuredSection: {
      title: 'Projects',
      subtitle:
        'Real projects that are actually built — from research and design to working code.',
    },
    courseworkSection: {
      eyebrow: 'Coursework',
      title: 'UI/UX Coursework Projects',
      subtitle: null,
    },
    labels: {
      problem: 'Problem',
      process: 'Process',
      versionHistory: 'Version History',
      result: 'Result',
      viewFigma: 'View Prototype on Figma',
      viewGithub: 'View Demo Project',
      portfolioTitle: (number) => `Project Portfolio (${number})`,
    },
    featured: {
      hozof: {
        label: 'Full-Stack Development — Group Project — IP-Registered (HKI) — 2026',
        problem:
          'Hotel guests previously had to call the front desk to order food — slow, prone to miscommunication, and adding workload to staff during busy hours.',
        process:
          'Designed the full user flow and interface in Figma (menu browsing, cart, order tracking), then built the working system using Laravel and MySQL. Guests order via QR code at their room — no app download, no phone call needed.',
        versions: [
          {
            title: 'v1 — HoriFood (PKL, Aug–Oct 2025)',
            description:
              "core ordering flow, real-time F&B dashboard, admin panel, auto-logout for data security. Delivered with full handover and training for the Hotel's IT Head and General Manager.",
          },
          {
            title: 'v2 — HOZOF (Apr–May 2026)',
            description:
              'added order cancellation and guest rating features, refined outstanding bugs from v1.',
          },
        ],
        result:
          "Adopted for active use by hotel staff. Both HoriFood and HOZOF are registered under Indonesia's Intellectual Property (HKI) protection.",
      },
      hero: {
        label: 'Full-Stack Development — Group Project — 2026',
        problem:
          "My family's grocery store (Toko Hero) was already listed on Shopee, but marketplace admin fees cut significantly into profit margins. To keep full margins, we built a dedicated e-commerce website exclusively for Toko Hero, serving local in-city customers (delivery limited to within the city).",
        process:
          'Sketched a rough homepage layout in Figma, then built the full system as a team — database, front-end, and back-end. For buyers: a 3-step checkout (store pickup or fixed-rate GoSend delivery, cash/bank transfer/QRIS payment with proof upload), comparison of up to 2 products, a wishlist with price-drop and back-in-stock alerts, and photo reviews with a like/dislike vote system, open only to verified buyers within 24 hours of order completion. For sellers: a real-time dashboard with sound alerts for new orders, full CRUD for products/categories/brands, flexible promo logic (percentage discount, nominal discount, and buy-one-get-one), product performance insights, and a financial report with net profit calculation exportable to PDF. Order status updates and OTP login both run through WhatsApp (via Fonnte), alongside standard email login.',
        result:
          'A dedicated e-commerce platform that lets Toko Hero sell online locally without losing margin to marketplace admin fees.',
      },
      laundry: {
        label: 'Redesign & Feature Enhancement — Thesis Comparison Project — 2026',
        attributionNote:
          'The base system was built by a different student group as a comparison subject for my thesis (HERO vs LAUNDRY). The section below describes my specific contributions: a full UI/UX redesign, new features, and improvements to existing features.',
        problem:
          'For a thesis comparison between the HERO and LAUNDRY systems, the existing laundry system still used a generic admin template (default AdminLTE) and lacked several important features — such as member subscription management, QRIS payment verification, structured stain/damage reporting, and a customer loyalty system.',
        process:
          'Redesigned the entire interface from a generic template into a consistent, modern design across all pages (admin & member). Added new features: subscription management (Bronze/Silver/Gold tiers with discounts and priority service), QRIS payment verification, a Group Wash/split-bill feature with invite codes, structured stain reports with photos and severity levels, a rating dashboard with statistics, a points-streak-voucher milestone system (member loyalty gamification), a 6-stage laundry status tracking timeline for members, and automatic WhatsApp notifications (via Fontee API) on transaction status changes. Also improved several existing features: transaction history (split into 3 status tables with period filters), the payment modal (real-time discount breakdown and change calculation), and replaced all default JS confirmation dialogs with styled modals.',
        result:
          'A significantly more complete and professional system compared to the original version, with customer loyalty gamification (points, streaks, levels, vouchers), full price transparency for members, and more efficient admin operations — serving as a solid comparison point against the HERO system in my thesis.',
      },
    },
    coursework: {
      basain: {
        badge: 'Jul 2024 – Aug 2024 · Solo Project',
        description:
          'Designed end-to-end UI/UX for BASAIN, a mobile e-commerce platform for a phone case store — my first project in UI/UX. Covered the complete user flow from splash screen, login, homepage, product categories, and cart, to checkout and payment, taking it from wireframes to high-fidelity prototypes in Figma. Focused on creating an intuitive shopping flow with smooth, responsive mobile navigation.',
      },
      ruangbonsai: {
        badge: 'Semester 4 · Group Project',
        description:
          'Designed end-to-end UI/UX for RuangBonsai, an e-commerce platform for bonsai plants and care equipment — a semester 4 group project where I served as the sole UI/UX Designer. Took the design from wireframes to high-fidelity prototypes in Figma, covering the full flow from product browsing to checkout, with a focus on balancing aesthetic product presentation with easy shopping navigation.',
      },
      ihealth: {
        badge: 'Semester 3 · Group Project',
        description:
          'Designed end-to-end UI/UX for i-Health, a role-based healthcare information system — a semester 3 group project where I served as the sole UI/UX Designer. Took the design from wireframes to high-fidelity prototypes in Figma, building distinct dashboards for doctors, patients, and admins, each tailored to its specific tasks and access rights to ensure a relevant experience for every role.',
      },
      fzt: {
        badge: 'Semester 2 · Group Project',
        description:
          'Designed end-to-end UI/UX for FZT.com, a tourism website for Tasikmalaya destinations — a semester 2 group project where I served as the sole UI/UX Designer. Took the design from wireframes to interactive prototypes in Figma, visualizing the full user journey from discovering destinations to planning a trip, with a focus on an intuitive, easy-to-follow exploration flow.',
      },
    },
  },
  visualWorks: {
    eyebrow: 'Visual work',
    title: 'Graphic Design & Content Work',
    subtitle:
      'Visual design work from my campus organization experience and personal business.',
    workCount: (count) => `${count} works`,
    galleryLabel: 'Design gallery',
    backToGallery: 'Back to gallery',
    categories: {
      Sertifikat: 'Certificate',
      'Postingan Instagram': 'Instagram Post',
      'Banner Speech English': 'English Speech Banner',
      'Penanda Lantai': 'Floor Marker',
      'Papan Nama Ruangan': 'Room Name Sign',
      'Name Tag': 'Name Tag',
      'Proposal Bisnis': 'Business Proposal',
      'Poster English Competition': 'English Competition Poster',
      'Video Recap Event': 'Event Recap Video',
      Banner: 'Banner',
      'Postingan Instagram — Proses Pemilihan': 'Instagram Post — Selection Process',
      'Postingan Instagram — Pengumuman Terpilih':
        'Instagram Post — Election Announcement',
      'Kertas Coblos': 'Voting Ballot',
      'Template Live Report': 'Live Report Template',
      'Cover Kertas MC': 'MC Script Cover',
      'Flyer WhatsApp': 'WhatsApp Flyer',
      'Banner Pagar': 'Fence Banner',
      'Banner Photo Booth': 'Photo Booth Banner',
      'Template Story Instagram': 'Instagram Story Template',
      'Label Piala': 'Trophy Label',
      'Name Tag Panitia': 'Committee Name Tag',
      'Name Tag Guest Star': 'Guest Star Name Tag',
      Stiker: 'Sticker',
      'Stiker Juara di Piala': 'Champion Trophy Sticker',
      Tiket: 'Ticket',
      'Desain Story Instagram': 'Instagram Story Design',
      'Maskot Brand (dibuat dengan AI)': 'Brand Mascot (AI-generated)',
    },
  },
  certificates: {
    sectionTitle: 'Certificates & IP Registration',
    certificatesLabel: 'Certificates',
    hkiLabel: 'Intellectual Property',
    hkiText:
      "HoriFood & HOZOF are registered under Indonesia's Intellectual Property (HKI) protection",
    pressReleaseLink: 'Read HOZOF Press Release →',
    viewCertificate: 'View certificate',
    categoryLabels: {
      training: 'Training',
      competency: 'Competency',
    },
  },
  education: {
    eyebrow: 'Background',
    title: 'Education',
    items: {
      bsi: {
        degree: "Bachelor's Degree, Information Systems",
        detail: 'GPA 3.92/4.00',
      },
      sma: {
        degree: 'Science & Social Studies',
        detail: null,
      },
    },
  },
  experience: {
    title: 'Work Experience',
    items: {
      horison: {
        period: 'Aug–Oct 2025 (3 months) · On-site',
        description:
          'Handled accounting and logistics operations during internship. Independently designed and developed HOZOF, a QR-based food ordering system now used by hotel staff.',
      },
      basain: {
        period: 'Jan–Aug 2024 (8 months) · Remote',
        description:
          "Designed the UI/UX for BASAIN's mobile-friendly e-commerce site in Figma, and managed social media and customer engagement remotely.",
      },
    },
  },
  organizations: {
    title: 'Organizations',
    campusLabel: 'Campus Organizations',
    committeeLabel: 'Event Committees',
  },
  contact: {
    heading: 'Thank you for exploring this portfolio',
    subtext:
      "I'm currently open to UI/UX Design, Graphic Design, and Front-End roles — let's talk.",
  },
  photoStack: {
    hint: 'Click photo to see more',
  },
  common: {
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    closeModal: 'Close modal',
  },
}
