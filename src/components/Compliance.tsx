import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function Compliance() {
  return (
    <section id="compliance" className="container mx-auto scroll-mt-20 px-4 py-24 sm:px-8 lg:px-16">
      <SectionHeading eyebrow="03 / Minh bạch vận hành" title="Mô Hình Hoạt Động & Pháp Lý" />

      <Reveal delay={0.15}>
        <div className="mx-auto mt-12 max-w-3xl">
          <div className="card-premium flex flex-col items-center gap-6 p-10 text-center sm:flex-row sm:text-left">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold shadow-gold-glow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="h-11 w-11">
                <path d="M12 2l8 3.5v6c0 5-3.5 9.5-8 11-4.5-1.5-8-6-8-11v-6L12 2z" strokeLinejoin="round" />
                <path d="M12 8v5M12 8h-1.5M12 8h1.5M9.5 13h5" strokeLinecap="round" />
              </svg>
            </div>
            <p className="text-lg leading-relaxed text-cream/90">
              &ldquo;Hoạt động chuyên môn luôn được triển khai trong khuôn khổ pháp lý rõ
              ràng. Mô hình vận hành minh bạch giúp kiểm soát rủi ro, đảm bảo tính ổn định
              và sự tin cậy lâu dài.&rdquo;
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
