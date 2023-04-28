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

    $valor = $_GET["valor"];

    switch ($valor) {
        case 1:
            echo "pagamento a vista desconto de 10%. Resultado: " + $valor * 0.9; 
            break;

        case 2:
            echo "pagamento a vista desconto de 20%. Resultado: " + $valor * 0.8; 
            break;

        case 3:
            echo "pagamento a vista desconto de 30%. Resultado: " + $valor * 0.7; 
            break;
        
        default:
            echo "Não foi selecionado nenhuma forma de pagamento";
            break;
    }

    ?>
</body>
</html>