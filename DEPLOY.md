# HƯỚNG DẪN DEPLOY — drtuanhung.vn lên Vercel

> Thời gian thực hiện: ~15 phút. Miễn phí (gói Hobby của Vercel đủ dùng cho landing page).

## Bước 1 — Tạo project trên Vercel

1. Truy cập **https://vercel.com/signup** → chọn **Continue with GitHub** (đăng nhập bằng tài khoản GitHub `mkt-tuanhung`).
2. Bấm **Add New… → Project** → chọn repo **`mkt-tuanhung/drtuahung.vn`** → **Import**.
3. Vercel tự nhận diện Next.js — giữ nguyên mọi thiết lập mặc định.
4. Mở **Settings → Git → Production Branch**: đặt thành `claude/3d-anatomy-sculpture-site-t6jbkr`
   (hoặc sau này merge code vào nhánh `main` thì để `main`).
5. Bấm **Deploy** → chờ ~2 phút → website chạy tại `https://<tên-project>.vercel.app`.

## Bước 2 — Nối lead về CRM nội bộ (Supabase của hệ thống Dr Tuấn Hùng App)

**2a. Tạo bảng nhận lead (làm 1 lần):**
1. Mở **Supabase Dashboard** của hệ thống nội bộ → **SQL Editor**
2. Dán toàn bộ nội dung file `supabase/website_leads.sql` (trong repo `Dr-Tuan-Hung---App`) → **Run**

**2b. Khai báo biến môi trường trên Vercel** (Settings → Environment Variables):

| Tên | Lấy ở đâu |
|---|---|
| `SUPABASE_URL` | Supabase Dashboard → Settings → API → Project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase Dashboard → Settings → API → `service_role` ⚠️ giữ kín |

Sau khi thêm biến → **Deployments → Redeploy** để áp dụng.
Lead từ form sẽ ghi thẳng vào bảng `website_leads` — nhân sự đăng nhập app nội bộ là thấy.
Khi chưa cấu hình, lead vẫn được ghi ở **Vercel → Logs** (không mất dữ liệu).

## Bước 3 — Trỏ domain drtuanhung.vn

1. Trong project Vercel → **Settings → Domains** → nhập `drtuanhung.vn` → **Add**
   (thêm luôn `www.drtuanhung.vn`, Vercel sẽ tự redirect về bản chính).
2. Đăng nhập trang quản trị tên miền (nơi mua domain: Mắt Bão / PA Việt Nam / iNET / Nhân Hoà…),
   vào phần **quản lý DNS** và tạo 2 bản ghi:

| Loại | Host/Name | Giá trị |
|---|---|---|
| **A** | `@` | `76.76.21.21` |
| **CNAME** | `www` | `cname.vercel-dns.com` |

3. Chờ DNS lan truyền (5 phút – 2 giờ). Vercel tự cấp **SSL (https) miễn phí** khi DNS trỏ đúng.
4. Kiểm tra: mở `https://drtuanhung.vn` — thấy trang hero xương sọ 3D là thành công.

## Từ nay về sau

- Mỗi lần push code lên nhánh production → Vercel **tự động deploy** bản mới.
- Thả ảnh thật vào `public/images/` (đúng tên file trong README) → push → ảnh tự hiện thay shimmer.
- Thay model 3D: ghi đè `public/models/skull.glb` hoặc `bust.glb` → push.

## Sự cố thường gặp

| Hiện tượng | Cách xử lý |
|---|---|
| Domain báo "Invalid Configuration" | Kiểm tra lại bản ghi A/CNAME, xoá bản ghi A/AAAA cũ trỏ nơi khác |
| Form gửi không về CRM | Xem Vercel → Logs, tìm dòng `[LEAD][CRM_ERROR]` |
| Build fail trên Vercel | Vercel dùng Node 20+ mặc định — không cần chỉnh; gửi log cho Claude |
