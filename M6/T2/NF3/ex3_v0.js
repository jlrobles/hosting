var df = "width=100, height=100, menubar=0, resizable=0, scrollbar=0, titlebar=0, status=0,location=0"; // Default properties para la ventana.
var minHeight = 10;
var minWidth  = 100;
var w;
var divShow = document.getElementById("properties");
/**
 * Valor para el movimiento.
 * @type Number
 */
var iMov = 100;
/**
 * Valor que usaremos para la redimensión de la ventana (al llegar a los bordes).
 * @type Number
 */
var iRed = 10;
/**
 * Rutina que envía el mensaje a la ventana creada.
 * @returns {void}
 */function prcSendMsg() { 
    if (w==null) prcOpen(); // Si no existe la ventana abrirla.
    w.postMessage("Información", "targetDomain");
}
/**
 * Mostrar propiedades.
 * @returns {void}
 */function prcShow (){
    if (!divShow) {divShow = document.getElementById("properties");}
    msg = "<pre>";
    msg += "<H2>propiedades de la ventana</H2><br/>";
    try {
        msg += "<h3>Objeto window: </h3><br/>";
        msg += "  ScreenX: " + w.screenX + "<br/>";
        msg += "  ScreenY:" + w.screenY + "<br/>";
        msg += "  outerHeight:" + w.outerHeight + "<br/>";
        msg += "  outerWidth:" + w.outerWidth + "<br/>";
        msg += "<h3>Objeto screen:</h3>";
        msg += "  availWidth:" + w.screen.availWidth + "<br>";
        msg += "  availHeight:" + w.screen.availHeight + "<br>";
        msg += "  Width:" + w.screen.width + "<br>";
        msg += "  Height: " + w.screen.height + "<br>";
    } catch (e) {
        msg += " ERROR recuperando las propiedades <br/><br/>" + e + "<br/>"; 
    }
    msg += "</pre>";
    divShow.innerHTML = msg;
    w.focus();
}
function prcReset(){
    try {
        w.close();              // Cerrar ventana.
        divShow.innerHTML = ""; // Limpiar texto.
    } catch(e) {/* Que no falle simplemente, no hay ventana todavía x ejemplo. */}
}
/**
 *  Abrir la ventana.
 * @returns {undefined}
 */function prcOpen (){ 
    w = window.open("","myW",df); prcShow(); 
    var elementoInBody = '';
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
}
/**
 * Mover ventana hacia la izquierda.
 * @returns {undefined}
 */function izquierda(){ 
    x = w.screenX;
    w.moveBy(-iMov,1); 
    if (x === w.screenX) w.resizeBy(-10,0); // si no Cambia: Reduce X.
    prcShow(); 
}
/**
 * Mover ventana hacia la derecha.
 * @returns {undefined}
 */function derecha  (){
    x = w.screenX;
    w.moveBy(+iMov,1); 
    if (x == w.screenX) w.resizeBy(+10,0); // si no Cambia: Ampliar X.
    prcShow(); 
}
/**
 * Mover ventana hacia arriba.
 * @returns {undefined}
 */function arriba   (){ 
    var y  = w.screenY;                     // Posición Y
    w.window.moveBy(0,-iMov);                // Mueve ventana.
    if (y == w.screenY) w.resizeBy(0,-10);  // si no Cambia: Reducir Y.
    prcShow();                              // Informar de los valores al usuario.
		// var yy = w.screenY;
		// if (yy > iMov)	{  w.moveBy(0,-iMov); }	// Subir
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
/**
 * Mover ventana hacia abajo.
 * @returns {undefined}
 */
function abajo(){ 
    var y  = w.screenY;
    w.window.moveBy(0,+iMov); prcShow(); 
    if (y == w.screenY) w.resizeBy(0,+10); // si no Cambia: Ampliar.
    //var y  = w.screenY;
    //var yy =  w.screen.height
    // if (yy > iMov)	{  w.moveBy(0,-iMov); }	// Subir
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
	// //document.onload = function() {
	// document.getElementsByName('google')[0].onload = function() {
	// 	try {
	// 		frames[0].location.href="http://www.wikipedia.org";
	// 	} catch (e) { alert ("Error \n\n" + e); }
	// 	// try {
	// 	// 	frames[0].location.href="http://www.google.es/prueba";
	// 	// } catch (e) { alert ("Error \n\n" + e); }
	//}
