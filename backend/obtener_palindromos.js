const calcular_palindromos = require("./calcular_palindromos");

const obtener_palindromos = async(req, res) => {
    try {

        let limite = req.query.limite ? req.query.limite : 1000000;
        let respuesta = calcular_palindromos(limite);

        return res.json({
            codigo: 200,
            datos: respuesta
        });

    } catch(error) {
        console.error(error);
        return res.json({
            codigo: 400,
            error: error.message || error
        })
    }
}



module.exports = obtener_palindromos;