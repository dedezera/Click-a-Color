const colors = ['Red', 'Grey', 'Green', 'Lightgreen', 'Springgreen', 'Red', 'Blue', 'Lightblue', 'Purple', 'salmon', 'Burlywood', 'Chocolate', 'Darkcyan', 'Cornflowerblue', 'Darksalmon', 'Black']

const btn = document.getElementById('btn')

const color = document.querySelector('.color')

// No click

btn.addEventListener('click', function(){
    const randomColor = getRandomColor()
    document.body.style.background = colors[randomColor] // Aplicando cor ao background
 //   console.log(randomColor)
    color.textContent = colors[randomColor]
})

// Gerar os núemros randômicos

function getRandomColor(){
    return Math.floor(Math.random() * colors.length)
}