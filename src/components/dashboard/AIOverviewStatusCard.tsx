import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Sparkles, Globe, Clock, CheckCircle2 } from "lucide-react";
import { DashboardData } from "@/lib/audit-parser";

interface AIPlatformProps {
  platform: DashboardData["aiOverview"]["platforms"][0];
}

function AIPlaformItem({ platform }: AIPlatformProps) {
  const isQueued = platform.status === "queued";
  const isIndexing = platform.status === "indexing";
  const isActive = platform.status === "active";

  return (
    <div className="flex items-center justify-between p-3 rounded-lg bg-card/40 border border-border/30 hover:border-primary/20 transition-colors">
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-md ${isActive ? 'bg-emerald-500/10' : isIndexing ? 'bg-amber-500/10' : 'bg-muted'}`}>
          <Brain className={`w-4 h-4 ${isActive ? 'text-emerald-500' : isIndexing ? 'text-amber-500' : 'text-muted-foreground'}`} />
        </div>
        <div>
          <div className="text-sm font-semibold text-foreground">{platform.name}</div>
          <div className="text-xs text-muted-foreground font-mono mt-0.5">{platform.bot}</div>
        </div>
      </div>
      <div className="flex flex-col items-end gap-1">
        {isQueued && (
          <Badge variant="outline" className="text-muted-foreground border-border/50 text-[10px]">
            <Clock className="w-3 h-3 mr-1" /> Kuyrukta
          </Badge>
        )}
        {isIndexing && (
          <Badge className="bg-amber-500/10 text-amber-500 border-amber-500/20 text-[10px] animate-pulse">
            <Sparkles className="w-3 h-3 mr-1" /> İndeksleniyor
          </Badge>
        )}
        {isActive && (
          <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20 text-[10px]">
            <CheckCircle2 className="w-3 h-3 mr-1" /> Aktif
          </Badge>
        )}
        <span className="text-[10px] text-muted-foreground border-border/50 uppercase tracking-widerx ">{platform.since}</span>
      </div>
    </div>
  );
}

export function AIOverviewStatusCard({ data }: { data: DashboardData["aiOverview"] }) {
  return (
    <Card className="flex flex-col border-border/50 bg-slate-800/50 backdrop-blur-sm hover:scale-[1.02] transition-transform duration-200">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <Globe className="h-4 w-4 text-violet-500" />
          <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground">AI Overview (SGE) Atıf Durumu</CardTitle>
        </div>
        <CardDescription className="text-xs">
          LLM'lerin site içeriğini tarama ve atıf verme durumu.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col gap-2 py-2">
        {data.platforms.map((platform, idx) => (
          <AIPlaformItem key={idx} platform={platform} />
        ))}
      </CardContent>
    </Card>
  );
}
