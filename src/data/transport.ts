import type { Localized, RailLine } from './types';

// Transport facts change. Check every detail against the official sites linked below before launch.

export const railLines: {
  id: RailLine;
  name: Localized;
  operator: string;
  url: string;
  stations: Localized[];
  about: Localized;
}[] = [
  {
    id: 'haramain',
    name: { en: 'Haramain High-Speed Railway', ar: 'قطار الحرمين السريع' },
    operator: 'hhr.sa',
    url: 'https://hhr.sa',
    stations: [
      { en: 'Makkah', ar: 'مكة المكرمة' },
      { en: 'Jeddah (Al-Sulaimaniyah)', ar: 'جدة (السليمانية)' },
      { en: 'Jeddah Airport (KAIA)', ar: 'مطار الملك عبدالعزيز الدولي' },
      { en: 'King Abdullah Economic City', ar: 'مدينة الملك عبدالله الاقتصادية' },
      { en: 'Madinah', ar: 'المدينة المنورة' },
    ],
    about: {
      en: 'Fast electric trains link Makkah, Jeddah and Madinah in a few hours, much quicker than driving. Only Muslims may travel to Makkah station.',
      ar: 'قطارات كهربائية سريعة تربط مكة المكرمة وجدة والمدينة المنورة في ساعات قليلة، وهي أسرع بكثير من القيادة. السفر إلى محطة مكة المكرمة مقصور على المسلمين.',
    },
  },
  {
    id: 'sar-east',
    name: { en: 'SAR East Train', ar: 'قطار الشرق (سار)' },
    operator: 'sar.com.sa',
    url: 'https://www.sar.com.sa',
    stations: [
      { en: 'Riyadh', ar: 'الرياض' },
      { en: 'Hofuf (Al-Ahsa)', ar: 'الهفوف (الأحساء)' },
      { en: 'Abqaiq', ar: 'بقيق' },
      { en: 'Dammam', ar: 'الدمام' },
    ],
    about: {
      en: 'The easiest way to get from Riyadh to Al-Ahsa and the Eastern Province. Comfortable, with business-class seats.',
      ar: 'أسهل وسيلة للتنقل من الرياض إلى الأحساء والمنطقة الشرقية، وهو مريح ويضم مقاعد درجة الأعمال.',
    },
  },
  {
    id: 'sar-north',
    name: { en: 'SAR North Train', ar: 'قطار الشمال (سار)' },
    operator: 'sar.com.sa',
    url: 'https://www.sar.com.sa',
    stations: [
      { en: 'Riyadh', ar: 'الرياض' },
      { en: 'Al Majmaah', ar: 'المجمعة' },
      { en: 'Qassim', ar: 'القصيم' },
      { en: 'Hail', ar: 'حائل' },
      { en: 'Al Jouf', ar: 'الجوف' },
      { en: 'Al Qurayyat', ar: 'القريات' },
    ],
    about: {
      en: 'A long-distance line from Riyadh to the north, useful for Qassim, Hail and Al Jouf. Night trains run on parts of the route.',
      ar: 'خط طويل من الرياض إلى الشمال، مفيد للوصول إلى القصيم وحائل والجوف، وتعمل قطارات ليلية على أجزاء من المسار.',
    },
  },
];

export const distances: { from: Localized; to: Localized; km: number }[] = [
  { from: { en: 'Riyadh', ar: 'الرياض' }, to: { en: 'Dammam', ar: 'الدمام' }, km: 400 },
  { from: { en: 'Riyadh', ar: 'الرياض' }, to: { en: 'Jeddah', ar: 'جدة' }, km: 950 },
  { from: { en: 'Riyadh', ar: 'الرياض' }, to: { en: 'Hail', ar: 'حائل' }, km: 640 },
  { from: { en: 'Jeddah', ar: 'جدة' }, to: { en: 'Taif', ar: 'الطائف' }, km: 170 },
  { from: { en: 'Jeddah', ar: 'جدة' }, to: { en: 'Madinah', ar: 'المدينة المنورة' }, km: 420 },
  { from: { en: 'Madinah', ar: 'المدينة المنورة' }, to: { en: 'AlUla', ar: 'العُلا' }, km: 330 },
  { from: { en: 'AlUla', ar: 'العُلا' }, to: { en: 'Tabuk', ar: 'تبوك' }, km: 330 },
  { from: { en: 'Jeddah', ar: 'جدة' }, to: { en: 'Abha', ar: 'أبها' }, km: 650 },
  { from: { en: 'Abha', ar: 'أبها' }, to: { en: 'Jazan', ar: 'جازان' }, km: 200 },
  { from: { en: 'Abha', ar: 'أبها' }, to: { en: 'Najran', ar: 'نجران' }, km: 280 },
];

export type TransportSection = {
  id: string;
  icon: string;
  title: Localized;
  paragraphs: Localized[];
  tips?: Localized[];
  links?: { label: string; url: string }[];
};

export const sections: TransportSection[] = [
  {
    id: 'flying',
    icon: '✈️',
    title: { en: 'Flying between cities', ar: 'الطيران بين المدن' },
    paragraphs: [
      {
        en: 'Saudi Arabia is huge, so domestic flights are often the best way to cover long distances. Saudia, flynas and flyadeal fly between the main cities, and every region has at least one airport.',
        ar: 'المملكة شاسعة المساحة، لذا تكون الرحلات الداخلية غالباً أفضل وسيلة لقطع المسافات الطويلة. تسيّر "السعودية" و"طيران ناس" و"طيران أديل" رحلات بين المدن الرئيسية، وفي كل منطقة مطار واحد على الأقل.',
      },
      {
        en: 'Book early for weekends, school holidays and Riyadh Season, when flights fill up quickly.',
        ar: 'احجز مبكراً لعطلات نهاية الأسبوع والإجازات المدرسية وموسم الرياض، فالرحلات تمتلئ بسرعة.',
      },
    ],
  },
  {
    id: 'trains',
    icon: '🚄',
    title: { en: 'Trains', ar: 'القطارات' },
    paragraphs: [
      {
        en: 'Three passenger rail lines connect the main cities. Book tickets online or in the operator\'s app; trains are modern, clean and punctual.',
        ar: 'تربط ثلاثة خطوط قطارات للركاب بين المدن الرئيسية. احجز التذاكر عبر الإنترنت أو تطبيق المشغّل، فالقطارات حديثة ونظيفة ودقيقة المواعيد.',
      },
    ],
  },
  {
    id: 'city',
    icon: '🚕',
    title: { en: 'Getting around cities', ar: 'التنقل داخل المدن' },
    paragraphs: [
      {
        en: 'Ride-hailing apps such as Uber and Careem work in all big cities and are the easiest option for most visitors. Licensed taxis are also available at airports.',
        ar: 'تعمل تطبيقات النقل مثل أوبر وكريم في جميع المدن الكبرى، وهي الخيار الأسهل لمعظم الزوار. وتتوفر أيضاً سيارات الأجرة المرخّصة في المطارات.',
      },
      {
        en: 'Riyadh has a new metro with six lines that opened in 2024–2025, plus a city bus network. Jeddah, Madinah and other cities have public buses too.',
        ar: 'في الرياض مترو جديد من ستة خطوط افتُتح في 2024–2025، إضافة إلى شبكة حافلات. وفي جدة والمدينة المنورة ومدن أخرى حافلات عامة كذلك.',
      },
    ],
    links: [{ label: 'Riyadh Metro & Bus (RCRC)', url: 'https://www.rcrc.gov.sa' }],
  },
  {
    id: 'bus',
    icon: '🚌',
    title: { en: 'Intercity buses', ar: 'الحافلات بين المدن' },
    paragraphs: [
      {
        en: 'SAPTCO and other operators run long-distance coaches between most cities. They are cheap but slow, so they suit travellers with time and a small budget.',
        ar: 'تسيّر "سابتكو" وشركات أخرى حافلات بين معظم المدن. وهي رخيصة لكنها بطيئة، فتناسب المسافرين ذوي الوقت الكافي والميزانية المحدودة.',
      },
    ],
    links: [{ label: 'SAPTCO', url: 'https://www.saptco.com.sa' }],
  },
  {
    id: 'driving',
    icon: '🚗',
    title: { en: 'Renting a car and driving', ar: 'استئجار سيارة والقيادة' },
    paragraphs: [
      {
        en: 'A car gives you the most freedom, especially for mountains, deserts and small villages. Major rental companies have desks at airports. Traffic drives on the right.',
        ar: 'تمنحك السيارة أكبر قدر من الحرية، خاصة في الجبال والصحارى والقرى الصغيرة. ولشركات التأجير الكبرى مكاتب في المطارات، والقيادة على الجانب الأيمن.',
      },
    ],
    tips: [
      {
        en: 'Check with the rental company which licence you need. Many visitors need an International Driving Permit.',
        ar: 'تحقّق من شركة التأجير من نوع الرخصة المطلوبة، فكثير من الزوار يحتاجون إلى رخصة قيادة دولية.',
      },
      {
        en: 'Speed cameras are everywhere, and fines are sent to the rental company and charged to you.',
        ar: 'كاميرات السرعة منتشرة في كل مكان، وتُرسل المخالفات إلى شركة التأجير وتُحمَّل عليك.',
      },
      {
        en: 'Distances are long. Fill up the tank when you can and carry water.',
        ar: 'المسافات طويلة، فاملأ خزان الوقود متى أمكنك واحمل الماء.',
      },
      {
        en: 'Watch out for camels on rural roads, especially at night, and slow down in sandstorms.',
        ar: 'انتبه للإبل على الطرق الريفية خاصة في الليل، وخفّف السرعة أثناء العواصف الرملية.',
      },
      {
        en: 'Don\'t drive off-road alone. For dunes and wadis, hire a 4x4 with an experienced driver or join a licensed tour.',
        ar: 'لا تقُد خارج الطرق المعبّدة وحدك. للكثبان والأودية استأجر سيارة دفع رباعي مع سائق خبير أو انضم إلى جولة مرخّصة.',
      },
    ],
  },
  {
    id: 'visas',
    icon: '🛂',
    title: { en: 'Visas and entry', ar: 'التأشيرات والدخول' },
    paragraphs: [
      {
        en: 'Visitors from many countries can get a tourist eVisa online or a visa on arrival. Rules change, so always check the official visa site before you book.',
        ar: 'يمكن لزوار كثير من الدول الحصول على تأشيرة سياحية إلكترونية أو تأشيرة عند الوصول. والأنظمة تتغير، فتحقّق دائماً من موقع التأشيرات الرسمي قبل الحجز.',
      },
    ],
    links: [
      { label: 'Visit Saudi', url: 'https://www.visitsaudi.com' },
      { label: 'Saudi eVisa', url: 'https://visa.visitsaudi.com' },
    ],
  },
];
