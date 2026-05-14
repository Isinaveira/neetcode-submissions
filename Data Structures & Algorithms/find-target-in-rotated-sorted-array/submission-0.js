class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (nums[mid] === target) return mid;

            // Paso 1: Identificar qué mitad está ordenada
            if (nums[left] <= nums[mid]) {
                // Mitad izquierda está ordenada
                if (target >= nums[left] && target < nums[mid]) {
                    // El target está en este rango
                    right = mid - 1;
                } else {
                    // El target está en la otra mitad
                    left = mid + 1;
                }
            } else {
                // Mitad derecha está ordenada
                if (target > nums[mid] && target <= nums[right]) {
                    // El target está en este rango
                    left = mid + 1;
                } else {
                    // El target está en la otra mitad
                    right = mid - 1;
                }
            }
        }

        return -1; // No se encontró
    }
}
