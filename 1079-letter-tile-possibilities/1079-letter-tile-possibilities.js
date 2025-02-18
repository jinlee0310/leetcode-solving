/**
 * @param {string} tiles
 * @return {number}
 */

const backtracking=(arr,n)=>{
    if(n===1) return arr.map(v=>[v]);

    const result=[]
    arr.forEach((v,idx,arr)=>{
        const rest=[...arr.slice(0,idx),...arr.slice(idx+1)]
        const permutations=backtracking(rest,n-1)
        const attach=permutations.map(permutation=>[v,...permutation])
        result.push(...attach)
    })
    return result
}

var numTilePossibilities = function(tiles) {
    const arr=tiles.split('')

    let answer=0;

    for(let i=1;i<=arr.length;i++){
        const set=new Set(backtracking(arr,i).map(v=>v.join('')))
        answer+=set.size
    }
    return answer
};