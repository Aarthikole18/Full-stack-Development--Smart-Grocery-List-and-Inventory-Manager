const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// ---------------- DB ----------------
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// ---------------- USER MODEL ----------------
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

// ---------------- ITEM MODEL ----------------
const itemSchema = new mongoose.Schema({
  userId: String,
  name: String,
  quantity: Number,
  expiry: String,
  category: String,
  lowStockLimit: Number,
});

const Item = mongoose.model("Item", itemSchema);

// ---------------- JWT ----------------
const SECRET = "grocery_secret_key";

// Middleware
const auth = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.sendStatus(401);

  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded;
    next();
  } catch {
    res.sendStatus(401);
  }
};

// ---------------- AUTH ROUTES ----------------

// REGISTER
app.post("/api/register", async (req, res) => {
  const { name, email, password } = req.body;

  const hashed = await bcrypt.hash(password, 10);

  const user = new User({ name, email, password: hashed });
  await user.save();

  res.json({ message: "User registered" });
});

// LOGIN
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ msg: "User not found" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ msg: "Invalid password" });

  const token = jwt.sign({ id: user._id }, SECRET);

  res.json({ token });
});

// ---------------- ITEM ROUTES ----------------

// ADD ITEM
app.post("/api/items", auth, async (req, res) => {
  const item = new Item({ ...req.body, userId: req.user.id });
  await item.save();
  res.json(item);
});

// GET ITEMS
app.get("/api/items", auth, async (req, res) => {
  const items = await Item.find({ userId: req.user.id });
  res.json(items);
});

// DELETE ITEM
app.delete("/api/items/:id", auth, async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

// ALERTS
app.get("/api/alerts", auth, async (req, res) => {
  const items = await Item.find({ userId: req.user.id });

  const lowStock = items.filter(i => i.quantity <= i.lowStockLimit);

  const expiry = items.filter(i => {
    if (!i.expiry) return false;
    return new Date(i.expiry) - new Date() <= 3 * 24 * 60 * 60 * 1000;
  });

  res.json({ lowStock, expiry });
});

// ---------------- SERVER ----------------
app.listen(5000, () => console.log("Server running on 5000"));