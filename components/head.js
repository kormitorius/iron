import setup from "../setup.js";

const Head = () => {
    return setup.html`
        <div class="header">
            <div class="container flex">
                <img src="logo.png" alt="" />
                <div class="hamburger"></div>
                <div class="menu">
                    <div class="menu-item">
                        Ремонт
                    </div>
                    <div class="menu-item">
                        О компании
                    </div class="menu-item">
                    <div class="menu-item">
                        Контакты
                    </div>
                </div>
            </div>
        </div>
        <div class="banner">
            <div class="container flex-center">
                <h1>Ремонт iPhone</h1>
            </div>
        </div>
    `
}

export default Head;