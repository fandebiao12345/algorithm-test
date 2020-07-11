/*
 * @Description: file content
 * @Author: 卢大鹏
 * @Date: 2020-07-11 14:33:04
 * @LastEditors: 卢大鹏
 * @LastEditTime: 2020-07-11 14:36:07
 */ 
function isContain(arr1, arr2) {
    let arr1Srr = arr1.join('')
    let arr2Srr = arr2.join('')
    let re = new RegExp(arr2Srr)
    console.log(arr1Srr)
    console.log(re)
    return re.test(arr1Srr)
}


console.log(isContain([1,2,3,4,5], [1,2,4,3]))