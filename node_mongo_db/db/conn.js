const mongoose = require('mongoose');

async function main(){

    try {
        await mongoose.connect(`mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@cluster0.fwpgaer.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
        console.log('ok');
    } catch (error) {
        console.error(error);
    }

}

module.exports = main;