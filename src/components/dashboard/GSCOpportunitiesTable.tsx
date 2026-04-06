import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Zap, Eye, MousePointerClick, TrendingUp } from "lucide-react";
import { DashboardData } from "@/lib/audit-parser";

export function GSCOpportunitiesTable({ data }: { data: DashboardData["gscOpportunities"] }) {
  const getBadgeForType = (type: string) => {
    switch (type) {
      case "zero-click":
        return <Badge className="bg-rose-500/10 text-rose-500 border-rose-500/20 text-[10px]">Zero Click</Badge>;
      case "quick-win":
        return (
          <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20 text-[10px]">
            <Zap className="mr-1 w-3 h-3" /> Quick Win
          </Badge>
        );
      case "branded":
        return <Badge className="bg-primary/10 text-primary border-primary/20 text-[10px]">Marka</Badge>;
      default:
        return <Badge variant="outline" className="text-[10px]">{type}</Badge>;
    }
  };

  return (
    <Card className="col-span-full border-border/50 bg-slate-800/50 backdrop-blur-sm">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-primary" />
          <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground">GSC Fırsatları (Quick Wins)</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="rounded-md border border-border/50 overflow-hidden">
          <Table>
            <TableHeader className="bg-muted/30">
              <TableRow>
                <TableHead className="font-semibold">Sorgu</TableHead>
                <TableHead className="text-right font-semibold">Gösterim <Eye className="inline w-3 h-3 ml-1" /></TableHead>
                <TableHead className="text-right font-semibold">Tıklama <MousePointerClick className="inline w-3 h-3 ml-1" /></TableHead>
                <TableHead className="text-right font-semibold">Pozisyon</TableHead>
                <TableHead className="text-right font-semibold">Fırsat Türü</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={index} className="hover:bg-muted/20">
                  <TableCell className="font-medium">{row.query}</TableCell>
                  <TableCell className="text-right">{row.impressions.toLocaleString()}</TableCell>
                  <TableCell className="text-right">{row.clicks.toLocaleString()}</TableCell>
                  <TableCell className="text-right">
                    <span className={row.position > 10 ? "text-amber-500" : "text-emerald-500"}>
                      {row.position.toFixed(1)}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">{getBadgeForType(row.type)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
