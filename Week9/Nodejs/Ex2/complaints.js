const handleComplaints = require('./complaintsHandler')
const { FINANCE, EMOTIONS } = require('./consts')

let complaint1 = {
    text: "I'm not getting enough money",
    type: FINANCE //use the FINANCE type from the consts module
}

let complaint2 = {
    text: "My salary hasn't come in yet",
    type: FINANCE //use the FINANCE type from the consts module
}

let complaint3 = {
    text: "I'm always full of energy",
    type: EMOTIONS //use the EMOTIONS type from the consts module
}

handleComplaints(complaint1) //should print "Money doesn't grow on trees, you know."
handleComplaints(complaint2) //should print "Money doesn't grow on trees, you know."
handleComplaints(complaint3) //should print "It'll pass, as all things do, with time."
