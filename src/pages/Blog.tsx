import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { CalendarDays, Clock, ArrowRight, User } from "lucide-react";
import { Link } from "react-router-dom";

const posts = [
    {
        id: 1,
        title: "Bir Özel Okul Öğrencisini Kayıt Ettirmenin Gerçek Maliyeti: 15.000 TL mi, 2.000 TL mi?",
        excerpt: "Billboard, sosyal medya reklamı ve açık kapı gününün toplam maliyetini hesapladığınızda, her yeni kayıt için ödediğiniz tutar sizi şaşırtacak. AI kanca sistemi bu denklemi nasıl değiştiriyor?",
        category: "Okul Yönetimi",
        author: "Edusonex Ekibi",
        date: "10 Mart 2026",
        readTime: "6 dk",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop",
        slug: "ogrenci-kayit-maliyeti"
    },
    {
        id: 2,
        title: "Veliler Neden Billboard'a Körleşti? 2026'da Özel Okul Pazarlaması",
        excerpt: "Geleneksel reklam yöntemleri artık eskisi kadar işe yaramıyor. Velilerin okulları nasıl seçtiği değişti — buna göre kayıt stratejinizi güncellemenin zamanı geldi.",
        category: "Pazarlama",
        author: "Edusonex Ekibi",
        date: "5 Mart 2026",
        readTime: "5 dk",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop",
        slug: "veli-reklam-korlesmesi"
    },
    {
        id: 3,
        title: "White-Label AI: \"Kendi Yazılımımız\" Demenin Okula Getirdiği Prestij Avantajı",
        excerpt: "Veliler sistemi sizin kurumunuza ait sanırsa güven 3 kata çıkıyor. White-label modelin kayıt dönüşüm oranını nasıl etkilediğini açıkladık.",
        category: "Strateji",
        author: "Edusonex Ekibi",
        date: "28 Şubat 2026",
        readTime: "4 dk",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
        slug: "white-label-prestij"
    },
    {
        id: 4,
        title: "Okul Kurucusu Rehberi: AI Sisteminiz PDR Zümresini Neden Karşısına Almamalı?",
        excerpt: "\"Psikolojik analiz\" kavramı Türkiye'de güçlü bir lobiyle karşı karşıya. Sistemin dilini \"Akademik Potansiyel Haritası\" olarak değiştirerek bu riski nasıl sıfırlarsınız?",
        category: "Hukuki & Etik",
        author: "Edusonex Ekibi",
        date: "20 Şubat 2026",
        readTime: "7 dk",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
        slug: "pdr-riski-yonetimi"
    },
    {
        id: 5,
        title: "Zincir Okul Anlaşması: Tek İmzayla 20 Kampüsü Nasıl Kazanırsınız?",
        excerpt: "Türkiye'de Bahçeşehir, Doğa, Uğur gibi zincirlerin karar mekanizması nasıl işliyor? Genel müdürü ikna etmenin 3 adımı.",
        category: "Satış Stratejisi",
        author: "Edusonex Ekibi",
        date: "15 Şubat 2026",
        readTime: "8 dk",
        image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=2074&auto=format&fit=crop",
        slug: "zincir-okul-anlasma"
    },
    {
        id: 6,
        title: "ROI Analizi: 49.750 TL/ay Harcama Kaç Yeni Kayıtla Geri Döner?",
        excerpt: "Gerçek bir hesaplama: Enterprise paketi alan bir okul, yıllık kaç öğrenci kaydında tüm yatırımını amorti eder? Farklı kayıt ücretlerine göre kırılım barları.",
        category: "Finans & ROI",
        author: "Edusonex Ekibi",
        date: "8 Şubat 2026",
        readTime: "5 dk",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop",
        slug: "roi-analizi"
    }
];

const Blog = () => {
    return (
        <Layout>
            <div className="bg-background min-h-screen py-16 lg:py-24">
                <div className="container mx-auto px-4">

                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
                        <Badge variant="secondary" className="mb-4 text-primary bg-primary/10 hover:bg-primary/20 border-primary/20 px-4 py-1.5 rounded-full text-sm font-medium">
                            Okul Kurucu Blogu
                        </Badge>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                            Okul Yöneticilerine Özel <br />
                            <span className="text-primary">Kayıt & Pazarlama Rehberleri</span>
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Reklam harcamalarınızı azaltırken kayıt oranlarınızı artırmak isteyen okul kurucusu ve yöneticilerine özel stratejik içerikler.
                        </p>
                    </div>

                    {/* Featured Post (Optional - Highlight the first one) */}
                    <div className="mb-16 hidden lg:block animate-fade-in">
                        <div className="group relative overflow-hidden rounded-3xl border border-border/50 bg-card shadow-xl hover:shadow-2xl transition-all duration-300">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div className="h-full overflow-hidden">
                                    <img
                                        src={posts[0].image}
                                        alt={posts[0].title}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-8 md:p-12">
                                    <Badge className="mb-4 bg-primary text-primary-foreground hover:bg-primary/90">
                                        {posts[0].category}
                                    </Badge>
                                    <h2 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                                        {posts[0].title}
                                    </h2>
                                    <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                                        {posts[0].excerpt}
                                    </p>
                                    <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8">
                                        <div className="flex items-center gap-2">
                                            <User className="h-4 w-4" />
                                            {posts[0].author}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CalendarDays className="h-4 w-4" />
                                            {posts[0].date}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock className="h-4 w-4" />
                                            {posts[0].readTime}
                                        </div>
                                    </div>
                                    <Button className="group-hover:translate-x-2 transition-transform">
                                        Devamını Oku <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Blog Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.slice(1).map((post) => (
                            <Card key={post.id} className="group flex flex-col border-border/50 bg-card hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden">
                                <div className="relative h-48 overflow-hidden">
                                    <Badge className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur text-foreground border-border/50 hover:bg-background/90">
                                        {post.category}
                                    </Badge>
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <CardHeader className="flex-1 p-6">
                                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                                        <span className="flex items-center gap-1"><CalendarDays className="h-3 w-3" /> {post.date}</span>
                                        <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                </CardHeader>
                                <CardFooter className="p-6 pt-0 mt-auto border-t border-border/30">
                                    <div className="flex items-center justify-between w-full pt-4">
                                        <div className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                                                {post.author.charAt(0)}
                                            </div>
                                            {post.author}
                                        </div>
                                        <Button variant="ghost" size="sm" className="hover:bg-primary/10 hover:text-primary p-0 h-auto font-semibold">
                                            Oku
                                        </Button>
                                    </div>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <Button variant="outline" size="lg" className="px-8 min-w-[200px]">
                            Tüm Yazıları Gör
                        </Button>
                    </div>

                </div>
            </div>
        </Layout>
    );
};

export default Blog;
