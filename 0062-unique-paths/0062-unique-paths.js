/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const dp=Array.from({length:m+1},()=>Array(n+1).fill(0))

    for(let r=1;r<=m;r++){
        for(let c=1;c<=n;c++){
            if(r===1){
                dp[r][c]=1
            }else if(c===1){
                dp[r][c]=1
            }else{
                dp[r][c]=dp[r-1][c]+dp[r][c-1]
            }
        }
    }
    return dp[m][n]
};