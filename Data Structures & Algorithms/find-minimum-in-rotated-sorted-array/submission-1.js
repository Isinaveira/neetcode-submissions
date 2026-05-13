class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0;
        let right = nums.length - 1;

        while(left < right) {

            let mid = Math.floor((left + right) / 2);
            //comprueba la derecha si es decreciente
            if(nums[mid] > nums [right]){
                left = mid + 1;
            } else {
                //comprueba si hay un cambio de tendencia
                //if(nums[left-1] > nums[left]){
                  //  return nums[left];
                //}else{
                //si no lo hay, es que está a la izquierda el menor    
                    right = mid;
            //}
        }
    }
    return nums[left];
    }
}
