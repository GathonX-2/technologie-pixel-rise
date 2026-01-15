import {
  ShieldCheck,
  BarChart3,
  Code2,
  Smartphone,
  Search,
  Award,
  Users,
  Sparkles,
  PhoneCall,
  ClipboardList,
  Cpu,
  Cloud,
  Lock,
  MonitorSmartphone,
  Gamepad2,
  PenTool,
  MousePointerClick,
  MapPin,
} from 'lucide-react';

export const navMain = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/apropos' },
  { label: 'Services', to: '/services' },
];

export const navBlogLinks = [
  { label: 'Blog Grid', to: '/blog' },
  { label: 'Blog Detail', to: '/blog/les-secrets-transformation-digitale' },
];

export const navPageLinks = [
  { label: 'Pricing Plan', to: '/price' },
  { label: 'Our Features', to: '/feature' },
  { label: 'Team Members', to: '/team' },
  { label: 'Testimonial', to: '/testimonial' },
  { label: 'Free Quote', to: '/quote' },
];

export const stats = [
  { label: 'Clients Satisfaits', value: '12345', icon: Users },
  { label: 'Projets Réalisés', value: '12345', icon: Award },
  { label: 'Récompenses Gagnées', value: '12345', icon: Award },
];

export const services = [
  {
    title: 'Cybersécurité',
    description: 'Protégez vos données sensibles avec nos solutions avancées de sécurité numérique.',
    icon: ShieldCheck,
  },
  {
    title: 'Analyse de données',
    description:
      'Transformez vos données en informations exploitables grâce à nos outils d’analyse avancés.',
    icon: BarChart3,
  },
  {
    title: 'Développement Web',
    description: 'Créez des sites web modernes et performants pour renforcer votre présence en ligne.',
    icon: Code2,
  },
  {
    title: "Développement d'Applications",
    description: 'Concevez des applications mobiles innovantes et adaptées à vos besoins spécifiques.',
    icon: Smartphone,
  },
  {
    title: 'Optimisation SEO',
    description: 'Boostez la visibilité de votre site grâce à nos stratégies de référencement optimisées.',
    icon: Search,
  },
  {
    title: 'Appelez-Nous pour un Devis',
    description:
      'Contactez nos experts pour obtenir une solution sur-mesure adaptée à vos besoins technologiques.',
    icon: PhoneCall,
  },
];

export const featureBullets = [
  'Technologie de Pointe',
  'Récompenses Gagnées',
  'Équipe Professionnelle',
  'Support 24h/24 et 7j/7',
];

export const homeBlogPosts = [
  {
    slug: 'site-web-performant',
    title: 'Comment créer un site web performant',
    excerpt: 'Apprenez les bases pour développer un site web moderne et fonctionnel.',
    image: '/assets/images/blog-1.jpg',
    date: '01 Jan, 2045',
    author: 'Jean Dupont',
    category: 'Design Web',
  },
  {
    slug: 'erreurs-a-eviter-site',
    title: "Les erreurs à éviter lors de la création d'un site",
    excerpt:
      'Découvrez les erreurs courantes et comment les éviter pour réussir votre projet.',
    image: '/assets/images/blog-2.jpg',
    date: '01 Jan, 2045',
    author: 'Jean Dupont',
    category: 'IA',
  },
  {
    slug: 'tendances-design-web',
    title: 'Tendances actuelles en design web',
    excerpt:
      "Explorez les dernières tendances pour améliorer l'expérience utilisateur de vos sites.",
    image: '/assets/images/blog-3.jpg',
    date: '01 Jan, 2045',
    author: 'Jean Dupont',
    category: 'Industrialisation',
  },
];

export const blogPosts = [
  {
    slug: 'les-secrets-transformation-digitale',
    title: 'Les Secrets de la Transformation Digitale',
    excerpt:
      'Découvrez comment les nouvelles technologies transforment les entreprises et ouvrent la voie à des opportunités infinies.',
    image: '/assets/images/blog-1.jpg',
    date: '01 Janvier, 2045',
    category: 'Innovation Technologique',
    badge: 'Innovation Technologique',
    author: 'Admin',
  },
  {
    slug: 'potentiel-du-cloud',
    title: 'Comment Exploiter le Potentiel du Cloud',
    excerpt:
      'Le cloud computing permet de gérer vos données de manière sécurisée et flexible, en améliorant la collaboration et la productivité.',
    image: '/assets/images/blog-2.jpg',
    date: '01 Janvier, 2045',
    category: 'Technologie Numérique',
    badge: 'Technologie Numérique',
    author: 'Admin',
  },
  {
    slug: 'cles-transformation-digitale',
    title: 'Les Clés pour Réussir une Transformation Digitale',
    excerpt:
      'Découvrez comment les entreprises peuvent utiliser les outils numériques pour améliorer leurs processus et rester compétitives.',
    image: '/assets/images/blog-3.jpg',
    date: '01 Janvier, 2045',
    category: 'Technologie Innovante',
    badge: 'Technologie Innovante',
    author: 'Admin',
  },
  {
    slug: 'ecosysteme-numerique-performant',
    title: 'Créer un Écosystème Numérique Performant',
    excerpt:
      'Apprenez comment les entreprises peuvent intégrer des solutions numériques pour booster leur efficacité et leur compétitivité.',
    image: '/assets/images/blog-1.jpg',
    date: '01 Janvier, 2045',
    category: 'Technologie Numérique',
    badge: 'Technologie Numérique',
    author: 'Admin',
  },
  {
    slug: 'app-mobile-performante',
    title: 'Les Meilleures Pratiques pour Construire une Application Mobile',
    excerpt:
      'Découvrez les étapes clés et les meilleures pratiques pour créer des applications mobiles performantes et sécurisées, adaptées aux besoins de vos utilisateurs.',
    image: '/assets/images/blog-2.jpg',
    date: '01 Janvier, 2045',
    category: 'Technologie Numérique',
    badge: 'Technologie Numérique',
    author: 'Admin',
  },
  {
    slug: 'strategie-numerique-solide',
    title: 'Construire une Stratégie Numérique Solide',
    excerpt:
      'Découvrez comment élaborer une stratégie numérique efficace pour maximiser votre productivité et rester compétitif dans un monde connecté.',
    image: '/assets/images/blog-3.jpg',
    date: '01 Janvier, 2045',
    category: "Technologies de l'Innovation",
    badge: "Technologies de l'Innovation",
    author: 'Admin',
  },
  {
    slug: 'presence-numerique-impactante',
    title: 'Construire une Présence Numérique Impactante',
    excerpt:
      'Apprenez comment utiliser les outils technologiques modernes pour créer une présence en ligne forte et engageante.',
    image: '/assets/images/blog-1.jpg',
    date: '01 Janvier, 2045',
    category: 'Transformation Numérique',
    badge: 'Infrastructures Numériques',
    author: 'Admin',
  },
  {
    slug: 'strategie-numerique-performante',
    title: 'Développer une Stratégie Numérique Performante',
    excerpt:
      'Découvrez comment exploiter les outils technologiques pour bâtir une stratégie numérique efficace et pérenne.',
    image: '/assets/images/blog-2.jpg',
    date: '01 Janvier, 2045',
    category: 'Technologie Avancée',
    badge: 'Technologie Avancée',
    author: 'Admin',
  },
  {
    slug: 'plateforme-numerique-efficace',
    title: 'Construire une Plateforme Numérique Efficace',
    excerpt:
      'Apprenez les fondamentaux pour développer des plateformes numériques robustes et sécurisées, adaptées à vos besoins technologiques.',
    image: '/assets/images/blog-3.jpg',
    date: '01 Janvier, 2045',
    category: 'Infrastructures Numériques',
    badge: 'Infrastructures Numériques',
    author: 'Admin',
  },
  {
    slug: 'infrastructure-numerique-solide',
    title: 'Comment Concevoir une Infrastructure Numérique Solide',
    excerpt:
      'Découvrez les fondamentaux pour bâtir des infrastructures numériques fiables et adaptées aux défis de la transformation technologique.',
    image: '/assets/images/blog-1.jpg',
    date: '01 Janvier, 2045',
    category: 'Technologies Modernes',
    badge: 'Technologies Modernes',
    author: 'Admin',
  },
];

export const blogCategories = [
  'Innovation Technologique',
  'Développement Numérique',
  'Transformation Digitale',
  'Recherche Avancée',
  'Marketing Numérique',
];

export const blogRecentPosts = [
  { title: "L'Impact de l'IA sur le Secteur Numérique", image: '/assets/images/blog-1.jpg' },
  { title: 'Les Avancées du Cloud Computing', image: '/assets/images/blog-2.jpg' },
  { title: 'Sécuriser vos Données en Ligne', image: '/assets/images/blog-3.jpg' },
  { title: 'Les Meilleures Solutions Numériques', image: '/assets/images/blog-1.jpg' },
  { title: 'Développer une Présence Numérique', image: '/assets/images/blog-2.jpg' },
  { title: 'Les Tendances Technologiques de Demain', image: '/assets/images/blog-3.jpg' },
];

export const blogTags = [
  'Innovation',
  'Développement Numérique',
  'Cybersécurité',
  'Référencement SEO',
  'Analyse de Données',
  'Consultation Technologique',
  'Applications Mobiles',
  'Cloud Computing',
  'Transformation Digitale',
  'Automatisation',
  'Développement Web',
  'Intelligence Artificielle',
];

export const blogComments = [
  {
    author: 'John Doe',
    date: '01 Jan 2045',
    text: 'Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed eirmod.',
    avatar: '/assets/images/user.jpg',
    isReply: false,
  },
  {
    author: 'John Doe',
    date: '01 Jan 2045',
    text: 'Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed eirmod.',
    avatar: '/assets/images/user.jpg',
    isReply: false,
  },
  {
    author: 'John Doe',
    date: '01 Jan 2045',
    text: 'Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed eirmod.',
    avatar: '/assets/images/user.jpg',
    isReply: true,
  },
];

export const teamMembersHome = [
  {
    name: 'Scolfiead',
    role: 'Animateur',
    avatar: '/assets/images/team-1.jpg',
  },
  {
    name: 'Meganne',
    role: 'SEO',
    avatar: '/assets/images/team-2.jpg',
  },
  {
    name: 'Lion HILL',
    role: 'Assistant PDG',
    avatar: '/assets/images/team-3.jpg',
  },
];

export const teamMembersPage = [
  { name: 'Full Name', role: 'Designation', avatar: '/assets/images/team-1.jpg' },
  { name: 'Full Name', role: 'Designation', avatar: '/assets/images/team-2.jpg' },
  { name: 'Full Name', role: 'Designation', avatar: '/assets/images/team-3.jpg' },
];

export const testimonials = [
  {
    author: 'Sarah',
    role: 'Analyst technologie',
    text:
      'Les solutions technologiques fournies ont surpassé mes attentes. Un excellent service avec des résultats impressionnants !',
    avatar: '/assets/images/testimonial-1.jpg',
  },
  {
    author: 'Leo',
    role: 'Directeur Commercial',
    text:
      'Une équipe professionnelle et réactive qui a aidé à optimiser nos processus numériques avec succès.',
    avatar: '/assets/images/testimonial-2.jpg',
  },
  {
    author: 'Mika',
    role: 'PDG',
    text:
      "Grâce à leurs solutions technologiques, notre entreprise a pu atteindre de nouveaux sommets. Je recommande vivement !",
    avatar: '/assets/images/testimonial-3.jpg',
  },
  {
    author: 'Lianah',
    role: 'Directrice WEB',
    text:
      'Un service impeccable et une expertise technologique inégalée. Nous sommes ravis des résultats obtenus.',
    avatar: '/assets/images/testimonial-4.jpg',
  },
];

export const testimonialsPage = [
  {
    author: 'Client Name',
    role: 'Profession',
    text: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam',
    avatar: '/assets/images/testimonial-1.jpg',
  },
  {
    author: 'Client Name',
    role: 'Profession',
    text: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam',
    avatar: '/assets/images/testimonial-2.jpg',
  },
  {
    author: 'Client Name',
    role: 'Profession',
    text: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam',
    avatar: '/assets/images/testimonial-3.jpg',
  },
  {
    author: 'Client Name',
    role: 'Profession',
    text: 'Dolor et eos labore, stet juste sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam',
    avatar: '/assets/images/testimonial-4.jpg',
  },
];

export const expertiseCards = [
  {
    title: 'Intelligence Artificielle',
    text:
      "Utilisez le potentiel de l'IA pour automatiser vos processus, optimiser vos performances et prendre des décisions basées sur des données fiables.",
    icon: Cpu,
    highlight: true,
  },
  {
    title: 'Cloud Computing',
    text:
      'Accédez à des infrastructures puissantes et sécurisées pour stocker, gérer et analyser vos données, tout en réduisant vos coûts opérationnels.',
    icon: Cloud,
  },
  {
    title: 'Cybersécurité',
    text:
      'Protégez vos systèmes et données sensibles avec nos solutions avancées en cybersécurité, conçues pour contrer les menaces numériques.',
    icon: Lock,
    highlight: true,
  },
  {
    title: 'Développement Logiciel',
    text:
      'Créez des logiciels sur mesure qui répondent parfaitement aux besoins uniques de votre entreprise, tout en intégrant les dernières innovations.',
    icon: MonitorSmartphone,
  },
];

export const solutionsTechnologiques = [
  {
    title: 'Sécurité Informatique',
    text:
      'Assurez la protection de vos données sensibles grâce à nos solutions avancées en cybersécurité.',
    icon: ShieldCheck,
  },
  {
    title: 'Analyse des Données',
    text:
      'Exploitez le pouvoir de vos données grâce à nos outils performants d’analyse et de reporting.',
    icon: BarChart3,
  },
  {
    title: 'Création de Sites Web',
    text:
      'Développez des plateformes en ligne modernes pour optimiser votre visibilité numérique.',
    icon: Code2,
  },
  {
    title: "Développement d'Applications Mobiles",
    text: 'Concevez des applications performantes, accessibles et adaptées à votre audience.',
    icon: Smartphone,
  },
  {
    title: 'Stratégies SEO',
    text:
      'Améliorez votre classement dans les moteurs de recherche grâce à des techniques de référencement efficaces.',
    icon: Search,
  },
  {
    title: 'Développement Jeux',
    text:
      'Créez des expériences interactives et immersives avec nos solutions avancées de développement de jeux.',
    icon: Gamepad2,
  },
];

export const pricing = [
  {
    name: 'Basic Plan',
    subtitle: 'For Small Size Business',
    price: '$49.00',
    period: '/ Month',
    perks: [
      { label: 'HTML5 & CSS3', available: true },
      { label: 'Bootstrap v5', available: true },
      { label: 'Responsive Layout', available: false },
      { label: 'Cross-browser Support', available: false },
    ],
  },
  {
    name: 'Standard Plan',
    subtitle: 'For Medium Size Business',
    price: '$99.00',
    period: '/ Month',
    perks: [
      { label: 'HTML5 & CSS3', available: true },
      { label: 'Bootstrap v5', available: true },
      { label: 'Responsive Layout', available: true },
      { label: 'Cross-browser Support', available: false },
    ],
  },
  {
    name: 'Advanced Plan',
    subtitle: 'For Large Size Business',
    price: '$149.00',
    period: '/ Month',
    perks: [
      { label: 'HTML5 & CSS3', available: true },
      { label: 'Bootstrap v5', available: true },
      { label: 'Responsive Layout', available: true },
      { label: 'Cross-browser Support', available: true },
    ],
  },
];

export const quoteBullets = [
  'Réponse sous 24 heures',
  'Support téléphonique 24h/24',
];

export const contactCards = [
  {
    title: 'Appelez-nous',
    detail: '+261 (32) 00 000 00',
    icon: PhoneCall,
  },
  {
    title: 'Envoyez-nous un email',
    detail: 'info@im-technologie.com',
    icon: PenTool,
  },
  {
    title: 'Visitez nos bureaux',
    detail: 'Hell-Ville, Nosy-Be, DIANA, MADAGASCAR',
    icon: MapPin,
  },
];

export const address = 'Hell-Ville, Nosy-Be, DIANA, MADAGASCAR';
export const phone = '+261 (32) 00 000 00';
export const email = 'info@islandmanager.com';
export const footerQuickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/apropos' },
  { label: 'Our Services', href: '/services' },
  { label: 'Meet The Team', href: '/team' },
  { label: 'Latest Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
];
export const footerPopularLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/apropos' },
  { label: 'Our Services', href: '/services' },
  { label: 'Meet The Team', href: '/team' },
  { label: 'Latest Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
];
export const headerImages = {
  homeHero1: '/assets/images/technologie.avif',
  aboutHero: '/assets/images/girlPhone.avif',
  servicesHero: '/assets/images/carte.avif',
  blogHero: '/assets/images/imageBlog.jpg',
  contactHero: '/assets/images/call.avif',
};

export const vendorLogos = [
  '/assets/images/vendor-1.jpg',
  '/assets/images/vendor-2.jpg',
  '/assets/images/vendor-3.jpg',
  '/assets/images/vendor-4.jpg',
  '/assets/images/vendor-5.jpg',
  '/assets/images/vendor-6.jpg',
  '/assets/images/vendor-7.jpg',
  '/assets/images/vendor-8.jpg',
  '/assets/images/vendor-9.jpg',
];
