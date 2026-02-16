import Layout from "@/components/Layout";

const Terms = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">Kullanım Şartları</h1>
        <p className="text-muted-foreground mb-12">Yürürlük Tarihi: 1 Ocak 2026</p>

        <div className="prose prose-blue dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">1. Hizmetin Tanımı</h2>
            <p className="leading-relaxed">
              Edusonex ("Hizmet Sağlayıcı"), okullara, öğretmenlere, öğrencilere ve velilere yönelik bulut tabanlı eğitim yönetim sistemleri,
              yapay zeka destekli analiz araçları ve içerik üretim modülleri ("Hizmetler") sunan bir SaaS (Software as a Service) platformudur.
              Bu Hizmetler, abonelik modeli ile sağlanır ve kullanıcılar ("Müşteri") bu şartları kabul ederek hizmeti kullanmaya başlar.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">2. Kullanım Hakkı ve Lisans</h2>
            <p className="mb-4">
              Edusonex, Müşteri'ye, Hizmetleri yalnızca kendi kurum içi eğitim faaliyetleri kapsamında kullanması için münhasır olmayan,
              devredilemez, süreli bir kullanım lisansı verir.
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-primary">
              <li>Müşteri, Hizmetleri kopyalayamaz, tersine mühendislik yapamaz veya kaynak koduna erişmeye çalışamaz.</li>
              <li>Hizmetler, üçüncü şahıslara kiralanamaz veya satılamaz.</li>
              <li>Lisans, abonelik süresi boyunca geçerlidir ve abonelik sona erdiğinde otomatik olarak feshedilir.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">3. Kullanıcı Hesapları ve Güvenlik</h2>
            <p className="leading-relaxed">
              Müşteri, kullanıcı hesaplarının güvenliğinden sorumludur. Şifrelerin gizliliğinin korunması ve yetkisiz erişimlerin önlenmesi Müşteri'nin sorumluluğundadır.
              Edusonex, hesap bilgilerinin çalınması veya kötüye kullanılması durumunda doğacak zararlardan sorumlu tutulamaz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">4. Fikri Mülkiyet Hakları</h2>
            <p className="leading-relaxed">
              Hizmetlerin tüm fikri mülkiyet hakları, telif hakları, ticari markalar, patentler ve diğer mülkiyet hakları Edusonex'e aittir.
              Müşteri, Hizmetleri kullanarak hiçbir mülkiyet hakkı elde etmez. Oluşturulan içeriklerin (örn. sınav soruları, analiz raporları)
              mülkiyeti ise içeriği oluşturan Müşteri'ye aittir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">5. Hizmet Seviyesi ve Garanti</h2>
            <p className="leading-relaxed">
              Edusonex, Hizmetlerin sürekliliğini sağlamak için makul ticari çabayı gösterecektir. Ancak, planlı bakım çalışmaları,
              mücbir sebepler veya internet altyapısından kaynaklanan kesintiler nedeniyle Hizmetlerin %100 kesintisiz olacağını garanti etmez.
              Hizmetler "olduğu gibi" (as is) sunulmaktadır.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">6. Sorumluluk Reddi</h2>
            <p className="leading-relaxed">
              Edusonex, Hizmetlerin kullanımından kaynaklanan dolaylı, arızi, özel veya cezai zararlardan (kar kaybı, veri kaybı vb.) sorumlu değildir.
              Yapay zeka modülleri tarafından üretilen içeriklerin ve analizlerin doğruluğu %100 garanti edilmez; bu çıktılar pedagojik bir destek aracı olarak değerlendirilmelidir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">7. Abonelik İptali ve İade</h2>
            <p className="leading-relaxed">
              Müşteri, aboneliğini dilediği zaman iptal edebilir. İptal talepleri, bir sonraki fatura döneminden itibaren geçerli olur.
              Peşin ödenen abonelik ücretlerinde iade yapılmaz, ancak hizmet süresi dolana kadar erişim hakkı devam eder.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">8. Değişiklikler</h2>
            <p className="leading-relaxed">
              Edusonex, bu Kullanım Şartlarını herhangi bir zamanda güncelleyebilir. Güncellenen şartlar, web sitesinde yayınlandığı tarihte yürürlüğe girer.
              Hizmetleri kullanmaya devam etmeniz, değişiklikleri kabul ettiğiniz anlamına gelir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">9. İletişim</h2>
            <div className="mt-4 p-6 bg-muted rounded-lg border border-border/50">
              <p>Hukuki sorularınız için:</p>
              <p className="mt-2 font-medium">legal@edusonex.com</p>
              <p className="mt-4"><strong>Edusonex Eğitim Teknolojileri</strong></p>
              <p>Adres: Çakır Mah. Fevzipaşa Cad. No: 248, 03500 Sandıklı – Afyonkarahisar / Türkiye</p>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;
