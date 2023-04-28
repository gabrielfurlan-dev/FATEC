<?php
include 'aes.php';

$inputText = "U+n0IlzEypYDnLJ+E7fC1t7dcMsBLfq+1XBTsXc77vE==";
$inputKey = "0021ac7b19h70573";
$blockSize = 128;
$aes = new AES($inputText, $inputKey, $blockSize);
$dec=$aes->decrypt();
echo "Apos da decifragem.: ".$dec."<br/>";
?>