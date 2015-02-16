// channelmode=yes|no|1|0	Whether or not to display the window in theater mode. Default is no. IE only
// directories=yes|no|1|0	Obsolete. Whether or not to add directory buttons. Default is yes. IE only
// fullscreen=yes|no|1|0	Whether or not to display the browser in full-screen mode. Default is no. A window in full-screen mode must also be in theater mode. IE only
// height=pixels	The height of the window. Min. value is 100
// left=pixels	The left position of the window. Negative values not allowed
// location=yes|no|1|0	Whether or not to display the address field. Opera only
// menubar=yes|no|1|0	Whether or not to display the menu bar
// resizable=yes|no|1|0	Whether or not the window is resizable. IE only
// scrollbars=yes|no|1|0	Whether or not to display scroll bars. IE, Firefox & Opera only
// status=yes|no|1|0	Whether or not to add a status bar
// titlebar=yes|no|1|0	Whether or not to display the title bar. Ignored unless the calling application is an HTML Application or a trusted dialog box
// toolbar=yes|no|1|0	Whether or not to display the browser toolbar. IE and Firefox only
// top=pixels	The top position of the window. Negative values not allowed
// width=pixels
	var df = "width=100, height=100, menubar=0, resizable=0, scrollbar=0" // Default properties para la ventana.
			+", titlebar=0, status=0,location=0";
	var minHeight = 10;
	var minWidth  = 100;
	var w;
	var divShow = document.getElementById("properties");
	
	function prcSendMsg() { // Rutina que envía el mensaje a la ventana creada.
		if (w==null) prcOpen(); // Si no existe la ventana abrirla.
		w.postMessage("Información", "targetDomain");
	}

	function prcShow (){ // Mostrar propiedades.
		if (!divShow) {var divShow = document.getElementById("properties");}
		msg = "<H2>propiedades de la ventana</H2><br/>";
			try {
					msg += "Objeto window: <br/>";
					msg += "  top: " + w.screen.top + "<br/>";
					msg += "  ScreenX: " + w.screenX + "<br/>";
					msg += "  ScreenY:" + w.screenY + "<br/>";
					msg += "  w.height:" + w.height + "<br/>";
					msg += "  w.width:" + w.width + "<br/>";
					msg += "  w.screen.height:" + w.screen.height + "<br/>";
					msg += "  screen.height:" + screen.height + "<br/>";
					msg += "  w.innerHeight:" + w.innerHeight + "<br/>";
				} catch (e) {msg += " ERROR recuperando las propiedades <br/><br/>" + e + "<br/>"; }
			divShow.innerHTML = msg;
			w.focus();
	}
	function prcOpen (){ 
		w = window.open("","myW",df); prcShow(); 
 		var elementoInBody = ''
elementoInBody += '<div id="test">Envia\'m un missatge!</div>\n';
elementoInBody += '<script>\n';
elementoInBody += 'function listener(event){\n';
elementoInBody += '  if ( event.origin !== "http://javascript.info" )\n';
elementoInBody += '    return   document.getElementById("test").innerHTML = "received: "+ event.data;\n';
elementoInBody += '}\n';
elementoInBody += 'if (window.addEventListener){\n';
elementoInBody += '  addEventListener("message", listener, false);\n';    //Per altres Navegadors compatibles\n';
elementoInBody += '} else {\n';
elementoInBody += '  attachEvent("onmessage", listener);\n';              //Per al navegador Microsoft Explorer
elementoInBody += '}\n';
elementoInBody += '</script>\n';
		document.body.insertBefore (elementoInBody,win.document.body.firstChild);

// 		var elementoHead = 
// '<script type="text/javascript">
// </script>
// 		';
		//w.document.getElementsByTagName('head')[0].appendChild(elementoHead);

	}
	function izquierda(){ 
		x = w.screenX;
		w.moveBy(-100,1); 
		if (x == w.screenX) w.resizeBy(-10,0); // si no Cambia: Reduce X.
		prcShow(); }
	function derecha  (){
		x = w.screenX;
		w.moveBy(+100,1); 
		if (x == w.screenX) w.resizeBy(+10,0); // si no Cambia: Ampliar X.
		prcShow(); }
	function arriba   (){ 
		var y  = w.screenY;			// Posición Y
		w.window.moveBy(0,-100); 	// Mueve ventana.
		if (y == w.screenY) w.resizeBy(0,-10); // si no Cambia: Reducir Y.
		prcShow(); 					// Informar de los valores al usuario.


		// var yy = w.screenY;
		// if (yy > 100)	{  w.moveBy(0,-100); }	// Subir
		// else 
		// {//w.moveBy(0,-yy); // para que quede a 0, NO SE PUEDE, siempre deja espacio para las barras...
		// 	w.resizeBy(0,-10);
		// }
		// if (yy == w.screenY) { 
		// 	w.document.write ("<H2>Reset</H2></BR>"); 
		// 	//w.resizeTo(minWidth, minHeight); //FireFox (no va).
		// 	w.resizeBy(0,minHeight-yy);
		// }
		// prcShow(); 
	}
	function abajo    (){ 
		var yy =  w.screen.height
		var y  = w.screenY;
		// if (yy > 100)	{  w.moveBy(0,-100); }	// Subir
		// else 
		// {//w.moveBy(0,-yy); // para que quede a 0, NO SE PUEDE, siempre deja espacio para las barras...
		// 	w.resizeBy(0,-10);
		// }
		// if (yy == w.screenY) { 
		// 	w.document.write ("<H2>Reset</H2></BR>"); 
		// 	//w.resizeTo(minWidth, minHeight); //FireFox (no va).
		// 	w.resizeBy(0,minHeight-yy);
		// }
		// prcShow(); 



		w.window.moveBy(0,+100); prcShow(); 
		if (y == w.screenY) w.resizeBy(0,+10); // si no Cambia: Ampliar.
	}
	//var v = document.getElementsByName('google')[0].location.href;
	// var v = document.getElementsByName('google')[0].src;
	// alert(v);
	// document.getElementsByName('google')[0].src = "http://wikipedia.com";
	
	//document.getElementById('ff').src = "http://wikipedia.com";
//	var f = document.getElementById('ff'); alert(f.src); f.src = "http://wikipedia.com";

		// try {
		// 	alert(document.getElementsByName('google')[0].location.href);
		// } catch (e) { alert ("Error \n\n" + e); }
		// document.getElementsByName('google')[0].location.href = 
		// 	"http://www.wikipedia.org";


	// //document.onload = function() {
	// document.getElementsByName('google')[0].onload = function() {
	// 	try {
	// 		frames[0].location.href="http://www.wikipedia.org";
	// 	} catch (e) { alert ("Error \n\n" + e); }
	// 	// try {
	// 	// 	frames[0].location.href="http://www.google.es/prueba";
	// 	// } catch (e) { alert ("Error \n\n" + e); }
	//}
