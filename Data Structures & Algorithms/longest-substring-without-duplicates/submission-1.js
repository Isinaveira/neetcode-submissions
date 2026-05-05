class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const mapOfChars = new Map();
        let count = 0;
        let maxCount = 0;
        let left = 0;

        for (let i = 0; i < s.length; i++) {
            let char = s[i];

            if (mapOfChars.has(char) && mapOfChars.get(char) >= left) {
                left = mapOfChars.get(char) + 1;
                count = i - left + 1;
            } else {
                count++;
            }

            mapOfChars.set(char, i);

            if (count > maxCount) {
                maxCount = count;
            }
        }

        return maxCount;
    }
}
