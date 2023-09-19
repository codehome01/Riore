<?php

class TutorLogin extends Dbh {
    public function setTutorLogin($userID,$pass){
        $login = "SELECT * FROM `tutor_login_tbl` WHERE username=? AND password=?";
        $stmt  = $this->Connect()->prepare($login);
        $stmt->execute([$userID,$pass]);

        return $stmt;
    }
}


?>