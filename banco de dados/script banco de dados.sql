CREATE DATABASE projetoindividual;

USE projetoindividual;

CREATE TABLE emissora
(idemissora INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
dtFundacao date);

CREATE TABLE animacao
(idanimacao INT PRIMARY KEY AUTO_INCREMENT,
titulo VARCHAR (100),
descricao VARCHAR(200),
classificacao VARCHAR (20),
anoLancamento DATE,
fkemissora INT NOT NULL,
CONSTRAINT fkemissoradesenho FOREIGN KEY (fkemissora)
REFERENCES emissora (idemissora)
);


CREATE TABLE usuario 
(idusuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100),
email VARCHAR (100),
dtNascimento DATE,
senha VARCHAR (50),
fkanimacao INT NOT NULL,
CONSTRAINT fkanimacaofav FOREIGN KEY (fkanimacao)
REFERENCES animacao(idanimacao)
);