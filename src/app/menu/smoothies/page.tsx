// app/page.tsx
import SmoothiesMenu from "./components/SmoothiesMenu";
import StickyMenu from "../../components/StickyMenu";


export default function Home() {
  return (
    <main>
      <SmoothiesMenu />
      <StickyMenu />
    </main>
  );
}