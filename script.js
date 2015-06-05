
var img1 = document.querySelectorAll("img");
img1[0].style.marginLeft = "10"
var flag = false;
var walkUp = false;
var walkDown = false;

function walk(){

		// img1[0].style.position = "absolute";
		img1[0].style.marginLeft = "10"
		img1[0].style.marginTop = (window.innerHeight - img1[0].width/1.5).toString() + "px";

		if (img1[0].style.marginLeft == "" || parseInt(img1[0].style.marginLeft) < window.outerWidth - img1[0].width/1.25 && !flag && !walkUp && !walkDown) {
			if (img1[0].style.marginLeft == "")
				img1[0].style.marginLeft = "0"
			var str = parseInt(img1[0].style.marginLeft) + 25
			img1[0].style.marginLeft = str + "px";
		} else if (walkUp){

		} else if (parseInt(img1[0].style.marginLeft) > 10){
			flag = true
			img1[0].style.MozTransform = 'scale(-1,1)'
			var str = parseInt(img1[0].style.marginLeft) - 25
			img1[0].style.marginLeft = str + "px";
		} else {
			img1[0].style.MozTransform = 'scale(1,1)'
			flag = false;
		}
}


function wrapper() {
	window.setInterval(walk, 120);
}

wrapper();
