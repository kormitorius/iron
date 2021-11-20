import setup from "../setup.js";

const PriceList = ({ list }) => {
    return setup.html`
        <div class="price container">
            <div class="price__row">
                <div class="price__cell price__caption">Услуга</div>
                <div class="price__cell price__caption">Цена</div>
            </div>
            ${
                Object.keys(list).map(key => {
                    return setup.html`
                        <div class="price__row">
                            <div class="price__cell">${key}</div>
                            <div class="price__cell">${list[key]}</div>
                        </div>
                                `
                })
            }
        </div>
    `
}

export default PriceList;