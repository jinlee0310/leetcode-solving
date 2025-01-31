/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const obj={}
    for(let str of s){
        if(obj[str]){
            obj[str]++
        }else{
            obj[str]=1
        }
    }

    for(let str of t){
        if(obj[str]){
            obj[str]--
        }else{
            return false
        }
    }

    for(let value of Object.values(obj)){
        if(value>0) return false
    }
    return true
};