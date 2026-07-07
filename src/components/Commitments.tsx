import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

const VALUES = [
  {
    title: "Đặt Sự An Toàn Lên Hàng Đầu",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-9 w-9">
        <path d="M12 21s-7.5-4.7-9.5-9.5C1 7.5 3.5 4 7 4c2.2 0 4 1.2 5 3 1-1.8 2.8-3 5-3 3.5 0 6 3.5 4.5 7.5C19.5 16.3 12 21 12 21z" strokeLinejoin="round" />
        <path d="M9 11.5l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    points: [
      "Chỉ định đúng chuyên môn, đúng chỉ định y khoa.",
      "Ưu tiên giải pháp an toàn, hạn chế can thiệp không cần thiết.",
      "Kiểm soát chặt chẽ rủi ro trong suốt quá trình phẫu thuật và hồi phục.",
    ],
  },
  {
    title: "Pháp Lý Minh Bạch",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-9 w-9">
        <path d="M7 3h8l4 4v14H7V3z" strokeLinejoin="round" />
        <path d="M15 3v4h4M10 12h6M10 15.5h6M10 8.5h2" strokeLinecap="round" />
      </svg>
    ),
    points: [
      "Thực hiện phẫu thuật tại cơ sở được cấp phép theo quy định.",
      "Đảm bảo đầy đủ hồ sơ pháp lý và quy trình y khoa.",
      "Minh bạch pháp lý, rõ ràng trách nhiệm trong từng ca điều trị.",
    ],
  },
  {
    title: "Uy Tín — Trách Nhiệm",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-9 w-9">
        <circle cx="12" cy="9" r="6" />
        <path d="M12 6.5l.9 1.8 2 .3-1.45 1.4.35 2-1.8-.95-1.8.95.35-2L9.1 8.6l2-.3.9-1.8zM8.5 14.5L7 21l5-2.5L17 21l-1.5-6.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    points: [
      "Không phóng đại kết quả, không hạ thấp rủi ro.",
      "Minh bạch thông tin trước, trong và sau phẫu thuật.",
      "Đồng hành lâu dài, theo sát kết quả và sự hài lòng của khách hàng.",
    ],
  },
  {
    title: "Năng Lực Chuyên Môn",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-9 w-9">
        <path d="M6 3v5a4 4 0 008 0V3M6 3h2M12 3h2" strokeLinecap="round" />
        <path d="M10 12v3a5 5 0 0010 0v-1" strokeLinecap="round" />
        <circle cx="20" cy="12" r="2" />
      </svg>
    ),
    points: [
      "Trực tiếp Bác sĩ Nội trú Ngoại khoa thực hiện phẫu thuật.",
      "Ứng dụng kinh nghiệm lâm sàng trong từng chỉ định và thao tác.",
      "Cá nhân hóa phương pháp điều trị, tối ưu cả chức năng và thẩm mỹ.",
    ],
  },
];

export default function Commitments() {
  return (
    <section id="commitments" className="container mx-auto scroll-mt-20 px-4 py-24 sm:px-8 lg:px-16">
      <SectionHeading eyebrow="04 / Giá trị bền vững" title="Cam Kết Hợp Tác" />

      <Reveal delay={0.15}>
        <p className="mx-auto mt-8 max-w-3xl text-center leading-relaxed text-muted">
          Hợp tác được xây dựng trên nền tảng niềm tin và trách nhiệm song hành. Mọi cam
          kết đều hướng đến an toàn, minh bạch và giá trị bền vững cho các bên liên quan.
          Trong quá trình tư vấn và làm việc với Khách hàng, Dr. Tuấn Hùng và các Đối tác
          cần thống nhất xuyên suốt <strong className="text-gold">04 giá trị cốt lõi</strong>{" "}
          để tạo dựng niềm tin vững chắc:
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {VALUES.map((v, i) => (
          <Reveal key={v.title} delay={(i % 2) * 0.12}>
            <div className="card-premium h-full p-8">
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold/35 text-gold">
                  {v.icon}
                </span>
                <h3 className="font-serif text-lg font-bold uppercase tracking-wide text-gold">
                  {v.title}
                </h3>
              </div>
              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-cream/85">
                {v.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="mt-1 text-gold/70">◆</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
