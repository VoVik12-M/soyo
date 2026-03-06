import Header from "./components/Header";
import Hom from "./components/Hom";
import Pidval from "./components/Pidval";
import Stuli from "./components/Stuli";
import China from "./components/China";
import Rozklad from "./components/Rozklad";
import Pedagogu from "./components/Pedagogu";
import Zal from "./components/Zal";

export default function Home() {
  return (
    <div className="Osnova">
        <Header />
        {/* <Hom /> */}
        {/* <Stuli /> */}
        <Pedagogu />
        {/* <Rozklad /> */}
        {/* <Zal /> */}
        {/* <China /> */}
        <Pidval />
    </div>
  );
}
