class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded_string = "";
        for(let str of strs){
            encoded_string += str.length +"#" + str;
        }
        return encoded_string;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
    let strs = [];
    let inicio = 0;

    while (inicio < str.length) {
        let indexOfDelimiter = str.indexOf("#", inicio);

        let strLength = Number(str.slice(inicio, indexOfDelimiter));

        let start = indexOfDelimiter + 1;
        let end = start + strLength;

        strs.push(str.slice(start, end));

        inicio = end;
    }

    return strs;
}
}
