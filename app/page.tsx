import { K7v2Topbar } from "@/components/k7v2-topbar";
import { K7v2Drawer } from "@/components/k7v2-drawer";
import { K7v2Hero } from "@/components/k7v2-hero";
import { K7v2Ticker } from "@/components/k7v2-ticker";
import { K7v2Promos } from "@/components/k7v2-promos";
import { K7v2Catbar } from "@/components/k7v2-catbar";
import { K7v2Article } from "@/components/k7v2-article";
import { K7v2Footer } from "@/components/k7v2-footer";

export default function Page() {
  return (
    <main className="k7v2-page">
      <K7v2Topbar />
      <K7v2Drawer />
      <K7v2Hero />
      <K7v2Ticker />
      <K7v2Promos />
      <K7v2Catbar />
      <K7v2Article />
      <K7v2Footer />
    </main>
  );
}
