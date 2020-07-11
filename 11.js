/*
 * @Description: file content
 * @Author: 卢大鹏
 * @Date: 2020-07-02 14:24:47
 * @LastEditors: 卢大鹏
 * @LastEditTime: 2020-07-10 10:59:43
 */ 
let a = 0

Object.defineProperty(global, 'a', {
    get() {
        return ++a
    }
})


if (a == 1 && a == 2 && a == 3) {

    console.log('yay');
  
  }