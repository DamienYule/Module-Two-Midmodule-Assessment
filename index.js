
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
        event.preventDefault()
        //History 
        
        let newArray = []
        for (let i = 0; i < num.value; i++) {
            newArray[i] = arrayOfdice[Math.floor(Math.random() * 6)]
        }
        console.log(newArray)
        //get number of dice
        //output dice 
        //output sum of dice 
        let sum = 0
        for(let i = 0; i < newArray.length; i++){
            if (newArray[i] === '&#9856'){
                sum += 1
            }else if (newArray[i] === '&#9857'){
                sum += 2
            }else if (newArray[i] === '&#9858'){
                sum += 3 
            }else if (newArray[i] === '&#9859'){
                sum += 4
            }else if (newArray[i] === '&#9860'){
                sum += 5
            } else {
                sum += 6
            }
            
        }
        let newListItem = document.createElement('li')
        newListItem.innerHTML = `${sum} ${newArray.join('')}` 
        ul.appendChild(newListItem)
        
        sumOutPut.innerHTML = `Sum = ${sum}`
        diceOutput.innerHTML = newArray.join('')
    })
    
    
})