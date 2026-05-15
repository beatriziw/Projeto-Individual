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
fkemissora INT,
CONSTRAINT fkemissoradesenho FOREIGN KEY (fkemissora)
REFERENCES emissora (idemissora)
);


CREATE TABLE usuario 
(idusuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100),
email VARCHAR (100),
dtNascimento DATE,
senha VARCHAR (50),
dtCadastro DATETIME DEFAULT CURRENT_TIMESTAMP, 
fkanimacao INT,
CONSTRAINT fkanimacaofav FOREIGN KEY (fkanimacao)
REFERENCES animacao(idanimacao)
);

CREATE TABLE preferencias 
(idpreferencia INT PRIMARY KEY AUTO_INCREMENT,
fkdisneyfav INT,
CONSTRAINT fkanimacaofavd FOREIGN KEY (fkdisneyfav)
REFERENCES animacao(idanimacao),
fkcartoonfav INT,
fknickfav INT,
CONSTRAINT fkanimacaofavn FOREIGN KEY (fknickfav)
REFERENCES animacao(idanimacao),
CONSTRAINT fkanimacaofavc FOREIGN KEY (fkcartoonfav)
REFERENCES animacao(idanimacao),
fkfav INT,
CONSTRAINT fkanimafav FOREIGN KEY (fkfav)
REFERENCES animacao(idanimacao),
fkemissorafav INT,
CONSTRAINT fkemissoradesenhofav FOREIGN KEY (fkemissorafav)
REFERENCES emissora (idemissora),
tecnica VARCHAR (20)
);

INSERT INTO emissora VALUES
(DEFAULT, 'Disney Channel', '1983-04-18'),
(DEFAULT, 'Nickelodeon', '1977-12-01'),
(DEFAULT, 'Cartoon Network', '1992-10-19');

INSERT INTO animacao VALUES
(DEFAULT, 'House of Mouse', ' Programa onde são reapresentados de clássicos a estreias da animação de Walt Disney, é apresentado por Mickey, e os personagens famosos dos estúdios Disney', 'Livre', '2003-10-24',1),


