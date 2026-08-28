const base = import.meta.env.BASE_URL

export const featuredProjects = [
  {
    id: 'hozof',
    number: '01',
    title: 'HOZOF',
    figmaUrl: 'https://www.figma.com/design/hQ4sWcMFvB0y1OzER6kUhq/HORISON?node-id=3-2&t=sUcmA4r1BTm4B4pb-1',
    githubUrl: 'https://github.com/chrstbell/HOZOF',
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
    githubUrl: 'https://github.com/chrstbell/HERO',
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
]

export const courseworkProjects = [
  {
    id: 'basain',
    title: 'BASAIN',
    image: `${base}basain.jpg`,
    figmaUrl: 'https://www.figma.com/design/3JFd9vi8i8ZsiC9AXUFqfp/BASAIN?node-id=0-1&t=7mZ8fwoYcK2EjTXn-1',
  },
  {
    id: 'ruangbonsai',
    title: 'RuangBonsai',
    image: `${base}ruangbonsai.jpg`,
    figmaUrl: 'https://www.figma.com/design/4KzG50xSskM1IraspFCvjA/RUANGBONSAI?node-id=41-1104&t=hWzarOCnAtch7igH-1',
  },
  {
    id: 'ihealth',
    title: 'iHealth',
    image: `${base}ihealth.jpg`,
    figmaUrl: 'https://www.figma.com/design/cO4WZ67ztxuom9T6cTkG9s/IHEALT?node-id=0-1&t=A1ntXB7mFLzLPFA9-1',
  },
  {
    id: 'fzt',
    title: 'FZT.COM',
    image: `${base}fzt.jpg`,
    figmaUrl: 'https://www.figma.com/design/ln3N7RxWkBUxTeM0jv5Cfp/tasik?node-id=0-1&t=Gjcrg9lkMPDzDtHa-1',
  },
];
