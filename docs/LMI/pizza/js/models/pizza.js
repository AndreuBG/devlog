export class Pizza {
    constructor(jsonPizza) {
        this.id = jsonPizza.id;
        this.nombre = jsonPizza.nom; 
        this.precio = jsonPizza.preu; 
        this.descripcion = jsonPizza.desc;
        this.es_vegetariana = jsonPizza.vegetariana;
        this.img = jsonPizza.img;
        this.alergenos = jsonPizza.alergens;
    }
}