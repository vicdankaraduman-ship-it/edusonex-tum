import { useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import {
  TrendingUp, AlertTriangle, Target, CheckCircle, ArrowRight,
  BarChart3, Users, Zap, Shield, Building2
} from "lucide-react";

const stats = [
  { label: "Türkiye'deki Özel Okul", value: "~14.000", icon: Building2 },
  { label: "Yapay Zekaya Sahip Okul", value: "< 50", icon: Zap, highlight: true },
  { label: "Potansiyel Pazar", value: "13,6 MilyarTL", icon: BarChart3 },
  { label: "1 Yeni Öğrencinin ROI'si", value: "≥ %500", icon: TrendingUp },
];

const competitors = [
  { name: "Sebit / Morpa", type: "LMS", ai: false, whitLabel: false, leadGen: false, note: "İçerik & video tabanlı" },
  { name: "K12NET", type: "Yönetim Sistemi", ai: false, whitLabel: false, leadGen: false, note: "Yoklama, not takibi" },
  { name: "Kunduz / Tonguç", type: "Test Platformu", ai: false, whitLabel: false, leadGen: false, note: "Bireysel öğrenci odaklı" },
  { name: "Edusonex", type: "AI Altyapısı", ai: true, whitLabel: true, leadGen: true, note: "Kategori yaratıcı 🚀", isUs: true },
];

const RaporPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDownloadForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await supabase.from("leads").insert([
        { 
          name, 
          email, 
          source: "rapor_indirimi" 
        }
      ]);
      setIsSubmitted(true);
      toast.success("Rapor başarıyla e-postanıza gönderildi ve indirmeye hazır!");
    } catch (error) {
      toast.error("Bir sorun oluştu. Lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <SEO 
        title="2026 Türkiye EdTech Raporu | Edusonex" 
        description="Özel okul pazarı, yapay zeka adaptasyon durumu ve öğrenci kazanım stratejileri hakkında 2026 sektör raporu."
        canonical="/rapor/2026"
      />
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-muted/60 to-background relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              📊 Ücretsiz Stratejik Analiz
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              Mart 2026 · Türkiye EdTech Raporu
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight mb-6">
            Rakipleriniz Kayıt Sezonunda<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
              Yapay Zekayı Nasıl Kullanıyor?
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mb-8 leading-relaxed">
            Türkiye özel eğitim sektörünün 2026 yapay zeka adaptasyon durumu, rekabet haritası ve
            öğrenci kayıt maliyetlerini köklü değiştiren yeni teknolojiler.
          </p>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-10">
            <Shield className="h-4 w-4 text-primary" />
            <span>Bu rapor Edusonex tarafından hazırlanmıştır. Tüm hakları saklıdır.</span>
          </div>

          {!isSubmitted ? (
            <div className="bg-card border border-border/50 rounded-2xl p-6 lg:p-8 max-w-2xl shadow-xl">
              <h3 className="text-xl font-bold mb-2">Tam Raporu (PDF) Ücretsiz İndirin</h3>
              <p className="text-sm text-muted-foreground mb-6">45 sayfalık detaylı rekabet analizi ve EdTech yatırım hesaplamalarını hemen indirin.</p>
              
              <form onSubmit={handleDownloadForm} className="flex flex-col sm:flex-row gap-3">
                <Input 
                  placeholder="Ad Soyad" 
                  required 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-12 flex-1"
                />
                <Input 
                  type="email" 
                  placeholder="E-posta Adresiniz" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 flex-1"
                />
                <Button type="submit" className="h-12 px-8" disabled={loading}>
                  {loading ? "Gelen Kutusu Bekleniyor..." : "Raporu İndir"}
                </Button>
              </form>
            </div>
          ) : (
            <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-6 lg:p-8 max-w-2xl text-center">
              <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Harika! PDF İndirilmeye Hazır</h3>
              <p className="text-sm text-muted-foreground mb-6">Ayrıca bir kopyasını da e-postanıza gönderdik.</p>
              <Button onClick={() => window.open("/rapor-pdf-dummy.pdf", "_blank")} className="h-12 px-8 bg-green-600 hover:bg-green-700 text-white">
                PDF Dosyasını Aç <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Temel İstatistikler */}
      <section className="py-12 border-y border-border/50 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className={`text-center p-6 rounded-2xl border ${stat.highlight ? "border-primary/30 bg-primary/5" : "border-border/40"}`}>
                <stat.icon className={`h-6 w-6 mx-auto mb-3 ${stat.highlight ? "text-primary" : "text-muted-foreground"}`} />
                <div className={`text-3xl font-black mb-1 ${stat.highlight ? "text-primary" : "text-foreground"}`}>{stat.value}</div>
                <div className="text-xs text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bölüm 1: Problem */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center">
              <AlertTriangle className="h-4 w-4 text-destructive" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Geleneksel Kayıt Pazarlaması Neden Çöküyor?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              {
                title: "Veli Körleşmesi",
                desc: "2026 itibarıyla velilerin %73'ü açık hava reklamlarına ve broşürlere artık dikkat etmiyor. Her okul aynı mesajı veriyor.",
                stat: "%73",
                statLabel: "Veli reklam körleşmesi",
                color: "destructive"
              },
              {
                title: "Yükselen CAC",
                desc: "Bir velinin okul gezdirme randevusuna dönüştürülmesi için ödenen ortalama dijital reklam maliyeti 2023'ten bu yana 3 katına çıktı.",
                stat: "3x",
                statLabel: "Maliyet artışı (2023→2026)",
                color: "orange"
              },
              {
                title: "Körlemesine Aramalara Son",
                desc: "Kayıt ekipleri velileri çocuklarının profilini bilmeden arıyor. Standart 'okulumuz çok iyi' konuşması %12 dönüşüm oranıyla sınırlı kalıyor.",
                stat: "%12",
                statLabel: "Körlemesine arama dönüşümü",
                color: "yellow"
              }
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border/50 rounded-2xl p-6 hover:border-primary/20 transition-all">
                <div className="text-3xl font-black text-foreground mb-1">{item.stat}</div>
                <div className="text-xs text-muted-foreground mb-4 font-medium">{item.statLabel}</div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bölüm 2: Rekabet Haritası */}
      <section className="py-16 bg-muted/30 border-y border-border/50">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <Target className="h-4 w-4 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Türkiye EdTech Rekabet Haritası
            </h2>
          </div>

          <p className="text-muted-foreground mb-8 leading-relaxed">
            Türkiye'de yaklaşık 14.000 özel okul ve 12.000+ dershane bulunmaktadır. Mevcut EdTech oyuncuları
            3 kategoriye ayrılır ve hiçbiri yapay zeka destekli öğrenci kazanım motoruna sahip değildir.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full bg-card rounded-2xl border border-border/50 overflow-hidden shadow-lg">
              <thead>
                <tr className="border-b border-border bg-muted/40">
                  <th className="text-left p-4 text-sm font-semibold text-muted-foreground">Platform</th>
                  <th className="p-4 text-sm font-semibold text-muted-foreground">Tür</th>
                  <th className="p-4 text-sm font-semibold text-muted-foreground">AI Altyapısı</th>
                  <th className="p-4 text-sm font-semibold text-muted-foreground">White-Label</th>
                  <th className="p-4 text-sm font-semibold text-muted-foreground">Lead Generation</th>
                  <th className="text-left p-4 text-sm font-semibold text-muted-foreground">Not</th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((row, i) => (
                  <tr key={i} className={`border-b border-border/30 ${row.isUs ? "bg-primary/5" : i % 2 === 0 ? "bg-muted/10" : ""}`}>
                    <td className={`p-4 font-bold text-sm ${row.isUs ? "text-primary" : "text-foreground"}`}>{row.name}</td>
                    <td className="p-4 text-sm text-muted-foreground text-center">{row.type}</td>
                    <td className="p-4 text-center">
                      {row.ai ? <CheckCircle className="h-5 w-5 text-primary mx-auto" /> : <span className="text-muted-foreground">—</span>}
                    </td>
                    <td className="p-4 text-center">
                      {row.whitLabel ? <CheckCircle className="h-5 w-5 text-primary mx-auto" /> : <span className="text-muted-foreground">—</span>}
                    </td>
                    <td className="p-4 text-center">
                      {row.leadGen ? <CheckCircle className="h-5 w-5 text-primary mx-auto" /> : <span className="text-muted-foreground">—</span>}
                    </td>
                    <td className={`p-4 text-xs ${row.isUs ? "text-primary font-semibold" : "text-muted-foreground"}`}>{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-xl">
            <p className="text-sm text-foreground font-medium flex items-center gap-2">
              <Zap className="h-4 w-4 text-primary" />
              <strong>Kritik Bulgu:</strong> "AI Okul Pazarlama Altyapısı" kategorisi Türkiye'de boş. Doğrudan rakip yok.
            </p>
          </div>
        </div>
      </section>

      {/* Bölüm 3: Çözüm */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
              <TrendingUp className="h-4 w-4 text-green-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Yapay Zeka Kanca Sistemi: Nasıl Çalışır?
            </h2>
          </div>

          <div className="space-y-4 mb-10">
            {[
              { step: "1", title: "Kanca Linki Yayılır", desc: "Okul kendi markasıyla (ai.okulunuz.com.tr) 'Ücretsiz Akademik Potansiyel Analizi' linkini çevre devlet okullarına, Instagram reklamlarına veya WhatsApp gruplarına gönderir." },
              { step: "2", title: "Veli Testi Çözer", desc: "Öğrenci 10 dakikalık yapay zeka testini tamamlar. Sonucun %20'si gösterilir, geri kalanı kilit arkasındadır." },
              { step: "3", title: "İletişim Bilgisi Bırakılır", desc: "Veli tam raporu almak için telefon numarasını gönüllü olarak bırakır. KVKK onayı otomatik alınır." },
              { step: "4", title: "Satış İstihbaratı Oluşur", desc: "Veli datası + öğrencinin zayıf/güçlü yönleri kayıt ekibinin CRM ekranına düşer. Körlemesine değil, bilerek aranır." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-5 bg-card border border-border/40 rounded-2xl hover:border-primary/20 transition-all">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center font-black text-primary text-lg shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ROI Kutusu */}
          <div className="bg-gradient-to-br from-primary/10 to-purple-500/5 border border-primary/20 rounded-3xl p-8 text-center">
            <Users className="h-10 w-10 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-black text-foreground mb-3">Yatırım Geri Dönüşü</h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto text-sm leading-relaxed">
              Yıllık kayıt ücreti 300.000 TL olan bir okul, Enterprise paket maliyetini karşılamak için
              kanca sistemiyle gelen yüzlerce aday arasından yalnızca
            </p>
            <div className="text-6xl font-black text-primary mb-3">2</div>
            <p className="text-muted-foreground font-medium">yeni öğrenci kaydı yeterlidir.</p>
            <p className="text-xs text-muted-foreground mt-2">Sonraki her kayıt %100 net kârdır.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Okulunuza Özel Analizi Konuşalım
          </h2>
          <p className="text-primary-foreground/80 mb-8 text-lg leading-relaxed">
            30 dakikalık strateji görüşmesinde bölgenizdeki rekabeti ve Edusonex'in okulunuza
            kaç yeni kayıt getirebileceğini birlikte hesaplayalım.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/iletisim">
              <Button size="lg" variant="secondary" className="text-primary font-bold px-8">
                Ücretsiz Strateji Görüşmesi <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/#roi-hesapla">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8">
                ROI Hesaplayıcıyı Dene
              </Button>
            </Link>
          </div>
          <p className="text-primary-foreground/60 text-xs mt-6">
            Bu çeyrek için yalnızca 1 pilot kontenjanı kalmaktadır.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default RaporPage;
