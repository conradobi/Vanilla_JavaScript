const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const bg = document.body
const color = document.querySelector('.color')
const btn = document.getElementById('btn')


bg.addEventListener('DOMcontentloaded', function() {
    hexColors()
})

btn.addEventListener('click', function() {
    hexColors()
})


let randomNum = () => {
    return Math.floor(Math.random() * hex.length)
}

const hexColors = () => {
    let hexColor = '#'
    for(i=0; i<6; i++) {
        hexColor += hex[randomNum()]
    }
    color.textContent = hexColor
    bg.style.backgroundColor = hexColor
}