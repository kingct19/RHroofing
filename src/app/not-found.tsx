import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { NotFoundView } from "@/components/layout/NotFoundView";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="min-w-0 flex-1">
        <NotFoundView />
      </main>
      <Footer />
    </div>
  );
}
