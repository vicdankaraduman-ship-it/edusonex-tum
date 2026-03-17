import { Brain, Lightbulb, Target, Users, Layers, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const highlights = [
  {
    icon: Layers,
    title: "Altyapı Entegrasyon Eğitimi",
    description: "Edusonex altyapısının okulunuzdaki tüm departmanlara (Satış, PDR, IT) nasıl entegre edileceğinin uygulamalı eğitimi.",
  },
  {
    icon: Users,
    title: "Yönetici & Personel Yetkinliği",
    description: "AI sistemlerini yönetmek bir beceridir. Ekibinize bu sistemleri kullanma ve optimize etme 'ehliyeti' kazandırıyoruz.",
  },
  {
    icon: Sparkles,
    title: "Kurumsal AI Kültürü",
    description: "Yapay zekayı sadece bir araç değil, okulun genetiğine işlenmiş bir çalışma kültürü haline getiriyoruz.",
  },
];

const HemAI = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-[#0a0a0F] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary border border-secondary/20 rounded-full text-sm font-medium mb-6">
              <Brain className="h-4 w-4" />
              Altyapının İnsan Katmanı (Human Layer)
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              HEM AI:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-400">
                Altyapıyı Yöneten Akıl
              </span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Dünyanın en iyi yapay zekasına sahip olabilirsiniz, ancak onu kullanacak yetkinliğe sahip bir ekibiniz yoksa altyapınız eksiktir. HEM AI, kurumunuzun beşeri sermayesini AI çağına günceller.
            </p>
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section className="py-16 lg:py-24 border-y border-border/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Asıl Yatırım İnsana mı, Yazılıma mı?</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Edusonex olarak biz her iki tarafta da yanınızdayız. Yazılım katmanını kurarken, o sistemin verimliliğini %100'e çıkaracak personeli de yetiştiriyoruz. Bu bir "eğitim" değil, operasyonel bir yetkinlik transferidir.
              </p>
              <ul className="space-y-4">
                {[
                  "Prompt Engineering: Veli asistanını optimize etme",
                  "Data Literacy: CRM verilerini okuma ve yorumlama",
                  "AI Ethic & Security: Okul verisi güvenliğini sağlama",
                  "Predictive Sales: AI tahminleriyle satış stratejisi kurma"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                    <Sparkles className="h-5 w-5 text-secondary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-secondary/5 to-orange-500/5 border border-secondary/20 rounded-3xl p-8 md:p-12">
               <div className="flex flex-col gap-6">
                  <div className="p-6 bg-card rounded-2xl border border-border shadow-sm">
                    <p className="text-xs font-bold text-secondary uppercase mb-2">Geleneksel Yaklaşım</p>
                    <p className="text-sm text-muted-foreground">Yazılımı satın al, nasıl kullanacağını personel kendisi çözmeye çalışsın. (Düşük verimlilik)</p>
                  </div>
                  <div className="p-6 bg-secondary text-secondary-foreground rounded-2xl shadow-xl">
                    <p className="text-xs font-bold uppercase mb-2">HEM AI Metodu</p>
                    <p className="text-sm">Altyapı ile birlikte personeli de sertifiye et. Sistemin her bir özelliğinden maksimum kayıt performansı al. (Yüksek ROI)</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Yetkinlik Alanları</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Altyapının her katmanı için ayrı bir uzmanlık programı.</p>
        </div>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item) => (
              <Card key={item.title} className="group border-border/50 hover:border-secondary/50 transition-all bg-card overflow-hidden">
                <CardHeader className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className="h-7 w-7 text-secondary" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed text-base">
                    {item.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ekibinizi "Yapay Zeka Okul Altyapısı" Dönemine Hazırlayın
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-10">
            Personelinizin sistemi kullanma kapasitesini ölçelim ve kurumunuza özel bir eğitim yol haritası çıkaralım.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-secondary hover:bg-white/90 px-8">
              VIP Onboarding Talep Et
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HemAI;
