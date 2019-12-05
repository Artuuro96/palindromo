const {
    MongoClient,
    ObjectId
} = require("mongodb");

const url_mongo = "mongodb://localhost:27017/";

const guardar_en_mongo = (datos) => new Promise((resolver, rechazar) => {
    MongoClient.connect(url_mongo, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, (error, db) => {
        if(error){
            return rechazar(error);
        }

        const dbo = db.db("prueba01");

        dbo.collection("palindromos").insertOne(datos, (error, res) => {
            if(error){
                db.close();
                return rechazar(error);
            }

            db.close();
            return resolver(true);
        })
    })
})

module.exports = guardar_en_mongo;