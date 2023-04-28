<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php

        $nome = $_GET["Nome"];
        $nota1 = $_GET["nota1"];
        $nota2 = $_GET["nota2"];
        $nota3 = $_GET["nota3"];
        $nota4 = $_GET["nota4"];

        if ($nota1 == NULL || $nota2 == NULL || $nota3 == NULL || $nota4) {
            echo "existem campos vazios!";
            return;
        }

        $media = ($nota1 + $nota2 + $nota3 + $nota4) / 4;

        echo "Sua média é de " + $media;

        if ($media < 4)
            echo "REPROVADO!";

        if ($media < 6 )
            echo "RECUPERAÇÃO!";

        else
            echo "APROVADO!";
    ?>
</body>
</html>