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

// Use Vite's glob import to read all tenant JSON files
const rawReports = import.meta.glob('../../reports/*/audit-data.json', { eager: true });

export const getAllTenants = (): Record<string, DashboardData> => {
  const tenants: Record<string, DashboardData> = {};
  for (const path in rawReports) {
    // path looks like '../../reports/edusonex_com_tr/audit-data.json'
    const parts = path.split('/');
    const tenantId = parts[parts.length - 2]; 
    tenants[tenantId] = (rawReports[path] as any).default || rawReports[path];
  }
  return tenants;
};

// Fallback to the first available tenant or static data if none
const defaultData = Object.values(getAllTenants())[0];

export function getAuditData(tenantId?: string): DashboardData {
  if (tenantId) {
    const tenants = getAllTenants();
    return tenants[tenantId] || defaultData;
  }
  return defaultData;
}
