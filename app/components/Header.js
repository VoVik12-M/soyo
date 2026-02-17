export default function Header() {
    const viasan = "(Віасан)";

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

    return (
        <div className="Header">
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
                    <img src={homeY}/>
                    <img src={instagramY}/>
                    <img src={telegramY}/>
                    <img src={tik_tokY}/>
                </div>
                <div className="Logo">
                    <img src='/img/Logo.png' alt="logo"/>
                </div>
                <div className="Main">
                    <a>СТИЛІ</a>
                    <a>ПЕДАГОГИ</a>
                    <a>РОЗКЛАД</a>
                    <a>ЗАЛ</a>
                    <a>ЦІНИ</a>
                </div>
            </div>
        </div>
    );
}