const colors = ['Red', 'Grey', 'Green', 'Lightgreen', 'Springgreen', 'Red', 'Blue', 'Lightblue', 'Purple', 'salmon', 'Burlywood', 'Chocolate', 'Darkcyan', 'Cornflowerblue', 'Darksalmon', 'Black']

const btn = document.getElementById('btn')
const color = document.querySelector('.color')


btn.addEventListener('click', function(){
    const randomColor = getRandomColor()
    document.body.style.background = colors[randomColor]
    color.textContent = colors[randomColor]

    if (randomColor === colors.indexOf("Black") || randomColor === colors.indexOf("Blue"))  {
        document.body.style.color = "White"
    } else {
        document.body.style.color = ""
    }
    
})

function getRandomColor(){
    return Math.floor(Math.random() * colors.length)
}