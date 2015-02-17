// --------------------------------------------------
// -----
// ----- Retorna el valor recibido como número separado por puntos.
// -----  si no puede identificarlo como número devuelve la cadena sin manipular.
// -----
// Nota:
//	n.length: longitud del string. Falla si se llama como (123), ok ("123").
//  convertir n en string: ret + n (ret string, por lo que n lo convierte a string)
// --------------------------------------------------
function PonPuntos(n)
{
	var ret = "";
	if (isNaN(n)) return n;
	else
	{
		var ss = ret + n;  			// la cadena restante por tratar.
		var l = ss.length; 			// longitud del string. Falla si se llama como (123), ok ("123")
		do {						// Repite
			ret = ss.slice(-3) + ret;	// recoge los últimos 3 carácteres.
			l -= 3;						// restar los elementos ya recogidos.
			if (l>0){ 					// Existen mas carácteres.
				ret = "." + ret;			// poner el separador de miles.
				ss = ss.slice(0,l);			// recoger el resto de elementos.
			}
		} while (l>0)				// Si hay +1 carácter continuar.
		return ret;
	}
}


function separaIntStr(s)
{
	var ret = Array(0,"");
	ret[0]=10;
	ret[1]="@";
	return ret;
}