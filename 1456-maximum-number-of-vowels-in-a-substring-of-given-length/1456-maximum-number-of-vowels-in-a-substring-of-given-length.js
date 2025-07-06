/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    const vowel=['a','e','i','o','u']
    let answer=0;
    let st=0;en=k-1
    for(let i=st;i<=en;i++){
        if(vowel.includes(s[i])){
            answer++
        }
    }
    let curVowelCnt=answer;
    while(en<s.length){
        en++;
        if(vowel.includes(s[en])) curVowelCnt++;
        if(vowel.includes(s[st])) curVowelCnt--;
        st++
        answer=Math.max(answer,curVowelCnt)
    }
    return answer
};