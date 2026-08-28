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
    tagline: 'Graphic Designer · UI/UX · Developer',
    subTagline:
      'Designer & developer with a focus on clean digital experiences',
    scrollLabel: 'Scroll',
  },
  about: {
    eyebrow: '(Hi, i am)',
    heading: 'Christabel Aurelia Rufana',
    paragraphs: [
      'Information Systems student and UI/UX Designer who builds end-to-end digital products — from user research and wireframes in Figma to functional, working code in Laravel and HTML/CSS.',
      "I've designed and developed real systems used in production, including HOZOF, a hotel food-ordering platform, and HERO, an e-commerce site built solo from layout to database. Alongside coursework projects, I bring the same process to every product: understand the problem, design the solution, ship it.",
      'Currently studying at Universitas BSI Tasikmalaya, actively involved in campus organizations, and open to UI/UX Design, Graphic Design, or Front-End Developer roles — including remote opportunities.',
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
      eyebrow: 'Selected work',
      title: 'Featured Projects',
      subtitle:
        'Real products shipped — from research and design to working code.',
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
      viewGithub: 'View Code on Github',
      portfolioTitle: (number) => `Project Portfolio (${number})`,
    },
    featured: {
      hozof: {
        label: 'UI/UX Design & Development — Group Project — IP-Registered (HKI)',
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
        label: 'UI/UX Design & Full-Stack Development — Group Project — 2026',
        problem:
          "My family's grocery store (Toko Hero) was already listed on Shopee, but marketplace admin fees cut significantly into profit margins. To keep full margins, we built a dedicated e-commerce website exclusively for Toko Hero, serving local in-city customers (delivery limited to within the city).",
        process:
          'Sketched a rough homepage layout in Figma, then built the full system as a team — database, front-end, and back-end. For buyers: product comparison, store pickup or local delivery options, photo-and-comment ratings, wishlist with discount notifications, automatic WhatsApp order status updates. For the seller side: new-order notifications, full CRUD for brands/products/categories, ratings and best-seller analytics, and a monthly income summary downloadable as PDF.',
        result:
          'A dedicated e-commerce platform that lets Toko Hero sell online locally without losing margin to marketplace admin fees.',
      },
    },
    coursework: {
      basain: {
        badge: 'Jul 2024 – Aug 2024 · Solo Project',
        description:
          'Designed a mobile-friendly UI/UX for an online phone case store, from wireframe to high-fidelity prototype in Figma, focused on a smooth and responsive shopping flow.',
      },
      ruangbonsai: {
        badge: 'Semester 4 · Group Project',
        description:
          'Designed an e-commerce platform for bonsai plants and care equipment, balancing aesthetic presentation with straightforward browsing and checkout.',
      },
      ihealth: {
        badge: 'Semester 3 · Group Project',
        description:
          'Designed a healthcare information system with role-based dashboards for doctors, patients, and admins, each tailored to different tasks and permissions.',
      },
      fzt: {
        badge: 'Semester 2 · Group Project',
        description:
          'Designed a tourism website for Tasikmalaya destinations with an interactive prototype visualizing the full user journey, from destination discovery to trip planning.',
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
        detail: 'GPA 3.91/4.00',
      },
      sma: {
        degree: 'Science & Social Studies',
        detail: null,
      },
    },
  },
  experience: {
    eyebrow: 'Career',
    title: 'Work Experience',
    items: {
      horison: {
        period: 'Aug–Oct 2025 (3 months)',
        description:
          'Handled accounting and logistics operations during internship. Independently designed and developed HOZOF, a QR-based food ordering system now used by hotel staff — see Featured Project 01.',
      },
      basain: {
        period: 'Jan–Aug 2024 (8 months) · Remote',
        description:
          "Designed the UI/UX for BASAIN's mobile-friendly e-commerce site in Figma, and managed social media content and customer engagement remotely.",
      },
    },
  },
  contact: {
    heading: 'Thank you for exploring this portfolio',
    subtext:
      "I'm currently open to UI/UX Design, Graphic Design, and Front-End roles — let's talk.",
    copyright: `© ${new Date().getFullYear()} Christabel Aurelia R. All rights reserved.`,
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
