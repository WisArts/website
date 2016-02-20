function checkopg(answer, right, x, z) {
	if (answer.toLowerCase() == right){
		document.getElementById(z).style.display = "none";
		document.getElementById(x).style.display = "inline-block";
	}
	else{
		document.getElementById(x).style.display = "none";
		document.getElementById(z).style.display = "inline-block";
	}	
}

function checkhf3() {
	checkopg(document.getElementById("1").value, "1", "1a", "1b");
	checkopg(document.getElementById("2").value, "2", "2a", "2b");
	checkopg(document.getElementById("3").value, "3", "3a", "3b");
	checkopg(document.getElementById("4").value, "4", "4a", "4b");
	checkopg(document.getElementById("5").value, "5", "5a", "5b");
	checkopg(document.getElementById("6").value, "6", "6a", "6b");
	checkopg(document.getElementById("7").value, "7", "7a", "7b");
	checkopg(document.getElementById("8").value, "8", "8a", "8b");
}