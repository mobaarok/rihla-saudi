import type { Region } from './types';

export const regions: Region[] = [
  {
    slug: 'riyadh',
    iso: 'SA-01',
    name: { en: 'Riyadh', ar: 'الرياض' },
    capital: { en: 'Riyadh', ar: 'الرياض' },
    summary: {
      en: 'The capital region: a modern skyline, the mud-brick birthplace of the Saudi state, and dramatic escarpments on the edge of the desert.',
      ar: 'منطقة العاصمة: أفق حديث، ومهد الدولة السعودية بمبانيه الطينية، ومنحدرات مهيبة على حافة الصحراء.',
    },
    colors: ['#b45309', '#78350f'],
  },
  {
    slug: 'makkah',
    iso: 'SA-02',
    name: { en: 'Makkah', ar: 'مكة المكرمة' },
    capital: { en: 'Makkah', ar: 'مكة المكرمة' },
    summary: {
      en: 'Home to the holiest city in Islam, the historic port of Jeddah, and the cool mountain city of Taif.',
      ar: 'موطن أقدس مدن الإسلام، وميناء جدة التاريخي، ومدينة الطائف الجبلية ذات الأجواء المعتدلة.',
    },
    colors: ['#0e7490', '#164e63'],
  },
  {
    slug: 'madinah',
    iso: 'SA-03',
    name: { en: 'Madinah', ar: 'المدينة المنورة' },
    capital: { en: 'Madinah', ar: 'المدينة المنورة' },
    summary: {
      en: 'The city of the Prophet, and AlUla: sandstone canyons and the ancient Nabataean tombs of Hegra.',
      ar: 'مدينة الرسول ﷺ، والعُلا بأوديتها الرملية ومقابر الحِجر النبطية القديمة.',
    },
    colors: ['#c2410c', '#7c2d12'],
  },
  {
    slug: 'eastern-province',
    iso: 'SA-04',
    name: { en: 'Eastern Province', ar: 'المنطقة الشرقية' },
    capital: { en: 'Dammam', ar: 'الدمام' },
    summary: {
      en: 'Gulf beaches, the vast palm groves of Al-Ahsa, and the cultural centre of Ithra.',
      ar: 'شواطئ الخليج، وواحات نخيل الأحساء الشاسعة، ومركز إثراء الثقافي.',
    },
    colors: ['#0369a1', '#0c4a6e'],
  },
  {
    slug: 'qassim',
    iso: 'SA-05',
    name: { en: 'Qassim', ar: 'القصيم' },
    capital: { en: 'Buraydah', ar: 'بريدة' },
    summary: {
      en: 'The agricultural heart of Najd, famous for its dates and traditional mud-brick towns.',
      ar: 'قلب نجد الزراعي، المشهور بتموره وبلداته الطينية التقليدية.',
    },
    colors: ['#65a30d', '#3f6212'],
  },
  {
    slug: 'hail',
    iso: 'SA-06',
    name: { en: 'Hail', ar: 'حائل' },
    capital: { en: 'Hail', ar: 'حائل' },
    summary: {
      en: 'Granite mountains, desert castles and some of the finest rock art in Arabia.',
      ar: 'جبال من الجرانيت، وقلاع صحراوية، ومن أروع النقوش الصخرية في الجزيرة العربية.',
    },
    colors: ['#a16207', '#713f12'],
  },
  {
    slug: 'tabuk',
    iso: 'SA-07',
    name: { en: 'Tabuk', ar: 'تبوك' },
    capital: { en: 'Tabuk', ar: 'تبوك' },
    summary: {
      en: 'Red Sea coastline, towering canyons and palm-filled wadis in the far northwest.',
      ar: 'ساحل البحر الأحمر، وأودية شاهقة، ووديان مليئة بالنخيل في أقصى الشمال الغربي.',
    },
    colors: ['#be123c', '#881337'],
  },
  {
    slug: 'northern-borders',
    iso: 'SA-08',
    name: { en: 'Northern Borders', ar: 'الحدود الشمالية' },
    capital: { en: 'Arar', ar: 'عرعر' },
    summary: {
      en: 'Open steppe and desert along the old pilgrim and trade routes of the north.',
      ar: 'سهوب وصحارٍ مفتوحة على امتداد طرق الحج والتجارة القديمة في الشمال.',
    },
    colors: ['#57534e', '#292524'],
  },
  {
    slug: 'jazan',
    iso: 'SA-09',
    name: { en: 'Jazan', ar: 'جازان' },
    capital: { en: 'Jazan', ar: 'جازان' },
    summary: {
      en: 'Coral islands in the Red Sea and green terraced mountains in the far southwest.',
      ar: 'جزر مرجانية في البحر الأحمر وجبال خضراء مدرّجة في أقصى الجنوب الغربي.',
    },
    colors: ['#0d9488', '#134e4a'],
  },
  {
    slug: 'najran',
    iso: 'SA-10',
    name: { en: 'Najran', ar: 'نجران' },
    capital: { en: 'Najran', ar: 'نجران' },
    summary: {
      en: 'Mud tower houses, an ancient caravan city and rock art at Hima.',
      ar: 'بيوت طينية شاهقة، ومدينة قوافل قديمة، ونقوش صخرية في حِمى.',
    },
    colors: ['#9a3412', '#431407'],
  },
  {
    slug: 'al-baha',
    iso: 'SA-11',
    name: { en: 'Al Baha', ar: 'الباحة' },
    capital: { en: 'Al Baha', ar: 'الباحة' },
    summary: {
      en: 'Juniper forests, misty mountains and stone villages above the Tihamah plain.',
      ar: 'غابات العرعر، وجبال يلفها الضباب، وقرى حجرية تطل على سهل تهامة.',
    },
    colors: ['#15803d', '#14532d'],
  },
  {
    slug: 'al-jawf',
    iso: 'SA-12',
    name: { en: 'Al Jawf', ar: 'الجوف' },
    capital: { en: 'Sakaka', ar: 'سكاكا' },
    summary: {
      en: 'Olive groves, ancient Dumat al-Jandal and some of the oldest sites in Arabia.',
      ar: 'بساتين الزيتون، ودومة الجندل العريقة، ومن أقدم المواقع في الجزيرة العربية.',
    },
    colors: ['#4d7c0f', '#1a2e05'],
  },
  {
    slug: 'asir',
    iso: 'SA-14',
    name: { en: 'Asir', ar: 'عسير' },
    capital: { en: 'Abha', ar: 'أبها' },
    summary: {
      en: 'The cool, green highlands of the southwest, with painted villages and cloud forests.',
      ar: 'المرتفعات الخضراء الباردة في الجنوب الغربي، بقراها الملوّنة وغاباتها الضبابية.',
    },
    colors: ['#047857', '#064e3b'],
  },
];
