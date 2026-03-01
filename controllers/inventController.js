import items from "../model/invenModel.js";

let idCounter = 1; 

export const addItem = (req, res) => {
  const { name, category, quantity } = req.body;

  const newItem = {
    id: idCounter++,  
    name,
    category,
    quantity,
  };

  items.push(newItem);

  res.json(newItem);
};


export const getItems = (req, res) => {
  const { category, search } = req.query;

  let result = items;

  if (category) {
    result = result.filter(
      item => item.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (search) {
    result = result.filter(
      item => item.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  res.json(result);
};


export const getItemById = (req, res) => {
  const item = items.find(item => item.id == req.params.id);

  if (!item) {
    return res.status(404).json({ message: "Item not found" });
  }

  res.json(item);
};


export const updateItem = (req, res) => {
  const item = items.find(item => item.id == req.params.id);

  if (!item) {
    return res.status(404).json({ message: "Item not found" });
  }

  item.name = req.body.name || item.name;
  item.category = req.body.category || item.category;
  item.quantity = req.body.quantity || item.quantity;

  res.json(item);
};


export const deleteItem = (req, res) => {
  const index = items.findIndex(item => item.id == req.params.id);

  if (index === -1) {
    return res.status(404).json({ message: "Item not found" });
  }

  items.splice(index, 1);

  res.json({ message: "Deleted successfully" });
};