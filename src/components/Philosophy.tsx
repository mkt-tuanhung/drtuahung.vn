import Reveal from "./ui/Reveal";
import ImagePlaceholder from "./ui/ImagePlaceholder";
import Scene3D from "./three/Scene3D";

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative scroll-mt-20 overflow-hidden py-24">
      <div className="pointer-events-none absolute right-0 top-1/4 -z-10 h-[50vmin] w-[50vmin] rounded-full bg-[radial-gradient(circle,rgba(197,160,89,0.08)_0%,transparent_70%)]" />

      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        <Reveal className="text-center">
          <p className="font-display text-xs uppercase tracking-widest2 text-gold/80 sm:text-sm">
            Triết lý sắc đẹp
          </p>
          <h2 className="gold-text mt-4 font-serif text-3xl font-bold uppercase tracking-wide sm:text-4xl">
            Nghệ Thuật Điêu Khắc Cơ Thể
          </h2>
          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </Reveal>

        {/* Khối 1: BODY ART + tượng điêu khắc 3D */}
        <div className="mt-16 grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <Scene3D scene="sculpture" className="h-[26rem] w-full cursor-grab active:cursor-grabbing sm:h-[30rem]" />
              <p className="mt-2 text-center font-display text-[10px] uppercase tracking-widest2 text-gold/50">
                Tác phẩm điêu khắc 3D cẩm thạch cổ điển — kéo để xoay
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <h3 className="gold-text font-serif text-2xl font-bold uppercase tracking-wide">
              Body Art — Kiến Tạo Vẻ Đẹp Vượt Thời Gian
            </h3>
            <blockquote className="mt-6 font-serif text-xl italic leading-relaxed text-cream/90">
              &ldquo;Hạnh phúc đôi khi không ồn ào, nó chỉ là khoảnh khắc tôi mỉm cười khi
              nhìn vào gương — một nụ cười nhẹ như gió, nhưng đủ để xoa dịu cả những năm
              tháng từng không hài lòng về bản thân.&rdquo;
            </blockquote>
            <div className="mt-8">
              <ImagePlaceholder
                label="Ảnh kết quả thực tế: vùng bụng thon gọn chuẩn điêu khắc cơ thể"
                className="aspect-video"
              />
            </div>
          </Reveal>
        </div>

        {/* Khối 2: Cấy mông bằng mỡ tự thân */}
        <div className="mt-20 grid items-center gap-10 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1">
            <h3 className="gold-text font-serif text-2xl font-bold uppercase tracking-wide">
              Cấy Mông Bằng Mỡ Tự Thân
            </h3>
            <blockquote className="mt-6 font-serif text-xl italic leading-relaxed text-cream/90">
              &ldquo;Người ta thường nói về đẹp đến từ bên trong, và tôi tin điều đó —
              nhưng đôi khi, một thay đổi nhỏ bên ngoài lại chính là chìa khóa mở ra cánh
              cửa tự tin bị khóa kín từ rất lâu.&rdquo;
            </blockquote>
          </Reveal>
          <Reveal delay={0.15} className="order-1 lg:order-2">
            <ImagePlaceholder
              label="Ảnh kết quả nâng mông đầy đặn bằng mỡ tự thân + phác thảo định hình y khoa"
              className="aspect-[4/3]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
