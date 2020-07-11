/*
 * @Description: file content
 * @Author: 卢大鹏
 * @Date: 2020-07-11 15:14:30
 * @LastEditors: 卢大鹏
 * @LastEditTime: 2020-07-11 15:19:27
 */ 
let arr = [1,2,3,4,5,[1,2,3,[12]],7,8,9,10]

let str = JSON.stringify(arr)

let a = str.replace( /(\[|\])/g, '')
console.log( a.split(','))