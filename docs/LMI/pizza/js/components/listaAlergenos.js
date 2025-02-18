export function ListaAlergenos(alergens = []) {
    let alergenosIMG = '';

    alergens.forEach(alergen => {
        if (alergen === "gluten") {
            alergenosIMG += '<img class="alergenos" src="../img/gluten.png">';
        } else if (alergen === "lactosa") {
            alergenosIMG += '<img class="alergenos" src="../img/lactosa.png">';
        } else if (alergen === "moluscos") {
            alergenosIMG += '<img class="alergenos" src="../img/moluscos.png">';
        } else if (alergen === "peix") {
            alergenosIMG += '<img class="alergenos" src="../img/pez.png">';
        } else if (alergen === "crustacis") {
            alergenosIMG += '<img class="alergenos" src="../img/crustaceos.png">';
        }
    });

    return alergenosIMG;
}
