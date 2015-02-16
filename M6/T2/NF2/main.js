// var a = [1,2,[3,4]];
// a=a.concat([4,5,6]);
// a[a.length] = [1,2,3];
// alert(a[3]);
var msg ="resultats práctica M6.NF2.ex1\n";
var isDebug = true;
/* 
	Enunciado: 
		5.1 Exercici : Arrays
		Crear un array anomenat mesos i que emmagatzemi el nom dels dotze mesos de l'any. Mostrar per pantalla els dotze noms utilitzant la funció alert().
	Prc: al concatenar una matriz ya muestra directamente los elementos. 
*/
	if (!isDebug) {
		var a = ["Gener","Febrer","març","abril","maig","juny","juliol","agost","setembre","octubre","novembre","desembre"];
		// alert(a);
		msg += "Llista de mesos: " + a + "\n";
	}
/* 
	Enunciado: 
		5.2 Exercici : Operadors
		A partir del següent array que es proporciona:
			var valors = [true, 5, false, "hola", "adios", 2];
		- Determinar quin dels dos elements de text és major
		- Utilitzant exclusivament els dos valors booleans del array, determinar els operadors necessaris per obtenir un resultat true i un altre resultat false
		- Determinar el resultat de les cinc operacions matemàtiques realitzades amb els dos elements numèrics
*/
	if (!isDebug) {
		var valors = [true, 5, false, "hola", "adios", 2];
		if (valors[3]>valors[4]) alert("Al 4t element es major."); else alert("Al 3t element es major.");
		if (valors[0]&&valors[2]) alert("&& AND, donar resultat TRUE"); 
		if (valors[0]||valors[2]) alert("|| OR, donar resultat TRUE"); 
		if (!(valors[0]&&valors[2])) alert("&& AND, donar resultat FALSE"); 
		if (!(valors[0]||valors[2])) alert("|| OR, donar resultat FALSE"); 
	}
/* 
	Enunciado: 
		5.3 Exercici DNI
		El càlcul de la lletra del Document Nacional d'Identitat (DNI) és un procés matemàtic senzill que es basa a obtenir la resta de la divisió sencera del nombre de DNI i el número 23. A partir de la resta de la divisió, s'obté la lletra seleccionant-la dins d'un array de lletres. El array de lletres és:
		var lletres = ['T','R','W','A','G','M','I','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','I','T'];
		Per tant si la resta de la divisió és 0, la lletra del DNI és la T i si la resta és 3 la lletra és l'A. Amb aquestes dades, elaborar un petit script que:
		Emmagatzemi en una variable el nombre de DNI indicat per l'usuari i en una altra variable la lletra del DNI que s'ha indicat. (Pista: si es vol demanar directament a l'usuari que indiqui el seu nombre i la seva lletra, es pot utilitzar la funció prompt())
		En primer lloc (i en una sola instrucció) s'ha de comprovar si el nombre és menor que 0 o major que 99999999. Si aquest és el cas, es mostra un missatge a l'usuari indicant que el nombre proporcionat no és vàlid i el programa no mostra més missatges.
		Si el nombre és vàlid, es calcula la lletra que li correspon segons el mètode explicat anteriorment.
		Una vegada calculada la lletra, s'ha de comparar amb la lletra indicada per l'usuari. Si no coincideixen, es mostra un missatge a l'usuari dient-li que la lletra que ha indicat no és correcta. En un altre cas, es mostra un missatge indicant que el nombre i la lletra de DNI són correctes.
*/
			/* Prc: Sumar cada número recogiendo el resto de la división. ERROR...*/
					// var lletres = ['T','R','W','A','G','M','I','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T']; //var cadena="TRWAGMYFPDXBNJZSQVHLCKET";
					// var DNI = "46786783";
					// var suma = 0;
					// DNI=DNI.split("");
					// for (i in DNI) {suma+=DNI[i];}
					// letra = lletres [suma%23];
					// msg += "DNI " + DNI + " Letra (" + letra + ")";
//	Prc: Es el resto del DNI/27 
	if (!isDebug) {
			// var lletres = ['T','R','W','A','G','M','I','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T']; //var cadena="TRWAGMYFPDXBNJZSQVHLCKET";
			// var letra = '';
			// var DNI = "46786783e";
			// DNI = prompt ('Introduzca su DNI: (si indica la letra se comparará)',DNI);
			// alert(DNI.length());
			// letra = DNI.substring(DNI.length()-1,1).toUpperCase();
			// alert(Letra);
			// if (!isNaN(letra)) {letra='';} else {DNI=DNI.substring(-1);}
			// var letraOK = lletres [DNI%23];
			// msg += "DNI " + DNI + " Letra (" + letraOK + ")";
			// if (letra != '') { msg+=", la letra indicada es "; if (letra=letraOK) { msg+="correcta."} else {"incorrecta."}; msg+="\n"; }

			var lletres = ['T','R','W','A','G','M','I','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T']; //var cadena="TRWAGMYFPDXBNJZSQVHLCKET";
			var letra = '';
			var DNI = "46786783";
			DNI = prompt ('Introduzca su DNI: (sin letra)',DNI);
			letra = prompt ('Introduzca la letra de su DNI: ',letra);
			var letraOK = lletres [DNI%23];
			msg += "DNI " + DNI + " Letra (" + letraOK + ")";
			if (letra != '') { msg+=", la letra indicada es "; if (letra=letraOK) { msg+="correcta."} else {"incorrecta."}; msg+="\n"; }
	}
/* 
	Enunciado: 
		5.4 Exercici Factorial
		El factorial d'un nombre enter n és una operació matemàtica que consisteix a multiplicar tots els factors n x (n-1) x (n-2) x ... x 1. Així, el factorial de 5 (escrit com 5!) és igual a: 5! = 5 x 4 x 3 x 2 x 1 = 120 Utilitzant l'estructura for, crear un script que calculi el factorial d'un nombre enter.
*/
	if (!isDebug) {
			var f = 5; // factorial a cálcular.
			do { f = prompt ('Cálcular factorial del Nº: (Introduzca un número correcto)', f); } while (isNaN(f))
			var res =f;
			for (var i = f-1; i > 1; i--) { res *= i };
			msg += "Factorial del Nº {" + f + "} =  " + res + "\n";
	}
/* 
	Enunciado: 
		5.5 Text al revés
		Escriu un programa que posi al revés un text donat. S'ha de poder escollir si es vol caràcter a caràcter o paraula a paraula.
		text: "hola a tots"
		caracter a caracter: "stot a aloh"
		paraula a paraula : "tots a hola"
*/
	if (!isDebug) {
			var frase = "Frase de prueba";
			frase= prompt ('Frase o palabras que desee voltear:', frase); 
			var isLetras = (prompt ('Desea voltear Letras o Palabras (L letras, cualquier otra cosa palabras): ', 'L')==='L') ;
			var a = frase.split('');
			var fraseVolteada = '';
			if (!isLetras) a = frase.split(" ");
			for (var i = a.length-1; i >=0; i--) { fraseVolteada += a[i]; if (!isLetras) {fraseVolteada += " "};  };
			msg += "Frase 		  : '" + frase + "'\n";
			msg += "Frase Volteada: '" + fraseVolteada + "'\n";
	}
/* 
	Enunciado: 
		5.6 Exercici de Cadenes
		Escriure funcions que donades dues cadenes de caràcters: a) Indiqui si la segona cadena és una subcadena de la primera. Per exemple, ’cadena’ és una subcadena de ’subcadena’. b) Retorni la que sigui anterior en ordre alfábetico. Per exemple, si rep ’kde’ i ’gnome’ ha de retornar ’gnome’.
*/
	if (!isDebug) {
		var cadena1 = "kde" ;
		var cadena2 = "gnome";
		cadena1 = prompt('Introduzca la 1ª cadena: ',cadena1);
		cadena2 = prompt('Introduzca la 2ª cadena: ',cadena2);
			if (cadena1.indexOf(cadena2)!=-1) msg += " la cadena("+cadena2+') esta contenida en la cadena('+cadena1+')\n'; 
			else msg += " la cadena('"+cadena2+') NO esta contenida en la cadena('+cadena1+')\n'; 
			if (cadena1>cadena2) msg += " la cadena mas pequeña en orden alfabetico es: ('"+cadena2+'), la 2ª.\n'; 
			else msg += " la cadena mas pequeña en orden alfabetico es: ("+cadena1+'), la 1ª.\n'; 
	}
/* 
	Enunciado: 
		5.7 Nombres Romans
		Escriu un programa que converteixi un enter positiu en un nombre romà. Assumeix que els nombres a convertir són menors a 3500. Les regles per construir un nombre romà són les que segueixen. En el sistema de nombres romans, i és el símbol per 1, v per 5, x per 10, l per 50, c per 100, d per 500 i m per 1000. Les regles per formar numeros romans les tens aquí. Exemple:
		entrada : 1990
		sortida : mcmxc
*/
	if (!isDebug) {
			var aDec = Array(1000,500,100,50,40,10,9,4,5,1);			// Array de números decimales.
			var aRom = Array("M","D","C","L","XC","X","IX","IV","V","I");		// Array con la equivalencia en números romanos.
			var n = 5; 											// número a cálcular en Romano.
			var nn = "";										// Número convertido en Romano.
			do { n = prompt ('Cálcular el número Romano del Nº: (Introduzca un número correcto)', n); } while (isNaN(n))
			if (n==0)  nn = "Creo que es 0 ;-)";
			for (var i = 0;  i < aDec.length; i++) {
				while ( n >= aDec[i] ) { n -= aDec[i]; nn += aRom[i]; };
			};
		msg += "Nº {" + n + "} en Romano es: '" + nn + "'. \n"; 
	}
/* 
	Enunciado: 
		5.8 Joc d'adivinació
		Considerem el següent joc entre els jugadors A (endeví) y P (pensador): P pensa un nombre entre 1 y 1000. A intenta adivinar-ho mitjançant aproximacions fins que adivina el número. Suposem que la màquina interpreta el paper d'endeví i l'usuari ha de pensar el número. El pensador només pot donar 3 tipus de respostes per cada nombre proposat per l'endeví:
		"MAJOR" : vol dir que el numero proposat pel l'endeví és major que el que ha pensat.
		"MENOR" : vol dir que el numero proposat pel l'endeví és menor que el que ha pensat.
		"OK" : vol dir que ha adivinat el número.
*/
	if (!isDebug) {
		var n=500; 		// Número a adivinar.
		var r='';		// Respuesta del usuario.
		var i=0;		// Número de intentos.
			while (r!='=')
			{
				i++;
				do { r = prompt ('El Nº ' + n + ' es: mayor (>), menor (<) o igual (=). Al número que has imaginado. \nValores posibles: [>,<,=]', r); } while ("><=".indexOf(n)!=-1)
				switch (r) {
					case "<" : n = n + (parseInt ( (1000-n) / 2 )); break;
					case ">" : n -= parseInt ( n / 2 );				break;
				}
			}
		msg += "Has imaginado el Nº {" + n + "}  MOLA ;-)\n\t lo ha calculado en [" + i + "] intentos.\n"; 
	}

/* 
	Enunciado: 
		5.9 Palíndrom
		Volem sapiguer si una determinada paraula o frase és un palíndrom. Escriu un programa que demani una text i aquest indiqui si és o no palíndrom.
*/
	if (!isDebug) {
		var frase = prompt ('Comprobar si la frase indicada es palíndroma.\n Introduzca una frase para comprobar:', 'oso'); 
		var len = frase.length;
		var aa = frase.split("");
		var isOk = true;
		for (var i = 0; i < parseInt(len/2); i++) { 
			if (aa[i] != aa[len-i-1]) {
				isOk=false; break;	
			};
		};
		msg += "La palabra/frase " + frase + " ";
		if (!isOk) msg += "NO ";
		msg += " es palíndroma.";
	}

/* 
	Enunciado: 
		5.10 Triangle bonic
		Utilitzant bucles i amb els dígits {0...9} es poden dibuixar triangles com el següent:
									---------1-------- 
									        232
									       34543
									      4567654
									     567898765
									    67890109876
									   7890123210987
									  890123454321098
									 90123456765432109
									0123456789876543210
*/
	if (!isDebug) {
		var iNum = 0;		// Número
		// var iOpe = 0;		// Operación a realizar al número ( iNum += iOpe )
		// var isInv = false;	// es Inverso? (centro col=9)
		msg += "<Code> Triangulo Bonico :<BR>\n";
		for (var lin = 1; lin <= 10; lin++) { // recorre las líneas.
			msg += "<br>\n";
			for (var spc = 0; spc <= (10-lin); spc ++) { msg += "&nbsp"; } // espacios de la izquierda.
			for (var nn  = 1; nn <= lin; nn++) { iNum = (iNum + 1 ) % 10; msg += iNum; };
			for (var nn  = 1; nn <  lin; nn++) { iNum--; if (iNum==-1) iNum=9; msg += iNum; };
		};
		msg += "<br></Code>\n";
		document.write (msg);
		msg = "";
	}

/* 
	Enunciado: 
		5.11 Xifrat Julio César
		El dictador Julio César utilitzava un codi quan volia mantenir en secret un missatge. El xifrat consistia a substituir la primera lletra de l'alfabet, A, per la quarta, D, i així successivament amb les altres, és a dir, B, per la cinquena, I, la tercera, C, per la sisena, F ...
		L'alfabet llatí que utilitzava Julio César constava de 21 lletres, per tant la substitució de lletres per xifrar o desxifrar missatges queda descrita en la taula següent:
		Alfabet original : A B C D E F G H I K L M N O P Q R S T V
		Alfabet xifrat   : D E F G H I K L M N O P Q R S T V A B C
		Aquest tipus de xifrat és un codi de rotació, on la clau de rotació és 3.
		Escriu un programa que permeti xifrar o desxifrar utilitzant un codi de rotació. La clau del codi podrà triar-se.
*/
	if (!isDebug) {
		var letras = "ABCDEFGHIKLMNOPQRSTV";		// Letras a cifrar.
// charAt ::::		var aLetras = letras.split("");				// convierto el string en array para mejor manipulación.
		var clave = 3;								// número para realizar la clave.
		var sOriginal = 
		 "Frase original.";			// Frase que cifraremos.
		//IVDAH RVMKMQDO.
		//FRAundefinedE ORIGINAL.
		var sXifrat = "";							// Frase finalmente cifrada.
		var iPos = 0;								// Posición en el string.
			sOriginal = prompt ('Introduzca la frase a cifrar:', sOriginal); 
			do { clave = prompt ('Introduzca una clave númerica: (Introduzca un número correcto)', clave); } while (isNaN(clave))
		var aOriginal = sOriginal.split("");
		clave = parseInt(clave);
		msg += "<Code> Xifrat Julio César: <BR>\n";
		for(var i in aOriginal) { 
			iPos = letras.indexOf(aOriginal[i].toUpperCase());
			if (iPos > -1) 
				{
					iPos += clave;
					if (iPos < 0) iPos += 20; else iPos %= 20;
				 	sXifrat += aLetras.charAt(iPos); //  aLetras[iPos];
				}
			else 
				{ sXifrat += aOriginal[i]; }
		}
		msg += "Frase Introducida: __" + sOriginal + "__<br>\n";
		msg += "Frase cifrada:     __" + sXifrat   + "__<br>\n";
		msg += "<br></Code>\n";

		document.write (msg);
		msg = "";
	}
/* 
	Enunciado: 
		5.12 Password segur?
			Volem saber si una contrasenya és segura. Per tal que sigui segura ha de complir les següents regles:
			Ha de contenir almenys una vocal.
			No ha de tenir tres vocals consecutives o tres consonants consecutives.
			No ha de tenir dues ocurrències consecutives de la mateixa lletra, excepte per ‘ee’ o ‘oo’.
			La longitud mínima és de 6 caràcters i la màxima de 10.
			Els espais en blanc no estan permesos
*/
	if (!isDebug) {
			var sOriginal = prompt ('Introduzca una contraseña:', "333eee"); 
			var sErrores = ""; 					// guardar los errores encontrados según la especificación del cliente.
			var len = sOriginal.length;		// logitud de la cadena.
			var isOk = false; 					// verificar si todo es correcto.
			var msgPwd = "";
			if (sOriginal.indexOf("aa")>-1) {  msgPwd += "- La cadena contiene dos vocales seguidas ('aa').\n"; }
			else if (sOriginal.indexOf("ii")>-1) {  msgPwd += "- La cadena contiene dos vocales seguidas ('ii').\n"; }
			else if (sOriginal.indexOf("uu")>-1) {  msgPwd += "- La cadena contiene dos vocales seguidas ('uu').\n"; }
			else if (len<6) { msgPwd += "- La cadena debe contener almenos 6 carácteres.\n"; }
			else if (len>10) { msgPwd += "- La cadena debe contener como máximo 10 carácteres.\n"; }
			else if (sOriginal.indexOf(" ")>-1) {  msgPwd += "- La cadena no debe contener espacios en blanco.\n"; }
			else {isOk = true;} // de momento Ok.

			if (isOk) {
				var isVocal = false; 				// verificar si hay alguna vocal.
				var c   = ""; 						// recoger el carácter para verificaciónes.
				var ccc = "abcdefghiklmnopqrstv"; 	// caracteres que no pueden estar por triplicado.
				var cc  = ""; 						// Para verificar el carácter anterior.
				var ccn = 0;						// para contar el número de carácteres repetidos.
				isOk=true;		// Pondremos verificación como Ok, si hay duplicidades se marcará como Ko.
				// comprobar si existen tres carácteres seguidos.
				// comprobar también si hay vocal.
				for (var i = 0; i <= len; i++) {								// recorrer elementos.
					//c = sOriginal.substring(sOriginal,i+1,1);						// recoger el elemento en la posición.
					c = sOriginal.charAt(i).toLowerCase();										//  idem ...
					if (!isVocal && "aeiou".indexOf(c)>-1) {isVocal=true;}		// Si el carácter actual es una vocal, indicar que hay vocales.
					if (ccc.indexOf(c)>-1) 			// Es una vocal o una consonante.
						{ if(c == cc) {ccn++;} else {ccn=1;}}	// Si es la misma de antes +1 en el contador, sino inicializa el contador.
					cc = c;														// asignar la variable para verificar en la siguiente iteración.
					if (ccn==3) { isOk = false; 
						msgPwd += "El carácter '" + c + "', no puede repetirse 3 veces.\n"; }
				};
				if (!isVocal) { isOk = false; msgPwd += "Debe introducir almenos una vocal.\n"; }
			};
			if (!isOk) { msg += "La contraseña no es correcta: \nRevise:\n" + msgPwd };
	}
/* 
	Enunciado: 
		5.13 Separador de milers
			Escriure una funció que rebi una cadena que conté un llarg nombre enter i retorni una cadena amb el nombre i les separacions de milers. Per exemple, si rep ’1234567890’, ha de retornar ’1.234.567.890’.
*/
	if (!isDebug) {
			var sOriginal = prompt ('Introduzca un número:',1588978978545); 
			msg += sOriginal 			+ ": Valor introducido\n";
			msg += PonPuntos(sOriginal) + ": Valor formateado con puntos de millar.\n";
	}
/* 
	Enunciado: 
		5.14 Retrat Robot
			A causa de les dificultats de la policia per identificar als sospitosos, fa temps es va decidir substituir als dibuixants tradicionals per un programa que efectua el retrat robot a partir d'una descripció del delinqüent.
			El programa prototip requeria descripcions molt simples, on cada línia del dibuix es consigna indicant quantes vegades apareix cada caràcter.
			Descripció = "1 9W;1 1|2 1o1 1o2 1|;1@4 1U4 1@;1 1|2 3=2 1|;2 1\5_1/"
			Dibuix:
			 WWWWWWWWW
			 |  O O  |
			@    U    @
			 |  ===  |
			  \_____/

WWWWWWWWW
| o o |
@ U @
| === |
\_____/
			Escriu un programa que llegeixi una cadena de text on se separen pel caràcter ';' la descripció de cada línia del dibuix. El programa ha de donar com resultat el dibuix corresponent.
Atención !!: mascará (1 número // 1 carácter)
*/
	if (isDebug) {
			var sOriginal = prompt ('Introduce la sequencia para el robot:',"1 9W;1 1|2 1o1 1o2 1|;1@4 1U4 1@;1 1|2 3=2 1|;2 1\\5_1/"); 
			var aLin = sOriginal.split(";"); // Separar las líneas.
			msg += "<Code> Retrato robot: <BR>\n";
			for(iLin in aLin) // recorrer las líneas.
			{
				msg += "<br>\n";
				var ss = aLin[iLin];	// cadena a procesar.
for (i=0; i<ss.length; i+=2)
{
	var c = ss.charAt(i+1);
	var n = parseInt(ss.charAt(i));
	if (c==" ") c = "&nbsp";
	for (ii=1; ii<=n; ii++ )
		msg += c;					// aCol[iCol][1] carácteres a repetir.
}


// 				var aCol =  separaIntStr(aa[iLin]); // Convertir la línea en las repeticiones a realizar.
// 				for (iCol in aCol){	// Recorrer columnas.
// 					for (i=1;i<=aCol[iCol][0];iCol++) // aCol[iCol][0] número de veces a repetir.
// 						msg += aCol[i][1];					// aCol[iCol][1] carácteres a repetir.
// 			}
// //			for (var spc = 0; spc <= (10-lin); spc ++) { msg += "&nbsp"; } // espacios de la izquierda.
		};
		msg += "<br></Code>\n";
		document.write (msg);
		msg = "";

	}






if (msg!="") alert(msg); // Postrar resultado.
// javascript::ejercicio01().
// var ultimo = array.pop(1);
/*

5.15 Instruens Fabulam
5.16 Dibuixos amb asteriscos
*/