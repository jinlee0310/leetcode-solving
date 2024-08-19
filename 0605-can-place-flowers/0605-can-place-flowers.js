/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    for(let i=0;i<flowerbed.length;i++){
        if(flowerbed[i]===0 && n>0){
            if(i===0){
                if(flowerbed.length!==1 && flowerbed[i+1]===0){
                    n-=1
                    flowerbed[i]=1
                }else if(flowerbed.length===1){
                    n-=1
                    flowerbed[i]=1
                }
            }else if(i===flowerbed.length-1){
                if(flowerbed[i-1]===0 && flowerbed[i]===0){
                    n-=1
                    flowerbed[i]=1
                }
            }else{
                if(flowerbed[i-1]===0 && flowerbed[i]===0 &&flowerbed[i+1]===0){
                    flowerbed[i]=1
                    n-=1
                }
            }
        }
    }
    console.log(flowerbed)
    return n===0
};