const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Phone = require("./models/phones.model");
const Cart = require("./models/cart.model");

//to create some documents in collection Phone in our database (only run it once)
// const oldDB=require('./data/db.json');
// mongoose.connection.once('open', () => {
//     for(let i=0; i<15; i++){
//       Phone.create({
//        img: "https://picsum.photos/200/200",
//         brand: oldDB[i].brand,
//         model: oldDB[i].model,
//         color: oldDB[i].color,
//         price: oldDB[i].price,
//         description: oldDB[i].description
//       })
//     }
// });

// CONNECT TO MONGODB
const connOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
};
const dbName = "phones";
mongoose.connect(`mongodb://localhost/${dbName}`, connOptions);

app.listen(5000, () => {
  console.log("start listening on port 5000");
});

app.use((req, res, next) => {
  res.set("ACCESS-CONTROL-ALLOW-ORIGIN", "*");
  res.set("ACCESS-CONTROL-ALLOW-HEADERS", "*");
  res.set("ACCESS-CONTROL-ALLOW-METHODS", "*");
  next();
});

app.use(express.json());
app.use(express.urlencoded());

app.get("/product-listing/", (req, res) => {
  Phone.find()
    .then(phones => res.send(phones))
    .catch(err => res.status(400).send("Error: " + err));
});

app.get("/shopping-cart", (req, res) => {
  Cart.find()
    .then(phones => res.json(phones))
    .catch(err => res.status(400).json("Error: " + err));
});

app.get("/product-view/:id", (req, res) => {
  Phone.findById(req.params.id)
    .then(phone => {
      res.json(phone);
    })
    .catch(err => res.status(400).json("Error: " + err));
});

app.post("/shopping-cart/:id", (req, res) => {
  Cart.findByIdAndUpdate(req.params.id)
    .then(x => {
      if (x !== null) {
        x.quantity += 1;
        x.save();
      } else {
        Phone.findById(req.params.id)
          .then(phone => {
            Cart.create({
              _id: phone._id,
              img: phone.img,
              quantity: 1,
              brand: phone.brand,
              model: phone.model,
              color: phone.color,
              price: phone.price,
              description: phone.description
            })
              .then(x => {
                res.json(x);
              })
              .catch(err => res.status(400).json("Error: " + err));
          })
          .catch(err => res.status(400).json("Error: " + err));
      }
    })
    .catch(err => res.status(400).json("Error cart quantity: " + err));
});

app.delete("/shopping-cart/:id", (req, res) => {
  Cart.findByIdAndDelete(req.params.id)
    .then(() => res.json("item deleted"))
    .catch(err => res.status(400).json("Error: " + err));
});

app.patch("/shopping-cart/:id", (req, res) => {
  Cart.findByIdAndUpdate(req.params.id)
    .then(phone => {
      phone.quantity = req.body.quantity;
      phone.save();
    })
    .catch(err => res.status(400).json("Error: " + err));
});
