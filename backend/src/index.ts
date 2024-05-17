import "dotenv/config";
import express from "express";
import { PrismaClient } from "@prisma/client";
const app = express();
const PORT = process.env.PORT || 3000;

const prisma = new PrismaClient();
async function main() {
  // ... you will write your Prisma Client queries here
  // const allProducts = await prisma.product.findMany();
  // console.log(allProducts);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

app.get("/", async (req, res) => {
  return res.send("api located on /api route");
});

app.get("/api/products", async (req, res) => {
  const allProducts = await prisma.product.findMany();
  console.log(allProducts);
  return res.json(allProducts);
});

app.get("/api/categories", async (req, res) => {
  const allCategories = await prisma.category.findMany();
  console.log(allCategories);
  return res.json(allCategories);
});

app.get("/api/updateProduct", async (req, res) => {
  const updatedProduct = await prisma.product.update({
    where: { pid: 5 }, // Specify the unique identifier of the product you want to update
    data: {
      // Provide the fields you want to update and their new values
      name: "Accent Chest",
      description:
        "Introducing our accent chest: a stylish addition to any room. Crafted with attention to detail and quality materials, this versatile piece of furniture combines functionality with elegance. Its sleek design and spacious compartments make it perfect for storing essentials while adding a touch of sophistication to your home decor. Try it in your own space using the button below!",
      image: [
        "https://img-new.cgtrader.com/items/4060382/aa85ee8de9/accent-chest-3d-model-aa85ee8de9.jpg",
        "https://img-new.cgtrader.com/items/4060382/d134407d46/accent-chest-3d-model-d134407d46.jpg",
        "https://img-new.cgtrader.com/items/4060382/09d3da1c75/accent-chest-3d-model-09d3da1c75.jpg",
        "https://img-new.cgtrader.com/items/4060382/883bc6417d/accent-chest-3d-model-883bc6417d.jpg",
        "https://img-new.cgtrader.com/items/4060382/a4e771da33/accent-chest-3d-model-a4e771da33.jpg",
      ],
    },
  });
  res.send(updatedProduct);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
