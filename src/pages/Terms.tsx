import Layout from "@/components/Layout";

const Terms = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-corporate">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground leading-tight">
              Kullanım Şartları
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
              Son güncelleme: Ocak 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <div className="space-y-8 text-muted-foreground">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">1. Kabul</h2>
                <p className="leading-relaxed">
                  Bu web sitesini kullanarak, aşağıdaki kullanım şartlarını kabul etmiş sayılırsınız. Bu şartları kabul etmiyorsanız, siteyi kullanmamanızı rica ederiz.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">2. Hizmet Tanımı</h2>
                <p className="leading-relaxed">
                  Edusonex, eğitim kurumları için dijital altyapı çözümleri sunan bir teknoloji şirketidir. Bu web sitesi, hizmetlerimiz hakkında bilgi sağlamak amacıyla tasarlanmıştır.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">3. Fikri Mülkiyet</h2>
                <p className="leading-relaxed">
                  Bu sitedeki tüm içerikler (metin, görsel, logo, tasarım) Edusonex'e aittir ve telif hakkı ile korunmaktadır. İzinsiz kullanım yasaktır.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">4. Kullanım Kısıtlamaları</h2>
                <p className="leading-relaxed">
                  Bu siteyi yalnızca yasal amaçlarla kullanabilirsiniz. Siteye zarar verecek, güvenliğini tehlikeye atacak veya diğer kullanıcıların erişimini engelleyecek faaliyetlerde bulunmak yasaktır.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">5. Sorumluluk Reddi</h2>
                <p className="leading-relaxed">
                  Bu sitedeki bilgiler yalnızca genel bilgi amaçlıdır. Edusonex, içeriklerin doğruluğu, eksiksizliği veya güncelliği konusunda garanti vermez.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">6. Bağlantılar</h2>
                <p className="leading-relaxed">
                  Bu site, üçüncü taraf web sitelerine bağlantılar içerebilir. Bu sitelerin içeriklerinden Edusonex sorumlu değildir.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">7. Değişiklikler</h2>
                <p className="leading-relaxed">
                  Edusonex, bu kullanım şartlarını önceden haber vermeksizin değiştirme hakkını saklı tutar. Değişiklikler sitede yayınlandığı anda yürürlüğe girer.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">8. Uygulanacak Hukuk</h2>
                <p className="leading-relaxed">
                  Bu şartlar, Türkiye Cumhuriyeti yasalarına tabidir. Uyuşmazlıklarda Afyonkarahisar Mahkemeleri yetkilidir.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">9. İletişim</h2>
                <p className="leading-relaxed">
                  Kullanım şartları hakkında sorularınız için:<br />
                  E-posta: info@edusonex.com<br />
                  Adres: Çakır Mah. Fevzipaşa Cad. No: 248, 03500 Sandıklı – Afyonkarahisar / Türkiye
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
