const mongoose = require('mongoose');

const { MONGO_URI } = process.env;


exports.connect = () => { 
    mongoose.connect(MONGO_URI, { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => { 
        console.log('connected database')
    })
    .catch((error) => {
        console.log('error connect database');
        console.log(error);
        process.exit(1);
    })
}