---
description: Hata Çözüm Protokolü - Farzetme, Analiz Et!
---

Bu protokol, sistemde bir hata ile karşılaşıldığında veya beklenmedik bir davranış görüldüğünde izlenmesi gereken zorunlu adımları tanımlar.

## 1. Tespit ve Kanıt Toplama
- Hatayı varsayma; hata mesajını, log çıktısını veya veritabanı durumunu doğrudan oku.
- `run_command` veya `grep_search` kullanarak ilgili kod bloklarını ve logları incele.
- Sorunun kapsamını belirle (Frontend, Backend, DB, Network).

## 2. Kök Neden Analizi
- "Neden?" sorusunu hatanın kaynağına ulaşana kadar sor.
- Değişiklik geçmişini kontrol et; son yapılan hangi işlem bu hataya yol açmış olabilir?
- Yan etkileri değerlendir; bir yeri düzeltirken başka bir yeri bozma.

## 3. Güvenli Çözüm Uygulama
- Çözümü önce küçük bir parçada test et.
- Kod değişikliklerini `replace_file_content` veya `multi_replace_file_content` ile titizlikle uygula.
- Gerekiyorsa geri dönüş (rollback) planını hazır tut.

## 4. Doğrulama
- Hatanın giderildiğini kanıtla (Test Et, Logları Kontrol Et).
- Kullanıcıyı bilgilendir ve yapılan işlemi raporla.

## 5. Hafıza Güncelleme
- Öğrenilen dersi `HAFIZA_TAZELEME_*.md` veya `.raporlar` altına ekle.
- Protokoldeki eksikleri güncelle.

// turbo-all
