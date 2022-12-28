const mongoose = require('mongoose');

function connect() {
    mongoose.connect(process.env.MONGO_URL)
        .then(
            console.log("Connect database successfully!!")
        )
        .catch(err => console.log("Connect db err: " + err.message));

    mongoose.connection.on('connected', () => {
        console.log("Mongodb connected to db");
    });

    mongoose.connection.on('error', (err) => {
        console.log("Mongodb connect err: ", err.message);
    });

    mongoose.connection.on('disconnected', () => {
        console.log("Mongodb connected is disconnected");
    });

    process.on('SIGINT', async () => {
        mongoose.connection.close();
        process.exit(0);
    })
}


module.exports = {
    connect
}