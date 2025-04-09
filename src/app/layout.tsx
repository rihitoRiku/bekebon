import { inter } from "@/lib/fonts";
import "./globals.css";
import { AOSInitializer } from "@/components/providers/AOSProvider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export { metadata } from "@/lib/metadata";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <AOSInitializer />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
