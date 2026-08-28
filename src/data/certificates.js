const base = import.meta.env.BASE_URL

export const certificates = [
  {
    id: 'cert-database',
    image: `${base}certificates/cert-database.jpg`,
    title: 'Database',
    issuer: 'Talent Scouting Academy (DTS)',
    year: '2024',
    category: 'training',
  },
  {
    id: 'cert-graphic-design',
    image: `${base}certificates/cert-graphic-design.jpg`,
    title: 'Graphic Design Principal',
    issuer: 'MySkill',
    year: '2023',
    category: 'training',
  },
  {
    id: 'cert-uiux',
    image: `${base}certificates/cert-uiux.jpg`,
    title: 'Intro to UI/UX Design',
    issuer: 'MySkill',
    year: '2023',
    category: 'training',
  },
  {
    id: 'cert-backend-intro',
    image: `${base}certificates/cert-backend-intro.jpg`,
    title: 'Introduction to Backend Engineering',
    issuer: 'MySkill',
    year: '2023',
    category: 'training',
  },
  {
    id: 'cert-kompetensi-programmer',
    image: `${base}certificates/cert-kompetensi-programmer.jpg`,
    title: 'Sertifikat Kompetensi Pengembang Perangkat Lunak Pemrogram',
    issuer: 'LSP BSI',
    year: '2026', 
    category: 'competency',
  },
]
