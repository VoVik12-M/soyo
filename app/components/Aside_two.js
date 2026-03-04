"use client";

import { useRef, useState } from "react";

import News_one from "./Nowunu/New_one";
import New_two from "./Nowunu/New_two";
import New_three from "./Nowunu/New_three";
import New_four from "./Nowunu/New_four";
import New_five from "./Nowunu/New_five";

export default function AsideTwo() {
    const[news1, setNews1] = useState(false);
    const[news2, setNews2] = useState(false);
    const[news3, setNews3] = useState(false);
    const[news4, setNews4] = useState(false);
    const[news5, setNews5] = useState(false);

    return (
        <div className="AsideTwo">
            <p>Новини та акції</p>
            <div className="NovunuAkchii">
                <div onClick={()=>setNews1(true)}>
                    <span
                        className={news1? "new" : "del"}
                        onClick={(e)=>{
                            e.stopPropagation();
                            setNews1(false);
                        }}>
                            <img src="/img/photo_new1.png" alt="new1"/>
                            <News_one />
                        </span>
                </div>
                <div onClick={()=>setNews2(true)}>
                <span
                    className={news2? "new" : "del"}
                    onClick={(e)=>{
                        e.stopPropagation();
                        setNews2(false);
                    }}>
                        <img src="/img/photo_new2.png" alt="new2"/>
                        <New_two />
                    </span>
                </div>
                <div onClick={()=>setNews3(true)}>
                <span
                    className={news3? "new" : "del"}
                    onClick={(e)=>{
                        e.stopPropagation();
                        setNews3(false);
                    }}>
                        <img src="/img/photo_new3.png" alt="new3"/>
                        <New_three />
                    </span>
                </div>
                <div onClick={()=>setNews4(true)}>
                <span
                    className={news4? "new" : "del"}
                    onClick={(e)=>{
                        e.stopPropagation();
                        setNews4(false);
                    }}>
                        <img src="/img/photo_new4.png" alt="new4"/>
                        <New_four />
                    </span>
                </div>
                <div onClick={()=>setNews5(true)}>
                <span
                    className={news5? "new" : "del"}
                    onClick={(e)=>{
                        e.stopPropagation();
                        setNews5(false);
                    }}>
                        <img src="/img/photo_new5.png" alt="new5"/>
                        <New_five />
                    </span>
                </div>
            </div>
            <div className="Akchia">
                <p>Акція</p>
                <p>Для всіх військових діє знижка 20% на абонементи.</p>
            </div>
        </div>
    );
}