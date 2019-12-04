const calcular_palindromos = require("./calcular_palindromos");

const obtener_palindromos = async(req, res) => {
    try {
        
        let respuesta = calcular_palindromos(1000000);
        console.log("RESPUESTA", respuesta);
        return res.json({
            codigo: 200,
            datos: respuesta
        });

    } catch(error) {
        console.error(error);
    }
}



module.exports = obtener_palindromos;