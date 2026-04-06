import auditData from "@/data/audit-data.json";

export interface DashboardData {
  meta: {
    domain: string;
    lastAudit: string;
    auditVersion: string;
  };
  visibility: {
    currentScore: number;
    previousScore: number;
    delta: number;
    trend: "up" | "down" | "neutral";
    breakdown: {
      technical: number;
      content: number;
      aiCrawler: number;
      schema: number;
    };
  };
  crawlerHealth: {
    robotsTxt: { status: "ok" | "warning" | "error"; aiBotsAllowed: number; blockedBots: number };
    llmsTxt: { status: "ok" | "warning" | "error"; url: string };
    schema: { status: "ok" | "warning" | "error"; types: string[] };
    sitemap: { status: "ok" | "warning" | "error"; urls: number };
    cloudflarewaf: { status: "ok" | "warning" | "error"; note: string };
  };
  gscOpportunities: {
    query: string;
    impressions: number;
    clicks: number;
    position: number;
    type: "zero-click" | "quick-win" | "branded" | string;
  }[];
  aiOverview: {
    platforms: {
      name: string;
      bot: string;
      status: "queued" | "indexing" | "active" | "error";
      since: string;
    }[];
  };
}

export function getAuditData(): DashboardData {
  return auditData as DashboardData;
}
