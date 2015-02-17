<?php
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//foreach ($_SERVER as $key => $valor) echo "SERVER[$key] = $valor<br>";

    /**
     * Detectar el navegador mediante la variable: $_SERVER clave:["HTTP_USER_AGENT"]
     * @return string Navegador usado.
     */
    function Navegador(){ 
        // $ua = $_SERVER["HTTP_USER_AGENT"]; // No guarda la información XD.
        if (ereg("Trident", $_SERVER["HTTP_USER_AGENT"])) return "MSIE";
        elseif (ereg("Firefox", $_SERVER["HTTP_USER_AGENT"])) return "Firefox";
        elseif (ereg("Chrome", $_SERVER["HTTP_USER_AGENT"])) return "Chrome";
        elseif (ereg("Safari", $_SERVER["HTTP_USER_AGENT"])) return "Safari";
        else return "Otro";
    }
    /**
     * Detectar el navegador mediante la variable: $_SERVER clave:["HTTP_USER_AGENT"]
     * @return string Navegador usado.
     * @see http://www.webtaller.com/construccion/lenguajes/php/lessons/como-detectar-navegador.php
     */
//    function FUNC_brouserUsr(){ 
//        if(
//            (ereg("Nav", $_SERVER["HTTP_USER_AGENT"])) || 
//            (ereg("Gold",$_SERVER["HTTP_USER_AGENT"])) || 
//            (ereg("X11",$_SERVER["HTTP_USER_AGENT"])) || 
//            (ereg("Mozilla",$_SERVER["HTTP_USER_AGENT"])) || 
//            (ereg("Netscape",$_SERVER["HTTP_USER_AGENT"])) AND 
//            (!ereg("MSIE",$_SERVER["HTTP_USER_AGENT"]) AND 
//            (!ereg("Konqueror",$_SERVER["HTTP_USER_AGENT"])))) 
//                $browser = "Netscape";        
//        elseif(ereg("MSIE", $_SERVER["HTTP_USER_AGENT"])) 
//                $browser = "MSIE";        
//        elseif(ereg("Lynx", $_SERVER["HTTP_USER_AGENT"])) 
//                $browser = "Lynx";        
//        elseif(ereg("Opera", $_SERVER["HTTP_USER_AGENT"])) 
//                $browser = "Opera";        
//        elseif(ereg("Netscape", $_SERVER["HTTP_USER_AGENT"])) 
//                $browser = "Netscape";
//        elseif(ereg("Konqueror", $_SERVER["HTTP_USER_AGENT"])) 
//                $browser = "Konqueror";
//        elseif(
//                (eregi("bot", $_SERVER["HTTP_USER_AGENT"])) ||
//                (ereg("Google", $_SERVER["HTTP_USER_AGENT"])) || 
//                (ereg("Slurp",$_SERVER["HTTP_USER_AGENT"])) || 
//                (ereg("Scooter",$_SERVER["HTTP_USER_AGENT"])) || 
//                (eregi("Spider",$_SERVER["HTTP_USER_AGENT"])) || 
//                (eregi("Infoseek",$_SERVER["HTTP_USER_AGENT"]))) 
//                $browser = "Bot";
//        else 
//                $browser = "Other";
//        return $browser;
//    }
?>


<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <title>TODO supply a title</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        Detectar el navegador
        <HR>
        Se ha detectado el navegador <B><?php echo Navegador();?>.</B><BR />
        $_SERVER["HTTP_USER_AGENT"]: <span style ="font-size: 0.6em"><?php echo $_SERVER["HTTP_USER_AGENT"];?></span>
        <BR /><BR /><BR />
        <?php         
        // Aunque se supone que es la nueva forma... no funciona. echo preg_match("Chrome", $_SERVER["HTTP_USER_AGENT"]);
        // echo "<BR />";
        // echo ereg("Chrome", $_SERVER["HTTP_USER_AGENT"]); // Si va...
        //$_SERVER["HTTP_USER_AGENT"]; < ? php echo $ua;? >. // No guarda valor.
        ?>
    </body>
</html>
