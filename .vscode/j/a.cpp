#include<bits/stdc++.h>
using namespace std;

void solve(){
    int n;
    cin >> n;
    vector<int> arr(4 * n);
    for(int i = 0 ; i < arr.size() ; i++)
        cin >> arr[i];
    sort(arr.begin() , arr.end());
    int prevArea = arr[0] * arr[arr.size() - 1];
    for(int i = 0 ; i < n ; i++){
        int left = 2 * i;
        int right = 4 * n - 2 * i - 2;
        if(arr[left] != arr[left + 1] || arr[right] != arr[right + 1] || prevArea != arr[left] * arr[right]){
            cout << "NO" << endl;
            return;
        }
    }
    cout << "YES" << endl;
    return;
}

int main(){
    int t;
    cin >> t;
    while(t--)
        solve();
    return 0;
}