<?php
function f_text($var) {
	$allowed='αβγδεζηθικλμνξοπρστυφχψωςάέήίόύώ ΎΆΈΉΊΌΏΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVQXYZ';
    $cleaned = "";
    $pos = 0;
    do {
        $char = substr($var, $pos, 1);
        if(strspn($char, $allowed, 0, strlen($allowed)) > 0) {
            $cleaned = $cleaned . $char;
        }
        $pos = $pos + 1;
    }
    while ($pos < strlen($var));
    return $cleaned;
}
?>