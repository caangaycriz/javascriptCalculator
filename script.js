
function event1(x){
		document.getElementById("text1").value+=x;
}
function event2(){
		var x = document.getElementById("text1").value;
		document.getElementById("text1").value = eval(x);
}
function clear(y){
		var y = document.getElementById("text1");
		y.remove(y.selectedIndex);



}