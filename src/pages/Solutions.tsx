import { Building, GraduationCap, Users, Briefcase, Clock, Globe, TrendingDown, Layers, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Layout from "@/components/Layout";

const targetAudiences = [
  {
    icon: Building,
    title: "Okul Sahipleri İçin",
    description: "Kurumsal dijital dönüşüm ve marka güçlendirme.",
    benefits: [
      "Okula özel dijital altyapı kurulumu",
      "Yayıncı maliyetlerinin azalması",
      "Okul markasının güçlenmesi",
      "Okul markası ve alan adıyla çalışan sistemler",
    ],
  },
  {
    icon: Users,
    title: "Öğretmenler İçin",
    description: "Verimlilik artışı ve iş yükü optimizasyonu.",
    benefits: [
      "Doküman ve sınav yükünün azalması",
      "Yapay zekâ destekli üretim araçları",
      "Öğretmen iş yükünü azaltan çözümler",
      "Daha fazla öğrenci odaklı zaman",
    ],
  },
  {
    icon: Briefcase,
    title: "Kurumlar İçin",
    description: "Uzun vadeli dijital dönüşüm ortaklığı.",
    benefits: [
      "Ölçeklenebilir sistemler",
      "Uzun vadeli dijital dönüşüm",
      "Güvenilir altyapı",
      "Yapay zekâ destekli eğitim teknolojileri",
    ],
  },
];

const valuePropositions = [
  {
    icon: TrendingDown,
    title: "Yayınevi Bağımlılığı Azalır",
    description: "Sınırsız deneme sınavı üretimi ile dışa bağımlılık sona erer. Kendi içerik üretim sisteminizle maliyetleri düşürün.",
  },
  {
    icon: Clock,
    title: "Öğretmen İş Yükü Hafifler",
    description: "Öğretmen iş yükünü azaltan çözümler ile doküman, planlama ve içerik üretim süreçleri sadeleşir.",
  },
  {
    icon: Globe,
    title: "Okul Markası Güçlenir",
    description: "Okul markası ve alan adıyla çalışan sistemler ile dijital kimliğiniz ön plana çıkar.",
  },
  {
    icon: Layers,
    title: "Okullara Özel Dijital Altyapı",
    description: "Hazır yazılım değil, okulunuza özel tasarlanmış ve birlikte kurduğumuz bütünleşik sistemler.",
  },
  {
    icon: Shield,
    title: "Güvenilir Teknoloji Ortaklığı",
    description: "Yapay zekâ destekli eğitim teknolojileri ekosistemiyle uzun vadeli dijital dönüşüm yolculuğunuzda yanınızdayız.",
  },
];

const Solutions = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-corporate">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground leading-tight">
              Birlikte Kurduğumuz Çözümler
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
              Eğitim kurumları için danışmanlık ve çözüm ortağı olarak dijital dönüşüm yolculuğunuzda yanınızdayız.
            </p>
          </div>
        </div>
      </section>

      {/* Target Audiences */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Kimlerle Çalışıyoruz?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Her paydaş grubunun ihtiyaçlarına özel tasarlanmış çözümler birlikte kuruyoruz.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {targetAudiences.map((audience) => (
              <Card key={audience.title} className="border-border/50 h-full hover:border-secondary/50 transition-colors">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <audience.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{audience.title}</CardTitle>
                  <CardDescription className="text-base">
                    {audience.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {audience.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-16 lg:py-24 bg-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Neden Birlikte Çalışmalıyız?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Edusonex ile kurduğunuz dijital altyapının somut kazanımları.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {valuePropositions.map((item) => (
              <Card key={item.title} className="border-border/50 hover:border-secondary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Message */}
      <section className="py-16 lg:py-20 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              Okulunuzun dijital dönüşüm ihtiyaçlarını birlikte değerlendirelim.
              <br className="hidden md:block" />
              <strong className="text-secondary">Çözüm ortağınız olarak yanınızdayız.</strong>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Solutions;
