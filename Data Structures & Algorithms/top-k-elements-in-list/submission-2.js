class Solution {
    
    topKFrequent(nums, k) {
        const map = new Map();
        //creo los buckets
        const buckets = Array.from({length: nums.length +1}, () => [])

        //cuento las frecuencias
        for(let num of nums){
            if (map.has(num)){
                map.set(num,map.get(num) + 1);
            }else{
                map.set(num,1);
            }
        }
        //lleno los buckets
        for(let [num, freq] of map.entries()){
            buckets[freq].push(num);
        }

        //obtengo los k frequentes en orden inverso
        const result = []
        for(let i = buckets.length-1; i>=0 && result.length < k; i--) {
            if(buckets[i].length > 0){
                for(let num of buckets[i]){
                    result.push(num);
                    if(result.length === k) return result;
                }
            }
        }
        
        return result

    }
}
