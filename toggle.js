const flip = document.getElementsByClassName("switchCont")[0];
const circle = document.getElementsByClassName("circle")[0];


let left = true;

function flipSwitch() {
	if (left) {
		left = false;
		flip.setAttribute("style", "--background:rgb(211, 34, 34);");
		circle.setAttribute(
			"style",
			"left: calc(100% - 2.75rem); background: radial-gradient(circle at left, rgba(204,204,204,1) 0%, rgba(124,124,124,1) 100%)"
		);
	} else {
		left = true;
		flip.setAttribute("style", "--backgroung: #ee55aa;");
		circle.setAttribute(
			"style",
			"left: 4pxs; background: radial-gradient(circle at top left, rgba(255, 255, 255, 1) 0%, rgba(166,166,166,1) 100%)"
		);

	}
}

flip.addEventListener("click", function () {
	flipSwitch();
    switchActivationAllBands(left);
});
