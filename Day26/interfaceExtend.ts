interface Entity {
  id: string;
}

interface User extends Entity {
  name: string;
  email: string;
  phone: string;
}
interface Product extends Entity {
  name: string;
  price: number;
}

interface Order extends Entity {
  user: User;
  product: Product[];
  total: number;
}
const users: User[] = [
  { id: "user1", name: "Masum", email: "masum@example.com", phone: "5100" },
  { id: "user2", name: "Bob Jones", email: "bob@example.com", phone: "5200" },
];
const products: Product[] = [
  { id: "pd1", name: "phone", price: 15000 },
  { id: "pd2", name: "phoneCase", price: 150 },
  { id: "pd3", name: "headPhone", price: 1500 },
];
const orderItem: Order = {
  id: "orId01",
  user: users[0],
  product: [products[0], products[2]],
  total: products[0].price + products[2].price,
};

console.log(orderItem);
