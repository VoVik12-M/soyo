"use client";

import { useRef, useState } from "react";

export default function AsideTwo() {
    const[news1, setNews1] = useState(false);

    return (
        <div className="AsideTwo">
            <p>Новини та акції</p>
            <div className="NovunuAkchii">
                <div onClick={()=>setNews1(true)}>
                    <span
                        className={news1? "new1" : ""}
                        onClick={(e)=>{
                            e.stopPropagation();
                            setNews1(false);
                        }}></span>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="Akchia">
                <p>Акція</p>
                <p>Для всіх військових діє знижка 20% на абонементи.</p>
            </div>
        </div>
    );
}