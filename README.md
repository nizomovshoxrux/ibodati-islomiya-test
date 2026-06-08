# Ibodati Islomiya — Test ilovasi

Ahmad Hodiy Maqsudiyning **«Ibodati Islomiya»** kitobi asosida imtihonga tayyorgarlik
ko'rish uchun test (quiz) web-ilovasi.

**Texnologiya:** Vue 3 + Vuetify 3 + Vite + PWA (offline ishlaydi, telefonga o'rnatiladi).

## Imkoniyatlar

- 🧩 **4 xil savol turi:** variantli test, to'g'ri/noto'g'ri, bo'sh joyni to'ldirish, ochiq savol
- 📊 **3 daraja:** oson · o'rta · qiyin
- 🎯 **Filtrlash:** qism (mavzu), tur, daraja bo'yicha tanlash
- 🔢 **Savol soni:** 10 / 20 / 50 / 100 / hammasi
- ⏱ **Taymer** (ixtiyoriy) — har savolga 45 soniya
- ⭐ **Belgilash** — qiyin savollarni saqlab, keyin qayta ishlash
- ❌ **Xato savollarni qayta ishlash**
- 📈 **Statistika** — qism va tur bo'yicha tahlil (localStorage'da saqlanadi)
- 📱 **Responsive** — mobil va kompyuter uchun
- 🔌 **PWA** — internetsiz ishlaydi, "Bosh ekranga qo'shish" mumkin

## Ishga tushirish

```bash
npm install      # bog'liqliklarni o'rnatish (bir marta)
npm run dev      # rivojlantirish serveri → http://localhost:5173
npm run build    # ishlab chiqarish uchun (dist/ papkasi hosil bo'ladi)
npm run preview  # build natijasini ko'rish
```

## Savol bazasi

Savollar `src/data/part1.js` ... `part5.js` fayllarida joylashgan.
Hozircha **212 ta** savol mavjud, baza 1000 tagacha kengaytirilishi uchun
tayyorlangan — yangi savollarni shu fayllarga qo'shib boravering.

Har bir savol formati:

```js
{
  id: 'p1-001',           // noyob ID (qism prefiksi bilan)
  part: 1,                // qism (1..5)
  topic: 'Imon va Islom', // mavzu
  type: 'mcq',            // mcq | tf | fill | open
  difficulty: 'easy',     // easy | medium | hard
  q: 'Savol matni',       // fill turida ___ (bo'sh joy) ishlatiladi
  options: ['A','B','C','D'], // faqat mcq
  answer: 0,              // mcq: indeks · tf: true/false · fill: ['javob'] · open: 'namuna'
  explanation: 'Izoh',    // javob izohi
  ref: '1-qism · Imon va Islom' // kitobdagi manba
}
```

## Manba

«Ibodati Islomiya» — Ahmad Hodiy Maqsudiy · ziyouz.com kutubxonasi
