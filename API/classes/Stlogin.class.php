<?php

class Stlogin extends Dbh {
    public function setStudentLogin($userName,$psw){
      $login =  "SELECT * FROM std_login_tbl WHERE `userName`=? and `password`=?";
      $stmt  = $this->Connect()->prepare($login);
      $stmt->execute([$userName,$psw]);

      return $stmt;
    }
}



?>