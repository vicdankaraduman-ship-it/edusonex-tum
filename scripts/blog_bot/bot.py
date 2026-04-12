"""
Edusonex Blog Bot v2.0
======================
Groq API ile yüksek kaliteli, Türkçe blog içeriği üretir.

Kullanım:
  python bot.py              → 1 yazı üret
  python bot.py --count 3    → 3 yazı üret
  python bot.py --list       → konu havuzunu listele
"""

import json
import os
import re
import sys
import hashlib
import argparse
import datetime
import random
import time
from dotenv import load_dotenv
from groq import Groq

# ─── Ayarlar ──────────────────────────────────────────────────────────────────

load_dotenv()

BLOG_JSON_PATH = os.path.abspath(
    os.path.join(os.path.dirname(__file__), "../../src/data/blog-posts.json")
)
ARCHIVE_JSON_PATH = os.path.abspath(
    os.path.join(os.path.dirname(__file__), "../../src/data/blog-archive.json")
)
SITEMAP_PATH = os.path.abspath(
    os.path.join(os.path.dirname(__file__), "../../public/sitemap.xml")
)

GROQ_API_KEY    = os.getenv("GROQ_API_KEY")
MAX_POSTS       = 20          # Canlı JSON'da tutulacak maksimum yazı sayısı
MIN_CONTENT_LEN = 800         # Minimum içerik karakter sayısı
MAX_RETRIES     = 3           # Kalite kontrolünde max yeniden deneme sayısı

TURKCE_AYLAR = [
    "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
    "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
]

# ─── Konu Havuzu (Kategori Bazlı) ─────────────────────────────────────────────

TOPICS = {
    "Pazarlama": [
        "Özel okullarda aday veli kaybını önlemek için web sitesi psikolojisi: İlk 7 saniyenin önemi.",
        "Açık hava reklamlarının gerilemesi: Özel okullar için akıllı kanca sistemi alternatifleri.",
        "Veli adaylarını sıcak kanallardan yakalamak: WhatsApp, e-posta ve web formlarının karşılaştırması.",
        "Okul kayıt sezonunda dijital reklam bütçesini optimize etmenin 5 yolu.",
        "Referans pazarlaması: Mevcut velileri markanızın en güçlü sözcüsüne dönüştürün.",
        "Özel okul web sitelerinde güven unsurları: Hangi rozet ve sertifikalar kayıt kararını etkiler?",
        "Rakam konuşsun: Kayıt dönüşüm oranını artıran açılış sayfası tasarımı.",
        "Eğitimde 'Dark UX' tehlikesi: Dürüst ve şeffaf kayıt sayfası tasarımı.",
        "Sosyal kanıtın gücü: Velilerin yüzde kaçı mezun yorumlarına bakıyor?",
    ],
    "Okul Yönetimi": [
        "Öğrenci kaybını erkenden tespit etmenin sistematik yolu: Veli memnuniyet sinyalleri.",
        "Kayıt sürecini Excel'den kurtarın: Modern okul CRM sistemlerinin karşılaştırması.",
        "Öğretmen memnuniyeti ile öğrenci kaybı arasındaki gizli bağlantı.",
        "Sezon dışı dönemde okul yönetiminin yapması gereken 7 stratejik hamle.",
        "Orta yıl kayıt iptalleri: Nedenleri, erken uyarı işaretleri ve önleme protokolleri.",
        "Özel okullarda kadro maliyeti optimizasyonu: Teknolojiyle insan kaynağını dengeleyin.",
        "Bursluluk sınavlarının gizli maliyeti: Neden 'kanca sistemi' daha kârlı?",
        "İdari işlerde zaman hırsızları: Okul asistanlarının verimini %40 artıran araçlar.",
    ],
    "Strateji": [
        "White-label yapay zeka altyapısının okul prestijine katkısı: Kurumsal güven inşası.",
        "Özel okul piyasasında farklılaşmanın tek gerçek yolu: Sistemin marka değeri.",
        "Kurs merkezi mi, okul mu? İki iş modelinin büyüme dinamiklerinin karşılaştırması.",
        "Ölçeklenebilir okul modeli: Tek kampüsten çok şubeli yapıya geçiş stratejisi.",
        "Eğitim alanında B2B ortaklıkların gücü: Kurumsal müşteri getiren stratejik ittifaklar.",
        "Özel okullar için yatırım geri dönüş analizi: Hangi teknoloji harcamaları gerçekten kazandırır?",
        "Yapay zeka yasası (EU AI Act) ile uyumlu eğitim yazılımı kullanmanın önemi.",
        "Veri egemenliği (Data Sovereignty): Eğitim verilerini neden yerel sunucularda tutmalıyız?",
    ],
    "Teknoloji": [
        "Yapay zeka asistanlarının veli iletişimine etkisi: 7/24 kurumsal yanıt sisteminin gücü.",
        "Okul web sitesi analitikleri: Hangi metrikleri takip etmeli, hangilerini görmezden gelmeli?",
        "Sesli asistan ve chatbot karşılaştırması: Özel okullar için doğru kanal hangisi?",
        "Kişisel veri güvenliği ve KVKK uyumu: Veli verilerini korumanın pratik rehberi.",
        "Özel okul mobil uygulaması: Gerekli mi, yoksa bütçe tuzağı mı?",
        "Eğitimde veri analitiği: Öğrenci başarısını tahmin eden modeller nasıl çalışır?",
        "Okullarda nöro-eğitim: Öğrenci akademik potansiyelinin AI ile çözümlenmesi.",
        "Aday veli iletişiminde 1ms altında denetleme: Güvenli yanıt filtreleri ve FEAM.co altyapısı.",
    ],
}

# Kategori bazlı Unsplash arama terimleri (görsel alaka için)
UNSPLASH_POOLS = {
    "Pazarlama": [
        "https://images.unsplash.com/photo-1557804506-669a67965ba0",
        "https://images.unsplash.com/photo-1533750349088-cd871a92f312",
        "https://images.unsplash.com/photo-1557838923-2985c318be48",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3",
    ],
    "Okul Yönetimi": [
        "https://images.unsplash.com/photo-1524178232363-1fb28f74b671",
        "https://images.unsplash.com/photo-1509062522246-3755977927d7",
        "https://images.unsplash.com/photo-1580582932707-520aed937b7b",
        "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45",
    ],
    "Strateji": [
        "https://images.unsplash.com/photo-1454165833267-033f235ff27d",
        "https://images.unsplash.com/photo-1553877522-43269d4ea984",
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
    ],
    "Teknoloji": [
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
        "https://images.unsplash.com/photo-1488229297570-58520851e868",
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    ],
}

# ─── Türkçe Yardımcı Fonksiyonlar ─────────────────────────────────────────────

def turkce_tarih(dt: datetime.datetime) -> str:
    """datetime nesnesini Türkçe tarih stringine çevirir. Örn: 20 Mart 2026"""
    return f"{dt.day} {TURKCE_AYLAR[dt.month - 1]} {dt.year}"


def turkce_slug(text: str) -> str:
    """Bir metni SEO-dostu, Türkçe karaktersiz URL slug'ına dönüştürür."""
    # Türkçe → Latin harfler
    replacements = {
        "ç": "c", "Ç": "c",
        "ğ": "g", "Ğ": "g",
        "ı": "i", "İ": "i",
        "ö": "o", "Ö": "o",
        "ş": "s", "Ş": "s",
        "ü": "u", "Ü": "u",
    }
    for tr, lat in replacements.items():
        text = text.replace(tr, lat)

    text = text.lower()
    text = re.sub(r"[^a-z0-9\s-]", "", text)   # Özel karakterleri sil
    text = re.sub(r"\s+", "-", text.strip())    # Boşlukları tire yap
    text = re.sub(r"-+", "-", text)             # Çift tireleri birleştir
    return text[:80]                            # Max 80 karakter


def metin_hash(title: str) -> str:
    """Başlık için kısa bir parmak izi üretir (yineleme tespiti)."""
    return hashlib.md5(title.strip().lower().encode("utf-8")).hexdigest()[:8]


def ingilizce_kelime_tespiti(content: str) -> list:
    """İçerikte yasak İngilizce ve yabancı kökenli kaçak kelimeleri tespit eder."""
    yasak_kelimeler = [
        # Doğrudan İngilizce
        r"\blead\b", r"\bchurn\b", r"\beffective\b", r"\befficient\b",
        r"\bconversion\b", r"\bbillboard\b", r"\bengagement\b",
        r"\bcampaign\b", r"\bmarketing\b", r"\bfunnel\b", r"\bonboarding\b",
        r"\bstakeholder\b", r"\bscalable\b", r"\boutput\b", r"\binput\b",
        r"\bperformance\b", r"\bfeedback\b", r"\bscalability\b",
        # Türkçeye sızmış yabancı kökenli kelimeler
        r"\befektif\b", r"\bkomplex\b", r"\bkompleks\b",
        r"\boptimize\b", r"\boptimizasyon\b",
        r"\banalitik\b",    # → çözümleme kullan
        r"\bsistematik\b",  # → düzenli kullan
    ]
    bulunanlar = []
    icerik_temiz = re.sub(r"<[^>]+>", "", content).lower()  # HTML taglarını sil
    for kelime in yasak_kelimeler:
        if re.search(kelime, icerik_temiz):
            bulunanlar.append(kelime.replace(r"\b", ""))
    return bulunanlar


def kalite_kontrol(post: dict) -> tuple[bool, str]:
    """Üretilen içeriği kalite açısından denetler. (geçti?, sebep)"""
    content = post.get("content", "")
    title   = post.get("title", "")

    if len(content) < MIN_CONTENT_LEN:
        return False, f"İçerik çok kısa: {len(content)} karakter (min: {MIN_CONTENT_LEN})"

    yasak = ingilizce_kelime_tespiti(content)
    if yasak:
        return False, f"Yasak İngilizce kelimeler bulundu: {', '.join(yasak)}"

    if not title or len(title) < 20:
        return False, f"Başlık çok kısa veya boş: '{title}'"

    return True, "✅ Kalite kontrolü geçti."


# ─── Yineleme Kontrolü ────────────────────────────────────────────────────────

def mevcut_hashler(posts: list) -> set:
    """Var olan yazıların başlık hash'lerini bir set olarak döner."""
    return {metin_hash(p.get("title", "")) for p in posts}


def kullanilmis_konular(posts: list) -> set:
    """Son 20 yazıdaki başlıkları küçük harfle döner (benzer konu tespiti)."""
    return {p.get("title", "").lower() for p in posts[:20]}


# ─── AI İçerik Üretimi ────────────────────────────────────────────────────────

SYSTEM_PROMPT = """
Sen Edusonex şirketinin kıdemli B2B içerik stratejistisin.
Görevin: Özel okul kurucuları ve yöneticileri için profesyonel stratejik rehberler yazmak.

DİL VE YAZIM KURALLARI — KESİNLİKLE UYUL, BU EN KRİTİK KURAL:
1. SADECE TÜRKÇE yaz. İngilizce, Rusça veya BAŞKA DİLDEN HİÇBİR KELİME EKLEME.
2. TAMAMEN YASAK KELİMELER (bunları görürsen hemen Türkçesiyle değiştir):
   lead, churn, effective, efektif, efficient, verimli değil → "işlevsiz" kullan,
   conversion, billboard, engagement, campaign, marketing, funnel, onboarding,
   stakeholder, scalable, output, input, performance, feedback, kompleks, komplex,
   optimize, analitik değil → "çözümleme" kullan, sistematik değil → "düzenli" kullan.
3. TERMİNOLOJİ SÖZLÜĞÜ (bu karşılıkları kullan):
   - Lead Magnet / Kanca      → Aday Veli Mıknatısı veya Kanca Sistemi
   - Lead                     → Aday Veli veya Potansiyel Kayıt
   - Churn / Kayıp            → Öğrenci Kaybı veya Ayrılma Oranı
   - Billboard                → Açık Hava Reklamı
   - Conversion               → Kayıt Dönüşümü
   - AI / Artificial Intel.   → Yapay Zeka (başka türlü YAZMA)
   - Engagement               → Etkileşim veya Bağlılık
   - Campaign                 → Tanıtım Süreci veya Dönem
   - Funnel                   → Kayıt Hattı veya Dönüşüm Süreci
   - Performance              → Başarı Düzeyi veya Verim
   - Optimize                 → İyileştirmek veya En Uygun Hale Getirmek
   - Efektif / Effective      → Etkili veya Sonuç Veren
4. Türkçe dilbilgisi: "de/da" eki ayrı yazılır. "ki" bağlacı ayrı yazılır.
5. Argo, slang veya abartılı reklam dili kullanma. Güven veren, kurumsal ama sıcak bir ton.

MARKA RUHU:
- Motto: "Sisteme yatırım yapın, reklama değil."
- Vizyon: "Okulunuzun kendi markasıyla Yapay Zeka Altyapısı."
- Hedef okuyucu: Özel okul kurucuları, okul müdürleri, kurs merkezi sahipleri.

İÇERİK YAPISI (bu yapıya KESİNLİKLE UY):
- En az 4 farklı başlık bölümü olsun (h4 kullan).
- Her bölümde en az 1 güçlü paragraf (p) yaz.
- Uygun bölümlerde madde listesi (ul/li) kullan — en az 1 liste ekle.
- Giriş: Okuyucuyu içine çeken bir sorun veya fırsat tanımıyla başla.
- Sonuç: Edusonex çözümüne doğal bir köprü kur; reklam tonundan kaçın.
- Toplam içerik 1500 karakterden az olmasın.
- En az 1 somut veri veya istatistik içer ("Araştırmalar, özel okullarda..." gibi genel referanslar kabul edilir).

GEO / AEO GEREKSİNİMLERİ (YAPAY ZEKÂ AI MOTORLARI İÇİN):
- keyTakeaways: 3 maddelik "Ana Çıkarımlar" listesi ekle.
  Bu liste, ChatGPT/Perplexity gibi AI motorlarının konuyu özetlemesi için kullanılacak.
  Her madde en az 15, en fazla 25 kelime olsun.
- aiSummary: Yazının tamamını 200-280 karakterde özetleyen tek bir cümle.
  Bu alan, AI botlarının arama sonuçlarında snippet olarak göstereceği alandır.
  Net, veri odaklı, otorite gösteren bir dille yaz.

ÇIKTI FORMATI — SADECE GEÇERLİ JSON DÖNDÜR, BAŞKA BİR ŞEY EKLEME:
{
  "title": "Başlık — vurucu, net ve tamamen Türkçe (5-12 kelime arası)",
  "excerpt": "Kısa özet (160-200 karakter, kurumsal dil, ilk cümle gibi okunmalı)",
  "aiSummary": "200-280 karakter arasında, AI motorları için optimize edilmiş tek cümle özet.",
  "keyTakeaways": [
    "Ana çıkarım 1 (15-25 kelime)",
    "Ana çıkarım 2 (15-25 kelime)",
    "Ana çıkarım 3 (15-25 kelime)"
  ],
  "content": "HTML formatında tam makale. h4 başlıklar, p paragraflar, ul/li listeler.",
  "category": "Pazarlama | Okul Yönetimi | Strateji | Teknoloji",
  "readTime": "X dk"
}
"""


def konu_sec(mevcut_basliklar: set) -> tuple[str, str]:
    """
    Konu havuzundan daha önce kullanılmamış bir konu seçer.
    (kategori, konu) tuple'ı döner.
    """
    tum_konular = [
        (kategori, konu)
        for kategori, konular in TOPICS.items()
        for konu in konular
    ]
    random.shuffle(tum_konular)

    for kategori, konu in tum_konular:
        # Başlıkta benzer kelimeler var mı basit kontrol
        konu_kelimeler = set(konu.lower().split())
        cakisma = any(
            len(konu_kelimeler & set(baslik.split())) > 3
            for baslik in mevcut_basliklar
        )
        if not cakisma:
            return kategori, konu

    # Tüm konular kullanılmışsa rastgele seç
    return random.choice(tum_konular)


def icerik_uret(client: Groq, kategori: str, konu: str) -> dict:
    """Groq API'ye istek atar ve ham JSON dict döner."""
    prompt = (
        f"Konu: {konu}\n"
        f"Kategori: {kategori}\n\n"
        "Yukarıdaki konuda tam bir blog makalesi üret. "
        "Marka sesine ve dil kurallarına kesinlikle uy."
    )

    completion = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user",   "content": prompt},
        ],
        response_format={"type": "json_object"},
        temperature=0.75,
    )

    return json.loads(completion.choices[0].message.content)


def yazi_olustur(client: Groq, mevcut_basliklar: set) -> dict | None:
    """
    Kalite kontrolünü geçen bir yazı üretir.
    MAX_RETRIES kadar yeniden dener, başarısız olursa None döner.
    """
    for deneme in range(1, MAX_RETRIES + 1):
        kategori, konu = konu_sec(mevcut_basliklar)
        print(f"\n📝 [{deneme}/{MAX_RETRIES}] Konu: {konu[:70]}...")
        print(f"   Kategori: {kategori}")

        try:
            ai_data = icerik_uret(client, kategori, konu)
        except Exception as e:
            print(f"   ⚠️  API hatası: {e}")
            time.sleep(2)
            continue

        # Kalite kontrolü
        gecti, sebep = kalite_kontrol(ai_data)
        print(f"   {sebep}")

        if not gecti:
            print("   🔄 Yeniden deniyor...")
            continue

        # Yazıyı zenginleştir
        simdi = datetime.datetime.now()
        yazi_title = ai_data.get("title", "Başlıksız Yazı")
        yazi_excerpt = ai_data.get("excerpt", ai_data.get("aiSummary", "Eğitim teknolojileri ve özel okul yönetimi üzerine stratejik rehber."))
        slug  = turkce_slug(yazi_title)

        # Kategori bazlı görsel seç
        gorsel_havuzu = UNSPLASH_POOLS.get(kategori, list(UNSPLASH_POOLS.values())[0])
        gorsel_url    = random.choice(gorsel_havuzu) + "?q=80&w=2070&auto=format&fit=crop"

        return {
            "id":           int(simdi.timestamp()),
            "title":        yazi_title,
            "excerpt":      yazi_excerpt,
            "aiSummary":    ai_data.get("aiSummary", yazi_excerpt[:250] if yazi_excerpt else ""),
            "keyTakeaways": ai_data.get("keyTakeaways", []),
            "content":      ai_data.get("content", "İçerik üretilemedi."),
            "category":     ai_data.get("category", kategori),
            "author":       "Edusonex Ekibi",
            "date":         turkce_tarih(simdi),
            "readTime":     ai_data.get("readTime", "6 dk"),
            "image":        gorsel_url,
            "slug":         slug if slug else f"makale-{int(simdi.timestamp())}",
        }

    print(f"   ❌ {MAX_RETRIES} denemede kaliteli içerik üretilemedi.")
    return None


# ─── JSON Güncelleme ──────────────────────────────────────────────────────────

def blog_json_yukle() -> list:
    """Mevcut blog JSON'ını yükler. Yoksa boş liste döner."""
    if not os.path.exists(BLOG_JSON_PATH):
        print(f"⚠️  {BLOG_JSON_PATH} bulunamadı, yeni oluşturulacak.")
        return []
    try:
        with open(BLOG_JSON_PATH, "r", encoding="utf-8") as f:
            return json.load(f)
    except Exception as e:
        print(f"⚠️  JSON okuma hatası: {e}. Yeni dosya başlatılıyor.")
        return []


def blog_json_kaydet(posts: list) -> None:
    """Yazıları JSON olarak kaydeder."""
    with open(BLOG_JSON_PATH, "w", encoding="utf-8") as f:
        json.dump(posts, f, ensure_ascii=False, indent=2)


def arsive_tasima(tasimalar: list) -> None:
    """Taşınan eski yazıları arşiv JSON'ına ekler."""
    if not tasimalar:
        return

    arsiv = []
    if os.path.exists(ARCHIVE_JSON_PATH):
        try:
            with open(ARCHIVE_JSON_PATH, "r", encoding="utf-8") as f:
                arsiv = json.load(f)
        except Exception:
            arsiv = []

    arsiv = tasimalar + arsiv

    with open(ARCHIVE_JSON_PATH, "w", encoding="utf-8") as f:
        json.dump(arsiv, f, ensure_ascii=False, indent=2)

    print(f"📦 {len(tasimalar)} eski yazı arşive taşındı: blog-archive.json")


def json_guncelle(yeni_yazılar: list) -> None:
    """
    Yeni yazıları JSON'ın başına ekler.
    MAX_POSTS sınırını aşan eski yazıları arşive taşır.
    """
    posts = blog_json_yukle()

    # Yeni yazıları en başa ekle
    posts = yeni_yazılar + posts

    # Limit aşımı kontrolü
    if len(posts) > MAX_POSTS:
        tasima = posts[MAX_POSTS:]
        posts  = posts[:MAX_POSTS]
        arsive_tasima(tasima)

    blog_json_kaydet(posts)
    print(f"\n✅ Blog JSON güncellendi — Toplam: {len(posts)} yazı.")


# ─── Sitemap Güncelleme ────────────────────────────────────────────────────────

def sitemap_guncelle(yeni_yazilar: list) -> None:
    """Yeni blog yazılarını sitemap.xml dosyasına ekler."""
    if not yeni_yazilar or not os.path.exists(SITEMAP_PATH):
        return

    try:
        import xml.etree.ElementTree as ET
        
        # XML namespace'lerini korumak için
        ET.register_namespace('', "http://www.sitemaps.org/schemas/sitemap/0.9")
        ET.register_namespace('xhtml', "http://www.w3.org/1999/xhtml")
        
        tree = ET.parse(SITEMAP_PATH)
        root = tree.getroot()
        ns = {"ns": "http://www.sitemaps.org/schemas/sitemap/0.9"}

        mevcut_loclar = {url.find("ns:loc", ns).text for url in root.findall("ns:url", ns)}
        
        degisiklik = False
        bugun = datetime.datetime.now().strftime("%Y-%m-%d")

        for yazi in yeni_yazilar:
            url_loc = f"https://edusonex.com.tr/blog/{yazi['slug']}"
            
            if url_loc not in mevcut_loclar:
                # Yeni URL elementi oluştur
                url_elem = ET.SubElement(root, "{http://www.sitemaps.org/schemas/sitemap/0.9}url")
                
                loc = ET.SubElement(url_elem, "{http://www.sitemaps.org/schemas/sitemap/0.9}loc")
                loc.text = url_loc
                
                lastmod = ET.SubElement(url_elem, "{http://www.sitemaps.org/schemas/sitemap/0.9}lastmod")
                lastmod.text = bugun
                
                changefreq = ET.SubElement(url_elem, "{http://www.sitemaps.org/schemas/sitemap/0.9}changefreq")
                changefreq.text = "monthly"
                
                priority = ET.SubElement(url_elem, "{http://www.sitemaps.org/schemas/sitemap/0.9}priority")
                priority.text = "0.8"
                
                print(f"🔗 Sitemap'e yeni URL eklendi: {url_loc}")
                degisiklik = True

        if degisiklik:
            # Pretty print ve kaydet
            from xml.dom import minidom
            xml_str = ET.tostring(root, encoding='utf-8')
            pretty_xml = minidom.parseString(xml_str).toprettyxml(indent="  ", encoding='utf-8')
            
            # minidom bazen fazladan boş satır ekleyebilir, temizleyelim
            pretty_xml = b"\n".join([line for line in pretty_xml.splitlines() if line.strip()])
            
            with open(SITEMAP_PATH, "wb") as f:
                f.write(b'<?xml version="1.0" encoding="UTF-8"?>\n')
                f.write(pretty_xml.replace(b'<?xml version="1.0" encoding="UTF-8"?>', b'').strip())
                f.write(b'\n')
            
            print(f"✅ {SITEMAP_PATH} başarıyla güncellendi.")
            
    except Exception as e:
        print(f"⚠️  Sitemap güncelleme hatası: {e}")


# ─── CLI Arayüzü ──────────────────────────────────────────────────────────────

def konulari_listele():
    print("\n📚 Mevcut Konu Havuzu:")
    print("=" * 60)
    toplam = 0
    for kategori, konular in TOPICS.items():
        print(f"\n🏷  {kategori} ({len(konular)} konu)")
        for i, konu in enumerate(konular, 1):
            print(f"   {i:2}. {konu[:70]}")
        toplam += len(konular)
    print(f"\n{'=' * 60}")
    print(f"Toplam: {toplam} konu")


def main():
    parser = argparse.ArgumentParser(
        description="Edusonex Blog Bot v2.0 — Türkçe B2B içerik üreticisi"
    )
    parser.add_argument(
        "--count", type=int, default=1, metavar="N",
        help="Kaç yazı üretileceği (varsayılan: 1)"
    )
    parser.add_argument(
        "--list", action="store_true",
        help="Konu havuzunu listele ve çık"
    )
    args = parser.parse_args()

    if args.list:
        konulari_listele()
        sys.exit(0)

    if not GROQ_API_KEY:
        print("❌ GROQ_API_KEY eksik! .env dosyasını kontrol edin.")
        sys.exit(1)

    if args.count < 1 or args.count > 10:
        print("❌ --count değeri 1-10 arasında olmalıdır.")
        sys.exit(1)

    print(f"🤖 Edusonex Blog Bot v2.0 başlatıldı")
    print(f"   Hedef: {args.count} yazı üretilecek")
    print(f"   Maks yayın sayısı: {MAX_POSTS}")
    print(f"   JSON: {BLOG_JSON_PATH}")

    client = Groq(api_key=GROQ_API_KEY)

    # Mevcut yazıları yükle (yineleme kontrolü için)
    mevcut_posts   = blog_json_yukle()
    mevcut_hashler_set = mevcut_hashler(mevcut_posts)
    mevcut_basliklar   = kullanilmis_konular(mevcut_posts)

    uretilen = []
    basarisiz = 0

    for i in range(args.count):
        if args.count > 1:
            print(f"\n{'─' * 50}")
            print(f"📰 Yazı {i + 1}/{args.count}")

        yazi = yazi_olustur(client, mevcut_basliklar)

        if yazi is None:
            basarisiz += 1
            continue

        # Hash çakışması kontrolü
        h = metin_hash(yazi["title"])
        if h in mevcut_hashler_set:
            print(f"   ⚠️  Yinelenen başlık tespit edildi, atlanıyor: {yazi['title'][:50]}")
            basarisiz += 1
            continue

        uretilen.append(yazi)
        mevcut_hashler_set.add(h)
        mevcut_basliklar.add(yazi["title"].lower())

        print(f"\n   ✅ Başlık  : {yazi['title']}")
        print(f"   📁 Slug    : {yazi['slug']}")
        print(f"   🏷  Kategori: {yazi['category']}")
        print(f"   📅 Tarih   : {yazi['date']}")

        # Birden fazla yazı üretirken API'yi rahatlatmak için bekle
        if args.count > 1 and i < args.count - 1:
            time.sleep(1)

    # Sonuç özeti
    print(f"\n{'=' * 50}")
    print(f"📊 Sonuç: {len(uretilen)} başarılı, {basarisiz} başarısız")

    if uretilen:
        json_guncelle(uretilen)
        sitemap_guncelle(uretilen)
    else:
        print("⚠️  Hiçbir yazı üretilemedi, JSON güncellenmedi.")

    print("=" * 50)


if __name__ == "__main__":
    main()
