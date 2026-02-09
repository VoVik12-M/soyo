"use client";

import { useRef, useState } from "react";

export default function Header() {
    const viasan = "(Віасан)"

    // const[efe, setEfe] = useState(false);

    const efect1 = useRef();

    function myclik() {
        efect1.current.classList.toggle("efectu2");
    }

    function myclik2() {
        efect1.current.classList.toggle("efectu2");
    }

    return (
        <div className="Header">
            <div className="Face">
                <div className="block_1">
                    <div className="media">
                        <img src='/logo_yellow/home_yellow.png' alt="logo"/>
                        <img src='/logo_yellow/instagram_yellow.png' alt="logo"/>
                        <img src='/logo_yellow/telegram_yellow.png' alt="logo"/>
                        <img src='/logo_yellow/tik-tok_yellow.png' alt="logo"/>
                    </div>
                    <div className="adresa">
                        <div>
                            <p>м. Тернопіль</p>
                            <p>вул. Медова 12</p>
                            <p>{viasan}</p>
                        </div>
                    </div>
                </div>
                <div className="block_2">
                    <div>
                        <img src='/img/Logo.png' alt="logo"/>
                        {/* <Image src='/public/img/Logo.png' alt="logo" width={200} height={200}/> */}
                    </div>
                    <div>
                        <a className="knopka1" onMouseEnter={myclik} onMouseLeave={myclik2} href="https://www.youtube.com/watch?v=k8svrGotYfE">
                            <span ref={efect1} className="efectu"></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            СТИЛІ
                        </a>
                        <a href="">ПЕДАГОГИ</a>
                        <a href="">РОЗКЛАД</a>
                        <a href="">ЗАЛ</a>
                        <a href="">ЦІНИ</a>
                    </div>
                </div>
                <div className="block_3">
                    <div>
                        <p>Назар:</p>
                        <p>+380980466115</p>
                    </div>
                    <div>
                        <p>Катя:</p>
                        <p>+380982402674</p>
                    </div>
                </div>
            </div>
        </div>
    );
}