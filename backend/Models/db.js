const mongoose = require('mongoose');
const mongo_url = process.env.MONGO_CONN;
mongoose.connect(mongo_url)
    .then( () => {
        console.log("Mongoobd Connected...");
    }) .catch ((err) => {
        console.log("Mongoodb Connection err", err);
    })