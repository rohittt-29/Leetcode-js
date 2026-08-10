/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let l = nums.length;
    let i;
    let j = 0;
    for(i = 0; i<l; i++){
        if(nums[i] !== val){
            nums[j] = nums[i];
            j++
        }
    }
    return j;
};