<?php
    // 38+5*(3+2*3/5) + (56 + 89)
    // 1) Parentesis                                    (2*3/5)
    // 2) Multiplicaciones, divisiones y Módulo...      2*3, 6/5
    // 3) Sumas y restas.

/*
    if (isset($_REQUEST["formula"])){
        $frm = $_REQUEST["formula"];
        for ($i=0;$i<count($frm);$i++){
            $c = $frm[$i];
            switch (strtolower($c)){
                case "+" : break;
                case "-" : break;
                case "/" : break;
                case "*" : break;
                case "%" : break;
                case "^" : break;
                case "(" : break;
                case ")" : break;
                default :   break;
            }
        }
    }
*/    
    
?>
<!DOCTYPE html>
<html>
    <head>
        <title>Calculadora</title>
        <meta charset="windows-1252">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <form action="calculadora.php" method="post">
            <label for="formula"></label>
            <input type="text" name="formula" size="20" value="Operaciones a calcular"
                   onclick="this.value=''"/>
            <input type="submit" value=calcular" />
        </form>
<?php 
        if ( isset($_REQUEST["formula"])) 
        { 
            /* Resolución ... un poko vaguitis aguditis x mi parte ;-) */
            try { 
                eval("\$res = ".$_REQUEST["formula"].";");          // Evaluar la fórmula ;-)  
                // $res = fnc_ProcessFormula($_REQUEST["formula"]);    // Cálcular la fórmula manualmente ;-)
                echo "<h1>";
                echo "Fórmula:   ".$_REQUEST["formula"]."<BR />";
                echo "Resultado: ".$res."<BR />";
                echo "<h1>";
            }
            catch (Exception $e) { 
                echo "<H1> La fórmula introducida:" . $_REQUEST['formula'] .". No es correcta, revise la información introducida."; 
            }
        }
?>
    </body>
</html>

<?php
    /** Procesar fórmula
    * $ff fórmula, introducida por el usuario.
    *
    * Ejemplo: 38+5*(3+2*3/5) + (56 + 89)
    * 1) Parentesis                                    (2*3/5)
    * 2) Multiplicaciones, divisiones y Módulo...      2*3, 6/5
    * 3) Sumas y restas.
    *   
    */
    function fnc_ProcessFormula($ff){

    }
?>