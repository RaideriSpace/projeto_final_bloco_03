import type Produtos from "./Produtos";

export default interface Categoria{
  id: number;
  categoria_nome: string;
  descricao: string;
  precisaReceita: boolean;
  produtos: Produtos[] | null;
}