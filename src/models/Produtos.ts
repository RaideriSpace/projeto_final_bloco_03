import type Categoria from "./Categoria";

export default interface Produtos{
  id: number;
  nome: string;
  descricao: string;
  estoque: number;
  principioAtivo: string;
  unidadeMedida: string;
  codigoDeBarras: string;
  validadeDias: number;
  categoria: Categoria;
}