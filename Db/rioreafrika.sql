-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 19, 2023 at 03:34 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.3.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rioreafrika`
--

-- --------------------------------------------------------

--
-- Table structure for table `std_login_tbl`
--

CREATE TABLE `std_login_tbl` (
  `std_loginID` int(11) NOT NULL,
  `username` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `stdID` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `std_login_tbl`
--

INSERT INTO `std_login_tbl` (`std_loginID`, `username`, `password`, `stdID`) VALUES
(1, 'osamudiamen idemudia', 'Riore9822', '117'),
(2, 'charles otutu', 'Riore1759', '118');

-- --------------------------------------------------------

--
-- Table structure for table `std_register_tbl`
--

CREATE TABLE `std_register_tbl` (
  `stdID` int(11) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `middle_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `email` varchar(1000) NOT NULL,
  `gender` varchar(6) NOT NULL,
  `class` varchar(100) NOT NULL,
  `state` varchar(100) NOT NULL,
  `lga` varchar(100) NOT NULL,
  `dob` varchar(12) NOT NULL,
  `date` varchar(12) NOT NULL,
  `psw` varchar(1000) NOT NULL,
  `passport` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `std_register_tbl`
--

INSERT INTO `std_register_tbl` (`stdID`, `first_name`, `middle_name`, `last_name`, `email`, `gender`, `class`, `state`, `lga`, `dob`, `date`, `psw`, `passport`) VALUES
(116, 'osamudiamen', '', 'idemudia', 'idemudiaosamudiamen6@gmail.com', 'Female', 'primary 1', 'Nasarawa', 'keffi', '2023-08-28', '08/09/2023', 'Riore2171', '../passport/nin.jpg'),
(117, 'osamudiamen', '', 'idemudia', 'idemudiaosamudiamen6@gmail.com', 'Female', 'primary 1', 'Nasarawa', 'keffi', '2023-08-28', '08/09/2023', 'Riore9822', '../passport/nin.jpg'),
(118, 'charles', 'tribuna', 'otutu', 'charlesOtutu@gmail.com', 'Male', 'primary 5', 'edo ', 'oredo', '2021-12-27', '08/09/2023', 'Riore1759', '../passport/nin.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `tutor_login_tbl`
--

CREATE TABLE `tutor_login_tbl` (
  `tutor_loginID` int(11) NOT NULL,
  `username` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `tutorID` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tutor_login_tbl`
--

INSERT INTO `tutor_login_tbl` (`tutor_loginID`, `username`, `password`, `tutorID`) VALUES
(25, 'osamudiamen idemudia', 'Riore4840', '35');

-- --------------------------------------------------------

--
-- Table structure for table `tutor_register_tbl`
--

CREATE TABLE `tutor_register_tbl` (
  `tutorID` int(11) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `middle_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `gender` varchar(6) NOT NULL,
  `discipline` varchar(100) NOT NULL,
  `phone_num` varchar(15) NOT NULL,
  `email` varchar(100) NOT NULL,
  `programming_lang` varchar(1000) NOT NULL,
  `state` varchar(100) NOT NULL,
  `lga` varchar(100) NOT NULL,
  `dob` varchar(12) NOT NULL,
  `date` varchar(12) NOT NULL,
  `passport` varchar(100) NOT NULL,
  `password` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tutor_register_tbl`
--

INSERT INTO `tutor_register_tbl` (`tutorID`, `first_name`, `middle_name`, `last_name`, `gender`, `discipline`, `phone_num`, `email`, `programming_lang`, `state`, `lga`, `dob`, `date`, `passport`, `password`) VALUES
(35, 'osamudiamen', '', 'idemudia', 'Male', 'dis', '090', 'idemudiaos6@gmail.com', 'pyhon', 'Nasarawa', 'keffi', '2023-08-30', '11/09/2023', '../passport/nin.jpg', 'Riore4840');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `std_login_tbl`
--
ALTER TABLE `std_login_tbl`
  ADD PRIMARY KEY (`std_loginID`);

--
-- Indexes for table `std_register_tbl`
--
ALTER TABLE `std_register_tbl`
  ADD PRIMARY KEY (`stdID`);

--
-- Indexes for table `tutor_login_tbl`
--
ALTER TABLE `tutor_login_tbl`
  ADD PRIMARY KEY (`tutor_loginID`);

--
-- Indexes for table `tutor_register_tbl`
--
ALTER TABLE `tutor_register_tbl`
  ADD PRIMARY KEY (`tutorID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `std_login_tbl`
--
ALTER TABLE `std_login_tbl`
  MODIFY `std_loginID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `std_register_tbl`
--
ALTER TABLE `std_register_tbl`
  MODIFY `stdID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=119;

--
-- AUTO_INCREMENT for table `tutor_login_tbl`
--
ALTER TABLE `tutor_login_tbl`
  MODIFY `tutor_loginID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `tutor_register_tbl`
--
ALTER TABLE `tutor_register_tbl`
  MODIFY `tutorID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
