<?php

class Dbh{
private $host   =  "localhost"; 
private $user   =   "root";
private $psw    =   "";
private $dbname =   "rioreafrika";

protected function Connect(){
    $DSN = 'mysql:host='.$this->host.';dbname='.$this->dbname;

    $pdo = new PDO($DSN,$this->user, $this->psw);

    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

    return $pdo;

}
}
?>