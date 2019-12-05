const {
    MongoClient
} = require("mongodb");

const url_mongo = "mongodb://localhost:27017/";
const obtener_log = () => new Promise((resolver, rechazar) => {
    MongoClient.connect(url_mongo, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }, (error, db) => {
        if(error){
            return rechazar(error);
        }

        const dbo = db.db("prueba01");

        dbo.collection("palindromos").find().toArray((error, res) => {
            if(error){
                db.close();
                return rechazar(error);
            }

            return resolver(res);
        })
    })
})

module.exports = obtener_log;