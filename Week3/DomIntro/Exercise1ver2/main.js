function getPlayingFieldDimensions() {
    const playingField = document.getElementById("playing-field")
    return {
        width: parseInt(getComputedStyle(playingField).width) || 0,
        height: parseInt(getComputedStyle(playingField).height) || 0,
        borderWidth: parseInt(getComputedStyle(playingField).borderWidth) || 0
    }
}

const ballElement = document.getElementById("ball");

const ball = {
    element: ballElement,
    width: parseInt(getComputedStyle(ballElement).width),
    x: parseInt(getComputedStyle(ballElement).left) || 0,
    y: parseInt(getComputedStyle(ballElement).top) || 0,
    step: 15,
    moveRight: function() {
        let fieldDimensions = getPlayingFieldDimensions();
        if (this.x < fieldDimensions.width - this.width - 2 * fieldDimensions.borderWidth - this.step) {
            this.x += this.step
            this.element.style.left = this.x + "px"
        }
    },
    moveLeft: function() {
        let fieldDimensions = getPlayingFieldDimensions();
        if (this.x > fieldDimensions.borderWidth + this.step) {
            this.x -= this.step
            this.element.style.left = this.x + "px"
        }
    },
    moveUp: function() {
        let fieldDimensions = getPlayingFieldDimensions();
        if (this.y > fieldDimensions.borderWidth + this.step) {
            this.y -= this.step
            this.element.style.top = this.y + "px"
        }
    },
    moveDown: function() {
        let fieldDimensions = getPlayingFieldDimensions();
        if (this.y < fieldDimensions.height - this.width - 2 * fieldDimensions.borderWidth - this.step) {
            this.y += this.step
            this.element.style.top = this.y + "px"
        }
    }
}

const downArrow = document.getElementById("down")
const upArrow = document.getElementById("up")
const leftArrow = document.getElementById("left")
const rightArrow = document.getElementById("right")

downArrow.onclick = function () {
    ball.moveDown()
}
upArrow.onclick = function () {
    ball.moveUp()
}
leftArrow.onclick = function () {
    ball.moveLeft()
}
rightArrow.onclick = function () {
    ball.moveRight()
}


window.onkeydown = function(event) {
    switch(event.code){
        case 'ArrowUp':
            ball.moveUp()
            break
        case 'ArrowDown':
            ball.moveDown()
            break
        case 'ArrowLeft':
            ball.moveLeft()
            break
        case 'ArrowRight':
            ball.moveRight()
            break
    }
}   