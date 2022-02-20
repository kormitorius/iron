import setup from "../setup.js";
import components from "../components/index.js";

const ContactPage = () => {
    const { Article, Head, Contacts } = components;

    const text = setup.html`
        <iframe src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=1716684342" width="560" height="400" frameborder="0"></iframe>
        <p>Мы находимся по адресу г. Сочи, ул. Московская д. 5, здание банка ВТБ/Уралсиб. Вход сзади банка - со двора </p>
        <p>Мы работаем каждый день без перерывов и выходных:</p>
        <div>ПН-ПТ: с 9:30 до 20:00</div>
        <div style="color: #d40d0d">СБ: с 9:30 до 19:00</div>
        <div style="color: #d40d0d">ВС: с 9:30 до 17:00</div>
        <p>Телефон: 8-928-850-94-04</p>
        <p>Email: ironsapple@gmail.com</p>
    `;

    return setup.html`
            <${Contacts} />
            <${Head} title="Контакты" />
            <${Article} text=${text} />
            <${Contacts} />
        `;
}

export default ContactPage;
