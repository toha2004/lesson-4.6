'use strict';

let allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];
function  getAverageValue(arr) {
    if(arr.length === 0)
        return 0;
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(Math.floor(getAverageValue(allCashbox)));