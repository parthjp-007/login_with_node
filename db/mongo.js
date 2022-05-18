const mongoose = require("mongoose");
mongoose
.connect("mongodb+srv://admin:admin@cluster0.x8evo.mongodb.net/practise?retryWrites=true&w=majority")
.then(()=>console.log("DbConnection Sucessfull"))
.catch((err)=> {
    console.log(err)
});

