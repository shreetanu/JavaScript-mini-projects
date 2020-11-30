document.addEventListener('DOMContentLoaded',()=>{
	//card options
	const cardArr = [
	{
		name:'fries',
		img: 'fries.png'
	},
	{
		name:'fries',
		img: 'fries.png'
	},
	{
		name:'cheeseburger',
		img: 'cheeseburger.png'
	},
	{
		name:'cheeseburger',
		img: 'cheeseburger.png'
	},
	{
		name:'milkshake',
		img: 'milkshake.png'
	},
	{
		name:'milkshake',
		img: 'milkshake.png'
	},
	{
		name:'pizza',
		img: 'pizza.png'
	},
	{
		name:'pizza',
		img: 'pizza.png'
	},
	{
		name:'ice-cream',
		img: 'ice-cream.png'
	},
	{
		name:'ice-cream',
		img: 'ice-cream.png'
	},
	{
		name:'hotdog',
		img: 'hotdog.png'
	},
	{
		name:'hotdog',
		img: 'hotdog.png'
	}
   ]
   cardArr.sort(()=> 0.5 - Math.random())
   const grid = document.querySelector('.grid')
   const resultDisplay = document.querySelector('#result')
   var cardsChosen = []
   var cardsChosenId = []
   var cardsWon = []
//create your board
function createBoard(){
	for(let i=0; i < 12;i++)
	{
		var card = document.createElement('img')
		card.setAttribute('src','blank.png')
		card.setAttribute('data-id',i)
		card.addEventListener('click',flipcard)
		grid.appendChild(card)
	}
}
//check for matches
function checkForMatch(){
	var cards = document.querySelectorAll('img')
	const optionOne = cardsChosenId[0]
	const optionTwo = cardsChosenId[1]
	if(cardsChosen[0] === cardsChosen[1])
	{
		alert('A match yayaya!!')
		cards[optionOne].setAttribute('src','white.png')
		cards[optionTwo].setAttribute('src','white.png')
		cardsWon.push(cardsChosen)
	}
	else{
		cards[optionOne].setAttribute('src','blank.png')
		cards[optionTwo].setAttribute('src','blank.png')
		alert("Try Again")
	}
	cardsChosen = []
	cardsChosenId = []
	resultDisplay.textContent = cardsWon.length
	if(cardsWon.length === cardArr.length/2){
		resultDisplay.textContent = "Congratulations! You found em all"
	}

}

//flipcard
function flipcard(){
	var cardId = this.getAttribute('data-id')
	cardsChosen.push(cardArr[cardId].name)
	cardsChosenId.push(cardId)
	this.setAttribute('src',cardArr[cardId].img)
	if(cardsChosen.length === 2)
	{
		setTimeout(checkForMatch,500)
	}
}

createBoard()
})