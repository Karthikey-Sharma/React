#include <iostream>
#include <cmath>
using namespace std;

bool isPowerOfTwo(long long n) {
    return (n & (n - 1)) == 0;
}

bool canConstructSnowflake(long long n) {
    if (n < 4 || n % 2 == 0) {
        return false;
    }
    if (isPowerOfTwo(n - 1)) {
        return true;
    }
    return false;
}

int main() {
    int t;
    cin >> t;
    while (t--) {
        long long n;
        cin >> n;
        if (canConstructSnowflake(n)) {
            cout << "YES\n";
        } else {
            cout << "NO\n";
        }
    }
    return 0;
}
