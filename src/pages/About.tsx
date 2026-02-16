import { Target, Eye, Shield, Lightbulb, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";

const values = [
  {
    icon: Shield,
    title: "Güvenilirlik",
    description: "Kurumsal standartlarda güvenli ve sürdürülebilir çözümler.",
  },
  {
    icon: Lightbulb,
    title: "İnovasyon",
    description: "Yapay zekâ ve teknoloji odaklı yenilikçi yaklaşımlar.",
  },
  {
    icon: Users,
    title: "İşbirliği",
    description: "Eğitim kurumlarıyla uzun vadeli stratejik ortaklıklar.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-corporate">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground leading-tight">
              Edusonex Hakkında
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
              Eğitim kurumları için hazır yazılımlar değil,<br />
              kuruma özel dijital altyapılar tasarlar ve kurarız.
            </p>
          </div>
        </div>
      </section>

      {/* About Text */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Edusonex, eğitim kurumları için hazır yazılımlar sunmaz. Her okulun ihtiyacına göre, kendi markası ve alan adıyla çalışan özel dijital altyapılar kurar.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              CRM'den sınav sistemlerine, doküman yönetiminden yapay zekâ destekli üretim araçlarına kadar okulların dijital dönüşümünü uçtan uca ele alır.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 lg:py-24 bg-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-border/50">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Eye className="h-7 w-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Vizyonumuz</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Eğitim kurumlarının teknolojiye bağımlı değil, teknolojiyi üreten ve yöneten yapılar haline gelmesini sağlamak.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center mb-6">
                  <Target className="h-7 w-7 text-secondary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Misyonumuz</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Okullara sürdürülebilir, güvenilir ve ölçeklenebilir dijital altyapılar kazandırmak.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Değerlerimiz
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Tüm çalışmalarımıza yön veren temel ilkeler.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {values.map((value) => (
              <Card key={value.title} className="border-border/50 text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
