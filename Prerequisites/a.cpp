#include<bits/stdc++.h>
using namespace std;
void solve(){
    int * points = new int[52];
    memset(points , 0 , sizeof(points));
    int n , k;
    cin >> n >> k;
    while(n--){
        int l , r;
        cin >> l >> r;

        points[l]++;
        points[r + 1]--;
    }

    for(int i = 1 ; i < n ; i++)
        points[i] = points[i - 1] + points[i];
        
    for(int i = 0 ; i < 50 ; i++)
        cout << points[i] << " " ;
    
    cout << endl;
}

int main(){
    int t;
    cin >> t;
    while(t--) solve();
    return 0;
}