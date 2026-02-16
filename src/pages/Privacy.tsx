import Layout from "@/components/Layout";

const Privacy = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-corporate">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground leading-tight">
              Gizlilik Politikası
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
                <h2 className="text-xl font-semibold text-foreground mb-4">1. Genel Bilgiler</h2>
                <p className="leading-relaxed">
                  Edusonex olarak, kişisel verilerinizin korunmasına önem veriyoruz. Bu gizlilik politikası, web sitemizi ziyaret ettiğinizde ve hizmetlerimizi kullandığınızda toplanan bilgilerin nasıl işlendiğini açıklamaktadır.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">2. Toplanan Bilgiler</h2>
                <p className="leading-relaxed">
                  İletişim formları aracılığıyla gönderdiğiniz ad, e-posta adresi ve telefon numarası gibi bilgiler toplanabilir. Bu bilgiler yalnızca sizinle iletişim kurmak amacıyla kullanılır.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">3. Bilgilerin Kullanımı</h2>
                <p className="leading-relaxed">
                  Topladığımız bilgiler, taleplerinize yanıt vermek, hizmetlerimiz hakkında bilgi sağlamak ve yasal yükümlülüklerimizi yerine getirmek amacıyla kullanılır.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">4. Bilgi Güvenliği</h2>
                <p className="leading-relaxed">
                  Kişisel verilerinizi korumak için uygun teknik ve organizasyonel önlemler alıyoruz. Verileriniz üçüncü taraflarla paylaşılmaz, satılmaz veya kiralanmaz.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">5. Çerezler</h2>
                <p className="leading-relaxed">
                  Web sitemiz, kullanıcı deneyimini iyileştirmek için çerezler kullanabilir. Tarayıcı ayarlarınızdan çerezleri devre dışı bırakabilirsiniz.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">6. Haklarınız</h2>
                <p className="leading-relaxed">
                  6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında, kişisel verilerinize erişim, düzeltme ve silme haklarına sahipsiniz. Bu haklarınızı kullanmak için info@edusonex.com adresinden bizimle iletişime geçebilirsiniz.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">7. İletişim</h2>
                <p className="leading-relaxed">
                  Gizlilik politikamız hakkında sorularınız için:<br />
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

export default Privacy;
