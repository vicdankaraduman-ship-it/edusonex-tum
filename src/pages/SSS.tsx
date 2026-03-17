import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const faqs = [
  {
    category: "Genel",
    items: [
      {
        q: "Edusonex nedir ve kurumumuza nasıl bir avantaj sağlar?",
        a: "Edusonex, özel okullar ve kurs merkezleri için geliştirilmiş, kendi logonuzla kullanabileceğiniz bir \"Yapay Zeka Destekli Öğrenci Kayıt ve Pazarlama Motoru (White-Label Edu-RaaS)\"dur. Açık hava reklamları, dijital reklamlar veya klasik bursluluk sınavları gibi velilerin artık körleştiği yüksek maliyetli geleneksel yöntemlerin aksine, okulunuza aday öğrenci kazanım maliyetinizi (veli edinme başına maliyet) dramatik biçimde düşürür.",
      },
      {
        q: "Hangi tür kurumlara hizmet veriyorsunuz?",
        a: "Öncelikli hedef kitlemiz özel K-12 okulları (ilkokul, ortaokul, lise) ve dershaneler / kurs merkezleridir. Zincir okul gruplarıyla tek sözleşme üzerinden 20-30 kampüsü kapsayan toplu anlaşmalar da yapıyoruz.",
      },
    ]
  },
  {
    category: "Sistem & Teknoloji",
    items: [
      {
        q: "Sistem üzerinden potansiyel velilere nasıl ulaşıyoruz?",
        a: "Sistem bir \"Kanca Modeli\" ile çalışır. Çevrenizdeki potansiyel öğrencilere kendi markanız ve logonuzla bir \"Ücretsiz Öğrenme Stili ve Akademik Potansiyel Haritası\" linki gönderirsiniz. Öğrenci 10 dakikalık yapay zeka testini tamamladığında, sonucun sadece %20'sini görebilir. Velinin raporun tamamını PDF olarak WhatsApp'tan alabilmesi için (KVKK onaylı olarak) telefon numarasını bırakması istenir. Bu işlem yapıldığı saniye, veli bilgileri okulunuzun Kayıt-Kabul CRM ekranına otomatik olarak düşer.",
      },
      {
        q: "Veliler testi çözerken Edusonex adını görecek mi?",
        a: "Hayır. Edusonex sıradan bir yazılım değil, \"White-Label\" (beyaz etiket) bir altyapıdır. Veliler ve öğrenciler tüm süreci sizin okulunuzun veya kurumunuzun kendi logosu, renkleri ve alan adı (ai.okulunuz.com.tr) altında deneyimler. Dışarıdan yazılım kiraladığınız belli olmaz.",
      },
      {
        q: "Veliyi aradığımızda klasik bir satış konuşması yapmak zorunda mıyız?",
        a: "Hayır, Edusonex'in en büyük avantajı size \"Satış İstihbaratı\" sunmasıdır. Öğrencinin analiz sonuçlarındaki zayıf ve güçlü yönler ekranınıza raporlanır. Veliyi doğrudan satış için aramak yerine, \"Çocuğunuzun odaklanma sorununu uzmanlarımızla çözmek için kahveye bekliyoruz\" diyerek kuruma davet edebilirsiniz.",
      },
      {
        q: "Teknik altyapı kurmamız gerekiyor mu?",
        a: "Hayır. Sunucu kurulumu, barındırma ve API güncellemeleri tarafımızdan yönetilir.'IT ekibimiz yok' diyen kurumlar için anahtar teslim kurulum ve SLA hizmetimiz mevcuttur. Sistemi dakikalar içinde kullanmaya başlarsınız.",
      },
    ]
  },
  {
    category: "Fiyatlandırma & ROI",
    items: [
      {
        q: "Fiyatlandırma modeliniz nasıldır? Öğrenci başına mı ödeme yapıyoruz?",
        a: "Öğrenci başına ücret alınmaz. Kapasite bazlı 3 paketimiz bulunmaktadır: Starter (100 öğrenciye kadar, 29.000 TL/ay), Growth (500 öğrenciye kadar, 39.500 TL/ay), Enterprise (1.000 öğrenciye kadar, 49.750 TL/ay). Klasik SaaS'ın aksine, öğrenci sayınız 10 katına çıksa bile ödemeniz yalnızca %71 artar.",
      },
      {
        q: "Yatırım geri dönüşü (ROI) ne kadar sürede gerçekleşir?",
        a: "Kanca sistemi sayesinde ulaştığınız yüzlerce aday arasından sadece 1-2 yeni öğrenci kaydı aldığınızda, Edusonex'in 1 yıllık kiralama maliyeti anında amorti edilir. Türkiye'de orta-üst segment bir özel okulun yıllık öğrenci başına geliri 300.000-600.000 TL bandındadır. Bu sayının üzerindeki tüm kayıtlar kurumunuzun doğrudan net kârıdır.",
      },
      {
        q: "Sürpriz fatura ile karşılaşır mıyız?",
        a: "Hayır. Tüm paketler sabit aylık ücretlidir. Muhasebe departmanınız başlangıçta yıllık bütçeyi netleştirir. Her paket standart kullanımı karşılayan geniş bir yapay zeka analiz kotasıyla birlikte gelir.",
      },
    ]
  },
  {
    category: "Hukuki & Güvenlik",
    items: [
      {
        q: "KVKK uyumlu mu? Veri güvenliği nasıl sağlanıyor?",
        a: "Evet, altyapımız %100 KVKK uyumludur. Veli telefon numarası girişi sırasında İYS (İleti Yönetim Sistemi) uyumlu açık rıza onay kutuları sisteme entegre edilmiştir. Sözleşmemizde Edusonex 'Veri İşleyen', Okul ise 'Veri Sorumlusu' konumundadır. Verileriniz yurt dışındaki sunucularda değil, Türkiye'deki izole altyapımızda saklanır.",
      },
      {
        q: "MEB onayı gerekiyor mu?",
        a: "Hayır. Sistemimiz e-Okul'un veya zorunlu müfredatın yerini almadığı, 'Okula yardımcı destek asistanı' olarak konumlandırıldığı sürece MEB Talim Terbiye onayına tabi değildir.",
      },
    ]
  }
];

const SSS = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggle = (key: string) => {
    setOpenItem(openItem === key ? null : key);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-muted/50 to-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4 pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            <HelpCircle className="h-4 w-4 mr-2 inline" />
            Sık Sorulan Sorular
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Kurucuların Aklındaki{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
              Tüm Sorular
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Karar vermeden önce merak ettiğiniz her şeyin cevabı burada. Hâlâ aklınızda soru varsa direkt konuşalım.
          </p>
        </div>
      </section>

      {/* SSS Accordion */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          {faqs.map((group) => (
            <div key={group.category} className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1 bg-border" />
                <span className="text-sm font-bold text-primary uppercase tracking-widest px-4">
                  {group.category}
                </span>
                <div className="h-px flex-1 bg-border" />
              </div>

              <div className="space-y-3">
                {group.items.map((item, idx) => {
                  const key = `${group.category}-${idx}`;
                  const isOpen = openItem === key;
                  return (
                    <div
                      key={key}
                      className={`bg-card border rounded-2xl overflow-hidden transition-all duration-200 ${
                        isOpen ? "border-primary/30 shadow-md" : "border-border/50 hover:border-primary/20"
                      }`}
                    >
                      <button
                        className="w-full flex items-center justify-between p-6 text-left gap-4"
                        onClick={() => toggle(key)}
                      >
                        <span className="font-semibold text-foreground leading-snug">
                          {item.q}
                        </span>
                        {isOpen ? (
                          <ChevronUp className="h-5 w-5 text-primary shrink-0" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-muted-foreground shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-6">
                          <p className="text-muted-foreground text-sm leading-relaxed border-t border-border/40 pt-4">
                            {item.a}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hâlâ Sorunuz Var mı? CTA */}
      <section className="py-16 bg-muted/30 border-t border-border/50">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-6">
            <MessageCircle className="h-7 w-7 text-primary" />
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Hâlâ Aklınızda Soru Var mı?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
            30 dakikalık ücretsiz strateji görüşmesinde, okulunuza özel büyüme planını birlikte oluşturalım.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/iletisim">
              <Button size="lg" className="px-8">
                Strateji Görüşmesi Planla <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href="https://wa.me/905320674063" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="px-8 border-green-500/30 hover:bg-green-500/5 hover:border-green-500/60 text-foreground">
                <MessageCircle className="mr-2 h-4 w-4 text-green-500" />
                WhatsApp ile Sor
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SSS;
