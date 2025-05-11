/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const answer=[]
    for(let i=0;i<arr.length;i+=size){
        const chunk=arr.slice(i,i+size)
        answer.push(chunk)
    }
    return answer
};
