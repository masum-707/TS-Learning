//run time inspection
import "reflect-metadata";
class User {}
Reflect.defineMetadata("role", "guest", User);
const userMetadata = Reflect.getMetadata("role", User);
console.log(userMetadata);
