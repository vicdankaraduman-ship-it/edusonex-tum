import json
import os
import datetime
import requests
from dotenv import load_dotenv
from groq import Groq

# .env dosyasını yükle
load_dotenv()

# Ayarlar
# Not: Script klasörün içinden çalıştırılacağı için yol iki kat yukarıda
BLOG_JSON_PATH = os.path.abspath(os.path.join(os.path.dirname(__file__), "../../src/data/blog-posts.json"))
GROQ_API_KEY = os.getenv("GROQ_API_KEY")

def generate_blog_content():
    """
    Groq API kullanarak okul yöneticilerine yönelik 
    stratejik bir blog içeriği üretir.
    """
    print("🤖 AI içerik üretiliyor (Groq)...")
    
    client = Groq(api_key=GROQ_API_KEY)
    
    system_prompt = """
    Sen Edusonex şirketinin kıdemli B2B içerik stratejistisin.
    Görevin: Özel okul kurucuları, müdürleri ve yöneticileri için stratejik rehberler yazmak.
    
    Dilin: Profesyonel, güven veren, vizyoner ve sonuç odaklı. 
    Mottoların: "Sisteme yatırım yapın, reklama değil.", "Okulunuzun kendi markasıyla AI".
    
    ÇIKTI FORMATI (Sadece JSON):
    {
      "title": "Başlık (Vurucu ve merak uyandırıcı)",
      "excerpt": "Özet (Yaklaşık 150-200 karakter, okul sahibini ikna edecek türden)",
      "category": "Kategori (Okul Yönetimi, Pazarlama, Strateji, Teknoloji'den biri)",
      "readTime": "X dk"
    }
    """
    
    prompt = "Özel okullarda öğrenci kaybını (churn) önlemek için yapay zeka destekli veli iletişiminin önemini anlatan bir içerik taslağı üret."

    completion = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": prompt}
        ],
        response_format={"type": "json_object"}
    )
    
    ai_data = json.loads(completion.choices[0].message.content)
    
    # ID ve Tarih ekle
    new_id = int(datetime.datetime.now().timestamp())
    today = datetime.datetime.now().strftime("%d %B %Y")
    
    # Unsplash'ten rastgele bir eğitim/teknoloji görseli seç (Daha sonra API ile geliştirilebilir)
    images = [
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
        "https://images.unsplash.com/photo-1524178232363-1fb28f74b671",
        "https://images.unsplash.com/photo-1552664730-d307ca884978",
        "https://images.unsplash.com/photo-1454165833267-033f235ff27d"
    ]
    import random

    return {
        "id": new_id,
        "title": ai_data["title"],
        "excerpt": ai_data["excerpt"],
        "category": ai_data["category"],
        "author": "Edusonex AI",
        "date": today,
        "readTime": ai_data["readTime"],
        "image": random.choice(images) + "?q=80&w=2070&auto=format&fit=crop",
        "slug": f"ai-makale-{new_id}"
    }

def update_blog_json(new_post):
    """
    Yeni yazıyı JSON dosyasının en başına ekler.
    """
    if not os.path.exists(BLOG_JSON_PATH):
        print(f"❌ Hata: {BLOG_JSON_PATH} bulunamadı!")
        return

    try:
        with open(BLOG_JSON_PATH, 'r', encoding='utf-8') as f:
            posts = json.load(f)
    except Exception as e:
        print(f"⚠️ JSON okuma hatası, yeni dosya oluşturuluyor: {e}")
        posts = []

    # En başa ekle
    posts.insert(0, new_post)

    with open(BLOG_JSON_PATH, 'w', encoding='utf-8') as f:
        json.dump(posts, f, ensure_ascii=False, indent=2)
    
    print(f"✅ Blog başarıyla yayınlandı: {new_post['title']}")

if __name__ == "__main__":
    if not GROQ_API_KEY:
        print("⚠️ GROQ_API_KEY bulunamadı! Lütfen .env dosyasını kontrol edin.")
    else:
        try:
            post = generate_blog_content()
            update_blog_json(post)
        except Exception as e:
            print(f"❌ Akış hatası: {e}")
