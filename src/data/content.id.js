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
    greeting: 'Halo, saya Christabel Aurelia Rufana',
    avatarUrl: `${import.meta.env.BASE_URL}profile.jpg`,
    tagline: 'Desainer Grafis · UI/UX · Developer',
    subTagline:
      'Desainer & developer dengan fokus pada pengalaman digital yang bersih dan rapi',
    bio: 'Mahasiswa Sistem Informasi tingkat akhir di Universitas BSI Tasikmalaya, sekaligus UI/UX Designer & Front-End Developer yang membangun produk digital dari riset sampai kode. Saya juga aktif membuat desain visual untuk organisasi kampus dan bisnis pribadi.',
    badge1: 'Berdomisili di Tasikmalaya, Indonesia',
    badge2: 'Terbuka untuk kerja remote maupun on-site',
    scrollLabel: 'Gulir',
  },
  about: {
    eyebrow: '(Hai, saya)',
    heading: 'Tentang Saya',
    paragraphs: [
      'Mahasiswa Sistem Informasi dan UI/UX Designer yang membangun produk digital secara end-to-end — mulai dari riset pengguna dan wireframe di Figma hingga kode yang benar-benar berfungsi dengan Laravel dan HTML/CSS.',
      'Ketertarikan saya pada desain sudah ada sejak lama, dan semakin terarah saat bekerja sebagai Social Media Officer & UI/UX Designer di Basain, tempat saya mendapat tantangan pertama merancang desain website mereka dari nol. Pengalaman itu membuat saya semakin yakin ingin terjun dan terus belajar lebih dalam di bidang UI/UX maupun Front-End Development.',
      'Sejak itu, saya telah merancang dan mengembangkan HOZOF, platform pemesanan makanan hotel yang telah terdaftar HKI, serta HERO, situs e-commerce yang saya bangun sendiri dari tampilan hingga database. Saya terbiasa bekerja dengan proses yang sama di setiap proyek: memahami masalah pengguna, merancang solusi, lalu merilisnya.',
      'Saat ini kuliah di Universitas BSI Tasikmalaya, pernah aktif di organisasi kampus, dan terbuka untuk peran UI/UX Design, Graphic Design, atau Front-End Developer — baik kerja on-site maupun remote.',
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
      title: 'Proyek',
      subtitle:
        'Proyek yang dibuat dengan nyata — dari riset dan desain hingga kode yang berfungsi.' ,
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
      viewGithub: 'Lihat Demo Project',
      portfolioTitle: (number) => `Project Portfolio (${number})`,
    },
    featured: {
      hozof: {
        label: 'Pengembangan Full-Stack — Proyek Kelompok — Terdaftar HKI — 2026',
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
        label: 'Pengembangan Full-Stack — Proyek Kelompok — 2026',
        problem:
          'Toko kelontong keluarga saya (Toko Hero) sudah terdaftar di Shopee, tapi biaya admin marketplace cukup memotong margin keuntungan — misalnya, produk seharga Rp20.000 tidak sepenuhnya masuk ke penjual setelah potongan Shopee. Supaya margin tetap utuh, kami membangun website e-commerce khusus untuk Toko Hero, melayani pelanggan lokal dalam kota (pengiriman terbatas dalam kota).',
        process:
          'Membuat sketsa layout homepage kasar di Figma, lalu membangun sistem penuhnya sebagai tim — database, front-end, dan back-end. Untuk pembeli: checkout 3 langkah (ambil di toko atau pengiriman GoSend dengan ongkir tetap, pembayaran tunai/transfer bank/QRIS dengan unggah bukti), perbandingan hingga 2 produk, wishlist dengan notifikasi harga turun dan stok tersedia kembali, serta ulasan foto dengan sistem vote like/dislike yang hanya bisa diisi pembeli terverifikasi dalam 24 jam setelah pesanan selesai. Untuk penjual: dashboard real-time dengan notifikasi suara untuk pesanan baru, CRUD penuh untuk produk/kategori/merek, logika promo fleksibel (diskon persen, nominal, dan beli-1-gratis-1), insight performa produk, serta laporan keuangan dengan perhitungan laba bersih yang bisa diekspor ke PDF. Update status pesanan dan login OTP berjalan lewat WhatsApp (via Fonnte), selain login email standar.',
        result:
          'Platform e-commerce khusus yang membuat Toko Hero bisa berjualan online secara lokal tanpa kehilangan margin ke biaya admin marketplace.',
      },
      laundry: {
        label: 'Redesign & Pengembangan Fitur — Proyek Perbandingan Skripsi',
        attributionNote:
          'Sistem dasar aplikasi ini dibangun oleh kelompok lain sebagai bahan perbandingan skripsi saya (HERO vs LAUNDRY). Bagian di bawah ini menjelaskan kontribusi spesifik yang saya kerjakan: redesain UI/UX menyeluruh, fitur baru, dan perbaikan fitur yang sudah ada.',
        problem:
          'Untuk kebutuhan perbandingan skripsi antara sistem HERO dan LAUNDRY, sistem laundry yang sudah ada masih memakai tampilan template admin generik (AdminLTE bawaan) dan sejumlah fitur penting belum tersedia — seperti manajemen langganan member, verifikasi pembayaran QRIS, laporan kerusakan/noda cucian terstruktur, dan sistem loyalitas pelanggan.',
        process:
          'Merombak seluruh tampilan dari template generik menjadi desain modern yang konsisten di semua halaman (admin & member). Menambahkan fitur baru: manajemen langganan (paket Bronze/Silver/Gold dengan diskon & prioritas), verifikasi pembayaran QRIS, fitur Group Cuci/split bill dengan kode undangan, laporan noda dengan foto & tingkat keparahan, dashboard rating & statistik, sistem poin-streak-voucher milestone (gamifikasi loyalitas member), tracking timeline status cucian 6 tahap untuk member, serta notifikasi WhatsApp otomatis (via Fontee API) saat status transaksi berubah. Juga memperbaiki beberapa fitur yang sudah ada: riwayat transaksi (dipecah 3 tabel status, filter periode), payment modal (breakdown diskon & kembalian real-time), dan mengganti seluruh dialog konfirmasi JS bawaan menjadi modal yang lebih rapi.',
        result:
          'Sistem yang jauh lebih lengkap dan profesional dibanding versi awal, dengan gamifikasi loyalitas pelanggan (poin, streak, level, voucher), transparansi harga penuh untuk member, dan operasional yang lebih efisien untuk admin — menjadi pembanding yang layak terhadap sistem HERO dalam skripsi saya.',
      },
    },
    coursework: {
      basain: {
        badge: 'Jul 2024 – Agu 2024 · Proyek Solo',
        description:
          'Merancang UI/UX end-to-end untuk BASAIN, platform e-commerce mobile toko casing HP — proyek pertama saya di bidang UI/UX. Mencakup keseluruhan alur pengguna mulai dari splash screen, login, homepage, kategori produk, keranjang, hingga checkout dan pembayaran, dari tahap wireframe hingga prototipe high-fidelity di Figma. Berfokus pada alur belanja yang intuitif dan pengalaman navigasi yang mulus untuk perangkat mobile.',
      },
      ruangbonsai: {
        badge: 'Semester 4 · Proyek Kelompok',
        description:
          'Merancang UI/UX end-to-end untuk RuangBonsai, platform e-commerce tanaman bonsai dan peralatan perawatannya — proyek kelompok mata kuliah semester 4, dengan peran penuh sebagai UI/UX Designer. Dari wireframe hingga prototipe high-fidelity di Figma, mencakup alur menjelajah katalog produk hingga checkout, dengan fokus menyeimbangkan presentasi estetik produk dan kemudahan navigasi belanja.',
      },
      ihealth: {
        badge: 'Semester 3 · Proyek Kelompok',
        description:
          'Merancang UI/UX end-to-end untuk i-Health, sistem informasi kesehatan berbasis dashboard multi-peran — proyek kelompok mata kuliah semester 3, dengan peran penuh sebagai UI/UX Designer. Dari wireframe hingga prototipe high-fidelity di Figma, mencakup perancangan dashboard terpisah untuk dokter, pasien, dan admin, masing-masing disesuaikan dengan tugas dan hak aksesnya untuk memastikan pengalaman yang relevan bagi tiap peran.',
      },
      fzt: {
        badge: 'Semester 2 · Proyek Kelompok',
        description:
          'Merancang UI/UX end-to-end untuk FZT.com, website wisata destinasi Tasikmalaya — proyek kelompok mata kuliah semester 2, dengan peran penuh sebagai UI/UX Designer. Dari wireframe hingga prototipe interaktif di Figma, memvisualisasikan seluruh perjalanan pengguna mulai dari menemukan destinasi hingga merencanakan trip, dengan fokus pada alur eksplorasi yang intuitif dan mudah diikuti.',
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
        detail: 'IPK 3.92/4.00',
      },
      sma: {
        degree: 'IPS',
        detail: null,
      },
    },
  },
  experience: {
    title: 'Pengalaman Kerja',
    items: {
      horison: {
        period: 'Agu–Okt 2025 (3 bulan) · On-site',
        description:
          'Menangani operasional akuntansi dan logistik selama magang. Secara mandiri merancang dan mengembangkan HOZOF, sistem pemesanan makanan berbasis QR yang kini digunakan staf hotel.',
      },
      basain: {
        period: 'Jan–Agu 2024 (8 bulan) · Remote',
        description:
          'Merancang UI/UX untuk situs e-commerce mobile-friendly BASAIN di Figma, serta mengelola media sosial dan interaksi pelanggan secara remote.',
      },
    },
  },
  organizations: {
    title: 'Organisasi',
    campusLabel: 'Organisasi Kampus',
    committeeLabel: 'Organisasi Kepanitiaan',
  },
  contact: {
    heading: 'Terima kasih sudah menjelajahi portofolio ini',
    subtext:
      'Saat ini saya terbuka untuk peran UI/UX Design, Graphic Design, dan Front-End — yuk ngobrol.',
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
