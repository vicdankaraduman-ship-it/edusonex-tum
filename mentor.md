# AI-Centric Content & Automation Manifesto (sağlıkGPT Edition)

Bu dosya, Edusonex üzerinde başarıyla uygulanan "Master Level" AI-Readiness ve İçerik Otomasyonu protokollerini sağlıkGPT projesine aktarmak için tasarlanmıştır.

## 1. Mimari Prensipler (AEO & GEO Odaklı)
- **Veri Yapısı:** Blog içerikleri sadece metin değil; `aiSummary` (200-280 karakter) ve `keyTakeaways` (3 madde) alanlarını içeren yapılandırılmış JSON formatında tutulmalıdır. Bu, Perplexity ve ChatGPT gibi motorların içeriği "snippet" olarak çekmesini sağlar.
- **SSR Fallback:** SPA (Single Page Application) yapılarında, AI botlarının (NotebookLM gibi) JavaScript çalıştırmadan içeriği okuyabilmesi için `index.html` içinde `visually-hidden` veya `#root` fallback katmanları kullanılmalıdır.

## 2. Otomasyon Döngüsü (The Loop)
1. **Üretim (AI Bot):** Groq (Llama-3.3-70b) gibi yüksek performanslı modellerle, belirli bir "Yasaklı Kelime" ve "Kimlik" filtresinden geçerek içerik üretilir.
2. **Kayıt (JSON + Sitemap):** Üretilen yazı hem merkezi JSON'a hem de `sitemap.xml` dosyasına atomik bir şekilde işlenir.
3. **Yayın (CI/CD):** GitHub Actions üzerinden her gün belirli bir saatte (örn. sabah 07:00) otomatik commit/push yapılır.
4. **İndeksleme (Ping):** Değişiklik anında Google'a sitemap üzerinden "ping" sinyali gönderilir.

## 3. sağlıkGPT İçin Özelleştirilmiş Guardrails (Koruma Kalkanları)
- **Tıbbi Doğruluk:** sağlıkGPT botu, her yazının sonuna "Bu içerik yapay zeka tarafından hazırlanmıştır, tıbbi tavsiye yerine geçmez" ibaresini otomatik eklemelidir.
- **Yasaklı Kelimeler:** Sağlık sektöründe "garanti", "kesin çözüm", "mucize" gibi güven sarsıcı veya regülasyona aykırı kelimeler botun `banned_words` listesine alınmalıdır.
- **KVKK/GDPR:** Sağlık verilerinin hassasiyeti nedeniyle, içeriklerde asla gerçek vaka isimleri geçmemeli, "Privacy by Design" (Tasarımda Gizlilik) ilkesi her makalede vurgulanmalıdır.

---

# 🤖 AI STRATEGY PROMPT: Growth Engineer Identity

Bu prompt, herhangi bir gelişmiş AI modeline (Claude 3.5, GPT-4, Gemini 1.5 Pro) verilerek sistemin kurulmasını sağlar:

```markdown
"Sen bir AI Growth Engineer ve SEO/GEO Stratejistisin. Görevin [PROJE ADI: sağlıkGPT] için günlük otomatik içerik üreten ve Google Indexing motoruna entegre çalışan bir 'Master Level' blog altyapısı kurmak.

Lütfen şu adımları takip et:

1. SCHEMA TASARIMI: Blog yazılarını tutacak bir JSON şeması oluştur. Şemada 'id', 'title', 'content', 'aiSummary' (AI motorları için 280 karakter özet), 'keyTakeaways' (3 maddelik ana çıkarımlar) ve SEO 'slug' alanları mutlak olsun.
2. BOT MANTIĞI: Python ile bir blog botu tasarla. Bot, Groq veya benzeri bir LLM API kullanarak 'sağlık teknolojileri, dijital tıp, KVKK uyumu' gibi konularda içerik üretmeli.
3. KALİTE KONTROL: Bot içine 'yasaklı kelime' filtresi ekle. Makaleler tıbbi bir otorite diliyle, İngilizce terimlerden arındırılmış (lead, churn, effective vb. kelimeler yasak) ve tamamen Türkçe olmalı.
4. SITEMAP OTOMASYONU: Bot her yazı ürettiğinde, projenin 'public/sitemap.xml' dosyasını XML parse ederek yeni URL'yi otomatik ekleyen bir fonksiyon yaz.
5. DEPLOYMENT: Sistemi GitHub Actions üzerinde her gün sabah 07:00'de (TR saati) çalışacak, değişiklikleri commit/pushlayacak ve ardından Google Sitemap Ping (curl) atacak bir YAML dosyasıyla yapılandır.

Hedef: Sıfır manuel müdahale, her gün %100 AI-Ready içerik ve anında Google görünürlüğü."
```
