class Solution {
    
    topKFrequent(nums, k) {
        const map = new Map();
        for(let num of nums){
            if (map.has(num)){
                map.set(num,map.get(num) + 1);
            }else{
                map.set(num,1);
            }
        }
        const output = Array.from(map.entries()).sort((a,b) => b[1] - a[1])
        return output.slice(0,k).map(([key]) =>key);
    }
}
