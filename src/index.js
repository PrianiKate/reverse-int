module.exports = function reverse (n) {
    let arr = [];
    n = Math.abs(n);
    while (n > 0) {
        arr.push(n % 10);
        n = (n - n % 10) / 10;
    }
    let ans = 0;
    let d = 1;
    for (let i = arr.length - 1; i >= 0; i--) {
        ans += arr[i] * d;
        d *= 10;
    }
    return ans;
}
