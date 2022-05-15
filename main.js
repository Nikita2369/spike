const = btnPrev = document.querySelector(".slider .button .prev")
const = btnNext = document.querySelector(".slider .button .prev")
const = imgList = document.querySelectorAll(".slider .photo img")
let i = 0;

btnNext.onclick = function() {
	imgList[i].className = '';
	i++;
	if (i >= imgList.length) {i = 0;}
	imgList[i].className = 'showed';
}

prevNext.onclick = function() {
	imgList[i].className = '';
	i--;
	if  (i < 0) {i = imgList.length - 1;}
	imgList[i].className = 'showed';
}