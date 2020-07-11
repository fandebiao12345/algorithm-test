/*
 * @Description: file content
 * @Author: 卢大鹏
 * @Date: 2020-07-03 10:35:35
 * @LastEditors: 卢大鹏
 * @LastEditTime: 2020-07-03 11:59:57
 */
function binarySearch(arr, num) {
    let startIndex = 0
    let endIndex = arr.length - 1
    while (endIndex >= startIndex) {
        var middleIndex = parseInt(startIndex + (endIndex - startIndex) / 2);

        if (num == arr[middleIndex]) {
            return middleIndex
        } else if (num < arr[middleIndex]) {
            endIndex = middleIndex - 1
            
        } else if (num > arr[middleIndex]) {
            startIndex = middleIndex + 1
            
        }
        

    }
    console.log(startIndex, endIndex)
    return -1



}


console.log(binarySearch([5, 13, 19, 21, 37, 56, 64, 75, 80, 88, 92], 16))
                        //0   1   2   3   4  5    6  7    8   9   10