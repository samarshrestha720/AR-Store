import "dotenv/config";
import express, { urlencoded } from "express";
import { PrismaClient } from "@prisma/client";
import routes from "../routes/allRoutes";

const app = express();
const morgan = require("morgan");
const cors = require("cors");
const PORT = process.env.PORT || 3000;

// Use morgan middleware to log HTTP requests to the console
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cors());
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });
app.use(routes);

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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
