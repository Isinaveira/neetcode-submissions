class Solution {
    sortString = (s) =>  {return s.split("").sort().join("")};

    isAnagram(s, t) {
    const sortedS = this.sortString(s);    
    const sortedT = this.sortString(t);

    return sortedS === sortedT;
    }
    
    
}
