"use client";

import { motion } from "framer-motion";
import Scene3D from "./three/Scene3D";
import CountUp from "./ui/CountUp";

const METRICS = [
  { top: <CountUp end={100} suffix="%" />, label: "Bác sĩ nội trú trực tiếp phẫu thuật" },
  { top: "Độc quyền", label: "Nâng ngực không đặt ống dẫn lưu" },
  { top: "Chuẩn y khoa", label: "Chỉ định đúng chuyên môn" },
];

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-dvh flex-col overflow-hidden pt-16">
      {/* Vầng sáng trung tâm */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(197,160,89,0.14)_0%,rgba(46,139,116,0.08)_45%,transparent_70%)]" />

      <div className="container mx-auto grid flex-1 items-center gap-8 px-4 sm:px-8 lg:grid-cols-2 lg:gap-4 lg:px-16">
        {/* Nội dung trung tâm */}
        <div className="pt-10 text-center lg:pt-0 lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-display text-2xl text-gold">
              T <span className="text-gold/50">|</span>{" "}
              <span className="text-lg uppercase tracking-widest2">Dr Tuấn Hùng</span>
            </p>

            <h1 className="gold-text mt-8 font-serif text-4xl font-bold uppercase leading-[1.15] tracking-wide sm:text-5xl xl:text-6xl">
              Hồ Sơ Năng Lực &amp; Thông Tin Hợp Tác Y Khoa
            </h1>

            <div className="mx-auto mt-8 inline-block border border-gold bg-gold/95 px-8 py-3 shadow-gold-glow lg:mx-0">
              <p className="font-sans text-sm font-bold uppercase tracking-widest2 text-noir-950 sm:text-base">
                Thẩm Mỹ Dr Tuấn Hùng
              </p>
            </div>

            <p className="mt-8 hidden max-w-md text-sm leading-relaxed text-muted lg:block">
              Giải phẫu là nền tảng — điêu khắc là đích đến. Kéo xoay mô hình 3D cấu trúc
              xương để cảm nhận chiều sâu chuyên môn.
            </p>
          </motion.div>
        </div>

        {/* Khối 3D xương sọ tương tác */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="relative"
        >
          <Scene3D scene="hero" className="h-[46vh] w-full cursor-grab active:cursor-grabbing sm:h-[52vh] lg:h-[64vh]" />
          <p className="pointer-events-none mt-2 text-center font-display text-[10px] uppercase tracking-widest2 text-gold/50">
            ⟲ Kéo để xoay mô hình 3D
          </p>
        </motion.div>
      </div>

      {/* Trusted metrics */}
      <div className="container mx-auto px-4 pb-16 sm:px-8 lg:px-16">
        <div className="grid gap-4 border-t border-gold/15 pt-8 sm:grid-cols-3">
          {METRICS.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 + i * 0.15 }}
              className="text-center"
            >
              <p className="gold-text font-serif text-2xl font-bold sm:text-3xl">{m.top}</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-muted">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mũi tên cuộn xuống */}
      <a
        href="#leadership"
        aria-label="Cuộn xuống tìm hiểu"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounceDown text-2xl text-gold"
      >
        ↓
      </a>
    </section>
  );
}
