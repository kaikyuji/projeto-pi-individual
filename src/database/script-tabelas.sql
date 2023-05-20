create database memories;
use memories;

create table Usuario
(id int primary key auto_increment,
username varchar(50) unique,
senha varchar(50),
email varchar(100) unique,
nascimento date,
bio text
);

create table Post
(id int,
titulo varchar(50),
conteudo text,
dataPost datetime,
fkUser int,
constraint PK primary key (id, fkUser),
constraint FK foreign key (fkUser) references Usuario(id)
);


create table Recorde
(id int primary key auto_increment,
pontuacao int,
dtRecorde date,
fkUsuario int,
foreign key (fkUsuario) references usuario(idUsuario)
)


