// Escribe aquí tu codigo Javascript

var opc="0";

while (opc != "T")
 {
	 opc=prompt("Escribe la letra de la opción deseada: (S) Sumar - (R) Raíz Cuadrada- (A) Ayuda - (T) Terminar","");
	 if (opc=="S") suma();
	 if (opc=="R") raiz();
	 if (opc=="A") ayuda();
 }

function suma(){	
	 var a,b;
	 a=prompt("Escribe el primer sumando","");
	 a=parseFloat(a);
	 b=prompt("Escribe el segundo sumando","");
	 b=parseFloat(b);
	 alert("La suma de "+ a +" y "+ b +" es "+(a+b));
}

function raiz(){
 var a;
 a=prompt("Escribe el radicando ","");
 a=parseFloat(a);
 alert("La raíz cuadrada de "+ a +" es "+Math.sqrt(a));
}

function ayuda(){
 alert("Pulsa S si quieres sumar\n\tPulsa R para la raíz cuadrada\n\tPulsa A para acceder a la ayuda\n\tPulsa T para acabar");
}


