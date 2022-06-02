const Product = require("../model/ProductModel.js");
module.exports = {
  async getAllProduct(req, res) {
    try {
      const product = await Product.findAll();
      res.json(product);
    } catch (error) {
      res.json({ message: error.message });
    }
  },
  async getProductById(req, res) {
    try {
      const product = await Product.findAll({
        where: {
          id: req.params.id,
        },
      });
      console.log(product);
      res.json(product[0]);
    } catch (error) {
      res.json({ message: error.message });
    }
  },
  async createProduct(req, res) {
    try {
      await Product.create(req.body);
      res.json({
        message: "Product Created",
      });
    } catch (error) {
      res.json({ message: error.message });
    }
  },
  async deleteProduct(req, res) {
    try {
      await Product.destroy({
        where: {
          id: req.params.id,
        },
      });
      console.log(req.params.id);
      res.json({
        message: "Product Deleted",
      });
    } catch (error) {
      res.json({ message: error.message });
    }
  },

  async updateProduct(req, res) {
    try {
      await Product.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      res.json({
        message: "Product Updated",
      });
    } catch (error) {
      res.json({ message: error.message });
    }
  },
};
