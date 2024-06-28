const categoryMap = {
  1: "Chair",
  2: "Sofa",
  3: "Shelf",
  4: "Lamp",
  5: "Table",
};
export function getCategoryName(id) {
  return categoryMap[id];
}
