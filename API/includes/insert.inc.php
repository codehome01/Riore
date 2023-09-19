<?php
session_start();
require("../includes/autoload.inc.php");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Method: POST");


$fn    =   $_POST["firstname"];
$md    =   $_POST["mddlename"];
$ln    =   $_POST["lastname"];
$gender=   $_POST["gender"];
$class =   $_POST["class"];
$state =   $_POST["state"];
$lga   =   $_POST["lga"];
$email   =   $_POST["email"];
$dob    =  $_POST["dob"];

//image script

$img_name     =   $_FILES['avatar']['name'];
$img_type     =   $_FILES['avatar']['type'];
$img_temp     =   $_FILES['avatar']['tmp_name'];
$img_size     =   $_FILES['avatar']['size'];
$basename     =   basename($img_name);

$dir          =   "../passport/"; 

$final = $dir.$basename;

move_uploaded_file($img_temp, $final);
//end of image script

$date    = date("d/m/Y");

 $rand  = rand("0000","9999");
 $password = "Riore".$rand;
 $_SESSION['psw'] = $password;

// $final ="picture";

//  $data    =  json_decode(file_get_contents("php://input"));

$insert    =  new insert();
$result    = $insert->setRegisterStudent($fn,$md,$ln,$email,$gender,$class,$state,$lga,$dob,$date,$password,$final);

$rowCount  = $result->rowCount();

if($rowCount > 0){
    //$status = 1;
    echo "success";
    return;
}else{
    $status = 0;
    echo "Regiser Failed";
    return;
}
?>