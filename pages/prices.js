import setup from "../setup.js";
import components from "../components/index.js";

const PricesPage = ({ type, models, text }) => {
    const { Article, Head, PriceList, Contacts, Tags } = components;

    // auto select first option in tags list
    const [active, setActive] = setup.useState(models[1].name);

    const priceForAll = "Стоимость ремонта для всех моделей";
    const common = models.find(m => m.name === priceForAll).prices;

    const h2ForAll = setup.html`
            <h2>${priceForAll}</h2>
        `;
    const h2ForModel = setup.html`
            <h2>Стоимость ремонта для <span>${type} ${active}</span></h2>
        `;

    const tagsArray = models.map(m => m.name).filter(n => n !== priceForAll);
    return setup.html`
            <${Contacts} />
            <${Head} title=${"Ремонт " + type} />
            <${Article} text=${h2ForAll} className="text-center-mobile container" />
            <${PriceList} list=${common} />
            <${Article} text=${h2ForModel} className="text-center-mobile container" />
            <${Tags} setActive=${setActive} active=${active} tagsArray=${tagsArray} />
            <${PriceList} list=${models.find(m => m.name === active).prices} />
            <${Article} text=${text} />
            <${Contacts} />
        `;
}

export default PricesPage;