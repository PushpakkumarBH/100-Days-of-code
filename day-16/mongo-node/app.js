const mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost:27017/fruitsDB');

const fruitSchema = new mongoose.Schema ({
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model("Fruit",fruitSchema);
const fruit = Fruit({
    name: "Apple",
    rating: 7,
    review: "Pretty Solid!!"
});
// fruit.save();

// Adding multiple data to DB
const kiwi = new Fruit({
    name: "Kiwi",
    rating: 7,
    review: "Great Fruit but bit costly..."
})
const orange = new Fruit({
    name: "orange",
    rating: 10,
    review: "Great Fruit but bit cheap and also good for skin..."
})
const banana = new Fruit({
    name: "banana",
    rating: 10,
    review: "Great Fruit but bit cheap and healthy..."
})
// Fruit.insertMany([kiwi,orange,banana],function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Sucessfully inserted data to fruitsDB");
//     }
// });

Fruit.find(function(err,fruits){
    if(err){
        console.log(err);
    }
    else{
        mongoose.connection.close();
        // fruits.forEach(function(fruit){
        //     console.log(fruit.name);
        // });
        console.log(fruits);
    }
});

Fruit.updateOne({_id: "630a52b65a887f89a62c3614"},{name: "Not Banana"},function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Sucessfully updated the document");
    }
})
Fruit.deleteMany({_id: "630a52b65a887f89a62c3613"},function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Sucessfully deleted all");
    }
});
const personSchema = new mongoose.Schema ({
    name: String,
    age: Number,
    favoriteFruit: fruitSchema
});

const Person = mongoose.model("Person",personSchema);
// const person = Person({
//     name: "John",
//     age: 37
// });
const Pineapple = new Fruit({
    name: "Pineapple",
    rating: 9,
    review: "Good one..."
});
// pineapple.save();

const amy = new Person({
    name: "Amy",
    age: 12,
    favoritefruit: Pineapple
});
// Person.deleteMany({name: "John"},function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Sucessfully deleter");
//     }
// });
amy.save();
