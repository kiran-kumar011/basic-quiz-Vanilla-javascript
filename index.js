
var question1;
var score = 0;
var count = 0;
const q = [{
	title :  "What is the HTML tag under which one can write the JavaScript code?",
	options : [ "javascript", "scripted", "script", "js"],
	answer : 2
},
{
	title : "Choose the correct JavaScript syntax to change the content of the following HTML code.",
	options: ["document.getElement(“geek”).innerHTML=”I am a Geek”;","document.getElementById(“geek”).innerHTML=”I am a Geek”;","document.getId(“geek”)=”I am a Geek”;","document.getElementById(“geek”).innerHTML=I am a Geek;"],
	answer : 1
},
{
	title: "Which of the following is the correct syntax to display “GeeksforGeeks” in an alert box using JavaScript?",
	options: ["alertbox(“GeeksforGeeks”);", "msg(“GeeksforGeeks”);","msgbox(“GeeksforGeeks”);", "alert(“GeeksforGeeks”);"],
	answer: 3	
},
{
	title: "What is the correct syntax for referring to an external script called “geek.js”?",
	options: ["script src=”geek.js”", "script href=”geek.js”", "script ref=”geek.js”","script name=”geek.js”"],
	answer: 0
},
{
	title: "The external JavaScript file must contain <script> tag. True or False?",
	options: ["True", "False"],
	answer: 1
},
{
	title: " Which of the following is not a reserved word in JavaScript?",
	options: ["interface", "throws", "program", "short"],
	answer: 2
}];



const Container = document.querySelector(".container");
var index = null;
class Questions {
	constructor(element,question, options, answer) {
		this.element = element;
		this.question = question;
		this.options = options;
		this.answer = answer;
	}

	static createElementOption(index, text) {
		const div = document.createElement("div");
		const button = document.createElement("button");
		div.classList.add("listsOptions");
		button.classList.add("buttons")
		button.setAttribute("data-index", index);
		button.textContent = text;
		button.addEventListener("click", handleClick);
		div.appendChild(button);
		return div;
	}

	// displaying all the options.
	display(options, answer) {
		// this.element.innerHTML = "";
		let header = document.createElement("h1");
		header.textContent = this.question;
		this.element.appendChild(header);
		for(let index in this.options) {
			this.element.appendChild(Questions.createElementOption(index, this.options[index]));
		}
	}	
	isAnswer(id) {
		return id == this.answer;    
	}
}


function handleClick(e) {
	var id = e.target.dataset.index;
	if(question1.isAnswer(id)) {
		Container.innerHTML = `<h2 class="correct">correct</h2>`
		score++;
	} else Container.innerHTML = `<h2 class="wrong">Wrong</h2>`;
	setTimeout(displayNext, 1000);
	// displayNext();
}

function restartGame(e) {
	if(e.target.className === "restartGame"){
		count = 0;
		score = 0;
		Container.innerHTML = "";
		displayNext();
	}else {
		Container.innerHTML = `<h1>Thank you for Playing.</h1>`;
	};
}

function displayNext() {
	if (count === q.length) {
		Container.innerHTML = "";
		Container.innerHTML = `<div class="result"><h1>You correctly answered ${score} questions out of ${q.length}.</h1><h1>Do you want to try again ?</h1></div>`;
		let buttonDiv = document.createElement("div");
		buttonDiv.classList.add("resultButton");
		buttonDiv.innerHTML = `<button class="restartGame">Yes</button><button class="endGame">No</button>`
		buttonDiv.addEventListener("click", restartGame);
		Container.appendChild(buttonDiv);
		return Container;
	}
	Container.innerHTML = "";
	question1 = new Questions(Container,q[count].title, q[count].options, q[count].answer);
	question1.display();
	count++;
}
displayNext();





