import { NextResponse } from "next/server";

/**
 * Nhận form "Gửi Yêu Cầu Đồng Hành" và đẩy về CRM nội bộ (Supabase).
 *
 * Cấu hình trên Vercel (Settings → Environment Variables) — chọn 1 trong 2:
 *
 * 1) CRM Supabase nội bộ (khuyên dùng — hệ thống Dr-Tuan-Hung---App):
 *    - SUPABASE_URL              : https://<project>.supabase.co
 *    - SUPABASE_SERVICE_ROLE_KEY : Settings → API → service_role (GIỮ KÍN)
 *    Lead ghi vào bảng `website_leads` (chạy supabase/website_leads.sql
 *    trong repo App trước) — telesale thấy ngay trong hệ thống.
 *
 * 2) Webhook tuỳ ý (dự phòng):
 *    - CRM_WEBHOOK_URL (+ CRM_API_KEY nếu cần)
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, service, message } = body ?? {};
    if (!name || !phone) {
      return NextResponse.json(
        { ok: false, error: "Thiếu họ tên hoặc số điện thoại" },
        { status: 400 },
      );
    }

    const payload = {
      name: String(name).slice(0, 200),
      phone: String(phone).slice(0, 20),
      service: String(service ?? "").slice(0, 200),
      message: String(message ?? "").slice(0, 2000),
      source: "drtuanhung.vn",
    };

    const sbUrl = process.env.SUPABASE_URL;
    const sbKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (sbUrl && sbKey) {
      const res = await fetch(`${sbUrl}/rest/v1/website_leads`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: sbKey,
          Authorization: `Bearer ${sbKey}`,
          Prefer: "return=minimal",
        },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(8000),
      });
      if (!res.ok) {
        console.error("[LEAD][SUPABASE_ERROR]", res.status, await res.text(), JSON.stringify(payload));
        return NextResponse.json({ ok: true, forwarded: false });
      }
      return NextResponse.json({ ok: true, forwarded: true });
    }

    const webhookUrl = process.env.CRM_WEBHOOK_URL;
    if (webhookUrl) {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(process.env.CRM_API_KEY
            ? { Authorization: `Bearer ${process.env.CRM_API_KEY}` }
            : {}),
        },
        body: JSON.stringify({ ...payload, submittedAt: new Date().toISOString() }),
        signal: AbortSignal.timeout(8000),
      });
      if (!res.ok) {
        console.error("[LEAD][CRM_ERROR]", res.status, JSON.stringify(payload));
        return NextResponse.json({ ok: true, forwarded: false });
      }
      return NextResponse.json({ ok: true, forwarded: true });
    }

    // Chưa cấu hình: ghi log server (Vercel → Logs), không mất lead.
    console.log("[LEAD]", JSON.stringify({ ...payload, at: new Date().toISOString() }));
    return NextResponse.json({ ok: true, forwarded: false });
  } catch (err) {
    if (err instanceof SyntaxError) {
      return NextResponse.json({ ok: false, error: "Dữ liệu không hợp lệ" }, { status: 400 });
    }
    console.error("[LEAD][ERROR]", err);
    return NextResponse.json({ ok: false, error: "Lỗi hệ thống" }, { status: 500 });
  }
}
