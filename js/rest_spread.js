//! Spread: unpacked elements: for array [] & object {}

// const arr = [1, 2, 3];
// const newArry = [...arr]; //* for clone and copy
// console.log(arr);

//* for merge
// const oldNumbers = [1, 2, 3];
// const newNumbers = [4, 5, 6];
// console.log([100, ...oldNumbers, ...newNumbers, 200]);

// let name = "hemlaldulal";
// console.log([...name]);

// const product = {
//   name: "shell",
//   price: 19.99,
//   date: "29/09/2023",
//   items: ["1", "2"],
// };

// const newProduct = {
//   ...product,
//   available: true,
// };

// product.items.push("3");
// console.log(product);
// console.log(newProduct);

//! Rest: packes elements => mostly used in function parameters
function sum(...numbers) {
  console.log(numbers);

  let res = 0;
  for (let num of numbers) {
    res += num;
  }
  return res;
}

console.log(sum(2, 3, 4, 5));

const arr = [1, 2, 3, 4, 5, 6];
console.log(Math.max(...arr));
