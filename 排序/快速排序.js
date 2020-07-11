/*
 * @Description: file content
 * @Author: 卢大鹏
 * @Date: 2020-07-06 13:44:39
 * @LastEditors: 卢大鹏
 * @LastEditTime: 2020-07-06 13:50:23
 */ 
function quickSort(arr) {
    if(arr.length < 2) return arr
    let index = Math.floor(arr.length / 2)
    let left = []
    let right = []
    let num = arr.splice(index, 1)[0]
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < num){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left), num, ...quickSort(right)]
}

console.log(quickSort([0,21,45,752,12,4,66,4]))