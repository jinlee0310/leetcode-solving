/**
 * @param {string} s
 * @return {boolean}
 */
   function  isAlphanumeric(s){
        const ascii=s.charCodeAt()

        if(65<=ascii && ascii<=90) return true
        if(97<=ascii && ascii<=122) return true
        if(0<=parseInt(s) && parseInt(s)<=9) return true
        return false
    }
var isPalindrome = function(s) {
            let lIdx=0,rIdx=s.length-1;
        while(lIdx<=rIdx){
            if(!isAlphanumeric(s[lIdx])){
                lIdx++
                continue
            }
            if(!isAlphanumeric(s[rIdx])){
                rIdx--
                continue
            }
           if(s[lIdx].toLowerCase()!==s[rIdx].toLowerCase()) return false
            lIdx++;
            rIdx--;
        }
        return true
};