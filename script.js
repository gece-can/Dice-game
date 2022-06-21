// Generate a random number from 1 to 6

const firstRandomNum = Math.floor(Math.random() *6) + 1 

//images/dice1.png upto images/dice6
const firstDiceImage = 'assets/dice' + firstRandomNum + '.png';

document.querySelectorAll('img')[0].setAttribute('src', firstDiceImage)

// Generate a random number from 1 to 6

const secondRandomNum = Math.floor(Math.random() *6) + 1 

//images/dice1.png upto images/dice6
const secondDiceImage = 'assets/dice' + secondRandomNum + '.png';

document.querySelectorAll('img')[1].setAttribute('src', secondDiceImage)

//Logic for winner
if (firstRandomNum > secondRandomNum) {
    document.querySelector('h1').innerHTML= 'The Winner İs User 1'
}
else if ( secondRandomNum > firstRandomNum) {
    document.querySelector('h1').innerHTML= 'The Winner İs User 2'
}
else{
    document.querySelector('h1').innerHTML = "It's a Draw!"
}
