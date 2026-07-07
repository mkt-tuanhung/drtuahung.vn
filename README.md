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

## Thay ảnh thật — KHÔNG cần sửa code

Thả file ảnh (JPG, tối ưu < 500KB/ảnh) vào thư mục `public/images/` với **đúng tên** dưới đây → push → ảnh tự thay shimmer:

| Tên file | Vị trí trên web | Nội dung ảnh |
|---|---|---|
| `chan-dung-dr-tuan-hung.jpg` | Lãnh đạo chuyên môn | Chân dung Dr. Tuấn Hùng (dọc 3:4) |
| `ekip-phau-thuat.jpg` | Dịch vụ mũi nhọn | Ekip trong phòng mổ (ngang) |
| `tu-van-ipad.jpg` | Dịch vụ mũi nhọn | Bác sĩ tư vấn vẽ form ngực bằng iPad (ngang) |
| `ket-qua-body-art.jpg` | Triết lý — Body Art | Vùng bụng thon gọn (ngang 16:9) |
| `ket-qua-cay-mong.jpg` | Triết lý — Cấy mông | Kết quả + phác thảo y khoa (ngang 4:3) |
| `mau-vay-ren-kem.jpg` | Thư viện | Mẫu váy ren kem (dọc 3:4) |
| `mau-suon-xam.jpg` | Thư viện | Mẫu sườn xám xanh ngọc + ô giấy dầu (dọc 3:4) |
| `ket-qua-nang-nguc.jpg` | Thư viện | Kết quả nâng ngực không dẫn lưu (vuông) |
| `ket-qua-voc-dang.jpg` | Thư viện | Khách sau điêu khắc vóc dáng (dọc 3:4) |
| `kham-lam-sang.jpg` | Thư viện | Bác sĩ khám lâm sàng (vuông) |
| `phong-kham.jpg` | Thư viện | Không gian phòng khám (dọc 3:4) |

## Form lead → CRM

Form footer POST về `/api/lead`, tự chuyển tiếp lead sang CRM qua biến môi trường `CRM_WEBHOOK_URL` (+ `CRM_API_KEY` nếu cần) — xem `.env.example`. Chưa cấu hình thì lead ghi ở log server (Vercel → Logs), không mất dữ liệu.

## Deploy

Xem **[DEPLOY.md](./DEPLOY.md)** — hướng dẫn từng bước đưa web lên Vercel + trỏ domain drtuanhung.vn.
