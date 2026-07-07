"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Sparkles } from "@react-three/drei";
import { SkullModel } from "./SkullModel";

/** Khối 3D Hero: xương sọ Digital Art vàng kim, kéo xoay tự do + tự xoay chậm. */
export default function HeroSkullCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0.15, 3.4], fov: 42 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ touchAction: "pan-y" }}
    >
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 3, 5]} intensity={2.4} color="#F0DFAE" />
      <directionalLight position={[-5, -1, -4]} intensity={1.2} color="#2E8B74" />
      <pointLight position={[0, -2.5, 2]} intensity={12} color="#C5A059" />
      <Suspense fallback={null}>
        <Float speed={1.3} rotationIntensity={0.22} floatIntensity={0.55}>
          <SkullModel variant="digital" />
        </Float>
        <Sparkles count={90} scale={[6, 4.2, 4]} size={2.4} speed={0.35} color="#D4AF37" opacity={0.55} />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.9}
        minPolarAngle={Math.PI * 0.3}
        maxPolarAngle={Math.PI * 0.68}
      />
    </Canvas>
  );
}
