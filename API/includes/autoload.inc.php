<?php

spl_autoload_register('myLoader');
function myLoader($className){
$path       =     "../classes/";
$extention  =     ".class.php";
$fullpath   =     $path.$className.$extention;

include_once($fullpath);

}
?>