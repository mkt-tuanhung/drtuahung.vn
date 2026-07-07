"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NAV = [
  { href: "#leadership", label: "Lãnh đạo Chuyên môn" },
  { href: "#services", label: "Dịch vụ Mũi nhọn" },
  { href: "#technique", label: "Kỹ thuật Đột phá" },
  { href: "#commitments", label: "Cam kết Hợp tác" },
  { href: "#gallery", label: "Thư viện Kết quả" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gold/15 bg-noir-950/75 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8 lg:px-16">
        <a href="#top" className="flex items-baseline gap-2 font-display text-gold">
          <span className="text-2xl font-bold">T</span>
          <span className="text-gold/50">|</span>
          <span className="text-sm font-semibold uppercase tracking-widest sm:text-base">
            Dr Tuấn Hùng
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-medium uppercase tracking-wider text-cream/80 transition-colors duration-300 hover:text-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact" className="btn-gold hidden !px-5 !py-2.5 !text-xs sm:inline-flex">
            Liên Hệ Hợp Tác / Đặt Lịch
          </a>
          <button
            aria-label="Mở menu"
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-md border border-gold/30 lg:hidden"
          >
            <span className="h-px w-5 bg-gold" />
            <span className="h-px w-5 bg-gold" />
            <span className="h-px w-5 bg-gold" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-noir-950/70 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="fixed right-0 top-0 z-50 flex h-dvh w-72 flex-col gap-2 border-l border-gold/20 bg-noir-900 p-8 pt-20 lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                aria-label="Đóng menu"
                onClick={() => setOpen(false)}
                className="absolute right-6 top-6 text-2xl text-gold"
              >
                ✕
              </button>
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-gold/10 py-3 font-display text-sm uppercase tracking-widest text-cream/90 transition-colors hover:text-gold"
                >
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="btn-gold mt-6 text-center">
                Đặt Lịch Ngay
              </a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
