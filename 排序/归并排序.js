/*
 * @Description: file content
 * @Author: 卢大鹏
 * @Date: 2020-07-11 14:28:06
 * @LastEditors: 卢大鹏
 * @LastEditTime: 2020-07-23 16:30:37
 */ 
function mergeSort(arr) {
    if(arr.length < 2){
        return arr
    }
    let middle = Math.floor(arr.length / 2)
    let leftArr = arr.slice(0, middle)
    let rightArr = arr.slice(middle)
    return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(arr1, arr2){
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



console.log(mergeSort([4,1,42,4,1,45,0,1,4]))