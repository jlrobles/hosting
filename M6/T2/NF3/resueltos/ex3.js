/* 
 * Exercici Moure una finestra per la pantalla
 * 
 */
var comprimir = 5;
var margenErrorX = 10;
var margenErrorY = 30;
var scroll = 100;
var width = 150;
var height = 150;
var win;


function mouesquerra(){
// moure la finestra cap a la esquerra

if(win.screenX  <=  margenErrorX){
    // si la finestra es troba en el marge esquerra de la pantalla de l'usuari
    // modifiquem la mida de la finestra fent-la més petita (5px cada cop)
    win.resizeBy(-comprimir, 0);
}else{
    // la finestra no es troba en el marge esquerra
    if(win.outerWidth  < width){
        //però la mida de la finestra no es la apropiada.
        //modifiquem la mida de la finestra abans de moure-la
        win.resizeBy(-comprimir,0);
    }
    else{
        //la finestra no es troba en el marge esquerra 
        //la finestra té la mida apropiada
        //llavors podem mour-la cap a la esquerra.
        win.moveBy(-scroll,0);
    }
}    
showDades();    
}

function mouadalt(){
    //moure la finestra cap a dalt
    
    if(win.screenY <= margenErrorY){
        //si la finestra es troba en el marge superior de la pantalla de l'usuari
        //modifiquem la mida de la finestra fent-la més petita
        win.resizeBy(0,-comprimir);
    }
    else{
        //la finestra no es troba en el marge superior de la pantalla de l'usuari'
        if(win.outerHeight < height){
            // però no té la mida correcta
            win.resizeBy(0,-comprimir);
        }
        else{
            //la finestra no es troba en el marge superior
            //la finestra té la mida apropiada
            //llavors podem moure-la
            win.moveBy(0,-scroll);
        }
    }
    
    showDades();
}

function moudreta(){
// moure la finestra cap a la dreta    

if(win.screenX + win.outerWidth + margenErrorX >=  win.screen.availWidth){
    // si la finestra es troba en el marge dret de la pantalla del usuari
    // modifiquem la mida de la finestra aumentan 5 pixel cada cop
    win.resizeBy(comprimir, 0);
}else{
    //si la finestra no es troba en el marge dret
    if(win.outerWidth  < width){
        // però la mida de la finestra no es la correcta
        // modifiquem la mida de la finestra abans de moure-la
        win.resizeBy(comprimir,0);
    }
    else{
        //la finestra no es troba en el marge dret
        //la mida de la finestra es correcte
        //llavors podem moure la finestra cap a la dreta.
        win.moveBy(scroll,0);
    }
    
}
showDades();
}

function mouabaix(){
    // moure la finestra cap aball
    
    if(win.screenY + win.outerHeight + margenErrorY >= win.screen.availHeight){
        //si la finestra es troba en el marge inferior de la pantalla de l'usuari
        //modifiquem la mida de la finestra fent-la mes gran
        win.resizeBy(0,comprimir);    
    }
    else{
        //si la finestra no es troba en el marge inferior
        if(win.outerHeight < height){
            //però la mida de la finestra no es la correcta
            win.resizeBy(0,comprimir);
        }
        else{
            //la finestra no es troba en el marge inferior
            //la finestra té la mida correcta
            win.moveBy(0,scroll);
        }
    }
    
    showDades();
}

function openPopUp(){
    win = window.open("","mou","left=0,top=0,width=150,height=150");
    showDades();
}

function closePopUp(){
    win.close();
    document.getElementById("dades").innerHTML = "";
}

function reset(){
    closePopUp();    
    openPopUp();
}

function showDades(){

    var data = "";
    data = data + "Informacio sobre la finestra : " + "<br>";
    data = data + "    <b>top:</b> " + win.screenY + "<br>";
    data = data + "    <b>left:</b> " + win.screenX + "<br>";
    data = data + "    <b>width:</b> " + win.outerWidth  + "<br>";
    data = data + "    <b>height:</b> " + win.outerHeight + "<br>";
    data = data + "Informacio sobre la pantalla del usuari :" + "<br>";
    data = data + "    <b>availWidth:</b> " + win.screen.availWidth + "<br>";
    data = data + "    <b>availHeight:</b> " + win.screen.availHeight + "<br>";
    data = data + "    <b>Width:</b> " + win.screen.width + "<br>";
    data = data + "    <b>Height:</b> " + win.screen.height + "<br>";
    
    document.getElementById("dades").innerHTML = data;
}