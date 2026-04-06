import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, AlertCircle, Bot } from "lucide-react";
import { DashboardData } from "@/lib/audit-parser";

interface CrawlerHealthItemProps {
  label: string;
  status: "ok" | "warning" | "error";
  description: string;
}

function StatusIcon({ status }: { status: "ok" | "warning" | "error" }) {
  switch (status) {
    case "ok":
      return <CheckCircle2 className="h-5 w-5 text-emerald-500" />;
    case "warning":
      return <AlertCircle className="h-5 w-5 text-amber-500" />;
    case "error":
      return <XCircle className="h-5 w-5 text-rose-500" />;
  }
}

function CrawlerHealthItem({ label, status, description }: CrawlerHealthItemProps) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-lg bg-card/40 border border-border/30">
      <div className="mt-0.5"><StatusIcon status={status} /></div>
      <div className="flex-1">
        <div className="text-sm font-semibold text-foreground">{label}</div>
        <div className="text-xs text-muted-foreground mt-0.5">{description}</div>
      </div>
    </div>
  );
}

export function AICrawlerHealthCard({ data }: { data: DashboardData["crawlerHealth"] }) {
  return (
    <Card className="flex flex-col border-border/50 bg-slate-800/50 backdrop-blur-sm hover:scale-[1.02] transition-transform duration-200">
       <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
           <Bot className="h-4 w-4 text-primary" />
           <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground">AI Tarayıcı & Şema Sağlığı</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col gap-3 py-4">
        
        <CrawlerHealthItem 
           label="robots.txt (AI İzinleri)"
           status={data.robotsTxt.status}
           description={`${data.robotsTxt.aiBotsAllowed} AI botuna izin verildi, ${data.robotsTxt.blockedBots} SEO aracı spam engellendi.`}
        />
        
        <CrawlerHealthItem 
           label="llms.txt Kurulumu"
           status={data.llmsTxt.status}
           description={`AI özetleyiciler için optimize edilmiş içerik mevcut (${data.llmsTxt.url}).`}
        />

        <CrawlerHealthItem 
           label="Yapılandırılmış Veri (Schema)"
           status={data.schema.status}
           description={`${data.schema.types.join(", ")} türleri aktif ve doğrulanmış.`}
        />

        <CrawlerHealthItem 
           label="Cloudflare WAF (Bot Fight Mode)"
           status={data.cloudflarewaf.status}
           description={data.cloudflarewaf.note}
        />

      </CardContent>
    </Card>
  );
}
