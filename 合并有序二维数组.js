/*
 * @Description: file content
 * @Author: 卢大鹏
 * @Date: 2020-07-14 11:26:44
 * @LastEditors: 卢大鹏
 * @LastEditTime: 2020-07-23 16:38:01
 */ 
const merge1 = (nums1, m, nums2, n) => {
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




/**
 * 解题思路：
 * 双指针 从头到尾比较 两个数组的第一个值，根据值的大小依次插入到新的数组中
 * 空间复杂度：O(m + n)
 * 时间复杂度：O(m + n)
 * @param {Array} arr1
 * @param {Array} arr2
 */

// function mergeSort(arr) {
//     const len = arr.length
//     // 处理边界情况
//     if(len <= 1) {
//         return arr[0]
//     }   
//     // 计算分割点
//     const mid = Math.floor(len / 2)    
//     // 递归分割左子数组，然后合并为有序数组
//     const leftArr = mergeSort(arr.slice(0, mid)) 
//     // 递归分割右子数组，然后合并为有序数组
//     const rightArr = mergeSort(arr.slice(mid,len))  
//     // 合并左右两个有序数组
//     console.log(leftArr)
//     console.log(rightArr)
//     arr = mergeArr(leftArr, rightArr)  
//     // 返回合并后的结果
//     return arr
// }
  
// function mergeArr(arr1, arr2) {  
//     // 初始化两个指针，分别指向 arr1 和 arr2
//     let i = 0, j = 0   
//     // 初始化结果数组
//     const res = []    
//     // 缓存arr1的长度
//     const len1 = arr1.length  
//     // 缓存arr2的长度
//     const len2 = arr2.length  
//     // 合并两个子数组
//     while(i < len1 && j < len2) {
//         if(arr1[i] < arr2[j]) {
//             res.push(arr1[i])
//             i++
//         } else {
//             res.push(arr2[j])
//             j++
//         }
//     }
//     // 若其中一个子数组首先被合并完全，则直接拼接另一个子数组的剩余部分
//     if(i<len1) {
//         return res.concat(arr1.slice(i))
//     } else {
//         return res.concat(arr2.slice(j))
//     }
// }



function mergeSort(arr){
    if(arr.length < 2){
        return arr[0]
    }
    let middle = Math.floor(arr.length / 2)
    let arr1 = arr.slice(0,middle)
    let arr2 = arr.slice(middle)
    return merge(mergeSort(arr1), mergeSort(arr2))
}


function merge (arr1, arr2) {
    let temp = []
    while(arr1.length && arr2.length){
        if(arr1[0] <= arr2[0]){
            temp.push(arr1.shift())
        }else{
            temp.push(arr2.shift())
        }
    }
    if(arr1.length){
        temp.push(...arr1)
    }
    if(arr2.length){
        temp.push(...arr2)
    }
    return temp
    
}

var arr=[[1,2,4],[2,3,7],[3,5,7],[4,5,8]]
console.log(mergeSort(arr))