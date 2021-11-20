import setup from "../setup.js";
import components from "../components/index.js";

const ContactPage = () => {
    const { Article, Head, Contacts } = components;

    const text = setup.html`
        <h2>Iron работает без выходных</h2>
        <p>ПН-ПТ: с 9:30 до 20:00</p>
        <p style="color: #d40d0d">СБ: с 9:30 до 19:00</p>
        <p style="color: #d40d0d">ВС: с 9:30 до 17:00</p>
    `;

    return setup.html`
            <${Contacts} />
            <${Head} title="Контакты" />
            <${Article} text=${text} />
            <${Contacts} />
        `;
}

export default ContactPage;
