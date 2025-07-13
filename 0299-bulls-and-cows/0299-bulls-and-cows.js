/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    const secretMap=new Map()
    const guessMap=new Map()

    let bulls=0;
    let cows=0;
    secret.split('').forEach(v=>{
        if(secretMap.has(v)){
            const cnt=secretMap.get(v)
            secretMap.set(v,cnt+1)
        }else{
            secretMap.set(v,1)
        }
    })
    for(let i=0;i<guess.length;i++){
        if(secret[i]===guess[i]){
            bulls++
        }
        if(secretMap.has(guess[i])){
            const cnt=secretMap.get(guess[i])
            if(cnt>0){
                cows++
                secretMap.set(guess[i],cnt-1)
            }
        }
    }
    
    return `${bulls}A${cows-bulls}B`
};