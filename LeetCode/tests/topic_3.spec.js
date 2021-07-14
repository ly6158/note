const lengthOfLongestSubstring = require('../topic/topic_3');

test('无重复字符的最长子串', () => {
    expect(lengthOfLongestSubstring('aab')).toBe(2);
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
    expect(lengthOfLongestSubstring('abcde')).toBe(5);
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
    expect(lengthOfLongestSubstring('')).toBe(0);
});
