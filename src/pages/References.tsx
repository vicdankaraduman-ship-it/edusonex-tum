import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote, Star, Users, Globe, TrendingUp, Headphones, ExternalLink, CheckCircle2 } from "lucide-react";

// Müşteri Yorumları Verisi
const testimonials = [
    {
        name: "Murat Yılmaz",
        role: "Satış Direktörü",
        company: "Premium Emlak",
        content: "Kommo, web sitem, sosyal medya hesaplarım arasında entegrasyon sağlamama ve potansiyel müşterileri takip etmeme yardımcı oldu. Gerçekten çok güçlü bir araç!",
        rating: 5,
        initial: "M",
        color: "bg-blue-100 text-blue-600"
    },
    {
        name: "Selin Demir",
        role: "Müşteri Deneyimi Uzmanı",
        company: "Millennium Hosting",
        content: "Salesforce, Freshsales ve Microsoft Dynamics CRM'i kullandıktan sonra Kommo'yu kullanmaya karar kıldık ve onunla devam ettik. Çünkü basit arayüzü, kolay kişiselleştirilebilir yapısı ve entegrasyon çeşitliliği harika.",
        rating: 5,
        initial: "S",
        color: "bg-purple-100 text-purple-600"
    },
    {
        name: "Hakan Klimacı",
        role: "Kurucu & CEO",
        company: "CRM Hopes",
        content: "Satış ekipleri, kullandıkları araçlar basit ve kolay kullanıldığında çok daha iyi performans gösteriyor. Kommo tam olarak bunu sunuyor. Özellikle mesajlaşma uygulamalarıyla olan entegrasyon çeşitliliği harika.",
        rating: 5,
        initial: "H",
        color: "bg-green-100 text-green-600"
    },
    {
        name: "Barış Canbula",
        role: "Eğitim Sahibi",
        company: "Team Travel Host",
        content: "Daha bilinen, yüksek fiyatlı CRM'leri kullandıktan sonra Kommo benim için hem ciddi bir tasarruf sağladı hem de ihtiyaçlarımı karşılayan üstün bir ürün sundu.",
        rating: 5,
        initial: "B",
        color: "bg-orange-100 text-orange-600"
    },
    {
        name: "Buse Karahan",
        role: "Şirket Başkanı",
        company: "Quety Capital",
        content: "Kommo'yu kullanmaya başladıktan sonra satışlarımız iki katına çıktı. Maliyet açısından da çok verimli bir çözüm, şiddetle tavsiye ederim.",
        rating: 5,
        initial: "B",
        color: "bg-pink-100 text-pink-600"
    },
    {
        name: "John Garner",
        role: "Kurucu & CEO",
        company: "Cardilines",
        content: "Kommo, ekibimizin gerçekten severek kullandığı bir araç oldu. Ekibimize aracı zorla uygulatmak ya da özendirmek zorunda kalmadık, tamamen organik bir şekilde hızla benimsendi.",
        rating: 5,
        initial: "J",
        color: "bg-cyan-100 text-cyan-600"
    }
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
            {/* Hero Section - Official Partner */}
            <section className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
                {/* Abstract Background Pattern */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

                <div className="container mx-auto px-4 text-center relative z-10">
                    <Badge className="mb-6 bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm px-4 py-1.5 text-sm uppercase tracking-wider">
                        Resmi İş Ortaklığı
                    </Badge>

                    <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                        Kommo CRM Türkiye Resmi Partneri
                    </h1>

                    <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Dünya çapında 15.000+ işletmenin tercih ettiği Kommo CRM altyapısını,
                        eğitim sektörüne özel çözümlerle Türkiye'de sunuyoruz.
                    </p>

                    <div className="flex justify-center gap-6">
                        <div className="bg-white p-4 rounded-xl shadow-lg flex items-center gap-3 transform hover:scale-105 transition-transform duration-300">
                            <img src="https://www.kommo.com/images/partners/partner-badge-blue.svg" alt="Kommo Partner" className="h-12 w-auto" />
                            <div className="text-left">
                                <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Official</div>
                                <div className="text-lg font-bold text-blue-900 leading-none">Partner</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 -mt-8 relative z-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                        {stats.map((stat, index) => (
                            <Card key={index} className="border-none shadow-xl bg-card">
                                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                                    <stat.icon className="h-8 w-8 text-primary mb-3 opacity-80" />
                                    <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                                    <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                                    <div className="h-1 w-12 bg-primary/20 rounded-full mt-3" />
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <Badge variant="outline" className="mb-4 text-primary border-primary/20 bg-primary/5">
                            Müşteri Yorumları
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Dünya Çapında İşletmeler <br />
                            <span className="text-primary">Kommo ile Büyüyor</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Kommo, dünya çapında 109 ülkedeki işletmeler arasında büyük bir popülerlik kazandı.
                            İşte kullanıcılarımızın deneyimleri.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {testimonials.map((item, index) => (
                            <Card key={index} className="border border-border/50 hover:border-primary/30 transition-all hover:shadow-lg group">
                                <CardHeader className="pb-4">
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(item.rating)].map((_, i) => (
                                            <Star key={i} className="h-4 w-4 fill-orange-400 text-orange-400" />
                                        ))}
                                    </div>
                                    <Quote className="h-8 w-8 text-primary/20 mb-2" />
                                    <p className="text-muted-foreground italic text-sm leading-relaxed min-h-[80px]">
                                        "{item.content}"
                                    </p>
                                </CardHeader>
                                <CardContent className="pt-0 border-t border-border/40 mt-4">
                                    <div className="flex items-center gap-4 pt-4">
                                        <div className={`w-10 h-10 rounded-full ${item.color} flex items-center justify-center font-bold text-lg`}>
                                            {item.initial}
                                        </div>
                                        <div>
                                            <div className="font-bold text-foreground">{item.name}</div>
                                            <div className="text-xs text-muted-foreground">{item.role}</div>
                                            <div className="text-xs font-semibold text-primary/80 mt-0.5 flex items-center gap-1">
                                                {item.company}
                                                <ExternalLink className="h-2.5 w-2.5 opacity-50" />
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-lg text-muted-foreground mb-6">
                            Siz de eğitim kurumunuzu Kommo CRM ile güçlendirin.
                        </p>
                        <a href="https://www.kommo.com/tr/partnerler/bir-partner-bulun/edusonex-egitim-teknolojileri/" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="px-8 h-12 text-lg shadow-xl shadow-primary/20">
                                Kommo Profilimizi İnceleyin <ExternalLink className="ml-2 h-5 w-5" />
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            {/* Edusonex Integration Section */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10 flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1 space-y-6">
                            <h3 className="text-2xl md:text-3xl font-bold">Edusonex ile Tam Entegrasyon</h3>
                            <p className="text-lg text-muted-foreground">
                                Edusonex ekosistemi, Kommo CRM ile kusursuz bir uyum içinde çalışır. Öğrenci kayıtları, veli görüşmeleri ve finansal takipler otomatik olarak senkronize edilir.
                            </p>
                            <ul className="space-y-3">
                                {["Otomatik Öğrenci Kaydı", "Veli WhatsApp Entegrasyonu", "Ödeme Hatırlatmaları", "Satış Hunisi Yönetimi"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                                        <span className="font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-full md:w-1/3 flex justify-center">
                            <div className="relative">
                                <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-full" />
                                <div className="relative bg-card p-6 rounded-2xl shadow-2xl border border-border">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                            <img src="/favicon.ico" alt="Edusonex" className="h-8 w-8 opacity-80" />
                                        </div>
                                        <div className="h-px bg-border flex-1 w-12" />
                                        <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center">
                                            <TrendingUp className="h-6 w-6 text-blue-600" />
                                        </div>
                                    </div>
                                    <div className="text-center font-bold text-sm text-muted-foreground">Güçlü İşbirliği</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default References;
