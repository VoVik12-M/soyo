import Header from "./components/Header";
import Hom from "./components/Hom";
import Pidval from "./components/Pidval";
import Stuli from "./components/Stuli";
import China from "./components/China";

export default function Home() {
  return (
    <div className="Osnova">
        <Header />
        {/* <Hom /> */}
        {/* <Stuli /> */}
        <China />
        <Pidval />
    </div>
  );
}
