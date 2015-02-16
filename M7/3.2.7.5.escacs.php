<!DOCType html>
<html>
    <head>
        <title>ESCACS</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    </head>
    <body>
        <h3>TABLERO DE AJEDREZ DINÁMICO</h3>
        <table width="270px" cellsapcing="0px" cellpadding="0px" border="1">
            <?php
                for($x=0; $x<9; $x++){
                    echo "<tr>";
                    for ($i=0; $i<9;$i++){
                        if (($x+$i)%2) echo "<td height='30px' width='30px' bgcolor='black'>\n";
                        else    echo "<td height='30px' width='30px' bgcolor='white'>\n";
                    }
                }
            ?>
        </table>
        <?php
            foreach ($_SERVER as $k=>$v) echo "[$k] => $v <BR>";
        ?>
    </body>
</html>






















<?php
/* 
Exercici: Escacs
Dibuixa una taula d'escacs com la que pots veure a continuació. Table width="270px" i cada cel·la ocupa 30px d'amplada i d'altura.
*/
?>
