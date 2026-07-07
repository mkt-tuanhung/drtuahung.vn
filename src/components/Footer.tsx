"use client";

import { useState } from "react";
import Reveal from "./ui/Reveal";

const SERVICES = [
  "Phẫu thuật hàm mặt",
  "Nâng ngực không đặt ống dẫn lưu",
  "Điêu khắc vóc dáng / Body Art",
  "Cấy mông bằng mỡ tự thân",
  "Hợp tác y khoa / Đối tác",
];

export default function Footer() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <footer id="contact" className="relative scroll-mt-20 border-t border-gold/15 bg-noir-950/80 pt-24">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        <Reveal className="text-center">
          <h2 className="gold-text font-serif text-5xl font-bold uppercase tracking-wide sm:text-6xl">
            Thank You!
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-cream/85">
            Chúng tôi trân trọng sự quan tâm và tin tưởng từ Quý Đối tác. Rất mong có cơ
            hội đồng hành cùng Quý Đối tác trong những dự án sắp tới.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mx-auto mt-14 max-w-2xl">
            {status === "sent" ? (
              <div className="card-premium p-10 text-center">
                <p className="gold-text font-serif text-2xl font-bold">
                  Đã nhận yêu cầu của Quý Đối tác!
                </p>
                <p className="mt-3 text-muted">
                  Đội ngũ Dr Tuấn Hùng sẽ liên hệ lại trong thời gian sớm nhất.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
                <input required name="name" placeholder="Họ và tên *" className="input-premium" />
                <input
                  required
                  name="phone"
                  placeholder="Số điện thoại *"
                  pattern="[0-9+ ]{8,15}"
                  className="input-premium"
                />
                <select name="service" className="input-premium sm:col-span-2" defaultValue={SERVICES[0]}>
                  {SERVICES.map((s) => (
                    <option key={s} value={s} className="bg-noir-900">
                      {s}
                    </option>
                  ))}
                </select>
                <textarea
                  name="message"
                  placeholder="Lời nhắn gửi đối tác…"
                  rows={4}
                  className="input-premium sm:col-span-2"
                />
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-gold sm:col-span-2 disabled:opacity-60"
                >
                  {status === "sending" ? "Đang gửi…" : "Gửi Yêu Cầu Đồng Hành"}
                </button>
                {status === "error" && (
                  <p className="text-center text-sm text-red-400 sm:col-span-2">
                    Có lỗi xảy ra — vui lòng thử lại hoặc gọi hotline 0889 208 666.
                  </p>
                )}
              </form>
            )}
          </div>
        </Reveal>

        <div className="mt-20 grid gap-8 border-t border-gold/15 py-12 text-sm sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-base font-bold uppercase tracking-widest text-gold">
              Thẩm Mỹ Dr Tuấn Hùng
            </p>
            <p className="mt-3 leading-relaxed text-muted">
              CC2 đường Nguyễn Hữu Thọ, phường Hoàng Mai, TP Hà Nội
            </p>
          </div>
          <div>
            <p className="font-semibold uppercase tracking-wider text-cream/80">Hotline</p>
            <a href="tel:0889208666" className="mt-3 block text-lg font-bold text-gold hover:brightness-110">
              0889 208 666
            </a>
          </div>
          <div>
            <p className="font-semibold uppercase tracking-wider text-cream/80">Website</p>
            <p className="mt-3 text-muted">drtuanhung.vn</p>
          </div>
          <div>
            <p className="font-semibold uppercase tracking-wider text-cream/80">Mạng xã hội</p>
            <p className="mt-3 text-muted">
              Facebook: Bác sĩ Tuấn Hùng
              <br />
              TikTok: @drtuanhung
            </p>
          </div>
        </div>

        <p className="border-t border-gold/10 py-6 text-center text-xs text-muted">
          © {new Date().getFullYear()} Thẩm Mỹ Dr Tuấn Hùng — Hồ sơ năng lực &amp; thông tin hợp tác y khoa.
          <span className="mt-1 block text-[10px] text-muted/60">
            3D sculpture assets generated with Meshy AI (CC BY 4.0)
          </span>
        </p>
      </div>
    </footer>
  );
}
