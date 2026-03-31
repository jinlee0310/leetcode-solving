class Solution {
public:
    bool isValid(string s) {
        vector<char> stack;
        for(int i=0;i<(int)s.size();i++){
            std::cout << s[i] << "\n";
            if(s[i]=='('||s[i]=='{'||s[i]=='['){
                stack.push_back(s[i]);
            }else{
                if(stack.size()==0) return false;
                if(s[i]==')'){
                    if(stack.back()=='('){
                        stack.pop_back();
                    }else return false;
                }else if(s[i]=='}'){
                    if(stack.back()=='{'){
                        stack.pop_back();
                    }else return false;
                }else if(s[i]==']'){
                    if(stack.back()=='['){
                        stack.pop_back();
                    }else return false;
                }
            }
        }
        if(stack.size()!=0) return false;
        return true;
    }
};