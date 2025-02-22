export class ListaAlergenos extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const alergenos = this.getAttribute('pizza-alergenos') || '';
        const alergenosArray = alergenos.split(',').map(a => a.trim()).filter(a => a !== '');
        
        const alergenosHTML = alergenosArray.map(a => {
            return `<img class="alergenos" src="/img/${a}.png" alt="${a}">`;
        }).join('');

        this.shadowRoot.innerHTML = `
            <style>
                img.alergenos { 
                    width: 50px; 
                    height: 50px; 
                    margin-right: 8px; 
                    vertical-align: middle;
                }
            </style>
            <div>${alergenosHTML}</div>
        `;
    }
}

customElements.define('lista-alergenos', ListaAlergenos);
