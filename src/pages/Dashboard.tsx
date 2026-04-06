import React from "react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { getAuditData } from "@/lib/audit-parser";
import { VisibilityScoreCard } from "@/components/dashboard/VisibilityScoreCard";
import { AICrawlerHealthCard } from "@/components/dashboard/AICrawlerHealthCard";
import { GSCOpportunitiesTable } from "@/components/dashboard/GSCOpportunitiesTable";
import { AIOverviewStatusCard } from "@/components/dashboard/AIOverviewStatusCard";
import { Badge } from "@/components/ui/badge";
import { ShieldAlert, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const data = getAuditData();

  return (
    <Layout>
      <SEO 
        title="Edusonex | AI SEO & AEO Dashboard" 
        description="Özel okul öğrenci kazanım platformu yapay zeka görünürlük kontrol paneli."
      />
      
      <div className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5">
                  Platform Yönetimi
                </Badge>
                <div className="flex items-center text-xs text-muted-foreground gap-1">
                  <ShieldAlert className="w-3 h-3 text-amber-500" /> WAF Bypass Kurulumu Gerekli
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl font-black text-foreground">
                Görünürlük Kontrol Paneli
              </h1>
              <p className="text-muted-foreground mt-2">
                {data.meta.domain} için SGE, LLM ve Teknik SEO performans metrikleri.
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="text-right mr-2 hidden sm:block">
                <div className="text-xs text-muted-foreground">Son Denetim</div>
                <div className="text-sm font-medium">{data.meta.lastAudit}</div>
              </div>
              <Button variant="outline" size="sm" className="gap-2">
                <RefreshCcw className="w-4 h-4" /> Yenile
              </Button>
            </div>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Top Row: Score & Health */}
            <div className="lg:col-span-1">
              <VisibilityScoreCard data={data.visibility} />
            </div>
            
            <div className="lg:col-span-1">
              <AICrawlerHealthCard data={data.crawlerHealth} />
            </div>

            <div className="lg:col-span-1">
              <AIOverviewStatusCard data={data.aiOverview} />
            </div>

            {/* Bottom Row: Table */}
            <div className="md:col-span-2 lg:col-span-3">
              <GSCOpportunitiesTable data={data.gscOpportunities} />
            </div>
            
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
