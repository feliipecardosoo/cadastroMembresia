CREATE TABLE Enderecos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_igreja INT NOT NULL,
    cep VARCHAR(10) NOT NULL,
    cidade VARCHAR(100) NOT NULL,
    bairro VARCHAR(100) NOT NULL,
    numero INT NOT NULL,
    rua VARCHAR(255) NOT NULL
);

CREATE TABLE Pessoas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_igreja INT NOT NULL,
    nome_completo VARCHAR(255) NOT NULL,
    sexo ENUM('M', 'F') NOT NULL,
    dia_nascimento DATE NOT NULL,
    estado_civil ENUM('Solteiro', 'Casado', 'Divorciado', 'Viúvo') NOT NULL,
    data_casamento DATE,
    id_conjuge INT,
    email VARCHAR(100) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    id_endereco INT NOT NULL,
    ano_batismo INT,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_conjuge) REFERENCES Pessoas(id),
    FOREIGN KEY (id_endereco) REFERENCES Enderecos(id),
    FOREIGN KEY (id_igreja) REFERENCES Igrejas(id)
);

CREATE TABLE Filhos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_pessoa INT NOT NULL,
    quantidade INT NOT NULL,
    FOREIGN KEY (id_pessoa) REFERENCES Pessoas(id)
);
