// const app = require("./config/express");
// const connection = require("./config/mongodb");
// const router = require("./api/routes/index");
// const cors = require("cors");

// app.use(cors());
// app.use("/api/v1", router);

console.log("test");

let a = [5, 7, 2, 1, 4];

// let pivot = a[a.length - 1];

// function divide(a) {
//   let pivot = a[0];

//   // console.log(a);
//   if (a.length <= 1) {
//     console.log(a);
//     return a;
//   }
//   let left = [];
//   let right = [];
//   for (let i = 1; i < a.length; i++) {
//     if (a[i] < pivot) {
//       left.push(a[i]);
//     } else {
//       right.push(a[i]);
//     }
//   }
//   // console.log(left, right);
//   console.log(pivot);
//   return divide(left).concat(pivot, divide(right));
// }

// console.log(divide(a));
// // for (let i = 1; i < a.length; i++) {}
// console.log(a);

// const mergeSort = (a) => {
//   console.log("tt");
//   if (a.length < 2) {
//     return a;
//   }
//   let h = a.length / 2;
//   let a1 = a.slice(0, h);
//   let a2 = a.slice(h);
//   return merge(mergeSort(a1), mergeSort(a2));
// };

// function merge(left, right) {
//   console.log("tt");

//   let merged = [];
//   let leftIndex = 0;
//   let rightIndex = 0;
//   while (leftIndex < left.length && rightIndex < right.length) {
//     if (left[leftIndex] > right[rightIndex]) {
//       merged.push(right[rightIndex]);
//       rightIndex++;
//     } else {
//       merged.push(left[leftIndex]);
//       leftIndex++;
//     }
//   }
//   return merged.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
// }

// console.log(mergeSort(a));

// console.log(a);

// const quickSort = (a) => {
//   if (a.length < 2) {
//     return a;
//   }
//   let pivot = a[0];
//   let left = [];
//   let right = [];
//   for (let i = 1; i < a.length; i++) {
//     if (a[i] < pivot) {
//       left.push(a[i]);
//     } else {
//       right.push(a[i]);
//     }
//   }
//   // console.log(left, right);
//   return quickSort(left).concat(pivot, quickSort(right));
// };

// console.log(quickSort(a));
