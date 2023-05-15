create database memories;
use memories;

create table usuario
(idUsuario int primary key auto_increment,
nome varchar(50),
email varchar(100),
senha varchar(50),
dtNascimento date
);

create table postagens
(idPost int primary key auto_increment,
conteudo text,
dtPostagem date,
fkUsuario int,
foreign key (fkUsuario) references usuario(idUsuario)
);

create table records
(idRecord int primary key auto_increment,
pontuacao int,
dtRecorde date,
fkUsuario int,
foreign key (fkUsuario) references usuario(idUsuario)
)

