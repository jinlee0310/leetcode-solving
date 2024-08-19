/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels=['a','e','i','o','u','A','E','I','O','U']
    const sVowels=[]
    for(let i=0;i<s.length;i++){
        if(vowels.includes(s[i])){
            sVowels.push(s[i])
        }
    }
    let str=''
    for(let i=0;i<s.length;i++){
        if(vowels.includes(s[i])){
            str+=sVowels.pop()
        }else{
            str+=s[i]
        }
    }
    return str
};