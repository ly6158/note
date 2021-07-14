/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
    /*
     思路:
        1.记录当前最长字符串,默认第一个字符为最长
        2.依次往后增加字符,并判断增加字符是否在当前最长字符串内
        3.循环上诉操作
     */

    if (s.length === 0) return 0;

    let maxStr = '';

    // 控制起始位置
    for (let i = 0; i < s.length; i++) {
        let cStr = '';
        // 控制字符串长度
        for (let j = 0; j < s.length; j++) {
            if (i + j <= s.length) {
                // 需要添加的字符
                let addStr = s.substr(i + j, 1);
                if (cStr.includes(addStr)) {
                    break;
                } else {
                    cStr = s.substr(i, j + 1);
                }
            }
        }
        if (cStr.length > maxStr.length) maxStr = cStr;
    }

    return maxStr.length;
};

module.exports = lengthOfLongestSubstring;
