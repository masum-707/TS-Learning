enum Numeric {
  test,
  first = 1,
  second,
  third = 6,
  fourth,
}
console.log(Numeric.test); //1st non assign value start from zero (0)
Numeric.second = 77; //warning ,can not assign value to readonly property
console.log(Numeric.second); //2 not changed
console.log(Numeric.fourth);
Numeric.third = 99; //warning ,can not assign value to readonly property
console.log(Numeric.third); //6

enum String {
  first = "First",
  second = "Second",
  third = "Third",
  test = 1,
  fourth,
}
console.log(String.first);
String.fourth = "Fourth"; //can not assign to readonly property
// console.log(String.fourth); //Undefine ,if previous value is no a number ,it will not initialize automatically
console.log(String.fourth); //2 ,since previous test =1
