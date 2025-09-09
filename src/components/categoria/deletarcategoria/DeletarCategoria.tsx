import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import { useEffect, useState } from "react";
import { buscar, deletar } from "../../../services/Service";

function DeletarCategoria() {
  const navigate = useNavigate();

	const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
	const [isLoading, setIsLoading] = useState<boolean>(false);

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
		try {
			await buscar(`/categorias/id/${id}`, setCategoria);
    } catch (error: any) {
      alert("Erro ao buscar categoria por ID!");
    }
  }

	useEffect(() => {
		if (id !== undefined) {
			buscarPorId(id);
		}
	}, [id]);

  async function deletarCategoria() {
		setIsLoading(true);

		try {
			await deletar(`/categorias/id/${id}`);
			alert("Categoria apagada com sucesso.");
		} catch (error: any) {
			alert("Erro ao deletar a categoria.");
		}

		setIsLoading(false);
		retornar();
	}

  function retornar() {
		navigate("/categorias");
	}

  return (
		<>
			<div className="container w-1/3 mx-auto">
				<h1 className="text-4xl text-center my-4"> Deletar tema </h1>
				<p className="text-center font-semibold mb-4"> Você tem certeza de que deseja apagar o tema a seguir? </p>
				<div className="border-none flex flex-col rounded-2xl overflow-hidden justify-between">
					<header className="py-2 px-6 bg-(--tertiary) font-bold text-2xl"> Tema </header>
					<p className="p-8 text-3xl bg-(--auxiliary2-ex-light) h-full"> {categoria.descricao} </p>
					<div className="flex">
						<button
							className="text-white bg-(--secondary) font-bold hover:bg-(--secondary-dark) w-full flex items-center justify-center transition-all ease-in"
							onClick={retornar}>
							Não
						</button>
						<button
							className="w-full text-white bg-(--tertiary) font-bold hover:bg-(--tertiary-dark) flex items-center justify-center py-2 transition-all ease-in"
							onClick={deletarCategoria}>
							{isLoading ? <img src="https://i.imgur.com/BJIL20V.gif" width={35}></img> : <span> Sim </span>}{" "}
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default DeletarCategoria