class Solution {
public:
    int numIslands(vector<vector<char>>& grid) {
        
        int R=grid.size();
        int C=grid[0].size();
        
        int cnt=0;
        for(int r=0;r<R;r++){
            for(int c=0;c<C;c++){
                if(grid[r][c]=='1'){
                    vector<int> start={r,c};
                    bfs(grid,start);
                    cnt++;
                }
            }
        }

        return cnt;
    }

    void bfs(vector<vector<char>>& grid,vector<int>& start)
    {
        int R = grid.size();
        int C = grid[0].size();

        queue<vector<int>> q;

        grid[start[0]][start[1]] = '0';

        int dr[4] = {-1, 1, 0, 0};
        int dc[4] = {0, 0, -1, 1};

        q.push(start);

        while (!q.empty()) {
            vector<int> cur = q.front();
            q.pop();

            int r = cur[0];
            int c = cur[1];

            for (int i = 0; i < 4; i++) {
                int nr = r + dr[i];
                int nc = c + dc[i];

                
                if(0<=nr && nr<R && 0<=nc && nc<C && grid[nr][nc]=='1'){
                    grid[nr][nc]='0';
                    q.push({nr,nc});
                }
            }

        }
    }
};
