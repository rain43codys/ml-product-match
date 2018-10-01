-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Oct 01, 2018 at 04:55 PM
-- Server version: 5.7.23
-- PHP Version: 7.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `machine-learning-match`
--

-- --------------------------------------------------------

--
-- Table structure for table `survey_data`
--

CREATE TABLE `survey_data` (
  `id` int(11) NOT NULL,
  `input` text NOT NULL,
  `output` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `survey_data`
--

INSERT INTO `survey_data` (`id`, `input`, `output`) VALUES
(1, '[0,2,1,0]', '{\"typeA\":1}'),
(2, '[4,3,4,5]', '{\"typeB\":1}'),
(3, '[1,3,0,2]', '{\"typeA\":1}'),
(4, '[4,5,3,5]', '{\"typeB\":1}'),
(5, '[1,0,2,1]', '{\"typeA\":1}'),
(6, '[3,4,5,4]', '{\"typeB\":1}'),
(7, '[3 ,4 ,5 ,4]', '{\"typeB\":1}'),
(8, '[5,3,4,5]', '{\"typeB\":1}'),
(9, '[5,3,4,5]', '{\"typeB\":1}'),
(10, '[1,1,1,1]', '{\"typeA\":1}'),
(11, '[1,1,1,1]', '{\"typeA\":1}'),
(12, '[1,0,1,1]', '{\"typeA\":1}');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `survey_data`
--
ALTER TABLE `survey_data`
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `survey_data`
--
ALTER TABLE `survey_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
