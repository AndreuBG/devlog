import { Pizza } from "/js/models/pizza.js";


export class PizzaService {
    
    static API_URL = 'https://pizza-rest-server-production.up.railway.app/api/pizzeria/pizzes'

    static async getAllPizzes() {

        const respuesta = await fetch(this.API_URL);

        if (!respuesta.ok) throw new Error ("No se han podido cargar las pizzas");
        const datosPG = await respuesta.json(); //PG es de paged, no tiene que ver con el programa
        const datos = datosPG.records;

        // Lista de pizzas
        const pizzas = [];

        //Recorrer lista
        for (let i = 0; i < datos.length; i++) {
            const pizza = new Pizza(datos[i]);

            pizzas.push(pizza);
            
        }
        return pizzas;

        // return datos.map(d => new Pizzza(d)); -- Opcion complicada pero mas optima
    }
    
}