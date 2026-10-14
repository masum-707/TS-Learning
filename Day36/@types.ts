import _ from "lodash";
import { User } from "./user.js";

const numbers: number[] = [10, -20, 60];

const result = _.sum(numbers);

console.log(result);

//module augmentation
const user: User = {
  name: "Masum",
  gender: "Male",
  phone: "1234567",
};
