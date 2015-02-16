<?php

/* 
 * Ejercicios M7 UF1 NF1: Ejercicios varios....
 *   http://wikiserver.infomerce.es/mediawiki/index.php/NF1_-_Llenguatge_PHP_(35h)#Exercicis
 *   @user: jlrobles  46786783e
 */
php?>
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
        <h1>Exercicios: Bloque 1</h1>
        <a href="http://wikiserver.infomerce.es/mediawiki/index.php/NF1_-_Llenguatge_PHP_(35h)#Exercicis">Bloque 1 ejercicios</a>
        <h2>3.2.8.1 Exercici: Ordenació</h2>
        <style>
            .td2 {background-color: CornflowerBlue;}
        </style>
        <code>
        <Table>
            <Tr><td>Crea una funció que ordeni un array:</td><td class="td2"><code>$frutas = array("C80"=>"limón", "C20"=>"naranja", "C30"=>"banana", "C99"=>"albaricoque","C90"=>"Almendras");</code></td></Tr>
            <Tr><td>Per claus de menor a major</td><td class="td2"><?php showElements(1); ?></td></Tr>
            <Tr><td>Per claus de major a menor</td><td class="td2"><?php showElements(2); ?></td></Tr>
            <Tr><td>Per valors de menor a major</td><td class="td2"><?php showElements(3); ?></td></Tr>
            <Tr><td>Per valors de major a menor</td><td class="td2"><?php showElements(4); ?></td></Tr>
        </Table>
            </code>
            - Per claus de menor a major i de major a menor
            - Per valors de menor a major i de major a menor
            Dada la matriz: <BR>
        <code>
            
        </code>
        <bR><a href="http://es1.php.net/manual/es/array.sorting.php">Un poco de teoría: Ordenamiento de arrays.</a><BR>
<?php
    function showElements($opc)    
    {
        $res="";
        $frutas = array("C80"=>"limón", "C20"=>"naranja", "C30"=>"banana", "C99"=>"albaricoque","C90"=>"Almendras");
        switch ($opc)
        {
            case "1": ksort($frutas);   break;
            case "2": krsort($frutas);  break;
            case "3": asort($frutas);   break;
            case "4": arsort($frutas);  break;
        }
        foreach ($frutas as $k => $v) { 
//        echo "Clave/Valor [$k]=>$v";
            if($res!=""){$res .= ", ";} 
            $res .= "[$k]=>$v";
        //echo "Clave/Valor [$k]=>$v";
        //
        //echo $res;
        }
        $res = "Array :: $res\n";
        echo $res;
    }

php?>
    </body>
</html>




<?php
// OTRAS COSASSSSSSS !!!!

// function Ordena_Valor_
//     $frutas = array("C80"->"limón", "C20"->"naranja", "C30"->"banana", "C99"->"albaricoque","C90"->"Almendras");
//     echo "<code>";
// asort() valor   sí  menor a mayor   arsort()
// arsort()    valor   sí  mayor a menor   asort()
// krsort()    key sí  mayor a menor   ksort()
// ksort() key sí  menor a mayor

/*
    sort($frutas);                                 echo 'Sort: <Code>'.print_r($frutas,true)."</Code> <BR>";
    
    asort($frutas, SORT_STRING  ); echo 'Sort:(Textos y no case sensitive). <Code>'.print_r($frutas,true)."</Code><BR>";
    sort($frutas, SORT_NUMERIC ); echo 'Sort:(Textos y no case sensitive). <Code>'.print_r($frutas,true)."</Code><BR>";
    sort($frutas, SORT_NATURAL ); echo 'Sort:(Orden natural y no case sensitive). <Code>'.print_r($frutas,true)."</Code><BR>";
    sort($frutas, SORT_NATURAL && SORT_FLAG_CASE); echo 'Sort:(Orden natural y no case sensitive). <Code>'.print_r($frutas,true)."</Code><BR>";
    echo "</code> <BR><BR>";

    $frutas = array("limón", "naranja", "banana", "Albaricoque","almendras");
    echo "<code>";
    sort($frutas); echo 'Sort: <Code>'.showElements($frutas,true)."</Code> <BR>";
    sort($frutas, SORT_STRING  ); echo 'Sort:(Textos y no case sensitive). <Code>'.print_r($frutas,true)."</Code><BR>";
    sort($frutas, SORT_NUMERIC ); echo 'Sort:(Textos y no case sensitive). <Code>'.print_r($frutas,true)."</Code><BR>";
    sort($frutas, SORT_NATURAL ); echo 'Sort:(Orden natural y no case sensitive). <Code>'.print_r($frutas,true)."</Code><BR>";
    sort($frutas, SORT_NATURAL && SORT_FLAG_CASE); echo 'Sort:(Orden natural y no case sensitive). <Code>'.print_r($frutas,true)."</Code><BR>";
    echo "</code>";
*/

php?>
