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
function bombMaker(){
    let array_bombs = []
    for(let i=0;i<16;i++){
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
    for(let i=0;i<100;i++){
        let square = cellMaker(i+1)
        square.addEventListener("click",function(){
            this.classList.add('cyan')
        })
        grid.appendChild(square)
    }
}
const button = document.getElementById('play')
button.addEventListener("click", function(){
    newGame()
})