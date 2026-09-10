export type Project = {
  title: string
  year: string
  medium: string
  summary: string
  details: string[]
  poster: string
}

export type ContactTile = {
  label: string
  value: string
  href: string
  icon: string
}

export type BlogPost = {
  slug: string
  fileName: string
  title: string
  date: string
  summary: string
  content: string
}

export const projects: Project[] = [
  {
    title: 'A House for the Weather',
    year: '2025',
    medium: 'New play development',
    summary: 'A lyrical family epic about inheritance, storms, and what remains after the house is gone.',
    details: [
      'Produced in partnership with The New Stage Collective',
      'Featured a 12-person ensemble and original score',
      'Developed through a community reading and three-week workshop',
    ],
    poster: 'linear-gradient(135deg, #d9a441 0%, #694832 35%, #1e1d38 100%)',
  },
  {
    title: 'The Quiet Room',
    year: '2024',
    medium: 'Off-Broadway premiere',
    summary: 'A chamber drama exploring intimacy, surveillance, and the architecture of trust.',
    details: [
      'Launched with a critically acclaimed premiere at The Lantern Theatre',
      'Secured sponsor support for a citywide accessibility initiative',
      'Expanded to a second run after sold-out preview performances',
    ],
    poster: 'linear-gradient(135deg, #f4a261 0%, #a64b4b 45%, #2c1d45 100%)',
  },
  {
    title: 'After the Final Bell',
    year: '2023',
    medium: 'Musical theatre',
    summary: 'A coming-of-age musical tracing a class of students from graduation night into uncertain futures.',
    details: [
      'Brought together a multidisciplinary creative team of 18 artists',
      'Generated national press coverage in arts and education outlets',
      'Supported a youth mentorship fund tied to the production run',
    ],
    poster: 'linear-gradient(135deg, #7dd3fc 0%, #5f7ae8 40%, #171c2f 100%)',
  },
  {
    title: 'Open House / Closed Door',
    year: '2022',
    medium: 'Festival production',
    summary: 'An immersive event piece staged across two storefront rooms and a shared courtyard.',
    details: [
      'Created as a site-specific festival event for downtown audiences',
      'Designed to invite audience movement, reflection, and conversation',
      'Recruited local artists and neighborhood partners across four blocks',
    ],
    poster: 'linear-gradient(135deg, #d9f99d 0%, #4d7c0f 35%, #1f2937 100%)',
  },
  {
    title: 'Glass Orchard',
    year: '2021',
    medium: 'Experimental work',
    summary: 'A sensory theatre installation combining movement, live sound, and text fragments from the orchard.',
    details: [
      'Presented as part of a weekend residency in partnership with a local arts center',
      'Featured original sound design and audience-led sequences',
      'Created a digital companion essay to broaden programming reach',
    ],
    poster: 'linear-gradient(135deg, #f9a8d4 0%, #a78bfa 35%, #1f2937 100%)',
  },
  {
    title: 'The Last Light District',
    year: '2019',
    medium: 'Producer’s debut',
    summary: 'A downtown initiative connecting artists, civic leaders, and neighborhood residents around a striking new work.',
    details: [
      'Brought together 5 resident artists with one shared commissioning brief',
      'Activated a vacant arts space into a public-facing performance venue',
      'Raised support for a year-round community arts residency program',
    ],
    poster: 'linear-gradient(135deg, #fca5a5 0%, #ef4444 30%, #1f2937 100%)',
  },
]

export const contactTiles: ContactTile[] = [
  {
    label: 'Email',
    value: 'hello@madisonmorrow.com',
    href: 'mailto:hello@madisonmorrow.com',
    icon: '✉',
  },
  {
    label: 'Instagram',
    value: '@madisonmorrowproduces',
    href: 'https://instagram.com',
    icon: '◎',
  },
  {
    label: 'LinkedIn',
    value: 'Madison Morrow',
    href: 'https://linkedin.com',
    icon: '▣',
  },
  {
    label: 'Location',
    value: 'New York / Remote',
    href: 'https://maps.google.com/?q=New+York+NY',
    icon: '◌',
  },
]

export const blogCatalog = [
  {
    slug: 'building-rooms-that-breathe',
    fileName: 'building-rooms-that-breathe.md',
    title: 'Building Rooms That Breathe',
    date: 'April 18, 2026',
    summary: 'On making audience space feel generous enough for intimacy, risk, and release.',
  },
  {
    slug: 'theatre-and-trust',
    fileName: 'theatre-and-trust.md',
    title: 'Theatre and Trust',
    date: 'February 26, 2026',
    summary: 'A producer’s notes on inviting artists, audiences, and partners into a shared creative risk.',
  },
  {
    slug: 'notes-from-the-rehearsal-room',
    fileName: 'notes-from-the-rehearsal-room.md',
    title: 'Notes From the Rehearsal Room',
    date: 'January 9, 2026',
    summary: 'Three observations from a season of rehearsal and revision in process.',
  },
] as const
