/* 
 * Exercici scrollbars
 * 
 */
var win;
var scrollbars=1;
var url = "";



function hide_show(){
// mostra o oculta les scrollbars
scrollbars = (scrollbars == 1)? 0 : 1;
//si ens han mogut la finestra agafem el top i el left
var x = win.screenX;
var y = win.screenY;
//matem la finestra
win.close();
//la tornem a crear a la mateixa posició amb les noves scrollbars
openat(x,y);    
}


function openPopUp(){
    openat(0,0);
}

function openat(xx,yy){
    win = window.open(url,"mou","location=yes,menubar=yes,toolbar=yes,left=" + xx + ",top=" + yy + ",width=350,height=150,scrollbars=" + scrollbars);
    //creem dos div per tal de mostrar la informació sobre el location i el navigator
     var div2 = win.document.createElement('div');
     div2.setAttribute('id', 'location');
     div2.style.fontSize = '15px';
     win.document.body.insertBefore( div2, win.document.body.firstChild );
        
     var div = win.document.createElement('div'); 
     div.setAttribute('id', 'navigator'); //afegeix un nou atribut o canvia el valor de un atribut en un element especificado(id=navigator).
     div.style.fontSize = '15px';
     win.document.body.insertBefore( div, win.document.body.firstChild );  //document.getElementById('padre').insertBefore(nuevo_parrafo,segundo_p);
     // obtenim les dades a mostrar
     showDades();
}

function closePopUp(){
    win.close();
}

function reset(){
    closePopUp();    
    openPopUp();
}

function showNavigator(){
     var data = "";
    data = data + "Informacio sobre el navegador : " + "<br>";
    data = data + "    <b>appCodeName:</b> " + win.navigator.appCodeName + "<br>";
    data = data + "    <b>appName:</b> " + win.navigator.appName + "<br>";
    data = data + "    <b>appVersion:</b> " + win.navigator.appVersion + "<br>";
    data = data + "    <b>cookieEnabled:</b> " + win.navigator.cookieEnabled  + "<br>";
    data = data + "    <b>onLine:</b> " + win.navigator.onLine + "<br>";
    data = data + "    <b>platform:</b> " + win.navigator.platform + "<br>";
    data = data + "    <b>userAgent:</b> " + win.navigator.userAgent + "<br>";
    
    win.document.getElementById("navigator").innerHTML = data;
}

function showHistory(){
    var data = "";
    data = data + "Informacio sobre el historial : " + "<br>";
    data = data + "    <b>numero de pagines visitades:</b> " + window.history.length;
    
    document.getElementById("dades").innerHTML = data;
}

function showLocation(){
         var data = "";
    data = data + "Informacio sobre la URL: " + "<br>";
    data = data + "    <b>hash:</b> " + win.location.hash + "<br>";
    data = data + "    <b>host:</b> " + win.location.host + "<br>";
    data = data + "    <b>hostname:</b> " + win.location.hostname + "<br>";
    data = data + "    <b>href:</b> " + win.location.href  + "<br>";
    data = data + "    <b>pathname:</b> " + win.location.pathname + "<br>";
    data = data + "    <b>port:</b> " + win.location.port + "<br>";
    data = data + "    <b>protocol:</b> " + win.location.protocol + "<br>";
    data = data + "    <b>search:</b> " + win.location.search + "<br>";
    
    win.document.getElementById("location").innerHTML = data;
}

function showDades(){
    showNavigator();   
    showHistory();
    showLocation();
}