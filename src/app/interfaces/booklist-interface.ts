import { Url } from 'url';

export interface BooklistInterface {
  id: number;
  titulo: string;
  img: Url;
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
