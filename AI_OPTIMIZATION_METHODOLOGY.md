# AI Görünürlüğü ve LLM Optimizasyonu Metodolojisi (2026)

Bu belge, Edusonex ve iştirak projelerinde (örn. Maltepe Yönder) uygulanan, web sitelerini yapay zeka botları (LLM Scrapers) için %100 uyumlu hale getirme standartlarını belgeler.

## 1. Problemin Tanımı: "JS Bariyeri"
Modern web siteleri (React, Vue, Vite vb.) içeriği JavaScript ile oluşturur. Ancak **NotebookLM**, **Applebot-Extended** ve bazı **OpenAI** tarayıcıları sayfayı statik olarak okur. Bu durum, botların sayfayı "boş" görmesine (sadece `<div id="root"></div>`) neden olur.

## 2. Altın Standartlar: 5 Katmanlı Koruma

### Katman A: SSR Fallback (NotebookLM Çözümü)
`index.html` dosyası içinde, React henüz yüklenmeden önce botların okuyabileceği statik bir HTML özet katmanı bulunmalıdır.
- **Uygulama:** `#root` div'i içerisine `display:none` ile gizlenmiş, semantik HTML (`h1`, `p`, `ul`) blokları eklenir.
- **Kritik Not:** Bu içerik botlar tarafından okunur ancak ekran okuyucular için `aria-hidden="true"` ile gizlenmelidir.

### Katman B: `llms.txt` Manifesto Standartı
LLM'lerin siteyi bir bütün olarak anlaması için `/llms.txt` dosyası oluşturulur.
- **İçerik:** Markdown formatında; Şirket profili, Fiyatlandırma, SSS ve ana sayfaların linklerini içermelidir.
- **Fayda:** Botlar binlerce satır kod yerine sadece 2-3 KB'lık bu temiz metni işleyerek "halüsinasyon" riskini sıfıra indirir.

### Katman C: Otonom AI Robot Kuralları (`robots.txt`)
Artık sadece `User-agent: *` yeterli değildir. AI botları açıkça belirtilmeli ve izin verilmelidir.
- **İzin Verilmesi Gerekenler:** `GPTBot`, `ClaudeBot`, `Google-Extended`, `PerplexityBot`, `Applebot-Extended`, `OAI-SearchBot`.
- **Standart:** `LLMs: https://domain.com/llms.txt` satırı `robots.txt` sonuna eklenmelidir.

### Katman D: JSON-LD Semantik Şema
Google Search Console ve Gemini gibi GEO (Generative Engine Optimization) sistemleri için `EducationalOrganization` veya `LocalBusiness` şemaları zorunludur.
- **Önem:** AI asistanlarının "Hangi okul daha iyi?" sorusuna verilecek cevabı bu teknik veri belirler.

### Katman E: `llm-export.txt` (Tam Veri Dump)
Sitenin tüm derin sayfalarındaki (blog, ürün detay, sss) içeriklerin birleştirildiği tek bir ham metin dosyasıdır.
- **Amaç:** NotebookLM'in tüm site içeriğini tek seferde "Source" olarak alabilmesini sağlamak.

## 3. Denetim Döngüsü (Audit Pipeline)
Her optimizasyon sonrası şu adımlar izlenmelidir:
1. **Build & Deploy:** Değişiklikler canlıya sürülür.
2. **URL Inspection:** Google Search Console üzerinden "Dizine Eklenmesini İste" tetiklenir.
3. **Bot Test:** [read.cv](https://read.cv) veya NotebookLM gibi araçlarla URL içe aktarma testi yapılır.

---
*Bu metodoloji AntiGravity (AG) ve Edusonex ekibi tarafından 11 Nisan 2026 tarihinde standardize edilmiştir.*
