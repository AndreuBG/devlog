export class etiquetaPizza extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.serverURL = 'https://pizza-rest-server-production.up.railway.app/';
    }

    connectedCallback() {
        const listaAlergenos = document.createElement('lista-alergenos');
        listaAlergenos.getAttribute('pizza-alergenos', '¡Hola desde el contenedor!');

        const id = this.getAttribute('pizza-id') || 'Pizza desc';
        const nombre = this.getAttribute('pizza-nom') || 'Pizza desc';
        const precio = this.getAttribute('pizza-preu') || 'Precio desconocido';
        const vegetariana = this.getAttribute('pizza-vegetariana') === 'true';
        const descripcion = this.getAttribute('pizza-desc') || 'Pizza desconocida';
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
                    width: 500px; 
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
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

                .imgP {
                    width: 50%;
                    object-fit: contain;
                }

                p {
                    font-size: 14px;
                    text-align: center;
                    
                }

                .precio {
                    font-weight: bold;
                    font-size: 16px;
                    margin-top: auto;
                }

                lista-alergenos {
                    padding-bottom: 10px;
                }

            </style>
            <div class="producto">
                <h2>${nombre}</h2>
                <img class="imgP" src="${this.serverURL}${img}" alt="${nombre}">
                <lista-alergenos pizza-alergenos="${this.getAttribute('pizza-alergenos') || ''}"></lista-alergenos>
                <p><b>Descripción:</b> ${descripcion}</p><br>
                <p>${esVegetariana}</p>
                <p class="precio"><b>Precio:</b> ${precio} €</p>
                <div id="alergenos-container"></div>
            </div>
        `;
    }

}

customElements.define('pizza-card', etiquetaPizza);
