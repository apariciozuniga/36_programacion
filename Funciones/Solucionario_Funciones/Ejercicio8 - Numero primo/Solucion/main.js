// Escribe aquí tu codigo Javascript


var num;
num=prompt("Escribe un número entero","");
num=parseInt(num,10);

if (primo(num)=="S") {
	alert(num+" es primo");
}else{
	alert(num+" no es primo");
}

function primo(x){

	var resto;

	for (i=2;i<x-1;i++){
		resto=x % i;
		
		if ((resto==0) && (x != 2)){
			return "N";
		}
	}
	return "S";
}

