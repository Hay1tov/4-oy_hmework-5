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


function rangeOutSum(arr, K, L) {
  if (K > L) {
    return `K <= L shart asosida son kiritish kerak`
  }


}

//                                                      No_12
//                                                      No_13
//                                                      No_14
//                                                      No_15
//                                                      No_16
//                                                      No_17
//                                                      No_18
//                                                      No_19
//                                                      No_20
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