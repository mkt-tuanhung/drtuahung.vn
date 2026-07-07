"use client";

import { Suspense, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sparkles, useGLTF } from "@react-three/drei";
import * as THREE from "three";

/**
 * Tượng điêu khắc 3D chất liệu cẩm thạch trên bệ đá viền vàng —
 * thể hiện triết lý "điêu khắc cơ thể" phong cách cổ điển.
 * Model tạo bằng Meshy AI (Image-to-3D), tối ưu từ 300–550k xuống 90k tam giác.
 */
const STATUES = {
  venus: { label: "Torso Venus", url: "/models/statue-venus.glb" },
  bust: { label: "Bán thân Phục Hưng", url: "/models/statue-renaissance.glb" },
} as const;

type StatueKey = keyof typeof STATUES;

function MarbleStatue({ url }: { url: string }) {
  const { scene } = useGLTF(url);

  const statue = useMemo(() => {
    const marble = new THREE.MeshPhysicalMaterial({
      color: "#EDE7DC",
      metalness: 0.02,
      roughness: 0.38,
      clearcoat: 0.3,
      clearcoatRoughness: 0.55,
    });
    const s = scene.clone(true);
    s.traverse((o) => {
      if ((o as THREE.Mesh).isMesh) (o as THREE.Mesh).material = marble;
    });
    // Chuẩn hoá: đưa tượng về tâm, cao ~1.7 đơn vị, đặt trên bệ.
    const box = new THREE.Box3().setFromObject(s);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(center);
    const scale = 1.7 / Math.max(size.x, size.y, size.z);
    s.scale.setScalar(scale);
    s.position.set(-center.x * scale, -box.min.y * scale, -center.z * scale);
    return s;
  }, [scene]);

  return <primitive object={statue} />;
}

function Turntable({ children }: { children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.18;
  });
  return <group ref={group}>{children}</group>;
}

function Pedestal() {
  return (
    <group position={[0, -0.28, 0]}>
      <mesh position={[0, 0.1, 0]}>
        <cylinderGeometry args={[0.95, 1.05, 0.36, 64]} />
        <meshPhysicalMaterial color="#0A241E" metalness={0.4} roughness={0.25} clearcoat={0.8} />
      </mesh>
      <mesh position={[0, 0.29, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.96, 0.02, 16, 96]} />
        <meshStandardMaterial color="#C5A059" metalness={1} roughness={0.25} />
      </mesh>
    </group>
  );
}

export default function SculptureCanvas() {
  const [statue, setStatue] = useState<StatueKey>("venus");

  return (
    <div className="relative h-full w-full">
      <Canvas
        camera={{ position: [0, 0.9, 3.4], fov: 40 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ touchAction: "pan-y" }}
      >
        <ambientLight intensity={0.35} />
        <directionalLight position={[4, 5, 4]} intensity={2.6} color="#FFF3DB" />
        <directionalLight position={[-5, 2, -3]} intensity={1.1} color="#2E8B74" />
        <pointLight position={[0, 3.2, -2]} intensity={10} color="#C5A059" />
        <Suspense fallback={null}>
          <Turntable>
            <group position={[0, -0.1, 0]}>
              <MarbleStatue url={STATUES[statue].url} />
            </group>
            <Pedestal />
          </Turntable>
          <Sparkles count={50} scale={[4.5, 3.5, 4]} size={1.8} speed={0.3} color="#D4AF37" opacity={0.4} />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          target={[0, 0.65, 0]}
          minPolarAngle={Math.PI * 0.3}
          maxPolarAngle={Math.PI * 0.62}
        />
      </Canvas>

      <div className="pointer-events-none absolute inset-x-0 bottom-3 flex justify-center">
        <div className="pointer-events-auto flex gap-2 rounded-full border border-gold/30 bg-noir-950/80 p-1.5 backdrop-blur">
          {(Object.keys(STATUES) as StatueKey[]).map((k) => (
            <button
              key={k}
              onClick={() => setStatue(k)}
              className={`rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider transition-all duration-300 sm:px-4 sm:text-xs ${
                statue === k
                  ? "bg-gradient-to-r from-gold to-gold-bright text-noir-950 shadow-gold-glow"
                  : "text-muted hover:text-gold"
              }`}
            >
              {STATUES[k].label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

useGLTF.preload(STATUES.venus.url);
useGLTF.preload(STATUES.bust.url);
