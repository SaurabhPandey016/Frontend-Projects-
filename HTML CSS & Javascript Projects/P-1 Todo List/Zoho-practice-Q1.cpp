#include <bits/stdc++.h>
using namespace std;

bool isVowel(char ch) {
    if((ch == 'A' || ch == 'a') || (ch == 'e' || ch == 'E') || (ch == 'i' || ch == 'I') || (ch == 'o' || ch == 'O') || (ch == 'u' || ch == 'U') )
        return true;
    return false;
}

string removeVowel(string &str, string &ans) {

    // conditions
    // 1st ignore a e i o u both in lowercase3 or upper case
    // but if they are appearing together then take it;

    int n = str.size();
    for(int i = 0; i<n-1; i++) {
        if(!isVowel(str[i])) {
            ans += str[i];
        }
        else if(isVowel(str[i]) && isVowel(str[i+1])) {
            ans += str[i];
            ans += str[i+1];
            i += 1;
        }
    }
    if(!isVowel(str[n-1])) ans += str[n-1];
    return ans;
}


int main() {

    string str;
    cin >> str;
    string ans;
    removeVowel(str, ans);
    cout << ans << endl;


    return 0;
}