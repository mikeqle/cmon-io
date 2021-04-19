const mongoose = require('mongoose');
const db_name = "cmon";

mongoose.connect("mongodb://localhost/" + db_name, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
    .then( () => console.log("Successfully connected to the " + db_name + " database") )
    .catch((err) => {
        console.log("Something went wrong while connecting with the database " + db_name + ":");
        console.log(err); // This makes sure the object is printed instead of the words [Object: Object]
});