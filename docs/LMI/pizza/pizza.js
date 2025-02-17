document.addEventListener('DOMContentLoaded', function() {
    fetch('https://pizza-rest-server-production.up.railway.app/api/pizzeria/pizzes')
    .then(response => response.json()) // Convertim la resposta a JSON
    .then(data => {
        data.records.forEach(pizza => {
            let es_vegetariana ="";
            if (pizza.vegetariana) {
                es_vegetariana = "<p><b>Vegetariana</b></p>";
            }
            let alergenos = "";
            pizza.alergens.forEach(alergen => {
                if (alergen == "gluten") {
                    alergenos += '<img class=alergenos src="img/gluten.png">';
                } else if (alergen == "lactosa") {
                    alergenos += '<img class=alergenos src="img/lactosa.png">';
                } else if (alergen == "moluscos") {
                    alergenos += '<img class=alergenos src="img/moluscos.png">';
                } else if (alergen == "peix") {
                    alergenos += '<img class=alergenos src="img/pez.png">';
                } else if (alergen == "crustacis") {
                    alergenos += '<img class=alergenos src="img/crustaceos.png">';
                }
            });
            let fila = `<div class=producto>
            <h2>${pizza.nom} </h2>
            <img src="https://pizza-rest-server-production.up.railway.app/${pizza.img}">
            <br>${alergenos}
            
            <p> <b>Descripcion:</b> ${pizza.desc} </p>
            ${es_vegetariana}
            <p> <b>Precio:</b> ${pizza.preu} €</p>
            </div>`;
            document.querySelector(".contenedor").insertAdjacentHTML('beforeend', fila);

        });
    
    })
    .catch(error => console.error("S'ha produït un error:", error));  
    }) // Mostrem les dades obtingudes
    


