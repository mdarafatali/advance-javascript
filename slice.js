const nums = [10, 20, 30, 40, 50, 50, 70, 80, 90, 100];

const slicedNumber = nums.slice(2,4 );
console.log(slicedNumber); //slice
console.log(nums);

const spliceNums = nums.splice(2, 3, 77, 85, 87, 88);
console.log(spliceNums);
console.log(nums);

const joinNumber = nums.join(" ami ")
console.log(joinNumber);

