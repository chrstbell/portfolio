import { PenTool, Code2, Palette, Sparkles } from 'lucide-react'

export const expertiseAreas = [
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    icon: PenTool,
    color: 'bg-lavender',
    accent: 'text-primary-blue',
    skills: [
      'Figma (wireframing → high-fidelity prototyping)',
      'User Flow Design',
      'Usability-focused Design',
    ],
  },
  {
    id: 'frontend',
    title: 'Front-End & Web Development',
    icon: Code2,
    color: 'bg-mint',
    accent: 'text-primary-blue',
    skills: ['HTML', 'CSS', 'PHP', 'MySQL', 'Laravel', 'Git/GitHub'],
  },
  {
    id: 'visual',
    title: 'Visual & Graphic Design',
    icon: Palette,
    color: 'bg-peach',
    accent: 'text-primary-blue',
    skills: [
      'Canva',
      'Brand Asset Design',
      'Menu & Product Visual Design',
    ],
  },
  {
    id: 'workflow',
    title: 'Workflow',
    icon: Sparkles,
    color: 'bg-primary-gold/30',
    accent: 'text-primary-blue',
    skills: [
      'AI-assisted development (design-to-code acceleration)',
      'Cross-team remote collaboration',
    ],
  },
]
