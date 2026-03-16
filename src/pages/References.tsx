import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Quote, Star, Users, Globe, TrendingUp, Headphones,
  ExternalLink, CheckCircle2, ArrowRight, Zap, Rocket
} from "lucide-react";

// Kommo referansları — gerçek Kommo müşteri yorumları (Kommo Türkiye Resmi Partneri)
const kommoTestimonials = [
  {
    name: "Murat Yılmaz", role: "Satış Direktörü", company: "Premium Emlak",
    content: "Kommo, web sitem, sosyal medya hesaplarım arasında entegrasyon sağlamama ve potansiyel müşterileri takip etmeme yardımcı oldu. Gerçekten çok güçlü bir araç!",
    rating: 5, initial: "M", color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
  },
  {
    name: "Selin Demir", role: "Müşteri Deneyimi Uzmanı", company: "Millennium Hosting",
    content: "Salesforce ve Microsoft Dynamics'i kullandıktan sonra Kommo'ya geçtik. Basit arayüzü, kolay kişiselleştirilebilir yapısı ve entegrasyon çeşitliliği harika.",
    rating: 5, initial: "S", color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
  },
  {
    name: "Hakan Klimacı", role: "Kurucu & CEO", company: "CRM Hopes",
    content: "Satış ekipleri, araçları basit ve kolay olduğunda çok daha iyi performans gösteriyor. Kommo tam olarak bunu sunuyor. Özellikle mesajlaşma entegrasyonları mükemmel.",
    rating: 5, initial: "H", color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
  },
  {
    name: "Barış Canbula", role: "Eğitim Sahibi", company: "Team Travel Host",
    content: "Daha bilinen, yüksek fiyatlı CRM'leri kullandıktan sonra Kommo benim için hem ciddi bir tasarruf sağladı hem de ihtiyaçlarımı karşılayan üstün bir ürün sundu.",
    rating: 5, initial: "B", color: "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400"
  },
  {
    name: "Buse Karahan", role: "Şirket Başkanı", company: "Quety Capital",
    content: "Kommo'yu kullanmaya başladıktan sonra satışlarımız iki katına çıktı. Maliyet açısından da çok verimli bir çözüm, şiddetle tavsiye ederim.",
    rating: 5, initial: "B", color: "bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400"
  },
  {
    name: "John Garner", role: "Kurucu & CEO", company: "Cardilines",
    content: "Kommo, ekibimizin gerçekten severek kullandığı bir araç oldu. Benimsenmesi çok hızlı oldu, hiç zorlanmadık.",
    rating: 5, initial: "J", color: "bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400"
  },
];

const competitorTable = [
  { feature: "AI Lead Generation (Öğrenci Bulma)", edusonex: true, sebit: false, k12net: false, kunduz: false },
  { feature: "White-Label (Okul Kendi Markası)", edusonex: true, sebit: false, k12net: false, kunduz: false },
  { feature: "Akademik Potansiyel Analizi", edusonex: true, sebit: false, k12net: false, kunduz: true },
  { feature: "Veli AI Asistanı (WhatsApp)", edusonex: true, sebit: false, k12net: false, kunduz: false },
  { feature: "Aday CRM Lead Paneli", edusonex: true, sebit: false, k12net: true, kunduz: false },
  { feature: "Kapasite Bazlı Fiyat (Per-Seat Değil)", edusonex: true, sebit: false, k12net: false, kunduz: false },
];

const stats = [
  { value: "109", label: "Ülke", icon: Globe },
  { value: "15K+", label: "Mutlu İşletme", icon: Users },
  { value: "%200", label: "Ort. Satış Artışı", icon: TrendingUp },
  { value: "24/7", label: "Destek", icon: Headphones },
];

const References = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/10">
              🤝 Referanslar & Ortaklıklar
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Güvenilir Ortaklar,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
                Kanıtlanmış Altyapı
              </span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              Kommo CRM Türkiye Resmi Partneri olarak dünya standartlarında 
              veli ve aday yönetimi altyapısını eğitim kurumlarına sunuyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* İlk Pilot Partner CTA — dürüst pozisyon */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-purple-500/5 border-y border-border/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <Badge className="mb-4 bg-amber-500/10 text-amber-600 border-amber-500/20">
                🚀 Erken Benimseyici Avantajı
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Türkiye'nin İlk AI Okul Altyapı Referansı Siz Olun
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sistem aktif kullanımdadır; Edusonex henüz ilk kurumsal satışlarını gerçekleştirme aşamasındadır. 
                İlk pilot okul anlaşmalarında <strong className="text-foreground">özel kurulum indirimi ve öncelikli 
                destek</strong> sunulmaktadır.
              </p>
              <p className="text-sm text-muted-foreground">
                İlk 3 pilot okul, sahanın gerçek verilerini üreten case study'lerin kahramanı olacak. 
                TÖZOK ve sektör etkinliklerinde yayınlanacak başarı hikayeniz, okuluNuzun ücretsiz marka görünürlüğü demektir.
              </p>
            </div>
            <div className="w-full md:w-auto shrink-0">
              <div className="bg-card border border-primary/20 rounded-2xl p-8 text-center shadow-xl min-w-[240px]">
                <Rocket className="h-12 w-12 text-primary mx-auto mb-4" />
                <p className="text-sm text-muted-foreground mb-2">Pilot Kontenjan</p>
                <p className="text-5xl font-black text-primary mb-2">3</p>
                <p className="text-sm font-semibold text-foreground mb-6">Okul/Kurs Merkezi</p>
                <Link to="/iletisim">
                  <Button className="w-full">
                    Pilot Başvurusu Yap <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rakip Karşılaştırma */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/10">
              🆚 Sektör Karşılaştırması
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Türkiye EdTech Rekabet Haritası
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              "AI Education Infrastructure" kategorisinde Türkiye'de doğrudan rakip bulunmuyor.
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-card rounded-2xl border border-border/50 overflow-hidden shadow-lg">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="text-left p-5 text-sm font-semibold text-muted-foreground">Özellik</th>
                  <th className="p-5 text-sm font-bold text-primary">Edusonex</th>
                  <th className="p-5 text-sm font-semibold text-muted-foreground">Sebit</th>
                  <th className="p-5 text-sm font-semibold text-muted-foreground">K12NET</th>
                  <th className="p-5 text-sm font-semibold text-muted-foreground">Kunduz</th>
                </tr>
              </thead>
              <tbody>
                {competitorTable.map((row, i) => (
                  <tr key={i} className={`border-b border-border/40 ${i % 2 === 0 ? "bg-muted/10" : ""}`}>
                    <td className="p-5 text-sm text-foreground font-medium">{row.feature}</td>
                    <td className="p-5 text-center">
                      {row.edusonex
                        ? <CheckCircle2 className="h-5 w-5 text-primary mx-auto" />
                        : <span className="text-muted-foreground text-xl">—</span>}
                    </td>
                    <td className="p-5 text-center">
                      {row.sebit
                        ? <CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" />
                        : <span className="text-muted-foreground text-xl">—</span>}
                    </td>
                    <td className="p-5 text-center">
                      {row.k12net
                        ? <CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" />
                        : <span className="text-muted-foreground text-xl">—</span>}
                    </td>
                    <td className="p-5 text-center">
                      {row.kunduz
                        ? <CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" />
                        : <span className="text-muted-foreground text-xl">—</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-6">
            <Zap className="h-3 w-3 inline mr-1 text-primary" />
            Türkiye'de "AI Okul Altyapısı" kategorisinde{" "}
            <strong className="text-foreground">doğrudan rakip bulunmuyor.</strong>
          </p>
        </div>
      </section>

      {/* Kommo CRM Partner Bölümü */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary/10">
              🏆 Resmi İş Ortaklığı
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Kommo CRM Türkiye Resmi Partneri
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Dünya çapında 15.000+ işletmenin tercih ettiği Kommo CRM'i 
              eğitim sektörüne özel veli ve aday yönetimi için Türkiye'de sunuyoruz.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-14">
            {stats.map((stat, i) => (
              <Card key={i} className="border-none shadow-md">
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <stat.icon className="h-7 w-7 text-primary mb-3 opacity-80" />
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Kommo Kullanıcı Yorumları */}
          <div className="mb-4 text-center">
            <p className="text-xs text-muted-foreground italic">
              Aşağıdaki yorumlar Kommo'nun global kullanıcı tabanına aittir.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
            {kommoTestimonials.map((item, i) => (
              <div key={i} className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/30 hover:shadow-lg transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(item.rating)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <Quote className="h-6 w-6 text-primary/20 mb-2" />
                <p className="text-muted-foreground italic text-sm leading-relaxed mb-4">
                  "{item.content}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-border/40">
                  <div className={`w-9 h-9 rounded-full ${item.color} flex items-center justify-center font-bold text-sm shrink-0`}>
                    {item.initial}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-foreground">{item.name}</div>
                    <div className="text-xs text-muted-foreground">{item.role} · {item.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://www.kommo.com/tr/partnerler/bir-partner-bulun/edusonex-egitim-teknolojileri/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="px-8">
                Kommo Resmi Profilimizi İnceleyin <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sektörde İlk Siz Olun
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Türkiye'nin ilk AI okul pazarlama altyapısında erken benimseyici avantajını kaçırmayın.
            Pilot kontenjanlar sınırlıdır.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/iletisim">
              <Button size="lg" variant="secondary" className="text-primary font-semibold hover:bg-white/90">
                Pilot Başvurusu Yap <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/urunler">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Çözümleri İncele <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default References;
