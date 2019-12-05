const guardar_en_mongo = require("./guardar_en_mongo");

const guardar_palindromos = async (req, res) => {
    try {
        
        let respuesta = await guardar_en_mongo(req.body).catch(error => {
            throw error;
        });

        return res.json({
            codigo: 200,
            respuesta
        });

    } catch (error) {
        console.error(error);
        return res.json({
            codigo: 400,
            error: error.message || error
        })
    }
}

module.exports = guardar_palindromos;