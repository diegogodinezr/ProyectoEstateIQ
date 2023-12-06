-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS estateiq;

-- Seleccionar la base de datos
USE estateiq;

-- Crear la tabla de usuarios
CREATE TABLE IF NOT EXISTS usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    contraseña VARCHAR(100) NOT NULL,
    correo_electronico VARCHAR(100) NOT NULL,
);

-- Crear la tabla de casas
CREATE TABLE IF NOT EXISTS casas (
    id_casa INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10, 2) NOT NULL,
    ubicacion VARCHAR(255) NOT NULL,
    habitaciones INT,
    baños INT,
    id_usuario INT,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

-- Crear la tabla de terrenos
CREATE TABLE IF NOT EXISTS terrenos (
    id_terreno INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10, 2) NOT NULL,
    ubicacion VARCHAR(255) NOT NULL,
    area DECIMAL(10, 2),
    id_usuario INT,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

-- Crear la tabla de departamentos
CREATE TABLE IF NOT EXISTS departamentos (
    id_departamento INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10, 2) NOT NULL,
    ubicacion VARCHAR(255) NOT NULL,
    habitaciones INT,
    baños INT,
    id_usuario INT,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

-- Insertar datos en la tabla de usuarios
INSERT INTO usuarios (nombre_usuario, contraseña, correo_electronico) VALUES
('Usuario1', 'contraseña1', 'usuario1@example.com'),
('Usuario2', 'contraseña2', 'usuario2@example.com'),
('Usuario3', 'contraseña3', 'usuario3@example.com'),
('Usuario4', 'contraseña4', 'usuario4@example.com'),
('Usuario5', 'contraseña5', 'usuario5@example.com');

-- Insertar datos en la tabla de casas
INSERT INTO casas (titulo, descripcion, precio, ubicacion, habitaciones, baños, id_usuario) VALUES
('Casa 1', 'Descripción de la casa 1', 250000.00, 'Ubicación 1', 3, 2, 1),
('Casa 2', 'Descripción de la casa 2', 300000.00, 'Ubicación 2', 4, 3, 2),
('Casa 3', 'Descripción de la casa 3', 200000.00, 'Ubicación 3', 2, 2, 3),
('Casa 4', 'Descripción de la casa 4', 350000.00, 'Ubicación 4', 5, 4, 4),
('Casa 5', 'Descripción de la casa 5', 280000.00, 'Ubicación 5', 3, 2, 5);

-- Insertar datos en la tabla de terrenos
INSERT INTO terrenos (titulo, descripcion, precio, ubicacion, area, id_usuario) VALUES
('Terreno 1', 'Descripción del terreno 1', 80000.00, 'Ubicación 1', 1200.00, 1),
('Terreno 2', 'Descripción del terreno 2', 95000.00, 'Ubicación 2', 1500.00, 2),
('Terreno 3', 'Descripción del terreno 3', 70000.00, 'Ubicación 3', 1000.00, 3),
('Terreno 4', 'Descripción del terreno 4', 120000.00, 'Ubicación 4', 2000.00, 4),
('Terreno 5', 'Descripción del terreno 5', 85000.00, 'Ubicación 5', 1300.00, 5);

-- Insertar datos en la tabla de departamentos
INSERT INTO departamentos (titulo, descripcion, precio, ubicacion, habitaciones, baños, id_usuario) VALUES
('Departamento 1', 'Descripción del departamento 1', 180000.00, 'Ubicación 1', 2, 1, 1),
('Departamento 2', 'Descripción del departamento 2', 220000.00, 'Ubicación 2', 3, 2, 2),
('Departamento 3', 'Descripción del departamento 3', 160000.00, 'Ubicación 3', 1, 1, 3),
('Departamento 4', 'Descripción del departamento 4', 250000.00, 'Ubicación 4', 4, 2, 4),
('Departamento 5', 'Descripción del departamento 5', 200000.00, 'Ubicación 5', 2, 1, 5);
