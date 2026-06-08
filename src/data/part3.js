// 3-QISM — Namoz qoidalari (Vaqtlar, Qibla, Niyat, Azon, Zikrlar,
// Rakatlar, Ayollar namozi, Namoz vojib/sunnat/makruhlari)
// Manba: «Ibodati Islomiya» — Ahmad Hodiy Maqsudiy, 3-qism

export default [
  // ---------------- VARIANTLI (MCQ) ----------------
  {
    id: 'p3-001', part: 3, topic: 'Namoz', type: 'mcq', difficulty: 'easy',
    q: 'Bir kunda necha mahal farz namoz o\'qiladi?',
    options: ['To\'rt mahal', 'Besh mahal', 'Olti mahal', 'Uch mahal'],
    answer: 1,
    explanation: 'Besh mahal: bomdod, peshin, asr, shom, xufton.',
    ref: '3-qism · Namoz o\'qish qoidalari'
  },
  {
    id: 'p3-002', part: 3, topic: 'Namoz turlari', type: 'mcq', difficulty: 'medium',
    q: 'Quyidagilardan qaysi biri vojib namozdir?',
    options: ['Bomdod farzi', 'Vitr namozi', 'Tarovih', 'Tahajjud'],
    answer: 1,
    explanation: 'Vitr namozi va hayit (Ramazon, Qurbon) namozlari vojibdir. Tarovih — sunnat, tahajjud — nafl.',
    ref: '3-qism · Namoz o\'qish qoidalari'
  },
  {
    id: 'p3-003', part: 3, topic: 'Namoz vaqtlari', type: 'mcq', difficulty: 'medium',
    q: 'Tonggi (bomdod) namoz vaqti qachongacha davom etadi?',
    options: [
      'Quyosh chiqquncha',
      'Peshingacha',
      'Tushgacha',
      'Ufq yorishguncha'
    ],
    answer: 0,
    explanation: 'Bomdod vaqti — ufq yorishgandan to quyosh chiqquncha.',
    ref: '3-qism · Namoz vaqtlari'
  },
  {
    id: 'p3-004', part: 3, topic: 'Namoz vaqtlari', type: 'mcq', difficulty: 'hard',
    q: 'Asr namozi vaqti qachon boshlanadi?',
    options: [
      'Quyosh botganda',
      'Odam soyasi ikki barobar uzaygandan so\'ng',
      'Quyosh qiyomga kelganda',
      'Ufq yo\'qolganda'
    ],
    answer: 1,
    explanation: 'Asr vaqti — odam soyasi ikki barobar uzaygandan to quyosh botgunchadir.',
    ref: '3-qism · Namoz vaqtlari'
  },
  {
    id: 'p3-005', part: 3, topic: 'Makruh vaqtlar', type: 'mcq', difficulty: 'hard',
    q: 'Qaysi paytlarda namoz o\'qish makruh?',
    options: [
      'Tunda',
      'Quyosh chiqayotganda, qiyomga kelganda, botayotganda',
      'Peshin vaqtida',
      'Juma kuni'
    ],
    answer: 1,
    explanation: 'Quyosh chiqayotgan, qiyomga kelgan (tik turgan) va botayotgan paytlarda namoz o\'qish makruhdir.',
    ref: '3-qism · Makruh vaqtlar'
  },
  {
    id: 'p3-006', part: 3, topic: 'Qibla', type: 'mcq', difficulty: 'easy',
    q: 'Qibla qaysi taraf?',
    options: [
      'Madinadagi Masjidi nabaviy',
      'Quddusdagi masjid',
      'Makkadagi Ka\'ba joylashgan zamin',
      'Sharq tarafi'
    ],
    answer: 2,
    explanation: 'Qibla — Makka shahridagi Baytullohda joylashgan Ka\'ba taraf, aniqrog\'i, u bino qilingan zamindir.',
    ref: '3-qism · Qibla'
  },
  {
    id: 'p3-007', part: 3, topic: 'Qibla', type: 'mcq', difficulty: 'hard',
    q: 'Kechasi sahroda qiblani qaysi yulduz orqali aniqlash mumkin?',
    options: ['Cho\'lpon', 'Oltin qoziq (Shimol) yulduzi', 'Hulkar', 'Quyosh'],
    answer: 1,
    explanation: 'Oltin qoziq yulduzi shimol tarafda turadi; u orqali oftob yo\'nalishini topib qiblani aniqlash mumkin.',
    ref: '3-qism · Qiblani aniqlamoq'
  },
  {
    id: 'p3-008', part: 3, topic: 'Niyat', type: 'mcq', difficulty: 'medium',
    q: 'Namozda niyat haqida qaysi hukm to\'g\'ri?',
    options: [
      'Faqat til bilan aytsa kifoya',
      'Dil bilan niyat qilish farz, til bilan aytish mustahab',
      'Niyat shart emas',
      'Faqat imom niyat qiladi'
    ],
    answer: 1,
    explanation: 'Dil bilan niyat qilish farz; til bilan qaysi namoz ekanini aytib niyat qilish mustahabdir. Til bilan aytib dilda bo\'lmasa niyat hisobga o\'tmaydi.',
    ref: '3-qism · Niyat'
  },
  {
    id: 'p3-009', part: 3, topic: 'Azon', type: 'mcq', difficulty: 'medium',
    q: 'Azon va iqomatning bir-biridan farqi nimada?',
    options: [
      'Azon tezroq aytiladi',
      'Iqomat azondan tezroq aytiladi va «Qod qomatis solah» qo\'shiladi',
      'Iqomatda «Allohu akbar» yo\'q',
      'Hech qanday farqi yo\'q'
    ],
    answer: 1,
    explanation: 'Iqomat azondan tezroq aytiladi va «Hayya alal falah»dan so\'ng ikki marta «Qod qomatis solah» deyiladi.',
    ref: '3-qism · Azon va iqomat'
  },
  {
    id: 'p3-010', part: 3, topic: 'Azon', type: 'mcq', difficulty: 'hard',
    q: 'Bomdod azonida qaysi qo\'shimcha kalima aytiladi?',
    options: [
      '«Qod qomatis solah»',
      '«Assolatu xoyrum minan navm» (Namoz uyqudan afzal)',
      '«Hayya alal jihod»',
      'Hech qanday qo\'shimcha yo\'q'
    ],
    answer: 1,
    explanation: 'Bomdod azonida «Hayya alal falah»dan so\'ng ikki marta «Assolatu xoyrum minan navm» (Namoz uyqudan afzal) aytiladi.',
    ref: '3-qism · Azon va iqomat'
  },
  {
    id: 'p3-011', part: 3, topic: 'Namoz zikrlari', type: 'mcq', difficulty: 'medium',
    q: 'Ruku\'da qaysi tasbeh aytiladi?',
    options: [
      '«Subhana robbiyal a\'ziym»',
      '«Subhana robbiyal a\'la»',
      '«Samiallohu liman hamidah»',
      '«Allohu akbar»'
    ],
    answer: 0,
    explanation: 'Ruku\' tasbehi: «Subhana robbiyal a\'ziym». Sajda tasbehi esa «Subhana robbiyal a\'la».',
    ref: '3-qism · Namoz zikrlari'
  },
  {
    id: 'p3-012', part: 3, topic: 'Ikki rakatli namoz', type: 'mcq', difficulty: 'hard',
    q: 'Ikki rakatli namozda nechta sajda bo\'ladi?',
    options: ['Ikki sajda', 'To\'rt sajda', 'Olti sajda', 'Sakkiz sajda'],
    answer: 1,
    explanation: 'Ikki rakatli namozda ikki qiyom, ikki ruku\', to\'rt sajda va bir qa\'da bo\'ladi.',
    ref: '3-qism · Ikki rakatli namoz'
  },
  {
    id: 'p3-013', part: 3, topic: 'To\'rt rakatli namoz', type: 'mcq', difficulty: 'hard',
    q: 'To\'rt rakatli farz namozning oxirgi ikki rakatida nima o\'qiladi?',
    options: [
      'Fotiha va qo\'shimcha sura',
      'Faqat Fotiha surasi',
      'Faqat qo\'shimcha sura',
      'Hech narsa o\'qilmaydi'
    ],
    answer: 1,
    explanation: 'Farz namozda avvalgi ikki rakatda Fotiha + sura, uchinchi-to\'rtinchi rakatda faqat Fotiha o\'qiladi.',
    ref: '3-qism · To\'rt rakatli namoz bayoni'
  },
  {
    id: 'p3-014', part: 3, topic: 'Vitr namozi', type: 'mcq', difficulty: 'hard',
    q: 'Vitr namozining uchinchi rakatida nima o\'qiladi?',
    options: [
      'Faqat Fotiha',
      'Qunut duosi',
      'Tashahhud',
      'Sajda oyati'
    ],
    answer: 1,
    explanation: 'Vitr namozining uchinchi rakatida qo\'shimcha suradan keyin takbir aytib, qo\'l bog\'lanib Qunut duosi o\'qiladi.',
    ref: '3-qism · To\'rt rakatli namoz bayoni'
  },
  {
    id: 'p3-015', part: 3, topic: 'Ayollar namozi', type: 'mcq', difficulty: 'hard',
    q: 'Ayollar namozda qo\'llarini qaerga qo\'yadilar?',
    options: [
      'Kindik ostiga',
      'Ko\'kraklarining ustiga',
      'Yon tomonga',
      'Boshlari ustiga'
    ],
    answer: 1,
    explanation: 'Ayollar qo\'llarini ko\'kraklarining ustiga qo\'yadilar (erkaklar kindik ostiga). Erkaklar namozidan sakkiz joyda farq qiladi.',
    ref: '3-qism · Ayollar namozi'
  },
  {
    id: 'p3-016', part: 3, topic: 'Namoz vojiblari', type: 'mcq', difficulty: 'hard',
    q: 'Namozning vojiblari nechta?',
    options: ['O\'nta', 'O\'n besh', 'Yigirma', 'Yigirma besh'],
    answer: 1,
    explanation: 'Namozning vojiblari o\'n beshta: Fotiha o\'qish, qa\'dada o\'tirish, tashahhud, salom, Qunut va h.k.',
    ref: '3-qism · Namoz vojiblari'
  },
  {
    id: 'p3-017', part: 3, topic: 'Namoz sunnatlari', type: 'mcq', difficulty: 'hard',
    q: 'Namozda nechta sunnat bor?',
    options: ['O\'n besh', 'Yigirma', 'Yigirma besh', 'O\'ttiz'],
    answer: 2,
    explanation: 'Namozda yigirma beshta sunnat bor: jamoat bilan o\'qish, azon, Sano aytish, «Omin» deyish va h.k.',
    ref: '3-qism · Namoz sunnatlari'
  },
  {
    id: 'p3-018', part: 3, topic: 'Namoz mustahablari', type: 'mcq', difficulty: 'hard',
    q: 'Namoz mustahablari nechta?',
    options: ['O\'nta', 'O\'n besh', 'Yigirmata', 'Yigirma besh'],
    answer: 2,
    explanation: 'Namoz mustahablari yigirmata: barmoqlar orasini ochish, suralarni burro o\'qish va h.k.',
    ref: '3-qism · Namoz mustahablari'
  },
  {
    id: 'p3-019', part: 3, topic: 'Namozni buzuvchilar', type: 'mcq', difficulty: 'hard',
    q: 'Namozni buzuvchi amallar nechta?',
    options: ['O\'n bitta', 'Yigirma ikkita', 'O\'n to\'rtta', 'O\'ttiz'],
    answer: 1,
    explanation: 'Namozni yigirma ikki amal buzadi: so\'zlashish, salom berish, taom yeyish, kulish, sharob ichish va h.k.',
    ref: '3-qism · Namozni buzuvchi amallar'
  },
  {
    id: 'p3-020', part: 3, topic: 'Namoz ruknlari', type: 'mcq', difficulty: 'medium',
    q: 'Qiyomda kamida qancha Qur\'on o\'qish namoz rukniga kiradi?',
    options: ['Bir oyat', 'Uch oyat miqdoricha', 'Bir sura', 'Besh oyat'],
    answer: 1,
    explanation: 'Qiyomda uch oyat miqdoricha Qur\'on o\'qish namoz ruknlaridan biridir.',
    ref: '3-qism · Namoz ruknlari'
  },

  // ---------------- TO'G'RI / NOTO'G'RI (TF) ----------------
  {
    id: 'p3-021', part: 3, topic: 'Janoza', type: 'tf', difficulty: 'medium',
    q: 'Mayyit uchun janoza o\'qish farzi kifoyadir.',
    answer: true,
    explanation: 'To\'g\'ri. Janoza — farzi kifoya: bir kishi o\'qisa, boshqalardan soqit bo\'ladi.',
    ref: '3-qism · Namoz o\'qish qoidalari'
  },
  {
    id: 'p3-022', part: 3, topic: 'Namoz vaqtlari', type: 'tf', difficulty: 'medium',
    q: 'Namoz vaqti kelmasidan oldin o\'qilsa, farz namozga o\'tadi.',
    answer: false,
    explanation: 'Noto\'g\'ri. Vaqti kelmasdan o\'qilsa, farz namozga o\'tmaydi.',
    ref: '3-qism · Namoz vaqtlari'
  },
  {
    id: 'p3-023', part: 3, topic: 'Qibla', type: 'tf', difficulty: 'hard',
    q: 'Ka\'baning devor va tomlari qibla hisoblanadi.',
    answer: false,
    explanation: 'Noto\'g\'ri. Devor va tomlar emas, balki Ka\'ba bino qilingan zamin qibladir. Shu sabab devorlar qulasa ham qiblaligi davom etadi.',
    ref: '3-qism · Qibla'
  },
  {
    id: 'p3-024', part: 3, topic: 'Azon', type: 'tf', difficulty: 'hard',
    q: 'Tahoratsiz, mast yoki devona kishining azon aytishi makruhdir.',
    answer: true,
    explanation: 'To\'g\'ri. Tahoratsiz, junubli, devona va mast kishilarning azon-iqomat aytishi makruh; xotin va fosiqlarniki joiz emas.',
    ref: '3-qism · Azon va iqomat'
  },
  {
    id: 'p3-025', part: 3, topic: 'Niyat', type: 'tf', difficulty: 'medium',
    q: 'Imomga ergashgan kishi ergashuvni ham niyat qilishi lozim.',
    answer: true,
    explanation: 'To\'g\'ri. Imomga ergashgan kishi ergashuvni (iqtidoni) ham niyat qilishi lozim.',
    ref: '3-qism · Niyat'
  },
  {
    id: 'p3-026', part: 3, topic: 'Ayollar namozi', type: 'tf', difficulty: 'medium',
    q: 'Ayollar takbirda qo\'llarini yelkagacha ko\'taradilar.',
    answer: true,
    explanation: 'To\'g\'ri. Ayollar takbirda qo\'llarini yelkagacha ko\'taradilar (erkaklar quloqqacha).',
    ref: '3-qism · Ayollar namozi'
  },
  {
    id: 'p3-027', part: 3, topic: 'Zaif kishilar', type: 'tf', difficulty: 'hard',
    q: 'Qiyomga turolmagan zaif kishi o\'tirib namoz o\'qiy oladi.',
    answer: true,
    explanation: 'To\'g\'ri. Zaiflik sababli qiyomga turolmasa o\'tirib, unga ham holi kelmasa ishora bilan o\'qiydi.',
    ref: '3-qism · Zaif va nogiron kishilar'
  },

  // ---------------- BO'SH JOY (FILL) ----------------
  {
    id: 'p3-028', part: 3, topic: 'Namoz', type: 'fill', difficulty: 'easy',
    q: 'Bir kunning besh vaqt namozi: bomdod, peshin, asr, shom va ______.',
    answer: ['xufton'],
    explanation: 'Besh vaqt: bomdod, peshin, asr, shom, xufton.',
    ref: '3-qism · Namoz o\'qish qoidalari'
  },
  {
    id: 'p3-029', part: 3, topic: 'Namoz zikrlari', type: 'fill', difficulty: 'medium',
    q: 'Namozda Fotiha surasidan so\'ng «______» deyiladi (sunnat).',
    answer: ['omin', 'оmin'],
    explanation: 'Fotihadan so\'ng «Omin» deyish sunnatdir.',
    ref: '3-qism · Namoz sunnatlari'
  },
  {
    id: 'p3-030', part: 3, topic: 'Ruku\'', type: 'fill', difficulty: 'medium',
    q: 'Ruku\'dan qaytganda «Samiallohu liman hamidah, robbana lakal ______» deyiladi.',
    answer: ['hamd'],
    explanation: 'Ruku\'dan qaytib tik turilganda «...robbana lakal hamd» deyiladi.',
    ref: '3-qism · Ikki rakatli namoz'
  },
  {
    id: 'p3-031', part: 3, topic: 'Janoza', type: 'fill', difficulty: 'hard',
    q: 'Bir kishi o\'qisa eshitganlarga ham kifoya qiluvchi tilovat ______ deyiladi.',
    answer: ['farzi kifoya', 'farz kifoya'],
    explanation: 'Farzi kifoya — bir kishi bajarsa boshqalardan soqit bo\'luvchi farz (masalan, janoza namozi).',
    ref: '3-qism · Namoz o\'qish qoidalari'
  },

  // ---------------- OCHIQ SAVOL (OPEN) ----------------
  {
    id: 'p3-032', part: 3, topic: 'Namoz shartlari', type: 'open', difficulty: 'medium',
    q: 'Namozning tashqi shartlarini (yetti) sanab bering.',
    answer: 'Tahoratda bo\'lish, libosning pokligi, namozgohning ozodaligi, avratlarning libosda bo\'lishi, namozni o\'z vaqtida o\'qish, qiblaga qarash, dildan niyat qilish.',
    explanation: 'Bu yetti shart namozning tashqi (oldindan bajariladigan) shartlaridir.',
    ref: '3-qism · Namoz shartlari'
  },
  {
    id: 'p3-033', part: 3, topic: 'Ayollar namozi', type: 'open', difficulty: 'hard',
    q: 'Ayollar namozi erkaklarnikidan nechta joyda farq qiladi va bittasini ayting.',
    answer: 'Sakkiz joyda farq qiladi. Masalan: takbirda qo\'llarini yelkagacha ko\'taradilar; qo\'llarini ko\'krak ustiga qo\'yadilar; sajdada yig\'ilibroq sajda qiladilar va h.k.',
    explanation: 'Erkaklar va ayollar namozining harakatlarida sakkizta farq mavjud.',
    ref: '3-qism · Ayollar namozi'
  },
  {
    id: 'p3-034', part: 3, topic: 'Namoz vaqtlari', type: 'open', difficulty: 'medium',
    q: 'Peshin namozining vaqti qachondan qachongacha?',
    answer: 'Quyosh zavolga (qiyomdan) ketgandan to asr vaqti kirgunchadir.',
    explanation: 'Peshin vaqti quyosh zavolga ketishi bilan boshlanadi.',
    ref: '3-qism · Namoz vaqtlari'
  },
  {
    id: 'p3-035', part: 3, topic: 'Iqtido', type: 'open', difficulty: 'hard',
    q: 'Imomga ergashgan kishi (muqtadiy) qiyomda nima o\'qiydi?',
    answer: 'Faqat Sanoni o\'qiydi. «A\'uzu billah», «Bismillah» va suralarni o\'qimaydi, sukut qiladi. Ruku\'dan qaytganda «Robbana lakal hamd» deydi.',
    explanation: 'Muqtadiy imom qiroat qilganda jim turadi (insot vojibdir).',
    ref: '3-qism · Namoz zikrlari / 4-qism · Jamoat'
  }
]
