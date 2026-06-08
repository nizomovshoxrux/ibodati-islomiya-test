// 4-QISM — Namoz (batafsil): Jamoat, Imomlik, Mudrik/Masbuq, Qazo, Sajdai sahv,
// Tilovat sajdasi, Muqim/Musofir, Juma, Hayit, Tashriq, Tarovih, Janoza, Nafl namozlar
// Manba: «Ibodati Islomiya» — Ahmad Hodiy Maqsudiy, 4-qism

export default [
  // ---------------- VARIANTLI (MCQ) ----------------
  {
    id: 'p4-001', part: 4, topic: 'Jamoat', type: 'mcq', difficulty: 'easy',
    q: 'Jamoat bilan o\'qilgan namoz yolg\'iz o\'qilgandan necha daraja ortiq savoblidir?',
    options: ['Yetti daraja', 'O\'n daraja', 'Yigirma yetti daraja', 'Yuz daraja'],
    answer: 2,
    explanation: 'Jamoat bilan o\'qilgan namoz yolg\'iz o\'qilgandan yigirma yetti daraja ortiq savoblidir.',
    ref: '4-qism · Jamoat bayoni'
  },
  {
    id: 'p4-002', part: 4, topic: 'Jamoat', type: 'mcq', difficulty: 'medium',
    q: 'Jamoat hisoblanishi uchun kamida necha kishi bo\'lishi kerak?',
    options: [
      'Imomdan boshqa uch kishi',
      'Imomdan boshqa bir kishi',
      'Imomdan boshqa besh kishi',
      'O\'n kishi'
    ],
    answer: 1,
    explanation: 'Imomdan boshqa bir kishi bo\'lsa, jamoat bo\'ladi. Jamoat ko\'p bo\'lsa, savobi ziyoda.',
    ref: '4-qism · Masjid va jamoat'
  },
  {
    id: 'p4-003', part: 4, topic: 'Jamoat', type: 'mcq', difficulty: 'medium',
    q: 'Ergashuvchi bir kishi bo\'lsa, imomning qaysi tarafida turadi?',
    options: ['Chap tarafida', 'O\'ng tarafida', 'Orqasida', 'Oldida'],
    answer: 1,
    explanation: 'Ergashuvchi bir kishi bo\'lsa imomning o\'ng tarafida, unga yaqin turadi.',
    ref: '4-qism · Jamoat bayoni'
  },
  {
    id: 'p4-004', part: 4, topic: 'Imomlik', type: 'mcq', difficulty: 'hard',
    q: 'Imomlikka birinchi navbatda kim haqli?',
    options: [
      'Eng yoshi katta',
      'Eng olim (bilimli) kishi',
      'Eng boy kishi',
      'Eng kuchli kishi'
    ],
    answer: 1,
    explanation: 'Olimroq kishi imomlikka o\'tadi. Ilmda barobar bo\'lsa — qiroati yaxshi, so\'ng taqvoli, so\'ng xulqi yaxshi kishi.',
    ref: '4-qism · Imomlikka haqli kishilar'
  },
  {
    id: 'p4-005', part: 4, topic: 'Mudrik va masbuq', type: 'mcq', difficulty: 'hard',
    q: 'Imomga avvalgi rakatda ergasholmay, so\'nggi rakatlarda ergashgan kishi nima deyiladi?',
    options: ['Mudrik', 'Masbuq', 'Muqtadiy', 'Muqim'],
    answer: 1,
    explanation: 'Avvalgi rakatda ergashgan — «mudrik», so\'nggi rakatlarda ergashgan — «masbuq» deyiladi.',
    ref: '4-qism · Mudrik va masbuq'
  },
  {
    id: 'p4-006', part: 4, topic: 'Mudrik va masbuq', type: 'mcq', difficulty: 'hard',
    q: 'Rakatning qaysi yeriga yetib ergashsa, o\'sha rakat topilgan hisoblanadi?',
    options: ['Qiyomga', 'Ruku\'ga', 'Sajdaga', 'Qa\'daga'],
    answer: 1,
    explanation: 'Ruku\'ga yetib ergashsa, o\'sha rakat hisobga o\'tadi (mudrik bo\'ladi).',
    ref: '4-qism · Mudrik va masbuq'
  },
  {
    id: 'p4-007', part: 4, topic: 'Masjid', type: 'mcq', difficulty: 'medium',
    q: 'Masjidga kirganda qaysi oyoq avval qo\'yiladi?',
    options: ['Chap oyoq', 'O\'ng oyoq', 'Farqi yo\'q', 'Ikkalasi birga'],
    answer: 1,
    explanation: 'Masjidga kirganda avval o\'ng oyoq, chiqqanda chap oyoq qo\'yiladi (hojatxonada aksincha).',
    ref: '4-qism · Masjid va jamoat'
  },
  {
    id: 'p4-008', part: 4, topic: 'Qazo namozi', type: 'mcq', difficulty: 'hard',
    q: 'Qazo bo\'lgan namozning faqat farzi o\'qiladimi yoki sunnati ham?',
    options: [
      'Faqat farzi (bomdod istisno)',
      'Farz va sunnati',
      'Faqat sunnati',
      'Hech qaysi'
    ],
    answer: 0,
    explanation: 'Qazo namozning faqat farzi o\'qiladi. Faqat bomdod qazosi peshin kirmasdan o\'qilsa, sunnati ham qazo qilinadi.',
    ref: '4-qism · Qazo namozi'
  },
  {
    id: 'p4-009', part: 4, topic: 'Qazo namozi', type: 'mcq', difficulty: 'hard',
    q: 'Juma namozini o\'qiy olmagan kishi o\'rniga nima qiladi?',
    options: [
      'Juma namozini qazo qiladi',
      'Peshin namozini o\'qiydi',
      'Hech narsa o\'qimaydi',
      'Asr namozini o\'qiydi'
    ],
    answer: 1,
    explanation: 'Juma qazo qilinmaydi; o\'qiy olmagan kishi o\'rniga peshin namozini o\'qiydi. Hayit ham qazo qilinmaydi.',
    ref: '4-qism · Qazo namozi'
  },
  {
    id: 'p4-010', part: 4, topic: 'Sajdai sahv', type: 'mcq', difficulty: 'medium',
    q: 'Namozda unutib biror vojibni qoldirsa, nima qilinadi?',
    options: [
      'Namoz buziladi, qaytadan o\'qiladi',
      'Sajdai sahv qilinadi',
      'Hech narsa qilinmaydi',
      'Faqat istig\'for aytiladi'
    ],
    answer: 1,
    explanation: 'Unutib vojib qoldirilsa namoz buzilmaydi, ammo namoz oxirida sajdai sahv (xatoni tuzatadigan sajda) qilish vojib bo\'ladi.',
    ref: '4-qism · Sajdai sahv'
  },
  {
    id: 'p4-011', part: 4, topic: 'Sajdai sahv', type: 'mcq', difficulty: 'hard',
    q: 'Namozda unutib biror FARZni qoldirsa, namozi qanday bo\'ladi?',
    options: [
      'Durust bo\'ladi, sajdai sahv kifoya',
      'Durust bo\'lmaydi',
      'Faqat istig\'for bilan tuzatiladi',
      'Yarmi durust bo\'ladi'
    ],
    answer: 1,
    explanation: 'Farz qoldirilsa namoz durust bo\'lmaydi (sajdai sahv yetmaydi). Sajdai sahv faqat vojib qoldirilganda yordam beradi.',
    ref: '4-qism · Sajdai sahv'
  },
  {
    id: 'p4-012', part: 4, topic: 'Tilovat sajdasi', type: 'mcq', difficulty: 'hard',
    q: 'Qur\'onda necha yerda sajda oyati bor?',
    options: ['O\'nta', 'O\'n to\'rtta', 'Yigirma', 'Yetti'],
    answer: 1,
    explanation: 'Qur\'onning o\'n to\'rt (14) surasida sajda oyati bor (A\'rof, Ra\'d, Nahl, Isro va h.k.).',
    ref: '4-qism · Tilovat sajdasi'
  },
  {
    id: 'p4-013', part: 4, topic: 'Tilovat sajdasi', type: 'mcq', difficulty: 'hard',
    q: 'Sajda oyatini bir o\'tirishda uch marta o\'qisa, necha sajda vojib bo\'ladi?',
    options: ['Bir sajda', 'Uch sajda', 'Sajda vojib emas', 'Olti sajda'],
    answer: 0,
    explanation: 'Bir o\'tirishda bir oyatni necha marta o\'qisa ham, bir sajda vojib bo\'ladi.',
    ref: '4-qism · Tilovat sajdasi'
  },
  {
    id: 'p4-014', part: 4, topic: 'Musofir', type: 'mcq', difficulty: 'medium',
    q: 'Musofir kishi to\'rt rakatli namozlarni qanday o\'qiydi?',
    options: [
      'To\'rt rakat to\'liq',
      'Ikki rakat (qasr) qilib',
      'Uch rakat',
      'Bir rakat'
    ],
    answer: 1,
    explanation: 'Musofir to\'rt rakatli farzlarni (peshin, asr, xufton) qisqartirib ikki rakat o\'qiydi. Shom va vitr qisqartirilmaydi.',
    ref: '4-qism · Musofirlarning hukmlari'
  },
  {
    id: 'p4-015', part: 4, topic: 'Musofir', type: 'mcq', difficulty: 'hard',
    q: 'Musofir sanalish uchun kamida necha chaqirimlik yo\'lga borishni niyat qilish kerak?',
    options: ['O\'ttiz chaqirim', 'Oltmish chaqirim', 'To\'qson chaqirim', 'Yuz chaqirim'],
    answer: 2,
    explanation: 'Eng kami to\'qson chaqirimlik (uch kunlik) joyga borishni niyat qilgan kishi musofir sanaladi.',
    ref: '4-qism · Muqim va musofir'
  },
  {
    id: 'p4-016', part: 4, topic: 'Musofir', type: 'mcq', difficulty: 'hard',
    q: 'Musofir bir yerda necha kun turishni niyat qilsa, muqimlik hukmiga o\'tadi?',
    options: ['Uch kun', 'Yetti kun', 'O\'n besh kun', 'O\'ttiz kun'],
    answer: 2,
    explanation: 'Bir yerda o\'n besh kun turishni niyat qilsa, musofirlikdan chiqib muqim hukmiga o\'tadi.',
    ref: '4-qism · Muqim va musofir'
  },
  {
    id: 'p4-017', part: 4, topic: 'Juma', type: 'mcq', difficulty: 'medium',
    q: 'Juma namozi qaysi namoz o\'rniga o\'qiladi?',
    options: ['Bomdod', 'Peshin', 'Asr', 'Xufton'],
    answer: 1,
    explanation: 'Juma namozi juma kuni peshin namozining o\'rniga o\'qiladi.',
    ref: '4-qism · Juma namozi'
  },
  {
    id: 'p4-018', part: 4, topic: 'Juma', type: 'mcq', difficulty: 'hard',
    q: 'Juma namozining farz bo\'lishiga necha shart bor?',
    options: ['To\'rt', 'Olti', 'Sakkiz', 'Uch'],
    answer: 1,
    explanation: 'Juma namozining farz bo\'lishiga olti shart bor: balog\'atli er kishi, ixtiyorli, salomat, oyog\'i sog\', muqim, ko\'zi sog\' bo\'lishi.',
    ref: '4-qism · Juma namozi'
  },
  {
    id: 'p4-019', part: 4, topic: 'Juma', type: 'mcq', difficulty: 'hard',
    q: 'Juma namozining xutbasi qachon o\'qiladi?',
    options: [
      'Farzdan keyin',
      'To\'rt rakat sunnatdan so\'ng, farzdan oldin',
      'Hech qachon',
      'Sunnatdan oldin'
    ],
    answer: 1,
    explanation: 'Xutba jumaning to\'rt rakat sunnati o\'qilgandan so\'ng, farzdan oldin o\'qiladi. Imom ikki xutba o\'qiydi.',
    ref: '4-qism · Jumaning xutbalari'
  },
  {
    id: 'p4-020', part: 4, topic: 'Hayit', type: 'mcq', difficulty: 'medium',
    q: 'Islom ahliga bir yilda nechta hayit bor?',
    options: ['Bitta', 'Ikkita', 'Uchta', 'To\'rtta'],
    answer: 1,
    explanation: 'Ikki hayit: Fitr (Ramazon) hayiti va Qurbon hayiti.',
    ref: '4-qism · Hayit kunlari'
  },
  {
    id: 'p4-021', part: 4, topic: 'Hayit', type: 'mcq', difficulty: 'hard',
    q: 'Qurbon hayiti qaysi kunda bo\'ladi?',
    options: [
      'Shavvolning 1-kunida',
      'Zulhijja oyining 10-kunida',
      'Ramazonning oxirida',
      'Muharramning 1-kunida'
    ],
    answer: 1,
    explanation: 'Qurbon hayiti zulhijja oyining o\'ninchi kunida; Fitr hayiti esa shavvolning birinchi kunida bo\'ladi.',
    ref: '4-qism · Hayit kunlari'
  },
  {
    id: 'p4-022', part: 4, topic: 'Hayit namozi', type: 'mcq', difficulty: 'hard',
    q: 'Hayit namozi necha rakat va qanday o\'qiladi?',
    options: [
      'To\'rt rakat, yolg\'iz',
      'Ikki rakat, imom va jamoat bilan',
      'Uch rakat, jamoat bilan',
      'Ikki rakat, yolg\'iz'
    ],
    answer: 1,
    explanation: 'Har ikki hayit namozi ikki rakatdan, faqat imom va jamoat bilan o\'qiladi, hech vaqt yolg\'iz o\'qilmaydi.',
    ref: '4-qism · Hayit namozining o\'qilishi'
  },
  {
    id: 'p4-023', part: 4, topic: 'Hayit namozi', type: 'mcq', difficulty: 'hard',
    q: 'Hayit namozida har rakatda nechta qo\'shimcha (zoida) takbir aytiladi?',
    options: ['Bitta', 'Uchta', 'Beshta', 'Yettita'],
    answer: 1,
    explanation: 'Hayit namozida har rakatda uch martadan zoida takbiri aytiladi — bu hayit namozini boshqalardan farqlaydi.',
    ref: '4-qism · Hayit namozining o\'qilishi'
  },
  {
    id: 'p4-024', part: 4, topic: 'Tarovih', type: 'mcq', difficulty: 'medium',
    q: 'Tarovih namozi hammasi necha rakat?',
    options: ['O\'n rakat', 'O\'n ikki rakat', 'Yigirma rakat', 'Sakkiz rakat'],
    answer: 2,
    explanation: 'Tarovih hammasi yigirma rakat, ikki rakatdan o\'qilib o\'n salom bilan tamom bo\'ladi. Ramazonda xuftondan keyin o\'qiladi.',
    ref: '4-qism · Tarovih namozi'
  },
  {
    id: 'p4-025', part: 4, topic: 'Janoza', type: 'mcq', difficulty: 'hard',
    q: 'Janoza namozi necha takbir bilan o\'qiladi?',
    options: ['Ikki takbir', 'Uch takbir', 'To\'rt takbir', 'Besh takbir'],
    answer: 2,
    explanation: 'Janoza namozida rakat yo\'q; to\'rt takbir bilan tamom bo\'ladi. Ruku\', sajda, qa\'da qilinmaydi.',
    ref: '4-qism · Janoza namozi'
  },
  {
    id: 'p4-026', part: 4, topic: 'Janoza', type: 'mcq', difficulty: 'hard',
    q: 'Janoza namozining shartlari nechta?',
    options: ['To\'rtta', 'Oltita', 'Sakkizta', 'O\'nta'],
    answer: 2,
    explanation: 'Janoza namozining shartlari sakkizta: tahorat, badan/libos/oyoq pokligi, avratni bekitish, qiblaga qarash, niyat, mayyitning yuvilgan bo\'lishi.',
    ref: '4-qism · Janoza namozi'
  },
  {
    id: 'p4-027', part: 4, topic: 'Nafl namozlar', type: 'mcq', difficulty: 'hard',
    q: 'Yomg\'ir yog\'may qolganda Allohdan yomg\'ir tilab o\'qiladigan namoz qaysi?',
    options: ['Kusuf namozi', 'Istisqo namozi', 'Xavf namozi', 'Istixora namozi'],
    answer: 1,
    explanation: 'Istisqo — Alloh taolodan yomg\'ir tilab o\'qiladigan ikki rakat nafl namoz.',
    ref: '4-qism · Nafl namozlari'
  },
  {
    id: 'p4-028', part: 4, topic: 'Nafl namozlar', type: 'mcq', difficulty: 'hard',
    q: 'Oftob tutilganda (kunchiqishi qoraytganda) o\'qiladigan namoz qaysi?',
    options: ['Xusuf namozi', 'Kusuf namozi', 'Istisqo namozi', 'Tahajjud'],
    answer: 1,
    explanation: 'Kusuf — oftob tutilganda masjidda jamoat bilan o\'qiladigan ikki rakat namoz. Oy tutilganda esa xusuf namozi o\'qiladi.',
    ref: '4-qism · Kusuf va xusuf nafl namozlari'
  },
  {
    id: 'p4-029', part: 4, topic: 'Nafl namozlar', type: 'mcq', difficulty: 'hard',
    q: 'Bir ishni qilish xayrli yoki xayrsizligida shubhaga tushilganda qaysi namoz o\'qiladi?',
    options: ['Hojat namozi', 'Shukr namozi', 'Istixora namozi', 'Tavba namozi'],
    answer: 2,
    explanation: 'Istixora — ish xayrli bo\'ladimi yoki yo\'qmi deb shubhaga tushilganda Allohdan xayrli ishni so\'rab o\'qiladigan namoz.',
    ref: '4-qism · Xavf va istixora namozlari'
  },

  // ---------------- TO'G'RI / NOTO'G'RI (TF) ----------------
  {
    id: 'p4-030', part: 4, topic: 'Jamoat', type: 'tf', difficulty: 'medium',
    q: 'Xotinlar jamoatda hammadan oxirgi safda turadilar.',
    answer: true,
    explanation: 'To\'g\'ri. Xotinlar hammadan oxirgi safda, hatto bolalardan ham keyingi safda turadilar.',
    ref: '4-qism · Jamoat bayoni'
  },
  {
    id: 'p4-031', part: 4, topic: 'Imomlik', type: 'tf', difficulty: 'hard',
    q: 'Ko\'r kishining va e\'tiqodi buzuq kishining imom bo\'lishi makruhdir.',
    answer: true,
    explanation: 'To\'g\'ri. G\'oyatda ilmsiz, ko\'r, e\'tiqodi buzuq va zinodan tug\'ilgan kishining imomligi makruhdir.',
    ref: '4-qism · Imomlikka haqli kishilar'
  },
  {
    id: 'p4-032', part: 4, topic: 'Qazo namozi', type: 'tf', difficulty: 'hard',
    q: 'Uzrsiz namozni o\'z vaqtida o\'qimasdan qazoga qoldirish ulug\' gunohdir.',
    answer: true,
    explanation: 'To\'g\'ri. Uzrsiz namozni qazoga qoldirish nihoyatda ulug\' gunohlardandir.',
    ref: '4-qism · Qazo namozi'
  },
  {
    id: 'p4-033', part: 4, topic: 'Juma', type: 'tf', difficulty: 'hard',
    q: 'Imom xutba o\'qib turganda so\'zlashish va Qur\'on tilovat qilish durust.',
    answer: false,
    explanation: 'Noto\'g\'ri. Xutba paytida so\'zlashish haromdir; zikr, tasbeh, tilovat, nafl namoz ham durust emas — faqat eshitib o\'tirish lozim.',
    ref: '4-qism · Jumaning xutbalari'
  },
  {
    id: 'p4-034', part: 4, topic: 'Musofir', type: 'tf', difficulty: 'hard',
    q: 'Musofir kishi to\'rt rakatli sunnatlarni ham qisqartiradi.',
    answer: false,
    explanation: 'Noto\'g\'ri. Musofir faqat to\'rt rakatli farzlarni qisqartiradi, sunnatlarni qisqartirmaydi.',
    ref: '4-qism · Musofirlarning hukmlari'
  },
  {
    id: 'p4-035', part: 4, topic: 'Tashriq takbiri', type: 'tf', difficulty: 'hard',
    q: 'Tashriq takbiri yolg\'iz o\'qilganda ham vojib bo\'ladi.',
    answer: true,
    explanation: 'To\'g\'ri. Tashriq takbiri jamoat bilan ham, tanho o\'qilganda ham vojib bo\'ladi (Arafa bomdodidan tashriq oxirgi kuni asrigacha).',
    ref: '4-qism · Tashriq takbiri'
  },
  {
    id: 'p4-036', part: 4, topic: 'Janoza', type: 'tf', difficulty: 'hard',
    q: 'Zulm bilan o\'ldirilib shahid bo\'lgan mayyit yuvilmagan holda janoza o\'qiladi.',
    answer: true,
    explanation: 'To\'g\'ri. Mayyit zulm bilan o\'lib shahid bo\'lsa, yuvilmagan holicha janoza o\'qiladi.',
    ref: '4-qism · Janoza namozi'
  },

  // ---------------- BO'SH JOY (FILL) ----------------
  {
    id: 'p4-037', part: 4, topic: 'Jamoat', type: 'fill', difficulty: 'medium',
    q: 'Jamoat bilan o\'qilgan namoz yolg\'iz o\'qilgandan ______ daraja ortiq savoblidir (raqam).',
    answer: ['yigirma yetti', '27', 'yigirma yeti'],
    explanation: 'Yigirma yetti daraja ziyoda savoblidir.',
    ref: '4-qism · Masjid va jamoat'
  },
  {
    id: 'p4-038', part: 4, topic: 'Mudrik', type: 'fill', difficulty: 'hard',
    q: 'Imomga avvalgi rakatda ergashgan kishi ______ deyiladi.',
    answer: ['mudrik'],
    explanation: 'Mudrik — birinchi rakatdan ergashgan kishi; masbuq — keyingi rakatlarda ergashgan.',
    ref: '4-qism · Mudrik va masbuq'
  },
  {
    id: 'p4-039', part: 4, topic: 'Tarovih', type: 'fill', difficulty: 'medium',
    q: 'Tarovih namozi ______ oyida xuftondan so\'ng o\'qiladi.',
    answer: ['ramazon'],
    explanation: 'Tarovih ramazon oyida har kuni xufton namozidan so\'ng, vitrdan oldin o\'qiladi.',
    ref: '4-qism · Tarovih namozi'
  },
  {
    id: 'p4-040', part: 4, topic: 'Qurbon hayiti', type: 'fill', difficulty: 'hard',
    q: 'Qurbon hayitidan oldingi kun ______ kuni deb ataladi.',
    answer: ['tarviya'],
    explanation: 'Tarviya kuni — Ibrohim (a.s.) Ismoilni qurbon qilish haqida tush ko\'rib andishaga tushgan kun. Arafa kuni esa tushini anglagan kun.',
    ref: '4-qism · Qurbon hayiti kunlari'
  },

  // ---------------- OCHIQ SAVOL (OPEN) ----------------
  {
    id: 'p4-041', part: 4, topic: 'Sajdai sahv', type: 'open', difficulty: 'hard',
    q: 'Sajdai sahv qanday ado qilinadi (qisqacha)?',
    answer: 'Oxirgi qa\'dada tashahhuddan so\'ng salovot o\'qilmay, salom beriladi. So\'ng namozdagidek ikki marta sajda qilib, har sajdada uch marta tasbeh aytiladi. Keyin qa\'daga o\'tirib tashahhud, salovot va duo o\'qilib, salom berib namoz tugatiladi.',
    explanation: 'Imom bir tarafga salom beradi (ergashuvchilar adashmasligi uchun).',
    ref: '4-qism · Sajdai sahv'
  },
  {
    id: 'p4-042', part: 4, topic: 'Juma', type: 'open', difficulty: 'hard',
    q: 'Juma namozining ado qilinishiga qo\'yiladigan shartlardan uchtasini ayting.',
    answer: 'Shahar deb ataladigan yerda bo\'lishi; jome\' masjid bo\'lishi; imom podshoh/qozi izni bilan bo\'lishi; imomdan boshqa kamida uch kishi bo\'lishi; peshin vaqti kirgan bo\'lishi; farzdan oldin xutba o\'qilishi.',
    explanation: 'Bular jumaning ado bo\'lishi uchun olti shartdir.',
    ref: '4-qism · Juma namozi'
  },
  {
    id: 'p4-043', part: 4, topic: 'Musofir', type: 'open', difficulty: 'medium',
    q: 'Musofir kishi qaysi ishlarni qilishi mumkin (yengilliklar)?',
    answer: 'To\'rt rakatli farzlarni ikki rakat qilib o\'qiydi; mahsiga 72 soat mash tortadi; mashaqqatli bo\'lsa sunnatlarni o\'qimasligi; ramazon ro\'zasini keyinga qoldirishi mumkin.',
    explanation: 'Bular musofirga beriladigan shariat yengilliklaridir.',
    ref: '4-qism · Musofirlarning hukmlari'
  },
  {
    id: 'p4-044', part: 4, topic: 'Janoza', type: 'open', difficulty: 'hard',
    q: 'Janoza namozida mayyit qaerda va qanday qo\'yiladi?',
    answer: 'Mayyit o\'qiyotganlarning oldida — qibla tarafda bo\'ladi. Boshi shimol tarafda, oyog\'i janub tarafda, chalqanchasiga qo\'yiladi. Imom mayyitning ko\'kragi to\'g\'risida turadi.',
    explanation: 'Janoza qiyomda turgan holda, ruku\'-sajdasiz o\'qiladi.',
    ref: '4-qism · Janoza namozi'
  },
  {
    id: 'p4-045', part: 4, topic: 'Nafl namozlar', type: 'open', difficulty: 'hard',
    q: 'Tahajjud namozi qachon o\'qiladi?',
    answer: 'Kechasi yarim kechadan so\'ng uyqudan turib, tong otguncha o\'qiladigan namozdir (ikki, to\'rt yoki olti rakat).',
    explanation: 'Tahajjud — eng fazilatli nafl namozlardan biridir.',
    ref: '4-qism · Tahajjud namozi'
  }
]
