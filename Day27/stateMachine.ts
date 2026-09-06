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
  status: "success" | "pending" | "failed";
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
const orderItem: Order[] = [
  {
    id: "orId01",
    status: "pending",
    user: users[0],
    product: [products[0], products[2]],
    total: products[0].price + products[2].price,
  },
  {
    id: "orId02",
    status: "pending",
    user: users[1],
    product: [products[1], products[2], products[0]],
    total: products[1].price + products[2].price + products[0].price,
  },
];

// console.log(orderItem);
//show details for a specific users
function details(user: User): void {
  for (const item of orderItem) {
    if (item.user.id === user.id) {
      console.log(`User Name: ${user.name}.\nProducrt list:`);
      for (const pd of item.product) {
        console.log(`Product Name: ${pd.name}. Price: ${pd.price}`);
      }
      console.log(`Total Price:${item.total}.\nOrder Status: ${item.status}\n`);
    }
  }
}
// orderItem[0].status = "success";
// console.log(orderItem);
details(users[0]);
orderItem[0].status = "success";
details(users[0]);
