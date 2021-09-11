/**
 * 最长回文数
 * 1. 在LeetCode执行超出时间限制...
 * @param {string} s
 * @return {string}
 */
const longestPalindrome_1 = function (s) {
    const string_reverse = str => str.split('').reverse().join('');
    // 控制匹配字符串长度,最长是字符串长度,最短是1
    for (let i = s.length; i > 0; i--) {
        // 控制字符串位置 从0开始
        for (let j = 0; j <= s.length - i; j++) {
            let str = s.substr(j, i);
            if (str === string_reverse(str)) {
                return str;
            }
        }
    }
};

/**
 * 看了评论,才发现自己想简单了,没有利用回文字符串的特性
 * 回文字符串,中心对称,改进思路找中心点,向两边扩散
 * @param s
 * @returns {string}
 */
const longestPalindrome = function (s) {
    // 寻找中间位置
    if(s.length % 2 === 0){

    }else{

    }

    for (let i = 0; i < s.length; i++) {

    }
};

console.log(longestPalindrome('abc'))

module.exports = longestPalindrome;
