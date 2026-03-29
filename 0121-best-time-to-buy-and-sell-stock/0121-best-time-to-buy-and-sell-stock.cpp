class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int buy=prices[0];
        int sell=0;

        for(int i=1;i<(int)prices.size();i++){
            if(prices[i]<buy){
                buy=prices[i];
            }else{
                sell=std::max(sell,prices[i]-buy);
            }
        }
        return sell;
    }
};
