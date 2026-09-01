const base = import.meta.env.BASE_URL

export const featuredProjects = [
  {
    id: 'hozof',
    number: '01',
    title: 'HOZOF',
    figmaUrl: 'https://www.figma.com/design/hQ4sWcMFvB0y1OzER6kUhq/HORISON?node-id=3-2&t=sUcmA4r1BTm4B4pb-1',
    githubUrl: 'https://hozof-demo.vercel.app/',
    accent: 'bg-mint',
    images: [
      {
        src: `${base}hozof-1.jpg`,
        alt: 'Tampilan menu HOZOF di HP',
      },
      {
        src: `${base}hozof-2.jpg`,
        alt: 'Presentasi ke general manager',
      },
      {
        src: `${base}hozof-3.jpg`,
        alt: 'Pengajuan formal ke pihak hotel',
      },
    ],
  },
  {
    id: 'hero',
    number: '02',
    title: 'HERO',
    figmaUrl: 'https://www.figma.com/design/TM6h4REfZTQhVSUQMhfRXM/HERO?node-id=0-1&t=RnuMHJa97BRnTKpy-1',
    githubUrl: 'https://demoapp-hero.vercel.app/',
    accent: 'bg-peach',
    images: [
      {
        src: `${base}hero-1.jpg`,
        alt: 'Homepage Toko Hero e-commerce',
      },
      {
        src: `${base}hero-2.jpg`,
        alt: 'Halaman produk dan checkout',
      },
      {
        src: `${base}hero-3.jpg`,
        alt: 'Dashboard penjual Toko Hero',
      },
    ],
  },
  {
    id: 'laundry',
    number: '03',
    title: 'LAUNDRY',
    githubUrl: 'https://demoapp-laundry.vercel.app/',
    accent: 'bg-lavender',
    badgeVariant: 'redesign',
    images: [
      {
        src: `${base}laundry-1.jpg`,
        alt: 'Homepage Laundry',
      },
      {
        src: `${base}laundry-2.jpg`,
        alt: 'Halaman layanan dan checkout',
      },
      {
        src: `${base}laundry-3.jpg`,
        alt: 'Dashboard penjual Laundry',
      },
    ],
  },
]

export const courseworkProjects = [
  {
    id: 'basain',
    title: 'BASAIN',
    image: `${base}basain.jpg`,
    figmaUrl: 'https://www.figma.com/proto/3JFd9vi8i8ZsiC9AXUFqfp/BASAIN?node-id=1-224&p=f&viewport=1955%2C2780%2C0.48&t=js7YXve23OrR0Mnj-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1',
    images: [
      {
        src: `${base}basain-1.jpg`,
        alt: 'Homepage BASAIN',
      },
      {
        src: `${base}basain-2.jpg`,
        alt: 'Halaman produk dan checkout',
      },
      {
        src: `${base}basain-3.jpg`,
        alt: 'Dashboard penjual BASAIN',
      },
    ],
  },
  {
    id: 'ruangbonsai',
    title: 'RuangBonsai',
    image: `${base}ruangbonsai.jpg`,
    figmaUrl: 'https://www.figma.com/proto/4KzG50xSskM1IraspFCvjA/RUANGBONSAI?node-id=41-1105&p=f&viewport=78%2C233%2C0.03&t=U2rYLwaSojW0y2Tj-1&scaling=scale-down&content-scaling=fixed&page-id=41%3A1104',
    images: [
      {
        src: `${base}ruangbonsai-1.jpg`,
        alt: 'Homepage RUANGBONSAI',
      },
      {
        src: `${base}ruangbonsai-2.jpg`,
        alt: 'Halaman produk dan checkout',
      },
      {
        src: `${base}ruangbonsai-3.jpg`,
        alt: 'Dashboard penjual RUANGBONSAI',
      },
    ],
  },
  {
    id: 'ihealth',
    title: 'iHealth',
    image: `${base}ihealth.jpg`,
    figmaUrl: 'https://www.figma.com/proto/cO4WZ67ztxuom9T6cTkG9s/IHEALT?node-id=11-92&p=f&viewport=367%2C239%2C0.04&t=D7h2knCjVKsAmdah-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1',
    images: [
      {
        src: `${base}ihealth-1.jpg`,
        alt: 'Homepage iHealth',
      },
      {
        src: `${base}ihealth-2.jpg`,
        alt: 'Halaman produk dan checkout',
      },
    ],
  },
  {
    id: 'fzt',
    title: 'FZT.COM',
    image: `${base}fzt.jpg`,
    figmaUrl: 'https://www.figma.com/proto/ln3N7RxWkBUxTeM0jv5Cfp/tasik?node-id=26-3566&p=f&viewport=254%2C62%2C0.03&t=Jm00brM4zptbjNLk-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1',
    images: [
      {
        src: `${base}fzt-1.jpg`,
        alt: 'Homepage FZT.COM',
      },
    ],
  },
];
