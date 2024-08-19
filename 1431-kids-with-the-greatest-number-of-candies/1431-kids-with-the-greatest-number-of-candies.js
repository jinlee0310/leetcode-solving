/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const maxCandy=Math.max(...candies)
    const arr=candies.map(candy=>{
        if(extraCandies+candy>=maxCandy) return true;
        return false
    })
    return arr
};