import Reveal from "./ui/Reveal";

const ADVANTAGES = [
  {
    title: "Giảm Đau",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10">
        <path d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3z" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    points: ["Hạn chế xâm lấn mô mềm", "Giảm căng tức sau phẫu thuật"],
  },
  {
    title: "Vận Động Sớm",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10">
        <path d="M3 14c4-6 9-9 18-9-1 3-2 5-4 6.5M7 21c2-4 5-7 9-8.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 5.5c1.5 1 2.5 2.5 3 4.5" strokeLinecap="round" />
      </svg>
    ),
    points: ["Sinh hoạt nhẹ nhàng sớm", "Không vướng ống dẫn lưu"],
  },
  {
    title: "Hồi Phục Nhanh",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10">
        <circle cx="12" cy="13" r="8" />
        <path d="M12 9v4l2.5 2.5M12 2v2M4.5 5.5L6 7M19.5 5.5L18 7" strokeLinecap="round" />
      </svg>
    ),
    points: ["Lành thương nhanh hơn", "Sớm trở lại sinh hoạt thường ngày"],
  },
];

export default function Technique() {
  return (
    <section id="technique" className="relative scroll-mt-20 overflow-hidden py-24">
      {/* Nền phòng phẫu thuật: gradient chiều sâu + vệt đèn mổ */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-noir-950 via-noir-900 to-noir-950" />
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[60vmin] w-[90vmin] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_top,rgba(249,246,240,0.09)_0%,transparent_60%)]" />

      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        <Reveal className="text-center">
          <p className="font-display text-xs uppercase tracking-widest2 text-gold/80 sm:text-sm">
            Tiêu điểm kỹ thuật độc quyền
          </p>
          <h2 className="gold-text mx-auto mt-4 max-w-4xl font-serif text-3xl font-bold uppercase leading-tight tracking-wide sm:text-4xl">
            Kỹ Thuật Đột Phá: Nâng Cấp Vòng 1 Không Đặt Ống Dẫn Lưu
          </h2>
          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {ADVANTAGES.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.15}>
              <div className="group card-premium h-full p-8 text-center hover:bg-noir-800/70">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold/30 text-gold transition-all duration-500 group-hover:shadow-gold-glow-lg group-hover:border-gold">
                  {a.icon}
                </div>
                <h3 className="mt-6 font-serif text-xl font-bold uppercase tracking-wide text-gold">
                  {a.title}
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-cream/80">
                  {a.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
