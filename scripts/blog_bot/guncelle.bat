@echo off
:: Edusonex Blog Bot — Günlük Otomatik Çalıştırıcı
:: Bu dosya Windows Task Scheduler tarafından çağrılır.
:: Her sabah 08:00'de 1 yeni blog yazısı üretir.

cd /d "C:\Users\eduso\Desktop\weblerim\edusonex-tum\scripts\blog_bot"

:: Python'u çalıştır (log dosyasına yazarak)
python bot.py --count 1 >> "C:\Users\eduso\Desktop\weblerim\edusonex-tum\scripts\blog_bot\bot.log" 2>&1

:: Git ile otomatik push
cd /d "C:\Users\eduso\Desktop\weblerim\edusonex-tum"
git add src/data/blog-posts.json src/data/blog-archive.json
git commit -m "chore(blog): otomatik gunluk icerik - %date%"
git push

exit /b 0
