import setup from "../setup.js";

const Article = ({ text, className = "container" }) => {
    return setup.html`
        <div class=${className}>
            ${text}
        </div>
    `
}

export default Article;
