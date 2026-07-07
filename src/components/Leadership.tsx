import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import ImagePlaceholder from "./ui/ImagePlaceholder";

export default function Leadership() {
  return (
    <section id="leadership" className="container mx-auto scroll-mt-20 px-4 py-24 sm:px-8 lg:px-16">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="01 / Định hướng phát triển" title="Lãnh Đạo Chuyên Môn" align="left" />
          <Reveal delay={0.15}>
            <blockquote className="mt-8 border-l-2 border-gold/60 pl-6 text-lg leading-relaxed text-cream/90">
              &ldquo;Nền tảng của sự phát triển bền vững bắt đầu từ năng lực lãnh đạo chuyên
              môn. Định hướng xây dựng trên hiểu biết lâm sàng và kinh nghiệm thực tiễn,
              nhằm thiết lập chuẩn mực vận hành nhất quán và dài hạn.&rdquo;
            </blockquote>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-3 rounded-xl border border-gold/40" />
            <ImagePlaceholder
              label="Ảnh chân dung Dr. Tuấn Hùng trong trang phục phẫu thuật — thần thái uy tín, tận tâm"
              src="/images/chan-dung-dr-tuan-hung.jpg"
              className="aspect-[3/4]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
