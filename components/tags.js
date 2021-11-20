import setup from "../setup.js";

const Tags = ({ active, setActive, tagsArray }) => {
    return setup.html`
        <div class="container tags">
            ${tagsArray.map(t =>
                setup.html`
                    <div
                        class="${active === t ? "active" : ""} tag"
                        onClick=${() => setActive(t)}
                    >
                        ${t}
                    </div>`
                )}
        </div>
    `
}

export default Tags;