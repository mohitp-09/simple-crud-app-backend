const product = require("../models/product");

const getProducts = async (req, res) =>{
    try {
        const products = await product.find({});
        res.status(200).json(products);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
};

const getProduct = async (req, res)=>{
    try {
        const { id } = req.params;
        const products = await product.findById(id);
        res.status(200).json(products);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

const createProduct = async (req, res) =>{
    try {
        const createdProduct = await product.create(req.body);
        res.status(200).json(createdProduct);
      } catch (error) {
        res.status(500).json({ message: error.message }); 
      }
};

const updateProduct = async (req, res) =>{
    try {
        const {id} = req.params;
        const existingProduct = await product.findByIdAndUpdate(id, req.body);
    
        if(!existingProduct){
          return res.status(404).json({message: "Product not found"});
        }
    
        const updatedProduct = await product.findById(id);
        res.status(200).json(updatedProduct);
    
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
};

const deleteProduct = async (req, res)=>{
    try {
        const { id } = req.params;
        const deletedProduct = await product.findByIdAndDelete(id); 
    
        if (!deletedProduct) {
          return res.status(404).json({ message: "Product not found" });
        }
    
        res.status(200).json({ message: "Product deleted successfully", product: deletedProduct });
      } catch (error) {
        res.status(500).json({message: error.message});
      }
};



module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}