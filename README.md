# drtuanhung.vn — Website Premium Thẩm Mỹ Dr Tuấn Hùng

Landing page phong cách **Digital Art / Animation 3D** — mô hình xương sọ hàm mặt 3D tương tác (kéo xoay) + tượng điêu khắc cẩm thạch 3D thể hiện triết lý điêu khắc cơ thể.

📋 **Đọc [PRD.md](./PRD.md)** để xem đầy đủ đặc tả, pipeline đồ hoạ 3D, danh sách thư viện/AI tools và lộ trình triển khai.

## Chạy dự án

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build production
```

## Stack

- Next.js 15 (App Router, TypeScript) + TailwindCSS
- three.js + @react-three/fiber + @react-three/drei (đồ hoạ 3D)
- framer-motion (animation cuộn trang)

## Cấu trúc đồ hoạ 3D

| File | Vai trò |
|---|---|
| `public/models/skull.glb` | Xương sọ giải phẫu (Hero + section Hàm Mặt) — thay model chỉ cần ghi đè file |
| `public/models/bust.glb` | Tượng điêu khắc (section Body Art) — thay bằng model AI (Meshy/Tripo3D) khi có |
| `src/components/three/` | Toàn bộ scene 3D: HeroSkullCanvas, JawExplorerCanvas, SculptureCanvas |

## Ảnh thật — ĐÃ tích hợp đầy đủ (17 ảnh)

Toàn bộ ảnh do đối tác cung cấp, đã nén tối ưu (44–191KB/ảnh) trong `public/images/`.
Muốn thay ảnh nào: ghi đè file cùng tên → push. Muốn thêm vị trí mới: sửa component tương ứng.

| Tên file | Vị trí trên web |
|---|---|
| `chan-dung-dr-tuan-hung.jpg` | Lãnh đạo chuyên môn (đã crop 3:4, nền đen) |
| `ekip-phau-thuat.jpg`, `tu-van-ipad.jpg` | Dịch vụ mũi nhọn |
| `phau-thuat-tap-trung.jpg` | Nền chìm section Kỹ thuật đột phá |
| `ket-qua-body-art.jpg`, `ket-qua-cay-mong.jpg` | Triết lý sắc đẹp |
| `mau-vay-ren-kem.jpg`, `mau-suon-xam.jpg`, `mau-vest-do.jpg`, `mau-cuc-hoa-mi.jpg`, `mau-vay-vang.jpg` | Thư viện — chân dung mẫu |
| `ket-qua-nang-nguc.jpg`, `ket-qua-got-ham-truot-cam.jpg`, `ket-qua-got-ham-ha-go-ma.jpg` | Thư viện — kết quả |
| `kham-lam-sang.jpg`, `tham-kham-truc-tiep.jpg`, `phong-kham.jpg` | Thư viện — chuyên môn & cơ sở |

## Form lead → CRM

Form footer POST về `/api/lead`, tự chuyển tiếp lead sang CRM qua biến môi trường `CRM_WEBHOOK_URL` (+ `CRM_API_KEY` nếu cần) — xem `.env.example`. Chưa cấu hình thì lead ghi ở log server (Vercel → Logs), không mất dữ liệu.

## Deploy

Xem **[DEPLOY.md](./DEPLOY.md)** — hướng dẫn từng bước đưa web lên Vercel + trỏ domain drtuanhung.vn.
