/*
 * @Description: file content
 * @Author: 卢大鹏
 * @Date: 2020-07-03 09:59:05
 * @LastEditors: 卢大鹏
 * @LastEditTime: 2020-07-03 10:06:56
 */ 
function selectSort(arr){
    let minIndex, temp
    for(let i = 0; i < arr.length; i++){
        minIndex = i
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[minIndex]){ // 寻找最小的数
                minIndex = j            // 将最小的数索引保存
            }
        }
        temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
    return arr
}

console.log(selectSort([3,1,5,0,4]))