import setup from "../setup.js";
import components from "../components/index.js";

const ContactPage = () => {
    const { Article, Head, Contacts } = components;

    const text = setup.html`
        <div>Рабочие дни — без выходных</div>
        <div>ПН-ПТ: с 9:30 до 20:00</div>
        <div>СБ: с 9:30 до 19:00</div>
        <div>ВС: с 9:30 до 17:00</div>
    `;

    return setup.html`
            <${Contacts} />
            <${Head} title="Контакты" />
            <${Article} text=${text} />
            <${Contacts} />
        `;
}

export default ContactPage;
