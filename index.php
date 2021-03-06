<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <style type="text/css">
            html { font-family: arial; }
            .cab { background-color: background;}
        </style>
        <script>
            function MakeMenuLinksOpenInNewWindow() {
                var links = document.getElementsByTagName("a");
                for (var i = 0, l = links.length; i < l; i++) {
                        links[i].target = "_blank";
                }
            }
            window.onload = MakeMenuLinksOpenInNewWindow;
        </script>
    </head>
    <body>
        <h2>Utils</h2>
        <Table>
            <tr class="cab">
                <td>M</td>
                <td></td>
                <td></td>
                <td>Utility</td>
                <td>Moodle</td>
                <td>Wiki</td>
                <td>Otros</td>
            </tr>
<!--M3-->
            <tr class="">
                <td><a href="./M3/">M3</a></td>
                <td>Java</td>
                <td>Albert Canela</td>
                <td><a href="./M3/utils.html">_</a></td>
                <td><a href="http://www.infomerce.es/moodle/course/view.php?id=35&section=1">UF4</a></td>
            </tr>
<!--M6-->
            <tr class="">
                <td><a href="./M6/">M6</a></td>
                <td>JS - JavaScript</td>
                <td>Julio Noguera </td>
                <td><a href="./M6/utils.html">_</a></td>
                <td><a href="http://www.infomerce.es/moodle/course/view.php?id=20">UF2</a></td>
                <td><a href="http://wikiserver.infomerce.es/mediawiki/index.php/M6_-_Desenvolupament_web_en_entorn_client#UF1_:_Sintaxis_del_llenguatge._Objectes_predefinits_del_llenguatge_.2830h.29">wiki</a></td>
                <td><a href="http://librosweb.es/javascript/">LibrosWeb</a>,</td>
            </tr>

<!--M7-->
            <tr class="">
                <td><a href="./M7/">M7</a></td>
                <td>PHP - JSP</td>
                <td>Àlex Salinas <span style="font-size: 0.6em;"><br />(asalinas@lamerce.com)</span></td>
                <td><a href="./M7/utils.html">_</a></td>
                <td><a href="http://www.infomerce.es/moodle/course/view.php?id=43&section=1">PHP</a></td>
                <td><a href="http://wikiserver.infomerce.es/mediawiki/index.php/NF1_-_Llenguatge_PHP_(35h)">PHP</a></td>
                <td></td>
            </tr>

<!--M9-->
            <tr class="">
                <td><a href="./M9/">M9</a></td>
                <td>CSS</td>
                <td>Julio Noguera </td>
                <td><a href="./M9/utils.html">_</a></td>
                <td><a href="http://www.infomerce.es/moodle/course/view.php?id=40">UF1</a></td>
                <td></td>
                <td><a href="http://www.w3schools.com/cssref/css_colornames.asp">Colores</a></td>
            </tr>
        </Table>
    </body>
</html>
<?php
