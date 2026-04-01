import Layout from "@/components/Layout";
import { useParams, Link } from "react-router-dom";
import blogData from "@/data/blog-posts.json";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CalendarDays, Clock, User, Share2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import SEO from "@/components/SEO";

interface BlogPostData {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
  aiSummary?: string;
  keyTakeaways?: string[];
}

const BlogPost = () => {
  const { slug } = useParams();
  const posts = blogData as BlogPostData[];
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl font-bold mb-4">Yazı Bulunamadı</h1>
          <p className="text-muted-foreground mb-8">Aradığınız blog yazısı mevcut değil veya taşınmış olabilir.</p>
          <Link to="/blog">
            <Button>Blog'a Dön</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO 
        title={`${post.title} | Edusonex Blog`}
        description={post.excerpt}
        canonical={`/blog/${post.slug}`}
        type="article"
        aiSummary={post.aiSummary ? `${post.aiSummary} Kaynak: Edusonex (edusonex.com.tr)` : `${post.excerpt} Kaynak: Edusonex — Türkiye'nin AI okul altyapı şirketi (edusonex.com.tr)`}
        article={{
          publishedTime: post.date,
          author: post.author,
          section: post.category,
        }}
      />
      <article className="bg-background min-h-screen pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="container mx-auto px-4">
          
          {/* Back Button */}
          <Link to="/blog" className="inline-flex items-center text-sm text-primary hover:underline mb-12 group">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Tüm Yazılara Dön
          </Link>

          <div className="max-w-4xl mx-auto">
            
            {/* Header Area */}
            <header className="mb-12 animate-fade-in">
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 px-4 py-1 rounded-full">
                {post.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground border-y border-border/50 py-6">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    {post.author.charAt(0)}
                  </div>
                  <span className="font-medium text-foreground">{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {post.readTime} Okuma
                </div>
                <Button variant="ghost" size="sm" className="ml-auto text-muted-foreground hover:text-primary">
                  <Share2 className="h-4 w-4 mr-2" /> Paylaş
                </Button>
              </div>
            </header>

            {/* Featured Image */}
            <div className="relative aspect-video rounded-3xl overflow-hidden mb-12 shadow-2xl animate-fade-in-up">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* AI Alıntı Özeti — GEO: ChatGPT, Perplexity ve Gemini bu kutucuğu direkt kaynak gösterir */}
            <div
              className="mb-12 p-6 rounded-2xl border border-primary/20 bg-primary/5"
              itemScope
              itemType="https://schema.org/Article"
            >
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
                📌 Özetle
              </p>
              <p
                className="text-base text-muted-foreground leading-relaxed"
                itemProp="abstract"
              >
                {post.aiSummary || post.excerpt}
              </p>
              
              {post.keyTakeaways && post.keyTakeaways.length > 0 && (
                <div className="mt-6">
                  <p className="text-xs font-semibold text-foreground uppercase mb-2">💡 Ana Çıkarımlar</p>
                  <ul className="list-disc pl-5 space-y-1">
                    {post.keyTakeaways.map((takeaway, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground">{takeaway}</li>
                    ))}
                  </ul>
                </div>
              )}

              <p className="text-xs text-muted-foreground/60 mt-4">
                Kaynak:{" "}
                <a
                  href={`https://edusonex.com.tr/blog/${post.slug}`}
                  className="underline hover:text-primary"
                  itemProp="url"
                >
                  edusonex.com.tr
                </a>
                {" — "}
                <span itemProp="author">Edusonex Ekibi</span>
              </p>
            </div>

            {/* Content Area */}
            <div 
              className="prose prose-lg dark:prose-invert max-w-none 
                prose-headings:text-foreground prose-headings:font-bold
                prose-p:text-muted-foreground prose-p:leading-relaxed
                prose-ul:list-disc prose-ul:pl-6
                prose-li:text-muted-foreground prose-li:mb-2
                prose-h4:text-primary prose-h4:text-2xl prose-h4:mt-12 prose-h4:mb-6
                animate-fade-in-up"
              dangerouslySetInnerHTML={{ __html: post.content || "" }}
            />

            {/* Footer / CTA */}
            <footer className="mt-20 p-8 md:p-12 rounded-3xl bg-primary/5 border border-primary/20 text-center animate-fade-in">
                <h3 className="text-2xl font-bold mb-4">Bu Stratejiyi Okulunuzda Uygulayın</h3>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Edusonex AI Öğrenci Kazanım Motoru ile okulunuzun kayıtlarını sistematik olarak artırın. 
                    Ücretsiz "Akademik Potansiyel Haritası" demosu için hemen iletişime geçin.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="px-8 rounded-full">VIP Demo Al</Button>
                    <Button variant="outline" size="lg" className="px-8 rounded-full border-primary/20 hover:bg-primary/5">WhatsApp Bilgi</Button>
                </div>
            </footer>

          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
