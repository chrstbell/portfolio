import { Mail, Phone, Camera, Link, Globe } from 'lucide-react'

export const contactData = {
  heading: 'Thank you for exploring this portfolio',
  subtext:
    "I'm currently open to UI/UX Design, Graphic Design, and Front-End roles — let's talk.",
  links: [
    {
      id: 'email',
      label: 'christabelaurelia021@gmail.com',
      href: 'mailto:christabelaurelia021@gmail.com',
      icon: Mail,
    },
    {
      id: 'phone',
      label: '+62882236165232',
      href: 'https://wa.me/62882236165232',
      icon: Phone,
    },
    {
      id: 'instagram',
      label: '@christabelaurelia',
      href: 'https://instagram.com/christabelaurelia',
      icon: Camera,
    },
    {
      id: 'linkedin',
      label: 'linkedin.com/in/christabelaurelia',
      href: 'https://linkedin.com/in/christabelaurelia',
      icon: Link,
    },
  ],
}
