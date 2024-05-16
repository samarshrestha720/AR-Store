"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
const prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // ... you will write your Prisma Client queries here
        // const allProducts = await prisma.product.findMany();
        // console.log(allProducts);
    });
}
main()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}))
    .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.error(e);
    yield prisma.$disconnect();
    process.exit(1);
}));
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allProducts = yield prisma.product.findMany();
    console.log(allProducts);
    return res.json(allProducts);
}));
// Define the dummy data for products
const productsData = [
    // Products for the "Chair" category
    {
        name: "Comfortable Office Chair",
        description: "Ergonomic chair with lumbar support for long hours of sitting.",
        price: 99.99,
        salePrice: 79.99,
        image: "chair1.jpg",
        categoryId: 1, // Assuming Chair category has cid = 1
    },
    {
        name: "Modern Dining Chair",
        description: "Sleek and stylish chair for your dining room.",
        price: 49.99,
        salePrice: null,
        image: "chair2.jpg",
        categoryId: 1,
    },
    // Products for the "Sofa" category
    {
        name: "L-Shaped Sectional Sofa",
        description: "Spacious sofa perfect for lounging with family and friends.",
        price: 799.99,
        salePrice: null,
        image: "sofa1.jpg",
        categoryId: 2, // Assuming Sofa category has cid = 2
    },
    {
        name: "Leather Recliner Sofa",
        description: "Luxurious sofa with built-in recliners for ultimate comfort.",
        price: 1299.99,
        salePrice: 999.99,
        image: "sofa2.jpg",
        categoryId: 2,
    },
    // Products for the "Shelf" category
    {
        name: "Floating Wall Shelf",
        description: "Minimalist shelf for displaying books and decor.",
        price: 29.99,
        salePrice: null,
        image: "shelf1.jpg",
        categoryId: 3, // Assuming Shelf category has cid = 3
    },
    {
        name: "Corner Bookshelf",
        description: "Space-saving corner shelf for organizing your book collection.",
        price: 39.99,
        salePrice: 34.99,
        image: "shelf2.jpg",
        categoryId: 3,
    },
    // Products for the "Lamp" category
    {
        name: "Adjustable Desk Lamp",
        description: "Modern lamp with adjustable brightness settings.",
        price: 19.99,
        salePrice: null,
        image: "lamp1.jpg",
        categoryId: 4, // Assuming Lamp category has cid = 4
    },
    {
        name: "Floor Lamp with Tripod Base",
        description: "Stylish floor lamp that adds ambiance to any room.",
        price: 59.99,
        salePrice: null,
        image: "lamp2.jpg",
        categoryId: 4,
    },
    // Products for the "Table" category
    {
        name: "Wooden Coffee Table",
        description: "Classic coffee table with a durable wooden construction.",
        price: 99.99,
        salePrice: 79.99,
        image: "table1.jpg",
        categoryId: 5, // Assuming Table category has cid = 5
    },
    {
        name: "Glass Dining Table",
        description: "Sleek glass table for modern dining spaces.",
        price: 249.99,
        salePrice: null,
        image: "table2.jpg",
        categoryId: 5,
    },
];
app.get("/loadproducts", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Loop through the dummy data and create products in the database
    for (const productData of productsData) {
        yield prisma.product.create({
            data: {
                name: productData.name,
                description: productData.description,
                price: productData.price,
                salePrice: 11,
                image: productData.image,
                categoryId: productData.categoryId,
            },
        });
    }
    return res.json("All data loaded Successfully!!");
}));
// Loop through the dummy data and create categories in the database
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
