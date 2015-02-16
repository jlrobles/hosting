<html>
    <head>
        <meta charset="utf-8" />
        <style type="text/css">
            html { font-family: arial; }
/*            .negro { background-color: #000; }
            .cuadro { width: 30px; height: 30px; float: left; display:inline;}*/
        </style>
    </head>
    <body>
<?php

/* 
 * Ejercicios M7 UF1 NF1: Ejercicios varios....
 *   http://wikiserver.infomerce.es/mediawiki/index.php/NF1_-_Llenguatge_PHP_(35h)#Exercicis
 *   @user: jlrobles  46786783e
 */
php?>        <h1>Exercicios: Bloque 1</h1>
        <a href="http://wikiserver.infomerce.es/mediawiki/index.php/NF1_-_Llenguatge_PHP_(35h)#Exercicis">Bloque 1 ejercicios</a>
        <h2>3.2.8.1 Exercici: Ordenació</h2>
            Crea una funció que ordeni un array:
            - Per claus de menor a major i de major a menor
            - Per valors de menor a major i de major a menor
            Dada la matriz: <BR>
        <code>
            $frutas = array("C80"->"limón", "C20"->"naranja", "C30"->"banana", "C99"->"albaricoque","C90"->"Almendras");
        </code>
        <bR><a href="http://es1.php.net/manual/es/array.sorting.php">Un poco de teoría: Ordenamiento de arrays.</a><BR>
<?php
// function Ordena_Valor_
//     $frutas = array("C80"->"limón", "C20"->"naranja", "C30"->"banana", "C99"->"albaricoque","C90"->"Almendras");
//     echo "<code>";
// asort() valor   sí  menor a mayor   arsort()
// arsort()    valor   sí  mayor a menor   asort()
// krsort()    key sí  mayor a menor   ksort()
// ksort() key sí  menor a mayor

    define ("MAYOR_MENOR","1");
    define ("MENOR_MAYOR","2");
    define ("CLAVES","1");
    define ("VALORES","2");
    
    $frutas = array("C80"=>"limón", "C20"=>"naranja", "C30"=>"banana", "C99"=>"albaricoque","C90"=>"Almendras");

    echo "<PRE>";
//    echo ordenar(&$frutas, MAYOR_MENOR, CLAVES);
//    echo ordenar(&$frutas, MENOR_MAYOR, CLAVES);
//    echo ordenar(&$frutas, MAYOR_MENOR, VALORES);
//    echo ordenar(&$frutas, MENOR_MAYOR, VALORES);
    ordenar(&$frutas, MAYOR_MENOR, CLAVES);
    ordenar(&$frutas, MENOR_MAYOR, CLAVES);
    ordenar(&$frutas, MAYOR_MENOR, VALORES);
    var_dump (ordenar(&$frutas, MENOR_MAYOR, VALORES));
    echo "</PRE>";

function ordenar($aa,$orden,$elemento) {
    //$res = "";
    if($orden==MAYOR_MENOR) 
        if($elemento==CLAVES) {krsort($aa);} else {arsort($aa);}
    else
        if($elemento==CLAVES) {ksort($aa);} else {asort($aa);}
print_r($aa);
return $aa;
//    foreach ($aa as $value) { if($res<>""){$res += ", ";} $res += $value;}
//    $res = "Array :: $res";
//    return $res;
}
    // sort($frutas);                                 echo 'Sort: <Code>'.print_r($frutas,true)."</Code> <BR>";
    
    // asort($frutas, SORT_STRING  ); echo 'Sort:(Textos y no case sensitive). <Code>'.print_r($frutas,true)."</Code><BR>";
    // sort($frutas, SORT_NUMERIC ); echo 'Sort:(Textos y no case sensitive). <Code>'.print_r($frutas,true)."</Code><BR>";
    // sort($frutas, SORT_NATURAL ); echo 'Sort:(Orden natural y no case sensitive). <Code>'.print_r($frutas,true)."</Code><BR>";
    // sort($frutas, SORT_NATURAL && SORT_FLAG_CASE); echo 'Sort:(Orden natural y no case sensitive). <Code>'.print_r($frutas,true)."</Code><BR>";
    // echo "</code> <BR><BR>";

    // $frutas = array("limón", "naranja", "banana", "Albaricoque","almendras");
    // echo "<code>";
    // sort($frutas); echo 'Sort: <Code>'.showElements($frutas,true)."</Code> <BR>";
    // sort($frutas, SORT_STRING  ); echo 'Sort:(Textos y no case sensitive). <Code>'.print_r($frutas,true)."</Code><BR>";
    // sort($frutas, SORT_NUMERIC ); echo 'Sort:(Textos y no case sensitive). <Code>'.print_r($frutas,true)."</Code><BR>";
    // sort($frutas, SORT_NATURAL ); echo 'Sort:(Orden natural y no case sensitive). <Code>'.print_r($frutas,true)."</Code><BR>";
    // sort($frutas, SORT_NATURAL && SORT_FLAG_CASE); echo 'Sort:(Orden natural y no case sensitive). <Code>'.print_r($frutas,true)."</Code><BR>";
    // echo "</code>";
php?>
</body>
</html>

