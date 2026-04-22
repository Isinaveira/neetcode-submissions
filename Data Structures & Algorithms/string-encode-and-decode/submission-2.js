class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let strEncoded = "";
        for(let str of strs){
            strEncoded += str.length + "#" + str;
        }
        return strEncoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let strs = []; 
        let inicio = 0;
        let finPalabra = 0;
        while(inicio < str.length){
            let separatorIndex = str.indexOf("#", inicio);
            finPalabra = separatorIndex + Number(str.slice(inicio, separatorIndex)) + 1;
            strs.push(str.slice(separatorIndex + 1, finPalabra));
            inicio = finPalabra;        
        }
        return strs;
    }
}


