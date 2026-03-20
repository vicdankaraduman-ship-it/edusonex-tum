"""
Blog JSON Temizleyici
=====================
Mevcut blog yazılarını botun kalite kurallarına göre tarar,
bozuk/kirli olanları arşive taşır ve JSON'ı temiz bırakır.

Kullanım:
  python temizle.py          → önizle (silmez)
  python temizle.py --uygula → gerçekten temizle
"""

import json
import os
import re
import argparse
import datetime

# ─── Yol ──────────────────────────────────────────────────────────────────────
BASE = os.path.abspath(os.path.join(os.path.dirname(__file__), "../.."))
BLOG_JSON    = os.path.join(BASE, "src/data/blog-posts.json")
ARCHIVE_JSON = os.path.join(BASE, "src/data/blog-archive.json")

# ─── Kalite kuralları ─────────────────────────────────────────────────────────

YASAK_PATTERN = re.compile(
    r"\b(lead|churn|effective|efektif|efficient|conversion|billboard|engagement|"
    r"campaign|marketing|funnel|onboarding|stakeholder|scalable|output|input|"
    r"performance|feedback|scalability|komplex|kompleks|optimize|optimizasyon|"
    r"analitik|sistematik|investment|experience|expérience|sucesso)\b",
    re.IGNORECASE,
)

# Yabancı Unicode blok tespiti (Kiril, CJK, vb.)
YABANCI_UNICODE = re.compile(r"[\u0400-\u04FF\u4E00-\u9FFF\u3040-\u30FF]")

# Sadece İngilizce ay isimleri içeren tarihler
INGILIZCE_TARIH = re.compile(
    r"\b(January|February|March|April|May|June|July|August|September|October|November|December)\b"
)

MIN_ICERIK = 600  # Bu kadar karakterin altı çok kısa

def html_temizle(html: str) -> str:
    return re.sub(r"<[^>]+>", "", html)

def yazi_incele(post: dict) -> list[str]:
    """Bir yazıdaki sorunları listeler."""
    sorunlar = []
    icerik_ham = post.get("content", "")
    icerik = html_temizle(icerik_ham).lower()
    baslik = post.get("title", "")
    slug   = post.get("slug", "")
    tarih  = post.get("date", "")
    author = post.get("author", "")

    # Yasak kelime tespiti
    eslesme = YASAK_PATTERN.findall(icerik + " " + baslik.lower())
    if eslesme:
        sorunlar.append(f"Yasak kelime: {', '.join(set(w.lower() for w in eslesme))}")

    # Yabancı Unicode tespiti
    if YABANCI_UNICODE.search(icerik_ham):
        sorunlar.append("Yabancı Unicode karakter (Kiril/CJK) içeriyor")

    # İngilizce tarih
    if INGILIZCE_TARIH.search(tarih):
        sorunlar.append(f"İngilizce tarih: '{tarih}'")

    # Kısa içerik
    if len(icerik) < MIN_ICERIK:
        sorunlar.append(f"İçerik çok kısa: {len(icerik)} karakter")

    # Kötü slug (yapay timestamp slug)
    if re.match(r"^ai-makale-\d+$", slug):
        sorunlar.append(f"SEO'suz timestamp slug: '{slug}'")

    # Eski yazar etiketi
    if author == "Edusonex AI":
        sorunlar.append("Eski yazar etiketi: 'Edusonex AI'")

    return sorunlar

def arsive_ekle(tasimalar: list) -> None:
    arsiv = []
    if os.path.exists(ARCHIVE_JSON):
        try:
            with open(ARCHIVE_JSON, "r", encoding="utf-8") as f:
                arsiv = json.load(f)
        except Exception:
            pass
    arsiv = tasimalar + arsiv
    with open(ARCHIVE_JSON, "w", encoding="utf-8") as f:
        json.dump(arsiv, f, ensure_ascii=False, indent=2)

def main():
    parser = argparse.ArgumentParser(description="Blog JSON Temizleyici")
    parser.add_argument("--uygula", action="store_true",
                        help="Gerçekten temizle (varsayılan: sadece önizle)")
    args = parser.parse_args()

    if not os.path.exists(BLOG_JSON):
        print(f"❌ Dosya bulunamadı: {BLOG_JSON}")
        return

    with open(BLOG_JSON, "r", encoding="utf-8") as f:
        posts = json.load(f)

    print(f"\n🔍 {len(posts)} yazı inceleniyor...\n")
    print("=" * 60)

    temiz   = []
    kirli   = []

    for post in posts:
        sorunlar = yazi_incele(post)
        baslik = post.get("title", "")[:55]
        if sorunlar:
            kirli.append(post)
            print(f"  ❌ [{post.get('id')}] {baslik}")
            for s in sorunlar:
                print(f"       → {s}")
        else:
            temiz.append(post)
            print(f"  ✅ [{post.get('id')}] {baslik}")

    print("\n" + "=" * 60)
    print(f"\n📊 Özet: {len(temiz)} temiz, {len(kirli)} sorunlu yazı")

    if not kirli:
        print("✨ Temizlenecek yazı yok.")
        return

    if not args.uygula:
        print("\n⚠️  Bu sadece bir ÖNİZLEME. Gerçekten silmek için:")
        print("   python temizle.py --uygula")
        return

    # Uygula
    arsive_ekle(kirli)
    with open(BLOG_JSON, "w", encoding="utf-8") as f:
        json.dump(temiz, f, ensure_ascii=False, indent=2)

    print(f"\n✅ {len(kirli)} sorunlu yazı arşive taşındı.")
    print(f"✅ Blog JSON güncellendi — {len(temiz)} temiz yazı kaldı.")

if __name__ == "__main__":
    main()
