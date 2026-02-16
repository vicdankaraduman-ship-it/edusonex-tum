import { Brain, Lightbulb, Target, Users, Layers, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Layout from "@/components/Layout";

const highlights = [
  {
    icon: Layers,
    title: "Eğitim Sektörü İçin Özel AI Senaryoları",
    description: "Genel AI eğitimi değil, eğitim sektörüne özel tasarlanmış pratik uygulamalar.",
  },
  {
    icon: Users,
    title: "Öğretmenler ve Yöneticiler İçin Pratik Kullanım",
    description: "Günlük iş akışlarına entegre edilebilecek, hemen uygulanabilir AI becerileri.",
  },
  {
    icon: Sparkles,
    title: "Kuruma Özel İçerik ve Uygulamalar",
    description: "Her kurumun ihtiyacına göre özelleştirilmiş eğitim programları ve AI araçları.",
  },
];

const HemAI = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-corporate">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-6">
              <Brain className="h-4 w-4" />
              Sektörel Yapay Zekâ Eğitimleri
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground leading-tight">
              HEM AI
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
              HEM AI, eğitimciler ve kurumlar için teorik değil, <strong className="text-primary-foreground">üretken ve uygulamalı</strong> yapay zekâ eğitimleri sunar.
            </p>
          </div>
        </div>
      </section>

      {/* Core Message */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center gap-8 mb-10">
              <Card className="border-border/50 flex-1">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="h-7 w-7 text-muted-foreground" />
                  </div>
                  <p className="text-muted-foreground line-through">Yapay zekâyı anlatmak</p>
                </CardContent>
              </Card>
              <Card className="border-secondary/50 flex-1 bg-secondary/5">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <Target className="h-7 w-7 text-secondary" />
                  </div>
                  <p className="text-foreground font-semibold">Yapay zekâyı kullandırmak</p>
                </CardContent>
              </Card>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Amaç, AI'ı sadece öğretmek değil; eğitimcilerin ve kurumların günlük iş akışlarında <strong className="text-foreground">aktif olarak kullanmasını</strong> sağlamaktır.
            </p>
          </div>
        </div>
      </section>

      {/* Kimler İçin */}
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6 text-center">
              Kimler İçin?
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-5 py-3 bg-card border border-border rounded-lg text-sm font-medium text-foreground">
                Okul yöneticileri
              </div>
              <div className="px-5 py-3 bg-card border border-border rounded-lg text-sm font-medium text-foreground">
                Öğretmenler
              </div>
              <div className="px-5 py-3 bg-card border border-border rounded-lg text-sm font-medium text-foreground">
                Eğitim kurumu ekipleri
              </div>
            </div>
            <p className="mt-6 text-center text-muted-foreground">
              Teknik bilgi gerektirmeden, doğrudan uygulamaya yönelik.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 lg:py-24 bg-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              HEM AI Farkı
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Yapay zekâ destekli eğitim teknolojileri alanında uzmanlaşmış, uygulamaya odaklı yaklaşım.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item) => (
              <Card key={item.title} className="border-border/50 hover:border-secondary/50 transition-colors bg-gradient-to-br from-card to-secondary/5">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center mb-4">
                    <item.icon className="h-7 w-7 text-secondary" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Kurumunuzda AI Dönüşümünü Birlikte Başlatalım
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              HEM AI programları ile öğretmen iş yükünü azaltan, üretkenliği artıran ve kurumunuzu geleceğe hazırlayan yapay zekâ yetkinlikleri kazanın.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HemAI;
