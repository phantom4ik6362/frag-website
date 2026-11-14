import { type ReactNode, useEffect, useMemo, useState } from 'react';
import { ArrowDown, ArrowUp, ArrowUpRight, ChevronLeft, ChevronRight, Mail, Menu, MessageCircle, Phone, X } from 'lucide-react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import portrait from './assets/DSC05793_1787215876015.JPG';
import roadBack from './assets/DSC05826_1787215876016.JPG';
import couple from './assets/photo_2026-05-11_15-19-21_1787216145022.jpg';
import mountainLean from './assets/photo_9_2026-08-20_15-55-37_1787216157309.jpg';
import beachSmile from './assets/photo_7_2026-08-20_15-55-37_1787216157311.jpg';
import pilot from './assets/photo_6_2026-08-20_15-52-48_1787216157312.jpg';
import sea from './assets/photo_5_2026-08-20_15-52-48_1787216157313.jpg';
import volunteer from './assets/photo_5_2026-08-20_15-55-37_1787216157313.jpg';
import radar from './assets/photo_4_2026-08-20_15-52-48_1787216157314.jpg';
import sunset from './assets/photo_3_2026-08-20_15-52-48_1787216157314.jpg';
import cockpit from './assets/photo_3_2026-08-20_15-55-37_1787216157317.jpg';
import volunteerCard from './assets/photo_2_2026-08-20_15-55-37_1787216157317.jpg';
import lockscreen from './assets/photo_4_2026-08-20_15-55-37_1787216157316.jpg';
import vacancyum from './assets/image_1787216754250.png';
import piprescue from './assets/image_1787216811999.png';
import interviewintel from './assets/image_1787216834328.png';
import twiceLogo from './assets/twice-logo.jpg';
import sredaLogo from './assets/sreda365-logo.png';
import allBeautyLogo from './assets/allbeauty-logo.jpg';
import vacancyumLogo from './assets/vacancyum-logo.png';
import pipRescueLogo from './assets/piprescue-logo.png';
import interviewIntelLogo from './assets/interviewintel-logo.png';
import psychologySvetlana from './assets/tilda/psychology-svetlana.jpg';
import graniteDelivery from './assets/tilda/granite-delivery.jpg';
import graniteProducts from './assets/tilda/granite-products.jpg';
import dariaArt from './assets/tilda/daria-art.jpg';

const queryClient = new QueryClient();
type Language = 'en' | 'ru';

const copy = {
  en: {
    label: 'PERSONAL INDEX / 01—26',
    intro: 'I collect fragments, then find out what they are trying to become.',
    introSmall: 'Konstantin Vyazovov / FRAGMENT',
    heroText: 'A builder from Koh Samui. Part engineer, part observer, always somewhere between a working system and a good story.',
    slogan: 'The future is not something you wait for. It is something you build.',
    scroll: 'Enter the index',
    map: 'On this page',
    origin: 'Origin',
    worlds: 'Worlds',
    build: 'Build',
    people: 'People',
    nyx: 'Nyx',
    archive: 'Archive',
    contact: 'Contact',
    originTag: '01 — WHERE I AM FROM',
    originTitle: 'Moved to Thailand.',
    originBody: 'I moved to Thailand in 2013 and grew up on Koh Samui with my younger sister and brother. I barely remember my earliest years in Russia.',
    originAside: '20 years old · Koh Samui · Russian and English · Full Stack AI Engineer / Developer.',
    worldsTag: '02 — WORLDS I TESTED',
    worldsTitle: 'Before I built systems, I lived inside them.',
    worldsBody: 'Gaming, flight simulators and GTA V RP were not just escapes. They were places to try on responsibility. In YDDY / Code 6, I was an attorney, a police officer and an administrator — learning how people behave when the rules become real.',
    buildTag: '03 — THINGS I HAVE BUILT',
    buildTitle: 'From a question to something you can use.',
    buildBody: 'My work is usually a short distance from a human problem: a calmer day, a better hire, a clearer interview, a product that finally feels possible.',
    timelineTitle: 'The route so far.',
    timelineBody: 'A practical timeline of places, roles and systems that shaped the way I work.',
    projectLink: 'Discuss project',
    requestAccess: 'Request access',
    shipped: 'shipped',
    testing: 'testing',
    peopleTag: '04 — WORKING WITH PEOPLE',
    peopleTitle: 'Useful is a human word.',
    peopleBody: 'Cafes taught me operational speed. Assistant work taught me to make order out of ambiguous requests. Tourist Police volunteering taught me that translation is sometimes the difference between panic and a way forward.',
    nyxTag: '05 — A PRIVATE CONSTELLATION',
    nyxTitle: 'Nyx',
    nyxLead: 'I was lucky to meet, so early in life, the person I want to spend the rest of it with.',
    nyxBody: '30 August 2025 is where our story begins. She gives me energy, optimism and a reason to notice the beautiful parts of an ordinary day. This is not a project, a case study or a work thing. It is simply my girlfriend, and the person I love.',
    archiveTag: '06 — BETWEEN BUILDING AND REMEMBERING',
    archiveTitle: 'Scenes from real life.',
    archiveBody: 'A visual collection of Samui, people, travel, work, machines and the moments I wanted to keep.',
    all: 'all',
    portraits: 'portraits',
    places: 'places',
    work: 'work',
    contactTag: '07 — OPEN CHANNEL',
    contactTitle: 'If you have a strange question, start there.',
    contactBody: 'I like useful things, difficult contexts and conversations that have not decided what they are yet.',
    sayHello: 'say hello',
    footer: 'FRAGMENT / Koh Samui / 2026',
  },
  ru: {
    label: 'ЛИЧНЫЙ ИНДЕКС / 01—26',
    intro: 'Я собираю фрагменты, а потом выясняю, чем они хотят стать.',
    introSmall: 'Константин Вязовов / FRAGMENT',
    heroText: 'Создатель с Ко Самуи. Немного инженер, немного наблюдатель — всегда где-то между работающей системой и хорошей историей.',
    slogan: 'Будущее — это не то, чего ждут. Это то, что создают.',
    scroll: 'Войти в индекс',
    map: 'На этой странице',
    origin: 'Откуда',
    worlds: 'Миры',
    build: 'Создано',
    people: 'Люди',
    nyx: 'Nyx',
    archive: 'Архив',
    contact: 'Контакты',
    originTag: '01 — ОТКУДА Я',
    originTitle: 'Переезд в Таиланд.',
    originBody: 'В 2013 году я переехал в Таиланд и вырос на Ко Самуи вместе с младшей сестрой и братом. Ранние годы в России помню едва.',
    originAside: '20 лет · Ко Самуи · русский и английский · Full Stack AI Engineer / Developer.',
    worldsTag: '02 — МИРЫ, КОТОРЫЕ Я ПРОБОВАЛ',
    worldsTitle: 'До того как собирать системы, я жил внутри них.',
    worldsBody: 'Gaming, авиасимуляторы и GTA V RP были не только способом отвлечься. Это были места, где можно было попробовать ответственность. В YDDY / Code 6 я был адвокатом, полицейским и администратором — и учился понимать людей, когда правила становятся настоящими.',
    buildTag: '03 — ЧТО Я СОЗДАЛ',
    buildTitle: 'От вопроса до вещи, которой можно пользоваться.',
    buildBody: 'Моя работа обычно находится недалеко от человеческой проблемы: сделать день спокойнее, найм понятнее, собеседование яснее или продукт — наконец возможным.',
    timelineTitle: 'Мой путь.',
    timelineBody: 'Короткая хронология мест, ролей и систем, которые повлияли на то, как я работаю.',
    projectLink: 'Обсудить проект',
    requestAccess: 'Запросить доступ',
    shipped: 'выпущено',
    testing: 'тестируется',
    peopleTag: '04 — РАБОТА С ЛЮДЬМИ',
    peopleTitle: 'Полезность — человеческое слово.',
    peopleBody: 'Кафе научили меня скорости операционных решений. Работа ассистентом — превращать размытые просьбы в порядок. Волонтёрство в туристической полиции — тому, что перевод иногда становится разницей между паникой и выходом.',
    nyxTag: '05 — ЛИЧНОЕ СОЗВЕЗДИЕ',
    nyxTitle: 'Nyx',
    nyxLead: 'Мне повезло так рано встретить человека, с которым я хочу провести всю оставшуюся жизнь.',
     nyxBody: '30 августа 2025 года начинается наша история. Она даёт мне энергию, оптимизм и повод замечать красивые части обычного дня. Это не проект, не кейс и не рабочая история. Это моя любимая девушка и человек, с которым я буду всегда.',
    archiveTag: '06 — МЕЖДУ СОЗДАНИЕМ И ПАМЯТЬЮ',
    archiveTitle: 'Кадры из жизни.',
    archiveBody: 'Фотографии Самуи, людей, поездок, работы, машин и моментов, которые мне хотелось сохранить.',
    all: 'все',
    portraits: 'портреты',
    places: 'места',
    work: 'работа',
    contactTag: '07 — ОТКРЫТЫЙ КАНАЛ',
    contactTitle: 'Если у тебя странный вопрос — начни с него.',
    contactBody: 'Мне интересны полезные вещи, сложные контексты и разговоры, которые ещё не решили, чем хотят стать.',
    sayHello: 'написать',
    footer: 'FRAGMENT / Ко Самуи / 2026',
  },
} as const;

type Copy = { -readonly [Key in keyof typeof copy.en]: string };

const chapters = [
  { id: 'build', number: '03', key: 'build' },
  { id: 'timeline', number: '04', key: 'timelineTitle' },
  { id: 'nyx', number: '05', key: 'nyx' },
  { id: 'archive', number: '06', key: 'archive' },
  { id: 'contact', number: '07', key: 'contact' },
] as const;

const timeline = [
  { year: '2006', enTitle: 'Born', ruTitle: 'Родился', enBody: 'The beginning of the story.', ruBody: 'Начало истории.' },
  { year: '2013', enTitle: 'Moved to Thailand', ruTitle: 'Переезд в Таиланд', enBody: 'Grew up on Koh Samui with my younger sister and brother.', ruBody: 'Вырос на Ко Самуи вместе с младшей сестрой и братом.' },
  { year: '2019—22', enTitle: 'Gaming and simulators', ruTitle: 'Игры и симуляторы', enBody: 'GTA, flight simulators and other digital worlds.', ruBody: 'GTA, авиасимуляторы и другие цифровые миры.' },
  { year: '2023', enTitle: 'GTA V RP', ruTitle: 'GTA V RP', enBody: 'Attorney, police officer and administrator in YDDY / Code 6.', ruBody: 'Адвокат, полицейский и администратор в YDDY / Code 6.' },
  { year: '2024', enTitle: 'First cafe job', ruTitle: 'Первая работа в кафе', enBody: 'Marketing, advertising, team communication and daily operations.', ruBody: 'Маркетинг, реклама, коммуникация с командой и ежедневные задачи.' },
  { year: '2025', enTitle: 'Assistant and infrastructure', ruTitle: 'Ассистент и инфраструктура', enBody: 'Personal assistant work, a private SSH server and Python Telegram bots.', ruBody: 'Работа личным ассистентом, собственный SSH-сервер и Telegram-боты на Python.' },
  { year: '2025—now', enTitle: 'Tourist Police volunteer', ruTitle: 'Волонтёр туристической полиции', enBody: 'Duty shifts, events, help and translation for Russian-speaking tourists.', ruBody: 'Дежурства, мероприятия, помощь людям и перевод для русскоязычных туристов.' },
  { year: '30.08.2025', enTitle: 'Nyx', ruTitle: 'Nyx', enBody: 'The beginning of our story.', ruBody: 'Начало нашей истории.' },
  { year: '2026', enTitle: 'AI products', ruTitle: 'AI-продукты', enBody: 'Full Stack AI Engineer / Developer — from idea to working product.', ruBody: 'Full Stack AI Engineer / Developer — от идеи до работающего продукта.' },
];

const projects = [
  { name: 'Twice: Daily Journal', role: 'Full Stack AI Developer', roleRu: 'Full Stack AI Developer', body: 'A two-minute ritual for noticing the day before it disappears.', bodyRu: 'Дневник с короткими утренними и вечерними отметками: сон, энергия, настроение и планы.', status: 'shipped', image: twiceLogo, stack: ['React', 'AI', 'PostgreSQL'] },
  { name: 'SREDA365', role: 'Full Stack AI Developer', roleRu: 'Full Stack AI Developer', body: 'A personal operating system for growth, reflection and the ordinary day.', bodyRu: 'Личная система для роста: направление дня, небольшие паузы, итоги и собственные выводы.', status: 'shipped', image: sredaLogo, stack: ['React', 'AI', 'UX'] },
  { name: 'AllBeauty', role: 'Full Stack AI Developer', roleRu: 'Full Stack AI Developer', body: 'A cosmetics scanner that finds alternatives by ingredients and purpose.', bodyRu: 'Сканер косметики, который помогает сравнивать средства и находить аналоги по составу и назначению.', status: 'testing', image: allBeautyLogo, stack: ['React', 'Computer Vision', 'AI'] },
  { name: 'Vacancyum', role: 'Full Stack AI Developer', roleRu: 'Full Stack AI Developer', body: 'Turns a short manager brief into a vacancy people want to read.', bodyRu: 'Превращает короткий бриф руководителя в понятную и привлекательную вакансию.', status: 'shipped', image: vacancyumLogo, stack: ['React', 'AI', 'Prompting'] },
  { name: 'PipRescue', role: 'Full Stack AI Developer', roleRu: 'Full Stack AI Developer', body: 'A private guide for turning PIP requirements into visible next steps.', bodyRu: 'Приватный помощник, который превращает требования PIP в конкретные следующие шаги.', status: 'shipped', image: pipRescueLogo, stack: ['React', 'AI', 'Workflow'] },
  { name: 'InterviewIntel', role: 'Full Stack AI Developer', roleRu: 'Full Stack AI Developer', body: 'Finds the questions hiding inside a job description.', bodyRu: 'Анализирует вакансию и помогает подготовиться к вероятным вопросам на интервью.', status: 'shipped', image: interviewIntelLogo, stack: ['React', 'AI', 'NLP'] },
  { name: 'Telegram education bot', role: 'Python / learning systems', roleRu: 'Python / образовательная система', body: 'Modules, quizzes and a course delivered where attention already lives.', bodyRu: 'Образовательный проект в Telegram с модулями, квизами и последовательным прохождением курса.', status: 'shipped', image: null, stack: ['Python', 'Telegram API', 'SQLite'] },
  { name: 'SSH + Python bots', role: 'Infrastructure / automation', roleRu: 'Инфраструктура / автоматизация', body: 'Small systems, financial helpers and a quiet server kept alive.', bodyRu: 'Telegram-боты на Python, финансовый помощник и собственный SSH-сервер для личных задач.', status: 'shipped', image: null, stack: ['Python', 'SSH', 'Automation'] },
  { name: 'Светлая Пуль', role: 'Tilda website / psychology', roleRu: 'Сайт на Tilda / психология', body: 'A calm editorial website for an analytical psychologist and her practice.', bodyRu: 'Спокойный сайт для аналитического психолога: практика, подход и пространство для бережной встречи с собой.', status: 'shipped', image: psychologySvetlana, kind: 'site', stack: ['Tilda', 'Art direction', 'Copywriting'] },
  { name: 'Гранит Месторождения', role: 'Tilda website / stone supply', roleRu: 'Сайт на Tilda / поставки камня', body: 'A bold landing page for a granite supplier with clear delivery and stock messaging.', bodyRu: 'Выразительный лендинг для поставщика гранита с акцентом на наличие, доставку и понятные цифры.', status: 'shipped', image: graniteDelivery, kind: 'site', stack: ['Tilda', 'Landing page', 'Visual hierarchy'] },
  { name: 'Гранит — изделия', role: 'Tilda website / product catalogue', roleRu: 'Сайт на Tilda / каталог изделий', body: 'A product-focused site for presenting granite solutions to construction teams.', bodyRu: 'Сайт-каталог для презентации изделий из гранита строительным и проектным командам.', status: 'shipped', image: graniteProducts, kind: 'site', stack: ['Tilda', 'Product page', 'UX structure'] },
  { name: 'Daria Diamond Art', role: 'Tilda website / art direction', roleRu: 'Сайт на Tilda / арт-направление', body: 'A restrained art website where paintings become the centre of the room.', bodyRu: 'Сдержанный сайт художницы, где картины становятся центром пространства и частью интерьера.', status: 'shipped', image: dariaArt, kind: 'site', stack: ['Tilda', 'Art direction', 'Responsive design'] },
] as const;

const skillStack = {
  en: ['React', 'TypeScript', 'Python', 'AI integrations', 'Telegram bots', 'PostgreSQL', 'REST APIs', 'Automation', 'UX thinking', 'Prompt engineering'],
  ru: ['React', 'TypeScript', 'Python', 'AI-интеграции', 'Telegram-боты', 'PostgreSQL', 'REST API', 'Автоматизация', 'UX-мышление', 'Prompt engineering'],
} as const;

type Photo = { src: string; alt: string; label: string; category: 'portraits' | 'places' | 'work'; size: 'tall' | 'wide' | 'square' };
const archivePhotoFiles = [
  'photo_1_2026-08-20_18-38-57.jpg',
  'photo_1_2026-08-20_18-39-49.jpg',
  'photo_2_2026-08-20_18-38-57.jpg',
  'photo_3_2026-08-20_18-39-04.jpg',
  'photo_3_2026-08-20_18-39-49.jpg',
  'photo_4_2026-08-20_18-39-04.jpg',
  'photo_4_2026-08-20_18-39-49.jpg',
  'photo_5_2026-08-20_18-38-57.jpg',
  'photo_5_2026-08-20_18-39-04.jpg',
  'photo_5_2026-08-20_18-39-49.jpg',
  'photo_6_2026-08-20_18-39-04.jpg',
  'photo_6_2026-08-20_18-39-49.jpg',
  'photo_7_2026-08-20_18-39-49.jpg',
  'photo_8_2026-08-20_18-39-04.jpg',
  'photo_8_2026-08-20_18-39-49.jpg',
  'photo_9_2026-08-20_18-38-57.jpg',
  'photo_9_2026-08-20_18-39-49.jpg',
  'photo_10_2026-08-20_18-39-04.jpg',
  'photo_10_2026-08-20_18-39-49.jpg',
  'photo_11_2026-08-20_18-39-04.jpg',
  'photo_11_2026-08-20_18-39-49.jpg',
  'photo_12_2026-08-20_18-38-57.jpg',
  'photo_12_2026-08-20_18-39-49.jpg',
  'photo_13_2026-08-20_18-39-04.jpg',
  'photo_13_2026-08-20_18-39-49.jpg',
  'photo_14_2026-08-20_18-39-04.jpg',
  'photo_14_2026-08-20_18-39-49.jpg',
  'photo_15_2026-08-20_18-39-04.jpg',
  'photo_15_2026-08-20_18-39-49.jpg',
  'photo_16_2026-08-20_18-39-04.jpg',
  'photo_16_2026-08-20_18-39-49.jpg',
  'photo_17_2026-08-20_18-39-04.jpg',
  'photo_17_2026-08-20_18-39-49.jpg',
  'photo_18_2026-08-20_18-39-04.jpg',
  'photo_19_2026-08-20_18-39-04.jpg',
  'photo_19_2026-08-20_18-39-49.jpg',
  'photo_20_2026-08-20_18-39-04.jpg',
  'photo_20_2026-08-20_18-39-49.jpg',
  'photo_21_2026-08-20_18-38-57.jpg',
  'photo_21_2026-08-20_18-39-49.jpg',
  'photo_22_2026-08-20_18-39-04.jpg',
  'photo_22_2026-08-20_18-39-49.jpg',
  'photo_23_2026-08-20_18-39-04.jpg',
  'photo_24_2026-08-20_18-39-04.jpg',
  'photo_26_2026-08-20_18-39-49.jpg',
  'photo_27_2026-08-20_18-39-49.jpg',
  'photo_28_2026-08-20_18-39-49.jpg',
  'photo_29_2026-08-20_18-39-49.jpg',
  'photo_31_2026-08-20_18-39-49.jpg',
  'photo_35_2026-08-20_18-39-49.jpg',
  'photo_36_2026-08-20_18-39-49.jpg',
  'photo_38_2026-08-20_18-39-49.jpg',
  'photo_39_2026-08-20_18-39-49.jpg',
  'photo_40_2026-08-20_18-39-49.jpg',
  'photo_41_2026-08-20_18-39-49.jpg',
  'photo_42_2026-08-20_18-39-49.jpg',
  'photo_43_2026-08-20_18-39-49.jpg',
  'photo_44_2026-08-20_18-39-49.jpg',
  'photo_45_2026-08-20_18-39-49.jpg',
  'photo_47_2026-08-20_18-39-49.jpg',
  'photo_48_2026-08-20_18-39-49.jpg',
  'photo_49_2026-08-20_18-39-49.jpg',
  'photo_50_2026-08-20_18-39-49.jpg',
  'photo_51_2026-08-20_18-39-49.jpg',
  'photo_52_2026-08-20_18-39-49.jpg',
  'photo_53_2026-08-20_18-39-49.jpg',
  'photo_54_2026-08-20_18-39-49.jpg',
  'photo_55_2026-08-20_18-39-49.jpg',
  'photo_56_2026-08-20_18-39-49.jpg',
  'photo_58_2026-08-20_18-39-49.jpg',
  'photo_59_2026-08-20_18-39-49.jpg',
  'photo_60_2026-08-20_18-39-49.jpg',
  'photo_62_2026-08-20_18-39-49.jpg',
  'photo_63_2026-08-20_18-39-49.jpg',
  'photo_64_2026-08-20_18-39-49.jpg',
  'photo_65_2026-08-20_18-39-50.jpg',
  'photo_66_2026-08-20_18-39-50.jpg',
  'photo_67_2026-08-20_18-39-50.jpg',
  'photo_68_2026-08-20_18-39-50.jpg',
] as const;
const importedArchivePhotos: Photo[] = archivePhotoFiles.map((file, index) => ({
    src: `${import.meta.env.BASE_URL}gallery/${file}`,
    alt: `Archive photograph ${index + 1}`,
    label: `archive / ${String(index + 1).padStart(2, '0')}`,
    category: 'places',
    size: 'square',
  }));

const photos: Photo[] = [
  { src: portrait, alt: 'Konstantin in an elevator', label: 'self / reflected', category: 'portraits', size: 'tall' },
  { src: roadBack, alt: 'Konstantin walking along a road in Thailand', label: 'moving through', category: 'places', size: 'wide' },
  { src: couple, alt: 'Konstantin and Nyx together', label: '30.08.25', category: 'portraits', size: 'wide' },
  { src: mountainLean, alt: 'Konstantin beside a road', label: 'not quite posed', category: 'portraits', size: 'square' },
  { src: beachSmile, alt: 'Konstantin by the sea', label: 'low tide', category: 'portraits', size: 'tall' },
  { src: pilot, alt: 'Konstantin in a pilot uniform', label: 'simulation / service', category: 'work', size: 'square' },
  { src: sea, alt: 'Konstantin near turquoise water', label: 'island memory', category: 'places', size: 'wide' },
  { src: volunteer, alt: 'Tourist Police volunteer', label: 'on duty', category: 'work', size: 'tall' },
  { src: radar, alt: 'Radar dome beneath a grey sky', label: 'quiet machine', category: 'places', size: 'square' },
  { src: sunset, alt: 'Sunset over the sea', label: 'end of day', category: 'places', size: 'wide' },
  { src: volunteerCard, alt: 'A day outdoors', label: 'field note', category: 'work', size: 'square' },
  { src: lockscreen, alt: 'A phone and a quiet moment', label: 'in between', category: 'work', size: 'tall' },
  ...importedArchivePhotos,
];

function Fade({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`fade-in ${className}`}>{children}</div>;
}

function Header({ lang, setLang, open, setOpen, activeSection, progress, t }: { lang: Language; setLang: (lang: Language) => void; open: boolean; setOpen: (value: boolean) => void; activeSection: string; progress: number; t: Copy }) {
  return <header className="index-header">
    <div className="scroll-progress" style={{ width: `${progress}%` }} />
    <a href="#top" className="brand" aria-label="FRAGMENT home"><span className="brand-mark">F</span><span>FRAGMENT</span></a>
    <button className="mobile-menu" type="button" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X size={18} /> : <Menu size={18} />}</button>
    <nav className={`index-nav ${open ? 'is-open' : ''}`} aria-label="Main navigation">
      {chapters.map((chapter) => <a key={chapter.id} className={activeSection === chapter.id ? 'is-active' : ''} href={`#${chapter.id}`} onClick={() => setOpen(false)} aria-current={activeSection === chapter.id ? 'location' : undefined}><span>{chapter.number}</span>{t[chapter.key]}</a>)}
    </nav>
    <button className="language" type="button" onClick={() => setLang(lang === 'en' ? 'ru' : 'en')}>{lang === 'en' ? 'RU' : 'EN'}</button>
  </header>;
}

function Hero({ t }: { t: Copy }) {
  return <section id="top" className="index-hero">
    <div className="hero-index-number">00<span>/07</span></div>
    <div className="hero-copy">
      <Fade><p className="eyebrow">{t.label}</p></Fade>
      <Fade><h1>{t.slogan}</h1></Fade>
      <Fade><p className="hero-small">{t.introSmall}</p></Fade>
      <Fade><a className="enter-link" href="#build">{t.scroll}<ArrowDown size={15} /></a></Fade>
    </div>
    <div className="hero-visual">
      <div className="hero-image-frame"><img src={mountainLean} alt="Konstantin standing with his arms crossed" /></div>
      <span className="image-note image-note-top">09°31'N / 100°03'E</span>
      <span className="image-note image-note-bottom">KOH SAMUI / 20°</span>
    </div>
    <div className="hero-side-note">a personal website<br />not a resume</div>
  </section>;
}

function Chapter({ id, number, tag, title, children, className = '' }: { id: string; number: string; tag: string; title: string; children: ReactNode; className?: string }) {
  return <section id={id} className={`chapter ${className}`}><div className="chapter-mark"><span>{number}</span><i /></div><div className="chapter-content"><p className="eyebrow">{tag}</p><h2>{title}</h2>{children}</div></section>;
}

function Origin({ t }: { t: Copy }) {
  return <Chapter id="origin" number="01" tag={t.originTag} title={t.originTitle} className="origin-chapter">
    <div className="origin-grid"><p className="large-copy">{t.originBody}</p><div className="origin-aside"><img src={roadBack} alt="A road on Koh Samui" /><p>{t.originAside}</p></div></div>
    <div className="route-strip">{timeline.map((item) => <div key={item.year} className="route-stop"><span>{item.year}</span><strong>{item.enTitle}</strong><small>{item.enBody}</small></div>)}</div>
  </Chapter>;
}

function Worlds({ t }: { t: Copy }) {
  return <Chapter id="worlds" number="02" tag={t.worldsTag} title={t.worldsTitle} className="worlds-chapter">
    <div className="worlds-grid"><img className="worlds-image" src={pilot} alt="Konstantin in a pilot uniform" /><div><p className="large-copy">{t.worldsBody}</p><div className="world-tags"><span>GTA V RP</span><span>YDDY / CODE 6</span><span>FLIGHT SIM</span><span>LOW / HARD RP</span></div></div></div>
  </Chapter>;
}

function Build({ t, lang }: { t: Copy; lang: Language }) {
  return <Chapter id="build" number="03" tag={t.buildTag} title={t.buildTitle} className="build-chapter">
   <p className="chapter-intro">{t.buildBody}</p><div className="project-grid">{projects.map((project, index) => <article className="project-card" key={project.name}><div className={`project-card-image ${project.image ? '' : 'is-empty'} ${'kind' in project && project.kind === 'site' ? 'is-site' : ''}`}>{project.image ? ('kind' in project && project.kind === 'site' ? <img src={project.image} alt={`${project.name} website screenshot`} /> : <div className="project-icon-shell"><img src={project.image} alt={`${project.name} logo`} /></div>) : <span className="project-placeholder">No visual asset</span>}</div><div className="project-card-meta"><span>{String(index + 1).padStart(2, '0')}</span><span>{t[project.status]}</span></div><h3>{project.name}</h3><p>{lang === 'ru' ? project.bodyRu : project.body}</p><small>{lang === 'ru' ? project.roleRu : project.role}</small><div className="project-hover-stack">{project.stack.join(' · ')}</div><a className="project-link" href="#contact">{project.image ? t.projectLink : t.requestAccess}<ArrowUpRight size={13} /></a></article>)}</div><div className="skills-block"><p className="eyebrow">{lang === 'ru' ? 'МОЙ СТЕК НАВЫКОВ' : 'MY SKILL STACK'}</p><div className="skills-list">{skillStack[lang].map((skill) => <span key={skill}>{skill}</span>)}</div></div>
  </Chapter>;
}

function Timeline({ t, lang }: { t: Copy; lang: Language }) {
  return <section id="timeline" className="timeline-chapter"><div className="timeline-heading"><div className="chapter-mark"><span>04</span><i /></div><div><p className="eyebrow">04 — TIMELINE</p><h2>{t.timelineTitle}</h2><p className="chapter-intro">{t.timelineBody}</p></div></div><div className="timeline-list">{timeline.map((item) => <article className="timeline-item" key={`${item.year}-${item.enTitle}`}><div className="timeline-date">{item.year}</div><div className="timeline-dot" /><div className="timeline-copy"><h3>{lang === 'ru' ? item.ruTitle : item.enTitle}</h3><p>{lang === 'ru' ? item.ruBody : item.enBody}</p></div></article>)}</div></section>;
}

function People({ t }: { t: Copy }) {
  return <Chapter id="people" number="04" tag={t.peopleTag} title={t.peopleTitle} className="people-chapter">
    <div className="people-layout"><p className="large-copy">{t.peopleBody}</p><div className="people-list"><div><span>2024</span><strong>13 сырников / Red Tiger Cafe</strong><p>Marketing, advertising, Burmese team communication, feedback and operations.</p></div><div><span>2025</span><strong>Personal assistant</strong><p>Tickets, research, planning and support across whatever needed attention.</p></div><div><span>2025—now</span><strong>Thailand Tourist Police</strong><p>Duty shifts, events, help and translation for Russian-speaking tourists.</p></div></div></div>
  </Chapter>;
}

function Nyx({ t }: { t: Copy }) {
  return <section id="nyx" className="nyx-chapter"><div className="nyx-number">05</div><div className="nyx-image"><img src={couple} alt="Konstantin and Nyx together" /><span>30.08.2025</span></div><div className="nyx-copy"><p className="eyebrow">{t.nyxTag}</p><h2>{t.nyxTitle}</h2><p className="nyx-lead">{t.nyxLead}</p><p>{t.nyxBody}</p></div></section>;
}

function Archive({ t }: { t: Copy }) {
  const [filter, setFilter] = useState<'all' | Photo['category']>('all');
  const [active, setActive] = useState<number | null>(null);
  const visible = useMemo(() => filter === 'all' ? photos : photos.filter((photo) => photo.category === filter), [filter]);
  const activePhoto = active === null ? null : photos[active];
  const move = (direction: number) => { if (active === null) return; const position = visible.findIndex((photo) => photo.src === photos[active].src); const next = (position + direction + visible.length) % visible.length; setActive(photos.findIndex((photo) => photo.src === visible[next].src)); };
  useEffect(() => { const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') setActive(null); if (event.key === 'ArrowRight') move(1); if (event.key === 'ArrowLeft') move(-1); }; window.addEventListener('keydown', onKey); return () => window.removeEventListener('keydown', onKey); });
  const labels = { all: t.all, portraits: t.portraits, places: t.places, work: t.work };
  return <section id="archive" className="archive-chapter"><div className="archive-head"><div className="chapter-mark"><span>06</span><i /></div><div><p className="eyebrow">{t.archiveTag}</p><h2>{t.archiveTitle}</h2><p className="chapter-intro">{t.archiveBody}</p></div></div><div className="archive-tools">{(['all', 'portraits', 'places', 'work'] as const).map((key) => <button key={key} type="button" onClick={() => setFilter(key)} className={filter === key ? 'active' : ''}>{labels[key]}</button>)}</div><div className="archive-grid">{visible.map((photo) => { const index = photos.findIndex((item) => item.src === photo.src); return <button key={photo.src} type="button" className="archive-photo" onClick={() => setActive(index)}><img src={photo.src} alt={photo.alt} /><span>{photo.label}</span></button>; })}</div>{activePhoto && <div className="lightbox" role="dialog" aria-modal="true" aria-label={activePhoto.label} onClick={() => setActive(null)}><button className="lightbox-close" type="button" onClick={() => setActive(null)} aria-label="Close"><X size={20} /></button><button className="lightbox-prev" type="button" onClick={(event) => { event.stopPropagation(); move(-1); }} aria-label="Previous"><ChevronLeft /></button><div className="lightbox-inner" onClick={(event) => event.stopPropagation()}><img src={activePhoto.src} alt={activePhoto.alt} /><div><strong>{activePhoto.label}</strong><span>{String((active ?? 0) + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}</span></div></div><button className="lightbox-next" type="button" onClick={(event) => { event.stopPropagation(); move(1); }} aria-label="Next"><ChevronRight /></button></div>}</section>;
}

function Contact({ t }: { t: Copy }) {
  return <section id="contact" className="contact-chapter"><div className="contact-number">07</div><div className="contact-copy"><p className="eyebrow">{t.contactTag}</p><h2>{t.contactTitle}</h2><p>{t.contactBody}</p></div><div className="contact-links"><a href="https://t.me/kvyazovov" target="_blank" rel="noreferrer"><MessageCircle size={16} />@kvyazovov<ArrowUpRight size={16} /></a><a href="https://wa.me/66618628454" target="_blank" rel="noreferrer"><Phone size={16} />+66 61 862 8454<ArrowUpRight size={16} /></a><a href="mailto:legomanun@gmail.com"><Mail size={16} />legomanun@gmail.com<ArrowUpRight size={16} /></a></div><footer><span>{t.footer}</span><span>THE FUTURE IS BUILT / NOT WAITED FOR</span></footer></section>;
}

function Home() {
  const [lang, setLang] = useState<Language>('ru');
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('build');
  const [progress, setProgress] = useState(0);
  const t = copy[lang];
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
      const current = [...chapters].reverse().find((chapter) => {
        const element = document.getElementById(chapter.id);
        return element && element.getBoundingClientRect().top <= 180;
      });
      if (current) setActiveSection(current.id);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, []);
  return <main data-palette="mono" className="fragment-index"><Header lang={lang} setLang={setLang} open={open} setOpen={setOpen} activeSection={activeSection} progress={progress} t={t} /><Hero t={t} /><div className="index-map"><span>{t.map}</span>{chapters.slice(0, 6).map((chapter) => <a key={chapter.id} href={`#${chapter.id}`}>{chapter.number} {t[chapter.key]}</a>)}</div><Build t={t} lang={lang} /><Timeline t={t} lang={lang} /><Nyx t={t} /><Archive t={t} /><Contact t={t} /><a className="back-top" href="#top" aria-label="Back to top"><ArrowUp size={15} /></a></main>;
}

function Router() {
  return <Switch><Route path="/" component={Home} /><Route component={NotFound} /></Switch>;
}

function App() {
  return <QueryClientProvider client={queryClient}><TooltipProvider><WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}><ErrorBoundary><Router /></ErrorBoundary></WouterRouter><Toaster /></TooltipProvider></QueryClientProvider>;
}

export default App;