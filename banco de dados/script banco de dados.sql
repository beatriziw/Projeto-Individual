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

CREATE TABLE tecnica
(idtecnica INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR (30));


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
(idpreferencia INT,
fkusuario INT,
CONSTRAINT pkComposta
	PRIMARY KEY (idpreferencia, fkusuario),
fkdisneyfav INT,
CONSTRAINT fkanimacaofavd FOREIGN KEY (fkdisneyfav)
REFERENCES animacao(idanimacao),
fknickfav INT,
CONSTRAINT fkanimacaofavn FOREIGN KEY (fknickfav)
REFERENCES animacao(idanimacao),
fkcartoonfav INT,
CONSTRAINT fkanimacaofavc FOREIGN KEY (fkcartoonfav)
REFERENCES animacao(idanimacao),
fkfav INT,
CONSTRAINT fkanimafav FOREIGN KEY (fkfav)
REFERENCES animacao(idanimacao),
fkemissorafav INT,
CONSTRAINT fkemissoradesenhofav FOREIGN KEY (fkemissorafav)
REFERENCES emissora (idemissora),
fktecnica INT,
CONSTRAINT fktecnicafav FOREIGN KEY (fktecnica)
REFERENCES tecnica (idtecnica)
);



INSERT INTO emissora VALUES
(DEFAULT, 'Disney Channel', '1983-04-18'),
(DEFAULT, 'Nickelodeon', '1977-12-01'),
(DEFAULT, 'Cartoon Network', '1992-10-19');


INSERT INTO animacao VALUES
(DEFAULT, 'House of Mouse', ' Programa onde são reapresentados de clássicos a estreias da animação de Walt Disney, é apresentado por Mickey, e os personagens famosos dos estúdios Disney', 'Livre', '2003-10-24',1),
(DEFAULT, 'Kim Possible', ' Kim Possible parece ser uma adolescente normal, mas salva o mundo dos vilões em seu tempo livre.', 'Livre', '2002-06-07',1),
(DEFAULT, 'Phineas e Ferb', 'Phineas e Ferb querem aproveitar as férias ao máximo.', 'Livre', '2007-08-17',1),
(DEFAULT, 'Hora do Recreio', 'Seis corajosas crianças da quarta série têm a missão de proteger as outras crianças na hora do recreio.', 'Livre', '1997-09-13',1),
(DEFAULT, 'Gravity Falls', 'Os gêmeos Dipper e Mabel Pines passam as férias com o tio-avô numa misteriosa cidade.', '10 anos', '2016-02-15',1),
(DEFAULT, 'A Casa Coruja', 'Uma adolescente tropeça em um portal para um reino mágico, onde faz amizade com uma bruxa rebelde.', '10 anos', '2020-01-10',1),
(DEFAULT, 'Bob Esponja', 'Bob trabalha no Siri Cascudo e, nas horas vagas, vive arrumando confusões com seu melhor amigo.', 'Livre', '1999-05-01',2),
(DEFAULT, 'The Loud House', 'A vida de um garoto de 11 anos de idade que vive em uma casa com suas dez irmãs.', 'Livre', '2016-05-02',2),
(DEFAULT, 'Tartarugas Ninja', 'Emergindo do seu lar no esgoto, as tartarugas ninja enfrentam o emocionante mundo de Nova York.', '10 anos', '2012-09-28',2),
(DEFAULT, 'Os Padrinhos Mágicos', 'As interessantes aventuras de um menino de dez anos e seus padrinhos com poderes especiais.', 'Livre', '2001-03-30',2),
(DEFAULT, 'Hey, Arnold', 'As aventuras de Arnold na escola com seus amigos e na pensão em que mora com seus avós e diversos personagens excêntricos.', 'Livre', '1996-10-07',2),
(DEFAULT, 'Invasor Zim', 'Um alienígena do planeta Irk chamado Zim é enviado em uma missão secreta para conquistar a Terra', '10 anos', '2001-03-30',2),
(DEFAULT, 'As Meninas Superpoderosa', 'Acidentalmente criadas em laboratório por um professor, três irmãs combatem os malfeitores em Townsville.', 'Livre anos', '1998-11-18',3),
(DEFAULT, 'Steven Universo', 'Steven, que é metade Gem e metade humano  e ajuda as Crystal Gems a protegerem o mundo.', 'Livre', '2013-05-21',3),
(DEFAULT, 'Hora de Aventura', 'Finn vive grandes aventuras na terra de Ooo na companhia de seu melhor amigo, Jake.', '10 anos', '2010-04-05',3),
(DEFAULT, 'Coragem o Cão Covarde', 'Coragem é um cachorro que vive em uma fazenda distante onde acontecem coisas sobrenaturais', 'Livre', '2002-11-22',3),
(DEFAULT, 'Hi Hi Puffy AmiYumi', 'Ami e Yumi são cantoras de rock que vivem aventuras incríveis.', 'Livre', '2004-11-19',3),
(DEFAULT, 'Ben 10', 'Aos 10 anos Ben descobre um relógio que permite que ele se transforme em alienígena.', '10 anos', '2007-10-30',3);


