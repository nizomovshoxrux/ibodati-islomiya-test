// 5-QISM — QO'SHIMCHA savollar (Ro'za, Zakot, Haj...). Asosan variantli (mcq).
// Manba: «Ibodati Islomiya» — Ahmad Hodiy Maqsudiy, 5-qism

export default [
  {
    id: 'p5-101', part: 5, topic: 'Ro\'za', type: 'mcq', difficulty: 'easy',
    q: 'Ro\'za qaysi oyda har kuni tutiladi?',
    options: ['Sha\'bon', 'Ramazon', 'Shavvol', 'Muharram'],
    answer: 1,
    explanation: 'Farz ro\'za ramazon oyida har kuni tutiladi.',
    ref: '5-qism · Ro\'za'
  },
  {
    id: 'p5-102', part: 5, topic: 'Ro\'za', type: 'mcq', difficulty: 'medium',
    q: 'Saharlik qilish ro\'zador uchun qanday amal?',
    options: ['Farz', 'Sunnat', 'Vojib', 'Makruh'],
    answer: 1,
    explanation: 'Saharlik qilish ro\'za tutgan kishiga sunnatdir.',
    ref: '5-qism · Ro\'zaning sunnat, makruh va mufsidlari'
  },
  {
    id: 'p5-103', part: 5, topic: 'Ro\'za makruhlari', type: 'mcq', difficulty: 'hard',
    q: 'Ro\'zador uchun quyidagilardan qaysi biri makruh?',
    options: ['Misvok ishlatish', 'Hammomga tushish / suvga sho\'ng\'ish', 'Surma tortish', 'Qon oldirish'],
    answer: 1,
    explanation: 'Hammomga tushish, suvga sho\'ng\'ish, taomni tatib ko\'rish makruh. Misvok, surma, qon oldirish esa durust.',
    ref: '5-qism · Ro\'zaning sunnat, makruh va mufsidlari'
  },
  {
    id: 'p5-104', part: 5, topic: 'Ro\'za', type: 'mcq', difficulty: 'hard',
    q: 'Ro\'zador kishiga quyidagilardan qaysi biri durust (makruh emas)?',
    options: ['Suvga uzoq sho\'ng\'ish', 'Ko\'ziga surma tortish', 'Taomni chaynab tatish', 'Hammomda yotish'],
    answer: 1,
    explanation: 'Ko\'ziga surma tortish, yuzini moylash, misvok ishlatish durust bo\'ladi.',
    ref: '5-qism · Ro\'zaning sunnat, makruh va mufsidlari'
  },
  {
    id: 'p5-105', part: 5, topic: 'Ro\'za mufsidlari', type: 'mcq', difficulty: 'hard',
    q: 'Ro\'zador dimog\'iga chang yoki tutun kirsa, ro\'zasi nima bo\'ladi?',
    options: ['Buziladi, kafforat lozim', 'Buzilmaydi', 'Buziladi, qazo lozim', 'Buziladi'],
    answer: 1,
    explanation: 'Chang, g\'ubor, tutun kirsa ro\'za buzilmaydi (qazo ham, kafforat ham lozim emas). Ammo og\'izga qor/yomg\'ir kirsa buziladi (qazo).',
    ref: '5-qism · Qazo va kafforat'
  },
  {
    id: 'p5-106', part: 5, topic: 'Kafforat', type: 'mcq', difficulty: 'hard',
    q: 'Kafforat ro\'zasi necha kun va qanday tutiladi?',
    options: [
      'Muttasil oltmish kun (uzluksiz)',
      'Bo\'lib-bo\'lib qirq kun',
      'Uch kun',
      'O\'n kun'
    ],
    answer: 0,
    explanation: 'Kafforat ro\'zasi muttasil (uzluksiz) oltmish kun; bir kun uzilsa, yangidan boshlanadi.',
    ref: '5-qism · Qazo va kafforat'
  },
  {
    id: 'p5-107', part: 5, topic: 'Oy ko\'rish', type: 'mcq', difficulty: 'hard',
    q: 'Sha\'bon bilan ramazon orasidagi shubhali kun nima deyiladi?',
    options: ['Arafa kuni', 'Shak kuni', 'Tarviya kuni', 'Tashriq kuni'],
    answer: 1,
    explanation: 'Shak kuni — sha\'bonning 30-kuni bo\'lishi ham, ramazonning 1-kuni bo\'lishi ham mumkin bo\'lgan shubhali kun.',
    ref: '5-qism · Oy ko\'rib ro\'zaga kirish'
  },
  {
    id: 'p5-108', part: 5, topic: 'Shak kuni', type: 'mcq', difficulty: 'hard',
    q: 'Shak kunida ramazon ro\'zasi deb niyat qilib tutish qanday?',
    options: ['Durust', 'Durust emas (nafl bo\'lsa durust)', 'Farz', 'Vojib'],
    answer: 1,
    explanation: 'Shak kunida ramazon deb niyat qilib tutish durust emas; nafl ro\'za niyati bilan tutsa durust.',
    ref: '5-qism · Oy ko\'rib ro\'zaga kirish'
  },
  {
    id: 'p5-109', part: 5, topic: 'E\'tikof', type: 'mcq', difficulty: 'hard',
    q: 'E\'tikofning eng ozi necha kun?',
    options: ['Bir kun', 'Uch kun', 'Yetti kun', 'O\'n kun'],
    answer: 0,
    explanation: 'E\'tikofning eng ozi bir kun, ko\'pi o\'n kun. Ramazonning oxirgi o\'n kunligida sunnat.',
    ref: '5-qism · E\'tikof bayoni'
  },
  {
    id: 'p5-110', part: 5, topic: 'Zakot', type: 'mcq', difficulty: 'medium',
    q: 'Zakot kimlarga farz?',
    options: [
      'Har bir musulmonga',
      'Bolig\' va oqil, nisob miqdoricha moli bor musulmonga',
      'Faqat boylarning bolalariga',
      'Faqat savdogarlarga'
    ],
    answer: 1,
    explanation: 'Zakot bolig\', oqil va nisob miqdoricha moli bor musulmonga farz. Yosh bola, devona, faqirga farz emas.',
    ref: '5-qism · Zakot'
  },
  {
    id: 'p5-111', part: 5, topic: 'Zakot', type: 'mcq', difficulty: 'hard',
    q: 'Sigirning zakot nisobi qancha?',
    options: ['Beshta', 'O\'ttizta', 'Qirqta', 'Yigirmata'],
    answer: 1,
    explanation: 'Sigirning nisobi o\'ttizta — o\'ttiz sigirga bir yasharlik tana zakot beriladi.',
    ref: '5-qism · Hayvonlarning nisoblari'
  },
  {
    id: 'p5-112', part: 5, topic: 'Zakot', type: 'mcq', difficulty: 'hard',
    q: 'Otning zakot nisobi qancha?',
    options: ['Ikki dona', 'Besh dona', 'O\'ttiz dona', 'Qirq dona'],
    answer: 0,
    explanation: 'Otning nisobi ikki dona (biri yoki ikkisi baytal bo\'lishi shart). Bahosining qirqdan biri beriladi.',
    ref: '5-qism · Hayvonlarning nisoblari'
  },
  {
    id: 'p5-113', part: 5, topic: 'Zakot', type: 'mcq', difficulty: 'hard',
    q: 'Zakot deb niyat qilinmasdan berilgan sadaqa zakotga hisob bo\'ladimi?',
    options: ['Ha', 'Yo\'q, zakotga niyat qilinishi shart', 'Ba\'zan', 'Faqat pulda'],
    answer: 1,
    explanation: 'Sadaqa zakotga o\'tishi uchun berilayotganda zakotga niyat qilinishi shart.',
    ref: '5-qism · Zakot niyati'
  },
  {
    id: 'p5-114', part: 5, topic: 'Zakot', type: 'mcq', difficulty: 'hard',
    q: 'Quyidagilardan kimga zakot berish durust?',
    options: [
      'O\'z bolasiga',
      'Faqir qarindoshga / ilm tolibiga',
      'Eriga (xotin)',
      'Nisobli boyga'
    ],
    answer: 1,
    explanation: 'Faqir qarindoshlar, ilm toliblari, beva xotinlarga berish yaxshi. Ota-ona, bola, er-xotin va boyga berib bo\'lmaydi.',
    ref: '5-qism · Zakot berib bo\'lmaydigan kishilar'
  },
  {
    id: 'p5-115', part: 5, topic: 'Ushur', type: 'mcq', difficulty: 'hard',
    q: 'Ushurda (zakotdan farqli) qanday shart YO\'Q?',
    options: [
      'Hosil bo\'lishi',
      'Boylik va balog\'at sharti',
      'G\'alla bo\'lishi',
      'Yer hosili'
    ],
    answer: 1,
    explanation: 'Ushurda zakotdagidek boylik va balog\'at sharti yo\'q — boy-faqir, katta-kichik hamma ushur beradi.',
    ref: '5-qism · Ushur'
  },
  {
    id: 'p5-116', part: 5, topic: 'Fitr sadaqasi', type: 'mcq', difficulty: 'hard',
    q: 'Fitr sadaqasi kimlarga vojib?',
    options: [
      'Hammaga',
      'Shariatda boy hisoblangan kishilarga',
      'Faqat faqirlarga',
      'Faqat savdogarlarga'
    ],
    answer: 1,
    explanation: 'Fitr sadaqasi o\'z hojatidan ortiq nisob miqdoricha moli bor (shariatda boy) kishiga vojibdir.',
    ref: '5-qism · Fitr sadaqasi'
  },
  {
    id: 'p5-117', part: 5, topic: 'Fitr sadaqasi', type: 'mcq', difficulty: 'hard',
    q: 'Bir kishi uchun fitr sadaqasi miqdori qancha?',
    options: [
      'Yarim so\' bug\'doy yoki bir so\' arpa',
      'Bir so\' bug\'doy',
      'Ikki so\' xurmo',
      'Bir misqol oltin'
    ],
    answer: 0,
    explanation: 'Har bir kishi yarim so\' bug\'doy yoki bir so\' arpa (yoki yarim so\' xurmo, bir so\' mayiz) beradi.',
    ref: '5-qism · Fitr sadaqasi'
  },
  {
    id: 'p5-118', part: 5, topic: 'Qurbonlik', type: 'mcq', difficulty: 'medium',
    q: 'Qurbonlik qilinadigan qo\'y yoki echki necha yoshli bo\'lishi kerak?',
    options: ['Olti oylik', 'Bir yashar', 'Ikki yashar', 'Besh yashar'],
    answer: 1,
    explanation: 'Qo\'y/echki bir yashar bo\'lishi kerak (olti oylik bo\'lsa, jussasi katta bo\'lsa durust).',
    ref: '5-qism · Qurbonlik'
  },
  {
    id: 'p5-119', part: 5, topic: 'Qurbonlik', type: 'mcq', difficulty: 'hard',
    q: 'Qurbonlik sigiri necha yashar bo\'lishi kerak?',
    options: ['Bir yashar', 'Ikki yashar', 'Uch yashar', 'Besh yashar'],
    answer: 1,
    explanation: 'Qurbonlik sigir/ho\'kiz ikki yashar, tuya esa besh yashar bo\'lishi lozim.',
    ref: '5-qism · Qurbonlik'
  },
  {
    id: 'p5-120', part: 5, topic: 'Qurbonlik', type: 'mcq', difficulty: 'hard',
    q: 'Qurbonlikning terisi nima qilinadi?',
    options: [
      'Sotib o\'ziga olinadi',
      'Faqirlarga beriladi yoki sotib puli sadaqa qilinadi',
      'Tashlab yuboriladi',
      'Imomga sotiladi'
    ],
    answer: 1,
    explanation: 'Qurbonlik terisi faqirlarga beriladi yoki sotilib, puli faqirlarga sadaqa qilinadi.',
    ref: '5-qism · Qurbonlik'
  },
  {
    id: 'p5-121', part: 5, topic: 'Aqiqa', type: 'mcq', difficulty: 'hard',
    q: 'Aqiqada o\'g\'il va qiz bola uchun nechtadan jonliq so\'yiladi?',
    options: [
      'O\'g\'ilga 2 qo\'y, qizga 1 qo\'y',
      'Ikkalasiga 1 qo\'y',
      'O\'g\'ilga 1, qizga 2',
      'Ikkalasiga 2 qo\'y'
    ],
    answer: 0,
    explanation: 'Aqiqada o\'g\'il bola uchun ikki qo\'y, qiz bola uchun bir qo\'y so\'yiladi (7-kuni).',
    ref: '5-qism · Nazr va aqiqa'
  },
  {
    id: 'p5-122', part: 5, topic: 'Haj', type: 'mcq', difficulty: 'medium',
    q: 'Haj amallari qaysi oyda qilinadi?',
    options: ['Ramazon', 'Shavvol', 'Zulhijja', 'Muharram'],
    answer: 2,
    explanation: 'Haj amallari zulhijja oyida qilinadi.',
    ref: '5-qism · Haj'
  },
  {
    id: 'p5-123', part: 5, topic: 'Haj', type: 'mcq', difficulty: 'hard',
    q: 'Ehrom qaysi joydan qilinadi?',
    options: ['Makkada', '«Miyqot» deb ataladigan joylarda', 'Arafotda', 'Madinada'],
    answer: 1,
    explanation: 'Makkaga yetmasdan «Miyqot» deb ataladigan joylarning birida ehrom (niyat) qilinadi.',
    ref: '5-qism · Haj amallari'
  },
  {
    id: 'p5-124', part: 5, topic: 'Haj', type: 'mcq', difficulty: 'hard',
    q: 'Ehrom libosining ikki bo\'lagi nima deyiladi?',
    options: ['Izor va rido', 'Lungi va salla', 'Ko\'ylak va shim', 'Chopon va belbog\''],
    answer: 0,
    explanation: 'Ehrom libosi ikki bo\'lak mato: «izor» (beldan past) va «rido» (beldan yuqori).',
    ref: '5-qism · Haj amallari'
  },
  {
    id: 'p5-125', part: 5, topic: 'Haj', type: 'mcq', difficulty: 'hard',
    q: 'Ehromli (muhrim) kishi quyidagilardan qaysi birini qila olmaydi?',
    options: [
      'Yeyish va ichish',
      'Igna bilan tikilgan libos kiyish',
      'Soyabon bilan soyalanish',
      'Tahorat qilish'
    ],
    answer: 1,
    explanation: 'Muhrim igna bilan tikilgan libos kiymaydi, boshini berkitmaydi, xushbo\'y surtmaydi. Yeyish, ichish, tahorat esa durust.',
    ref: '5-qism · Ehromli kishi'
  },
  {
    id: 'p5-126', part: 5, topic: 'Haj', type: 'mcq', difficulty: 'hard',
    q: 'Safo va Marva orasida necha marta yuguriladi?',
    options: ['Uch marta', 'Besh marta', 'Yetti marta', 'O\'n marta'],
    answer: 2,
    explanation: 'Safo va Marva orasida yetti marta yuguriladi (Ka\'ba tavofi ham yetti marta).',
    ref: '5-qism · Hojilar Makkada qiladigan amallar'
  },
  {
    id: 'p5-127', part: 5, topic: 'Haj', type: 'mcq', difficulty: 'hard',
    q: 'Hojilar Arafotdan keyin kechani qaysi joyda o\'tkazadilar?',
    options: ['Mino', 'Muzdalifa', 'Makka', 'Safo'],
    answer: 1,
    explanation: 'Arafotdan so\'ng Muzdalifaga borib, shom va xuftonni u yerda o\'qib, kechani o\'tkazadilar.',
    ref: '5-qism · Hojilar Makkada qiladigan amallar'
  },
  {
    id: 'p5-128', part: 5, topic: 'Mayyit', type: 'mcq', difficulty: 'hard',
    q: 'Jon berayotgan kishi oldida qaysi sura o\'qiladi?',
    options: ['Yosin surasi', 'Fotiha surasi', 'Ixlos surasi', 'Mulk surasi'],
    answer: 0,
    explanation: 'Joni chiqquncha oldida Yosin surasi o\'qiladi, kalimai shahodat talqin qilinadi.',
    ref: '5-qism · Mayyit'
  },
  {
    id: 'p5-129', part: 5, topic: 'Qabr ziyorati', type: 'mcq', difficulty: 'hard',
    q: 'Qabristonga ziyorat uchun qaysi kunlar borish avloroq?',
    options: ['Dushanba-seshanba', 'Payshanba-juma', 'Shanba-yakshanba', 'Har kun bir xil'],
    answer: 1,
    explanation: 'Payshanba va juma kunlari qabristonga ziyorat borish avloroqdir.',
    ref: '5-qism · Qabristonga borib ziyorat qilish'
  },
  {
    id: 'p5-130', part: 5, topic: 'Qasam', type: 'mcq', difficulty: 'hard',
    q: 'Qasam nima bilan ichiladi?',
    options: [
      'Oy va quyosh bilan',
      'Alloh ismi bilan (Billohi, Vallohi, Tallohi)',
      'Ka\'ba bilan',
      'Payg\'ambar bilan'
    ],
    answer: 1,
    explanation: 'Qasam faqat Alloh ismi bilan (Billohi, Vallohi, Tallohi) ichiladi; boshqa narsalar bilan durust emas.',
    ref: '5-qism · Yamin, qasam, ont'
  },

  // ---- TF ----
  {
    id: 'p5-131', part: 5, topic: 'Ro\'za', type: 'tf', difficulty: 'medium',
    q: 'Esdan chiqarib yegan kishining ro\'zasi buziladi.',
    answer: false,
    explanation: 'Noto\'g\'ri. Ro\'za ekanini unutib yesa, ichsa — ro\'za buzilmaydi.',
    ref: '5-qism · Ro\'zaning mufsidlari'
  },
  {
    id: 'p5-132', part: 5, topic: 'Haj', type: 'tf', difficulty: 'medium',
    q: 'Umrida bir marta haj qilish farz, ikkinchisi nafldir.',
    answer: true,
    explanation: 'To\'g\'ri. Bir marta haj farz; ikkinchi marta haj nafl ibodatdir.',
    ref: '5-qism · Haj'
  },
  {
    id: 'p5-133', part: 5, topic: 'Mayyit', type: 'tf', difficulty: 'hard',
    q: 'Mayyit uchun yoqa yirtish, boshga urish, soch yulish durust.',
    answer: false,
    explanation: 'Noto\'g\'ri. Mayyit uchun yoqa yirtish, boshga urish, soch yulish — haromdir.',
    ref: '5-qism · Motam, yig\'i va ta\'ziya'
  },
  {
    id: 'p5-134', part: 5, topic: 'Zakot', type: 'tf', difficulty: 'hard',
    q: 'Yo\'qolgan molga zakot beriladi.',
    answer: false,
    explanation: 'Noto\'g\'ri. Yo\'qolgan molga zakot berilmaydi.',
    ref: '5-qism · Zakot'
  },

  // ---- FILL ----
  {
    id: 'p5-135', part: 5, topic: 'Haj', type: 'fill', difficulty: 'hard',
    q: 'Hojilar Ka\'badagi qora toshni ______ deb ataydilar.',
    answer: ['hajarul asvad', 'hajar ul asvad'],
    explanation: 'Hajarul asvad (Qora tosh) — Ka\'ba devoridagi muborak tosh.',
    ref: '5-qism · Hojilar Makkada qiladigan amallar'
  },
  {
    id: 'p5-136', part: 5, topic: 'Ushur', type: 'fill', difficulty: 'medium',
    q: 'Ushur — molning o\'n bo\'lagidan ______ bo\'lagi.',
    answer: ['bir', 'bitta', '1'],
    explanation: 'Ushur — molning o\'n bo\'lagidan bir bo\'lagi.',
    ref: '5-qism · Ushur'
  },
  {
    id: 'p5-137', part: 5, topic: 'Qurbonlik', type: 'fill', difficulty: 'medium',
    q: 'Bitta sigir yoki tuya eng ko\'pi ______ kishi uchun qurbonlikka kifoya qiladi.',
    answer: ['yetti', '7', 'yeti'],
    explanation: 'Sigir va tuya bir kishidan to yetti kishigacha kifoya qiladi.',
    ref: '5-qism · Qurbonlik'
  },

  // ---- OPEN ----
  {
    id: 'p5-138', part: 5, topic: 'Kafforat', type: 'open', difficulty: 'hard',
    q: 'Ro\'za kafforatining uch darajasini tartibda ayting.',
    answer: 'Avval bir qul ozod qilish; bunga qodir bo\'lmasa muttasil oltmish kun ro\'za tutish; unga ham qodir bo\'lmasa oltmish miskinga taom berish.',
    explanation: 'Bu tartib bilan kafforat ado etiladi.',
    ref: '5-qism · Qazo va kafforat'
  },
  {
    id: 'p5-139', part: 5, topic: 'Haj', type: 'open', difficulty: 'hard',
    q: 'Hojilar Makkaga yetganda dastlab nima qiladilar?',
    answer: 'To\'g\'ri Ka\'ba masjidiga boradilar; Ka\'bani ko\'rganda takbir-tahlil aytadilar; Hajarul asvadni o\'padilar; Ka\'bani yetti marta aylanib tavof qiladilar; «Ibrohim maqomi»da ikki rakat namoz o\'qiydilar; zam-zam suvidan ichadilar.',
    explanation: 'Bular Makkaga yetgach bajariladigan dastlabki amallardir.',
    ref: '5-qism · Hojilar Makkada qiladigan amallar'
  },
  {
    id: 'p5-140', part: 5, topic: 'Vasiyat', type: 'open', difficulty: 'medium',
    q: 'Betob kishi vafot etsa, qolgan molidan avval nima olinadi va keyin nima qilinadi?',
    answer: 'Avval kafan va dafn xarajati olinadi; keyin qolgan molning uchdan biridan vasiyatlar ado qilinadi; undan qolgani faroyiz (meros) kitoblariga muvofiq taqsim qilinadi.',
    explanation: 'Tartib: dafn xarajati → vasiyatlar → meros taqsimi.',
    ref: '5-qism · Vasiyat'
  }
]
