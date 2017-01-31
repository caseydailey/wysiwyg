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
input.addEventListener("keypress", reWriteCard);

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

//any keypress in input fires this handler which gets the value of input
//gets the card with the class active, finds the section in there and assigns inputValue as its innerHTML
function reWriteCard (event) {
	let inputValue = input.value;
	console.log('inputValue:', inputValue);
	let card = document.querySelector(".active");
	let bio = card.querySelector("section");
	bio.innerHTML = inputValue;
	console.log('inputValue:', inputValue);
}



//call forEach on people and sort based on odd or even index, plugging values in a string 
//and setting it as the innerHTML of the cardDiv
people.forEach(function(p, i){

	if (i === 0 || i % 2 === 0) {

		card = `<article class= "even card">
				<h3>${p.name}</h3>
				<h5>${p.title}</h5>
				<img src="${p.image}" class="pic">
				<section>${p.bio}</section> 
				<footer>Lifespan: ${p.lifespan.birth} to ${p.lifespan.death}</footer>
				</article>`;

		cardDiv.innerHTML += card;

	} else {

		card = `<article class= "odd card">
				<h3>${p.name}</h3>
				<h5>${p.title}</h5>
				<img src="${p.image}" class="pic">
				<section>${p.bio}</section> 
				<footer>Lifespan: ${p.lifespan.birth} to ${p.lifespan.death}</footer>
				</article>`;

		cardDiv.innerHTML += card;
	}

});


	


	




 