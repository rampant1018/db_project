-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- 主機: localhost
-- 建立日期: 2015 年 01 月 05 日 17:31
-- 伺服器版本: 5.5.40-0ubuntu0.14.04.1
-- PHP 版本: 5.5.9-1ubuntu4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 資料庫: `db_project`
--

-- --------------------------------------------------------

--
-- 資料表結構 `bike`
--

CREATE TABLE IF NOT EXISTS `bike` (
  `id` int(11) NOT NULL,
  `date_buy` date NOT NULL,
  `money_buy` decimal(10,0) NOT NULL,
  `brand` varchar(16) NOT NULL,
  `status` varchar(16) NOT NULL,
  `category` varchar(16) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 資料表結構 `bike_rent`
--

CREATE TABLE IF NOT EXISTS `bike_rent` (
  `id` int(11) NOT NULL,
  `member_id` varchar(9) NOT NULL,
  `bike_id` int(11) NOT NULL,
  `station_id_borrow` int(11) NOT NULL,
  `station_id_return` int(11) NOT NULL,
  `time_borrow` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `time_return` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 資料表結構 `bike_repair`
--

CREATE TABLE IF NOT EXISTS `bike_repair` (
  `id` int(11) not NULL,
  `bike_id` int(11) NOT NULL,
  `fixer_id` int(11) NOT NULL,
  `Item` varchar(16) NOT NULL,
  `money` decimal(10,0) NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 資料表結構 `fixer`
--

CREATE TABLE IF NOT EXISTS `fixer` (
  `id` int(11) NOT NULL,
  `name` varchar(16) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 資料表結構 `member`
--

CREATE TABLE IF NOT EXISTS `member` (
  `id` varchar(9) NOT NULL,
  `name` varchar(16) NOT NULL,
  `role` varchar(8) NOT NULL,
  `phone` varchar(16) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 資料表結構 `station`
--

CREATE TABLE IF NOT EXISTS `station` (
  `id` int(11) NOT NULL,
  `slot_broken` int(11) NOT NULL,
  `slot_current` int(11) NOT NULL,
  `slot_all` int(11) NOT NULL,
  `location` varchar(32) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 資料表結構 `station_reapir`
--

CREATE TABLE IF NOT EXISTS `station_reapir` (
  `id` int(11) NOT NULL,
  `station_id` int(11) NOT NULL,
  `fixer_id` int(11) NOT NULL,
  `slot_number` int(11) NOT NULL,
  `Item` varchar(16) NOT NULL,
  `money` decimal(10,0) NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 已匯出資料表的限制(Constraint)
--

--
-- 資料表的 Constraints `bike_rent`
--
ALTER TABLE `bike_rent`
  ADD CONSTRAINT `bike_rent_ibfk_4` FOREIGN KEY (`member_id`) REFERENCES `member` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bike_rent_ibfk_1` FOREIGN KEY (`bike_id`) REFERENCES `bike` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bike_rent_ibfk_2` FOREIGN KEY (`station_id_borrow`) REFERENCES `station` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bike_rent_ibfk_3` FOREIGN KEY (`station_id_return`) REFERENCES `station` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 資料表的 Constraints `bike_repair`
--
ALTER TABLE `bike_repair`
  ADD CONSTRAINT `bike_repair_ibfk_2` FOREIGN KEY (`fixer_id`) REFERENCES `fixer` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bike_repair_ibfk_1` FOREIGN KEY (`bike_id`) REFERENCES `bike` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 資料表的 Constraints `station_reapir`
--
ALTER TABLE `station_reapir`
  ADD CONSTRAINT `station_reapir_ibfk_2` FOREIGN KEY (`fixer_id`) REFERENCES `fixer` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `station_reapir_ibfk_1` FOREIGN KEY (`station_id`) REFERENCES `station` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
