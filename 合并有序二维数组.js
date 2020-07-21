/*
 * @Description: file content
 * @Author: 卢大鹏
 * @Date: 2020-07-14 11:26:44
 * @LastEditors: 卢大鹏
 * @LastEditTime: 2020-07-21 17:10:03
 */ 
const merge = (nums1, m, nums2, n) => {
    let index1 = m - 1
    let index2 = n - 1
    let tail = m + n - 1
    while (index2 >= 0) {
        if (nums1[index1] > nums2[index2]) {
            nums1[tail] = nums1[index1]
            index1--
            tail--
        } else {
            nums1[tail] = nums2[index2]
            index2--
            tail--
        }
    }
    return nums1
}


console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))