import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { CalendarDays, Clock, ArrowRight, User } from "lucide-react";
import { Link } from "react-router-dom";

const posts = [
    {
        id: 1,
        title: "Yapay Zeka Destekli Eğitimde Yeni Dönem: Kişiselleştirilmiş Öğrenme",
        excerpt: "Her öğrencinin öğrenme hızı ve stili farklıdır. Yapay zeka teknolojileri ile bu farkı avantaja çeviriyoruz.",
        category: "Eğitim Teknolojileri",
        author: "Dr. Ahmet Yılmaz",
        date: "15 Şubat 2026",
        readTime: "5 dk",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
        slug: "yapay-zeka-egitim"
    },
    {
        id: 2,
        title: "Okul Yönetiminde Veri Odaklı Karar Alma Süreçleri",
        excerpt: "Büyük veri analitiği sayesinde okul yöneticileri artık daha stratejik ve isabetli kararlar alabiliyor.",
        category: "Yönetim",
        author: "Zeynep Demir",
        date: "8 Şubat 2026",
        readTime: "7 dk",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        slug: "veri-odakli-yonetim"
    },
    {
        id: 3,
        title: "Sanal Gerçeklik (VR) ile Sınıf Duvarlarını Aşmak",
        excerpt: "Öğrencileri tarih öncesi çağlara veya uzayın derinliklerine götüren sürükleyici eğitim deneyimleri.",
        category: "İnovasyon",
        author: "Mehmet Kaya",
        date: "2 Şubat 2026",
        readTime: "4 dk",
        image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=2078&auto=format&fit=crop",
        slug: "sanal-gerceklik-egitim"
    },
    {
        id: 4,
        title: "Öğretmenler İçin Dijital Yetkinlik Rehberi",
        excerpt: "21. yüzyılın eğitimcisi olmak için sahip olunması gereken temel dijital beceriler ve araçlar.",
        category: "Akademi",
        author: "Elif Şahin",
        date: "28 Ocak 2026",
        readTime: "6 dk",
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
        slug: "ogretmen-dijital-yetkinlik"
    },
    {
        id: 5,
        title: "Oyunlaştırma (Gamification) ile Motivasyonu Artırmak",
        excerpt: "Dersleri daha eğlenceli ve rekabetçi hale getirerek öğrenci katılımını maksimize etmenin yolları.",
        category: "Metodoloji",
        author: "Burak Çelik",
        date: "20 Ocak 2026",
        readTime: "5 dk",
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop",
        slug: "oyunlastirma-motivasyon"
    },
    {
        id: 6,
        title: "Hibrit Eğitim Modelleri ve Geleceğin Okulu",
        excerpt: "Fiziksel ve dijital öğrenme ortamlarının en iyi yönlerini birleştiren esnek eğitim yapıları.",
        category: "Vizyon",
        author: "Ayşe Yurt",
        date: "15 Ocak 2026",
        readTime: "8 dk",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop",
        slug: "hibrit-egitim-gelecek"
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
                            Blog & Görüşler
                        </Badge>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                            Eğitim Teknolojilerindeki <br />
                            <span className="text-primary">Son Gelişmeler</span>
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Yapay zeka, dijital dönüşüm ve modern eğitim metodolojileri üzerine uzman görüşleri, rehberler ve başarı hikayeleri.
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
