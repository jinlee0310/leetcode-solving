/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let five=0;
    let ten=0;
    let twenty=0;
    let i=0;
    while(i<bills.length){
        if(bills[i]===5){
            five++;
        }else if(bills[i]===10){
            ten++;
            if(five){
                five--;
            }else{
                return false;
            }
        }else{
            twenty++;
            if(ten){
                if(five){
                    ten--;
                    five--;
                }else{
                    return false
                }
            }else{
                if(five>=3){
                    five-=3;
                }else{
                    return false
                }
            }
        }
        i++;
    }
    return true
};