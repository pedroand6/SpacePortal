function verificaClick(){
	if (document.getElementById("tagsa").style.display==="flex"){
		document.getElementById("tagsa").style.display="none";
	}
	else{
		document.getElementById("tagsa").style.display="flex";
	}
}

function click2(){
	if (document.getElementById("menu21a").style.display==="block"){
		document.getElementById("menu21a").style.display="none";
	}
	else {
		document.getElementById("menu21a").style.display="block";
	}
}

function click1(){
	if (document.getElementById("menu22a").style.display==="block"){
		document.getElementById("menu22a").style.display="none";
	}
	else {
		document.getElementById("menu22a").style.display="block";
	}
}

function load(){
	document.getElementById("loading").style.display='none';
	if (document.getElementById("loading").style.display ='none') {
		document.getElementById("body").style.overflow='visible';
	}
	else {
		document.getElementById("body").style.overflow='hidden';
	}
}