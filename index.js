//SMART goal 
    // remove non DRY code
    // Style into a user friendly app 
    // reduce to one loop 
document.addEventListener('DOMContentLoaded', () => {
    const num = document.querySelector("#number-of-dice")
    const diceOutput = document.querySelector("#dice-para")
    const sumOutPut = document.querySelector("#sum-para")
    const button = document.querySelector("#btn")
    const ul = document.querySelector("ul")
    const arrayOfdice = [
        '&#9856',
        '&#9857',
        '&#9858',
        '&#9859',
        '&#9860',
        '&#9861',
    ]
    button.addEventListener('click', () => {        
        let newArray = []
        for (let i = 0; i < num.value; i++) {
            newArray[i] = arrayOfdice[Math.floor(Math.random() * 6)]
        }
        let sum = 0
        for(let i = 0; i < newArray.length; i++){
            if (arrayOfdice.includes(newArray[i])){
            sum += arrayOfdice.indexOf(newArray[i]) + 1 
            }     
        }
        let newListItem = document.createElement('li')
        newListItem.innerHTML = `${sum} ${newArray.join('')}` 
        ul.appendChild(newListItem)
        
        sumOutPut.innerHTML = `Sum = ${sum}`
        diceOutput.innerHTML = newArray.join('')
    })
    
    
})

