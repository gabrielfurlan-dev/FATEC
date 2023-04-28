<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <h3>Mostrando valores</h3>
        <?php
        $i = 1;
        while ($i <= 5) {
            
            $valor = $_GET["v" . $i];
            if ($valor == NULL) {
                echo "<p>Falta digitar o $i º valor</p>";
            } else{
                echo "<p>$i º valor: $valor </p>";
            }
            $i++;
        }
        ?>
    </body>
</html>
