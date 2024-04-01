const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

const score = document.querySelector(".score--value")
const finalscore = document.querySelector(".final-score > span")
const menu = document.querySelector(".menu-screen")
const buttonplay = document.querySelector(".btn-play")

const size = 30

const inicialposition = {x: 300, y: 570}
const p1 = {x: 0, y: 90}
const p2 = {x: 0, y: 150}
const p3 = {x: 0, y: 210}
const p4 = {x: 0, y: 270}
const p5 = {x: 0, y: 330}
const p6 = {x: 0, y: 390}
const p7 = {x: 0, y: 450}
let parede1 = [p1, , {x: 30, y: 90}, {x: 60, y: 90}]
let parede2 = [p2, , {x: 30, y: 150}, {x: 60, y: 150}]
let parede3 = [p3, , {x: 30, y: 210}, {x: 60, y: 210}]
let parede4 = [p4, , {x: 30, y: 270}, {x: 60, y: 270}]
let parede5 = [p5, , {x: 30, y: 330}, {x: 60, y: 330}]
let parede6 = [p6, , {x: 30, y: 390}, {x: 60, y: 390}]
let parede7 = [p7, , {x: 30, y: 450}, {x: 60, y: 450}]
let personagem = [inicialposition]

const incrementscore = () => {
    score.innerText = +score.innerText + 10
}

const randomnumber = (min, max) => {
    return Math.round(Math.random() * (max - min) + min)
}


const food = {
    x: 0,
    y: 0,
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

const drawpersonagem = () => {
    ctx.fillStyle = "#ddd"
    
    personagem.forEach((position, index) =>{
        if(index == personagem.length - 1) {
            ctx.fillStyle = "white"
        }

        ctx.fillRect(position.x, position.y, size, size)
    })
}

const drawparede1 = () => {
    ctx.fillStyle = "#ddd"
    
    parede1.forEach((position, index) =>{
        if(index == parede1.length - 1) {
            ctx.fillStyle = "ddd"
        }

        ctx.fillRect(position.x, position.y, size, size)
    })
}
const drawparede2 = () => {
    ctx.fillStyle = "#ddd"
    
    parede2.forEach((position, index) =>{
        if(index == parede2.length - 1) {
            ctx.fillStyle = "ddd"
        }

        ctx.fillRect(position.x, position.y, size, size)
    })
}
const drawparede3 = () => {
    ctx.fillStyle = "#ddd"
    
    parede3.forEach((position, index) =>{
        if(index == parede3.length - 1) {
            ctx.fillStyle = "ddd"
        }

        ctx.fillRect(position.x, position.y, size, size)
    })
}
const drawparede4 = () => {
    ctx.fillStyle = "#ddd"
    
    parede4.forEach((position, index) =>{
        if(index == parede4.length - 1) {
            ctx.fillStyle = "ddd"
        }

        ctx.fillRect(position.x, position.y, size, size)
    })
}
const drawparede5 = () => {
    ctx.fillStyle = "#ddd"
    
    parede5.forEach((position, index) =>{
        if(index == parede5.length - 1) {
            ctx.fillStyle = "ddd"
        }

        ctx.fillRect(position.x, position.y, size, size)
    })
}
const drawparede6 = () => {
    ctx.fillStyle = "#ddd"
    
    parede6.forEach((position, index) =>{
        if(index == parede6.length - 1) {
            ctx.fillStyle = "ddd"
        }

        ctx.fillRect(position.x, position.y, size, size)
    })
}
const drawparede7 = () => {
    ctx.fillStyle = "#ddd"
    
    parede7.forEach((position, index) =>{
        if(index == parede7.length - 1) {
            ctx.fillStyle = "ddd"
        }

        ctx.fillRect(position.x, position.y, size, size)
    })
}

const movepersonagem = () => {
    if(!direction) return

    const head = personagem[personagem.length - 1]

    personagem.shift()

    if(direction == "right") {
        personagem.push({x: head.x + size, y: head.y})
    }
    
    if(direction == "left") {
        personagem.push({x: head.x - size, y: head.y})
    }

    if(direction == "down") {
        personagem.push({x: head.x,  y: head.y + size})
    }

    if(direction == "up") {
        personagem.push({x: head.x, y: head.y - size})
    }
}

const moveparede1 = () => {
    if(!direction) return

    const par1 = parede1[parede1.length - 1]

    parede1.shift()

        parede1.push({x: par1.x + size, y: par1.y})
    
       
}
const moveparede2 = () => {
    if(!direction) return

    const par1 = parede2[parede2.length - 1]

    parede2.shift()

        parede2.push({x: par1.x + size, y: par1.y})
    
       
}
const moveparede3 = () => {
    if(!direction) return

    const par1 = parede3[parede3.length - 1]

    parede3.shift()

        parede3.push({x: par1.x + size, y: par1.y})
    
       
}
const moveparede4 = () => {
    if(!direction) return

    const par1 = parede4[parede4.length - 1]

    parede4.shift()

        parede4.push({x: par1.x + size, y: par1.y})
    
       
}
const moveparede5 = () => {
    if(!direction) return

    const par1 = parede5[parede5.length - 1]

    parede5.shift()

        parede5.push({x: par1.x + size, y: par1.y})
    
       
}
const moveparede6 = () => {
    if(!direction) return

    const par1 = parede6[parede6.length - 1]

    parede6.shift()

        parede6.push({x: par1.x + size, y: par1.y})
    
       
}
const moveparede7 = () => {
    if(!direction) return

    const par7 = parede7[parede7.length - 1]

    parede7.shift()

        parede7.push({x: par7.x + size, y: par7.y})


}
const colision7 = () => {
    const ponta7 = parede7[parede7.length - 1]
        const canvaslimit = canvas.width - size
        
        const wallcolision7 =
            ponta7.x < 0 || ponta7.x > canvaslimit

        if(wallcolision7) {
            
            parede7.push({x: ponta7.x - size, y: ponta7.y})
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

const checkcolision = () => {
    const head = personagem[personagem.length - 1]
    const canvaslimit = canvas.width - size
    const neckindex = personagem.length - 2
    const wallcolision =
        head.x < 0 || head.x > canvaslimit || head.y < 0 || head.y > canvaslimit

    const selfcolision = personagem.find((position, index) => {
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
    drawparede1()
    drawparede2()
    drawparede3()
    drawparede4()
    drawparede5()
    drawparede6()
    drawparede7()
    drawfood()
    moveparede1()
    moveparede2()
    moveparede3()
    moveparede4()
    moveparede5()
    moveparede6()
    moveparede7()
    movepersonagem()
    drawpersonagem()
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

    personagem = [inicialposition]
})


//7 paredes com intervalos de 1 bloco deixar 3 linhas no final.