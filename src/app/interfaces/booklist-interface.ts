export interface BooklistInterface {
  id: number;
  titulo: string;
  isbn: string;
  autor: string;
  editora: string;
  ano: Date;
  idioma: string;
  peso: string;
  dimensoes: {
    comprimento: number;
    largura: number;
    altura: number;
  };
}
