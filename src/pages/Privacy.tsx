import Layout from "@/components/Layout";

const Privacy = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">Gizlilik Politikası</h1>
        <p className="text-muted-foreground mb-12">Son Güncelleme: 1 Ocak 2026</p>

        <div className="prose prose-blue dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">1. Giriş</h2>
            <p className="leading-relaxed">
              Edusonex Eğitim Teknolojileri ("Edusonex", "Biz", "Şirket"), okullara özel yapay zeka destekli dijital altyapılar sunan bir teknoloji şirketidir.
              Kullanıcılarımızın (Okul yöneticileri, öğretmenler, öğrenciler ve veliler) gizliliği bizim için en öncelikli konudur.
              Bu Gizlilik Politikası, Edusonex platformu, uygulamaları ve hizmetleri ("Hizmetler") kullanılırken kişisel verilerin nasıl toplandığını,
              işlendiğini ve korunduğunu açıklar.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">2. Toplanan Veriler</h2>
            <p className="mb-4">Hizmetlerimizi sağlarken aşağıdaki veri türlerini toplayabiliriz:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-primary">
              <li><strong>Kimlik Bilgileri:</strong> Ad, soyad, T.C. kimlik numarası (gerekli hallerde), okul numarası.</li>
              <li><strong>İletişim Bilgileri:</strong> E-posta adresi, telefon numarası, adres.</li>
              <li><strong>Eğitim Verileri:</strong> Sınav sonuçları, ödev performansları, devam-devamsızlık bilgileri, öğrenme analitikleri.</li>
              <li><strong>Sistem Kullanım Verileri:</strong> IP adresi, cihaz bilgileri, oturum süreleri, tıklama analizleri.</li>
              <li><strong>Yapay Zeka Etkileşimleri:</strong> ÖdevGPT, Sınav Fabrikası gibi modüllerle yapılan etkileşimler ve oluşturulan içerikler.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">3. Verilerin Kullanım Amacı</h2>
            <p className="mb-4">Toplanan veriler şu amaçlarla kullanılır:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-primary">
              <li><strong>Eğitim Hizmetlerinin Sunulması:</strong> Okul yönetim süreçlerinin dijitalleştirilmesi, öğrenci takibi ve raporlama.</li>
              <li><strong>Yapay Zeka Destekli Analiz:</strong> HumanOS modülü ile öğrenci yetenek haritalarının çıkarılması ve kişiselleştirilmiş öğrenme önerilerinin sunulması.</li>
              <li><strong>İletişim:</strong> Veli bilgilendirme mesajları, sistem bildirimleri ve güncellemeler.</li>
              <li><strong>Hizmet İyileştirme:</strong> Sistem performansının analizi ve kullanıcı deneyiminin geliştirilmesi.</li>
              <li><strong>Yasal Yükümlülükler:</strong> MEB ve diğer resmi kurumların mevzuatlarına uyum.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">4. Veri Güvenliği ve Altyapı</h2>
            <p className="leading-relaxed">
              Edusonex, verilerinizi korumak için endüstri standardı güvenlik önlemleri uygular. Verileriniz, SSL/TLS şifreleme ile korunur ve
              yetkisiz erişimlere karşı sürekli izlenen güvenli sunucularda saklanır. Yapay zeka modellerimiz, veri anonimleştirme prensiplerine uygun olarak çalışır.
              Her okulun verisi kendi özel alanında (tenant) izole edilir ve diğer kurumlarla paylaşılmaz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">5. Üçüncü Taraflarla Paylaşım</h2>
            <p className="leading-relaxed">
              Kişisel verileriniz, yasal zorunluluklar haricinde ve hizmetin ifası için gerekli olan (örn. SMS sağlayıcıları, bulut altyapı sağlayıcıları)
              iş ortaklarımız dışında üçüncü şahıslarla paylaşılmaz, satılmaz veya kiralanmaz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">6. Haklarınız</h2>
            <p className="mb-4">KVKK ve ilgili mevzuat uyarınca aşağıdaki haklara sahipsiniz:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-primary">
              <li>Verilerinizin işlenip işlenmediğini öğrenme,</li>
              <li>İşlenen verilerinizle ilgili bilgi talep etme,</li>
              <li>Verilerin eksik veya yanlış işlenmesi halinde düzeltilmesini isteme,</li>
              <li>Verilerinizin silinmesini veya yok edilmesini talep etme.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">7. İletişim</h2>
            <p className="leading-relaxed">
              Gizlilik politikamız veya veri işleme süreçlerimizle ilgili sorularınız için aşağıdaki kanallardan bize ulaşabilirsiniz:
            </p>
            <div className="mt-4 p-6 bg-muted rounded-lg border border-border/50">
              <p><strong>Edusonex Eğitim Teknolojileri</strong></p>
              <p>Adres: Çakır Mah. Fevzipaşa Cad. No: 248, 03500 Sandıklı – Afyonkarahisar / Türkiye</p>
              <p>Telefon: +90 532 067 40 63</p>
              <p>E-posta: info@edusonex.com</p>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
