export class etiquetaPizza extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.serverURL = 'https://pizza-rest-server-production.up.railway.app/';
    }

    connectedCallback() {
        const nombre = this.getAttribute('pizza-nom') || 'Pizza desc';
        const precio = this.getAttribute('pizza-preu') || 'Precio desconocido';
        const vegetariana = this.getAttribute('pizza-vegetariana') === 'true';
        const descripcion = this.getAttribute('pizza-desc') || 'Pizza desconocida';
        const alergenos = this.getAttribute('pizza-alergenos') || '';
        const img = this.getAttribute('pizza-img') || '';

        let esVegetariana = vegetariana ? "VEGETARIANA" : "";

        this.shadowRoot.innerHTML = `
            <style>
                * {
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                }

                .producto {
                    width: 500px; /* Ancho fijo */
                    height: 400px; /* Alto fijo */
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between; /* Distribuye el espacio */
                    align-items: center;
                    background-color: white;
                    padding: 15px;
                    border: 3px solid green;
                    text-align: center;
                    transition: transform 0.3s;
                }

                .producto:hover {
                    transform: scale(1.05);
                    background-color: lightyellow;
                }

                h2 {
                    color: green;
                    font-family: 'Courier New', Courier, monospace;
                    font-size: 18px;
                    text-align: center;
                    margin-bottom: 10px;
                }

                img {
                    width: 50%;
                    object-fit: contain;
                }

                .alergenos {
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                    gap: 5px;
                    margin: 10px 0;
                }

                p {
                    font-size: 14px;
                    text-align: center;
                    
                }

                .precio {
                    font-weight: bold;
                    font-size: 16px;
                    margin-top: auto; /* Empuja hacia abajo */
                }
            </style>
            <div class="producto">
                <h2>${nombre}</h2>
                <img src="${this.serverURL}${img}" alt="${nombre}">
                <div class="alergenos">
                    <lista-alergenos pizza-alergenos="${alergenos}"></lista-alergenos>
                </div>
                <p><b>Descripción:</b> ${descripcion}</p><br>
                <p>${esVegetariana}</p>
                <p class="precio"><b>Precio:</b> ${precio} €</p>
            </div>
        `;
    }
}

customElements.define('pizza-card', etiquetaPizza);
