/*
 * @Description: file content
 * @Author: 卢大鹏
 * @Date: 2020-07-07 16:17:09
 * @LastEditors: 卢大鹏
 * @LastEditTime: 2020-07-07 17:05:14
 */ 
class MyPromise{

    constructor(fn) {
        this.pedding = true
        
        this.resolveCbs = []
        this.rejectCbs = []
        this.fn = fn
        setTimeout(() => {
            this.fn(this.resolve.bind(this))
        })
    }
    then(resolveCb, rejectCb) {
        this.resolveCbs.push(resolveCb)
        return this
    }
    resolve() {
        this.resolveCbs.forEach(cb => cb())
    }
    reject() {
        this.resolveCbs.forEach(cb => cb())
    }
    reject(rejectCb) {
        rejectCb && this.rejectCbs.push(rejectCb)
    }
}

let p = new MyPromise((resolve, reject) => {
    resolve()
})
.then(() => {
    console.log(111)
    return new MyPromise((resolve) => {
        resolve(10)
    })
}).then(() => {
    console.log(1000)
})

