import setup from "../setup.js";
import components from "../components/index.js";

const ContactPage = () => {
    const { Article, Head, Contacts } = components;

    const text = setup.html`
        <p>Мы находимся по адресу г. Сочи, ул. Московская д. 5, здание банка ВТБ/Уралсиб. Вход сзади банка - со двора </p>
        <p>Мы работаем каждый день без перерывов и выходных:</p>
        <div>ПН-ПТ: с 9:30 до 20:00</div>
        <div style="color: #d40d0d">СБ: с 9:30 до 19:00</div>
        <div style="color: #d40d0d">ВС: с 9:30 до 17:00</div>
        <p>Телефон: 8-928-850-94-04</br>Email: ironsapple@gmail.com</p>
    `;

    return setup.html`
            <${Contacts} />
            <${Head} title="Контакты" />
            <${Article} text=${text} />
            <${Contacts} />
        `;
}

export default ContactPage;
