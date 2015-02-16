/* Código Ejercicio 5: Enviar mensajes entre ventanas. */
    var iMsg = 0; // Controlar el número de mensajes enviados.
    /**
     * Variable dónde almacenaremos la ventana abierta y manipularemos.
     * @type @exp;window@call;open
     */
    var w;

    /**
     * Guardaremos el <div> dónde mostramos la información de la ventana(w) y el navegador.
     * @type @exp;document@call;getElementById|@exp;document@call;getElementById
     */
    var divRet = document.getElementById("Ret");


/* Agregar el evento a esta ventana.
 */
window.addEventListener("message", listener, false);
/* Recuperar evento al ser llamado desde la ventana hija.
 * 
 * @param {type} event
 * @returns {undefined}
 */
function listener(event){
//         //modifica el div resposta i posa el missatge que l'han enviat'
//           document.getElementById("resposta").innerHTML =  event.data;
    if (!divRet) {divRet = document.getElementById("Ret");}
    msg = "<pre>";
    try {
        msg += "<span style='font-size: 2em;'>Respuesta Nº"+ iMsg +"</span>" + event.data + "<br/>";
     } catch (e) {
        msg += "<br/><br/><H1>" + e + "</H1><br/>"; 
    }
    msg += "</pre>";
    msg += divRet.innerHTML; // Recuperar el valor anterior...
    divRet.innerHTML = msg;
    w.focus();
}

/**
 *  Abrir la ventana.
 * @returns {undefined}
 */function prcOpen (){ 
    w = window.open("","mou","resizable=1;location=yes,menubar=yes,toolbar=yes,left=0,top=0,width=350,height=150,scrollbars=1");
    var dv2 = w.document.createElement('div');
    dv2.setAttribute('id', 'msg');
    dv2.innerHTML="Iniciado...";
    dv2.style.fontSize = '15px';
    w.document.body.appendChild(dv2);
    // Crear evento y posteriormente la función aquí dentro .... toma YA !!!
    //    w.addEventListener("message", listener, false); // Creamos un evento de escucha.
    //     //Se define la función llamada "listener" (aqui???)...
    //     function listener(event){
    //         //modifica el div creat pel contingut enviat pel usuari de l'altre pàgina.'
    //           w.document.getElementById("msg").innerHTML = "Valor recibido: "+ event.data;
    //    }     

    // Agregamos evento juntamente con la función ...
    w.addEventListener("message", function (event){
        var Msg =  "Valor recibido (" + (++iMsg) + ": " + event.data + "<BR/>"; // Incorporamos el nuevo valor.
        Msg += w.document.getElementById("msg").innerHTML; // Anexamos después el valor ya existente (log).
        w.document.getElementById("msg").innerHTML = Msg;
        event.source.postMessage('rebut, gracies!', "*"); // Julio, no he caido XD... Lanzamos el mensaje al origen.
      }, false); // Creamos el evento de escucha.
                

     //    Solución Julio.
//    //es crea un element div amb informació dintre
//     var div2 = win.document.createElement('div');
//     div2.setAttribute('id', 'mess');
//     div2.innerHTML="Hola a Totos";
//     div2.style.fontSize = '15px';
//     win.document.body.insertBefore(div2, win.document.body.firstChild );   //també es pot sustituir per: win.document.body.appendChild(div2);
//    //s'associa una funció, anomenada listener'  que escolta si algú l'ha enviat informació'
//     win.addEventListener("message", listener, false);
//     //es defineix la funció anomenada listener:
//     function listener(event){
//         //modifica el div creat pel contingut enviat pel usuari de l'altre pàgina.'
//           win.document.getElementById("mess").innerHTML = "rebut: "+ event.data;
//    }     
}

/* Cerrar la ventana.
 * 
 * @returns {undefined}
 */
function prcClose(){
    try {
        w.close();              // Cerrar ventana.
        divRet.innerHTML = ""; // Limpiar texto.
        w = null;               // Liberar el puntero.
    } catch(e) {/* Que no falle simplemente, no hay ventana todavía x ejemplo. */}
}

/* Proceso llamado desde el botón.
 * 
 */
function prcSendMessage() {
    if (!w) prcOpen(); // Si la ventana no se ha creado, crearla. Básicamente por que no me acuerdo nunca con las pruebas ;-)
    var mm = document.getElementById("mm").value;
    try { w.postMessage(mm, "*"); }
    catch(e) {alert (e);}
}


//function sendMessage(){
//
//    var text = prompt("Envia un text a la finestra que s'ha obert");
//    try{
//        //enviem un missatge a la finestra win sense importar l'origen, per aixó possem '*'
//     win.postMessage(text, "*");
//    }
//    catch(e)
//    {
//        alert(e);
//    }
//}