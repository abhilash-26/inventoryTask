// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Input: s = "anagram", t = "nagaram"
// Output: true

// function test(s, t) {
//   let obj1 = {};
//   let obj2 = {};
//   let slength = s.length;
//   let tlength = t.length;
//   if (slength != tlength) {
//     return false;
//   }
//   for (let i = 0; i < slength; i++) {
//     if (obj1[s.charAt(i)]) {
//       obj1[s.charAt(i)] += 1;
//     } else {
//       obj1[s.charAt(i)] = 1;
//     }
//     if (obj2[t.charAt(i)]) {
//       obj2[t.charAt(i)] += 1;
//     } else {
//       obj2[t.charAt(i)] = 1;
//     }
//   }

//   for (let key in obj1) {
//     if (obj2[key]) {
//       if (obj1[key] != obj2[key]) {
//         return false;
//       }
//     } else {
//       return false;
//     }
//   }
//   return true;
// }

// let s = "anagram";
// let t = "nagaram";

// test(s, t);
