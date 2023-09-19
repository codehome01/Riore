<?php
session_start();
require("../includes/autoload.inc.php");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Method: POST");
header("Access-Control-Allow-Headers: *");

$fn      = $_POST['firstname'];
$md      = $_POST['middlename'];
$ln      = $_POST['lastname'];
$gender  = $_POST['gender'];
$disc    = $_POST['discipline'];
$phone   = $_POST['phoneNo'];
$email   = $_POST['email'];
$special = $_POST['specialize']; //Programming Language
$state   = $_POST['state'];
$lga     = $_POST['lga'];
$dob     = $_POST['dob'];

$_SESSION['email']  = $email;
//image script

$img_name  = $_FILES['photo']['name'];
$img_tmp   = $_FILES['photo']['tmp_name'];
$img_type  = $_FILES['photo']['type'];
$img_size  = $_FILES['photo']['size'];
$basename  = basename($img_name);

$dir      = "../passport/";

$final    = $dir.$basename;
move_uploaded_file($img_tmp, $final);
//End script
$rand     = rand("0000","9999");
$password = "Riore".$rand;
$date   = date("d/m/Y");
$TutorReg       =   new   TutorReg();
$result         =  $TutorReg->setTutorReg($fn,$md,$ln,$gender,$disc,$phone,$email,$special,$state,$lga, $dob,$date, $final,$password);

$row     =  $result->rowCount();
if($row > 0){
    $userName = $fn ." ". $ln;
    $pas      =  $password;

    echo "Registration Successful \n";
    echo "USERNAME: ". $userName ."\n";
    echo "PASSWORD: ". $pas ."\n";
}else{
    echo "Error, Please try again";
}


?>