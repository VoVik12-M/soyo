"use client";

import Header from "./components/Header";
import Hom from "./components/Hom";
import Pidval from "./components/Pidval";
import Stuli from "./components/Stuli";
import China from "./components/China";
import Rozklad from "./components/Rozklad";
import Pedagogu from "./components/Pedagogu";
import Zal from "./components/Zal";

import {useState } from "react";

export default function Home() {
  const [hom, setHom] = useState(true);
  const [stuli, setStuli] = useState(false);
  const [pedagogu, setPedagogu] = useState(false);
  const [rozklad, setRozklad] = useState(false);
  const [zal, setZal] = useState(false);
  const [china, setChina] = useState(false);


  return (
    <div className="Osnova">
        <Header setHom={setHom} setStuli={setStuli} setPedagogu={setPedagogu} setRozklad={setRozklad} setZal={setZal} setChina={setChina}/>
        { hom? <Hom /> : null }
        { stuli? <Stuli /> : null }
        { pedagogu? <Pedagogu /> : null }
        { rozklad? <Rozklad /> : null }
        { zal? <Zal /> : null }
        { china? <China /> : null }
        <Pidval />
    </div>
  );
}
