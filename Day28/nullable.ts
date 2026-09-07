let userName: string | null = null;
console.log(userName);
userName = undefined; //warning ,only string or null(undefined doest not mean null)
console.log(typeof userName);
//for undefined assigned
let userRole: string | null | undefined;
userRole = undefined;
