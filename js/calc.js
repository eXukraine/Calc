'use strict'



function calc() {

	let inp = document.createElement("input");
	let rootElem = document.getElementById('root');
		rootElem.appendChild(inp);


	let btn1 = document.createElement('button');
		btn1.innerText = "1"
		rootElem.appendChild(btn1);
		btn1.value = '1'

	let btn2 = document.createElement('button');
		btn2.innerText = "2"
		rootElem.appendChild(btn2);
		btn2.value = '2'

	let btn3 = document.createElement('button');
		btn3.innerText = "3"
		rootElem.appendChild(btn3);
		btn3.value = '3'

	let btn4 = document.createElement('button');
		btn4.innerText = "4"
		rootElem.appendChild(btn4);
		btn4.value = '4'

	let btn5 = document.createElement('button');
		btn5.innerText = "5"
		rootElem.appendChild(btn5);
		btn5.value = '5'

	let btn6 = document.createElement('button');
		btn6.innerText = "6"
		rootElem.appendChild(btn6);
		btn6.value = '6'

	let btn7 = document.createElement('button');
		btn7.innerText = "7"
		rootElem.appendChild(btn7);
		btn7.value = '7'

	let btn8 = document.createElement('button');
		btn8.innerText = "8"
		rootElem.appendChild(btn8);
		btn8.value = '8'

	let btn9 = document.createElement('button');
		btn9.innerText = "9"
		rootElem.appendChild(btn9);
		btn9.value = '9'

	let btn0 = document.createElement('button');
		btn0.innerText = "0"
		rootElem.appendChild(btn0);
		btn0.value = '0'

	let btn10 = document.createElement('button');
		btn10.innerText = "/"
		rootElem.appendChild(btn10);
		btn10.value = '/'

	let btn11 = document.createElement('button');
		btn11.innerText = "+"
		rootElem.appendChild(btn11);
		btn11.value = '+'

	let btn12 = document.createElement('button');
		btn12.innerText = "-"
		rootElem.appendChild(btn12);
		btn12.value = '-'

	let btn13 = document.createElement('button');
		btn13.innerText = "*"
		rootElem.appendChild(btn13);
		btn13.value = '*'

	let btn14 = document.createElement('button')
		btn14.innerText = "="
		rootElem.appendChild(btn14)

	let btn15 = document.createElement('button')
		btn15.innerText = "C"
		rootElem.appendChild(btn15)




	btn1.addEventListener('click', function () { inp.value += this.value })
	btn2.addEventListener('click', function () { inp.value += this.value })
	btn3.addEventListener('click', function () { inp.value += this.value })
	btn4.addEventListener('click', function () { inp.value += this.value })
	btn5.addEventListener('click', function () { inp.value += this.value })
	btn6.addEventListener('click', function () { inp.value += this.value })
	btn7.addEventListener('click', function () { inp.value += this.value })
	btn8.addEventListener('click', function () { inp.value += this.value })
	btn9.addEventListener('click', function () { inp.value += this.value })
	btn0.addEventListener('click', function () { inp.value += this.value })
	btn11.addEventListener('click', function () { inp.value += this.value })
	btn12.addEventListener('click', function () { inp.value += this.value })
	btn13.addEventListener('click', function () { inp.value += this.value })
	btn10.addEventListener('click', function () { inp.value += this.value })
	btn15.addEventListener('click', function () {inp.value = ""})

	btn14.addEventListener('click', function () {inp.value = eval(inp.value)})



	
}
calc()