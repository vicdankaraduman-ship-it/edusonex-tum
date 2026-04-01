import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { ShieldAlert, LogOut } from "lucide-react";

export default function Admin() {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [leads, setLeads] = useState<any[]>([]);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
      if (session) fetchLeads();
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) fetchLeads();
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchLeads = async () => {
    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast.error("Talepler yüklenirken hata oluştu.");
    } else {
      setLeads(data || []);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Giriş başarılı!");
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const markAsCalled = async (id: string, currentStatus: string) => {
    const newStatus = currentStatus === "yeni" ? "donus_yapildi" : "yeni";
    const { error } = await supabase.from("leads").update({ status: newStatus }).eq("id", id);
    if (!error) {
      setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status: newStatus } : l)));
      toast.success("Durum güncellendi.");
    }
  };

  if (loading && !session) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">Yükleniyor...</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO title="Yönetim Paneli | Edusonex" description="Edusonex Admin Paneli" noindex={true} />
      
      <div className="container mx-auto px-4 py-20 min-h-screen">
        {!session ? (
          <div className="max-w-md mx-auto mt-20 bg-card p-8 rounded-2xl border border-border shadow-lg">
            <div className="flex flex-col items-center mb-6">
              <ShieldAlert className="h-12 w-12 text-primary mb-4" />
              <h1 className="text-2xl font-bold text-center">Admin Girişi</h1>
              <p className="text-sm text-muted-foreground text-center mt-2">Bu alana sadece yetkili personeller girebilir.</p>
            </div>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="text-sm font-medium">E-posta</label>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div>
                <label className="text-sm font-medium">Şifre</label>
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Giriş Yapılıyor..." : "Giriş Yap"}
              </Button>
            </form>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold">🎯 Gelen Talepler (Leads)</h1>
              <Button variant="outline" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Çıkış Yap
              </Button>
            </div>

            <div className="bg-card rounded-xl border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tarih</TableHead>
                    <TableHead>Ad & Kurum</TableHead>
                    <TableHead>İletişim</TableHead>
                    <TableHead>Kaynak</TableHead>
                    <TableHead>Durum</TableHead>
                    <TableHead className="text-right">Aksiyon</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {leads.map((lead) => (
                    <TableRow key={lead.id}>
                      <TableCell className="text-sm text-muted-foreground">
                        {new Date(lead.created_at).toLocaleDateString("tr-TR", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })}
                      </TableCell>
                      <TableCell>
                        <div className="font-medium text-foreground">{lead.name}</div>
                        <div className="text-xs text-muted-foreground">{lead.school_name || "-"}</div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">{lead.email || "-"}</div>
                        <div className="text-xs text-muted-foreground">{lead.phone || "-"}</div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={lead.source === 'iletisim_whatsapp' ? 'default' : 'secondary'}>
                          {lead.source.replace("_", " ")}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={lead.status === 'yeni' ? 'destructive' : 'outline'} className={lead.status === 'yeni' ? 'animate-pulse' : ''}>
                          {lead.status === 'yeni' ? 'Bekliyor' : 'Kapatıldı'}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" onClick={() => markAsCalled(lead.id, lead.status)}>
                          {lead.status === 'yeni' ? 'İşlendi İşaretle' : 'Geri Al'}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                  {leads.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                        Henüz hiç form gönderilmemiş. Mıknatıslar çalışmaya başladığında buralar dolup taşacak! 🚀
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
