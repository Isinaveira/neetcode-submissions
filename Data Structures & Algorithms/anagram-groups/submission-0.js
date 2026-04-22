class Solution {
    sortString = (s) => {return s.split("").sort().join("");} 
    groupAnagrams(strs) {
        const seen = {}
        for(const s of strs){
            let sorted = this.sortString(s);
            if(sorted in seen){
                seen[sorted].push(s);
            }else{
                seen[sorted] = []
                seen[sorted].push(s);
            }
        }

        return Object.values(seen);
    }
    
}
