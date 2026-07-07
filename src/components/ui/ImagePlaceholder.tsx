"use client";

import { useState } from "react";

/**
 * Khung ảnh thông minh: nếu có `src` và file tồn tại trong public/ → hiện ảnh thật;
 * nếu chưa có ảnh → shimmer + nhãn mô tả đúng tinh thần nội dung (theo spec).
 * Quy trình thay ảnh: chỉ cần thả file đúng tên vào public/images/ (xem README).
 */
export default function ImagePlaceholder({
  label,
  src,
  className = "",
}: {
  label: string;
  src?: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  const showImage = !!src && !failed;

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-xl border border-gold/25 ${
        showImage ? "" : "shimmer-placeholder"
      } ${className}`}
    >
      {showImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={label}
          loading="lazy"
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <>
          <span className="max-w-[85%] text-center font-display text-xs uppercase tracking-widest text-gold/60 sm:text-sm">
            [{label}]
          </span>
          <div className="absolute inset-3 rounded-lg border border-gold/15" />
        </>
      )}
    </div>
  );
}
