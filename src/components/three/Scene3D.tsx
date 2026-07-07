"use client";

import dynamic from "next/dynamic";
import { useInView } from "framer-motion";
import { useRef } from "react";

const loaders = {
  hero: dynamic(() => import("./HeroSkullCanvas"), { ssr: false }),
  jaw: dynamic(() => import("./JawExplorerCanvas"), { ssr: false }),
  sculpture: dynamic(() => import("./SculptureCanvas"), { ssr: false }),
} as const;

/**
 * Vỏ bọc cho mọi khối 3D: chỉ mount Canvas khi người dùng cuộn gần tới
 * (tiết kiệm GPU/băng thông), nền shimmer trong lúc tải model.
 */
export default function Scene3D({
  scene,
  className = "",
}: {
  scene: keyof typeof loaders;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "500px 0px" });
  const Comp = loaders[scene];

  return (
    <div ref={ref} className={`relative ${className}`}>
      <div className="shimmer-placeholder absolute inset-0 -z-10 rounded-2xl opacity-40" />
      {inView && <Comp />}
    </div>
  );
}
