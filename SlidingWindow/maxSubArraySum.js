
// brute force method
function maxSubArraySum(arr, num){
    if(num > arr.length) return null;
    let max = -Infinity;
    for (let i = 0 ; i< arr.length - num +1; i++){
    let temp = 0;
        for (let j = 0; j< num; j++){
            temp += arr [i +j];
        }
        if(temp > max){
            max = temp
        }
    }
    return max;    
}

let result = maxSubArraySum([1,2,3,4,5,6,7,8,9], 3);

console.log('result native approach', result)


//optimized approach

function maxSubArraySum2(arr, num){
    if(num > arr.length) return null;
    let temp = 0;
    let maxSum = 0;
    for(let i = 0; i < num; i++){
        temp +=  arr[i]
    }

    maxSum = temp;

    for(let j = num ; j< arr.length; j++){
        temp = temp - arr[j-num] + arr[j];
        maxSum = Math.max(temp, maxSum)
    }

    return maxSum
}

let result2 = maxSubArraySum2([1,2,3,4,5,6,8,9,7], 3);

console.log('result optimized approach', result2)