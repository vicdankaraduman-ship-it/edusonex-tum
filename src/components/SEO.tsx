import { Helmet } from "react-helmet-async";

interface FAQItem {
  question: string;
  answer: string;
}

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
  noindex?: boolean;
  /** Blog yazıları için makale şeması */
  article?: {
    publishedTime: string;
    author?: string;
    section?: string;
  };
  /** AEO: Sıkça sorulan sorular şeması (Featured Snippets & AI cevap motoru) */
  faq?: FAQItem[];
  /** GEO: AI modellerinin alıntılaması için kısa özet */
  aiSummary?: string;
}

export const SEO = ({
  title,
  description,
  canonical,
  type = "website",
  noindex = false,
  article,
  faq,
  aiSummary,
}: SEOProps) => {
  const siteUrl = "https://edusonex.com.tr";
  const url = canonical ? `${siteUrl}${canonical}` : siteUrl;

  // Article JSON-LD (Blog yazıları için)
  const articleSchema = article
    ? JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description: description,
        url: url,
        datePublished: article.publishedTime,
        author: {
          "@type": "Organization",
          name: article.author || "Edusonex Ekibi",
          url: siteUrl,
        },
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
        articleSection: article.section || "Eğitim Teknolojisi",
        inLanguage: "tr-TR",
        // GEO: AI modellerinin özet alanı
        abstract: aiSummary || description,
      })
    : null;

  // FAQ JSON-LD (AEO: Answer Engine Optimization)
  const faqSchema =
    faq && faq.length > 0
      ? JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        })
      : null;

  return (
    <Helmet>
      {/* ── Standart Meta ───────────────────────────── */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* GEO: AI botları için özet — <meta name="abstract"> */}
      {aiSummary && <meta name="abstract" content={aiSummary} />}
      {aiSummary && <meta name="summary" content={aiSummary} />}

      {/* Robots */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* ── Open Graph ──────────────────────────────── */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:locale" content="tr_TR" />
      <meta property="og:site_name" content="Edusonex" />

      {/* ── Twitter ─────────────────────────────────── */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />

      {/* ── Article JSON-LD (Blog) ───────────────────── */}
      {articleSchema && (
        <script type="application/ld+json">{articleSchema}</script>
      )}

      {/* ── FAQ JSON-LD (AEO) ───────────────────────── */}
      {faqSchema && (
        <script type="application/ld+json">{faqSchema}</script>
      )}
    </Helmet>
  );
};

export default SEO;
