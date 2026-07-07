"use client";

import { useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

/**
 * Mô hình xương sọ (public/models/skull.glb — đã chuẩn hoá tâm & tỷ lệ 2 đơn vị,
 * mặt quay về +Z). Hai biến thể chất liệu:
 *  - "digital": ngọc lục bảo sẫm + lớp wireframe vàng kim phủ ngoài (Digital Art)
 *  - "bone":    chất liệu xương y khoa, dùng cho phần giải phẫu hàm mặt
 */
export function SkullModel({ variant = "digital" }: { variant?: "digital" | "bone" }) {
  const { scene } = useGLTF("/models/skull.glb");

  const solid = useMemo(() => {
    const mat =
      variant === "digital"
        ? new THREE.MeshPhysicalMaterial({
            color: "#0E332B",
            metalness: 0.55,
            roughness: 0.32,
            clearcoat: 0.6,
            clearcoatRoughness: 0.35,
          })
        : new THREE.MeshStandardMaterial({
            color: "#E4D9BE",
            metalness: 0.02,
            roughness: 0.6,
          });
    const s = scene.clone(true);
    s.traverse((o) => {
      if ((o as THREE.Mesh).isMesh) (o as THREE.Mesh).material = mat;
    });
    return s;
  }, [scene, variant]);

  const wire = useMemo(() => {
    if (variant !== "digital") return null;
    const mat = new THREE.MeshBasicMaterial({
      color: "#D4AF37",
      wireframe: true,
      transparent: true,
      opacity: 0.13,
    });
    const s = scene.clone(true);
    s.traverse((o) => {
      if ((o as THREE.Mesh).isMesh) (o as THREE.Mesh).material = mat;
    });
    return s;
  }, [scene, variant]);

  return (
    <group>
      <primitive object={solid} />
      {wire && <primitive object={wire} scale={1.003} />}
    </group>
  );
}

useGLTF.preload("/models/skull.glb");
