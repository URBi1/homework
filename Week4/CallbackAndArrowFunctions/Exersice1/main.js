const first = function (callback) { //receive the function as a parameter
    setTimeout(function () {
        console.log("should be first")
        callback() //this is the `second` function being invoked
    }, 3000)
}

const second = function () {
    console.log("should be second")
}

first(second) //pass the second function to the first, as an argument