<!DOCType html>
<html>
    <head>
        <title>Comprobar mayúsculas.</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    </head>
    <body>
        <h3>3.2.8.2 Exercici: Comprova minúscules</h3>
        Crea una funció que comprovi si tots els caràcters d'un string son minúscules.
        </BR>
<?php
    function CompruebaMinusculas($cc){
        $ret = true;
        $a = str_split($cc);
        foreach ($a as $v){ 
            if ($v !== strtolower($v)) {$ret = false; break; }
        }
        if ($ret) $ret ="Todo es minúsculas";
        else $ret="Hay mayúsculas en el texto";
        return $ret;
    }
    function is_str_lowercase($cc){                    // Alex.
        for ($sc=0; $sc <strlen($cc);$sc++){
            if (ord($cc[$sc]) >= ord('A') && ord($cc[$sc])<= ord('Z') ) return false;
        }
        return true;
    }


    // No funciona con foreach.
    function is_str_lowercase2($cc){                    // Prueba foreach
        var_dump($cc);
        foreach ($cc as $v){ 
            var_dump($v);
            if ($v !== strtolower($v)) return false;
        }
        return true;
    }
    
?>
<Code>
    $caracteres = "aSdfbakdsdkfjeifDD";<BR>
    Resultado: <?php echo CompruebaMinusculas("aSdfbakdsdkfjeifDD"); ?>
<BR>
    $caracteres = "assdfw3r32";<BR>
    Resultado: <?php echo CompruebaMinusculas("assdfw3r32"); ?>
<BR>
    $caracteres = "Ñaeiou";<BR>
    Resultado: <?php echo CompruebaMinusculas("Ñaeiou"); ?>
<BR>
    $caracteres = "AEIOU";<BR>
    Resultado: <?php echo CompruebaMinusculas("AEIOU"); ?>
<BR>
    $caracteres = "todo minús.";<BR>
    Resultado: <?php var_dump (CompruebaMinusculas("todo minús.")); ?>
<BR>
</Code>
        <pre>
    Resultado: var_dump (is_str_lowercase("Ñbc def ghi."));  <?php var_dump (is_str_lowercase("Ñbc def ghi.")); ?>
    Resultado: var_dump (is_str_lowercase("abc dEf ghi."));  <?php var_dump (is_str_lowercase("abc dEf ghi.")); ?>
    Resultado: var_dump (is_str_lowercase2("abc dEf ghi.")); <?php var_dump (is_str_lowercase2("abc dEf ghi.")); ?>
DomDocument(
        </pre>
    </body>
</html>