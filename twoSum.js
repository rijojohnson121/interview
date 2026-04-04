function twoSumMap ( nums, target) {
    const seen = {};

    for(let i=0;i < nums.length;i++) {
        const complement = target - nums[i];

        if (seen[complement] !== undefined){
            return [seen[complement], i ]
        }
        seen[nums[i]]= i;
    }
}

console.log(twoSumMap([2, 7, 11, 15], 9));   // [0, 1]  because 2 + 7 = 9
console.log(twoSumMap([3, 2, 4], 6));          // [1, 2]  because 2 + 4 = 6
console.log(twoSumMap([3, 3], 6));             // [0, 1]  because 3 + 3 = 6
console.log(twoSumMap([1, 5, 3, 2], 4));       // [2, 3]  because 3 + 2 = 4... wait, let me check: 1+3=4 → [0,2]