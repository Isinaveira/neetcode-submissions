class Solution {
    sortString = (s) => {return s.split("").sort().join("");} 
    groupAnagrams(strs) {
        const seen = {}
        for(const s of strs){
            const key = s.split("").sort().join();

            if(!seen[key]){
                seen[key] = []
            }
             seen[key].push(s);
        }

        return Object.values(seen);
    }
    
}
