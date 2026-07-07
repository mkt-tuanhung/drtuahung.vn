import type { Metadata } from "next";
import { Playfair_Display, Cinzel, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  variable: "--font-playfair",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin", "vietnamese"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Thẩm Mỹ Dr Tuấn Hùng — Hồ Sơ Năng Lực & Hợp Tác Y Khoa",
  description:
    "Thẩm mỹ Dr Tuấn Hùng — Bác sĩ nội trú ngoại khoa. Phẫu thuật hàm mặt chuyên sâu, kỹ thuật độc quyền nâng ngực không đặt ống dẫn lưu. Chuẩn y khoa, pháp lý minh bạch.",
  keywords: [
    "Dr Tuấn Hùng",
    "thẩm mỹ",
    "phẫu thuật hàm mặt",
    "nâng ngực không dẫn lưu",
    "bác sĩ nội trú",
  ],
  openGraph: {
    title: "Thẩm Mỹ Dr Tuấn Hùng",
    description:
      "Hồ sơ năng lực & thông tin hợp tác y khoa — Phẫu thuật hàm mặt, thẩm mỹ vóc dáng chuẩn y khoa.",
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${cinzel.variable} ${montserrat.variable} font-sans bg-noir-950 text-cream antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
