export class etiquetaPizza extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({mode : 'open'});
        this.serverURL = 'https://pizza-rest-server-production.up.railway.app'
    }

    connectedCallback() {
        const nombre = this.getAttribute('pizza-nom') || 'Pizza desc';
        const precio = this.getAttribute('pizza-preu') || 'Precio desconocido';
        const vegetariana = this.getAttribute('pizza-vegetariana') || 'Vegetariana???';
        const descripcion = this.getAttribute('pizza-desc') || 'Pizza desconocida';
        const alergenos = this.getAttribute('pizza-alergens') ||'';
        const img = this.getAttribute('pizza-img') || '';

        let es_vegetariana = ""
        if (vegetariana) {
            es_vegetariana = "VEGETARIANA"
        }
        
        this.shadowRoot.innerHTML = `
            <style>
                h2 {
                    color: green;
                    font-family: 'Courier New', Courier, monospace;
                }

                div.producto {
                    display: inline-block;
                    margin: 20px;
                    background-color: white;
                    padding: 10px;
                    border: 3px solid green;
                    text-align: center;
                    transition: transform 0.5s;
                }

                div.contenedor {
                    display: inline-grid;
                    grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
                    width: 100%;
                    
                }

                div.producto:hover {
                    transform: scale(1.3);
                    background-color: lightyellow;
                }


                img {
                    width: 40%;
                    
                }

                img.alergenos {
                    display: inline-block;
                    align-content: center;
                    width: 50px;
                    height: 50px;
                    vertical-align: middle;
                    margin: 7px;
                }

                p {
                    text-align: left;
                    margin-left: 50px;
                    margin-right: 30px;
                }
            </style>
            <div class="producto">
                <h2> ${nombre} </h2>
                ${alergenos}
            <img src="${this.serverURL}${img}">
            <br>${alergenos}
            
            <p> <b>Descripcion:</b> ${descripcion} </p>
            <p>${es_vegetariana}</p>
            <p> <b>Precio:</b> ${precio} €</p>
            </div>;

        
        
        
        
        
        `
    }
    
}
customElements.define('pizza', etiquetaPizza);
