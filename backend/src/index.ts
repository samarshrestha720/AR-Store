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
    where: { pid: 8 }, // Specify the unique identifier of the product you want to update
    data: {
      // Provide the fields you want to update and their new values
      name: "Small Dark Wood Table",
      description:
        "Introducing our small dark wood table: a charming and versatile addition to any room. This table features a rich dark wood finish that adds a touch of elegance to your decor. Its compact size makes it perfect for smaller spaces, while still providing ample surface area for your needs. Crafted with quality materials, it is both durable and stylish. Try it in your own space using the button below!",
      image: [
        "https://img-new.cgtrader.com/items/2600204/d3932faea8/small-dark-wood-table-3d-model-d3932faea8.jpg",
        "https://img-new.cgtrader.com/items/2600204/a8e864e735/small-dark-wood-table-3d-model-a8e864e735.jpg",
        "https://img-new.cgtrader.com/items/2600204/69973b55d9/small-dark-wood-table-3d-model-69973b55d9.jpg",
        "https://img-new.cgtrader.com/items/2600204/27396c0f94/small-dark-wood-table-3d-model-27396c0f94.jpg",
      ],
    },
  });
  res.send(updatedProduct);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
