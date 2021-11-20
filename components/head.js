import setup from "../setup.js";

const Head = () => {
    const [open, setOpen] = setup.useState(false);

    return setup.html`
        <div class="header">
            <div class="container flex">
                <img src="logo.png" alt="" />
                <div class="hamburger" onclick=${() => setOpen(!open)}></div>
                <div class=${"menu" + (open ? " open" : "")}>
                    <div class="menu-item">
                        Ремонт
                        <div class="sub-menu">
                            <div class="sub-menu__item">
                                MacBook
                            </div>
                            <div class="sub-menu__item">
                                iPhone
                            </div>
                            <div class="sub-menu__item">
                                iPad
                            </div>
                            <div class="sub-menu__item">
                                iMac
                            </div>
                            <div class="sub-menu__item">
                                iMac mini
                            </div>
                            <div class="sub-menu__item">
                                Apple Watch
                            </div>
                        </div>
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
