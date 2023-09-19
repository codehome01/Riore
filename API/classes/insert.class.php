<?php
header("Access-Control-Allow-Origin: *");



class insert extends Dbh{
    
    public function setRegisterStudent($fn,$md,$ln,$email,$gender,$class,$state,$lga,$dob,$date,$password,$final){
        $sqlInsert = "INSERT INTO std_register_tbl(`first_name`,`middle_name`,`last_name`,`email`,`gender`,`class`,`state`,`lga`,`dob`,`date`,`psw`,`passport`) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)";
        $stmt = $this->Connect()->prepare($sqlInsert);
        $stmt->execute([$fn,$md,$ln,$email,$gender,$class,$state,$lga,$dob,$date,$password,$final]);
        
        if($stmt){
            
            $retrieve = "SELECT * from std_register_tbl WHERE `psw` =  '".$_SESSION['psw']."'";
            $stmtRetrieve = $this->Connect()->prepare($retrieve);
            $stmtRetrieve->execute([]);
            $rowCount = $stmtRetrieve->rowCount();
            if($rowCount > 0){
                $result = $stmtRetrieve->fetch();
                $stdID = $result['stdID'];
                //End of Retrieving the lastID
                $userName = $fn." ".$ln; 
                $loginInsert = "INSERT INTO std_login_tbl(`username`, `password`, `stdID`) VALUES(?,?,?)";
                $stmtLogin   = $this->Connect()->prepare($loginInsert);
                $stmtLogin->execute([$userName, $password, $stdID]);
                return $stmtLogin;
            }
          
            
           
        }
        
}
}
?>