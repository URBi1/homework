const first = function (calback) {
    setTimeout(function () {
        console.log("should be first")
    }, 3000)
}

const second = function () {
    console.log("should be second")
}


first(second)