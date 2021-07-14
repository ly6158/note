/**
 * 普通方式解决
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays_ = function (nums1, nums2) {
    let arr = [].concat(nums1, nums2).sort();
    if (arr.length === 0) {
        return 0;
    } else if (arr.length === 1) {
        return arr[0];
    } else {
        let remainder = arr.length % 2;// 余数
        let result = parseInt(arr.length / 2);// 整除结果

        if (remainder === 1) {
            return arr[result];
        } else {
            return (arr[result - 1] + arr[result]) / 2;
        }
    }
};

/**
 * 归并排序方式
 * @param nums1
 * @param nums2
 * @returns {number|*}
 */
const findMedianSortedArrays = function (nums1, nums2) {
    let i = 0, j = 0, result = [];
    // 归并排序
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            result.push(nums1[i]);
            i++;
        } else {
            result.push(nums2[j]);
            j++;
        }
    }
    // 边界判断
    if (i < nums1.length) result.push(...nums1.slice(i, nums1.length));
    if (j < nums2.length) result.push(...nums2.slice(j, nums2.length));

    console.log(result)

    // 计算中间值
    let index = parseInt(result.length / 2);
    if (result.length % 2 === 0) {
        return (result[index] + result[index - 1]) / 2
    } else {
        return result[index]
    }

};

module.exports = findMedianSortedArrays;
