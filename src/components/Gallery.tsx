import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import ImagePlaceholder from "./ui/ImagePlaceholder";

const ITEMS = [
  { label: "Vẻ đẹp thanh lịch trong váy ren màu kem quý phái", src: "/images/mau-vay-ren-kem.jpg", ratio: "aspect-[3/4]" },
  { label: "Kết quả nâng ngực không ống dẫn lưu", src: "/images/ket-qua-nang-nguc.jpg", ratio: "aspect-square" },
  { label: "Vẻ đẹp kiêu kỳ trong sườn xám thêu hoa xanh ngọc bên ô giấy dầu", src: "/images/mau-suon-xam.jpg", ratio: "aspect-[3/4]" },
  { label: "Kết quả gọt hàm & trượt cằm — sau 03 tháng", src: "/images/ket-qua-got-ham-truot-cam.jpg", ratio: "aspect-square" },
  { label: "Vẻ đẹp kiêu sa quyền lực", src: "/images/mau-vest-do.jpg", ratio: "aspect-[3/4]" },
  { label: "Bác sĩ Tuấn Hùng tư vấn trên phim X-quang cấu trúc xương hàm mặt", src: "/images/kham-lam-sang.jpg", ratio: "aspect-square" },
  { label: "Vẻ đẹp trong trẻo tựa cúc hoạ mi", src: "/images/mau-cuc-hoa-mi.jpg", ratio: "aspect-[3/4]" },
  { label: "Kết quả gọt hàm & hạ gò má — sau 01 tháng", src: "/images/ket-qua-got-ham-ha-go-ma.jpg", ratio: "aspect-square" },
  { label: "Vẻ đẹp quyến rũ ánh vàng", src: "/images/mau-vay-vang.jpg", ratio: "aspect-[3/4]" },
  { label: "Bác sĩ Tuấn Hùng thăm khám trực tiếp", src: "/images/tham-kham-truc-tiep.jpg", ratio: "aspect-[3/4]" },
  { label: "Không gian cơ sở y khoa được cấp phép", src: "/images/phong-kham.jpg", ratio: "aspect-[3/4]" },
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
