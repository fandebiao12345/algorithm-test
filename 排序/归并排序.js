



function mergeSort(arr) {
    if(arr.length < 2){
        return arr
    }
    let middle = Math.floor(arr.length / 2)

    let left = arr.slice(0, middle)
    let right = arr.slice(middle)

    return merge(mergeSort(left), mergeSort(right))

}

function merge(left, right) {
    console.log('left' + left)
    console.log('right' + right)
    let temp = []
    while(left.length && right.length){
        if(left[0] <= right[0]){
            
            temp.push(left.shift())
        }else{
            temp.push(right.shift())
        }
        
    }
    if(left.length){
        temp = temp.concat(left)
    }
    if(right.length){
  
        temp = temp.concat(right)
    }


    return temp

}




let re = /(ab)(c)/g
let str = 'abcdsdabc'


let result = str.replace(re, '$2$1')

console.log(result)