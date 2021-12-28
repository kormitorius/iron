import setup from "../setup.js";
import components from "../components/index.js";

const ContactPage = ({ text }) => {
    const { Article, Head, Contacts } = components;

    return setup.html`
        <${Contacts} />
        <${Head} title=${document.title.split("Iron|Блог: ").join("")} />
        <${Article} text=${text} />
        <${Contacts} />
    `;
}

export default ContactPage;