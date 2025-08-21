//                                                      No_1


// function getLevel2(n) {
//   let newArr = []
//   for (let i = 1; i <= n; i++) {
//     newArr.push(2**i)
//   }
//   return newArr
// }

// console.log(getLevel2(5))

//                                                      No_2


// function isSum(n, A, B) {
//   if (n <= 2) {
//     return `n > 2  shart asosida son kiriting`
//   }
//   let newArr = [A, B]
//   let sum = 0

//   for(let i = 0; i < n -2 ; i++) {
//     sum = 0
//     for(const v of newArr) {
//       sum = sum + v
//     }
//     newArr.push(sum)
//   }

//   return newArr
// }

// console.log(isSum(5, 2, 3));


//                                                      No_3


// function getReverse(n) {

//   let newReverseArr = []

//   for(let i = n.length-1; i >= 0; i--) {
//     newReverseArr.push(n[i])
//   }

//   return newReverseArr
// }

// console.log(getReverse(['eldor', 'nurbek', 'sherbek', 'aziz']));


//                                                      No_4


// function getOdd(n) {

//   let oddCount = 0
//   let odd = []

//     for(let v of n) {
//       if (v % 2 == 1) {
//         odd.push(v)
//         oddCount++
//       }
//     }

//   return `${odd}\ntoqlar soni ${oddCount} ta`
// }

// console.log(getOdd(['4', '5', '7', '8', '6', '9']));


//                                                      No_5


// function sort(n) {
//   newArr = []

//   for (const index in n) {
//     if (n[index] % 2 == 0) { 
//       newArr.push(n[index])
//     }
//   }

//   for(let i = n.length-1; i >= 0; i--) {
//     if (n[i] % 2 == 1) { 
//       newArr.push(n[i])
//     }
//   }

//   return newArr
// }

// console.log(sort(['4', '5', '7', '8', '6', '9']));


//                                                      No_6


// function printEvenIndex(A) {
//   for (let i = 0; i < A.length; i += 2) {
//     console.log(A[i]);
//   }
// }

// printEvenIndex([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


//                                                      No_7


// function printReverseOddIndexElements(n) {
//   for (let i = n.length-1; i >= 0; i -= 2) {
//     console.log(n[i]);
//   }
// }

// printReverseOddIndexElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


//                                                      No_8


// function printEvenIndex(A) {
//   for (let i = 0; i < A.length; i += 2) {
//     console.log(A[i]);
//   }
//   for (let i = 1; i < A.length; i += 2) {
//     console.log(A[i]);
//   }
// }

// printEvenIndex([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//                                                      No_9


// function oddAscEvenDesc(n) {
//   for (let i = 1; i < n.length; i += 2) {
//     console.log(n[i]);
//   }
//   for (let i = n.length - 2; i >= 0; i -= 2) {
//     console.log(n[i]);
//   }
// }

// oddAscEvenDesc([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//                                                      No_10


// function alternateEnds(A) {
//   let n = A.length;
//   let start = 0, end = n - 1;

//   while (start <= end) {
//     console.log(A[start]);
//     if (start + 1 <= end) {
//       console.log(A[start + 1]);
//     }
//     if (end >= start + 2) {
//       console.log(A[end]);
//     }
//     if (end - 1 >= start + 2) {
//       console.log(A[end - 1]);
//     }
//     start += 2;
//     end -= 2;
//   }

// }
// alternateEnds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


//                                                      No_11


// function rangeOutSum(arr, K, L) {
//   let sum = 0
//   if (K > L) {
//     return `K <= L shart asosida son kiritish kerak`
//   }

//   for(const index in arr) {
//     if(index < K || index > L) {
//       sum += arr[index]
//     }
//   }

//   return sum

// }

// console.log(rangeOutSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4, 6));


//                                                      No_12


// function filterTruthyFalsy(arr) {
//   const Truthy = []
//   const Falsy = []

//   for(const value of arr) {
//     if(value) {
//       Truthy.push(value)
//     }
//     else {
//       Falsy.push(value)
//     }
//   }
//   return {Truthy, Falsy}
// }

// console.log(filterTruthyFalsy([10, false, "", "Abdulaziz", null]));


//                                                      No_13


// function getOddMin(arr) {
//   let oddMin = arr[0]

//   for(let i = 0; i <= arr.length-1; i += 2) {
//     if(oddMin > arr[i]) {
//       oddMin = arr[i]
//     }
//   }
//   return oddMin
// }

// console.log(getOddMin([5, 7, 2, 9, 4, 1, 0]));


//                                                      No_14


// function getEvenMax(arr) {
//   let evenMax = arr[0]

//   for(let i = 1; i <= arr.length-1; i += 2) {
//     if(evenMax < arr[i]) {
//       evenMax = arr[i]
//     }
//   }
//   return evenMax
// }

// console.log(getEvenMax([5, 7, 2, 9, 4, 1, 0, 12]));


//                                                      No_15


// function getLocalMax(arr) {
//   let localMax = null

//   for (let i = 1; i <= arr.length - 2; i++) {
//     if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
//       localMax = arr[i]
//     }
//   }

//   return localMax
// }

// console.log(getLocalMax([1, 3, 2, 5, 4, 6, 1]));


//                                                      No_16


// function getClosest(arr, R) {
//   let closest = arr[0]
//   let minDiff = Infinity

//   for(let i = 0; i <= arr.length-1; i++) {
//     let diff = Math.abs(arr[i] - R)
//     if(diff < minDiff) {
//       minDiff = diff
//       closest = arr[i]
//     }
//   }
//   return closest
// }

// console.log(getClosest([2, 5, 8, 14, 20], 7));


//                                                      No_17


// function largestNeighborPair(arr) {
//   let maxSum = arr[0] + arr[1]
//   first = null
//   second = null

//   for (let i = 1; i <= arr.length - 2; i++) {
//     if (maxSum < arr[i] + arr[i + 1]) {
//       maxSum = arr[i] + arr[i + 1]
//       first = arr[i]
//       second = arr[i + 1]
//     }
//   }
//   return {first, second}
// }

// console.log(largestNeighborPair([3, 7, 2, 9, 5, 10, 8, 12]));


//                                                      No_18


// function findSameIndices(arr) {
//   let firstIndex = null
//   let secondIndex = null

//   for(let i = 0; i <= arr.length-1; i++) {
//     firstIndex = i
//     for(let j = 0; j <= arr.length-1; j++) {
//       if(arr[i] == arr[j] && i != j) {
//         secondIndex = j
//         return {firstIndex, secondIndex}
//       }
//     }
//   }
// }

// console.log(findSameIndices([9, 7, 1, 2, 9]));


//                                                      No_19


// function mostRepeatedNumber(arr) {
//   let repeat = {};
//   let mostFrequent = arr[0];
//   let maxCount = 0;

//   for (let i = 0; i < arr.length; i++) {
//     let element = arr[i];

//     if (repeat[element]) {
//       repeat[element]++;
//     } else {
//       repeat[element] = 1;
//     }

//     if (repeat[element] > maxCount) {
//       maxCount = repeat[element];
//       mostFrequent = element;
//     }
//   }

//   return { element: mostFrequent, count: maxCount };
// }

// console.log(mostRepeatedNumber([7, 1, 9, 2, 4, 2, 8, 5, 6, 2]));


//                                                      No_20


// function getEvenArray(a) {
//   let b = []

//   for (let i = 0; i < a.length; i++) {
//     if(a[i] % 2 == 0) {
//       b.push(a[i])
//     }
//   }
//   return b
// }

// console.log(getEvenArray([2, 3, 1, 8, 5, 9, 6, 3, 4, 5, 6, 1, 9]));


//                                                      No_21
//                                                      No_22
//                                                      No_23
//                                                      No_24
//                                                      No_25
//                                                      No_26
//                                                      No_27
//                                                      No_28
//                                                      No_29
//                                                      No_30