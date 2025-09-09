import { Link } from "react-router-dom";
import type Categoria from "../../../models/Categoria";

interface CardCategoriaProps {
	categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
	return (
		<div className="border-none flex flex-col rounded-2xl overflow-hidden justify-between hover:shadow-[0_0px_15px_rgba(0,0,0,0.5)] transition-all ease-in-out">
			<header className="text-white py-2 px-6 bg-(--primary) font-bold text-xl">{categoria.categoria_nome}</header>
			<main className="bg-(--secondary-light) flex flex-col p-4 gap-3 text-lg h-full justify-around">
				<p className="">
					<span className="font-bold"> Descrição: </span> {categoria.descricao}
				</p>
				<p>
					<span className="font-bold"> Precisa de Receita: </span> {categoria.precisaReceita ? "Sim" : "Não"}
				</p>
			</main>

			<div className="flex">
				<Link
					to={`/categorias/editar/${categoria.id}`}
					className="w-full text-white bg-(--secondary) font-bold hover:bg-(--secondary-ex-dark) flex items-center justify-center py-2 transition-all ease-in">
					<button> Editar </button>
				</Link>

				<Link
					to={`/categorias/deletar/${categoria.id}`}
					className="text-white bg-(--tertiary) font-bold hover:bg-(--tertiary-ex-dark) w-full flex items-center justify-center transition-all ease-in">
					<button> Deletar </button>
				</Link>
			</div>
		</div>
	);
}

export default CardCategoria;
