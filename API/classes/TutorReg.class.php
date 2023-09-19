<?php 

  Class TutorReg extends Dbh{

    public function setTutorReg($fn,$md,$ln,$gender,$disc,$phone,$email,$special,$state,$lga, $dob,$date, $final,$password){
        $insert = "INSERT INTO tutor_register_tbl(`first_name`, `middle_name`, `last_name`, `gender`, `discipline`, `phone_num`, `email`, `programming_lang`, `state`, `lga`, `dob`, `date`, `passport`, `password`) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
        $stmt   = $this->Connect()->prepare($insert);
        $stmt->execute([$fn,$md,$ln,$gender,$disc,$phone,$email,$special,$state,$lga, $dob,$date, $final,$password]);
        
        if($stmt){
          $SELECT   = "SELECT * FROM tutor_register_tbl WHERE email = '".$_SESSION['email']."'";
          $stmt     = $this->Connect()->prepare($SELECT);
          $stmt->execute([]);
           
          if($stmt){
          $rowSelect     =    $stmt->rowCount();
          if($rowSelect > 0){
            $result  = $stmt->fetch();
            $tutorID = $result['tutorID']; 

            $userName = $fn." ".$ln;

            $INSERT   = "INSERT INTO tutor_login_tbl(`username`,`password`,`tutorID`) VALUES(?,?,?)";
            $stmt     = $this->Connect()->prepare($INSERT);
            $stmt->execute([$userName, $password, $tutorID]);
            
            return $stmt;
          }

        }
        }
        
 

    }

  }


?>