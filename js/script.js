function checkUniqueBomb(array_bomb){
    let flag = true
    while(flag){
        let bomb = Math.floor(Math.random()*100)+1
        if(!array_bomb.include(bomb)){
            flag = false
        }
    }
    return bomb
}
// function bombMaker(){
//     let array_bomb = []
//     for(let i=0;i<16;i++){
//         array_bomb[i] = ciao
//     }
//     return array_bomb
// }
// function fillBomb(){

// }
function cellMaker(num){
    const element = document.createElement('div')
    element.classList.add('square')
    element.innerText = num
    return element
}

const grid = document.getElementById('grid')
const button = document.getElementById('play')
button.addEventListener("click", function(){
    for(let i=0;i<100;i++){
        let square = cellMaker(i+1)
        square.addEventListener("click",function(){
            this.classList.add('cyan')
        })
        grid.appendChild(square)
    }
})
let pio=[]
for(let i=0;i<5;i++){
    pio[i] = Math.floor(Math.random()*100)+1
}
console.log(pio)