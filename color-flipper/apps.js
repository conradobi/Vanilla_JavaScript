
const colors = [
    'Red',
    'Blue',
    'Green',
    '#F23abd',
    "rgba(133,122,200)",
    "#f15025"
]

const bg = document.body
const color = document.querySelector('.color')
const btn = document.getElementById('btn')

btn.addEventListener('click', function() {
    randomNumber = Math.floor(Math.random() * colors.length);
    color.textContent = colors[randomNumber]
    color.style.color = colors[randomNumber]
    bg.style.backgroundColor = colors[randomNumber]
})

window.addEventListener('load', function() {
    bg.style.backgroundColor = colors[randomNumber]
})