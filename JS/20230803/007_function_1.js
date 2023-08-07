function cal(x, y, z) {
  if (z === "+") {
    return x + y;
  } else if (z === "-") {
    return x - y;
  } else if (z === "*") {
    return x * y;
  } else if (z === "/") {
    return x / y;
  } else {
    console.log("+,-,*,/연산만해주세요");
  }
}
add(3, 2, "+");

function translate(str) {
  return parseInt(str.replace(/[^0-9]/g, ""));
}
translate("10,000,000,000");

function printAndSplit(str) {
  console.log(str);
  return str.split("");
}

function addAndMul(x, y) {
  let add = x + y;
  let mul = add * add;
  return mul;
}

function equation(x) {
  return x ** 2 + 4 * x - 12;
}
