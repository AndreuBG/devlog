import '/js/components/etiquetaPizza.js';
import '/js/components/listaAlergenos.js';
import { PizzaService } from "/js/services/pizzaService.js";

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const pizzes = await PizzaService.getAllPizzes();
        const lista = document.getElementById('contenedor');

        pizzes.forEach(p => {
            const pizzaElement = document.createElement('pizza-card');
            pizzaElement.setAttribute('pizza-id', p.id);
            pizzaElement.setAttribute('pizza-desc', p.descripcion);
            pizzaElement.setAttribute('pizza-nom', p.nombre);
            pizzaElement.setAttribute('pizza-vegetariana', p.es_vegetariana);
            pizzaElement.setAttribute('pizza-preu', p.precio);
            pizzaElement.setAttribute('pizza-img', p.img);

            const alergens = Array.isArray(p.alergens) ? p.alergens : [];
            pizzaElement.setAttribute('pizza-alergenos', alergens.join(','));

            lista.appendChild(pizzaElement);
        });
    } catch (error) {
        console.error("Error cargando las pizzas", error);
    }
});
