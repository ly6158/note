const findMedianSortedArrays = require('../topic/topic_4');

test('寻找两个正序数组的中位数', () => {
    expect(findMedianSortedArrays([1,3],[2])).toBe(2);
    expect(findMedianSortedArrays([1,2],[3,4])).toBe(2.5);
    expect(findMedianSortedArrays([0,0],[0,0])).toBe(0);
    expect(findMedianSortedArrays([],[1])).toBe(1);
    expect(findMedianSortedArrays([2],[])).toBe(2);
});
