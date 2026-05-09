class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if((s.length % 2)!== 0) return false;
        const openings = new Map();
        const stack = [];
        openings.set("(",")");
        openings.set("[","]");
        openings.set("{","}");

        let valid = true;

        for(const c of s){
            if(openings.has(c)){
                stack.push(c);
            }else{
                const open_c = stack.pop();

                if(openings.get(open_c) !== c){
                    return false;
                }
            }
        }
        
        if(stack.length !== 0) return false;
        return valid
    }
}
