/* Código Ejercicio 4

 
*/
    /**
     * Variable dónde almacenaremos la ventana abierta y manipularemos.
     * @type @exp;window@call;open
     */
    var w;

    /**
     * Guardaremos el <div> dónde mostramos la información de la ventana(w) y el navegador.
     * @type @exp;document@call;getElementById|@exp;document@call;getElementById
     */
    var divShow = document.getElementById("properties");

    /**
     * Guardaremos el <div> de la ventana emergente.
     * @type @exp;document@call;getElementById|@exp;document@call;getElementById
     */
    var divPop;

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

    /* Valor mínimo para Width y Height
     * 
     * @type Number
     */
    var iMin = 150;
    /* Identificar si la ventana tienen o no barras de desplazamiento.
     * 
     * @type Boolean
     */
    var sb=1;
    
/* Mostrar/Ocultar barras de desplazamiento.
 * 
 * @returns {undefined}
 */
function prcBarres(){
    sb = (sb === 1)? 0 : 1;
    //No funciona, ya que requiere ("Yes"/"No") o (0/1), boolean=(true/false) sb = !sb;   // Lo contrario, si muestra=oculta, si oculta=muestra...
    var x = w.screenX; var y = w.screenY;   // Recuperar coordenadas popup, antes de cerrar.
    prcClose();                             // cerrar ventana.
    prcOpenAt(x, y);                        // Abrir popup
    // w.document.body.scroll = sb; // "yes"; NO FUNCIONA.

////si ens han mogut la finestra agafem el top i el left
//var x = win.screenX;
//var y = win.screenY;
////matem la finestra
//win.close();
////la tornem a crear a la mateixa posició amb les noves scrollbars
//openat(x,y);    

}

/* Mostrar información sobre el objeto "location".
 * 
 * @returns {undefined}
 */
function showLocation(){
    msg = "<pre>";
    try {
        msg += "<h3>Informacio sobre la URL: (w.location) </h3><br/>";
        msg += "    <b>hash:</b> " + w.location.hash + "<br>";
        msg += "    <b>host:</b> " + w.location.host + "<br>";
        msg += "    <b>hostname:</b> " + w.location.hostname + "<br>";
        msg += "    <b>href:</b> " + w.location.href  + "<br>";
        msg += "    <b>pathname:</b> " + w.location.pathname + "<br>";
        msg += "    <b>port:</b> " + w.location.port + "<br>";
        msg += "    <b>protocol:</b> " + w.location.protocol + "<br>";
        msg += "    <b>search:</b> " + w.location.search + "<br>";

        msg += "<h3>Informacio sobre el navegador:</h3>";
        msg += "    <b>appCodeName:</b> " + w.navigator.appCodeName + "<br>";
        msg += "    <b>appName:</b> " + w.navigator.appName + "<br>";
        msg += "    <b>appVersion:</b> " + w.navigator.appVersion + "<br>";
        msg += "    <b>cookieEnabled:</b> " + w.navigator.cookieEnabled  + "<br>";
        msg += "    <b>onLine:</b> " + w.navigator.onLine + "<br>";
        msg += "    <b>platform:</b> " + w.navigator.platform + "<br>";
        msg += "    <b>userAgent:</b> " + w.navigator.userAgent + "<br>";

    } catch (e) {
        msg += " ERROR recuperando las propiedades <br/><br/>" + e + "<br/>"; 
    }
    msg += "</pre>";
    //w.document.getElementById("location").innerHTML = data;   // Me daba problemas, mejor guardar el puntero cuando se crea. ;-)
    divPop.innerHTML = msg; // Mostrar en el popup

    // Prueba.Pre3) Aplicar style, en el DIV
    //      Padding, border y color BIEN, pero: background-color y line-height da error.
    //    divPop.style.padding = '0.5em';
    //    divPop.style.border = '1px dashed #2f6fab';
    //    divPop.style.color = 'black';
    ////    divPop.style.background-color = '#f9f9f9';
    ////    divPop.style.line-height= '1.1em'= ';
    
    // Prueba.Pre4) Probar sin el guión...
        divPop.style.padding = '0.5em';
        divPop.style.border = '1px dashed #2f6fab';
        divPop.style.color = 'black';
        divPop.style.backgroundColor = '#f9f9f9';
        divPop.style.lineHeight= '0.8em';

    w.focus();              // Pasar el foco.
}

/**
 * Mostrar propiedades.
 * @returns {void}
 */function prcShow (){
    showLocation();     // Mostrar información sobre el location.
    if (!divShow) {divShow = document.getElementById("properties");}
    msg = "<pre>";
    try {
        msg += "<h3>Informacio sobre el historial:</h3><br/>";
        msg += "  <b>Nº de páginas visitadas:</b> " + window.history.length; + "<BR/>";
     } catch (e) {
        msg += " ERROR recuperando las propiedades <br/><br/>" + e + "<br/>"; 
    }
    msg += "</pre>";
    divShow.innerHTML = msg;
    w.focus();
}
/**
 *  Abrir la ventana.
 * @returns {undefined}
 */function prcOpen (){ prcOpenAt(0,0); }
/* Abrir la ventana, en unas coordenadas en concreto.
 * 
 * @param {int} xx Posición x, left.
 * @param {int} yy Posición y, top.
 * @returns {undefined}
 */
function prcOpenAt (xx,yy){ 
    //var df = "width=" + iMin + "px, height=" + iMin + "px, menubar=0, resizable=0, scrollbar=" + sb + ", titlebar=0, status=0,location=0"; // Default properties para la ventana.
    //w = window.open("","myW",df); 
    w = window.open("","mou","resizable=1;location=yes,menubar=yes,toolbar=yes,left=" + xx + ",top=" + yy + ",width=350,height=150,scrollbars=" + sb);
//    var dv = w.document.createElement('div');
//     dv.setAttribute('id', 'location');
//     dv.style.fontSize = '15px';
//     w.document.body.insertBefore( dv, w.document.body.firstChild );
     divPop = w.document.createElement('div');
     divPop.setAttribute('id', 'location');
     divPop.style.fontSize = '15px';
     w.document.body.insertBefore( divPop, w.document.body.firstChild );
     
     // Prueba.Pre1) agregar elemento como texto... NO
     //w.document.head.appendChild('<link rel="stylesheet" type="text/css" href="main.css" />'); 

    // Prueba.Pre2) Agregar elemento como Nodo... NO
    //    var lnk = w.document.createElement('link');
    //    lnk.setAttribute('rel',"stylesheet");
    //    lnk.setAttribute('type',"text/css");
    //    lnk.setAttribute('href',"main.css");
    //    w.document.head.appendChild(lnk);

    prcShow(); 
}
/* Cerrar la ventana.
 * 
 * @returns {undefined}
 */
function prcClose(){
    try {
        w.close();              // Cerrar ventana.
        divShow.innerHTML = ""; // Limpiar texto.
        w = null;               // Liberar el puntero.
    } catch(e) {/* Que no falle simplemente, no hay ventana todavía x ejemplo. */}
}
/** Resetear los valores de la venta.
 * 
 * @returns {undefined}
 */
function prcReset(){
    if (w) {    // Comprobar que la ventana se haya creado.
        prcClose(); // Cerrar y volver a abrir.
        prcOpen(); // Cerrar y volver a abrir.
    }
}
/**
 * Mover ventana hacia la izquierda.
 * @returns {undefined}
 */function izquierda(){ 
    x = w.screenX;
    w.moveBy(-iMov,1); 
    if (x === w.screenX) w.resizeBy(-iRed,0); // si no Cambia: Reduce X.
    prcShow(); 
}
/**
 * Mover ventana hacia la derecha.
 * @returns {undefined}
 */function derecha  (){
    x = w.screenX;
    if (w.outerWidth < iMin) w.resizeBy(iRed,0);    // Si el ANCHO es mas pequeño que la medida mínima, ampliar en X.
    else {
        w.moveBy(+iMov,0); 
        if (x === w.screenX) w.resizeBy(+iRed,0); // si no Cambia: Ampliar X.
    }
    prcShow();                                      // Mostrar las propiedades.
}
/**
 * Mover ventana hacia arriba.
 * @returns {undefined}
 */function arriba   (){ 
    var y  = w.screenY;                     // Posición Y
    w.window.moveBy(0,-iMov);                // Mueve ventana.
    if (y === w.screenY) w.resizeBy(0,-iRed);  // si no Cambia: Reducir Y.
    prcShow();                              // Informar de los valores al usuario.
}
/**
 * Mover ventana hacia abajo.
 * @returns {undefined}
 */
function abajo(){ 
    var y  = w.screenY;
    if (w.outerHeight < iMin ) w.resizeBy(0,iRed);   // Si el ALTO es más pequeño que la medida mínima, ampliar en Y.
    else {                                          // Sino
        w.window.moveBy(0,+iMov);                       // Mover ventana.
        if (y === w.screenY) w.resizeBy(0,+iRed);       // si no Cambia: la ventana, Ampliar en Y.
    }
    prcShow();                                      // Mostrar las propiedades.
}
