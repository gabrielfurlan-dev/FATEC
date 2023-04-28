CREATE TABLE Estado(
	idEstado INT NOT NULL PRIMARY KEY,
	nome VARCHAR(50) NOT NULL
);

CREATE TABLE Cidade(
	idCidade INT NOT NULL PRIMARY KEY,
	nome VARCHAR(50) NOT NULL,
	idEstado INT NOT NULL REFERENCES Estado(idEstado)
);

CREATE TABLE Aluno(
	idAluno INT NOT NULL PRIMARY KEY,
	nome VARCHAR(50) NOT NULL,
	idCidade INT not null REFERENCES cidade(idCidade)
);

CREATE TABLE Curso(
	idCurso INT NOT NULL PRIMARY KEY,
	nome VARCHAR(50) NOT NULL
);

CREATE TABLE CursoAluno(
		idCursoAluno INT NOT NULL PRIMARY KEY,
		idAluno INT NOT NULL REFERENCES aluno(idAluno),
		idCurso INT NOT NULL REFERENCES curso(idCurso)
);

COPY Aluno FROM 'C:\imports\Escola\aluno.txt'
COPY Cidade FROM 'C:\imports\Escola\cidade.txt'
COPY Estado FROM 'C:\imports\Escola\estado.txt'
COPY Curso FROM 'C:\imports\Escola\curso.txt'
COPY cursoaluno FROM 'C:\imports\Escola\cursoalu.txt'

--DELETE FROM ESTADO
--DELETE FROM Cidade
--DELETE FROM Aluno

INSERT INTO estado VALUES(3, 'CE')

SELECT * FROM Curso

SELECT a.idAluno, a.Nome, a.IdCidade, cu.nome
FROM Aluno a
INNER JOIN cidade c ON c.idCidade = a.IdCidade
INNER JOIN estado e ON c.idEstado = e.idEstado
INNER JOIN cursoaluno ca ON ca.idAluno = a.idAluno
LEFT JOIN curso cu ON cu.idCurso = ca.IdCurso

--EX 003
SELECT nome FROM cidade ORDER BY nome

--EX 004
SELECT a.nome, c.nome, e.nome 
FROM aluno a
INNER JOIN cidade c ON c.idcidade = a.idcidade
INNER JOIN estado e ON e.idestado = c.idestado
ORDER BY a.nome

--EX 005
SELECT a.idAluno, a.nome, c.idcurso, c.nome
FROM aluno a
INNER JOIN cursoaluno ac ON ac.idaluno = a.idaluno
INNER JOIN curso c ON c.idcurso = c.idcurso
ORDER BY a.idAluno

--EX 06
SELECT a.idAluno , a.nome, c.idcurso, c.nome
FROM aluno a
INNER JOIN cursoaluno ac ON ac.idaluno = a.idaluno
INNER JOIN curso c ON c.idcurso = ac.idcurso
WHERE a.idaluno = 1

--EX 07
Select A.nomealuno,C.nomecidade,E.nomeest,CS.nomecurso
From aluno A, Cidade C, estado E,cursoaluno CA, curso CS
where A.idcidade = C.idcidade
and C.idest = E.idest
and CA.idcurso = CS.idcurso
and A.idaluno = CA.idaluno
order by A.nomealuno asc

--EX 8
SELECT a.idaluno,a.nome,ca.idcurso,c.nome
FROM aluno a
LEFT OUTER JOIN cursoaluno ca ON a.idaluno=ca.idaluno
LEFT OUTER JOIN curso c ON c.idcurso = ca.idcurso
ORDER BY A.idaluno asc

--EX 9 
SELECT a.idaluno, a.nome, ca.idcurso, c.nome
FROM aluno a
RIGHT OUTER JOIN cursoaluno ca ON a.idaluno=ca.idaluno
RIGHT OUTER JOIN CURSO c ON c.idcurso = ca.idcurso
ORDER BY ca.idcurso asc
