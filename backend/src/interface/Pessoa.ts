export interface Pessoa {
    id?: number;
    nome_completo: string;
    sexo: 'M' | 'F';
    dia_nascimento: Date;
    estado_civil: 'Solteiro' | 'Casado' | 'Divorciado' | 'Viúvo';
    data_casamento?: Date;
    id_conjuge?: number;
    email: string;
    telefone: string;
    id_endereco: number;
    ano_batismo?: number;
  }