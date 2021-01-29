const template = document.createElement('template');

template.innerHTML = `
<link rel="style" href="styleCard.css" />
<link href="styleCard.css" rel="stylesheet" type="text/css">  
    <div class="card-container">
        <span></span>
        <h1></h1>
        <p></p>
        <div class="img">
            <img>
        <div/>
    </div>
`;

class CardFeature extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.shadowRoot.querySelector('h1').innerText = this.getAttribute(
            'title'
        );

        this.shadowRoot.querySelector('p').innerText = this.getAttribute(
            'text'
        );

        this.shadowRoot.querySelector('img').src = this.getAttribute('image');

        this.shadowRoot.querySelector(
            'span'
        ).style.border = `solid ${this.getAttribute('border-color')} 2px`;
    }
}

window.customElements.define('card-feature', CardFeature);
