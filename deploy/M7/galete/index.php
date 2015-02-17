<!DOCTYPE html>
<html lang="es">
<?php
$ejercicio="Exercici Galetes";
/*    
    By:          jlrobles@46.786.783
    Description: Ejercicios de clase
    Notas !!!    $_PHP_SELF
                    - Al hacerlo por GET, si luego lo hago por POST, sigue manteniendo los parametros.
*/
?>
    <head>
        <title><?php echo $ejercicio ?></title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<script type="text/javascript" src="/shl/scripts/shCore.js"></script>
	<script type="text/javascript" src="/shl/scripts/shBrushJScript.js"></script>
	<script type="text/javascript" src="/shl/scripts/shBrushPhp.js"></script>
	<link type="text/css" rel="stylesheet" href="/shl/styles/shCoreDefault.css"/>
	<script type="text/javascript">SyntaxHighlighter.all();</script>
        <style>
            html {font-family: arial;}
            #titEjercicio {background-color: #87CEFA; margin: 0px; padding: 0px 0px 0em 10px ;}
            // #titEjercicio:first-letter {font-size: 1em; color:crimson;}
            #titEjercicio { border-left: blue solid 0.5em;}
            #izq {float:left;}
            #der {float:right;}
            .des {font-size: 0.8em; margin-left: 1em; background-color: #E6E6FA; }
            .des h3 {margin: 0px; padding: 0px;}
            .des:first-letter {font-size: 2em; color:crimson;}
        </style>
    </head>
    <body>
        <h2 id="titEjercicio"><?php echo $ejercicio?></h2>
        <div class="des"><h3>Descripción ejercicio:</h3>
Les cookies us permeten desar informació al navegador que estarà disponible més endavant pel vostre web. Per exemple, podeu desar la configuració personal de l’usuari o la llengua en què ha escollit visitar el web. La propera vegada que l’usuari visiti el web, el vostre codi PHP podrà obtenir aquesta informació desada i presentar a l’usuari el web amb la seva configuració personal o la llengua escollida. És important destacar que les cookies queden desades al navegador de l’usuari i no al servidor web.
<br/>
<br/>Feu un web amb dos fitxers:<br>
El primer, index.php, s’encarregarà d’obtenir el nom de l’usuari i la llengua que vol fer servir per defecte entre una llista desplegable mitjançant un formulari. Enviarà aquestes dades a un altre fitxer, cookie.php.
<br/>cookie.php: Que desarà la informació a les cookies. La propera vegada que l’usuari accedeixi a index.php el formulari estarà emplenat amb la informació desada la vegada anterior que va accedir-hi.
        </div>        
        <pre class="brush: js;">
/* Ejemplo JavaScript */
SyntaxHighlighter.all(); // Función llamada inicialmente <head> para formatear el texto.
var miFunc = function (){ if (true) return true };
        </pre>
<pre class="brush: php;">
/* Ejemplo php */
if (isset($_REQUEST["usuario"])){ /* Recibe usuario por POST o GET. */ }
echo "Muestra texto x pantalla";
function MiFuncion(param1) {
  echo "Muestra texto x pantalla";
    return true;
}
</pre>        
<?php
if (isset($_REQUEST["user"])){
//print_r($_REQUEST);
    var_export(sha1($_REQUEST["passwd"])); echo var_export(11.2,true);
    ?>
        <pre>
<h2>Ha introducido los datos:</h2>Usuario:<?php $_REQUEST["user"];?> 
Passwd: <?php echo $_REQUEST["passwd"] ." === " . sha1($_REQUEST["passwd"])?>
        </pre>
<?php
}?>
        <div id="izq">
            <h2>Login mediante GET</h2>
            <form action="<?php $_PHP_SELF ?>" method="GET" title="Login mediante GET.">
                Usuario: <input type="text" name="user" /><BR/>
                Contraseña: <input type="text" name="passwd" /><BR />
                <input type="submit" />
            </form>
        </div>

        <div id="der">
            <h2>Login mediante POST</h2>
            <form action="<?php $_PHP_SELF ?>" method="POST">
                Usuario: <input type="text" name="user" /><BR/>
                Contraseña: <input type="text" name="passwd" /><BR />
                <input type="submit" />
            </form>
        </div>
    </body>
</html>




