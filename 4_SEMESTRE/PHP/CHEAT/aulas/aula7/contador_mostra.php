<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <h3>Resultado da contagem</h3>
        <?php
        $in = $_GET["inicial"];
        $fi = $_GET["final"];
        $num = $_GET["numero"];
        if ($in == NULL || $fi == NULL) {
            echo "Não foi informado o valor inicial ou final<br>";
        } else if ($in <= $fi) {
            while ($in <= $fi) {
                echo $in . "<br>";
                $in = $in + $num;
            }
        } else {
            while ($in >= $fi) {
                echo $in . "<br>";
                $in = $in - $num;
            }
        }
        ?>
        <br> 
        <a href="contador.php">Voltar</a>
    </body>
</html>
