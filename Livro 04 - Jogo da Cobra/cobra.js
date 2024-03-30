const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

const score = document.querySelector(".score--value")
const finalscore = document.querySelector(".final-score > span")
const menu = document.querySelector(".menu-screen")
const buttonplay = document.querySelector(".btn-play")

const size = 30

const inicialposition = {x: 270, y: 240}

let cobra = [inicialposition]

const incrementscore = () => {
    score.innerText = +score.innerText + 10
}

const randomnumber = (min, max) => {
    return Math.round(Math.random() * (max - min) + min)
}

const randomposition = () => {
    const number = randomnumber(0, canvas.width - size)
    return Math.round(number / 30) * 30
}

const food = {
    x: randomposition(),
    y: randomposition(),
    color: "orange"
}

let direction, loopid

const drawfood = () => {

    const {x, y, color} = food

    ctx.shadowColor = color
    ctx.shadowBlur = 40
    ctx.fillStyle = color
    ctx.fillRect(x, y, size, size)
    ctx.shadowBlur = 0
}

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

const checkfood = () => {
    const head = cobra[cobra.length - 1]

    if(head.x == food.x && head.y == food.y ) {
        incrementscore()
        cobra.push(head)

        let x = randomposition()
        let y = randomposition()
        
        while (cobra.find((position) => position.x == x && position.y == y)){
             x = randomposition()
             y = randomposition()
        }
        food.x = x
        food.y = y
        food.color = "orange"
    }
}

const checkcolision = () => {
    const head = cobra[cobra.length - 1]
    const canvaslimit = canvas.width - size
    const neckindex = cobra.length - 2
    const wallcolision =
        head.x < 0 || head.x > canvaslimit || head.y < 0 || head.y > canvaslimit

    const selfcolision = cobra.find((position, index) => {
        return index < neckindex && position.x == head.x && position.y == head.y

    })

    if(wallcolision || selfcolision) {
        gameover()
    }
}

const gameover = () => {
    direction = undefined

    menu.style.display = "flex"
    finalscore.innerText = score.innerText
    canvas.style.filter = "blur(8px)"
}

const gameloop = () => {
    clearInterval(loopid)

    ctx.clearRect(0, 0, 600, 600)
    drawgrid()
    drawfood()
    movecobra()
    drawcobra()
    checkfood()
    checkcolision()

    loopid = setTimeout(() => {
        gameloop()
    }, 300)
}

gameloop()

document.addEventListener("keydown", ({key}) => {

    if (key == "ArrowRight" && direction != "left") {direction = "right"}
    if (key == "ArrowLeft" && direction != "right") {direction = "left"}
    if (key == "ArrowDown" && direction != "up") {direction = "down"}
    if (key == "ArrowUp" && direction != "down") {direction = "up"}


})

buttonplay.addEventListener("click", () => {
    score.innerText = "00"
    menu.style.display = "none"
    canvas.style.filter = "none"

    cobra = [inicialposition]
})
