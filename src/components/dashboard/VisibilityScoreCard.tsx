import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { DashboardData } from "@/lib/audit-parser";
import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from "recharts";

export function VisibilityScoreCard({ data }: { data: DashboardData["visibility"] }) {
  const chartData = [
    {
      name: "Score",
      value: data.currentScore,
      fill: "hsl(var(--primary))",
    },
  ];

  return (
    <Card className="flex flex-col border-border/50 bg-slate-800/50 backdrop-blur-sm hover:scale-[1.02] transition-transform duration-200">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Genel Görünürlük</CardTitle>
          {data.trend === "up" ? (
            <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20">
              <TrendingUp className="mr-1 h-3 w-3" /> +{data.delta}
            </Badge>
          ) : data.trend === "down" ? (
            <Badge className="bg-rose-500/10 text-rose-500 border-rose-500/20">
              <TrendingDown className="mr-1 h-3 w-3" /> {data.delta}
            </Badge>
          ) : (
            <Badge className="bg-muted text-muted-foreground border-border/50">
              <Minus className="mr-1 h-3 w-3" /> 0
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-center">
        <div className="flex items-center gap-6">
          <div className="relative w-32 h-32 shrink-0">
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart
                cx="50%"
                cy="50%"
                innerRadius="70%"
                outerRadius="100%"
                barSize={10}
                data={chartData}
                startAngle={90}
                endAngle={-270}
              >
                <PolarAngleAxis
                  type="number"
                  domain={[0, 100]}
                  angleAxisId={0}
                  tick={false}
                />
                <RadialBar
                  background={{ fill: "hsl(var(--muted))" }}
                  dataKey="value"
                  cornerRadius={10}
                />
              </RadialBarChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-black">{data.currentScore}</span>
              <span className="text-xs text-muted-foreground">/100</span>
            </div>
          </div>
          
          <div className="flex-1 space-y-3">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-muted-foreground">AI Tarayıcı İzinleri</span>
                <span className="font-medium text-emerald-500">{data.breakdown.aiCrawler}%</span>
              </div>
              <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${data.breakdown.aiCrawler}%` }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-muted-foreground">Şema (Schema)</span>
                <span className="font-medium text-emerald-500">{data.breakdown.schema}%</span>
              </div>
              <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${data.breakdown.schema}%` }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-muted-foreground">Teknik SEO</span>
                <span className="font-medium text-amber-500">{data.breakdown.technical}%</span>
              </div>
              <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-amber-500 rounded-full" style={{ width: `${data.breakdown.technical}%` }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-muted-foreground">İçerik Kalitesi</span>
                <span className="font-medium text-rose-500">{data.breakdown.content}%</span>
              </div>
              <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-rose-500 rounded-full" style={{ width: `${data.breakdown.content}%` }} />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
