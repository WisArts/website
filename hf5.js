/*par 1 */

function par1checkopg12(answer, right,opg, tip) {
	if (answer.toLowerCase() == right) {
		opg.style.backgroundColor = "green";
	}
	else {
		opg.style.backgroundColor = "red";
		tip.style.display = "inline-block"
	}
}

function checkpar1() {
	document.getElementById("fouttip1").style.display = "none";
	par1checkopg12(document.getElementById("form-opg1-1").value, "9",document.getElementById("form-opg1-1"), document.getElementById("fouttip1"));
	par1checkopg12(document.getElementById("form-opg1-2").value, "4",document.getElementById("form-opg1-2"), document.getElementById("fouttip1"));
	par1checkopg12(document.getElementById("form-opg1-3").value, "1",document.getElementById("form-opg1-3"), document.getElementById("fouttip1"));
	par1checkopg12(document.getElementById("form-opg1-4").value, "0",document.getElementById("form-opg1-4"), document.getElementById("fouttip1"));
	par1checkopg12(document.getElementById("form-opg1-5").value, "1",document.getElementById("form-opg1-5"), document.getElementById("fouttip1"));
	par1checkopg12(document.getElementById("form-opg1-6").value, "4",document.getElementById("form-opg1-6"),document.getElementById("fouttip1"));
	par1checkopg12(document.getElementById("form-opg1-7").value, "9",document.getElementById("form-opg1-7"),document.getElementById("fouttip1"));
	
	document.getElementById("fouttip2").style.display = "none";
	par1checkopg12(document.getElementById("form-opg2-1").value, "-9",document.getElementById("form-opg2-1"), document.getElementById("fouttip2"));
	par1checkopg12(document.getElementById("form-opg2-2").value, "-4",document.getElementById("form-opg2-2"),document.getElementById("fouttip2"));
	par1checkopg12(document.getElementById("form-opg2-3").value, "-1",document.getElementById("form-opg2-3"), document.getElementById("fouttip2"));
	par1checkopg12(document.getElementById("form-opg2-4").value, "0",document.getElementById("form-opg2-4"), document.getElementById("fouttip2"));
	par1checkopg12(document.getElementById("form-opg2-5").value, "-1",document.getElementById("form-opg2-5"), document.getElementById("fouttip2"));
	par1checkopg12(document.getElementById("form-opg2-6").value, "-4",document.getElementById("form-opg2-6"),document.getElementById("fouttip2"));
	par1checkopg12(document.getElementById("form-opg2-7").value, "-9",document.getElementById("form-opg2-7"), document.getElementById("fouttip2"));
}

function red(box) {
	box.style.backgroundColor = "red";
}

function green(box) {
	box.style.backgroundColor  = "green";
}

function par1opg3a() {
	red(document.getElementById("form-opg3-1"));
}

function par1opg3b(){
	green(document.getElementById("form-opg3-2"));
}

function par1opg3() {
	checkformpar1(document.getElementById("form-opg3-3").value, "y=4x^2", "4x^2=y", document.getElementById("form-opg3-3"), document.getElementById("fouttip3"))
}

function checkformpar1(answer,right1, right2, box,fouttip) {
	if(answer.toLowerCase() == right1 || answer.toLowerCase() == right2) {
		box.style.backgroundColor = "green";
		fouttip.style.display = "none"
	}	
	else {
		box.style.backgroundColor = "red";
		fouttip.style.display = "inline-block"
	}
}

/*par 2*/

function checkpar2opg1 (){
	gocheckpar2opg1(document.getElementById("par2opg1a").value, "a=p^2-12p", "p^2-12p=a",document.getElementById("par2opg1a"))
	gocheckpar2opg1(document.getElementById("par2opg1b").value, "b=4p^2-48p", "4p^2-48p=b",document.getElementById("par2opg1b"))
	gocheckpar2opg1(document.getElementById("par2opg1c").value, "c=20p+200", "20p+200=c",document.getElementById("par2opg1c"))
	gocheckpar2opg1(document.getElementById("par2opg1d").value, "d=-2r^2+10r", "-2r^2+10r=d",document.getElementById("par2opg1d"))
	gocheckpar2opg1(document.getElementById("par2opg1e").value, "e=3e^2", "3e^2=e",document.getElementById("par2opg1e"))
	gocheckpar2opg1(document.getElementById("par2opg1f").value, "f=-16f^2", "-16f^2=f",document.getElementById("par2opg1f"))
}

function gocheckpar2opg1 (answer, right1, right2, box) {
	if(answer.toLowerCase() == right1 || answer.toLowerCase() == right2) {
		box.style.backgroundColor = "green";
	}
	else {
		box.style.backgroundColor = "red";
	}
}














