"use client";

import { useRef, useState } from "react";

export default function FacePhone() {
    const viasan = "(Віасан)";

    const hamMenu = useRef();
    const leftmenu = useRef()
    const rightMenu = useRef();
    function burMenu() {
        hamMenu.current.classList.toggle('active');
        leftmenu.current.classList.toggle('active');
        rightMenu.current.classList.remove('active');
    };

    function contmenu () {
        rightMenu.current.classList.toggle('active');
        leftmenu.current.classList.remove('active');
    }

    return (
        <div className="FacePh">
            <div className="burger">
                <div ref={hamMenu} className="ham-menu" onClick={burMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="logo">
                <img src='/img/Logo.png' alt="logo"/>
            </div>
            <div className="phone">
                <img src='/img/phone.png' alt="logo" onClick={contmenu}/>
            </div>
            <div ref={rightMenu} className="contactu">
                <div className="adresa">
                    <p>м. Тернопіль</p>
                    <p>вул. Медова 12</p>
                    <p>{viasan}</p>
                </div>
                <div className="nomerNazar">
                    <span>
                        <p>Назар</p>
                    </span>
                    <span>
                        <p>+380980466115</p>
                    </span>
                </div>
                <div className="nomerKate">
                    <span>
                        <p>Катя</p>
                    </span>
                    <span>
                        <p>+380982402674</p>
                    </span>
                </div>
            </div>
            <div ref={leftmenu} className="menu-hm">
                <div>
                    <p>Стилі</p>
                </div>
                <div>
                    <p>Педагоги</p>
                </div>
                <div>
                    <p>Розклад</p>
                </div>
                <div>
                    <p>Зал</p>
                </div>
                <div>
                    <p>Ціни</p>
                </div>
                <span className="row-logo">
                    <a href="">
                        <img src="/logo_yellow/home_yellow.png" alt="logo"/>
                    </a>
                    <a href="https://www.instagram.com/soy_yo_dance?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                        <img src="/logo_yellow/instagram_yellow.png" alt="logo"/>
                    </a>
                    <a href="">
                        <img src="/logo_yellow/telegram_yellow.png" alt="logo"/>
                    </a>
                    <a href="https://www.tiktok.com/@soy_yo_dance?_r=1&_t=ZS-93o8MEBAKNI" target="_blank" rel="noopener noreferrer">
                        <img src="/logo_yellow/tik-tok_yellow.png" alt="logo"/>
                    </a>
                </span>
            </div>
        </div>
    );
}