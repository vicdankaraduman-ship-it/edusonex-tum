import { Link } from "react-router-dom";
import { Target, Eye, Shield, Lightbulb, Users, ArrowRight, Rocket, TrendingUp, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const values = [
  {
    icon: Shield,
    title: "Güvenilirlik",
    description: "KVKK uyumlu, kurumsal standartlarda güvenli altyapı. Verileriniz yalnızca size aittir.",
  },
  {
    icon: Lightbulb,
    title: "Kategori Yaratıcısı",
    description: "\"AI Education Infrastructure\" kategorisinde Türkiye'nin öncü oyuncusu. Doğrudan rakibimiz yok.",
  },
  {
    icon: Users,
    title: "Uzun Vadeli Ortaklık",
    description: "Yazılım satmıyoruz, okullara stratejik büyüme ortağı oluyoruz. Başarınız bizim başarımızdır.",
  },
];

const milestones = [
  { year: "2024", title: "Kuruluş & Ürün Geliştirme", desc: "NöroBil, ÖdevGPT, Hızlı Okuma ve Sınav Fabrikası platformları geliştirildi." },
  { year: "2025", title: "Kommo Resmi Ortaklığı", desc: "Türkiye'de Kommo CRM resmi iş ortağı statüsü kazanıldı. Veli CRM altyapısı entegre edildi." },
  { year: "2025", title: "White-Label Altyapı", desc: "Okullara kendi markalarıyla AI altyapısı sunma modeli (Edu-RaaS) tamamlandı." },
  { year: "2026", title: "Pilot Satışlar", desc: "İlk kurumsal pilot anlaşmalar için aktif satış süreci başladı. Erken benimseyici kontenjanı açık." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-muted/50 to-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4 pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/10">
              🏢 Biz Kimiz?
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Okullara Teknoloji Değil,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
                Büyüme Altyapısı
              </span>{" "}
              Kuruyoruz
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              Edusonex, Türkiye'de özel okullar ve kurs merkezlerinin öğrenci kazanım maliyetini
              düşüren ve kayıt oranlarını artıran yapay zeka altyapısı şirketidir.
            </p>
          </div>
        </div>
      </section>

      {/* Ana Mesaj */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-xl text-foreground font-medium leading-relaxed">
              Geleneksel EdTech şirketleri okullara "öğrenci başına ücret" ile yazılım satar.
              Öğrenci arttıkça fatura katlanır, okulun büyümesi cezalandırılır.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Biz farklı bir model kuruyoruz: <strong className="text-foreground">Edu-RaaS (Education Rent-as-a-Service)</strong>.
              Okul, yapay zeka altyapısını kendi markasıyla kiralar, sabit aylık maliyet öder,
              istediği kadar büyür. Sistemin asıl değeri ise okulun size ödediği aidattan değil,
              sistemin okula <strong className="text-foreground">getirdiği yeni öğrenci kayıtlarından</strong> ortaya çıkar.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Rakiplerimiz Sebit, K12NET veya Kunduz değil.
              Rakibimiz okulların milyonlarca lira döktüğü <strong className="text-foreground">Google Ads ve dijital reklam ajanslarıdır.</strong>
              Onların bütçesini okulların kasasına çeviriyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Vizyon & Misyon */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/0">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Eye className="h-7 w-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Vizyonumuz</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Türkiye'de her özel okulun ve kurs merkezinin,
                  kendi markasıyla çalışan bir yapay zeka altyapısına sahip olduğu bir dünya.
                  Eğitim kurumları teknolojiyi satın almaz, <em>üretir.</em>
                </p>
              </CardContent>
            </Card>

            <Card className="border-secondary/20 bg-gradient-to-br from-secondary/5 to-secondary/0">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6">
                  <Target className="h-7 w-7 text-secondary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Misyonumuz</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Okullara EdTech gideri değil, <strong className="text-foreground">öğrenci kazanım motoru</strong> olmak.
                  Sistemimiz her kurumun kendi markasıyla çalışarak okulun prestijini ve
                  kayıt oranlarını sistematik olarak artırır.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Yol Haritası / Milestones */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/10">
              📍 Yol Haritamız
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Neredeyiz?</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-0">
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-6 pb-8 relative">
                {/* Sol — Yıl + çizgi */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center shrink-0 z-10">
                    <span className="text-xs font-bold text-primary">{m.year}</span>
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="w-px flex-1 bg-border mt-2" />
                  )}
                </div>
                {/* Sağ — İçerik */}
                <div className="pb-2 pt-2">
                  <h3 className="text-lg font-bold text-foreground mb-1">{m.title}</h3>
                  <p className="text-sm text-muted-foreground">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Değerler */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">Değerlerimiz</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {values.map((value) => (
              <Card key={value.title} className="border-border/50 hover:border-primary/20 hover:shadow-md transition-all text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rakamlar */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            {[
              { icon: Rocket, value: "8+", label: "Aktif Platform" },
              { icon: Globe, value: "1", label: "Resmi CRM Ortaklığı (Kommo)" },
              { icon: TrendingUp, value: "3", label: "Pilot Kontenjan (Açık)" },
              { icon: Users, value: "2026", label: "Kuruluş Yılı" },
            ].map((s, i) => (
              <div key={i} className="bg-card border border-border/50 rounded-2xl p-6 hover:border-primary/20 hover:shadow-md transition-all">
                <s.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-black text-foreground mb-1">{s.value}</div>
                <div className="text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Türkiye'nin İlk AI Okul Altyapı Ortağı Olun
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Pilot kontenjanlar dolmadan ücretsiz strateji görüşmesi talep edin.
          </p>
          <Link to="/iletisim">
            <Button size="lg" variant="secondary" className="text-primary font-semibold hover:bg-white/90 px-8">
              Ücretsiz Demo Talep Et <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;
