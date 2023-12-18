function maximumProduct(nums) {
    nums.sort((a, b) => a - b);
    let n = nums.length;

    console.log(nums[n - 2] * [n - 1] - nums[0] * nums[1]);
}

maximumProduct([5, 6, 2, 7, 4])