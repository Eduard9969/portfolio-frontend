export const mockProfileEn = {
  name: 'Test User',
  title: 'Test Developer',
  avatar: 'https://placehold.co/200x200',
  socials: [
    { title: 'LinkedIn', url: '#', icon: 'linkedin' },
    { title: 'GitHub', url: '#', icon: 'github' },
  ],
  mainSections: [
    {
      type: 'timeline',
      title: 'Experience',
      items: [{ period: '2020–Present', org: 'Test Corp', role: 'Developer', description: 'Test description.' }],
    },
    {
      type: 'timeline',
      title: 'Education',
      items: [{ period: '2016–2020', org: 'Test University', role: 'City', description: 'Bachelor degree.' }],
    },
    {
      type: 'timeline',
      title: 'Projects',
      items: [{ period: '2023', org: 'Test Project', role: 'Author', description: 'Test project description.' }],
    },
  ],
  sidebarSections: [
    { type: 'text', title: 'About', text: "Hi, I'm a test user with a passion for testing." },
    {
      type: 'icon-list',
      title: 'Contacts',
      items: [{ text: 'test@example.com', icon: 'email' }],
    },
    {
      type: 'skill-list',
      title: 'Skills',
      withTooltip: true,
      items: [
        { name: 'TypeScript', mark: 5 },
        { name: 'React', mark: 4 },
      ],
    },
  ],
};

export const mockProfileRu = {
  name: 'Test User',
  title: 'Тест разработчик',
  avatar: 'https://placehold.co/200x200',
  socials: [
    { title: 'LinkedIn', url: '#', icon: 'linkedin' },
    { title: 'GitHub', url: '#', icon: 'github' },
  ],
  mainSections: [
    {
      type: 'timeline',
      title: 'Опыт работы',
      items: [{ period: '2020–н.в.', org: 'Тест Corp', role: 'Разработчик', description: 'Описание.' }],
    },
    {
      type: 'timeline',
      title: 'Образование',
      items: [{ period: '2016–2020', org: 'Тест Университет', role: 'Город', description: 'Бакалавр.' }],
    },
    {
      type: 'timeline',
      title: 'Проекты',
      items: [{ period: '2023', org: 'Тест Проект', role: 'Автор', description: 'Описание проекта.' }],
    },
  ],
  sidebarSections: [
    { type: 'text', title: 'Обо мне', text: 'Привет, я тестовый пользователь.' },
    {
      type: 'icon-list',
      title: 'Контакты',
      items: [{ text: 'test@example.com', icon: 'email' }],
    },
    {
      type: 'skill-list',
      title: 'Навыки',
      withTooltip: true,
      items: [{ name: 'TypeScript', mark: 5 }],
    },
  ],
};
