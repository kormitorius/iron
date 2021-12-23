import setup from "../setup.js";
import components from "../components/index.js";

const ContactPage = ({ text, title }) => {
    const { Article, Head, Contacts } = components;

    return setup.html`
        <${Contacts} />
        <${Head} title=${title} />
        <${Article} text=${text} />
        <${Contacts} />
    `;
}

export default ContactPage;