const express = require("express");
const mongoose = require("mongoose");
// const product = require("./models/product");
const productRoute = require('./routes/product.route');
const app = express();

// midleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))

// routes
app.use("/api/products" , productRoute)


app.get("/", (req, res) => {
  res.send("hello, from root dir");
});

// app.get("/api/products", async (req, res) => {
//   try {
//     const products = await product.find({});
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.get("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const products = await product.findById(id);
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.post("/api/products", async (req, res) => {
//   try {
//     const createdProduct = await product.create(req.body);
//     res.status(200).json(createdProduct);
//   } catch (error) {
//     res.status(500).json({ message: error.message }); 
//   }
// });

// app.put("/api/products/:id", async (req, res)=>{
//   try {
//     const {id} = req.params;
//     const existingProduct = await product.findByIdAndUpdate(id, req.body);

//     if(!existingProduct){
//       return res.status(404).json({message: "Product not found"});
//     }

//     const updatedProduct = await product.findById(id);
//     res.status(200).json(updatedProduct);

//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// })



// // delete product
// app.delete("/api/products/:id", async (req,res)=>{
//   try {
//     const { id } = req.params;
//     const deletedProduct = await product.findByIdAndDelete(id); 

//     if (!deletedProduct) {
//       return res.status(404).json({ message: "Product not found" });
//     }

//     res.status(200).json({ message: "Product deleted successfully", product: deletedProduct });
//   } catch (error) {
//     res.status(500).json({message: error.message});
//   }
// })



mongoose
  .connect("mongodb://localhost:27017/crud-API", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
