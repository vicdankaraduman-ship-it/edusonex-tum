# Edusonex - AI Destekli Okul Kayıt Motoru

Türkiye'nin ilk White-Label Yapay Zeka Destekli Öğrenci Kayıt ve Pazarlama Altyapısı (Edu-RaaS).

## 🎯 Ürün Konumu

> **"Okulunuza AI ile yeni kayıt kazandırın — kendi markanızla."**

Geleneksel reklamların körleştiği çağda, Edusonex okulların potansiyel velileri **sıcak lead** olarak yakalamasını sağlayan yapay zeka altyapısıdır. Öğrenci başına değil, kapasite bazlı ücretlendirme.

## 🚀 Aktif Projeler

| Proje | Subdomain | Durum | Teknoloji |
|-------|-----------|-------|-----------|
| **Ana Platform** | `edusonex.com.tr` | 🟢 Aktif | React + Vite + TypeScript |
| **ÖdevGPT** | `odev.edusonex.com.tr` | 🟢 Aktif | Groq Llama 3.3 + Supabase |
| **HEM AI** | `hem.edusonex.com.tr` | 🟢 Aktif | React + Supabase |
| **Anket** | `anket.edusonex.com.tr` | 🟢 Aktif | WebSocket + Realtime |
| **Sınav Fabrikası** | `sinav.edusonex.com.tr` | 🟡 Beta | FastAPI + LangChain |
| **Hızlı Okuma** | `ho.edusonex.com.tr` | 🟢 Aktif | React + RSVP |
| **DokumanOS** | `evrak.edusonex.com.tr` | 🟢 Aktif | React + Supabase |
| **Studio** | `studio.edusonex.com.tr` | 🟢 Aktif | React |
| **NöroBil** | `norobil.edusonex.com.tr` | 🟢 Aktif | React + Groq |

## 🌐 Ana Sayfa Özellikleri (Mar 2026)

| Özellik | Durum |
|---|---|
| Exit-Intent Pop-up (Lead yakalama) | ✅ Aktif |
| Kanca Simülatörü (İnteraktif demo) | ✅ Aktif |
| Aciliyet Barı (Pilot kontenjan) | ✅ Aktif |
| Güven Kalkanı (KVKK · İYS · IT'siz) | ✅ Aktif |
| ROI Hesaplayıcı | ✅ Aktif |
| SSS Sayfası (`/sss`) | ✅ Aktif |
| Rapor Sayfası (`/rapor/2026`) | ✅ Aktif |
| Blog (AI üretimi, Türkçe) | ✅ Aktif |
| Referanslar & Rakip Karşılaştırma | ✅ Aktif |
| SEO (sitemap, robots.txt, JSON-LD) | ✅ Aktif |

## 🏗️ Teknoloji Stack

```
Frontend  : React 18 · TypeScript · Vite · Shadcn/UI · Tailwind CSS
Backend   : Supabase (Auth, DB, Storage)
AI Engine : Groq (Llama 3.3) · Claude · GPT-4
CRM       : Kommo (Resmi TR Partneri)
Blog      : Python bot → Groq API → blog-posts.json
Deployment: Cloudflare Pages
```

## 📦 Kurulum

```bash
npm install
npm run dev      # http://localhost:8080
npm run build    # Production
```

## 💰 Fiyatlandırma (Aylık, Kapasite Bazlı)

| Paket | Kapasite | Fiyat |
|---|---|---|
| Starter | 100 öğrenciye kadar | 29.000 TL/ay |
| Growth | 500 öğrenciye kadar | 39.500 TL/ay |
| Enterprise | 1.000 öğrenciye kadar | 49.750 TL/ay |

> Pilot kontenjanı: Bu çeyrek için **1 okul** kabulü.

## 📂 Önemli Dosyalar

```
src/
├── pages/
│   ├── Index.tsx          # Ana sayfa (ROI hesap, Kanca Simülatörü)
│   ├── SSS.tsx            # Sık Sorulan Sorular
│   ├── RaporPage.tsx      # /rapor/2026 — Lead mıknatısı rapor sayfası
│   ├── Products.tsx       # Ürünler & Karşılaştırma tablosu
│   ├── HemAI.tsx          # HEM AI — Kurumsal AI yetiştirici katmanı
│   └── References.tsx     # Referanslar & Rakip haritası
├── components/
│   ├── ExitIntentPopup.tsx # Exit-intent lead yakalama popup'ı
│   ├── Header.tsx          # Navigasyon (SSS, ROI Hesapla linkleri)
│   └── Footer.tsx          # Footer (SSS, Rapor linkleri)
scripts/
└── blog_bot/bot.py         # Groq ile Türkçe blog içeriği üretici
.raporlar/Pazarlama/        # Stratejik pazarlama raporları
```

## 📄 Lisans

© 2026 Edusonex. Tüm hakları saklıdır.

---

**Bismillahirrahmanirrahim** 🌟
