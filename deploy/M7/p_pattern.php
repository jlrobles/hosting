<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <title>TODO supply a title</title>
        <meta charset="windows-1252">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
    	<PRE>
<?php
echo "Formula: ";
$f = QuitaChr32("38+5*(3+2*3/5) + (56 + 89)");
print_r($f);
echo "<BR />";

echo "Resultado: ";
$res = Calc($f); print_r($res);
echo "<BR />";
// $claves = preg_split("/[\s(\s)]+/", $formula);print_r($claves);
// $ff = explode("(",$f);print_r($ff);	// Separar cadena en "("
// for ($i=count($ff)-1; $i>=0 ; $i--) { var_dump($ff[$i])."\n"; }	// Pocesar por partes, empezando por el último.
php?>
		</PRE>
    </body>
</html>


<?php
function QuitaChr32($cadena){
    $cadena = str_replace(' ', '', $cadena);
    return $cadena;
}
function Calc($f) {
	$i = strpos($f, "(");
	var_dump($i);
	if ($i === false) {	// No Hay "("
		//$ii = 0; // Posición matriz
    	for ($i=0; $i < strlen($f) ; $i++) { // Recorrer el string, dividir por números y operaciones.
            $c = $f[$i];
            switch (strtolower($c)){
                case "+" : break;
                case "-" : break;
                case "/" : break;
                case "*" : break;
                case "%" : break;
                case "^" : break;
                default :
                	$c = false;			// No procesar luego.
                	$ii = count($ff)-1;	// Recuperar la última posición.
                	$v = $ff[$ii];
//echo " <BR> ...\$v= "; var_dump(is_null($v));
					if (is_null($v)) { $ff[$ii]= $c;}
					elseif (is_numeric($v)) {
                		$ff[$ii].= $c; } 	// si es número concateno el nuevo número.
                	else { $ff[] = $c; }	// sino lo creo al fínal.
	                break; // Concatenar el número.
            }
            if ($c === false){ 
            	//NADA
            } else { // Si no se ha concatenado como número, lo añado.
            	$ff[] = $c;		// Añado el carácter al final.
            	//$ii++;			// sumo una posición.
            }
        }
echo "<BR> \$ff= ";
        var_dump($ff);
echo "<BR>";

// 		$ii = 0; // Posición matriz
// echo "<BR> \$f= ";
//         var_dump($f);
// echo "<BR>";
//     	for ($i=0; $i < strlen($f) ; $i++) { // Recorrer el string, dividir por números y operaciones.
//             $c = $f[$i];
// echo '$c ='; var_dump($c); echo ", count(\$f) = " . strlen($f). ', $i = '.$i;
//             switch (strtolower($c)){
//                 case "+" : $ff[++$ii]=$c; break;
//                 case "-" : $ff[++$ii]=$c; break;
//                 case "/" : $ff[++$ii]=$c; break;
//                 case "*" : $ff[++$ii]=$c; break;
//                 case "%" : $ff[++$ii]=$c; break;
//                 case "^" : $ff[++$ii]=$c; break;
//                 default : 
// 	                if (isset($ff[$ii])) {$ff[$ii].= $c;}
// 	                else {$ff[$ii]= $c;} 
// 	                break; // Concatenar el número.
//             }    	
//         }
// echo "<BR> \$ff= ";
//         var_dump($ff);
// echo "<BR>";
    }
    else {
    	$ii = strpos($f, ")");
    	$ret = substr($f, 0, $i); 					// Pre parentesis
    	$ret .= Calc(substr($f, $i+1, $ii-1-$i)); 	// Contenido parentesis.
    	$ret .= substr($f, $ii+1); 					// Post parentesis.
	}
	//substr ( string $string , int $start [, int $length ] )
	return $ret;
}
// $f Fórmula, $o Operación.
//function Calc($ff,$o) {}
?>