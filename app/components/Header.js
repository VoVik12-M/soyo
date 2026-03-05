"use client";

import { useRef, useState } from "react";
import FacePhone from "./FacePhone";

export default function Header() {
    const viasan = "(Віасан)";
    const [posul, setPosul] = useState(false);
    const [posul2, setPosul2] = useState(false);
    const [posul3, setPosul3] = useState(false);
    const [posul4, setPosul4] = useState(false);

    // Картинки
    // Жовті
    const homeY = "/logo_yellow/home_yellow.png";
    const instagramY = "/logo_yellow/instagram_yellow.png";
    const telegramY = "/logo_yellow/telegram_yellow.png";
    const tik_tokY ="/logo_yellow/tik-tok_yellow.png";
    // Сірі
    const homeG = "/logo_grey/home_grey.png";
    const instagramG = "/logo_grey/instagram_grey.png";
    const telegramG = "/logo_grey/telegram_grey.png";
    const tik_tokG ="/logo_grey/tik-tok_grey.png";

    // Посилання
    const instagram_a = "https://www.instagram.com/soy_yo_dance?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
    const tik_tok_a = "https://www.tiktok.com/@soy_yo_dance?_r=1&_t=ZS-93o8MEBAKNI"

    // Для кнопки СТИЛІ
    const ef_top = useRef();
    const ef_right = useRef();
    const ef_bottom = useRef();
    const ef_left = useRef();

    function efectu() {
        ef_top.current.classList.toggle("Top");
        ef_right.current.classList.toggle("Right");
        ef_bottom.current.classList.toggle("Bottom");
        ef_left.current.classList.toggle("Left");
    }

    function efectudel() {
        ef_top.current.classList.remove("Top");
        ef_right.current.classList.remove("Right");
        ef_bottom.current.classList.remove("Bottom");
        ef_left.current.classList.remove("Left");
    }
    // Для кнопки ПЕДАГОГИ
    const ef_top_2 = useRef();
    const ef_right_2 = useRef();
    const ef_bottom_2 = useRef();
    const ef_left_2 = useRef();

    function efectu2() {
        ef_top_2.current.classList.toggle("Top2");
        ef_right_2.current.classList.toggle("Right2");
        ef_bottom_2.current.classList.toggle("Bottom2");
        ef_left_2.current.classList.toggle("Left2");
    }

    function efectu2del() {
        ef_top_2.current.classList.remove("Top2");
        ef_right_2.current.classList.remove("Right2");
        ef_bottom_2.current.classList.remove("Bottom2");
        ef_left_2.current.classList.remove("Left2");
    }

    // Для кнопки РОЗКЛАД
    const ef_top_3 = useRef();
    const ef_right_3 = useRef();
    const ef_bottom_3 = useRef();
    const ef_left_3 = useRef();

    function efectu3() {
        ef_top_3.current.classList.toggle("Top3");
        ef_right_3.current.classList.toggle("Right3");
        ef_bottom_3.current.classList.toggle("Bottom3");
        ef_left_3.current.classList.toggle("Left3");
    }

    function efectu3del() {
        ef_top_3.current.classList.remove("Top3");
        ef_right_3.current.classList.remove("Right3");
        ef_bottom_3.current.classList.remove("Bottom3");
        ef_left_3.current.classList.remove("Left3");
    }

    // Для кнопки ЗАЛ
    const ef_top_4 = useRef();
    const ef_right_4 = useRef();
    const ef_bottom_4 = useRef();
    const ef_left_4 = useRef();

    function efectu4() {
        ef_top_4.current.classList.toggle("Top4");
        ef_right_4.current.classList.toggle("Right4");
        ef_bottom_4.current.classList.toggle("Bottom4");
        ef_left_4.current.classList.toggle("Left4");
    }

    function efectu4del() {
        ef_top_4.current.classList.remove("Top4");
        ef_right_4.current.classList.remove("Right4");
        ef_bottom_4.current.classList.remove("Bottom4");
        ef_left_4.current.classList.remove("Left4");
    }

    // Для кнопки ЦІНИ
    const ef_top_5 = useRef();
    const ef_right_5 = useRef();
    const ef_bottom_5 = useRef();
    const ef_left_5 = useRef();

    function efectu5() {
        ef_top_5.current.classList.toggle("Top5");
        ef_right_5.current.classList.toggle("Right5");
        ef_bottom_5.current.classList.toggle("Bottom5");
        ef_left_5.current.classList.toggle("Left5");
    }

    function efectu5del() {
        ef_top_5.current.classList.remove("Top5");
        ef_right_5.current.classList.remove("Right5");
        ef_bottom_5.current.classList.remove("Bottom5");
        ef_left_5.current.classList.remove("Left5");
    }

    return (
        <div className="Header">
            <FacePhone />
            <div className="Face">
                <div className="Adresa">
                    <div>
                        <p>м. Тернопіль</p>
                        <p>вул. Медова 12</p>
                        <p>{viasan}</p>
                    </div>
                </div>
                <div className="Nomeru">
                    <div>
                        <p>Назар:</p>
                        <p>+380980466115</p>
                    </div>
                    <div>
                        <p>Катя:</p>
                        <p>+380982402674</p>
                    </div>
                </div>
                <div className="Media">
                    <a href="">
                        <img src={posul? homeG : homeY}
                        onMouseEnter={()=>setPosul(true)}
                        onMouseLeave={()=>setPosul(false)}
                        alt="logo"/>
                    </a>
                    <a href={instagram_a} target="_blank" rel="noopener noreferrer">
                        <img src={posul2? instagramG : instagramY}
                            onMouseEnter={()=>setPosul2(true)}
                            onMouseLeave={()=>setPosul2(false)}
                        alt="logo"/>
                    </a>
                    <a>
                        <img src={posul3? telegramG : telegramY}
                        onMouseEnter={()=>setPosul3(true)}
                        onMouseLeave={()=>setPosul3(false)}
                        alt="logo"/>
                    </a>
                    <a href={tik_tok_a} target="_blank" rel="noopener noreferrer">
                        <img src={posul4? tik_tokG : tik_tokY}
                        onMouseEnter={()=>setPosul4(true)}
                        onMouseLeave={()=>setPosul4(false)}
                        alt="logo"/>
                    </a>
                </div>
                <div className="Logo">
                    <img src='/img/Logo.png' alt="logo"/>
                </div>
                <div className="Main">
                <a onMouseEnter={efectu} onMouseLeave={efectudel} href="">
                            <span ref={ef_top} className="efectTop"></span>
                            <span ref={ef_right} className="efectRight"></span>
                            <span ref={ef_bottom} className="efectBottom"></span>
                            <span ref={ef_left} className="efectLeft"></span>
                            СТИЛІ
                        </a>
                        <a onMouseEnter={efectu2} onMouseLeave={efectu2del} href="">
                            <span ref={ef_top_2} className="efectTop2"></span>
                            <span ref={ef_right_2} className="efectRight2"></span>
                            <span ref={ef_bottom_2} className="efectBottom2"></span>
                            <span ref={ef_left_2} className="efectLeft2"></span>
                            ПЕДАГОГИ
                        </a>
                        <a onMouseEnter={efectu3} onMouseLeave={efectu3del} href="">
                            <span ref={ef_top_3} className="efectTop3"></span>
                            <span ref={ef_right_3} className="efectRight3"></span>
                            <span ref={ef_bottom_3} className="efectBottom3"></span>
                            <span ref={ef_left_3} className="efectLeft3"></span>
                            РОЗКЛАД
                        </a>
                        <a onMouseEnter={efectu4} onMouseLeave={efectu4del} href="">
                            <span ref={ef_top_4} className="efectTop4"></span>
                            <span ref={ef_right_4} className="efectRight4"></span>
                            <span ref={ef_bottom_4} className="efectBottom4"></span>
                            <span ref={ef_left_4} className="efectLeft4"></span>
                            ЗАЛ
                        </a>
                        <a onMouseEnter={efectu5} onMouseLeave={efectu5del} href="">
                            <span ref={ef_top_5} className="efectTop5"></span>
                            <span ref={ef_right_5} className="efectRight5"></span>
                            <span ref={ef_bottom_5} className="efectBottom5"></span>
                            <span ref={ef_left_5} className="efectLeft5"></span>
                            ЦІНИ
                        </a>
                </div>
            </div>
        </div>
    );
}