const shoeModel = require("../model/ShoeModel");

const createShoe = (req, res) => {
  const { name, brand, price, category } = req.body;
  if (!name || !brand || !price || !category) {
    return res.status(400).json({ message: "all field are required" });
  }
  const newShoe = {
    id: Date.now(),
    name,
    brand,
    price,
    category,
  };
  shoeModel.push(newShoe);
  res.status(200).json({ message: "shoe created succesfully", shoe: newShoe });
};

const retrieveShoe = (req, res) => {
  const categorybox = req.params.category;

  if (!categorybox) {
    if (shoeModel.length === 0) {
      return res.status(404).json({
        message: `shoes not found `,
      });
    }
    return res.status(200).json(shoeModel);
  }
  const categoryItselfMen = categorybox.toLowerCase();
  //  find that shoe by cat men / ladies / kids
  if (categoryItselfMen) {
    const shoe = shoeModel.filter(
      (sh) => sh.category.toLowerCase() === categoryItselfMen
    );
    if (shoe.length === 0) {
      return res.status(404).json({
        message: `shoe not found under this category ${categoryItselfMen}`,
      });
    }
    res.status(200).json(shoe);
  }
};

const updateShoe = (req, res) => {
  const { name, brand, price, category } = req.body;
  const id = parseInt(req.params.id);

  const shoeIndex = shoeModel.findIndex((si) => si.id === id);

  if (shoeIndex === -1) {
    return res.status(404).json({ message: "shoe not found" });
  }

  shoeModel[shoeIndex] = {
    ...[shoeIndex],
    id,
    name,
    brand,
    price,
    category,
  };
  res
    .status(200)
    .json({ message: "shoe updated succesfully", shoe: shoeModel[shoeIndex] });
};

const deleteShoe = (req, res) => {
  const id = parseInt(req.params.id);

  const shoeIndex = shoeModel.findIndex((si) => si.id === id);

  if (shoeIndex === -1) {
    return res.status(404).json({ message: "shoe not found" });
  }

  const deletedshoe = shoeModel.splice(shoeIndex, 1);
  res.status(200).json({
    message: "shoe deleted succesfully",
    deletedshoesd: deletedshoe[0],
  });
};

module.exports = { createShoe, retrieveShoe, updateShoe, deleteShoe };
