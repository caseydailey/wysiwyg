'use strict';

console.log('js is connected');
// Create an array of objects that represents famous people:
const people = [
	{
	  title: "Samurai",
	  name: "Tomoe Gozen",
	  bio: "Serving under Minamoto Yoshinaka, Tomoe was a total badass.",
	  image: "images/NakanoTakeko_2.jpg",
	  lifespan: {
	    birth: 1747,
	    death: 1797
	  }
	},
	{
	  title: "Samurai",
	  name: "Tomoe Gozen",
	  bio: "Serving under Minamoto Yoshinaka, Tomoe was a total badass.",
	  image: "images/NakanoTakeko_2.jpg",
	  lifespan: {
	    birth: 1747,
	    death: 1797
	  }
	},
	{
	  title: "Samurai",
	  name: "Tomoe Gozen",
	  bio: "Serving under Minamoto Yoshinaka, Tomoe was a total badass.",
	  image: "images/NakanoTakeko_2.jpg",
	  lifespan: {
	    birth: 1747,
	    death: 1797
	  }
	},
	{
	  title: "Samurai",
	  name: "Tomoe Gozen",
	  bio: "Serving under Minamoto Yoshinaka, Tomoe was a total badass.",
	  image: "images/NakanoTakeko_2.jpg",
	  lifespan: {
	    birth: 1747,
	    death: 1797
	  }
	},
	{
	  title: "Samurai",
	  name: "Tomoe Gozen",
	  bio: "Serving under Minamoto Yoshinaka, Tomoe was a total badass.",
	  image: "images/NakanoTakeko_2.jpg",
	  lifespan: {
	    birth: 1747,
	    death: 1797
	  }
	},
	{
	  title: "Samurai",
	  name: "Tomoe Gozen",
	  bio: "Serving under Minamoto Yoshinaka, Tomoe was a total badass.",
	  image: "images/NakanoTakeko_2.jpg",
	  lifespan: {
	    birth: 1747,
	    death: 1797
	  }
	}
];

//declare some globala
const input = document.getElementById("text-area");
const cardDiv = document.getElementById("cards-div");
const body = document.querySelector("body");
let card = "";

//event listener is added to body to find clicks and enter
body.addEventListener("click", activateCard);
input.addEventListener("keyup", reWriteCard);

//activatCard checks to see if the click was on a card
//gets all the cards (in an HTML collection) makes an array and for each item(so we can call forEach on it), 
//removes the class active (if its there)
//then assigns the class active to the parentNode of whatever was clicked on and puts focus on input.
function activateCard (e) {
	if (e.target.parentNode.classList.contains("card")) {
		let cardsArray = Array.from(document.getElementsByClassName("card"));
		cardsArray.forEach((card) => card.classList.remove("active"));
		e.target.parentNode.classList.add("active");
		input.focus();
		input.value = "";

	}
}

//any keyup in input fires this handler which gets the value of input
//gets the card with the class active, 
//finds the bio section in there and assigns inputValue as its innerHTML
function reWriteCard (event) {
	if(event.keyCode === 13){
		deactivate();
	} else {
		let inputValue = input.value;
		let card = document.querySelector(".active");
		let bio = card.querySelector("section");
		bio.innerHTML = inputValue;
	}
}

// helper to 'deactivate' the card invoked when user hits enter
function deactivate(){
	let cardsArray = [...document.getElementsByClassName("card")];
	cardsArray.forEach((card) => card.classList.remove("active"));
	input.value = "";
	input.blur();
}

// puts each person on the dom in a card
people.forEach(function(person){

		card = `<article class= "card">
				<h3>${person.name}</h3>
				<h5>${person.title}</h5>
				<img src="${person.image}" class="pic">
				<section>${person.bio}</section> 
				<footer>Lifespan: ${person.lifespan.birth} to ${person.lifespan.death}</footer>
				</article>`;

		cardDiv.innerHTML += card;
});


	


	




 