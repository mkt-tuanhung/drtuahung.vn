import { NextResponse } from "next/server";

/**
 * Nhận form "Gửi Yêu Cầu Đồng Hành" và chuyển tiếp về CRM.
 *
 * Cấu hình trên Vercel (Settings → Environment Variables):
 *  - CRM_WEBHOOK_URL : endpoint nhận lead của CRM (bắt buộc để bật chuyển tiếp)
 *  - CRM_API_KEY     : (tuỳ chọn) gửi kèm header Authorization: Bearer <key>
 *
 * Payload gửi đi: { name, phone, service, message, source, submittedAt }
 * — hầu hết CRM (Getfly, MISA AMIS, HubSpot, Zoho, webhook tự dựng…) đều
 * nhận được dạng JSON này; khi chốt CRM cụ thể sẽ map đúng schema của hãng.
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
      submittedAt: new Date().toISOString(),
    };

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
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(8000),
      });
      if (!res.ok) {
        // CRM lỗi vẫn không làm mất lead: ghi log để đối soát thủ công.
        console.error("[LEAD][CRM_ERROR]", res.status, JSON.stringify(payload));
        return NextResponse.json({ ok: true, forwarded: false });
      }
      return NextResponse.json({ ok: true, forwarded: true });
    }

    // Chưa cấu hình CRM: ghi log server (xem được trong Vercel → Logs).
    console.log("[LEAD]", JSON.stringify(payload));
    return NextResponse.json({ ok: true, forwarded: false });
  } catch (err) {
    if (err instanceof SyntaxError) {
      return NextResponse.json({ ok: false, error: "Dữ liệu không hợp lệ" }, { status: 400 });
    }
    console.error("[LEAD][ERROR]", err);
    return NextResponse.json({ ok: false, error: "Lỗi hệ thống" }, { status: 500 });
  }
}
