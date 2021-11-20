import setup from "../setup.js";

const Article = ({ text }) => {
    return setup.html`
        <div class="container">
            ${text}
        </div>
    `
}

export default Article;