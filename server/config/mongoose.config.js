const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/dbjokes",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=> console.log("MongoDB conectado"))
    .catch(err=> console.log("Algo salió mal con mongo", err));