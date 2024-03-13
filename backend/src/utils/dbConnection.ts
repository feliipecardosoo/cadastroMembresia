import { createConnection, Connection } from 'mysql';
import { dbConfig } from '../config/dbConfig';

let connection: Connection;

export function connectDB(): void {
  connection = createConnection(dbConfig);

  connection.connect((err) => {
    if (err) {
      console.error('Erro ao conectar ao banco de dados:', err);
      return;
    }
    console.log('Conexão bem-sucedida com o banco de dados MySQL');
  });
}

export function closeDB(): void {
  connection.end((err) => {
    if (err) {
      console.error('Erro ao fechar conexão com o banco de dados:', err);
      return;
    }
    console.log('Conexão com o banco de dados MySQL encerrada');
  });
}
