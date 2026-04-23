class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let setNums = new Set(nums);
        let maxConsecutive = 0;
        let count = 1;
        for (let num of setNums){
            if(!setNums.has(num-1)){
                while(setNums.has(num+count)){
                    count += 1;
                }
                maxConsecutive = (maxConsecutive > count)? maxConsecutive : count; 
                count = 0;
            }

        }
        return maxConsecutive;
    }
}
