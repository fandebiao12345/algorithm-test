/*
 * @Description: file content
 * @Author: 卢大鹏
 * @Date: 2020-07-03 10:07:48
 * @LastEditors: 卢大鹏
 * @LastEditTime: 2020-07-03 10:31:19
 */ 
function insertionSort(arr) {
    var len = arr.length;
    var preIndex, current;
    for (var i = 1; i < len; i++) {
        preIndex = i - 1;
        current = arr[i];
        while(preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex+1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex+1] = current;
    }
    return arr;
}

console.log(insertionSort([3,0,5,1,2,8]))