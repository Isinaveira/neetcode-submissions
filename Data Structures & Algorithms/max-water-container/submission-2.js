class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0;
        let j = heights.length - 1;
        let i = 0;
        while(i<j){
            const height = (heights[i] > heights[j])? heights[j] : heights[i];
            const width = j - i;
            const area = height * width; 
            maxArea = (maxArea > area)? maxArea : area;

            if(heights[i] > heights[j]){
                j--;
            }else{
                i++;
            }

        }

        return maxArea;
    }
}
