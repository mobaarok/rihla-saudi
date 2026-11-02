import type { Localized, Place } from './types';

// Reusable "best time" phrases.
const WINTER: Localized = {
  en: 'October to March, when days are mild.',
  ar: 'من أكتوبر إلى مارس، حين يكون الطقس معتدلاً.',
};
const SUMMER_HIGHLANDS: Localized = {
  en: 'June to September, when the highlands are cool. Winter is pleasant but colder.',
  ar: 'من يونيو إلى سبتمبر حين تكون المرتفعات باردة. الشتاء لطيف لكنه أبرد.',
};
const ALL_YEAR: Localized = {
  en: 'All year. Indoors, so summer heat is not a problem.',
  ar: 'طوال العام، فهو مكان مغلق ولا تؤثر فيه حرارة الصيف.',
};

// IMPORTANT: Coordinates are approximate, and all facts must be checked against
// official sources before launch. Add photos only if you own them or they are licensed.
export const places: Place[] = [
  // ---------- Riyadh ----------
  {
    slug: 'at-turaif-diriyah',
    region: 'riyadh',
    category: 'heritage',
    unesco: true,
    name: { en: 'At-Turaif, Diriyah', ar: 'حي الطريف، الدرعية' },
    summary: {
      en: 'Mud-brick palaces of the first Saudi state, on the edge of Riyadh.',
      ar: 'قصور طينية من عهد الدولة السعودية الأولى، على أطراف الرياض.',
    },
    description: {
      en: 'At-Turaif was the seat of the first Saudi state in the 18th century and is a UNESCO World Heritage Site. Its restored Najdi mud-brick palaces and lanes sit above Wadi Hanifah. Come in the late afternoon and stay for the evening, when the walls are lit and the restaurants around Bujairi Terrace fill up.',
      ar: 'كان حي الطريف مقر حكم الدولة السعودية الأولى في القرن الثامن عشر، وهو مُدرج في قائمة التراث العالمي لليونسكو. تطل قصوره وأزقته الطينية النجدية المرمّمة على وادي حنيفة. زره في العصر وابقَ حتى المساء حين تُضاء الأسوار وتمتلئ مطاعم مطل البجيري.',
    },
    bestTime: WINTER,
    coords: [24.7342, 46.5725],
  },
  {
    slug: 'edge-of-the-world',
    region: 'riyadh',
    category: 'nature',
    name: { en: 'Edge of the World', ar: 'حافة العالم' },
    summary: {
      en: 'Sheer cliffs of the Tuwaiq escarpment with endless views over the desert plain.',
      ar: 'منحدرات جبل طويق الشاهقة بإطلالات لا نهاية لها على السهل الصحراوي.',
    },
    description: {
      en: 'Part of the Tuwaiq escarpment northwest of Riyadh, these cliffs drop hundreds of metres to an ancient seabed below. The last stretch is an unpaved track, so go with a 4x4 or a tour. There are no barriers at the edge: keep well back, and avoid visiting after rain.',
      ar: 'جزء من جبل طويق شمال غرب الرياض، تنحدر فيه الصخور مئات الأمتار نحو قاع بحر قديم. الجزء الأخير من الطريق غير معبّد، لذا اذهب بسيارة دفع رباعي أو مع جولة سياحية. لا توجد حواجز عند الحافة، فابقَ على مسافة آمنة وتجنّب الزيارة بعد المطر.',
    },
    bestTime: WINTER,
    coords: [24.952, 45.994],
  },
  {
    slug: 'masmak-fortress',
    region: 'riyadh',
    category: 'heritage',
    name: { en: 'Masmak Fortress', ar: 'قصر المصمك' },
    summary: {
      en: 'The clay fort at the heart of old Riyadh, now a museum.',
      ar: 'الحصن الطيني في قلب الرياض القديمة، وهو اليوم متحف.',
    },
    description: {
      en: 'Masmak is a 19th-century fortress of clay and mud brick whose capture in 1902 began the founding of modern Saudi Arabia. Inside, a small museum tells the story. Combine it with a walk through the nearby Souq Al-Zal for antiques, carpets and traditional goods.',
      ar: 'قصر المصمك حصن من الطين واللبن يعود إلى القرن التاسع عشر، وكان استرداده عام 1902 بداية تأسيس المملكة العربية السعودية الحديثة. يروي متحفه الصغير هذه القصة. اجمع زيارته مع جولة في سوق الزل القريب للتحف والسجاد والبضائع التقليدية.',
    },
    bestTime: WINTER,
    coords: [24.6311, 46.7133],
  },
  {
    slug: 'ushaiger-heritage-village',
    region: 'riyadh',
    category: 'heritage',
    name: { en: 'Ushaiger Heritage Village', ar: 'بلدة أشيقر التراثية' },
    summary: {
      en: 'A quiet, restored Najdi village of mud houses and palm gardens.',
      ar: 'قرية نجدية هادئة مرمّمة من البيوت الطينية وبساتين النخيل.',
    },
    description: {
      en: 'Ushaiger, about two hours northwest of Riyadh, is one of the best-preserved old towns in Najd. Wander its narrow lanes, mosques and farms, and visit the small private museums run by local families.',
      ar: 'تقع أشيقر على بعد نحو ساعتين شمال غرب الرياض، وهي من أفضل البلدات القديمة حفظاً في نجد. تجوّل في أزقتها الضيقة ومساجدها ومزارعها، وزُر المتاحف الصغيرة التي تديرها العائلات المحلية.',
    },
    bestTime: WINTER,
    coords: [25.342, 45.184],
  },

  // ---------- Makkah region ----------
  {
    slug: 'historic-jeddah',
    region: 'makkah',
    category: 'heritage',
    unesco: true,
    name: { en: 'Historic Jeddah (Al-Balad)', ar: 'جدة التاريخية (البلد)' },
    summary: {
      en: 'Coral-stone tower houses with carved wooden balconies by the Red Sea.',
      ar: 'بيوت شاهقة من الحجر المرجاني برواشين خشبية منقوشة على البحر الأحمر.',
    },
    description: {
      en: 'Al-Balad grew as the gateway port for pilgrims to Makkah and is a UNESCO World Heritage Site. Its tall coral-stone houses are decorated with wooden roshan screens. Explore the souqs in the evening when it is cooler and the lanes are busiest.',
      ar: 'نشأت منطقة البلد بوصفها ميناءً لاستقبال الحجاج القاصدين مكة المكرمة، وهي مدرجة في قائمة التراث العالمي لليونسكو. تزيّن بيوتها العالية المبنية من الحجر المرجاني رواشين خشبية. استكشف أسواقها مساءً حين يكون الجو ألطف والأزقة أكثر حيوية.',
    },
    bestTime: WINTER,
    coords: [21.485, 39.187],
  },
  {
    slug: 'jeddah-corniche',
    region: 'makkah',
    category: 'coast',
    name: { en: 'Jeddah Corniche', ar: 'كورنيش جدة' },
    summary: {
      en: 'A long seafront promenade with sculptures, beaches and sunset views.',
      ar: 'ممشى بحري طويل بمجسّمات فنية وشواطئ وإطلالات على الغروب.',
    },
    description: {
      en: 'The Corniche runs for kilometres along the Red Sea, with parks, open-air sculptures and family beaches. At night, look out for King Fahd\'s Fountain, one of the tallest fountains in the world.',
      ar: 'يمتد الكورنيش كيلومترات على البحر الأحمر، وفيه حدائق ومجسّمات فنية في الهواء الطلق وشواطئ للعائلات. وفي الليل لا تفوّت نافورة الملك فهد، إحدى أعلى النوافير في العالم.',
    },
    bestTime: WINTER,
    coords: [21.543, 39.151],
  },
  {
    slug: 'al-hada-taif',
    region: 'makkah',
    category: 'mountains',
    name: { en: 'Al Hada and the Taif Rose Farms', ar: 'الهدا ومزارع الورد في الطائف' },
    summary: {
      en: 'A dramatic mountain road and the fragrant rose farms of Taif.',
      ar: 'طريق جبلي مذهل ومزارع الورد العطرة في الطائف.',
    },
    description: {
      en: 'The Al Hada road climbs the escarpment in tight hairpins up to Taif, a cool highland city. In spring, the Taif rose harvest fills the farms with pink blossoms, and many distilleries open for visitors to see rose water and oil being made.',
      ar: 'يصعد طريق الهدا الجبل بمنعطفات حادة حتى الطائف، المدينة الجبلية المعتدلة. وفي الربيع يملأ موسم قطف الورد الطائفي المزارع بالأزهار الوردية، وتفتح كثير من المعامل أبوابها للزوار لمشاهدة تقطير ماء الورد ودهنه.',
    },
    bestTime: {
      en: 'Spring (around March to April) for the roses; summer for cool weather.',
      ar: 'الربيع (نحو مارس وأبريل) لموسم الورد، والصيف للأجواء المعتدلة.',
    },
    coords: [21.37, 40.28],
  },

  // ---------- Madinah region ----------
  {
    slug: 'hegra',
    region: 'madinah',
    category: 'heritage',
    unesco: true,
    name: { en: 'Hegra (Al-Hijr)', ar: 'الحِجر (مدائن صالح)' },
    summary: {
      en: 'Monumental Nabataean tombs carved into sandstone outcrops near AlUla.',
      ar: 'مقابر نبطية ضخمة منحوتة في الصخور الرملية قرب العُلا.',
    },
    description: {
      en: 'Hegra was the Nabataeans\' great southern city and the first UNESCO World Heritage Site in Saudi Arabia. More than a hundred tombs with carved facades stand scattered across the desert. Visits are by guided tour, which you book in advance.',
      ar: 'كانت الحِجر أكبر مدن الأنباط في الجنوب، وأول موقع سعودي يُدرج في قائمة التراث العالمي لليونسكو. تنتشر في الصحراء أكثر من مئة مقبرة بواجهات منحوتة. تتم الزيارة عبر جولات مع مرشد يجب حجزها مسبقاً.',
    },
    bestTime: WINTER,
    coords: [26.792, 37.953],
  },
  {
    slug: 'alula-old-town',
    region: 'madinah',
    category: 'heritage',
    name: { en: 'AlUla Old Town', ar: 'البلدة القديمة في العُلا' },
    summary: {
      en: 'A maze of mud-brick houses beneath a hilltop fort.',
      ar: 'متاهة من البيوت الطينية أسفل قلعة على قمة تل.',
    },
    description: {
      en: 'For centuries this walled town was a stop on the incense and pilgrim routes. Climb to the fort for a view over the rooftops, then walk the restored lanes of cafés and craft shops below.',
      ar: 'كانت هذه البلدة المسوّرة لقرون محطة على طرق البخور والحج. اصعد إلى القلعة لتطل على الأسطح، ثم تجوّل في الأزقة المرمّمة بمقاهيها ومحلات الحرف اليدوية.',
    },
    bestTime: WINTER,
    coords: [26.625, 37.918],
  },
  {
    slug: 'elephant-rock',
    region: 'madinah',
    category: 'nature',
    name: { en: 'Elephant Rock (Jabal AlFil)', ar: 'جبل الفيل' },
    summary: {
      en: 'A giant sandstone rock shaped like an elephant, best at sunset.',
      ar: 'صخرة رملية عملاقة على شكل فيل، وأجمل ما تكون عند الغروب.',
    },
    description: {
      en: 'Wind and water carved this rock into the shape of an elephant with its trunk touching the ground. Low seating around the base makes it a relaxed place to watch the sunset and the stars.',
      ar: 'نحتت الرياح والمياه هذه الصخرة على شكل فيل يلامس خرطومه الأرض. وتجعل الجلسات المنخفضة حولها مكاناً هادئاً لمشاهدة الغروب والنجوم.',
    },
    bestTime: WINTER,
    coords: [26.65, 37.97],
  },
  {
    slug: 'dadan',
    region: 'madinah',
    category: 'heritage',
    name: { en: 'Dadan', ar: 'دادان' },
    summary: {
      en: 'Capital of the ancient Dadanite and Lihyanite kingdoms, with lion tombs in the cliffs.',
      ar: 'عاصمة مملكتي دادان ولحيان القديمتين، بمقابر الأسود المنحوتة في الجبال.',
    },
    description: {
      en: 'Long before the Nabataeans, Dadan was a powerful oasis kingdom. Look for the "lion tombs" carved high in the cliff face. Nearby Jabal Ikmah has hundreds of ancient inscriptions, often described as an open-air library.',
      ar: 'قبل الأنباط بزمن طويل، كانت دادان مملكة واحة قوية. ابحث عن "مقابر الأسود" المنحوتة في أعلى الجبل. وبالقرب منها جبل عكمة الذي يضم مئات النقوش القديمة، ويُوصف غالباً بأنه مكتبة في الهواء الطلق.',
    },
    bestTime: WINTER,
    coords: [26.665, 37.935],
  },

  // ---------- Eastern Province ----------
  {
    slug: 'al-ahsa-oasis',
    region: 'eastern-province',
    category: 'nature',
    unesco: true,
    name: { en: 'Al-Ahsa Oasis', ar: 'واحة الأحساء' },
    summary: {
      en: 'One of the largest palm oases in the world, with springs, souqs and old mosques.',
      ar: 'من أكبر واحات النخيل في العالم، بعيونها وأسواقها ومساجدها القديمة.',
    },
    description: {
      en: 'Fed by natural springs, Al-Ahsa holds millions of date palms and is a UNESCO World Heritage Site. Visit the Qaisariya Souq in Hofuf, the Ibrahim Palace, and the farms and canals around the oasis.',
      ar: 'تضم الأحساء، التي تغذيها العيون الطبيعية، ملايين من أشجار النخيل، وهي مدرجة في قائمة التراث العالمي لليونسكو. زُر سوق القيصرية في الهفوف، وقصر إبراهيم، والمزارع والقنوات المحيطة بالواحة.',
    },
    bestTime: WINTER,
    coords: [25.38, 49.59],
  },
  {
    slug: 'al-qarah-mountain',
    region: 'eastern-province',
    category: 'nature',
    name: { en: 'Al-Qarah Mountain', ar: 'جبل القارة' },
    summary: {
      en: 'Cool, narrow caves winding through a sandstone hill in Al-Ahsa.',
      ar: 'كهوف ضيقة باردة تتلوّى داخل تل رملي في الأحساء.',
    },
    description: {
      en: 'The caves inside Al-Qarah stay noticeably cooler than the air outside, even in summer. Paths lead through tall, narrow passages carved by erosion. Nearby workshops sell traditional clay pottery.',
      ar: 'تبقى الكهوف داخل جبل القارة أبرد بكثير من الهواء خارجها حتى في الصيف. تمر الممرات عبر شقوق طويلة وضيقة نحتها التعرية. وتبيع الورش القريبة الفخار الطيني التقليدي.',
    },
    bestTime: WINTER,
    coords: [25.416, 49.668],
  },
  {
    slug: 'ithra',
    region: 'eastern-province',
    category: 'culture',
    name: { en: 'Ithra (King Abdulaziz Center for World Culture)', ar: 'إثراء (مركز الملك عبدالعزيز الثقافي العالمي)' },
    summary: {
      en: 'A striking cultural centre with museums, a library, a cinema and a theatre.',
      ar: 'مركز ثقافي لافت يضم متاحف ومكتبة وسينما ومسرحاً.',
    },
    description: {
      en: 'Ithra\'s pebble-shaped building in Dhahran houses art and history exhibitions, a large public library, a children\'s museum and a busy programme of films and performances. Check the website for current exhibitions.',
      ar: 'يضم مبنى إثراء ذو الشكل الحصوي في الظهران معارض للفن والتاريخ، ومكتبة عامة كبيرة، ومتحفاً للأطفال، وبرنامجاً حافلاً بالأفلام والعروض. راجع موقعه الإلكتروني لمعرفة المعارض الحالية.',
    },
    bestTime: ALL_YEAR,
    coords: [26.335, 50.125],
  },
  {
    slug: 'half-moon-bay',
    region: 'eastern-province',
    category: 'coast',
    name: { en: 'Half Moon Bay', ar: 'شاطئ نصف القمر' },
    summary: {
      en: 'A sweeping curve of calm Gulf water south of Al Khobar.',
      ar: 'خليج هلالي الشكل بمياه هادئة جنوب الخبر.',
    },
    description: {
      en: 'Half Moon Bay is a favourite weekend escape for families from Dammam and Al Khobar, with shallow water, beach resorts and dunes nearby for sandboarding and dune driving.',
      ar: 'يُعد شاطئ نصف القمر وجهة مفضلة للعائلات من الدمام والخبر في عطلات نهاية الأسبوع، بمياهه الضحلة ومنتجعاته، والكثبان القريبة للتزلج على الرمال والتطعيس.',
    },
    bestTime: WINTER,
    coords: [26.05, 50.14],
  },

  // ---------- Qassim ----------
  {
    slug: 'buraydah-date-market',
    region: 'qassim',
    category: 'culture',
    name: { en: 'Buraydah Date Market', ar: 'سوق التمور في بريدة' },
    summary: {
      en: 'Rows of trucks and traders during one of the biggest date markets in the world.',
      ar: 'صفوف من الشاحنات والتجار في واحد من أكبر أسواق التمور في العالم.',
    },
    description: {
      en: 'During the date harvest, Buraydah hosts a huge market where farmers and traders auction dates by the truckload. Go early in the morning to see the bidding and taste local varieties such as Sukkari.',
      ar: 'في موسم الحصاد تستضيف بريدة سوقاً ضخمة يبيع فيها المزارعون والتجار التمور بالمزاد بحمولات الشاحنات. اذهب في الصباح الباكر لمشاهدة المزايدة وتذوّق الأصناف المحلية مثل السكري.',
    },
    bestTime: {
      en: 'Late summer, during the date harvest (check the festival dates each year).',
      ar: 'أواخر الصيف خلال موسم الحصاد (تحقّق من مواعيد المهرجان كل عام).',
    },
    coords: [26.36, 43.97],
  },
  {
    slug: 'unaizah-old-town',
    region: 'qassim',
    category: 'heritage',
    name: { en: 'Unaizah Heritage Area', ar: 'المنطقة التراثية في عنيزة' },
    summary: {
      en: 'Traditional Najdi houses, markets and a lively heritage souq.',
      ar: 'بيوت نجدية تقليدية وأسواق وسوق تراثية نابضة بالحياة.',
    },
    description: {
      en: 'Unaizah has long been known as a centre of trade and learning in Najd. Its restored heritage district has mud-brick houses, a traditional market and cafés serving Arabic coffee and dates.',
      ar: 'عُرفت عنيزة منذ زمن طويل مركزاً للتجارة والعلم في نجد. وتضم منطقتها التراثية المرمّمة بيوتاً طينية وسوقاً تقليدية ومقاهي تقدّم القهوة العربية والتمر.',
    },
    bestTime: WINTER,
    coords: [26.087, 43.993],
  },

  // ---------- Hail ----------
  {
    slug: 'jubbah-rock-art',
    region: 'hail',
    category: 'heritage',
    unesco: true,
    name: { en: 'Jubbah Rock Art', ar: 'النقوش الصخرية في جبة' },
    summary: {
      en: 'Thousands of years of carvings of people and animals on desert rocks.',
      ar: 'نقوش لأشخاص وحيوانات على صخور الصحراء تمتد آلاف السنين.',
    },
    description: {
      en: 'The rock art at Jubbah is part of the UNESCO-listed Rock Art in the Hail Region. The carvings show people, camels, ibex and other animals from a time when the area was greener. A local guide will help you find the best panels.',
      ar: 'النقوش الصخرية في جبة جزء من موقع "الفنون الصخرية في منطقة حائل" المدرج في قائمة التراث العالمي لليونسكو. تُظهر النقوش أشخاصاً وجِمالاً ووعولاً وحيوانات أخرى من زمن كانت فيه المنطقة أكثر خضرة. سيساعدك مرشد محلي في العثور على أجمل اللوحات.',
    },
    bestTime: WINTER,
    coords: [28.02, 40.92],
  },
  {
    slug: 'qishlah-palace',
    region: 'hail',
    category: 'heritage',
    name: { en: 'Al-Qishlah Palace', ar: 'قصر القشلة' },
    summary: {
      en: 'A large mud-brick fortress with courtyards in the centre of Hail.',
      ar: 'قلعة طينية كبيرة بساحات داخلية في وسط حائل.',
    },
    description: {
      en: 'Built in the 20th century as a military barracks, Al-Qishlah has thick mud walls, watchtowers and a vast central courtyard lined with arches. It often hosts heritage events.',
      ar: 'بُني قصر القشلة في القرن العشرين ثكنةً عسكرية، وله أسوار طينية سميكة وأبراج مراقبة وساحة داخلية واسعة تحيط بها الأقواس. وكثيراً ما يستضيف فعاليات تراثية.',
    },
    bestTime: WINTER,
    coords: [27.523, 41.695],
  },

  // ---------- Tabuk ----------
  {
    slug: 'wadi-disah',
    region: 'tabuk',
    category: 'nature',
    name: { en: 'Wadi Disah', ar: 'وادي الديسة' },
    summary: {
      en: 'A deep canyon of sandstone towers with palms and streams along its floor.',
      ar: 'وادٍ عميق من الأبراج الرملية تنتشر النخيل والجداول في قاعه.',
    },
    description: {
      en: 'Wadi Disah cuts through towering sandstone pillars, with palms, reeds and running water on the valley floor. A 4x4 is needed to drive through the wadi; many visitors hire a local guide.',
      ar: 'يشق وادي الديسة طريقه بين أعمدة شاهقة من الصخر الرملي، وفي قاعه نخيل وقصب ومياه جارية. تحتاج إلى سيارة دفع رباعي لعبور الوادي، ويستعين كثير من الزوار بمرشد محلي.',
    },
    bestTime: WINTER,
    coords: [27.64, 36.47],
  },
  {
    slug: 'tayeb-ism',
    region: 'tabuk',
    category: 'nature',
    name: { en: 'Tayeb Ism Canyon', ar: 'وادي طيب اسم' },
    summary: {
      en: 'A narrow gorge of granite cliffs opening onto the Gulf of Aqaba.',
      ar: 'ممر ضيق بين جبال الجرانيت ينفتح على خليج العقبة.',
    },
    description: {
      en: 'Tayeb Ism is a short walk through a narrow canyon of high granite walls, ending near the sea on the Gulf of Aqaba. Combine it with the beaches and snorkelling around Maqna.',
      ar: 'وادي طيب اسم ممر قصير بين جدران جرانيتية عالية، ينتهي قرب البحر على خليج العقبة. اجمع زيارته مع شواطئ مقنا ومواقع الغطس السطحي حولها.',
    },
    bestTime: WINTER,
    coords: [28.53, 34.8],
  },

  // ---------- Al Jawf ----------
  {
    slug: 'dumat-al-jandal',
    region: 'al-jawf',
    category: 'heritage',
    name: { en: 'Dumat al-Jandal', ar: 'دومة الجندل' },
    summary: {
      en: 'An ancient oasis town with Marid Castle and a historic stone mosque.',
      ar: 'بلدة واحة قديمة فيها قلعة مارد ومسجد حجري تاريخي.',
    },
    description: {
      en: 'Dumat al-Jandal has been settled for thousands of years. See Marid Castle, the Omar bin Al-Khattab Mosque with its stone minaret, and the old stone quarter of Ad-Dir\'. Nearby Dumat al-Jandal Lake is a surprising sight in the desert.',
      ar: 'استُوطنت دومة الجندل منذ آلاف السنين. شاهد قلعة مارد، ومسجد عمر بن الخطاب بمئذنته الحجرية، وحي الدرع الحجري القديم. وبالقرب منها بحيرة دومة الجندل، وهي مشهد مفاجئ في وسط الصحراء.',
    },
    bestTime: WINTER,
    coords: [29.812, 39.868],
  },
  {
    slug: 'zabal-castle',
    region: 'al-jawf',
    category: 'heritage',
    name: { en: 'Zabal Castle', ar: 'قلعة زعبل' },
    summary: {
      en: 'A hilltop castle with wide views over Sakaka.',
      ar: 'قلعة على قمة تل بإطلالات واسعة على سكاكا.',
    },
    description: {
      en: 'Zabal Castle sits on a rocky ridge above Sakaka. Climb up for views over the town and palm groves, and look for the old wells cut into the rock below.',
      ar: 'تقع قلعة زعبل على حافة صخرية فوق سكاكا. اصعد إليها لتطل على المدينة وبساتين النخيل، وابحث عن الآبار القديمة المنحوتة في الصخر أسفلها.',
    },
    bestTime: WINTER,
    coords: [29.97, 40.195],
  },

  // ---------- Northern Borders ----------
  {
    slug: 'lina-heritage-village',
    region: 'northern-borders',
    category: 'heritage',
    name: { en: 'Lina Heritage Village', ar: 'قرية لينة التراثية' },
    summary: {
      en: 'An old desert settlement with mud houses and ancient wells.',
      ar: 'مستوطنة صحراوية قديمة ببيوت طينية وآبار عريقة.',
    },
    description: {
      en: 'Lina lies on an old desert route and is known for its historic wells and traditional houses. It is a quiet stop for travellers who want to see the far north. Check access and opening details locally before you go.',
      ar: 'تقع لينة على طريق صحراوي قديم، وتشتهر بآبارها التاريخية وبيوتها التقليدية. وهي محطة هادئة للمسافرين الراغبين في رؤية أقصى الشمال. تحقّق محلياً من طريقة الوصول ومواعيد الزيارة قبل الذهاب.',
    },
    bestTime: WINTER,
    coords: [28.764, 43.782],
  },

  // ---------- Jazan ----------
  {
    slug: 'farasan-islands',
    region: 'jazan',
    category: 'coast',
    name: { en: 'Farasan Islands', ar: 'جزر فرسان' },
    summary: {
      en: 'Coral islands with quiet beaches, mangroves and gazelles.',
      ar: 'جزر مرجانية بشواطئ هادئة وغابات مانغروف وغزلان.',
    },
    description: {
      en: 'A free public ferry runs from Jazan to the Farasan Islands. The islands have calm beaches, coral reefs, mangroves and a protected population of Farasan gazelles, as well as historic coral-stone houses.',
      ar: 'تنطلق عبّارة عامة مجانية من جازان إلى جزر فرسان. وتضم الجزر شواطئ هادئة وشعاباً مرجانية وغابات مانغروف وغزلان فرسان المحمية، إضافة إلى بيوت تاريخية من الحجر المرجاني.',
    },
    bestTime: {
      en: 'October to April. Check the ferry timetable and book ahead.',
      ar: 'من أكتوبر إلى أبريل. تحقّق من مواعيد العبّارة واحجز مسبقاً.',
    },
    coords: [16.7, 42.12],
  },
  {
    slug: 'fifa-mountains',
    region: 'jazan',
    category: 'mountains',
    name: { en: 'Fifa Mountains', ar: 'جبال فيفاء' },
    summary: {
      en: 'Steep green terraces and stone houses clinging to the mountainsides.',
      ar: 'مدرجات خضراء شديدة الانحدار وبيوت حجرية معلّقة على سفوح الجبال.',
    },
    description: {
      en: 'The Fifa Mountains rise sharply from the Tihamah plain, with terraces of coffee and fruit and houses built right on the slopes. The roads are very steep and winding, so drive carefully.',
      ar: 'ترتفع جبال فيفاء بحدّة من سهل تهامة، وتكسوها مدرجات البن والفواكه، وتُبنى البيوت على السفوح مباشرة. الطرق شديدة الانحدار والتعرّج، فقُد بحذر.',
    },
    bestTime: SUMMER_HIGHLANDS,
    coords: [17.26, 43.1],
  },

  // ---------- Najran ----------
  {
    slug: 'al-ukhdood',
    region: 'najran',
    category: 'heritage',
    name: { en: 'Al-Ukhdood Archaeological Site', ar: 'موقع الأخدود الأثري' },
    summary: {
      en: 'Ruins of an ancient caravan city on the incense route.',
      ar: 'أطلال مدينة قوافل قديمة على طريق البخور.',
    },
    description: {
      en: 'Al-Ukhdood was an important stop for caravans carrying incense and spices north from Yemen. Walk among the stone foundations, inscriptions and remains of the old citadel.',
      ar: 'كان الأخدود محطة مهمة للقوافل التي تحمل البخور والتوابل شمالاً من اليمن. تجوّل بين الأساسات الحجرية والنقوش وبقايا القلعة القديمة.',
    },
    bestTime: WINTER,
    coords: [17.48, 44.18],
  },
  {
    slug: 'hima-rock-art',
    region: 'najran',
    category: 'heritage',
    unesco: true,
    name: { en: 'Hima Cultural Area', ar: 'منطقة حِمى الثقافية' },
    summary: {
      en: 'Ancient wells and thousands of rock carvings along old caravan routes.',
      ar: 'آبار قديمة وآلاف النقوش الصخرية على طرق القوافل القديمة.',
    },
    description: {
      en: 'Hima, north of Najran, was a watering stop for caravans and armies for thousands of years. Its rocks are covered with carvings and inscriptions, and it is a UNESCO World Heritage Site. Visit with a guide.',
      ar: 'كانت حِمى، شمال نجران، محطة سقيا للقوافل والجيوش عبر آلاف السنين. وتكسو صخورَها النقوشُ والكتابات، وهي مدرجة في قائمة التراث العالمي لليونسكو. زُرها برفقة مرشد.',
    },
    bestTime: WINTER,
    coords: [18.25, 44.45],
  },

  // ---------- Al Baha ----------
  {
    slug: 'dhee-ain-village',
    region: 'al-baha',
    category: 'heritage',
    name: { en: 'Dhee Ain Village', ar: 'قرية ذي عين' },
    summary: {
      en: 'A stone village built on a white rock hill above banana and palm farms.',
      ar: 'قرية حجرية مبنية على تلّ أبيض فوق مزارع الموز والنخيل.',
    },
    description: {
      en: 'Dhee Ain\'s stone houses rise in layers up a pale rocky hill, with a spring feeding the farms below. The village is especially striking in the late afternoon light.',
      ar: 'ترتفع بيوت ذي عين الحجرية طبقات على تل صخري فاتح اللون، وتسقي عينُ ماءٍ المزارعَ أسفلها. وتبدو القرية في أجمل حالاتها في ضوء العصر.',
    },
    bestTime: WINTER,
    coords: [19.929, 41.443],
  },
  {
    slug: 'raghadan-forest',
    region: 'al-baha',
    category: 'mountains',
    name: { en: 'Raghadan Forest Park', ar: 'منتزه غابة رغدان' },
    summary: {
      en: 'Juniper forest and lookout points on the edge of the escarpment.',
      ar: 'غابة عرعر ونقاط إطلالة على حافة الجبال.',
    },
    description: {
      en: 'Close to Al Baha city, Raghadan has shaded picnic areas among juniper trees and viewpoints over the steep drop to the Tihamah plain. Mist often rolls in during summer afternoons.',
      ar: 'تقع غابة رغدان قرب مدينة الباحة، وفيها جلسات مظللة بين أشجار العرعر ونقاط إطلالة على الانحدار الحاد نحو سهل تهامة. وكثيراً ما يغطيها الضباب في عصاري الصيف.',
    },
    bestTime: SUMMER_HIGHLANDS,
    coords: [20.05, 41.46],
  },

  // ---------- Asir ----------
  {
    slug: 'rijal-almaa',
    region: 'asir',
    category: 'heritage',
    name: { en: 'Rijal Almaa', ar: 'قرية رجال ألمع' },
    summary: {
      en: 'Tall stone houses trimmed with white quartz in a green valley.',
      ar: 'بيوت حجرية شاهقة مزينة بحجر المرو الأبيض في وادٍ أخضر.',
    },
    description: {
      en: 'Rijal Almaa\'s multi-storey stone houses are decorated with white quartz and colourful painted interiors in the Asiri style. The village museum shows local crafts and history. The drive down from Abha through the mountains is spectacular.',
      ar: 'تزيّن بيوت رجال ألمع الحجرية متعددة الطوابق أحجارُ المرو البيضاء، وتتلوّن جدرانها الداخلية بالنقش العسيري. ويعرض متحف القرية الحرف المحلية وتاريخ المنطقة. والطريق النازل إليها من أبها عبر الجبال مذهل.',
    },
    bestTime: SUMMER_HIGHLANDS,
    coords: [18.212, 42.268],
  },
  {
    slug: 'al-soudah',
    region: 'asir',
    category: 'mountains',
    name: { en: 'Al Soudah', ar: 'السودة' },
    summary: {
      en: 'Cloud-covered peaks, juniper forests and a cable car near Abha.',
      ar: 'قمم يغطيها السحاب وغابات عرعر وتلفريك قرب أبها.',
    },
    description: {
      en: 'Al Soudah is among the highest areas in the Kingdom, often above the clouds. Walk among juniper forests, enjoy cool summer air, and take in the views from the escarpment. Check whether the cable car is running before you go.',
      ar: 'تُعد السودة من أعلى مناطق المملكة، وكثيراً ما تكون فوق السحاب. تمشَّ بين غابات العرعر واستمتع بهواء الصيف البارد والإطلالات من حافة الجبل. تحقّق من تشغيل التلفريك قبل الذهاب.',
    },
    bestTime: SUMMER_HIGHLANDS,
    coords: [18.27, 42.37],
  },
];
