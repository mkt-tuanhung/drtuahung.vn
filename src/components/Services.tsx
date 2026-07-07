import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import ImagePlaceholder from "./ui/ImagePlaceholder";
import Scene3D from "./three/Scene3D";

export default function Services() {
  return (
    <section id="services" className="container mx-auto scroll-mt-20 px-4 py-24 sm:px-8 lg:px-16">
      <SectionHeading eyebrow="02 / Kỹ thuật đột phá" title="Mũi Nhọn Dịch Vụ & Kỹ Thuật Đột Phá" />

      <Reveal delay={0.15}>
        <p className="mx-auto mt-8 max-w-3xl text-center leading-relaxed text-muted">
          Thương hiệu Dr. Tuấn Hùng tự hào làm chủ các kỹ thuật phức tạp, định hình phong
          cách thẩm mỹ an toàn và cá nhân hóa. Giá trị khác biệt được hình thành từ việc
          lựa chọn đúng mũi nhọn phát triển. Dịch vụ và kỹ thuật được đầu tư có trọng tâm,
          gắn với nhu cầu thực tế và xu hướng chuyên môn hiện đại.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-8 lg:grid-cols-2">
        {/* Cột 1: Phẫu thuật hàm mặt + mô hình 3D giải phẫu */}
        <Reveal>
          <article className="card-premium flex h-full flex-col overflow-hidden p-6 sm:p-8">
            <h3 className="gold-text font-serif text-2xl font-bold uppercase tracking-wide">
              Phẫu Thuật Hàm Mặt
            </h3>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-cream/85">
              <li className="flex gap-3">
                <span className="mt-1 text-gold">◆</span>
                Xử lý các ca khiếm khuyết xương hàm mặt phức tạp, yêu cầu đánh giá chính
                xác cấu trúc giải phẫu.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-gold">◆</span>
                Yêu cầu độ chính xác cao, kinh nghiệm chuyên sâu trong đánh giá, can thiệp
                và phục hồi chức năng.
              </li>
            </ul>
            <div className="mt-6 flex-1">
              <div className="relative h-72 rounded-xl border border-gold/20 bg-noir-950/50 sm:h-80">
                <Scene3D scene="jaw" className="h-full w-full cursor-grab active:cursor-grabbing" />
              </div>
              <p className="mt-3 text-center font-display text-[10px] uppercase tracking-widest2 text-gold/50">
                Mô hình 3D cấu trúc xương hàm mặt — kéo xoay &amp; chọn vùng giải phẫu
              </p>
            </div>
          </article>
        </Reveal>

        {/* Cột 2: Thẩm mỹ vóc dáng */}
        <Reveal delay={0.15}>
          <article className="card-premium flex h-full flex-col overflow-hidden p-6 sm:p-8">
            <h3 className="gold-text font-serif text-2xl font-bold uppercase tracking-wide">
              Thẩm Mỹ Vóc Dáng
            </h3>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-cream/85">
              <li className="flex gap-3">
                <span className="mt-1 text-gold">◆</span>
                Thiết kế form dáng cá nhân hóa phù hợp với cơ thể từng khách hàng.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-gold">◆</span>
                Triển khai kỹ thuật độc quyền nâng cấp vòng 1{" "}
                <strong className="text-gold">không đặt ống dẫn lưu</strong> — bước tiến
                giúp khách hàng giảm thiểu đau đớn và rút ngắn tối đa thời gian hồi phục.
              </li>
            </ul>
            <div className="mt-6 flex flex-1 flex-col gap-4">
              <ImagePlaceholder
                label="Ảnh ekip phẫu thuật Dr. Tuấn Hùng tập trung cao độ trong phòng mổ hiện đại"
                src="/images/ekip-phau-thuat.jpg"
                className="min-h-36 flex-1"
              />
              <ImagePlaceholder
                label="Ảnh bác sĩ tư vấn vẽ định hình form ngực cá nhân hoá bằng iPad công nghệ cao"
                src="/images/tu-van-ipad.jpg"
                className="min-h-36 flex-1"
              />
            </div>
          </article>
        </Reveal>
      </div>

      <Reveal delay={0.2}>
        <p className="mt-10 text-center text-sm italic text-muted">
          &ldquo;Mỗi dịch vụ mũi nhọn đều được phát triển dựa trên nền tảng y khoa chuẩn
          mực, kinh nghiệm lâm sàng và định hướng cá nhân hoá cho từng khách hàng.&rdquo;
        </p>
      </Reveal>
    </section>
  );
}
