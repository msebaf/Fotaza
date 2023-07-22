-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-07-2023 a las 05:50:12
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `fotaza`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `id` bigint(20) NOT NULL,
  `autorId` bigint(20) NOT NULL,
  `fotoId` bigint(20) NOT NULL,
  `comentario` varchar(300) NOT NULL,
  `fechaCreacion` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `comentarios`
--

INSERT INTO `comentarios` (`id`, `autorId`, `fotoId`, `comentario`, `fechaCreacion`) VALUES
(8, 80, 5, 'comentando otra foto', '2023-07-20 00:16:39'),
(18, 80, 6, 'agrego comentario', '2023-07-20 01:48:16'),
(19, 80, 6, 'ddd', '2023-07-20 01:52:12'),
(20, 80, 6, 'rer', '2023-07-20 01:59:30'),
(21, 80, 6, 'ds', '2023-07-20 02:01:52'),
(22, 80, 6, 'dsf', '2023-07-20 02:03:11'),
(23, 80, 6, 'fdfdf', '2023-07-20 02:06:28'),
(24, 80, 5, 'agrego comentraio', '2023-07-21 18:02:25'),
(25, 80, 1, 'dsfsdf', '2023-07-21 19:05:29'),
(27, 80, 1, 'mensajee', '2023-07-21 19:06:15'),
(28, 80, 1, 'mensajee', '2023-07-21 19:06:15'),
(34, 80, 1, 'comentandoooooo', '2023-07-21 19:10:50'),
(70, 80, 1, 'aaa', '2023-07-21 23:20:19'),
(71, 80, 1, 'bbbb', '2023-07-21 23:31:18'),
(72, 80, 1, 'erer', '2023-07-21 23:35:22'),
(73, 80, 5, 'erer', '2023-07-21 23:35:26'),
(74, 80, 6, 'qwq', '2023-07-21 23:35:29');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagenes`
--

CREATE TABLE `imagenes` (
  `id` bigint(20) NOT NULL,
  `autorId` bigint(11) NOT NULL,
  `autor` varchar(100) NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `categoria` int(11) NOT NULL,
  `formato` varchar(15) NOT NULL,
  `fechaCreacion` datetime NOT NULL,
  `resolucion` varchar(25) NOT NULL,
  `licencia` int(11) NOT NULL,
  `etiqueta1` varchar(50) DEFAULT NULL,
  `etiqueta2` varchar(50) DEFAULT NULL,
  `etiqueta3` varchar(50) DEFAULT NULL,
  `path` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `imagenes`
--

INSERT INTO `imagenes` (`id`, `autorId`, `autor`, `titulo`, `categoria`, `formato`, `fechaCreacion`, `resolucion`, `licencia`, `etiqueta1`, `etiqueta2`, `etiqueta3`, `path`) VALUES
(1, 80, 'msebaf', 'ej1', 1, '.jpg', '2023-07-17 19:26:10', 'no se', 1, NULL, NULL, NULL, 'images/ej1.jpg'),
(5, 85, 'msebaf', 'ej3', 1, '.jpg', '2023-07-17 19:29:31', 'no se', 1, NULL, NULL, NULL, 'images/ej3.jpg'),
(6, 82, 'msebaf', 'ej4', 1, '.jpg', '2023-07-17 19:29:31', 'n', 1, NULL, NULL, NULL, 'images/ej4.jpg'),
(7, 80, 'msebaf', 'ej2', 1, '.jpg', '2023-07-17 19:50:10', 'n', 1, NULL, NULL, NULL, 'images/ej2.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `perfiles`
--

CREATE TABLE `perfiles` (
  `id` bigint(20) NOT NULL,
  `usuarioId` bigint(20) DEFAULT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `apellido` varchar(100) DEFAULT NULL,
  `fechaNacimiento` date DEFAULT NULL,
  `intereses` mediumtext DEFAULT NULL,
  `nombreUsuario` varchar(100) NOT NULL,
  `mail` varchar(100) DEFAULT NULL,
  `avatar` varchar(200) NOT NULL DEFAULT '/avatares/avatar.png'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `perfiles`
--

INSERT INTO `perfiles` (`id`, `usuarioId`, `nombre`, `apellido`, `fechaNacimiento`, `intereses`, `nombreUsuario`, `mail`, `avatar`) VALUES
(2, 85, NULL, NULL, NULL, NULL, 'us3', 'us3@gmail.com', '/avatares/avatar.png'),
(3, 80, 'Mauricio', 'Ferrieres', '1986-11-30', 'platita', 'msebaf', 'msebaf86@gmail.com', '/avatares/perfil.jpg'),
(4, 82, 'paco', 'perez', '1965-07-11', 'laytytfyujfuyifu vukgyu uvuygi ugvuygfvuyg uyvuygyug vuygyug vyuvuy vyuvyu', 'u2', 'u2@gmail.com', '/avatares/avatar.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` bigint(11) NOT NULL,
  `mail` varchar(100) NOT NULL,
  `contrasenia` varchar(300) DEFAULT NULL,
  `usuario` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `mail`, `contrasenia`, `usuario`) VALUES
(80, 'msebaf86@gmail.com', '$2b$10$W.o6oGSvlWA2V30pz1e0GOkp7Tpx.Q1ybVsBlWlWJgAtX0TR0LMja', 'msebaf'),
(82, 'us2@gmail.com', '$2b$10$Vt8DnU3is5N6v0Tb5SncqexG3QnHlY1HcwjJ2RtkKOHIIJKIeaEOO', 'us2'),
(85, 'us3@gmail.com', '$2b$10$xPKgRvseBDPSc6XiXHFkQODgYGFyQDrIelRAU8L0/lqmZMDFspBRa', 'us3');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `votos`
--

CREATE TABLE `votos` (
  `id` bigint(20) NOT NULL,
  `fotoId` bigint(20) NOT NULL,
  `usuarioId` int(11) NOT NULL,
  `voto` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `votos`
--

INSERT INTO `votos` (`id`, `fotoId`, `usuarioId`, `voto`) VALUES
(1, 1, 80, 2),
(2, 5, 80, 2),
(4, 6, 80, 5),
(5, 5, 82, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fotoId` (`fotoId`),
  ADD KEY `autorId` (`autorId`);

--
-- Indices de la tabla `imagenes`
--
ALTER TABLE `imagenes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `autorId` (`autorId`);

--
-- Indices de la tabla `perfiles`
--
ALTER TABLE `perfiles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuarioId` (`usuarioId`),
  ADD KEY `id` (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `mail` (`mail`,`usuario`),
  ADD UNIQUE KEY `usuario` (`usuario`),
  ADD UNIQUE KEY `mail_2` (`mail`);

--
-- Indices de la tabla `votos`
--
ALTER TABLE `votos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fotoId` (`fotoId`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;

--
-- AUTO_INCREMENT de la tabla `imagenes`
--
ALTER TABLE `imagenes`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `perfiles`
--
ALTER TABLE `perfiles`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` bigint(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=87;

--
-- AUTO_INCREMENT de la tabla `votos`
--
ALTER TABLE `votos`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`fotoId`) REFERENCES `imagenes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `comentarios_ibfk_3` FOREIGN KEY (`autorId`) REFERENCES `perfiles` (`usuarioId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `imagenes`
--
ALTER TABLE `imagenes`
  ADD CONSTRAINT `imagenes_ibfk_1` FOREIGN KEY (`autorId`) REFERENCES `perfiles` (`usuarioId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `perfiles`
--
ALTER TABLE `perfiles`
  ADD CONSTRAINT `perfiles_ibfk_1` FOREIGN KEY (`usuarioId`) REFERENCES `usuarios` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`id`) REFERENCES `imagenes` (`autorId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `votos`
--
ALTER TABLE `votos`
  ADD CONSTRAINT `votos_ibfk_1` FOREIGN KEY (`fotoId`) REFERENCES `imagenes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
