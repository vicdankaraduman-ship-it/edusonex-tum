import React, { useState } from "react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { getAuditData, getAllTenants } from "@/lib/audit-parser";
import { VisibilityScoreCard } from "@/components/dashboard/VisibilityScoreCard";
import { AICrawlerHealthCard } from "@/components/dashboard/AICrawlerHealthCard";
import { GSCOpportunitiesTable } from "@/components/dashboard/GSCOpportunitiesTable";
import { AIOverviewStatusCard } from "@/components/dashboard/AIOverviewStatusCard";
import { Badge } from "@/components/ui/badge";
import { ShieldAlert, RefreshCcw, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Dashboard = () => {
  const tenants = getAllTenants();
  const tenantIds = Object.keys(tenants);
  const [activeTenant, setActiveTenant] = useState<string>(tenantIds[0] || "");
  
  const data = getAuditData(activeTenant);

  if (!data) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center pt-24 pb-16">
          <p className="text-muted-foreground">Herhangi bir rapor bulunamadı.</p>
        </div>
      </Layout>
    );
  }

  // Helper to format the tenant ID nicely
  const formatTenantName = (id: string) => {
    return id.replace(/_com_tr|_com/g, (match) => match === '_com_tr' ? '.com.tr' : '.com').replace(/_/g, ' ').toUpperCase();
  };

  return (
    <Layout>
      <SEO 
        title={`${data.meta.domain} | AI SEO & AEO Dashboard`} 
        description="Özel okul öğrenci kazanım platformu yapay zeka görünürlük kontrol paneli."
      />
      
      <div className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5">
                  Platform Yönetimi
                </Badge>
                {data.crawlerHealth.cloudflarewaf.status === "warning" && (
                  <div className="flex items-center text-xs text-amber-500 gap-1 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    <ShieldAlert className="w-3 h-3" /> WAF Bypass Kurulumu Gerekli
                  </div>
                )}
              </div>
              <h1 className="text-3xl md:text-4xl font-black text-foreground">
                Görünürlük Kontrol Paneli
              </h1>
              <p className="text-muted-foreground mt-2">
                <span className="font-semibold text-foreground">{data.meta.domain}</span> için SGE, LLM ve Teknik SEO performans metrikleri.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-end sm:items-center gap-4">
              <div className="flex flex-col space-y-1.5 w-full sm:w-[240px]">
                <label className="text-xs text-muted-foreground font-medium flex items-center gap-1.5">
                  <Building className="w-3 h-3" /> Aktif Okul / Tenant
                </label>
                <Select value={activeTenant} onValueChange={setActiveTenant}>
                  <SelectTrigger className="w-full bg-card shadow-sm border-muted">
                    <SelectValue placeholder="Okul Seçin..." />
                  </SelectTrigger>
                  <SelectContent>
                    {tenantIds.map((id) => (
                      <SelectItem key={id} value={id}>
                        {formatTenantName(id)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center gap-3 mt-4 sm:mt-0 pt-0 sm:pt-5 border-t sm:border-t-0 sm:border-l border-border pl-0 sm:pl-4">
                <div className="text-right hidden sm:block">
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Son Denetim</div>
                  <div className="text-sm font-medium">{data.meta.lastAudit}</div>
                </div>
                <Button variant="outline" size="sm" className="gap-2 shrink-0">
                  <RefreshCcw className="w-4 h-4" /> Yenile
                </Button>
              </div>
            </div>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in slide-in-from-bottom-4 duration-500 fade-in fill-mode-both" key={activeTenant}>
            
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
