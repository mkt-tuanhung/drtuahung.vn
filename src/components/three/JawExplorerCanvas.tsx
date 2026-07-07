"use client";

import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import * as THREE from "three";
import { SkullModel } from "./SkullModel";

/** Các góc quan sát giải phẫu: mặt xương sọ quay về +Z. */
const VIEWS = {
  full: { label: "Toàn cảnh", cam: [0.35, 0.15, 3.6], target: [0, 0, 0] },
  jaw: { label: "Xương hàm dưới", cam: [0.3, -0.7, 2.1], target: [0, -0.5, 0.25] },
  cheek: { label: "Xương gò má", cam: [1.5, 0.35, 1.7], target: [0.3, 0.12, 0.35] },
} as const;

export type ViewKey = keyof typeof VIEWS;
export const VIEW_KEYS = Object.keys(VIEWS) as ViewKey[];
export const viewLabel = (k: ViewKey) => VIEWS[k].label;

function CameraRig({
  view,
  controlsRef,
  animatingRef,
}: {
  view: ViewKey;
  controlsRef: React.RefObject<OrbitControlsImpl | null>;
  animatingRef: React.MutableRefObject<boolean>;
}) {
  const camGoal = useRef(new THREE.Vector3());
  const targetGoal = useRef(new THREE.Vector3());

  useFrame(({ camera }, delta) => {
    if (!animatingRef.current) return;
    const v = VIEWS[view];
    camGoal.current.set(v.cam[0], v.cam[1], v.cam[2]);
    targetGoal.current.set(v.target[0], v.target[1], v.target[2]);
    const t = 1 - Math.exp(-4.5 * delta);
    camera.position.lerp(camGoal.current, t);
    const controls = controlsRef.current;
    if (controls) {
      controls.target.lerp(targetGoal.current, t);
      controls.update();
    }
    if (camera.position.distanceTo(camGoal.current) < 0.015) {
      animatingRef.current = false;
    }
  });
  return null;
}

/**
 * Khối 3D "Giải phẫu hàm mặt": xương sọ chất liệu xương y khoa,
 * kéo xoay tự do + 3 nút đưa camera tới từng vùng giải phẫu.
 */
export default function JawExplorerCanvas() {
  const [view, setView] = useState<ViewKey>("full");
  const controlsRef = useRef<OrbitControlsImpl | null>(null);
  const animatingRef = useRef(false);

  return (
    <div className="relative h-full w-full">
      <Canvas
        camera={{ position: VIEWS.full.cam as unknown as [number, number, number], fov: 40 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ touchAction: "pan-y" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 4, 5]} intensity={1.7} color="#FFF2D9" />
        <directionalLight position={[-4, -1, 3]} intensity={0.55} color="#E8F2EE" />
        <spotLight position={[0, -3, 3]} intensity={6} angle={0.5} color="#C5A059" />
        <Suspense fallback={null}>
          <SkullModel variant="bone" />
        </Suspense>
        <CameraRig view={view} controlsRef={controlsRef} animatingRef={animatingRef} />
        <OrbitControls
          ref={controlsRef}
          enableZoom={false}
          enablePan={false}
          onStart={() => (animatingRef.current = false)}
        />
      </Canvas>

      <div className="pointer-events-none absolute inset-x-0 bottom-3 flex justify-center">
        <div className="pointer-events-auto flex gap-2 rounded-full border border-gold/30 bg-noir-950/80 p-1.5 backdrop-blur">
          {VIEW_KEYS.map((k) => (
            <button
              key={k}
              onClick={() => {
                setView(k);
                animatingRef.current = true;
              }}
              className={`rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider transition-all duration-300 sm:px-4 sm:text-xs ${
                view === k
                  ? "bg-gradient-to-r from-gold to-gold-bright text-noir-950 shadow-gold-glow"
                  : "text-muted hover:text-gold"
              }`}
            >
              {viewLabel(k)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
