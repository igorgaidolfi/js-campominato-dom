function checkUniqueBomb(array_bombs){
    let flag = true
    let bomb
    while(flag){
        bomb = Math.floor(Math.random()*100)+1
        if(!array_bombs.includes(bomb)){
            flag = false
        }
    }
    return bomb
}
function bombMaker(bombs){
    let array_bombs = []
    for(let i=0;i<bombs;i++){
        array_bombs.push(checkUniqueBomb(array_bombs))
    }
    return array_bombs
}
function cellMaker(num){
    const element = document.createElement('div')
    element.classList.add('square')
    element.innerText = num
    return element
}

function newGame(){
    const grid = document.getElementById('grid')
    const nBombs = 16;
    const bomb = bombMaker(nBombs)
    let points = 0 
    let gameOver = true
    for(let i=0;i<100;i++){
        let square = cellMaker(i+1)
        square.addEventListener("click",function(){
            if(gameOver){
                if(bomb.includes(i+1)){
                    this.classList.add('red')
                    gameOver = false
                }
                else{
                    this.classList.add('cyan')
                    points++
                    document.getElementById('points').innerText = `Punteggio: ${points}`
                    if(points == 84){
                        gameOver = false
                    }
                }
            }
        })
        grid.appendChild(square)
    }
}
const button = document.getElementById('play')
button.addEventListener("click", function(){
    newGame()
})
