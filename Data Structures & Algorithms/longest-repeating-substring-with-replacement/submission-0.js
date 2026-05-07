class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let maxFreq = 0;
        let maxLen = 0;
        let left = 0;
        let mapOfChars = new Map();

        for(let right = 0 ; right < s.length ; right ++){
           const char = s[right];
           mapOfChars.set(char, (mapOfChars.get(char) || 0) + 1);

           maxFreq = Math.max(maxFreq, mapOfChars.get(char));

           while((right - left + 1) - maxFreq > k){
            const leftChar = s[left];
            mapOfChars.set(leftChar, mapOfChars.get(leftChar) - 1);
            left++;
           }

           maxLen = Math.max(maxLen, right - left + 1); 
        }
        
        return maxLen;
    }
}
