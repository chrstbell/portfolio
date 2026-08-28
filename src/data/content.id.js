export default {
  nav: {
    links: [
      { label: 'Tentang', href: '#about' },
      { label: 'Keahlian', href: '#expertise' },
      { label: 'Proyek', href: '#projects' },
      { label: 'Desain Grafis', href: '#graphic-design' },
      { label: 'Pendidikan', href: '#education' },
      { label: 'Sertifikat', href: '#certificates' },
      { label: 'Pengalaman', href: '#experience' },
      { label: 'Kontak', href: '#contact' },
    ],
  },
  hero: {
    tagline: 'Desainer Grafis · UI/UX · Developer',
    subTagline:
      'Desainer & developer dengan fokus pada pengalaman digital yang bersih dan rapi',
    scrollLabel: 'Gulir',
  },
  about: {
    eyebrow: '(Hai, saya)',
    heading: 'Christabel Aurelia Rufana',
    paragraphs: [
      'Mahasiswa Sistem Informasi dan UI/UX Designer yang membangun produk digital secara end-to-end — mulai dari riset pengguna dan wireframe di Figma hingga kode yang benar-benar berfungsi dengan Laravel dan HTML/CSS.',
      'Saya telah merancang dan mengembangkan sistem yang benar-benar digunakan di dunia nyata, termasuk HOZOF, platform pemesanan makanan hotel, dan HERO, situs e-commerce yang saya bangun sendiri dari tampilan hingga database. Selain proyek perkuliahan, saya menerapkan proses yang sama di setiap produk: memahami masalah, merancang solusi, lalu merilisnya.',
      'Saat ini kuliah di Universitas BSI Tasikmalaya, aktif di organisasi kampus, dan terbuka untuk peran UI/UX Design, Graphic Design, atau Front-End Developer — termasuk kerja remote.',
    ],
    profileAlt:
      'Foto portrait Christabel Aurelia Rufana, UI/UX Designer dan Front-End Developer',
  },
  expertise: {
    eyebrow: 'Yang saya lakukan',
    title: 'Bidang Keahlian',
    subtitle:
      'Dari pixel hingga produksi — merancang dan membangun dengan perhatian yang sama.',
    areas: {
      'ui-ux': {
        skills: [
          'Figma (wireframing → prototipe high-fidelity)',
          'Desain Alur Pengguna',
          'Desain berfokus pada usability',
        ],
      },
      frontend: {
        skills: ['HTML', 'CSS', 'PHP', 'MySQL', 'Laravel', 'Git/GitHub'],
      },
      visual: {
        skills: [
          'Canva',
          'Desain Aset Brand',
          'Desain Visual Menu & Produk',
        ],
      },
      workflow: {
        skills: [
          'Pengembangan berbantuan AI (percepatan design-to-code)',
          'Kolaborasi remote lintas tim',
        ],
      },
    },
  },
  projects: {
    featuredSection: {
      eyebrow: 'Karya terpilih',
      title: 'Proyek Unggulan',
      subtitle:
        'Produk nyata yang dirilis — dari riset dan desain hingga kode yang berfungsi.',
    },
    courseworkSection: {
      eyebrow: 'Proyek perkuliahan',
      title: 'Project UI/UX (03)',
      subtitle:
        'Proyek perkuliahan yang mengeksplorasi berbagai jenis produk dan kebutuhan pengguna.',
    },
    labels: {
      problem: 'Masalah',
      process: 'Proses',
      versionHistory: 'Riwayat Versi',
      result: 'Hasil',
      viewFigma: 'Lihat Prototipe di Figma',
      viewGithub: 'Lihat Kode di Github',
      portfolioTitle: (number) => `Project Portfolio (${number})`,
    },
    featured: {
      hozof: {
        label: 'Desain & Pengembangan UI/UX — Proyek Kelompok — Terdaftar HKI',
        problem:
          'Sebelumnya, tamu hotel harus menelepon resepsionis untuk memesan makanan — lambat, rawan salah komunikasi, dan menambah beban staf saat jam sibuk.',
        process:
          'Merancang alur pengguna dan antarmuka lengkap di Figma (jelajah menu, keranjang, pelacakan pesanan), lalu membangun sistem kerjanya dengan Laravel dan MySQL. Tamu memesan lewat kode QR di kamar mereka — tanpa perlu unduh aplikasi, tanpa perlu telepon.',
        versions: [
          {
            title: 'v1 — HoriFood (PKL, Agu–Okt 2025)',
            description:
              'alur pemesanan inti, dashboard F&B real-time, panel admin, auto-logout demi keamanan data. Diserahkan lengkap dengan pelatihan untuk Kepala IT dan General Manager hotel.',
          },
          {
            title: 'v2 — HOZOF (Apr–Mei 2026)',
            description:
              'menambahkan fitur pembatalan pesanan dan rating tamu, memperbaiki bug yang tersisa dari v1.',
          },
        ],
        result:
          'Digunakan secara aktif oleh staf hotel. HoriFood dan HOZOF sama-sama terdaftar di bawah perlindungan Hak Kekayaan Intelektual (HKI) Indonesia.',
      },
      hero: {
        label: 'Desain UI/UX & Pengembangan Full-Stack — Proyek Kelompok — 2026',
        problem:
          'Toko kelontong keluarga saya (Toko Hero) sudah terdaftar di Shopee, tapi biaya admin marketplace cukup memotong margin keuntungan — misalnya, produk seharga Rp20.000 tidak sepenuhnya masuk ke penjual setelah potongan Shopee. Supaya margin tetap utuh, kami membangun website e-commerce khusus untuk Toko Hero, melayani pelanggan lokal dalam kota (pengiriman terbatas dalam kota).',
        process:
          'Membuat sketsa layout homepage kasar di Figma, lalu membangun sistem penuhnya sebagai tim — database, front-end, dan back-end. Untuk pembeli: perbandingan produk, opsi ambil di toko atau pengiriman lokal, rating foto-dan-komentar, wishlist dengan notifikasi diskon, dan update status pesanan otomatis via WhatsApp. Untuk sisi penjual: notifikasi pesanan baru, CRUD penuh untuk brand/produk/kategori, analitik rating dan produk terlaris, serta ringkasan pendapatan bulanan yang bisa diunduh sebagai PDF.',
        result:
          'Platform e-commerce khusus yang membuat Toko Hero bisa berjualan online secara lokal tanpa kehilangan margin ke biaya admin marketplace.',
      },
    },
    coursework: {
      basain: {
        badge: 'Jul 2024 – Agu 2024 · Proyek Solo',
        description:
          'Merancang UI/UX ramah-mobile untuk toko casing HP online, dari wireframe hingga prototipe high-fidelity di Figma, fokus pada alur belanja yang mulus dan responsif.',
      },
      ruangbonsai: {
        badge: 'Semester 4 · Proyek Kelompok',
        description:
          'Merancang platform e-commerce untuk tanaman bonsai dan peralatan perawatannya, menyeimbangkan presentasi estetik dengan kemudahan menjelajah dan checkout.',
      },
      ihealth: {
        badge: 'Semester 3 · Proyek Kelompok',
        description:
          'Merancang sistem informasi kesehatan dengan dashboard berbasis peran untuk dokter, pasien, dan admin, masing-masing disesuaikan dengan tugas dan aksesnya.',
      },
      fzt: {
        badge: 'Semester 2 · Proyek Kelompok',
        description:
          'Merancang website wisata untuk destinasi Tasikmalaya dengan prototipe interaktif yang memvisualisasikan seluruh perjalanan pengguna, dari menemukan destinasi hingga merencanakan trip.',
      },
    },
  },
  visualWorks: {
    eyebrow: 'Karya visual',
    title: 'Desain Grafis & Konten',
    subtitle:
      'Karya desain visual dari pengalaman organisasi kampus dan bisnis pribadi saya.',
    workCount: (count) => `${count} karya`,
    galleryLabel: 'Galeri desain',
    backToGallery: 'Kembali ke galeri',
    categories: {
      Sertifikat: 'Sertifikat',
      'Postingan Instagram': 'Postingan Instagram',
      'Banner Speech English': 'Banner Speech English',
      'Penanda Lantai': 'Penanda Lantai',
      'Papan Nama Ruangan': 'Papan Nama Ruangan',
      'Name Tag': 'Name Tag',
      'Proposal Bisnis': 'Proposal Bisnis',
      'Poster English Competition': 'Poster English Competition',
      'Video Recap Event': 'Video Recap Event',
      Banner: 'Banner',
      'Postingan Instagram — Proses Pemilihan':
        'Postingan Instagram — Proses Pemilihan',
      'Postingan Instagram — Pengumuman Terpilih':
        'Postingan Instagram — Pengumuman Terpilih',
      'Kertas Coblos': 'Kertas Coblos',
      'Template Live Report': 'Template Live Report',
      'Cover Kertas MC': 'Cover Kertas MC',
      'Flyer WhatsApp': 'Flyer WhatsApp',
      'Banner Pagar': 'Banner Pagar',
      'Banner Photo Booth': 'Banner Photo Booth',
      'Template Story Instagram': 'Template Story Instagram',
      'Label Piala': 'Label Piala',
      'Name Tag Panitia': 'Name Tag Panitia',
      'Name Tag Guest Star': 'Name Tag Guest Star',
      Stiker: 'Stiker',
      'Stiker Juara di Piala': 'Stiker Juara di Piala',
      Tiket: 'Tiket',
      'Desain Story Instagram': 'Desain Story Instagram',
      'Maskot Brand (dibuat dengan AI)': 'Maskot Brand (dibuat dengan AI)',
    },
  },
  certificates: {
    sectionTitle: 'Sertifikat & HKI',
    certificatesLabel: 'Sertifikat',
    hkiLabel: 'Hak Kekayaan Intelektual',
    hkiText:
      'HoriFood & HOZOF terdaftar di bawah perlindungan Hak Kekayaan Intelektual (HKI) Indonesia',
    pressReleaseLink: 'Baca Press Release HOZOF →',
    viewCertificate: 'Lihat sertifikat',
    categoryLabels: {
      training: 'Pelatihan',
      competency: 'Kompetensi',
    },
  },
  education: {
    eyebrow: 'Latar belakang',
    title: 'Pendidikan',
    items: {
      bsi: {
        degree: 'Gelar Sarjana, Sistem Informasi',
        detail: 'IPK 3.91/4.00',
      },
      sma: {
        degree: 'IPS',
        detail: null,
      },
    },
  },
  experience: {
    eyebrow: 'Karier',
    title: 'Pengalaman Kerja',
    items: {
      horison: {
        period: 'Agu–Okt 2025 (3 bulan)',
        description:
          'Menangani operasional akuntansi dan logistik selama magang. Secara mandiri merancang dan mengembangkan HOZOF, sistem pemesanan makanan berbasis QR yang kini digunakan staf hotel — lihat Proyek Unggulan 01.',
      },
      basain: {
        period: 'Jan–Agu 2024 (8 bulan) · Remote',
        description:
          'Merancang UI/UX untuk situs e-commerce mobile-friendly BASAIN di Figma, serta mengelola konten media sosial dan interaksi pelanggan secara remote.',
      },
    },
  },
  contact: {
    heading: 'Terima kasih sudah menjelajahi portofolio ini',
    subtext:
      'Saat ini saya terbuka untuk peran UI/UX Design, Graphic Design, dan Front-End — yuk ngobrol.',
    copyright: `© ${new Date().getFullYear()} Christabel Aurelia R. All rights reserved.`,
  },
  photoStack: {
    hint: 'Klik foto untuk lihat lainnya',
  },
  common: {
    openMenu: 'Buka menu',
    closeMenu: 'Tutup menu',
    closeModal: 'Tutup modal',
  },
}
