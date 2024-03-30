const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

const size = 30

const cobra = [{x: 270, y: 240}]

let direction, loopid

const drawcobra = () => {
    ctx.fillStyle = "#ddd"
    
    cobra.forEach((position, index) =>{
        if(index == cobra.length - 1) {
            ctx.fillStyle = "white"
        }

        ctx.fillRect(position.x, position.y, size, size)
    })
}

const movecobra = () => {
    if(!direction) return

    const head = cobra[cobra.length - 1]

    cobra.shift()

    if(direction == "right") {
        cobra.push({x: head.x + size, y: head.y})
    }
    
    if(direction == "left") {
        cobra.push({x: head.x - size, y: head.y})
    }

    if(direction == "down") {
        cobra.push({x: head.x,  y: head.y + size})
    }

    if(direction == "up") {
        cobra.push({x: head.x, y: head.y - size})
    }
}

const drawgrid = () => {
    ctx.lineWidth = 1
    ctx.strokeStyle = "#191919"

    for (let i = 30; i < canvas.width; i += 30) {
        ctx.beginPath()
        ctx.lineTo(i, 0)
        ctx.lineTo(i, 600)
        ctx.stroke()

        ctx.beginPath()
        ctx.lineTo(0, i)
        ctx.lineTo(600, i)
        ctx.stroke()
    }

}

const gameloop = () => {
    clearInterval(loopid)
    ctx.clearRect(0, 0, 600, 600)

    movecobra()

    drawcobra()

    loopid = setTimeout(() => {
        gameloop()
    }, 300)
}

//gameloop()

document.addEventListener("keydown", ({key}) => {

    if (key == "ArrowRight" && direction != "left") {direction = "right"}
    if (key == "ArrowLeft" && direction != "right") {direction = "left"}
    if (key == "ArrowDown" && direction != "up") {direction = "down"}
    if (key == "ArrowUp" && direction != "down") {direction = "up"}


})