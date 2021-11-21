import setup from "../setup.js";

const Head = ({ title = "" }) => {
    const [open, setOpen] = setup.useState(false);

    return setup.html`
        <div class="header">
            <div class="container flex">
                <a href="/iron/"><img src="logo.svg" alt="Iron Service" /></a>
                <div class=${"hamburger" + (open ? " open" : "")} onclick=${() => setOpen(!open)}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div class=${"menu" + (open ? " open" : "")}>
                    <div class="menu-item">
                        Ремонт
                        <div class="sub-menu">
                            <a href="remont-macbook.html" class="sub-menu__item">
                                MacBook
                            </a>
                            <a href="remont-iphone.html" class="sub-menu__item">
                                iPhone
                            </a>
                            <a href="remont-ipad.html" class="sub-menu__item">
                                iPad
                            </a>
                            <a href="remont-imac.html" class="sub-menu__item">
                                iMac
                            </a>
                            <a href="remont-mac-mini.html" class="sub-menu__item">
                                Mac mini
                            </a>
                            <a href="remont-apple-watch.html" class="sub-menu__item">
                                Apple Watch
                            </a>
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
