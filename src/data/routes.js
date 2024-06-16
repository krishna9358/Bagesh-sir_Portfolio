const routes = [
  {
    index: true,
    label: 'Bagesh Kumar',
    path: '/',
  },
  {
    label: 'Resume',
    path: '/resume',
  },
  {
    label: 'Research',
    path: '/research',
  },
  {
    label: 'Projects',
    path: '/projects',
  },
  {
    label: 'Events',
    path: '/gallery',
  },
  {
    label: 'Team',
    path: '/team',
  },
  {
    label: 'Alumni',
    path: '/alumni',
  },
  {
    label: 'Contact',
    path: '/contact',
  },
  {
    label: 'T&P',
    path: '#',
    sublinks: [
      { label: 'College 1', path: '/college1' },
      { label: 'College 2', path: '/college2' },
      { label: 'College 3', path: '/college3' },
    ],
  },
];

export default routes;
