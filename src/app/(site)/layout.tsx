import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main id="main-content" className="min-w-0 flex-1">{children}</main>
      <Footer />
    </div>
  );
}
