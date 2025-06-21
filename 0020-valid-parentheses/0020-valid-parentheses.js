/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack=[]
    const openedBrackets=['(','[','{']
    for(let str of s){
        if(stack.length===0){
            if(openedBrackets.includes(str)){
                stack.push(str)
            }else{
                return false
            }
        }else{
            if(openedBrackets.includes(str)){
                stack.push(str)
            }else{
                if(str===')'){
                    if(stack[stack.length-1]==='('){
                        stack.pop()
                    }else{
                        return false
                    }
                }else if(str===']'){
                    if(stack[stack.length-1]==='['){
                        stack.pop()
                    }else{
                        return false
                    }
                }else if(str==='}'){
                    if(stack[stack.length-1]==='{'){
                        stack.pop()
                    }else{
                        return false
                    }
                }
            }
        }
    }
    if(stack.length>0) return false
    return true
};