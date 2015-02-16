/* Código Ejercicio 3

 
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
    /*Identificar si el navegador es Internet Explorer (IE)
     * 
     * @type Boolean
     */
    var ie=false;
/**
 * Mostrar propiedades.
 * @returns {void}
 */function prcShow (){
    if (!divShow) {divShow = document.getElementById("properties");}
    var ie = document.getElementById("IE");
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
        if (ie) msg += "<h3>Navegador es Internet Explorer (IE)</h3>";
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
 */function prcOpen (){ 
    var df = "width=" + iMin + "px, height=" + iMin + "px, menubar=0, resizable=0, scrollbar=0, titlebar=0, status=0,location=0"; // Default properties para la ventana.
    w = window.open("","myW",df); prcShow(); 
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
