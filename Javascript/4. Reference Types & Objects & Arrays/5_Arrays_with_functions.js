
// // Arrays With Functions;
// let arr = [10, 20, 30, 40];
// let brr = [10, 20, 30, 40, 'Saurabh pandey'];

// // Write  function to get sum of all array elements;
// // Normal Function 
// function getSum(arr) {

//     let len = arr.length;
//     let sum = 0;
//     for(let i = 0; i<len; i++) {
//         sum += arr[i];
//     }

//     console.log(sum);

// }
// getSum(arr);

// // Arrow Function
// let getSum1 = (arr) => {

//     let len = arr.length;
//     let sum = 0;
//     let number = typeof(arr[0]);
//     // console.log(number);
//     for(let i = 0; i<len; i++) {

//         if(typeof(arr[i]) == number) sum += arr[i];
        
//     }

//     console.log(sum);

// }
// getSum1(brr);