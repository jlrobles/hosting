<!DOCTYPE html>

<!--    
    By:          jlrobles@46.786.783
    Description: Ejercicios de clase
    Notas !!!    $_PHP_SELF
                    - Al hacerlo por GET, si luego lo hago por POST, sigue manteniendo los parametros.
-->
<html lang="es">
    <head>
        <title>Ejercicio Login</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            #izq {float:left;}
            #der {float:right;}
        </style>
    </head>
    <body>
        <h2>Exercici: Login</h2>
        <pre>
            Crea un formulari HTML com el del [proxy] del institut que utilitzi el mètode GET i un altre que utilitzi el mètode POST. 
            Imprimeix per pantalla el nom d'usuari i la contrasenya codificada en MD5 i en SAH1.
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

