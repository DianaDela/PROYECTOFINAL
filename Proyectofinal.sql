-- MySQL dump 10.13  Distrib 8.0.31, for Linux (x86_64)
--
-- Host: localhost    Database: Asistencia
-- ------------------------------------------------------
-- Server version	8.0.31-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Alumnos`
--

DROP TABLE IF EXISTS `Alumnos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Alumnos` (
  `Matricula` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(255) NOT NULL,
  `Apellidos` varchar(255) NOT NULL,
  `Edad` int NOT NULL,
  `Numero` int NOT NULL,
  `Correo` varchar(255) NOT NULL,
  `Creado` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `Actualizado` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Activo` char(1) NOT NULL,
  PRIMARY KEY (`Matricula`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Alumnos`
--

LOCK TABLES `Alumnos` WRITE;
/*!40000 ALTER TABLE `Alumnos` DISABLE KEYS */;
INSERT INTO `Alumnos` VALUES (1,'Gladys','Miguel Felipe',21,283118878,'G123@gmail.com','2022-12-13 19:38:57','2022-12-13 13:38:57','S'),(2,'Adilene','Espinosa',22,288122079,'A22@gmail.com','2022-12-13 19:38:57','2022-12-13 13:38:57','S'),(3,'Diana','De la o',20,287167264,'Dela@gmail.com','2022-12-13 19:38:57','2022-12-14 10:33:39','N'),(5,'Javier','Garcia',22,263749223,'J321@gmail.com','2022-12-14 01:38:21','2022-12-14 10:41:36','N'),(8,'Victor','Blanco',23,234563178,'Vic@gmail.com','2022-12-14 16:50:41','2022-12-14 10:50:41','S');
/*!40000 ALTER TABLE `Alumnos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Materias`
--

DROP TABLE IF EXISTS `Materias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Materias` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Materia` varchar(255) NOT NULL,
  `Profesor` varchar(255) NOT NULL,
  `Total_Alum` int NOT NULL,
  `Asistieron` int NOT NULL,
  `Fecha` date DEFAULT NULL,
  `Creado` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `Actualizado` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Activo` char(1) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Materias`
--

LOCK TABLES `Materias` WRITE;
/*!40000 ALTER TABLE `Materias` DISABLE KEYS */;
INSERT INTO `Materias` VALUES (21,'TICS','Maria',25,12,'2022-12-13','2022-12-13 19:41:03','2022-12-13 13:41:03','S'),(22,'Investigacion','Jorge',30,24,'2022-12-13','2022-12-13 19:41:03','2022-12-13 13:41:03','S'),(23,'Programacion','Guadalupe',30,22,'2022-12-14','2022-12-14 17:17:49','2022-12-14 11:17:49','S'),(24,'Automatas','Olivia',25,25,'2022-12-14','2022-12-14 17:21:00','2022-12-14 12:01:57','N');
/*!40000 ALTER TABLE `Materias` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-14 12:29:42
