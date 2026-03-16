interface Env {
  RESEND_API_KEY: string;
}

interface ContactBody {
  name: string;
  email: string;
  phone: string;
  institution: string;
  role: string;
  studentCount: string;
  message?: string;
}

export async function onRequestPost(context: { request: Request; env: Env }): Promise<Response> {
  const { request, env } = context;

  // CORS headers
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  try {
    const body: ContactBody = await request.json();

    const { name, email, phone, institution, role, studentCount, message } = body;

    if (!name || !email || !phone || !institution || !role || !studentCount) {
      return new Response(JSON.stringify({ success: false, error: "Zorunlu alanlar eksik" }), {
        status: 400,
        headers,
      });
    }

    // Resend API çağrısı — SDK yerine native fetch (edge uyumlu)
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Edusonex Form <form@edusonex.com>",
        to: ["info@edusonex.com"],
        reply_to: email,
        subject: `[Demo Talebi] ${institution} – ${studentCount}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0f172a; color: #e2e8f0; padding: 32px; border-radius: 12px;">
            <div style="background: linear-gradient(135deg, #06b6d4, #8b5cf6); padding: 24px; border-radius: 8px; margin-bottom: 24px;">
              <h1 style="margin: 0; color: white; font-size: 22px;">🚀 Yeni VIP Demo Talebi</h1>
              <p style="margin: 8px 0 0; color: rgba(255,255,255,0.8); font-size: 14px;">Edusonex iletişim formu</p>
            </div>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #1e293b; color: #94a3b8; font-size: 13px; width: 40%;">Ad Soyad</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #1e293b; font-weight: bold; color: #f1f5f9;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #1e293b; color: #94a3b8; font-size: 13px;">E-posta</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #1e293b; color: #06b6d4;"><a href="mailto:${email}" style="color: #06b6d4;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #1e293b; color: #94a3b8; font-size: 13px;">Telefon</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #1e293b; color: #f1f5f9;"><a href="tel:${phone}" style="color: #06b6d4;">${phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #1e293b; color: #94a3b8; font-size: 13px;">Kurum</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #1e293b; font-weight: bold; color: #f1f5f9;">${institution}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #1e293b; color: #94a3b8; font-size: 13px;">Unvan</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #1e293b; color: #f1f5f9;">${role}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #1e293b; color: #94a3b8; font-size: 13px;">Öğrenci / Paket</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #1e293b;">
                  <span style="background: #06b6d4; color: white; padding: 3px 10px; border-radius: 20px; font-size: 12px; font-weight: bold;">${studentCount}</span>
                </td>
              </tr>
              ${message ? `
              <tr>
                <td style="padding: 10px 0; color: #94a3b8; font-size: 13px; vertical-align: top;">Mesaj</td>
                <td style="padding: 10px 0; color: #e2e8f0; line-height: 1.6;">${message.replace(/\n/g, "<br>")}</td>
              </tr>
              ` : ""}
            </table>
            
            <div style="margin-top: 24px; padding: 16px; background: #1e293b; border-radius: 8px; border-left: 3px solid #06b6d4;">
              <p style="margin: 0; font-size: 12px; color: #64748b;">Bu e-posta edusonex.com.tr iletişim formundan gönderilmiştir. Reply-to: ${email}</p>
            </div>
          </div>
        `,
      }),
    });

    if (!resendResponse.ok) {
      const err = await resendResponse.text();
      console.error("Resend error:", err);
      return new Response(JSON.stringify({ success: false, error: "Email gönderilemedi" }), {
        status: 500,
        headers,
      });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200, headers });
  } catch (e) {
    console.error("Contact function error:", e);
    return new Response(JSON.stringify({ success: false, error: "Sunucu hatası" }), {
      status: 500,
      headers,
    });
  }
}

// OPTIONS (CORS preflight)
export async function onRequestOptions(): Promise<Response> {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
