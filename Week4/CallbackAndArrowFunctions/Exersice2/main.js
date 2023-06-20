let users = []

const getData = function (callback) {
    setTimeout(function () {
        users = [{ name: "Rick" }, { name: "Morty" }]
        console.log("Got users")
        callback()
    }, 3000);
   
}

const displayData = function () {
    console.log("Going to display: " + users)
    for (user of users) {
        console.log(user.name)
    }
}


getData(displayData)

