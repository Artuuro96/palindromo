const obtener_log = require("./obtener_log");

const consultar_logs = async(req, res) => {
    try {
        let logs = await obtener_log().catch(error => {
            throw error;
        });

        return res.json({
            codigo: 200,
            datos: logs
        });
    } catch (error) {
        console.error(error);
        res.json({
            codigo: 400,
            error: error.message || error
        });
    }
}

module.exports = consultar_logs;