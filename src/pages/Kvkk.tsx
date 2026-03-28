import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

const KVKK = () => {
  return (
    <Layout>
      <SEO
        title="KVKK Aydınlatma Metni | Edusonex"
        description="Edusonex Kişisel Verilerin Korunması Kanunu (KVKK) Aydınlatma Metni ve veri işleme politikalarımız."
        canonical="/kvkk"
      />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Kişisel Verilerin Korunması ve İşlenmesi Aydınlatma Metni</h1>
        
        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <p>
            Edusonex Eğitim Teknolojileri ("Veri Sorumlusu") olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu 
            ("KVKK") uyarınca, elde ettiğimiz kişisel verilerinizin toplanması, işlenmesi, aktarılması ve imha edilmesi 
            süreçleri hakkında sizleri bilgilendirmek isteriz.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">1. İşlenen Kişisel Verileriniz</h2>
          <p>
            Platformumuzu ve hizmetlerimizi kullanmanız kapsamında aşağıdaki kişisel verileriniz işlenebilmektedir:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Kimlik Bilgileriniz:</strong> Ad, soyad.</li>
            <li><strong>İletişim Bilgileriniz:</strong> E-posta adresi, telefon numarası.</li>
            <li><strong>Müşteri İşlem Bilgileriniz:</strong> Talep ve şikayet bilgileri, demo talep formları.</li>
            <li><strong>İşlem Güvenliği Bilgileriniz:</strong> IP adresi bilgileri, siteye giriş-çıkış bilgileri.</li>
          </ul>

          <h2 className="text-xl font-semibold text-foreground mt-8">2. Kişisel Verilerin İşlenme Amacı</h2>
          <p>Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Hizmetlerimizin sunulması ve sözleşme süreçlerinin yürütülmesi,</li>
            <li>Müşteri ilişkileri yönetimi süreçlerinin planlanması ve icrası,</li>
            <li>Talep ve şikayetlerin takibi,</li>
            <li>Sistem altyapımızın güvenliğinin sağlanması.</li>
          </ul>

          <h2 className="text-xl font-semibold text-foreground mt-8">3. Kişisel Verilerin Toplanma Yöntemi ve Hukuki Sebebi</h2>
          <p>
            Kişisel verileriniz, web sitemiz üzerinden doldurduğunuz formlar, e-posta iletişimleri ve çerezler vasıtasıyla 
            elektronik ortamda toplanmaktadır. İşleme faaliyetinin hukuki sebepleri KVKK Madde 5/2 c ve f bentlerinde 
            belirtilen "Bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması" ile "Veri sorumlusunun meşru 
            menfaatleri için veri işlenmesinin zorunlu olması" ilkeleridir.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">4. İlgili Kişinin Hakları</h2>
          <p>
            KVKK'nın 11. maddesi uyarınca veri sahipleri; kişisel verilerinin işlenip işlenmediğini öğrenme, işlenmişse buna 
            ilişkin bilgi talep etme, işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme, yurt içinde veya 
            yurt dışında aktarıldığı 3. kişileri bilme, eksik/yanlış işlenmişse düzeltilmesini isteme haklarına sahiptir.
          </p>
          
          <p className="mt-8">
            Haklarınıza ilişkin taleplerinizi bize <strong>info@edusonex.com</strong> adresi üzerinden iletebilirsiniz.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default KVKK;
