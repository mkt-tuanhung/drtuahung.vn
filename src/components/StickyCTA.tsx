/** Nút đặt lịch cố định góc dưới màn hình — chỉ hiện trên mobile theo spec. */
export default function StickyCTA() {
  return (
    <a
      href="#contact"
      className="btn-gold fixed bottom-4 left-1/2 z-40 -translate-x-1/2 whitespace-nowrap !rounded-full !px-8 sm:hidden"
    >
      Đặt Lịch / Hợp Tác
    </a>
  );
}
