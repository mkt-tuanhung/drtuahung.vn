import { NextResponse } from "next/server";

/**
 * Nhận form "Gửi Yêu Cầu Đồng Hành".
 * P1: nối về Google Sheets / Zalo OA / CRM (chờ đối tác chọn kênh — xem PRD mục 7).
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone } = body ?? {};
    if (!name || !phone) {
      return NextResponse.json({ ok: false, error: "Thiếu họ tên hoặc số điện thoại" }, { status: 400 });
    }
    console.log("[LEAD]", JSON.stringify({ ...body, at: new Date().toISOString() }));
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Dữ liệu không hợp lệ" }, { status: 400 });
  }
}
