// This script is a script to add the purchase alert when pressing the button

// Getting the button and body
let btn = document.getElementById("big");
let body = document.body;
btn.addEventListener("click", ()=>{

	// Adding the click event to the button and creating the alert
	let alert = document.createElement("div");
	let nav = document.querySelector("#nav")
	alert.classList.add("alert");
	alert.classList.add("alert-success");
	alert.textContent = "Purchase Successful";
	alert.style.position = "absolute";
	alert.style.top = "0";
	alert.style.width = "50%";
	alert.style.margin = "auto";
	alert.style.zIndex = 4;
	alert.style.textAlign = "left";
	let op = 0.1;
	alert.style.opacity = 0;
	nav.appendChild(alert);

	// The fade in function
	if(op == 0.1){
		let timer = setInterval(function(){
			if (op >= 1){
				clearInterval(timer);
			}
			alert.style.opacity = op;
			alert.style.filter = 'alpha(opacity=' + op * 100+ ")";
			op += op*0.1;
		}, 25);
	}
	let i = 0;

	// Timer to keep the alert on screen
	let timer2 = setInterval(function(){
		i++;
		console.log(i);
		if (i >= 90){
			clearInterval(timer2);
			i = 0;
			let timer3 = setInterval(function(){
				// Fading the alert out
				if (op <= 0.1){
					clearInterval(timer3);
					op = 0;
					nav.removeChild(alert);
				}
				console.log(op);
				alert.style.opacity = op;
				alert.style.filter = 'alpha(opacity=' + op * 100+ ")";
				op -= op*0.1;
			}, 25);
		}
	}, 100)
})