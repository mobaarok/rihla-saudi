import type { City } from './types';

// Main gateway cities, their airports (IATA codes) and train lines.
// Check current routes with the airline, SAR (sar.com.sa) and Haramain (hhr.sa) before you travel.
export const cities: City[] = [
  // Riyadh region
  { slug: 'riyadh', region: 'riyadh', name: { en: 'Riyadh', ar: 'الرياض' }, airport: { code: 'RUH', name: { en: 'King Khalid International Airport', ar: 'مطار الملك خالد الدولي' } }, rail: ['sar-east', 'sar-north'] },
  { slug: 'shaqra', region: 'riyadh', name: { en: 'Shaqra', ar: 'شقراء' } },
  // Makkah region
  { slug: 'jeddah', region: 'makkah', name: { en: 'Jeddah', ar: 'جدة' }, airport: { code: 'JED', name: { en: 'King Abdulaziz International Airport', ar: 'مطار الملك عبدالعزيز الدولي' } }, rail: ['haramain'] },
  { slug: 'makkah', region: 'makkah', name: { en: 'Makkah', ar: 'مكة المكرمة' }, rail: ['haramain'] },
  { slug: 'taif', region: 'makkah', name: { en: 'Taif', ar: 'الطائف' }, airport: { code: 'TIF', name: { en: 'Taif International Airport', ar: 'مطار الطائف الدولي' } } },
  // Madinah region
  { slug: 'madinah', region: 'madinah', name: { en: 'Madinah', ar: 'المدينة المنورة' }, airport: { code: 'MED', name: { en: 'Prince Mohammad bin Abdulaziz International Airport', ar: 'مطار الأمير محمد بن عبدالعزيز الدولي' } }, rail: ['haramain'] },
  { slug: 'alula', region: 'madinah', name: { en: 'AlUla', ar: 'العُلا' }, airport: { code: 'ULH', name: { en: 'AlUla International Airport', ar: 'مطار العُلا الدولي' } } },
  { slug: 'yanbu', region: 'madinah', name: { en: 'Yanbu', ar: 'ينبع' }, airport: { code: 'YNB', name: { en: 'Yanbu Airport', ar: 'مطار ينبع' } } },
  { slug: 'khaybar', region: 'madinah', name: { en: 'Khaybar', ar: 'خيبر' } },
  // Eastern Province
  { slug: 'dammam', region: 'eastern-province', name: { en: 'Dammam', ar: 'الدمام' }, airport: { code: 'DMM', name: { en: 'King Fahd International Airport', ar: 'مطار الملك فهد الدولي' } }, rail: ['sar-east'] },
  { slug: 'khobar', region: 'eastern-province', name: { en: 'Al Khobar', ar: 'الخبر' } },
  { slug: 'hofuf', region: 'eastern-province', name: { en: 'Hofuf (Al-Ahsa)', ar: 'الهفوف (الأحساء)' }, airport: { code: 'HOF', name: { en: 'Al-Ahsa International Airport', ar: 'مطار الأحساء الدولي' } }, rail: ['sar-east'] },
  { slug: 'jubail', region: 'eastern-province', name: { en: 'Jubail', ar: 'الجبيل' } },
  // Qassim
  { slug: 'buraydah', region: 'qassim', name: { en: 'Buraydah', ar: 'بريدة' }, airport: { code: 'ELQ', name: { en: 'Prince Naif bin Abdulaziz International Airport', ar: 'مطار الأمير نايف بن عبدالعزيز الدولي' } }, rail: ['sar-north'] },
  { slug: 'unaizah', region: 'qassim', name: { en: 'Unaizah', ar: 'عنيزة' } },
  { slug: 'ar-rass', region: 'qassim', name: { en: 'Ar Rass', ar: 'الرس' } },
  // Hail
  { slug: 'hail', region: 'hail', name: { en: 'Hail', ar: 'حائل' }, airport: { code: 'HAS', name: { en: 'Hail International Airport', ar: 'مطار حائل الدولي' } }, rail: ['sar-north'] },
  // Tabuk
  { slug: 'tabuk', region: 'tabuk', name: { en: 'Tabuk', ar: 'تبوك' }, airport: { code: 'TUU', name: { en: 'Prince Sultan bin Abdulaziz Airport', ar: 'مطار الأمير سلطان بن عبدالعزيز' } } },
  { slug: 'al-wajh', region: 'tabuk', name: { en: 'Al Wajh', ar: 'الوجه' }, airport: { code: 'EJH', name: { en: 'Al Wajh Airport', ar: 'مطار الوجه' } } },
  { slug: 'umluj', region: 'tabuk', name: { en: 'Umluj', ar: 'أملج' } },
  { slug: 'tayma', region: 'tabuk', name: { en: 'Tayma', ar: 'تيماء' } },
  { slug: 'haql', region: 'tabuk', name: { en: 'Haql', ar: 'حقل' } },
  // Northern Borders
  { slug: 'arar', region: 'northern-borders', name: { en: 'Arar', ar: 'عرعر' }, airport: { code: 'RAE', name: { en: 'Arar Domestic Airport', ar: 'مطار عرعر' } } },
  { slug: 'rafha', region: 'northern-borders', name: { en: 'Rafha', ar: 'رفحاء' }, airport: { code: 'RAH', name: { en: 'Rafha Domestic Airport', ar: 'مطار رفحاء' } } },
  // Jazan
  { slug: 'jazan', region: 'jazan', name: { en: 'Jazan', ar: 'جازان' }, airport: { code: 'GIZ', name: { en: 'King Abdullah bin Abdulaziz Airport', ar: 'مطار الملك عبدالله بن عبدالعزيز' } } },
  // Najran
  { slug: 'najran', region: 'najran', name: { en: 'Najran', ar: 'نجران' }, airport: { code: 'EAM', name: { en: 'Najran Domestic Airport', ar: 'مطار نجران' } } },
  // Al Baha
  { slug: 'al-baha', region: 'al-baha', name: { en: 'Al Baha', ar: 'الباحة' }, airport: { code: 'ABT', name: { en: 'King Saud bin Abdulaziz Airport (Al-Aqiq)', ar: 'مطار الملك سعود بن عبدالعزيز (العقيق)' } } },
  // Al Jawf
  { slug: 'sakaka', region: 'al-jawf', name: { en: 'Sakaka', ar: 'سكاكا' }, airport: { code: 'AJF', name: { en: 'Al Jouf Domestic Airport', ar: 'مطار الجوف' } }, rail: ['sar-north'] },
  { slug: 'dumat-al-jandal', region: 'al-jawf', name: { en: 'Dumat al-Jandal', ar: 'دومة الجندل' } },
  { slug: 'qurayyat', region: 'al-jawf', name: { en: 'Al Qurayyat', ar: 'القريات' }, airport: { code: 'URY', name: { en: 'Gurayat Domestic Airport', ar: 'مطار القريات' } }, rail: ['sar-north'] },
  // Asir
  { slug: 'abha', region: 'asir', name: { en: 'Abha', ar: 'أبها' }, airport: { code: 'AHB', name: { en: 'Abha International Airport', ar: 'مطار أبها الدولي' } } },
  { slug: 'an-namas', region: 'asir', name: { en: 'An Namas', ar: 'النماص' } },
];

export function getCity(slug: string) {
  return cities.find((c) => c.slug === slug);
}
