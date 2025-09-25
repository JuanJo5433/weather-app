import "./globals.css";
import { DM_Sans, Bricolage_Grotesque } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-bricolage",
});

export const metadata = {
  title: "Weather App",
  description: "web application for viewing weather information",
   icons: {
    icon: "/images/favicon-32x32.png", 
  },
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="es" className={`${dmSans.variable} ${bricolage.variable}`}>
      <body>{children}</body>
    </html>
  );
}
