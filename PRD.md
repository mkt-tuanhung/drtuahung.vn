# PRD — WEBSITE PREMIUM THẨM MỸ DR TUẤN HÙNG
### Phong cách: Digital Art · Animation 3D · Tương tác kéo–thả
> **Phiên bản:** 1.0 — 07/07/2026
> **Domain:** drtuanhung.vn · **Repo:** `mkt-tuanhung/drtuahung.vn`
> **Concept nghệ thuật:** *"Giải phẫu là nền tảng — Điêu khắc là đích đến"* — Xương hàm mặt (mô hình 3D cấu trúc xương giải phẫu) ⟷ Body (điêu khắc cổ điển, tượng thạch anh/cẩm thạch phong cách Trung Cổ – Phục Hưng).

---

## 1. TỔNG QUAN & MỤC TIÊU

| Hạng mục | Chi tiết |
|---|---|
| Loại sản phẩm | Landing Page premium một trang (one-page, anchor scroll) |
| Đối tượng | Đối tác y khoa, khách hàng cao cấp |
| Mục tiêu chuyển đổi | Form "Gửi Yêu Cầu Đồng Hành" + Hotline + Sticky CTA mobile |
| KPI trải nghiệm | LCP < 2.5s · Trang tải đủ 3D < 4s trên 4G · 60fps animation desktop |
| Ngôn ngữ | Tiếng Việt (chuẩn bị sẵn cấu trúc để thêm EN sau) |

**Điểm khác biệt (USP về mặt giao diện):** website thẩm mỹ đầu tiên tại VN dùng **mô hình 3D xương sọ – hàm mặt tương tác thật** (kéo xoay bằng chuột/chạm) để chứng minh chiều sâu giải phẫu của bác sĩ, kết hợp **tượng điêu khắc 3D cổ điển** thể hiện triết lý "điêu khắc cơ thể".

---

## 2. HỆ THỐNG THIẾT KẾ (DESIGN SYSTEM)

### 2.1 Màu sắc
| Vai trò | Mã màu | Ghi chú |
|---|---|---|
| Nền chính | `#061D18 → #0C2D26` | Gradient teal sẫm, chiều sâu "đá cẩm thạch tối" |
| Vàng kim (accent) | `#C5A059` / `#D4AF37` | Tiêu đề, CTA, viền, wireframe 3D |
| Chữ nội dung | `#F9F6F0` (cream) | Không dùng trắng tinh |
| Chữ mô tả | `#8A9A96` | Muted xanh xám |

### 2.2 Typography
- **Headings:** Playfair Display (serif, uppercase, letter-spacing rộng)
- **Logo / eyebrow labels:** Cinzel
- **Body:** Montserrat, ≥16px, line-height 1.7
- Nạp qua `next/font/google` (tự host, không FOUT)

### 2.3 Motion
- Fade-in-up khi cuộn (Framer Motion `whileInView`)
- Card hover: viền phát sáng vàng kim + `scale 1.02`
- 3D: auto-rotate chậm + kéo xoay tự do + float nhẹ (drei `<Float>`)
- Hạt bụi vàng lơ lửng (drei `<Sparkles>`) tạo chất Digital Art

---

## 3. KIẾN TRÚC KỸ THUẬT

```
Next.js 15 (App Router, TypeScript)
├── TailwindCSS 3.4          → design system, responsive
├── Framer Motion 12         → animation 2D, scroll reveal
├── three.js 0.180           → engine 3D
├── @react-three/fiber 9     → React renderer cho three.js
├── @react-three/drei 10     → OrbitControls, Float, Sparkles, useGLTF…
└── API Route /api/lead      → nhận form đăng ký (nối CRM/Google Sheets sau)
```

**Vì sao chọn stack này thay vì lựa chọn khác:**
- ✅ **React Three Fiber (R3F)**: chuẩn công nghiệp cho 3D trong React, SSR-safe, tree-shaking tốt. (Thay thế: Babylon.js — nặng hơn, ít hệ sinh thái React; Spline — đẹp nhưng khoá vendor, khó tuỳ biến sâu.)
- ✅ **GLB + KHR_mesh_quantization**: three.js đọc **trực tiếp không cần decoder ngoài** (Draco cần tải thêm ~300KB wasm). Model skull của ta chỉ 1.05MB.
- ✅ Canvas 3D được `dynamic import (ssr: false)` + lazy mount khi cuộn tới → không chặn LCP.

---

## 4. PIPELINE ĐỒ HOẠ 3D ⭐ (PHẦN QUAN TRỌNG NHẤT)

### 4.1 Tài sản 3D ĐÃ tích hợp sẵn trong phiên bản này (P0)

| Model | File | Nguồn & giấy phép | Dùng cho |
|---|---|---|---|
| **Xương sọ người** (42.000 đỉnh, giải phẫu đúng) | `public/models/skull.glb` (1.05MB) | BabylonJS Official Assets (open-source, dùng miễn phí) — đã convert Babylon→glTF, chuẩn hoá tâm/tỷ lệ, nén quantize | Hero 3D + Section Phẫu thuật Hàm Mặt |
| **Tượng đầu người 3D-scan** (9.300 đỉnh) | `public/models/bust.glb` (400KB) | Three.js official examples (Lee Perry-Smith head scan, Infinite Realities — CC) — phủ chất liệu cẩm thạch trong code | Section Body Art / Điêu khắc |

> ⚠️ **Lưu ý pháp lý:** 2 model trên hợp lệ cho demo/MVP. Trước khi chạy quảng cáo lớn, nên thay bằng model **tự tạo bằng AI** (mục 4.2) hoặc mua bản quyền — tôi đã thiết kế code để **chỉ cần thả file .glb mới vào `public/models/` là thay được**, không sửa code.

### 4.2 AI tạo đồ hoạ 3D — khuyến nghị cụ thể (P1, bạn & tôi cùng làm)

| Công cụ | Điểm mạnh | Giá | Cách dùng cho dự án |
|---|---|---|---|
| **Meshy.ai** ⭐ khuyên dùng | Text→3D & Image→3D, xuất GLB/FBX, **có REST API** để tự động hoá | Free 200 credits/tháng; Pro ~$20/tháng | Prompt: *"medieval marble bust sculpture, renaissance style, female torso, museum quality, PBR"* → tải GLB → thả vào `public/models/` |
| **Tripo3D** (tripo3d.ai) | Nhanh (~30s/model), chất lượng mesh tốt, có API | Free tier + trả phí | Tạo biến thể tượng điêu khắc body |
| **Luma AI Genie** | Miễn phí qua Discord, chất lượng khá | Free | Prototype nhanh |
| **Rodin / Hyper3D** | Chất lượng cao nhất cho tượng người | Trả phí | Bản final nếu cần độ chi tiết cao |

**Việc bạn cần làm ở P1:** đăng ký 1 tài khoản Meshy.ai (hoặc đưa tôi API key qua biến môi trường `MESHY_API_KEY`) — tôi sẽ viết script gọi API tạo model tự động.

### 4.3 Nguồn model quét thật (thay thế/bổ sung AI)

- **Sketchfab** (sketchfab.com) — lọc giấy phép CC: tìm *"human skull anatomy"*, *"medieval sculpture"*, *"renaissance bust"* → tải GLB trực tiếp.
- **Smithsonian Open Access 3D** (3d.si.edu) — tượng & hiện vật bảo tàng, CC0 (miễn phí tuyệt đối, dùng thương mại được).
- **Scan the World / MyMiniFactory** — kho scan tượng cổ điển châu Âu lớn nhất (David, Venus de Milo…), phi thương mại → chỉ dùng tham khảo.
- **Z-Anatomy / BodyParts3D** — model giải phẫu y khoa chuẩn, license CC-BY-SA — phù hợp nếu muốn tách riêng **xương hàm dưới (mandible)**, xương gò má.

### 4.4 Quy trình Blender (khi cần chỉnh sửa model)

Blender **không bắt buộc** cho MVP (đã có pipeline convert tự động), nhưng cần khi: tách xương hàm khỏi sọ, sửa lỗi mesh AI, làm animation tách–ghép xương. Quy trình chuẩn:

```
1. Import  : File → Import → glTF 2.0 (.glb)
2. Giảm nét: Modifier "Decimate" (ratio 0.3–0.5, giữ < 100k tris)
3. Tách hàm: Edit Mode → chọn vùng mandible → P (Separate) → đặt tên "jaw"
             → cho phép animation há/khép hàm trong code
4. Vật liệu: Shading → Principled BSDF (Metallic 0.9 + Roughness 0.3 cho vàng kim,
             hoặc Roughness 0.35 + Subsurface nhẹ cho cẩm thạch)
5. Export  : File → Export → glTF 2.0, chọn: +Y Up, Apply Modifiers, không nén
6. Nén     : npx @gltf-transform/cli optimize input.glb output.glb
             --compress quantize --texture-compress webp
   (mục tiêu: < 1.5MB/model)
```

### 4.5 Hiệu ứng "Digital Art" thực hiện bằng code (không cần asset)

| Hiệu ứng | Kỹ thuật | Trạng thái |
|---|---|---|
| Skull vàng kim wireframe overlay | 2 mesh chồng nhau: solid teal sẫm + wireframe gold 15% opacity | ✅ P0 |
| Bụi vàng lơ lửng | drei `<Sparkles>` màu `#D4AF37` | ✅ P0 |
| Trôi nổi nhẹ | drei `<Float>` | ✅ P0 |
| Kéo xoay tương tác | `OrbitControls` (khoá zoom/pan, auto-rotate) | ✅ P0 |
| Camera tour vùng hàm mặt | Nút bấm → camera lerp tới vùng hàm dưới/gò má | ✅ P0 |
| Chất liệu cẩm thạch tượng | `MeshPhysicalMaterial` clearcoat + roughness map | ✅ P0 |
| Bloom/God-rays quanh model | `@react-three/postprocessing` | 🔜 P1 (cân nhắc hiệu năng) |
| Animation há hàm khi cuộn | Cần tách mandible trong Blender (mục 4.4) | 🔜 P1 |
| Morph xương → khuôn mặt hoàn thiện | Cần 2 model đồng topology (làm bằng Blender Shrinkwrap) | 🔜 P2 |

---

## 5. CẤU TRÚC TRANG & TÍNH NĂNG TỪNG SECTION

| # | Section (anchor) | Nội dung (theo đặc tả gốc) | Tính năng 3D/Animation |
|---|---|---|---|
| 1 | Header (fixed) | Logo `T \| Dr TUẤN HÙNG`, 5 menu anchor, CTA vàng glow | Backdrop blur, panel mobile trượt |
| 2 | Hero `#top` | H1 Hồ sơ năng lực, khung thương hiệu, 3 metrics đếm số | **Skull 3D kéo xoay tự do**, sparkles vàng, mũi tên cuộn |
| 3 | Lãnh đạo `#leadership` | 01/ Định hướng phát triển + chân dung khung vàng | Fade-up, ảnh placeholder shimmer |
| 4 | Dịch vụ `#services` | 02/ 2 cột: **Hàm Mặt** & **Vóc Dáng** | **Skull 3D thứ 2 (chất liệu xương) + 3 nút camera tour: Toàn cảnh / Hàm dưới / Gò má** |
| 5 | Kỹ thuật `#technique` | Nâng ngực không dẫn lưu — 3 cột ưu điểm | Icon SVG phát quang vàng khi hover |
| 6 | Pháp lý `#compliance` | 03/ Minh bạch vận hành | Icon khiên, thiết kế tối giản |
| 7 | Cam kết `#commitments` | 04/ 4 thẻ giá trị cốt lõi (grid 2×2) | Hover viền kim + scale 1.02 |
| 8 | Triết lý `#philosophy` | Body Art + Cấy mông (2 khối quote nghệ thuật) | **Tượng điêu khắc 3D cẩm thạch trên bệ đá, xoay chậm, kéo được** |
| 9 | Thư viện `#gallery` | Masonry ảnh mẫu (váy ren kem, sườn xám ngọc lục bảo) | Placeholder shimmer chờ ảnh thật |
| 10 | Footer `#contact` | THANK YOU + form lead + thông tin liên hệ | Input viền vàng nền tối, POST `/api/lead` |
| — | Sticky CTA | Nút đặt lịch cố định góc dưới (mobile) | Glow nhẹ |

---

## 6. LỘ TRÌNH TRIỂN KHAI

### ✅ P0 — Hôm nay (tôi làm, đã xong trong commit này)
- Scaffold Next.js 15 + Tailwind + R3F
- Convert & tích hợp 2 model 3D (skull + bust)
- Dựng đủ 10 section, copywriting đúng đặc tả gốc 100%
- 3 khối 3D tương tác + toàn bộ animation 2D
- Form lead + API route + responsive mobile + SEO metadata

### 🔜 P1 — Tuần này (bạn + tôi)
| Việc | Ai làm |
|---|---|
| Cung cấp ảnh thật (chân dung, phòng mổ, kết quả, mẫu) → thay placeholder | **Bạn** |
| Tài khoản Meshy.ai / Tripo3D (hoặc chọn model Sketchfab bạn thích) | **Bạn** |
| Tạo tượng điêu khắc body AI (torso cổ điển) thay bust demo | Tôi (khi có key) |
| Tách xương hàm dưới trong Blender → animation há hàm khi cuộn | Tôi |
| Nối form về Google Sheets / Zalo OA / CRM | Tôi (bạn chọn kênh) |
| Deploy Vercel + gắn domain drtuanhung.vn | Tôi (bạn trỏ DNS) |

### 🔮 P2 — Nâng cao
- Bloom post-processing, morph xương→mặt, chế độ so sánh trước/sau bằng slider 3D
- Đa ngôn ngữ EN, blog y khoa chuẩn SEO, đo lường GA4 + Meta Pixel

---

## 7. QUYẾT ĐỊNH CẦN BẠN XÁC NHẬN
1. **Kênh nhận lead:** Google Sheets, email, Zalo hay CRM nào?
2. **AI 3D:** đồng ý dùng Meshy.ai (free tier đủ cho ~10 model/tháng)?
3. **Ảnh thật:** gửi qua repo (thư mục `public/images/`) hay link Drive?
4. **Hosting:** Vercel (khuyên dùng, free SSL, deploy tự động từ GitHub)?
