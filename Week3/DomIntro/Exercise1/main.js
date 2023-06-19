    const downArrow = document.getElementById("down")
    const upArrow = document.getElementById("up")
    const leftArrow = document.getElementById("left")
    const rightArrow = document.getElementById("right")
    let ballStep = 10

    const moveRight = function() {
        const ball = document.getElementById("ball")
        const playingField = document.getElementById("playing-field")
    
        let ballX = parseInt(ball.style.left) || 0
        let playingFieldWidth = parseInt(getComputedStyle(playingField).width) || 0
        let ballWidth = parseInt(getComputedStyle(ball).width)
        let borderWidth = parseInt(getComputedStyle(playingField).borderWidth) || 0
    
        if (ballX < playingFieldWidth - ballWidth - 2 * borderWidth-ballStep) { 
            ballX += ballStep
            ball.style.left = ballX + "px" 
        }
    }
    

    const moveLeft = function(){
        const ball=document.getElementById("ball")
        let ballX = parseInt(ball.style.left)||0
        ballX -= 15
        ball.style.left = ballX + "px" 
    }

    const moveUp = function(){
        const ball=document.getElementById("ball")
        let ballY = parseInt(ball.style.top)||0
        ballY -= 15
        ball.style.top = ballY + "px" 
    }

    const moveDown = function(){
        const ball=document.getElementById("ball")
        let ballY = parseInt(ball.style.top)||0
        ballY += 15
        ball.style.top = ballY + "px" 
    }

    
    downArrow.onclick = function () {
        moveDown()
    }
    upArrow.onclick = function () {
        moveUp()
    } 
    leftArrow.onclick = function () {
        moveLeft()
    } 

    rightArrow.onclick = function () {
        moveRight()
    }

    const header = document.createElement("h1")
    header.innerHTML = "The Best Game Ever"
    header.style.color = "#c0392b"
    header.style.fontFamily = "Helvetica"
    document.body.appendChild(header)

    const subHeader = document.createElement("h2")
    subHeader.innerHTML = "Game by: ~The Creator~"
    subHeader.setAttribute("class", "sub-header")
    document.body.appendChild(subHeader)