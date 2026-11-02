import type { Localized } from './types';

export type Question = {
  q: Localized;
  options: Localized[];
  answer: number; // index into options
  explain: Localized;
};

/** Score needed (out of 5) to earn the region's passport badge. */
export const PASS_SCORE = 4;

const L = (en: string, ar: string): Localized => ({ en, ar });

export const quizzes: Record<string, Question[]> = {
  riyadh: [
    {
      q: L('At-Turaif in Diriyah was the seat of which state?', 'كان حي الطريف في الدرعية مقراً لأي دولة؟'),
      options: [L('The first Saudi state', 'الدولة السعودية الأولى'), L('The Ottoman Empire', 'الدولة العثمانية'), L('The Nabataean kingdom', 'مملكة الأنباط')],
      answer: 0,
      explain: L('At-Turaif was the capital of the first Saudi state in the 18th century.', 'كان حي الطريف عاصمة الدولة السعودية الأولى في القرن الثامن عشر.'),
    },
    {
      q: L('Which fortress was captured in 1902, beginning the founding of modern Saudi Arabia?', 'أي حصن استُرد عام 1902 فكان بداية تأسيس المملكة الحديثة؟'),
      options: [L('Tabuk Castle', 'قلعة تبوك'), L('Masmak Fortress', 'قصر المصمك'), L('Marid Castle', 'قلعة مارد')],
      answer: 1,
      explain: L('The capture of Masmak in Riyadh in 1902 is a founding moment of the Kingdom.', 'يُعد استرداد قصر المصمك في الرياض عام 1902 لحظة تأسيسية للمملكة.'),
    },
    {
      q: L('The Edge of the World is part of which escarpment?', 'حافة العالم جزء من أي جبل؟'),
      options: [L('Tuwaiq', 'طويق'), L('Sarawat', 'السروات'), L('Aja', 'أجا')],
      answer: 0,
      explain: L('The cliffs are part of the long Tuwaiq escarpment northwest of Riyadh.', 'المنحدرات جزء من جبل طويق الممتد شمال غرب الرياض.'),
    },
    {
      q: L('What can you buy at Souq Al-Zal?', 'ماذا يمكنك أن تشتري من سوق الزل؟'),
      options: [L('Cars and electronics', 'السيارات والإلكترونيات'), L('Carpets, antiques and perfumes', 'السجاد والتحف والعطور'), L('Fresh fish', 'الأسماك الطازجة')],
      answer: 1,
      explain: L('Souq Al-Zal is Riyadh\'s old market for carpets, antiques, incense and traditional dress.', 'سوق الزل سوق الرياض القديم للسجاد والتحف والبخور والملابس التقليدية.'),
    },
    {
      q: L('Which green valley runs along the west of Riyadh?', 'أي وادٍ أخضر يمتد غرب الرياض؟'),
      options: [L('Wadi Disah', 'وادي الديسة'), L('Wadi Hanifah', 'وادي حنيفة'), L('Wadi Najran', 'وادي نجران')],
      answer: 1,
      explain: L('Wadi Hanifah has parks, lakes and walking paths through western Riyadh.', 'في وادي حنيفة حدائق وبحيرات وممرات مشي غرب الرياض.'),
    },
  ],
  makkah: [
    {
      q: L('Historic Jeddah\'s tall houses are built from what material?', 'من أي مادة بُنيت بيوت جدة التاريخية العالية؟'),
      options: [L('Coral stone', 'الحجر المرجاني'), L('Mud brick', 'الطوب الطيني'), L('Granite', 'الجرانيت')],
      answer: 0,
      explain: L('Al-Balad\'s houses are built from coral stone and decorated with wooden roshan screens.', 'بُنيت بيوت البلد من الحجر المرجاني وزُيّنت بالرواشين الخشبية.'),
    },
    {
      q: L('Which flower is Taif famous for?', 'بأي زهرة تشتهر الطائف؟'),
      options: [L('Jasmine', 'الياسمين'), L('The Taif rose', 'الورد الطائفي'), L('Lavender', 'الخزامى')],
      answer: 1,
      explain: L('Taif\'s rose farms are harvested in spring to make rose water and oil.', 'تُقطف مزارع الورد في الطائف في الربيع لصنع ماء الورد ودهنه.'),
    },
    {
      q: L('What was Souq Okaz famous for before Islam?', 'بماذا اشتهر سوق عكاظ قبل الإسلام؟'),
      options: [L('Poetry competitions and trade', 'مسابقات الشعر والتجارة'), L('Horse racing', 'سباقات الخيل'), L('Pearl diving', 'الغوص على اللؤلؤ')],
      answer: 0,
      explain: L('Arab tribes met at Okaz to trade and compete in poetry.', 'كانت القبائل العربية تجتمع في عكاظ للتجارة والتنافس في الشعر.'),
    },
    {
      q: L('Al Wahbah is a famous what?', 'ما هي الوعبة الشهيرة؟'),
      options: [L('Waterfall', 'شلال'), L('Volcanic crater', 'فوهة بركانية'), L('Coral reef', 'شعاب مرجانية')],
      answer: 1,
      explain: L('Al Wahbah is a huge volcanic crater with a white salt floor.', 'الوعبة فوهة بركانية ضخمة قاعها مغطى بالملح الأبيض.'),
    },
    {
      q: L('Which landmark on the Jeddah Corniche is one of the tallest of its kind in the world?', 'أي معلم على كورنيش جدة من الأعلى في العالم من نوعه؟'),
      options: [L('King Fahd\'s Fountain', 'نافورة الملك فهد'), L('Kingdom Centre', 'برج المملكة'), L('Khobar Water Tower', 'برج الخبر')],
      answer: 0,
      explain: L('King Fahd\'s Fountain shoots water high above the Red Sea.', 'تقذف نافورة الملك فهد المياه عالياً فوق البحر الأحمر.'),
    },
  ],
  madinah: [
    {
      q: L('Which was the first UNESCO World Heritage Site in Saudi Arabia?', 'ما أول موقع سعودي أُدرج في قائمة التراث العالمي لليونسكو؟'),
      options: [L('Hegra (Al-Hijr)', 'الحِجر'), L('Historic Jeddah', 'جدة التاريخية'), L('Al-Ahsa Oasis', 'واحة الأحساء')],
      answer: 0,
      explain: L('Hegra, near AlUla, was inscribed first, in 2008.', 'أُدرجت الحِجر قرب العُلا أولاً عام 2008.'),
    },
    {
      q: L('Who carved the great tombs of Hegra?', 'من نحت مقابر الحِجر الضخمة؟'),
      options: [L('The Romans', 'الرومان'), L('The Nabataeans', 'الأنباط'), L('The Ottomans', 'العثمانيون')],
      answer: 1,
      explain: L('Hegra was the Nabataeans\' great southern city.', 'كانت الحِجر أكبر مدن الأنباط في الجنوب.'),
    },
    {
      q: L('Which is the first mosque built in Islam?', 'ما أول مسجد بُني في الإسلام؟'),
      options: [L('Quba Mosque', 'مسجد قباء'), L('Jawatha Mosque', 'مسجد جواثا'), L('Al-Rahma Mosque', 'مسجد الرحمة')],
      answer: 0,
      explain: L('Quba Mosque was founded when the Prophet ﷺ arrived in Madinah.', 'أُسس مسجد قباء عند وصول النبي ﷺ إلى المدينة المنورة.'),
    },
    {
      q: L('Maraya in AlUla is covered in what?', 'بماذا كُسي مبنى مرايا في العُلا؟'),
      options: [L('Gold leaf', 'ورق الذهب'), L('Mirrors', 'المرايا'), L('Solar panels', 'الألواح الشمسية')],
      answer: 1,
      explain: L('Maraya\'s mirrored walls reflect the canyon around it.', 'تعكس جدران مرايا المكسوة بالمرايا الوادي المحيط بها.'),
    },
    {
      q: L('The Hejaz Railway carried pilgrims from which city to Madinah?', 'من أي مدينة كانت سكة حديد الحجاز تنقل الحجاج إلى المدينة المنورة؟'),
      options: [L('Cairo', 'القاهرة'), L('Baghdad', 'بغداد'), L('Damascus', 'دمشق')],
      answer: 2,
      explain: L('The railway opened in 1908 between Damascus and Madinah.', 'افتُتحت سكة الحديد عام 1908 بين دمشق والمدينة المنورة.'),
    },
  ],
  'eastern-province': [
    {
      q: L('Al-Ahsa is one of the world\'s largest oases of which tree?', 'الأحساء من أكبر واحات العالم لأي شجرة؟'),
      options: [L('Olive', 'الزيتون'), L('Date palm', 'النخيل'), L('Juniper', 'العرعر')],
      answer: 1,
      explain: L('Millions of date palms grow in the UNESCO-listed Al-Ahsa Oasis.', 'تنمو ملايين النخيل في واحة الأحساء المدرجة في قائمة اليونسكو.'),
    },
    {
      q: L('What is special about the caves of Al-Qarah Mountain?', 'ما الذي يميز كهوف جبل القارة؟'),
      options: [L('They stay cool even in summer', 'تبقى باردة حتى في الصيف'), L('They are full of water', 'مليئة بالماء'), L('They have ancient paintings', 'فيها رسوم قديمة')],
      answer: 0,
      explain: L('The narrow caves are noticeably cooler than the air outside.', 'الكهوف الضيقة أبرد بكثير من الهواء خارجها.'),
    },
    {
      q: L('Ithra is a cultural centre in which city?', 'في أي مدينة يقع مركز إثراء الثقافي؟'),
      options: [L('Dhahran', 'الظهران'), L('Jubail', 'الجبيل'), L('Hofuf', 'الهفوف')],
      answer: 0,
      explain: L('Ithra\'s pebble-shaped building stands in Dhahran.', 'يقع مبنى إثراء ذو الشكل الحصوي في الظهران.'),
    },
    {
      q: L('Which train line links Riyadh with Al-Ahsa and Dammam?', 'أي خط قطار يربط الرياض بالأحساء والدمام؟'),
      options: [L('Haramain High-Speed Railway', 'قطار الحرمين السريع'), L('SAR East Train', 'قطار الشرق'), L('SAR North Train', 'قطار الشمال')],
      answer: 1,
      explain: L('The SAR East Train runs Riyadh – Hofuf – Abqaiq – Dammam.', 'يسير قطار الشرق بين الرياض والهفوف وبقيق والدمام.'),
    },
    {
      q: L('What is the Rub\' al Khali?', 'ما هو الربع الخالي؟'),
      options: [L('A mountain range', 'سلسلة جبال'), L('The largest sand desert on Earth', 'أكبر صحراء رملية في العالم'), L('An island', 'جزيرة')],
      answer: 1,
      explain: L('The Empty Quarter is the largest continuous sand desert in the world.', 'الربع الخالي أكبر صحراء رملية متصلة في العالم.'),
    },
  ],
  qassim: [
    {
      q: L('Buraydah is famous for one of the world\'s biggest markets for what?', 'تشتهر بريدة بواحد من أكبر أسواق العالم لماذا؟'),
      options: [L('Camels', 'الإبل'), L('Dates', 'التمور'), L('Gold', 'الذهب')],
      answer: 1,
      explain: L('During the harvest, dates are auctioned by the truckload in Buraydah.', 'في موسم الحصاد تُباع التمور بالمزاد بحمولات الشاحنات في بريدة.'),
    },
    {
      q: L('Sukkari is a famous local variety of what?', 'السكري صنف محلي مشهور من ماذا؟'),
      options: [L('Coffee', 'القهوة'), L('Dates', 'التمور'), L('Honey', 'العسل')],
      answer: 1,
      explain: L('Sukkari dates from Qassim are known for their sweetness.', 'تمور السكري من القصيم معروفة بحلاوتها.'),
    },
    {
      q: L('Al-Shinanah near Ar Rass is known for a tall what?', 'تشتهر الشنانة قرب الرس بأي معلم شاهق؟'),
      options: [L('Mud-brick watchtower', 'برج مراقبة طيني'), L('Glass skyscraper', 'ناطحة سحاب زجاجية'), L('Waterfall', 'شلال')],
      answer: 0,
      explain: L('The Shinanah tower is one of the tallest traditional mud towers in Najd.', 'مرقب الشنانة من أعلى الأبراج الطينية التقليدية في نجد.'),
    },
    {
      q: L('Qassim is part of which historic region of central Arabia?', 'القصيم جزء من أي إقليم تاريخي في وسط الجزيرة العربية؟'),
      options: [L('Najd', 'نجد'), L('Hejaz', 'الحجاز'), L('Tihamah', 'تهامة')],
      answer: 0,
      explain: L('Qassim lies in Najd, the heart of the peninsula.', 'تقع القصيم في نجد، قلب الجزيرة العربية.'),
    },
    {
      q: L('Which train line stops in Qassim?', 'أي خط قطار يتوقف في القصيم؟'),
      options: [L('SAR North Train', 'قطار الشمال'), L('Haramain High-Speed Railway', 'قطار الحرمين السريع'), L('SAR East Train', 'قطار الشرق')],
      answer: 0,
      explain: L('The SAR North Train runs from Riyadh through Qassim and Hail to the north.', 'يسير قطار الشمال من الرياض عبر القصيم وحائل نحو الشمال.'),
    },
  ],
  hail: [
    {
      q: L('Jubbah and Shuwaymis are famous for what?', 'بماذا تشتهر جبة والشويمس؟'),
      options: [L('Rock art', 'النقوش الصخرية'), L('Beaches', 'الشواطئ'), L('Skyscrapers', 'ناطحات السحاب')],
      answer: 0,
      explain: L('Together they form the UNESCO-listed Rock Art in the Hail Region.', 'تشكلان معاً موقع الفنون الصخرية في منطقة حائل المدرج في اليونسكو.'),
    },
    {
      q: L('Which mountain range rises just west of Hail?', 'أي سلسلة جبلية ترتفع غرب حائل مباشرة؟'),
      options: [L('Aja', 'أجا'), L('Tuwaiq', 'طويق'), L('Fifa', 'فيفاء')],
      answer: 0,
      explain: L('The red granite Aja mountains are popular for hiking and camping.', 'جبال أجا الجرانيتية الحمراء مقصد للمشي والتخييم.'),
    },
    {
      q: L('Darb Zubaydah was an ancient road for whom?', 'لمن كان درب زبيدة طريقاً قديماً؟'),
      options: [L('Pilgrims travelling to Makkah', 'الحجاج المتجهين إلى مكة المكرمة'), L('Pearl divers', 'الغواصين على اللؤلؤ'), L('Roman soldiers', 'الجنود الرومان')],
      answer: 0,
      explain: L('The road ran from Kufa in Iraq to Makkah, with wells and reservoirs along the way.', 'امتد الطريق من الكوفة في العراق إلى مكة المكرمة مع آبار وبرك على طوله.'),
    },
    {
      q: L('What colour are the sands of the Great Nafud?', 'ما لون رمال النفود الكبير؟'),
      options: [L('White', 'أبيض'), L('Black', 'أسود'), L('Red-orange', 'أحمر برتقالي')],
      answer: 2,
      explain: L('The Nafud is known for its red-orange dunes.', 'يشتهر النفود بكثبانه الحمراء البرتقالية.'),
    },
    {
      q: L('Al-Qishlah in Hail was originally built as what?', 'لأي غرض بُني قصر القشلة في حائل أصلاً؟'),
      options: [L('A military barracks', 'ثكنة عسكرية'), L('A school', 'مدرسة'), L('A market', 'سوق')],
      answer: 0,
      explain: L('The mud-brick fortress was built as a barracks in the 20th century.', 'بُنيت القلعة الطينية ثكنةً عسكرية في القرن العشرين.'),
    },
  ],
  tabuk: [
    {
      q: L('Wadi Disah is famous for what?', 'بماذا يشتهر وادي الديسة؟'),
      options: [L('Sandstone towers and palms', 'أبراج الصخر الرملي والنخيل'), L('Snow-covered peaks', 'القمم المكسوة بالثلوج'), L('Coral islands', 'الجزر المرجانية')],
      answer: 0,
      explain: L('Tall sandstone pillars rise above palms and streams in the canyon.', 'ترتفع أعمدة الصخر الرملي فوق النخيل والجداول في الوادي.'),
    },
    {
      q: L('Which Babylonian king lived in Tayma for ten years?', 'أي ملك بابلي أقام في تيماء عشر سنوات؟'),
      options: [L('Hammurabi', 'حمورابي'), L('Nabonidus', 'نبونيد'), L('Nebuchadnezzar', 'نبوخذ نصر')],
      answer: 1,
      explain: L('Nabonidus lived in Tayma in the 6th century BCE.', 'أقام نبونيد في تيماء في القرن السادس قبل الميلاد.'),
    },
    {
      q: L('Which mountain near Tabuk sometimes gets snow in winter?', 'أي جبل قرب تبوك قد تتساقط عليه الثلوج في الشتاء؟'),
      options: [L('Jabal al-Lawz', 'جبل اللوز'), L('Jabal al-Nour', 'جبل النور'), L('Mount Uhud', 'جبل أحد')],
      answer: 0,
      explain: L('In cold winters, snow can fall on the upper slopes of Jabal al-Lawz.', 'في الشتاء البارد قد يتساقط الثلج على سفوح جبل اللوز العليا.'),
    },
    {
      q: L('The Umluj islands are often compared to which place?', 'بأي مكان تُقارن جزر أملج غالباً؟'),
      options: [L('The Maldives', 'جزر المالديف'), L('Iceland', 'آيسلندا'), L('The Alps', 'جبال الألب')],
      answer: 0,
      explain: L('White sand and turquoise water earn them the nickname "Maldives of Saudi Arabia".', 'رمالها البيضاء ومياهها الفيروزية أكسبتها لقب "مالديف السعودية".'),
    },
    {
      q: L('Haql sits on which gulf?', 'على أي خليج تقع حقل؟'),
      options: [L('The Gulf of Aqaba', 'خليج العقبة'), L('The Arabian Gulf', 'الخليج العربي'), L('The Gulf of Aden', 'خليج عدن')],
      answer: 0,
      explain: L('Haql looks across the Gulf of Aqaba toward Egypt and Jordan.', 'تطل حقل عبر خليج العقبة على مصر والأردن.'),
    },
  ],
  'northern-borders': [
    {
      q: L('What is the capital of the Northern Borders region?', 'ما عاصمة منطقة الحدود الشمالية؟'),
      options: [L('Arar', 'عرعر'), L('Sakaka', 'سكاكا'), L('Tabuk', 'تبوك')],
      answer: 0,
      explain: L('Arar is the regional capital.', 'عرعر هي عاصمة المنطقة.'),
    },
    {
      q: L('Which ancient pilgrim road crosses the Northern Borders?', 'أي طريق حج قديم يعبر منطقة الحدود الشمالية؟'),
      options: [L('Darb Zubaydah', 'درب زبيدة'), L('The Silk Road', 'طريق الحرير'), L('The Hejaz Railway', 'سكة حديد الحجاز')],
      answer: 0,
      explain: L('Darb Zubaydah ran from Kufa to Makkah through the region.', 'امتد درب زبيدة من الكوفة إلى مكة المكرمة عبر المنطقة.'),
    },
    {
      q: L('Lina is known for what?', 'بماذا تشتهر لينة؟'),
      options: [L('Historic wells', 'الآبار التاريخية'), L('Coral reefs', 'الشعاب المرجانية'), L('Rose farms', 'مزارع الورد')],
      answer: 0,
      explain: L('Lina\'s historic wells and old houses lie on an old desert route.', 'تقع آبار لينة التاريخية وبيوتها القديمة على طريق صحراوي قديم.'),
    },
    {
      q: L('Darb Zubaydah is named after the wife of which caliph?', 'سُمي درب زبيدة على اسم زوجة أي خليفة؟'),
      options: [L('Harun al-Rashid', 'هارون الرشيد'), L('Umar ibn al-Khattab', 'عمر بن الخطاب'), L('Abd al-Malik', 'عبد الملك')],
      answer: 0,
      explain: L('Zubaydah, wife of Harun al-Rashid, funded wells along the route.', 'موّلت زبيدة زوجة هارون الرشيد حفر الآبار على الطريق.'),
    },
    {
      q: L('Which airport serves Rafha?', 'أي مطار يخدم رفحاء؟'),
      options: [L('RAH', 'RAH'), L('RUH', 'RUH'), L('JED', 'JED')],
      answer: 0,
      explain: L('Rafha has its own domestic airport, code RAH.', 'لرفحاء مطار داخلي رمزه RAH.'),
    },
  ],
  jazan: [
    {
      q: L('How do most visitors reach the Farasan Islands?', 'كيف يصل معظم الزوار إلى جزر فرسان؟'),
      options: [L('By ferry from Jazan', 'بالعبّارة من جازان'), L('By bridge', 'عبر جسر'), L('By train', 'بالقطار')],
      answer: 0,
      explain: L('A free public ferry runs from Jazan to Farasan.', 'تنطلق عبّارة عامة مجانية من جازان إلى فرسان.'),
    },
    {
      q: L('Which animal is protected on the Farasan Islands?', 'أي حيوان محمي في جزر فرسان؟'),
      options: [L('Gazelle', 'الغزال'), L('Leopard', 'النمر'), L('Camel', 'الجمل')],
      answer: 0,
      explain: L('The Farasan gazelle lives on the islands.', 'يعيش غزال فرسان في الجزر.'),
    },
    {
      q: L('What grows on the terraces of the Fifa Mountains?', 'ماذا يُزرع في مدرجات جبال فيفاء؟'),
      options: [L('Coffee and fruit', 'البن والفواكه'), L('Rice', 'الأرز'), L('Cotton', 'القطن')],
      answer: 0,
      explain: L('The steep terraces grow coffee and fruit.', 'تُزرع في المدرجات الشديدة الانحدار البن والفواكه.'),
    },
    {
      q: L('Jazan is on which sea?', 'على أي بحر تقع جازان؟'),
      options: [L('Red Sea', 'البحر الأحمر'), L('Arabian Gulf', 'الخليج العربي'), L('Mediterranean', 'البحر المتوسط')],
      answer: 0,
      explain: L('Jazan is in the far southwest on the Red Sea.', 'تقع جازان في أقصى الجنوب الغربي على البحر الأحمر.'),
    },
    {
      q: L('Al-Dosariyah Fort stands where?', 'أين تقع قلعة الدوسرية؟'),
      options: [L('On a hill in Jazan city', 'على تل في مدينة جازان'), L('On Farasan Island', 'في جزيرة فرسان'), L('In the Empty Quarter', 'في الربع الخالي')],
      answer: 0,
      explain: L('The fort overlooks the port and the sea from a hill in Jazan.', 'تطل القلعة على الميناء والبحر من تل في جازان.'),
    },
  ],
  najran: [
    {
      q: L('Al-Ukhdood was a stop on which ancient trade route?', 'كان الأخدود محطة على أي طريق تجاري قديم؟'),
      options: [L('The incense route', 'طريق البخور'), L('The Silk Road', 'طريق الحرير'), L('The amber route', 'طريق الكهرمان')],
      answer: 0,
      explain: L('Caravans carried incense and spices north from Yemen through Najran.', 'نقلت القوافل البخور والتوابل شمالاً من اليمن عبر نجران.'),
    },
    {
      q: L('Hima, north of Najran, is a UNESCO site known for what?', 'حِمى شمال نجران موقع لليونسكو يشتهر بماذا؟'),
      options: [L('Rock carvings and ancient wells', 'النقوش الصخرية والآبار القديمة'), L('Waterfalls', 'الشلالات'), L('Mangroves', 'غابات المانغروف')],
      answer: 0,
      explain: L('Thousands of carvings cover the rocks around Hima\'s wells.', 'تغطي آلاف النقوش الصخور حول آبار حِمى.'),
    },
    {
      q: L('Najran\'s traditional houses are tall towers made of what?', 'من أي مادة بُنيت بيوت نجران البرجية التقليدية؟'),
      options: [L('Mud', 'الطين'), L('Coral', 'المرجان'), L('Marble', 'الرخام')],
      answer: 0,
      explain: L('Al-Aan Palace is a fine example of Najran\'s mud tower architecture.', 'قصر العان مثال رائع على عمارة الأبراج الطينية في نجران.'),
    },
    {
      q: L('What does the Najran Valley Dam hold back?', 'ماذا يحجز سد وادي نجران؟'),
      options: [L('Seasonal floods', 'السيول الموسمية'), L('Sea water', 'مياه البحر'), L('Sand dunes', 'الكثبان الرملية')],
      answer: 0,
      explain: L('The dam controls the seasonal floods of Wadi Najran.', 'يتحكم السد في سيول وادي نجران الموسمية.'),
    },
    {
      q: L('Najran borders which country?', 'مع أي دولة تحد نجران؟'),
      options: [L('Yemen', 'اليمن'), L('Jordan', 'الأردن'), L('Kuwait', 'الكويت')],
      answer: 0,
      explain: L('Najran lies in the south, on the border with Yemen.', 'تقع نجران في الجنوب على الحدود مع اليمن.'),
    },
  ],
  'al-baha': [
    {
      q: L('Dhee Ain village is built on a hill of what colour?', 'على تل بأي لون بُنيت قرية ذي عين؟'),
      options: [L('White', 'أبيض'), L('Black', 'أسود'), L('Red', 'أحمر')],
      answer: 0,
      explain: L('Its stone houses rise up a pale, almost white rocky hill.', 'ترتفع بيوتها الحجرية على تل صخري فاتح يكاد يكون أبيض.'),
    },
    {
      q: L('Which trees fill the forests around Al Baha?', 'أي أشجار تملأ الغابات حول الباحة؟'),
      options: [L('Juniper', 'العرعر'), L('Palm', 'النخيل'), L('Pine', 'الصنوبر')],
      answer: 0,
      explain: L('Juniper forests like Raghadan cover the highlands.', 'تغطي غابات العرعر مثل رغدان المرتفعات.'),
    },
    {
      q: L('Al Baha sits above which coastal plain?', 'تطل الباحة على أي سهل ساحلي؟'),
      options: [L('Tihamah', 'تهامة'), L('Najd', 'نجد'), L('Al-Ahsa', 'الأحساء')],
      answer: 0,
      explain: L('The escarpment drops steeply to the Tihamah plain.', 'تنحدر الجبال بشدة نحو سهل تهامة.'),
    },
    {
      q: L('What was once grown on the terraces of Jabal Shada?', 'ماذا كان يُزرع في مدرجات جبل شدا؟'),
      options: [L('Coffee', 'البن'), L('Wheat', 'القمح'), L('Tea', 'الشاي')],
      answer: 0,
      explain: L('Jabal Shada\'s slopes hold terraces of coffee and fruit.', 'تحمل سفوح جبل شدا مدرجات البن والفواكه.'),
    },
    {
      q: L('When is the best time to visit the Al Baha highlands for cool weather?', 'متى أفضل وقت لزيارة مرتفعات الباحة للاستمتاع بالطقس المعتدل؟'),
      options: [L('Summer', 'الصيف'), L('Never', 'لا يوجد'), L('Only at night', 'في الليل فقط')],
      answer: 0,
      explain: L('The mountains stay cool when the lowlands are hot.', 'تبقى الجبال معتدلة حين تكون الأراضي المنخفضة حارة.'),
    },
  ],
  'al-jawf': [
    {
      q: L('Marid Castle stands in which ancient town?', 'في أي بلدة قديمة تقع قلعة مارد؟'),
      options: [L('Dumat al-Jandal', 'دومة الجندل'), L('Tayma', 'تيماء'), L('Hofuf', 'الهفوف')],
      answer: 0,
      explain: L('Marid Castle is the landmark of Dumat al-Jandal.', 'قلعة مارد معلم دومة الجندل.'),
    },
    {
      q: L('Al-Rajajil is a group of what?', 'ما هي الرجاجيل؟'),
      options: [L('Ancient standing stones', 'أعمدة حجرية قديمة'), L('Lakes', 'بحيرات'), L('Palaces', 'قصور')],
      answer: 0,
      explain: L('Dozens of rough stone pillars stand in clusters south of Sakaka.', 'تقف عشرات الأعمدة الحجرية الخشنة في مجموعات جنوب سكاكا.'),
    },
    {
      q: L('Al Jawf is well known for growing which tree?', 'بزراعة أي شجرة تشتهر الجوف؟'),
      options: [L('Olive', 'الزيتون'), L('Coffee', 'البن'), L('Banana', 'الموز')],
      answer: 0,
      explain: L('Al Jawf has large olive groves.', 'في الجوف بساتين زيتون واسعة.'),
    },
    {
      q: L('Which is the capital of Al Jawf?', 'ما عاصمة منطقة الجوف؟'),
      options: [L('Sakaka', 'سكاكا'), L('Arar', 'عرعر'), L('Hail', 'حائل')],
      answer: 0,
      explain: L('Sakaka is the regional capital, home to Zabal Castle.', 'سكاكا عاصمة المنطقة وفيها قلعة زعبل.'),
    },
    {
      q: L('Which train line reaches Al Jouf?', 'أي خط قطار يصل إلى الجوف؟'),
      options: [L('SAR North Train', 'قطار الشمال'), L('SAR East Train', 'قطار الشرق'), L('Haramain High-Speed Railway', 'قطار الحرمين السريع')],
      answer: 0,
      explain: L('The SAR North Train runs from Riyadh to Al Jouf and Al Qurayyat.', 'يسير قطار الشمال من الرياض إلى الجوف والقريات.'),
    },
  ],
  asir: [
    {
      q: L('Rijal Almaa\'s stone houses are decorated with what?', 'بماذا تُزيَّن بيوت رجال ألمع الحجرية؟'),
      options: [L('White quartz', 'حجر المرو الأبيض'), L('Blue tiles', 'البلاط الأزرق'), L('Gold', 'الذهب')],
      answer: 0,
      explain: L('White quartz stones trim the tall houses.', 'تزيّن أحجار المرو البيضاء البيوت العالية.'),
    },
    {
      q: L('Al-Qatt Al-Asiri is a traditional form of what?', 'القط العسيري شكل تقليدي من ماذا؟'),
      options: [L('Wall painting', 'الزخرفة الجدارية'), L('Dance', 'الرقص'), L('Cooking', 'الطبخ')],
      answer: 0,
      explain: L('The bright geometric wall art is on UNESCO\'s intangible heritage list.', 'فن الزخرفة الجدارية الهندسية الزاهية مدرج في قائمة اليونسكو للتراث غير المادي.'),
    },
    {
      q: L('How did people once reach Habala village?', 'كيف كان الناس يصلون قديماً إلى قرية الحبلة؟'),
      options: [L('By rope', 'بالحبال'), L('By boat', 'بالقارب'), L('By train', 'بالقطار')],
      answer: 0,
      explain: L('The name comes from the ropes (habl) used to climb down the cliff.', 'الاسم مأخوذ من الحبال التي كانت تُستخدم للنزول من الجرف.'),
    },
    {
      q: L('Al Soudah is among the highest areas in the Kingdom. What often covers it?', 'السودة من أعلى مناطق المملكة. ماذا يغطيها كثيراً؟'),
      options: [L('Clouds', 'السحاب'), L('Sand', 'الرمال'), L('Ice', 'الجليد')],
      answer: 0,
      explain: L('Al Soudah is often above or inside the clouds.', 'كثيراً ما تكون السودة فوق السحاب أو داخله.'),
    },
    {
      q: L('What is the capital of the Asir region?', 'ما عاصمة منطقة عسير؟'),
      options: [L('Abha', 'أبها'), L('Jazan', 'جازان'), L('Najran', 'نجران')],
      answer: 0,
      explain: L('Abha is the regional capital in the cool highlands.', 'أبها عاصمة المنطقة في المرتفعات المعتدلة.'),
    },
  ],
};
