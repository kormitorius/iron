import setup from "../setup.js";

const Contacts = () => {
    return setup.html`
        <div class="contacts">
            <div class="container contacts__container">
                <i>Телефон:</i><a href="tel:+79288509404">8-928-850-94-04</a> <i>Email:</i> ironsapple@gmail.com
            </div>
        </div>
    `
}

export default Contacts;
