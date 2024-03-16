const mongoose = require('mongoose');


async function main(){

    try {
        await mongoose.connect("mongodb+srv://joaoleonardo:@cluster0.fwpgaer.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log('ok');
    } catch (error) {
        console.error(error);
    }

}

module.exports = main;