function curry(fn) {
    let args = [].slice.call(arguments, 1)
    let needArgsLen = fn.length
    console.log(needArgsLen)
}


var fn = curry(function(a, b, c) {
    console.log([a, b, c]);
});

// fn("a", "b", "c") // ["a", "b", "c"]
// fn("a", "b")("c") // ["a", "b", "c"]
// fn("a")("b")("c") // ["a", "b", "c"]
// fn("a")("b", "c") // ["a", "b", "c"]