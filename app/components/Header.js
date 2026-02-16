export default function Header() {
    const viasan = "(Віасан)";

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
                <div className="Media"></div>
                <div className="Logo"></div>
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