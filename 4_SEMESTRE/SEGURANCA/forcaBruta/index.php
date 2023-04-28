<?php

    for ($i=4000000; $i < 4499999 ; $i++) { 
        $senha = strval("$i");
        if (md5($senha) == '264f108e09b86bd1e8269d164fbc97f9') {
            echo '*****descobri a senha ' . $senha;
            break;
        }
        echo 'tentativa com = ' . $senha . '<br/>';
    }
?>
