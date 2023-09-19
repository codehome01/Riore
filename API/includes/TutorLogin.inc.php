<?php
require("../includes/autoload.inc.php");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Access");
header("Access-Control-Allow-Method: POST");


$userID  =  $_POST['userID'];
$pass    =  $_POST['password'];

$tutorL  =  new TutorLogin();
$result  = $tutorL->setTutorLogin($userID,$pass);

$row     = $result->rowCount();

if($row > 0){
    echo "success";
}else{
    echo "password or username not Match";
}

?>