import { Link } from "react-router-dom";
import { ArrowRight, Building2, FileText, GraduationCap, Sparkles, Brain, Gamepad2, Globe, Layers, Users, TrendingUp, ExternalLink, Shield, Archive, BarChart3, FileCheck, Fingerprint, Video, Network, Glasses, Files } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 py-2 px-4 text-sm bg-background/50 backdrop-blur-sm border-primary/20 text-primary animate-fade-in">
              ✨ Geleceğin Eğitim Teknolojisi
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 animate-fade-in [animation-delay:200ms]">
              Okulunuz İçin <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-secondary">
                Yapay Zeka Destekli
              </span>
              <br />
              Dijital Dönüşüm
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in [animation-delay:400ms]">
              Edusonex, okulların ihtiyaç duyduğu tüm dijital araçları tek bir platformda birleştirir.
              Yönetimden eğitime, ölçmeden iletişime kadar her şey burada.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in [animation-delay:600ms]">
              <Link to="/contact">
                <Button size="lg" className="h-12 px-8 text-lg group">
                  Hemen Başlayın
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/features">
                <Button size="lg" variant="outline" className="h-12 px-8 text-lg">
                  Özellikleri Keşfet
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Tek Platform</h3>
              <p className="mt-2 text-sm text-muted-foreground">Tüm eğitim süreçlerinizi tek bir noktadan yönetin.</p>
            </div>
            <div className="bg-card p-6 rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                <Layers className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-foreground">Modüler Yapı</h3>
              <p className="mt-2 text-sm text-muted-foreground">İhtiyacınız olan modülleri seçin, kullandıkça ödeyin.</p>
            </div>
            <div className="bg-card p-6 rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-foreground">Okul Markası Güçlenir</h3>
              <p className="mt-2 text-sm text-muted-foreground">Okul markası ve alan adıyla çalışan sistemler ile dijital kimlik oluşur.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Edusonex Ekosistemi Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/10">
              🚀 Edusonex Evreni
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Bütünleşik Eğitim Teknolojileri Ekosistemi
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Okulunuzun dijital dönüşümü için ihtiyacınız olan her şey tek bir çatıda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

            {/* 1. ÖdevGPT */}
            <Card className="border-green-500/30 hover:border-green-500/50 transition-all hover:shadow-lg hover:shadow-green-500/10 bg-gradient-to-br from-card to-green-500/5 group">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Brain className="h-6 w-6 text-green-600" />
                  </div>
                  <Badge className="bg-green-500/10 text-green-600 border-green-500/20">✅ Aktif</Badge>
                </div>
                <CardTitle className="text-xl mb-1">ÖdevGPT</CardTitle>
                <div className="text-xs text-muted-foreground mb-2 font-mono">odev-sigma.vercel.app</div>
                <CardDescription>Sokratik yapay zeka ile kişiselleştirilmiş ödev asistanı.</CardDescription>
              </CardHeader>
              <CardContent>
                <a href="https://odev-sigma.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full border-green-500/20 hover:bg-green-500/10 hover:text-green-600 group-hover:border-green-500/40">
                    Projeye Git <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* 2. HEM */}
            <Card className="border-blue-500/30 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10 bg-gradient-to-br from-card to-blue-500/5 group">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Archive className="h-6 w-6 text-blue-600" />
                  </div>
                  <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/20">✅ Aktif</Badge>
                </div>
                <CardTitle className="text-xl mb-1">HEM</CardTitle>
                <div className="text-xs text-muted-foreground mb-2 font-mono">hem.edusonex.com.tr</div>
                <CardDescription>Halk Eğitim Merkezleri için dijital kurs ve içerik yönetimi.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full border-blue-500/20 hover:bg-blue-500/10 hover:text-blue-600 group-hover:border-blue-500/40" disabled>
                  Yakında Yayında <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* 3. Anket */}
            <Card className="border-purple-500/30 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/10 bg-gradient-to-br from-card to-purple-500/5 group">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <BarChart3 className="h-6 w-6 text-purple-600" />
                  </div>
                  <Badge className="bg-purple-500/10 text-purple-600 border-purple-500/20">✅ Aktif</Badge>
                </div>
                <CardTitle className="text-xl mb-1">Anket</CardTitle>
                <div className="text-xs text-muted-foreground mb-2 font-mono">anket.edusonex.com.tr</div>
                <CardDescription>Gerçek zamanlı oylama ve interaktif anket sistemi.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full border-purple-500/20 hover:bg-purple-500/10 hover:text-purple-600 group-hover:border-purple-500/40" disabled>
                  Yakında Yayında <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* 4. Sınav (Nebula) */}
            <Card className="border-orange-500/30 hover:border-orange-500/50 transition-all hover:shadow-lg hover:shadow-orange-500/10 bg-gradient-to-br from-card to-orange-500/5 group">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FileCheck className="h-6 w-6 text-orange-600" />
                  </div>
                  <Badge className="bg-orange-500/10 text-orange-600 border-orange-500/20">🚧 Beta</Badge>
                </div>
                <CardTitle className="text-xl mb-1">Sınav Fabrikası</CardTitle>
                <div className="text-xs text-muted-foreground mb-2 font-mono">sinav.edusonex.com.tr</div>
                <CardDescription>Yapay zeka destekli sınırsız soru ve sınav üretim motoru.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full border-orange-500/20 hover:bg-orange-500/10 hover:text-orange-600 group-hover:border-orange-500/40" disabled>
                  Geliştiriliyor <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* 5. CRM */}
            <Card className="border-blue-500/30 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10 bg-gradient-to-br from-card to-blue-500/5 group">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/20">✅ Aktif</Badge>
                </div>
                <CardTitle className="text-xl mb-1">Edusonex CRM</CardTitle>
                <div className="text-xs text-muted-foreground mb-2 font-mono">edusonex.com/kommo</div>
                <CardDescription>Kommo tabanlı öğrenci ve veli ilişkileri yönetimi.</CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/kommo">
                  <Button variant="outline" className="w-full border-blue-500/20 hover:bg-blue-500/10 hover:text-blue-600 group-hover:border-blue-500/40">
                    Projeye Git <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* 6. HumanOS */}
            <Card className="border-border/50 hover:border-primary/30 transition-colors group">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Fingerprint className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="outline">Planlanıyor</Badge>
                </div>
                <CardTitle className="text-xl mb-1">HumanOS</CardTitle>
                <CardDescription>İnsan kaynakları ve performans yönetim sistemi.</CardDescription>
              </CardHeader>
            </Card>

            {/* 7. Studio */}
            <Card className="border-border/50 hover:border-primary/30 transition-colors group">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Video className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="outline">Planlanıyor</Badge>
                </div>
                <CardTitle className="text-xl mb-1">Edusonex Studio</CardTitle>
                <CardDescription>AI destekli video ve eğitim içeriği üretim stüdyosu.</CardDescription>
              </CardHeader>
            </Card>

            {/* 8. Gamer */}
            <Card className="border-border/50 hover:border-primary/30 transition-colors group">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Gamepad2 className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="outline">Planlanıyor</Badge>
                </div>
                <CardTitle className="text-xl mb-1">Edusonex Gamer</CardTitle>
                <CardDescription>Eğitimde oyunlaştırma ve e-spor modülleri.</CardDescription>
              </CardHeader>
            </Card>

            {/* 9. Akademi */}
            <Card className="border-border/50 hover:border-primary/30 transition-colors group">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="outline">Planlanıyor</Badge>
                </div>
                <CardTitle className="text-xl mb-1">Edusonex Akademi</CardTitle>
                <CardDescription>Öğretmen ve veli eğitimleri, sertifika programları.</CardDescription>
              </CardHeader>
            </Card>

            {/* 10. Network */}
            <Card className="border-border/50 hover:border-primary/30 transition-colors group">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Network className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="outline">Planlanıyor</Badge>
                </div>
                <CardTitle className="text-xl mb-1">Edusonex Network</CardTitle>
                <CardDescription>Eğitimciler ve okullar arası sosyal işbirliği ağı.</CardDescription>
              </CardHeader>
            </Card>

            {/* 11. Metaverse */}
            <Card className="border-border/50 hover:border-primary/30 transition-colors group">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Glasses className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="outline">Planlanıyor</Badge>
                </div>
                <CardTitle className="text-xl mb-1">Edusonex Metaverse</CardTitle>
                <CardDescription>Sanal gerçeklik tabanlı sürükleyici eğitim ortamları.</CardDescription>
              </CardHeader>
            </Card>

            {/* 12. DokumanOS */}
            <Card className="border-border/50 hover:border-primary/30 transition-colors group">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Files className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="outline">Planlanıyor</Badge>
                </div>
                <CardTitle className="text-xl mb-1">DokumanOS</CardTitle>
                <CardDescription>Kurumsal hafıza ve doküman yönetim sistemi.</CardDescription>
              </CardHeader>
            </Card>

          </div>

          <div className="text-center mt-16 p-8 bg-muted/50 rounded-xl border border-border/50">
            <p className="text-lg md:text-xl text-foreground leading-relaxed max-w-3xl mx-auto flex items-center justify-center gap-2">
              <Sparkles className="h-5 w-5 text-yellow-500" />
              Edusonex Evreni sürekli genişliyor. Yeni modüller çok yakında!
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Eğitimin Geleceğini Bugünden İnşa Edin
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            Edusonex teknolojileriyle okulunuzu yapay zeka çağına hazırlayın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto text-primary font-semibold hover:bg-white/90">
                Bizimle İletişime Geçin <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
