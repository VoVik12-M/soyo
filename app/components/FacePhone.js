"use client";

import { useRef, useState } from "react";

export default function FacePhone() {
    const viasan = "(Віасан)";
    const hamMenu = useRef();
    function burMenu() {
        hamMenu.current.classList.toggle('active');
    };

    return (
        <div className="FacePh">
            <div>
                <div ref={hamMenu} className="ham-menu" onClick={burMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div>
                <img src='/img/Logo.png' alt="logo"/>
            </div>
            <div>
                <img src='/img/phone.png' alt="logo"/>
            </div>
            <div className="contactu">
                <div>
                    <p>м. Тернопіль</p>
                    <p>вул. Медова 12</p>
                    <p>{viasan}</p>
                </div>
                <div>
                    <span>
                        <p>Назар</p>
                    </span>
                    <span>
                        <p>+380980466115</p>
                    </span>
                </div>
                <div>
                    <span>
                        <p>Катя</p>
                    </span>
                    <span>
                        <p>+380982402674</p>
                    </span>
                </div>
            </div>
        </div>
    );
}