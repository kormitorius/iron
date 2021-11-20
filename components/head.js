import setup from "../setup.js";

const Head = ({ title = "" }) => {
    const [open, setOpen] = setup.useState(false);

    return setup.html`
        <div class="header">
            <div class="container flex">
                <a href="/iron/"><img src="logo.png" alt="Iron Service" /></a>
                <div class="hamburger" onclick=${() => setOpen(!open)}></div>
                <div class=${"menu" + (open ? " open" : "")}>
                    <div class="menu-item">
                        Ремонт
                        <div class="sub-menu">
                            <div class="sub-menu__item">
                                MacBook
                            </div>
                            <a href="remont-iphone.html" class="sub-menu__item">
                                iPhone
                            </a>
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
                    <a href="contact.html" class="menu-item">
                        Контакты
                    </a>
                </div>
            </div>
        </div>
        <div class="banner">
            <div class="container flex-center">
                <h1>${title}</h1>
            </div>
        </div>
    `
}

export default Head;
