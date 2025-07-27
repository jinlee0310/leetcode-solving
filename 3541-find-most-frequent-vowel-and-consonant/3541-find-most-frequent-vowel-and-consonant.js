/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    const vowel=new Set(['a','e','i','o','u'])

    let vowelMaxFreq=0;
    let consonantMaxFreq=0;
    const arr=s.split('').sort()
    let cur=arr[0]
    let cnt=0

    if(arr.length===1) return 1
    else if(arr.length===2) {
        if(vowel.has(arr[0])&&vowel.has(arr[1])) return 1
        else if (!vowel.has(arr[0])&&!vowel.has(arr[1])) return 1
        else return 2
    }

    
    for(let i=0;i<arr.length;i++){
        if(vowel.has(cur)){
            if(cur===arr[i]){
                cnt++
            }else{
                vowelMaxFreq=Math.max(cnt,vowelMaxFreq)
                cnt=0;
                cur=arr[i]
                i--
            }
        }else{
            if(cur===arr[i]){
                cnt++
            }else{
                consonantMaxFreq=Math.max(cnt,consonantMaxFreq)
                cnt=0;
                cur=arr[i]
                i--
            }
        }
    }

    return vowelMaxFreq+consonantMaxFreq

};