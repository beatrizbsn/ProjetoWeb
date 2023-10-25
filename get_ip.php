<?php
if (isset($_SERVER['HTTP_X_FORWARDED_FOR'])) {
    // Se o cabeçalho X-Forwarded-For estiver disponível, use-o para obter o endereço IP real do cliente.
    $clientIP = $_SERVER['HTTP_X_FORWARDED_FOR'];
} else {
    // Caso contrário, use o valor de REMOTE_ADDR, que conterá o endereço IP do cliente, mas pode ser mascarado por um proxy.
    $clientIP = $_SERVER['REMOTE_ADDR'];
}
echo $clientIP;
