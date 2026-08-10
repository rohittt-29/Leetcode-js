/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let  l = nums.length;
    let i;
    let j= 0 ; 
    for(i = 1; i<l; i++){
        if(nums[i]!== nums[j]){
            j++;
            nums[j] = nums[i]
        }
    }
    return j+1 ;
};