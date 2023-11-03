create database banqueejb ;
create table cin(
    idcin int primary key ,
    idpersonne int unique,
    cin_matricule varchar(55) unique ,
    getCin date
);
create table banquemoney(
    idbanquemoney int primary key ,
    idcin int references cin (idcin) ,
    monnaie float 
);
insert into banquemoney values(1 , 1 , 100000) , (2,2,200000);
create table transfer(
    idtransfer int primary key auto_increment,
    idcinSend int references cin (idcin) ,
    idcinReceive int references cin(idcin),
    moneys float ,
    devise varchar(55) ,
    datetransfer date
);
create table historique(
    idhistorique int primary key auto_increment ,
    idcin int references cin (idcin) ,
    moneys float ,
    datechance date
);