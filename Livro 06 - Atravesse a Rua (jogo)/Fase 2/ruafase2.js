const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")


const finalscore = document.querySelector(".final-score > span")
const menu = document.querySelector(".menu-screen")
const menu2 = document.querySelector(".menu-screen2")
const buttonplay = document.querySelector(".btn-play")
const buttonplay2 = document.querySelector(".btn-play2")

const size = 30

const final = {x: 300, y: 30}
const inicialposition = {x: 300, y: 570}

let parede1 = [{x: 0, y: 90}, {x: 30, y: 90}, {x: 60, y: 90 }]
let parede2 = [{x: 120, y: 150}, {x: 150, y: 150}, {x: 180, y: 150}]
let parede3 = [{x: 240, y: 210}, {x: 270, y: 210}, {x: 300, y: 210}]
let parede4 = [{x: 90, y: 270}, {x: 120, y: 270}, {x: 150, y: 270}]
let parede5 = [{x: 0, y: 330}, {x: 30, y: 330}, {x: 60, y: 330}]
let parede6 = [{x: 180, y: 390}, {x: 210, y: 390}, {x: 240, y: 390}]
let parede7 = [{x: 450, y: 450}, {x: 480, y: 450}, {x: 510, y: 450}]
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
        const ponta1 = parede1[parede1.length - 1]
        const canvaslimit = canvas.width - size
        
        const wallcolision1 =
            ponta1.x < 0 || ponta1.x > canvaslimit

        if(wallcolision1) {
            parede1 = [{x: 0, y: 90}, {x: 30, y: 90}, {x: 60, y: 90 }]
        }
       
}
const moveparede2 = () => {
    if(!direction) return

    const par2 = parede2[parede2.length - 1]

    parede2.shift()

        parede2.push({x: par2.x + size, y: par2.y})
        const ponta2 = parede2[parede2.length - 1]
        const canvaslimit = canvas.width - size
        
        const wallcolision2 =
            ponta2.x < 0 || ponta2.x > canvaslimit

        if(wallcolision2) {
            parede2 = [{x: 0, y: 150}, {x: 30, y: 150}, {x: 60, y: 150}]
        }
       
}
const moveparede3 = () => {
    if(!direction) return

    const par3 = parede3[parede3.length - 1]

    parede3.shift()

        parede3.push({x: par3.x + size, y: par3.y})
        const ponta3 = parede3[parede3.length - 1]
        const canvaslimit = canvas.width - size
        
        const wallcolision3 =
            ponta3.x < 0 || ponta3.x > canvaslimit

        if(wallcolision3) {
            parede3 = [{x: 0, y: 210}, {x: 30, y: 210}, {x: 60, y: 210}]
        }
       
}
const moveparede4 = () => {
    if(!direction) return

    const par4 = parede4[parede4.length - 1]

    parede4.shift()

        parede4.push({x: par4.x + size, y: par4.y})
        const ponta4 = parede4[parede4.length - 1]
        const canvaslimit = canvas.width - size
        
        const wallcolision4 =
            ponta4.x < 0 || ponta4.x > canvaslimit

        if(wallcolision4) {
            parede4 = [{x: 0, y: 270}, {x: 30, y: 270}, {x: 60, y: 270}]
        }
       
}
const moveparede5 = () => {
    if(!direction) return

    const par5 = parede5[parede5.length - 1]

    parede5.shift()

        parede5.push({x: par5.x + size, y: par5.y})
        const ponta5 = parede5[parede5.length - 1]
        const canvaslimit = canvas.width - size
        
        const wallcolision5 =
            ponta5.x < 0 || ponta5.x > canvaslimit

        if(wallcolision5) {
            parede5 = [{x: 0, y: 330}, {x: 30, y: 330}, {x: 60, y: 330}]
        }
    
       
}
const moveparede6 = () => {
    if(!direction) return

    const par6 = parede6[parede6.length - 1]

    parede6.shift()

        parede6.push({x: par6.x + size, y: par6.y})
        const ponta6 = parede6[parede6.length - 1]
        const canvaslimit = canvas.width - size
        
        const wallcolision6 =
            ponta6.x < 0 || ponta6.x > canvaslimit

        if(wallcolision6) {
            parede6 = [{x: 0, y: 390}, {x: 30, y: 390}, {x: 60, y: 390}]
        }
    
       
}
const moveparede7 = () => {
    if(!direction) return

    const par7 = parede7[parede7.length - 1]

    parede7.shift()

        parede7.push({x: par7.x + size, y: par7.y})
        const ponta7 = parede7[parede7.length - 1]
        const canvaslimit = canvas.width - size
        
        const wallcolision7 =
            ponta7.x < 0 || ponta7.x > canvaslimit

        if(wallcolision7) {
            parede7 = [{x: 0, y: 450}, {x: 30, y: 450}, {x: 60, y: 450}]
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
    
    const par1 = parede1[parede1.length - 1]
    const par2 = parede2[parede2.length - 1]
    const par3 = parede3[parede3.length - 1]
    const par4 = parede4[parede4.length - 1]
    const par5 = parede5[parede5.length - 1]
    const par6 = parede6[parede6.length - 1]
    const par7 = parede7[parede7.length - 1]

    const wallcolision =
        head.x < 0 || head.x > canvaslimit || head.y < 0 || head.y > canvaslimit


    const colision1 = personagem.find((position) => {
        return position.x == par1.x && position.y == par1.y

    })
    const colision2 = personagem.find((position) => {
        return position.x == par2.x && position.y == par2.y

    })
    const colision3 = personagem.find((position) => {
        return position.x == par3.x && position.y == par3.y

    })
    const colision4 = personagem.find((position) => {
        return position.x == par4.x && position.y == par4.y

    })
    const colision5 = personagem.find((position) => {
        return position.x == par5.x && position.y == par5.y

    })
    const colision6 = personagem.find((position) => {
        return position.x == par6.x && position.y == par6.y

    })
    const colision7 = personagem.find((position) => {
        return position.x == par7.x && position.y == par7.y

    })

    if(wallcolision || colision1 || colision2 || colision3 || colision4 || colision5 || colision6 || colision7) {
        gameover()
    }
}
const checkwin = () => {
    const head = personagem[personagem.length - 1]
    if (head.x == 0 && head.y == 0) {
        youwin()
    }

}
const gameover = () => {
    direction = undefined

    menu.style.display = "flex"
    canvas.style.filter = "blur(8px)"
}

const youwin = () => {
    direction = undefined

    menu2.style.display = "flex"
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
    checkwin()
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

    menu.style.display = "none"
    canvas.style.filter = "none"

    personagem = [inicialposition]
    parede1 = [{x: 0, y: 90}, {x: 30, y: 90}, {x: 60, y: 90 }]
    parede2 = [{x: 120, y: 150}, {x: 150, y: 150}, {x: 180, y: 150}]
    parede3 = [{x: 240, y: 210}, {x: 270, y: 210}, {x: 300, y: 210}]
    parede4 = [{x: 90, y: 270}, {x: 120, y: 270}, {x: 150, y: 270}]
    parede5 = [{x: 0, y: 330}, {x: 30, y: 330}, {x: 60, y: 330}]
    parede6 = [{x: 180, y: 390}, {x: 210, y: 390}, {x: 240, y: 390}]
    parede7 = [{x: 450, y: 450}, {x: 480, y: 450}, {x: 510, y: 450}]
})

buttonplay2.addEventListener("click", () => {
    
    menu2.style.display = "none"
    canvas.style.filter = "none"

    personagem = [inicialposition]
    parede1 = [{x: 0, y: 90}, {x: 30, y: 90}, {x: 60, y: 90 }]
    parede2 = [{x: 120, y: 150}, {x: 150, y: 150}, {x: 180, y: 150}]
    parede3 = [{x: 240, y: 210}, {x: 270, y: 210}, {x: 300, y: 210}]
    parede4 = [{x: 90, y: 270}, {x: 120, y: 270}, {x: 150, y: 270}]
    parede5 = [{x: 0, y: 330}, {x: 30, y: 330}, {x: 60, y: 330}]
    parede6 = [{x: 180, y: 390}, {x: 210, y: 390}, {x: 240, y: 390}]
    parede7 = [{x: 450, y: 450}, {x: 480, y: 450}, {x: 510, y: 450}]
})

//7 paredes com intervalos de 1 bloco deixar 3 linhas no final.