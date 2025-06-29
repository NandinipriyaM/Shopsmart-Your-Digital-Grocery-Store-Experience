const mongoose = require('mongoose');
const models = require('./schema.js');

// MongoDB connection string
const db = 'mongodb://127.0.0.1:27017/grocery';

mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(async () => {
  console.log('Connected to MongoDB for seeding');

  // Check if category already exists
  let newCategory = await models.Category.findOne({ category: "Groceries" });
  if (!newCategory) {
    newCategory = new models.Category({ category: "Groceries" });
    await newCategory.save();
  }

  const sampleProducts = [
    {
      productname: "Milk",
      description: "1 litre fresh milk",
      price: 40,
      brand: "Amul",
      image: "milk.jpg",
      category: newCategory._id,  // ✅ use ObjectId
      countInStock: 100,
      rating: 4.5,
      dateCreated: new Date()
    },
    {
      productname: "Bread",
      description: "Whole wheat bread",
      price: 30,
      brand: "Harvest",
      image: "bread.jpg",
      category: newCategory._id,  // ✅ use ObjectId
      countInStock: 50,
      rating: 4.2,
      dateCreated: new Date()
    },
    {
      productname: "Cooking Oil",
      description: "1 litre sunflower oil",
      price: 120,
      brand: "Fortune",
      image: "oil.jpg",
      category: newCategory._id,  // ✅ use ObjectId
      countInStock: 80,
      rating: 4.3,
      dateCreated: new Date()
    }
  ];

  await models.Product.insertMany(sampleProducts);
  console.log("Sample products added ✅");

  process.exit();
}).catch(err => {
  console.error("Error connecting:", err);
});
