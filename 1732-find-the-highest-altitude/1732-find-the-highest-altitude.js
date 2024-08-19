/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    const altitudes=new Array(gain.length+1).fill(0)
    for(let i=1;i<=gain.length;i++){
        altitudes[i]=gain[i-1]+altitudes[i-1]
    }
    return Math.max(...altitudes)
};