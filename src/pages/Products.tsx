import { Link } from "react-router-dom";
import { ArrowRight, Target, Shield, Brain, Users, CheckCircle, Zap, TrendingUp, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

const solutions = [
  {
    id: "lead-magnet",
    badge: "🎯 En Güçlü Silah",
    badgeColor: "bg-primary/10 text-primary border-primary/20",
    icon: Target,
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    cardBorder: "border-primary/20",
    name: "Aday Öğrenci Satış İstihbaratı",
    tagline: "Eski Adı: NöroBil",
    description:
      "Çevrenizdeki potansiyel öğrencilere ücretsiz 'Akademik Potansiyel ve Öğrenme Tarzı Analizi' linki gönderin. Veli raporu almak için telefon numarasını bıraktığı saniye, kayıt-kabul ekranınıza çocuğun güçlü/zayıf profiliyle birlikte sıcak bir lead düşer.",
    outcomes: [
      "Veliler numarasını gönüllü bırakır — soğuk arama biter",
      "Çocuğun profiliyle birebir satış konuşması yaparsınız",
      "Dönüşüm oranı geleneksel yönteme göre 3-4x artar",
      "Kampanya döneminde yüzlerce aday lead tek kaynaktan",
    ],
    cta: "Demo İzle",
    ctaHref: "#nasil-calisir",
    roiLabel: "ROI Hesabı",
    roiText: "Yüzlerce adaydan sadece 1-2 kayıt → yıllık altyapı bedeli amorti.",
  },
  {
    id: "white-label",
    badge: "🏢 Marka Prestiji",
    badgeColor: "bg-purple-500/10 text-purple-600 border-purple-500/20",
    icon: Shield,
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-600",
    cardBorder: "border-purple-500/20",
    name: "%100 White-Label Altyapı",
    tagline: "Veliler Edusonex'i Görmez",
    description:
      "Sistem her sayfada okuluNuzun logosu, renkleri ve alan adı (ai.okulunuz.com.tr) ile çalışır. Velilere 'Dışarıdan yazılım kiraladık' değil, 'Okulumuzun kendi geliştirdiği Yapay Zeka Asistanı'dır' dersiniz. Bu tek fark, okulun veliye satabileceği en güçlü prestij argümanıdır.",
    outcomes: [
      "Okulun dijital kimliği ve markası ön plana çıkar",
      "Veli güveni ve algısı maksimuma ulaşır",
      "Sistem iptal edilmek istenmez (vendor lock-in)",
      "Rakip okullardan temel bir ayrışma noktası oluşur",
    ],
    cta: "VIP Demo Talep Et",
    ctaHref: "/iletisim",
    roiLabel: "Churn Oranı",
    roiText: "Kendi markasını basan okullarda iptal oranı %2'nin altına düşer.",
  },
  {
    id: "ai-assistant",
    badge: "🤖 7/24 Veli Memnuniyeti",
    badgeColor: "bg-green-500/10 text-green-600 border-green-500/20",
    icon: Brain,
    iconBg: "bg-green-500/10",
    iconColor: "text-green-600",
    cardBorder: "border-green-500/20",
    name: "7/24 Kurumsal Veli Asistanı",
    tagline: "Eski Adı: ÖdevGPT",
    description:
      "Mevcut öğrencilerinizin 7/24 yanında olan, okulunuzun kural ve yönetmelikleriyle eğitilmiş kendi markalı AI asistanı. Veliler gece 23:00'de bile ödev konusunda, vize takviminde veya okul etkinliklerinde bilgi alabilir — çağrı merkezinizi meşgul etmeden.",
    outcomes: [
      "Mevcut öğrenci memnuniyeti ve elde tutma artar",
      "Rehberlik ve öğretmen yükü azalır",
      "WhatsApp / Web entegrasyonu ile erişim kolaylığı",
      "Okulun verileriyle (RAG) özelleştirilmiş yanıtlar",
    ],
    cta: "VIP Demo Talep Et",
    ctaHref: "/iletisim",
    roiLabel: "Sonuç",
    roiText: "Okuldan ayrılma (churn) oranını düşürür, veli tavsiyelerini artırır.",
  },
];

const packages = [
  {
    name: "Starter",
    capacity: "100 öğrenciye kadar",
    price: "29.000",
    color: "border-border",
    badge: null,
    features: ["Lead Capture Kanca Sistemi", "White-Label Tema (Logo/Renk)", "Akademik Potansiyel Analizi", "Öğrenci AI Asistanı", "Email Destek", "2.000 aylık analiz kotası"],
  },
  {
    name: "Growth",
    capacity: "500 öğrenciye kadar",
    price: "39.500",
    color: "border-primary",
    badge: "En Popüler",
    features: ["Starter'ın tüm özellikleri", "Aday Öğrenci CRM Paneli (Leads)", "Özel Alan Adı (ai.okulunuz.com.tr)", "WhatsApp Veli Asistanı", "Öncelikli Destek", "5.000 aylık analiz kotası"],
  },
  {
    name: "Enterprise",
    capacity: "1.000 öğrenciye kadar",
    price: "49.750",
    color: "border-secondary",
    badge: "En Kapsamlı",
    features: ["Growth'ın tüm özellikleri", "PDR Analitik Dashboard", "Ücretsiz Altyapı Yönetimi", "VIP Onboarding & Kurulum", "Sınırsız Destek & SLA", "10.000 aylık analiz kotası"],
  },
];

const Products = () => {
  return (
    <Layout>
      <SEO 
        title="Çözümler & Fiyatlar | Edusonex Eğitim Teknolojileri" 
        description="Özel okullar için white-label AI öğrenci kazanım altyapısı çözümleri. Starter, Growth ve Enterprise fiyat seçenekleriyle kapasite bazlı büyüme."
        canonical="/urunler"
      />
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-muted/50 to-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/10">
              🎯 Okul Kurucuları İçin
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Öğrenciye Değil,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
                Kuruma Para Kazandıran
              </span>{" "}
              3 Çözüm
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Rakipleriniz teknoloji satarken, biz okulunuza yeni öğrenci, prestij ve kâr getiren altyapı kuruyoruz.
              Faturanızı değil, kasanızı düşünün.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Link to="/iletisim">
                <Button size="lg" className="h-12 px-8">
                  VIP Demo Talep Et <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href="#fiyatlandirma">
                <Button size="lg" variant="outline" className="h-12 px-8">
                  Paketleri Gör
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Ana Çözüm */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 space-y-16">
          {solutions.map((sol, i) => {
            const Icon = sol.icon;
            const isReverse = i % 2 !== 0;
            return (
              <div key={sol.id} className={`flex flex-col ${isReverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-10 items-center`}>
                {/* İçerik */}
                <div className="flex-1 space-y-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge className={sol.badgeColor}>{sol.badge}</Badge>
                    {sol.tagline && (
                      <span className="text-xs text-muted-foreground italic">{sol.tagline}</span>
                    )}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">{sol.name}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">{sol.description}</p>
                  <ul className="space-y-3">
                    {sol.outcomes.map((o, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground">{o}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-muted/50 border border-border/50 rounded-xl p-4">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">{sol.roiLabel}: </span>
                    <span className="text-sm text-muted-foreground">{sol.roiText}</span>
                  </div>
                  <Link to={sol.ctaHref}>
                    <Button className="mt-2">
                      {sol.cta} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>

                {/* Görsel Kart */}
                <div className="flex-1 w-full max-w-md">
                  <div className={`bg-card border-2 ${sol.cardBorder} rounded-2xl p-8 shadow-xl relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-3xl" />
                    <div className={`w-16 h-16 ${sol.iconBg} rounded-2xl flex items-center justify-center mb-6`}>
                      <Icon className={`h-8 w-8 ${sol.iconColor}`} />
                    </div>
                    <div className="space-y-3">
                      {sol.outcomes.slice(0, 3).map((o, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Zap className="h-3 w-3 text-primary shrink-0" />
                          {o}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Karşılaştırma Tablosu - Yeni Kimlik Bölümü */}
      <section className="py-16 lg:py-24 border-t border-border/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-500/10 text-orange-600 border-orange-500/20">
              ⚖️ Neden Altyapı?
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">Geleneksel Yazılım mı, AI Altyapısı mı?</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Sadece bir program satın almıyorsunuz; okulunuzun dijital geleceğini kuruyorsunuz.
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-border shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-muted/50 border-b border-border">
                  <th className="p-4 md:p-6 font-bold text-foreground">Özellik</th>
                  <th className="p-4 md:p-6 font-bold text-muted-foreground">Eski Nesil (Legacy)</th>
                  <th className="p-4 md:p-6 font-bold text-primary">Edusonex AI Altyapısı</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  { feat: "Veri Sahipliği", old: "Hizmet sağlayıcıda", new: "Okulun kendi bulutunda (Self-Hosted)", highlight: true },
                  { feat: "Zeka Katmanı", old: "Statik veri girişi", new: "Kendi verinizle eğitilmiş LLM", highlight: true },
                  { feat: "Veli Algısı", old: "Dışarıdan bir araç", new: "%100 Okulun Kendi Markası", highlight: true },
                  { feat: "Öğrenci Başı Maliyet", old: "Doğrusal artış (Pahalı)", new: "Kapasite Bazlı (Ekonomik)", highlight: true },
                  { feat: "Entegrasyon", old: "Kapalı ekosistem", new: "API öncelikli, her sisteme açık", highlight: false },
                ].map((row, idx) => (
                  <tr key={idx} className={row.highlight ? "bg-primary/5" : ""}>
                    <td className="p-4 md:p-6 text-sm font-semibold">{row.feat}</td>
                    <td className="p-4 md:p-6 text-sm text-muted-foreground">{row.old}</td>
                    <td className="p-4 md:p-6 text-sm font-bold text-foreground">{row.new}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Fiyatlandırma */}
      <section id="fiyatlandirma" className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/10">
              💰 Şeffaf Fiyatlandırma
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Öğrenci Başına Değil, Kapasite Bazlı Paketler
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Klasik SaaS'ta öğrenci 10 katına çıkınca fatura 10 kat artar. Bizde Starter → Enterprise geçişi (100'den 1.000 öğrenciye) <strong>yalnızca %71 artış</strong>tır.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative bg-card border-2 ${pkg.color} rounded-2xl p-8 flex flex-col ${pkg.badge ? "shadow-2xl shadow-primary/10 scale-105" : ""}`}
              >
                {pkg.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1 text-xs font-bold">
                      {pkg.badge}
                    </Badge>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground">{pkg.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{pkg.capacity}</p>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-black text-foreground">{pkg.price}</span>
                  <span className="text-muted-foreground text-sm"> TL / ay</span>
                  <p className="text-xs text-muted-foreground mt-1">KDV hariç · {pkg.capacity}</p>
                </div>
                <ul className="space-y-3 flex-1 mb-8">
                  {pkg.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/iletisim">
                  <Button
                    className="w-full"
                    variant={pkg.badge ? "default" : "outline"}
                  >
                    Teklif Al <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-orange-500/5 border border-orange-500/10 max-w-2xl mx-auto text-center">
            <p className="text-sm text-muted-foreground italic leading-relaxed">
              <Shield className="h-4 w-4 text-orange-600 inline mr-2" />
              <strong>KVKK & Veri Güvenliği:</strong> Altyapımız %100 Türkiye uyumludur. Verileriniz yurt dışındaki sunucularda değil, okulunuza özel izole edilmiş alanlarda saklanır.
            </p>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-10">
            Zincir okul veya 1.000+ öğrenci? <Link to="/iletisim" className="text-primary font-semibold hover:underline">Unlimited paket için özel fiyat alın →</Link>
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            30 Dakikada Okulunuza Özel Büyüme Planı
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Hangi paketin kaç kayıt getireceğini hesaplayalım. Ücretsiz strateji görüşmesi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/iletisim">
              <Button size="lg" variant="secondary" className="text-primary font-semibold hover:bg-white/90">
                VIP Demo Talep Et <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/referanslar">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Başarı Hikayelerini Gör <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
