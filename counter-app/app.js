const counterDisplay = document.querySelector('.counterDisplay')
const decreaseBtn = document.querySelector('.decrease')
const reserBtn = document.querySelector('.reset')
const increaseBtn = document.querySelector('.increase')
const action = document.querySelector('.action')
// set counter value to Zero
let counter = 0

decreaseBtn.addEventListener('click', function(){
    counter--
    counterDisplay.textContent = counter
})
reserBtn.addEventListener('click', function() {
    counter = 0
    counterDisplay.textContent = counter
})

increaseBtn.addEventListener('click', function(){
    counter++
    counterDisplay.textContent = counter
})

const newSpanTag = document.createElement('span')
newSpanTag.textContent = 'by Conrad'
action.appendChild(newSpanTag)
newSpanTag.style.display = 'block'
newSpanTag.style.paddingTop = '30px'
newSpanTag.style.fontWeight = '600'

const mainHeading = document.querySelector('#main-heading');
const otherHeading = document.querySelector('#other-heading');
const excitedText = document.createElement('span');

excitedText.textContent = '!!!';
mainHeading.appendChild(excitedText);
otherHeading.appendChild(excitedText);