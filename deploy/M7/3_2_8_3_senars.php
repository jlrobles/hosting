

<!DOCType html>
<html>
    <head>
        <title>Senars.</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    </head>
    <body>
        <h2>3.2.8.3 Exercici: Senars</h2>
        Crea una funció que indiqui si un número és primer.
        </BR>
<?php
    $primos=array(2,3,5); //,7,11,13); // Mantener la lista.

    
    function printEsPrimo ($n,$nn) {
        $n=abs($n);
        if ($n==0) echo "El 0 siempre será primo.";
        elseif ($n==1) echo "El 1 siempre es primo.";
        elseif (EsPrimo($n, $nn)) echo "El número es primo.";
        else echo "El número no es primo.";
    }
    function EsPrimo($n,$nn){
        $ret = true;
        foreach ($nn as $p) {
            //echo "**valor \$p $p";
            if ($n == $p) { break; }
            elseif( ($n%$p) == 0 ) {$ret = false; break;} 
        }
        if ($ret) { // es primo
            for ($p2 = $p+1; $p2<$n; $p2++) { if (($p2%$n)==0) {$ret = false; $p=$p2; break;} }
            if ($ret) $nn[] = $n;
        }
        if (!$ret) { echo "divisible por ($p)";}
        return $ret;
//        $nn;
//        $ret = true;
//        if ($n == 0) {echo "0 es primo XD.<BR>";}
//        elseif ($n==1) {echo "1, pos va ha ser q es primo.<BR>";}
//        elseif ($n==2) {echo "2, es primo.<BR>";}
//        else {
//            for ($i = 2; $i<=$n; $i++) {
//                if ($n==$i) { echo "es un número primo"; }
// else {}
//            }
//    }
//    }
    }
?>
<Code>
    EsPrimo(  2), Resultado: <?php echo printEsPrimo(  2,$primos); ?><BR>
    EsPrimo(  7), Resultado: <?php echo printEsPrimo(  7,$primos); ?><BR>
    EsPrimo( 11), Resultado: <?php echo printEsPrimo( 11,$primos); ?><BR>
    EsPrimo( 15), Resultado: <?php echo printEsPrimo( 15,$primos); ?><BR>
    EsPrimo(155), Resultado: <?php echo printEsPrimo(155,$primos); ?><BR>
    EsPrimo(135), Resultado: <?php echo printEsPrimo(135,$primos); ?><BR>
</Code>
    </body>
</html>