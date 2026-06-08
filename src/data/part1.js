// 1-QISM — E'tiqod (Aqida): Din, Imon, Alloh sifatlari, Farishtalar,
// Payg'ambarlar, Qur'on, Taqdir, Qiyomat, Jannat/Jahannam, Muhammad (s.a.v.)
// Manba: «Ibodati Islomiya» — Ahmad Hodiy Maqsudiy, 1-qism

export default [
  // ---------------- VARIANTLI (MCQ) ----------------
  {
    id: 'p1-001', part: 1, topic: 'Din va shariat', type: 'mcq', difficulty: 'easy',
    q: 'Din va shariat nima?',
    options: [
      'Alloh taoloning bandalariga yuborgan hukmlari to\'plami',
      'Faqat namoz o\'qish qoidalari',
      'Payg\'ambarlar tarixi',
      'Arab tilidagi kitoblar'
    ],
    answer: 0,
    explanation: 'Din va shariat — Alloh taoloning bandalariga yuborgan hukmlari to\'plamidir.',
    ref: '1-qism · Din va shariat'
  },
  {
    id: 'p1-002', part: 1, topic: 'Imon va Islom', type: 'mcq', difficulty: 'easy',
    q: 'Imon nima?',
    options: [
      'Alloh taolodan kelgan haq dinga ishonmoq',
      'Faqat ro\'za tutish',
      'Kitob o\'qish',
      'Sadaqa berish'
    ],
    answer: 0,
    explanation: 'Imon — Alloh taolodan kelgan haq dinga ishonmoqdir.',
    ref: '1-qism · Imon va Islom'
  },
  {
    id: 'p1-003', part: 1, topic: 'Amal', type: 'mcq', difficulty: 'medium',
    q: 'Islomda bandaning amali necha qismga bo\'linadi?',
    options: ['Olti qismga', 'Sakkiz qismga', 'To\'rt qismga', 'O\'n qismga'],
    answer: 1,
    explanation: 'Amal sakkiz qismga bo\'linadi: farz, vojib, sunnat, mustahab, muboh, harom, makruh, mustakrah.',
    ref: '1-qism · Amal'
  },
  {
    id: 'p1-004', part: 1, topic: 'Amal', type: 'mcq', difficulty: 'medium',
    q: 'Uni qilgan kishi savob topadigan, uzrsiz bajarmagan gunohkor bo\'ladigan, zarurligiga ishonmagan kofir sanaladigan amal qaysi?',
    options: ['Sunnat', 'Mustahab', 'Farz', 'Muboh'],
    answer: 2,
    explanation: 'Farz — Alloh buyurgan amal. Uni inkor etgan kishi kofir sanaladi.',
    ref: '1-qism · Amal'
  },
  {
    id: 'p1-005', part: 1, topic: 'Amal', type: 'mcq', difficulty: 'hard',
    q: 'Quyidagilardan qaysi biri vojib amalga misol bo\'ladi?',
    options: [
      'Besh vaqt namoz o\'qish',
      'Vitr namozini o\'qish',
      'Nafl ro\'za tutish',
      'Halol taom yeyish'
    ],
    answer: 1,
    explanation: 'Vitr namozi, hayit namozlari, fitr sadaqasi, qurbonlik — vojib amallardir. Besh vaqt namoz farz, nafl ro\'za mustahab, halol taom muboh.',
    ref: '1-qism · Amal'
  },
  {
    id: 'p1-006', part: 1, topic: 'Balog\'at', type: 'mcq', difficulty: 'medium',
    q: 'Alomatlar zohir bo\'lmasa, kishi necha yoshda balog\'atga yetgan hisoblanadi?',
    options: ['12 yoshda', '15 yoshda', '18 yoshda', '9 yoshda'],
    answer: 1,
    explanation: 'Alomatlar zohir bo\'lmasa, o\'n besh yoshda balog\'atga yetgan hisoblanadi.',
    ref: '1-qism · Balog\'at va oqillik'
  },
  {
    id: 'p1-007', part: 1, topic: 'Ibodat', type: 'mcq', difficulty: 'easy',
    q: 'Islomdagi eng ulug\' besh amalning birinchisi qaysi?',
    options: [
      'Namoz o\'qish',
      'Alloh va Islom diniga ishonish (imon)',
      'Ro\'za tutish',
      'Haj qilish'
    ],
    answer: 1,
    explanation: 'Birinchisi — Alloh taoloning borligiga, sifatlariga va Islom diniga ishonish (imon).',
    ref: '1-qism · Ibodat'
  },
  {
    id: 'p1-008', part: 1, topic: 'Imon kalimasi', type: 'mcq', difficulty: 'medium',
    q: 'Haqiqiy mo\'min bo\'lish uchun nima lozim?',
    options: [
      'Faqat dilda ishonish',
      'Faqat til bilan aytish',
      'Dilda ishonib, til bilan iqror bo\'lish',
      'Faqat amal qilish'
    ],
    answer: 2,
    explanation: 'Kishi chin dil bilan ishonishi va ishonganini til bilan iqror qilishi lozim. Faqat biri yetarli emas.',
    ref: '1-qism · Imon va iqror'
  },
  {
    id: 'p1-009', part: 1, topic: 'Alloh sifatlari', type: 'mcq', difficulty: 'medium',
    q: '«Boqiy» sifatining ma\'nosi nima?',
    options: [
      'Boshlanishi yo\'q',
      'Borligining so\'ngi yo\'q, abadiy',
      'Yagona',
      'Eshitguvchi'
    ],
    answer: 1,
    explanation: '«Boqiy» — borligining va bor bo\'lmoqligining so\'ngi yo\'q, abadiy, demakdir. Boshlanishi yo\'q bo\'lishi esa «Qadim».',
    ref: '1-qism · Alloh taologa imon'
  },
  {
    id: 'p1-010', part: 1, topic: 'Alloh sifatlari', type: 'mcq', difficulty: 'hard',
    q: '«Rahmon» va «Rahim» sifatlarining farqi nimada?',
    options: [
      'Rahmon — oxiratda, Rahim — dunyoda rahmat qiladi',
      'Rahmon — dunyoda hammaga, Rahim — oxiratda mo\'minlarga rahmat qiladi',
      'Ikkalasi bir xil ma\'noda',
      'Rahmon — faqat payg\'ambarlarga rahmat qiladi'
    ],
    answer: 1,
    explanation: '«Rahmon» dunyoda mo\'min-kofir hammaga marhamat qiladi; «Rahim» oxiratda mo\'minlarga rahm qilib jannatga kiritadi.',
    ref: '1-qism · Alloh taologa imon'
  },
  {
    id: 'p1-011', part: 1, topic: 'Alloh sifatlari', type: 'mcq', difficulty: 'easy',
    q: '«Ma\'bud» sifatining ma\'nosi nima?',
    options: ['Rizq berguvchi', 'Ibodatga loyiq', 'Yordam berguvchi', 'To\'g\'ri yo\'lga soluvchi'],
    answer: 1,
    explanation: '«Ma\'bud» — ibodatga loyiq, demakdir. Yolg\'iz Allohgina ibodatga loyiqdir.',
    ref: '1-qism · Alloh taologa imon'
  },
  {
    id: 'p1-012', part: 1, topic: 'Farishtalar', type: 'mcq', difficulty: 'medium',
    q: 'Payg\'ambarlarga vahiy keltiruvchi farishta qaysi?',
    options: ['Mikoil', 'Azroil', 'Jabroil', 'Isrofil'],
    answer: 2,
    explanation: 'Hazrati Jabroil Alloh taolodan payg\'ambarlarga vahiy keltiruvchidir.',
    ref: '1-qism · Farishtalar'
  },
  {
    id: 'p1-013', part: 1, topic: 'Farishtalar', type: 'mcq', difficulty: 'hard',
    q: 'Bandalarning jonini oluvchi farishta qaysi?',
    options: ['Jabroil', 'Mikoil', 'Isrofil', 'Azroil'],
    answer: 3,
    explanation: 'Hazrati Azroil qazosi yetgan bandalarning jonlarini oluvchidir. Mikoil rizqlarni ta\'minlaydi, Isrofil surga vakolatli.',
    ref: '1-qism · Farishtalar'
  },
  {
    id: 'p1-014', part: 1, topic: 'Payg\'ambarlar', type: 'mcq', difficulty: 'medium',
    q: 'Qur\'onda nechta payg\'ambarning ismi bayon qilingan?',
    options: ['Yigirma besh', 'O\'n sakkiz', 'Yuz yigirma to\'rt ming', 'Qirq'],
    answer: 0,
    explanation: 'Qur\'onda yigirma besh nafar payg\'ambarning ismi bayon qilingan. (Dunyoga kelganlar taxminan 124 ming.)',
    ref: '1-qism · Payg\'ambarlar sanog\'i'
  },
  {
    id: 'p1-015', part: 1, topic: 'Payg\'ambarlar', type: 'mcq', difficulty: 'easy',
    q: 'Eng dastlabki payg\'ambar kim?',
    options: ['Nuh (a.s.)', 'Ibrohim (a.s.)', 'Odam (a.s.)', 'Muhammad (s.a.v.)'],
    answer: 2,
    explanation: 'Eng dastlabki payg\'ambar hazrati Odam alayhissalomdir, oxirgisi Muhammad alayhissalom.',
    ref: '1-qism · Payg\'ambarlar sanog\'i'
  },
  {
    id: 'p1-016', part: 1, topic: 'Kitoblar', type: 'mcq', difficulty: 'medium',
    q: 'Muso alayhissalomga qaysi kitob nozil qilingan?',
    options: ['Zabur', 'Injil', 'Tavrot', 'Qur\'on'],
    answer: 2,
    explanation: 'Muso (a.s.)ga Tavrot, Dovud (a.s.)ga Zabur, Iso (a.s.)ga Injil, Muhammad (s.a.v.)ga Qur\'on nozil qilingan.',
    ref: '1-qism · Muqaddas kitoblar'
  },
  {
    id: 'p1-017', part: 1, topic: 'Kitoblar', type: 'mcq', difficulty: 'hard',
    q: 'Payg\'ambarlarga jami nechta kitob nozil qilingan?',
    options: ['Bir yuz to\'rt', 'To\'rt', 'Yigirma besh', 'Yuz'],
    answer: 0,
    explanation: 'Jami bir yuzu to\'rt kitob: 100 varaq (sahifa) va 4 ulug\' kitob — Tavrot, Zabur, Injil, Qur\'on.',
    ref: '1-qism · Muqaddas kitoblar'
  },
  {
    id: 'p1-018', part: 1, topic: 'Qur\'on', type: 'mcq', difficulty: 'medium',
    q: 'Qur\'oni karim necha sura va necha oyatdan iborat?',
    options: [
      '114 sura, 6226 oyat',
      '100 sura, 6000 oyat',
      '124 sura, 6666 oyat',
      '99 sura, 5000 oyat'
    ],
    answer: 0,
    explanation: 'Qur\'oni karim bir yuz o\'n to\'rt (114) sura va olti ming ikki yuz yigirma olti (6226) oyatdan iborat.',
    ref: '1-qism · Qur\'on — Kalomi sharif'
  },
  {
    id: 'p1-019', part: 1, topic: 'Qur\'on', type: 'mcq', difficulty: 'medium',
    q: 'Qur\'on Muhammad alayhissalomga necha yil davomida nozil bo\'lgan?',
    options: ['10 yil', '13 yil', '23 yil', '40 yil'],
    answer: 2,
    explanation: 'Kalomulloh yigirma uch yil davomida bo\'linib-bo\'linib nozil bo\'lgan.',
    ref: '1-qism · Qur\'on — Kalomi sharif'
  },
  {
    id: 'p1-020', part: 1, topic: 'Taqdir', type: 'mcq', difficulty: 'hard',
    q: 'Bandalarning amallari avvaldan qaerda yozib qo\'yilgan?',
    options: ['Tavrotda', 'Lavhul Mahfuzda', 'Injilda', 'Zaburda'],
    answer: 1,
    explanation: 'Har bir ishning muddati va tarzi avvaldan «Lavhul Mahfuz»da yozib qo\'yilgan.',
    ref: '1-qism · Taqdir va qazo'
  },
  {
    id: 'p1-021', part: 1, topic: 'Qiyomat', type: 'mcq', difficulty: 'medium',
    q: 'Jahannam ustiga qurilgan ko\'prikning nomi nima?',
    options: ['Sirot ko\'prigi', 'Havzi kavsar', 'Arasot', 'Mahshar'],
    answer: 0,
    explanation: 'Jahannam ustiga qurilgan ko\'prik Sirot ko\'prigi deb ataladi. Undan o\'tolmaganlar jahannamga tushadi.',
    ref: '1-qism · Qiyomat kunining sharhi'
  },
  {
    id: 'p1-022', part: 1, topic: 'Muhammad (s.a.v.)', type: 'mcq', difficulty: 'easy',
    q: 'Muhammad alayhissalom qaysi shaharda dunyoga kelganlar?',
    options: ['Madina', 'Makka', 'Quddus', 'Toif'],
    answer: 1,
    explanation: 'U zot Arabistonning Makka shahrida (milodiy 570-yil) dunyoga kelganlar.',
    ref: '1-qism · Muhammad alayhissalom'
  },
  {
    id: 'p1-023', part: 1, topic: 'Muhammad (s.a.v.)', type: 'mcq', difficulty: 'medium',
    q: 'Muhammad alayhissalom necha yoshlarida payg\'ambar etib saylandilar?',
    options: ['25 yoshda', '30 yoshda', '40 yoshda', '53 yoshda'],
    answer: 2,
    explanation: 'U zot qirq yoshlarida Hiro g\'orida payg\'ambar etib saylandilar.',
    ref: '1-qism · Muhammad alayhissalom'
  },
  {
    id: 'p1-024', part: 1, topic: 'Muhammad (s.a.v.)', type: 'mcq', difficulty: 'hard',
    q: 'Payg\'ambarimizga dastlab birinchi bo\'lib kim imon keltirgan (erkaklardan)?',
    options: ['Hazrati Umar', 'Hazrati Abu Bakr Siddiq', 'Hazrati Ali', 'Hazrati Usmon'],
    answer: 1,
    explanation: 'Dastlab erkaklardan Abu Bakr Siddiq, ayollardan Xadichai Kubro, yosh bolalardan Ali imon keltirgan.',
    ref: '1-qism · Muhammad alayhissalom'
  },
  {
    id: 'p1-025', part: 1, topic: 'Muhammad (s.a.v.)', type: 'mcq', difficulty: 'medium',
    q: 'Hijriy tarix qaysi voqeadan boshlab hisoblanadi?',
    options: [
      'Payg\'ambarning tug\'ilishi',
      'Makkadan Madinaga hijrat',
      'Payg\'ambarlik berilishi',
      'Makka fathi'
    ],
    answer: 1,
    explanation: 'Hijriy tarix Muhammad alayhissalom Makkadan Madinaga hijrat qilganlaridan boshlab hisoblanadi.',
    ref: '1-qism · Muhammad alayhissalom'
  },

  // ---------------- TO'G'RI / NOTO'G'RI (TF) ----------------
  {
    id: 'p1-026', part: 1, topic: 'Alloh sifatlari', type: 'tf', difficulty: 'easy',
    q: 'Alloh taolo biror maxluqotga (odamga yoki boshqasiga) o\'xshaydi.',
    answer: false,
    explanation: 'Noto\'g\'ri. Alloh taolo hech bir maxluqotga o\'xshamaydi, jismli yoki suratli emas, hech bir makonda emas.',
    ref: '1-qism · Alloh taologa imon'
  },
  {
    id: 'p1-027', part: 1, topic: 'Alloh sifatlari', type: 'tf', difficulty: 'medium',
    q: 'Alloh taoloning zotini va shaklini inson aqli bilan bilib bo\'ladi.',
    answer: false,
    explanation: 'Noto\'g\'ri. Alloh taoloning zotini bilib bo\'lmaydi, inson aqli bunga ojizlik qiladi. Faqat ism va sifatlarini bilsa bo\'ladi.',
    ref: '1-qism · Alloh taologa imon'
  },
  {
    id: 'p1-028', part: 1, topic: 'Payg\'ambarlar', type: 'tf', difficulty: 'easy',
    q: 'Muhammad alayhissalomdan so\'ng ham yangi payg\'ambarlar keladi.',
    answer: false,
    explanation: 'Noto\'g\'ri. Muhammad alayhissalom oxirgi payg\'ambar. Qiyomatgacha o\'zga payg\'ambar chiqmaydi.',
    ref: '1-qism · Payg\'ambarlar sanog\'i'
  },
  {
    id: 'p1-029', part: 1, topic: 'Gunohkorlar', type: 'tf', difficulty: 'medium',
    q: 'Islom diniga e\'tiqod qo\'ygan kishi gunoh qilsa, musulmonlikdan butunlay chiqib ketadi.',
    answer: false,
    explanation: 'Noto\'g\'ri. Gunoh qilgan mo\'min musulmonlikdan chiqmaydi, ammo fosiq va gunohkor bo\'ladi.',
    ref: '1-qism · Gunohkorlar'
  },
  {
    id: 'p1-030', part: 1, topic: 'Qur\'on', type: 'tf', difficulty: 'medium',
    q: 'Qur\'oni karim arab tilida nozil bo\'lgan.',
    answer: true,
    explanation: 'To\'g\'ri. Qur\'oni karim arab tilida bayon qilingan.',
    ref: '1-qism · Qur\'on — Kalomi sharif'
  },
  {
    id: 'p1-031', part: 1, topic: 'Taqdir', type: 'tf', difficulty: 'hard',
    q: 'Taqdir Lavhul Mahfuzda yozilgani uchun inson hech qanday harakat qilmasa ham bo\'ladi.',
    answer: false,
    explanation: 'Noto\'g\'ri. Har bir banda ilm olishi, halol topib yeyishi, gunohlardan to\'xtashi lozim. Inson o\'ziga bog\'liq ishlarda harakat qilishi kerak.',
    ref: '1-qism · Taqdir va qazo'
  },
  {
    id: 'p1-032', part: 1, topic: 'Farishtalar', type: 'tf', difficulty: 'medium',
    q: 'Farishtalarning yemoq-ichmoq kabi sifatlari bor.',
    answer: false,
    explanation: 'Noto\'g\'ri. Farishtalar yemoq-ichmoq kabi sifatlardan xoli, jismlari nurdan, jinslari yo\'q.',
    ref: '1-qism · Farishtalar'
  },
  {
    id: 'p1-033', part: 1, topic: 'Muhammad (s.a.v.)', type: 'tf', difficulty: 'medium',
    q: 'Muhammad alayhissalomning eng katta mo\'jizasi Qur\'oni karimdir.',
    answer: true,
    explanation: 'To\'g\'ri. U zotning eng katta (o\'n to\'rtinchi) mo\'jizasi Qur\'oni karimdir.',
    ref: '1-qism · Muhammad alayhissalomning mo\'jizalari'
  },

  // ---------------- BO'SH JOY (FILL) ----------------
  {
    id: 'p1-034', part: 1, topic: 'Imon kalimasi', type: 'fill', difficulty: 'medium',
    q: 'Til bilan iqror bo\'lish uchun aytiladigan kalima — kalimai ______ deyiladi.',
    answer: ['shahodat', 'shahoda'],
    explanation: 'Kalimai shahodat: «Ashhadu anla ilaha illallohu va ashhadu anna Muhammadan abduhu va rosuluh».',
    ref: '1-qism · Imon va iqror'
  },
  {
    id: 'p1-035', part: 1, topic: 'Amal', type: 'fill', difficulty: 'easy',
    q: 'Qilinsa ham, qilinmasa ham durust bo\'ladigan, savob ham gunoh ham bo\'lmaydigan amal ______ deyiladi.',
    answer: ['muboh'],
    explanation: 'Muboh — qilish-qilmaslik bandaning ixtiyorida bo\'lgan amal (masalan, halol taom yeyish).',
    ref: '1-qism · Amal'
  },
  {
    id: 'p1-036', part: 1, topic: 'Alloh sifatlari', type: 'fill', difficulty: 'hard',
    q: 'Katta kitoblarda Alloh taolo ______ ta nom bilan nomlanadi (raqam bilan yozing).',
    answer: ['to\'qson to\'qqiz', '99', 'toqson toqqiz'],
    explanation: 'Alloh taoloning to\'qson to\'qqiz (99) go\'zal ismi bor. Kitobda 35 turi ta\'riflangan.',
    ref: '1-qism · Alloh taologa imon'
  },
  {
    id: 'p1-037', part: 1, topic: 'Qiyomat', type: 'fill', difficulty: 'medium',
    q: 'Surni chalib, jonzotlarni jam qiladigan va halok qiladigan farishta — hazrati ______ dir.',
    answer: ['isrofil'],
    explanation: 'Hazrati Isrofil surni ikki marotaba chaladi: birinchisida jam bo\'ladi, ikkinchisida tiriladi.',
    ref: '1-qism · Farishtalar'
  },
  {
    id: 'p1-038', part: 1, topic: 'Muhammad (s.a.v.)', type: 'fill', difficulty: 'medium',
    q: 'Muhammad alayhissalomning dastlabki (birinchi) xotinlari hazrati ______ edi.',
    answer: ['xadicha', 'xadichai kubro', 'xadichai kubro roziallohu anho'],
    explanation: 'U zotning dastlabki xotinlari hazrati Xadichai Kubro roziallohu anhodir.',
    ref: '1-qism · Muhammad alayhissalom'
  },
  {
    id: 'p1-039', part: 1, topic: 'Muhammad (s.a.v.)', type: 'fill', difficulty: 'hard',
    q: 'Muhammad alayhissalom ______ yoshlarida qazo qildilar (raqam bilan).',
    answer: ['oltmish uch', '63', 'oltmish uch yosh'],
    explanation: 'U zot oltmish uch yoshlarida, hijriy 11-sanada Madinai Munavvarada baqoga safar qildilar.',
    ref: '1-qism · Muhammad alayhissalom'
  },

  // ---------------- OCHIQ SAVOL (OPEN) ----------------
  {
    id: 'p1-040', part: 1, topic: 'Amal', type: 'open', difficulty: 'hard',
    q: 'Amalning sakkiz qismini sanab bering.',
    answer: 'Farz, vojib, sunnat, mustahab, muboh, harom, makruh, mustakrah.',
    explanation: 'Bularning ba\'zilarini bajarish shart, ba\'zilarini bajarmaslik shart, ayrimlari esa ixtiyoriy.',
    ref: '1-qism · Amal'
  },
  {
    id: 'p1-041', part: 1, topic: 'Imon kalimasi', type: 'open', difficulty: 'medium',
    q: 'Imon kalimasida (Amantu billahi...) nimalarga ishonish bayon qilingan?',
    answer: 'Alloh taologa, Uning farishtalariga, kitoblariga, payg\'ambarlariga, qiyomat kuniga, yaxshilik-yomonlik Allohdan ekaniga (taqdirga) va o\'lgandan so\'ng qayta tirilishga.',
    explanation: 'Bu — imonning yetti asosi (arkoni iymon).',
    ref: '1-qism · Imon kalimasi'
  },
  {
    id: 'p1-042', part: 1, topic: 'Farishtalar', type: 'open', difficulty: 'medium',
    q: 'To\'rtta mashhur farishtaning vazifalarini ayting.',
    answer: 'Jabroil — vahiy keltiruvchi; Mikoil — rizq va yomg\'ir-qorlarga hukm qiluvchi; Azroil — jonlarni oluvchi; Isrofil — surga vakolatli.',
    explanation: 'Bu to\'rt farishta eng mashhurlaridir.',
    ref: '1-qism · Farishtalar'
  },
  {
    id: 'p1-043', part: 1, topic: 'Jannat va jahannam', type: 'open', difficulty: 'medium',
    q: 'Jannatga kimlar, jahannamga kimlar kiradi?',
    answer: 'Jannatga: Alloh buyurganini bajarib, taqiqlangandan qaytgan, gunohlari kechirilgan mo\'min bandalar kiradi. Jahannamga: kofirlar va fosiqlar kiradi.',
    explanation: 'Osiy mo\'minlar gunohi miqdoricha jazolanib, so\'ng do\'zaxdan chiqib jannatga qaytadi; kofirlar esa doimiy qoladi.',
    ref: '1-qism · Jannat va jahannam'
  },
  {
    id: 'p1-044', part: 1, topic: 'Alloh sifatlari', type: 'open', difficulty: 'hard',
    q: '«Tavvob» va «G\'ofur» sifatlarining ma\'nosini tushuntiring.',
    answer: 'Tavvob — tavbalarni qabul qilguvchi (chin dildan tavba qilganning tavbasini qabul qiladi). G\'ofur — gunohlarni kechirguvchi (xohlagan kishining gunohini kechirish Uning ixtiyorida).',
    explanation: 'Ikkalasi ham Allohning mag\'firat bilan bog\'liq sifatlaridir.',
    ref: '1-qism · Alloh taologa imon'
  },
  {
    id: 'p1-045', part: 1, topic: 'Tafakkur', type: 'open', difficulty: 'easy',
    q: 'Dunyodagi g\'aroyibliklarni ko\'rganda qanday zikr aytish lozim?',
    answer: '«Subhanallohi valhamdu lillahi va la ilaha illallohu vallohu akbar».',
    explanation: 'Yaratilgan har bir ne\'matning ajoyibligi Allohga shukrona aytishga sabab bo\'ladi.',
    ref: '1-qism · Tafakkur va tashakkur'
  }
]
