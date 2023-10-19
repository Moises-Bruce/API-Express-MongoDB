const mongoose = require("mongoose")

async function main(){
    try {
        mongoose.set("strictQuery", true)

        await mongoose.connect("mongodb+srv://bruce:GfpIaE6X6g7UELD3@cluster0.iun0zpl.mongodb.net/?retryWrites=true&w=majority")

        console.log("conectado ao banco");
    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}

module.exports = main;