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
(id int auto_increment primary key,
titulo varchar(50),
conteudo text,
dataPost datetime,
fkUser int,
constraint FK foreign key (fkUser) references Usuario(id)
);

create table Comentario
(id int auto_increment primary key,
conteudo text,
dtComentario datetime,
fkAutorComentario int,
fkPost int,
foreign key(fkAutorComentario) references Usuario(id),
foreign key (fkPost) references Post(id));

create table Recorde
(id int auto_increment primary key,
fkUsuario int,
pontos int,
dtRecorde date,
foreign key (fkUsuario) references Usuario(id)
);

create user 'kaikykohatsu'@'localhost' identified by '1234';
grant all privileges on memories.* to 'kaikykohatsu'@'localhost';