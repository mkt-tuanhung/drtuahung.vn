import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import ImagePlaceholder from "./ui/ImagePlaceholder";

const ITEMS = [
  { label: "Ảnh chân dung mẫu: vẻ đẹp thanh lịch trong váy ren màu kem quý phái", src: "/images/mau-vay-ren-kem.jpg", ratio: "aspect-[3/4]" },
  { label: "Ảnh chân dung mẫu: sườn xám thêu hoa xanh ngọc lục bảo bên ô giấy dầu", src: "/images/mau-suon-xam.jpg", ratio: "aspect-[3/4]" },
  { label: "Ảnh kết quả nâng ngực không ống dẫn lưu", src: "/images/ket-qua-nang-nguc.jpg", ratio: "aspect-square" },
  { label: "Ảnh khách hàng sau điêu khắc vóc dáng", src: "/images/ket-qua-voc-dang.jpg", ratio: "aspect-[3/4]" },
  { label: "Ảnh bác sĩ Tuấn Hùng khám lâm sàng", src: "/images/kham-lam-sang.jpg", ratio: "aspect-square" },
  { label: "Ảnh không gian phòng khám chuẩn y khoa", src: "/images/phong-kham.jpg", ratio: "aspect-[3/4]" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="container mx-auto scroll-mt-20 px-4 py-24 sm:px-8 lg:px-16">
      <SectionHeading eyebrow="Thư viện đối tác & hình ảnh mẫu" title="Beauty Portrait" />
      <Reveal delay={0.1}>
        <p className="mx-auto mt-8 max-w-2xl text-center leading-relaxed text-muted">
          Vẻ đẹp tự nhiên, sang trọng và kiêu sa sau khi được kiến tạo bởi Dr. Tuấn Hùng.
        </p>
      </Reveal>

      <div className="mt-14 columns-2 gap-4 sm:columns-3 [&>*]:mb-4">
        {ITEMS.map((item, i) => (
          <Reveal key={i} delay={(i % 3) * 0.1} className="break-inside-avoid">
            <ImagePlaceholder label={item.label} src={item.src} className={item.ratio} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
