<?php
require("../includes/autoload.inc.php");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-headers: Access");
header("Access-Control-Allow-Method: POST");

$userName    =   $_POST['userName'];
$psw         =   $_POST['password'];

$stlogin     =   new Stlogin();

$result      =   $stlogin->setStudentLogin($userName,$psw);

$row         =   $result->rowCount();

if($row){
    echo "success";
}else{
    echo "error";
}


?>