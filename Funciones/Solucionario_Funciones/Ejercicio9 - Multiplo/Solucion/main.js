// Escribe aquí tu codigo Javascript

function mult10(x){

	var salida="Múltiplos de "+x+"\n";
	var mult=0;

	for(i=1;i<=10;i++){
		mult=mult+x;
		salida=salida+mult+" - ";
	}
	return salida;
}	

a=parseInt(prompt("Escribe un número entero",""));
alert(mult10(a));


