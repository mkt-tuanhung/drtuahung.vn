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

## Thay ảnh thật

Placeholder shimmer nằm ở các component gọi `<ImagePlaceholder>`. Thả ảnh vào `public/images/` rồi thay bằng `<Image>` của Next.js.

## Form lead

Form footer POST về `/api/lead` (`src/app/api/lead/route.ts`) — hiện log server, chờ chọn kênh CRM/Google Sheets để nối (PRD mục 7).
