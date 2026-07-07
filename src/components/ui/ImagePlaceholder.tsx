/**
 * Khung ảnh chờ chuẩn spec: shimmer mượt + nhãn mô tả đúng tinh thần nội dung ảnh.
 * Khi có ảnh thật: thay bằng <Image> của Next.js, giữ nguyên tỷ lệ khung.
 */
export default function ImagePlaceholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`shimmer-placeholder relative flex items-center justify-center overflow-hidden rounded-xl border border-gold/25 ${className}`}
    >
      <span className="max-w-[85%] text-center font-display text-xs uppercase tracking-widest text-gold/60 sm:text-sm">
        [{label}]
      </span>
      <div className="absolute inset-3 rounded-lg border border-gold/15" />
    </div>
  );
}
