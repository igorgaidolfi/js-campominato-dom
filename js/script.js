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
        grid.appendChild(square)
    }
})