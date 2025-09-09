import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../services/Service";

function FormCategoria() {
	const navigate = useNavigate();

	const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

	const [isLoading, setIsLoading] = useState<boolean>(false);

	const { id } = useParams<{ id: string }>();

	async function buscarPorId(id: string) {
		try {
			await buscar(`/categorias/id/${id}`, setCategoria);
		} catch (error: any) {
			alert("Erro ao buscar a categoria pelo ID!");
		}
	}

	useEffect(() => {
		if (id !== undefined) {
			buscarPorId(id);
		}
	}, [id]);

	function atualizarEstado(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
		setCategoria({
			...categoria,
			[e.target.name]: e.target.value,
		});
	}

	function retornar() {
		navigate("/categorias");
	}

	async function gerarNovaCategoria(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setIsLoading(true);

		if (id !== undefined) {
			try {
				await atualizar(`/categorias`, categoria, setCategoria);
				alert("Categoria atualizada com sucesso!");
			} catch (error: any) {
				alert("Erro ao atualizar categoria!");
			}
		} else {
			try {
				await cadastrar(`/categorias`, categoria, setCategoria);
				alert("Categoria cadastrada com sucesso!");
			} catch (erro: any) {
				alert("Erro ao cadastrar a categoria!");
			}
		}

		setIsLoading(false);
		retornar();
	}

	return (
		<div className="container flex flex-col items-center justify-center mx-auto">
			<h1 className="text-(--primary-ex-dark) font-bold text-4xl text-center my-8">{id === undefined ? "Cadastrar Tema" : "Editar Tema"}</h1>

			<form className="text-(--primary-ex-dark) w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
				<div className="flex flex-col gap-2">
					<label htmlFor="categoria_nome" className="font-bold">
						Nome da Categoria
					</label>
					<input
						type="text"
						placeholder="Descreva aqui seu tema"
						name="categoria_nome"
						required
						className="border-2 border-(--tertiary-dark) rounded-xl p-2 text-(--primary-ex-dark) invalid:border-(--secondary) invalid:text-(--secondary) focus:border-(--primary-ex-light) focus:outline focus:outline-(--primary-ex-light) transition-all ease-in placeholder-(--primary-ex-light)"
						value={categoria.categoria_nome}
						onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
					/>

					<label htmlFor="descricao" className="font-bold">
						Descrição da categoria
					</label>
					<textarea
						placeholder="Descreva aqui seu tema"
						name="descricao"
						required
						className="border-2 border-(--tertiary-dark) rounded-xl p-2 text-(--primary-ex-dark) invalid:border-(--secondary) invalid:text-(--secondary) focus:border-(--primary-ex-light) focus:outline focus:outline-(--primary-ex-light) transition-all ease-in placeholder-(--primary-ex-light)"
						value={categoria.descricao}
						onChange={(e: ChangeEvent<HTMLTextAreaElement>) => atualizarEstado(e)}
					/>

					<label className="font-bold">Precisa de Receita?</label>
					<div>
						<input
							type="radio"
							name="precisaReceita"
							required
							className="border-2 border-(--tertiary-dark) rounded-xl p-2 text-(--primary-ex-dark) checked:text-amber-600"
							value="true"
							checked={categoria.precisaReceita === true}
							onChange={() => setCategoria({ ...categoria, precisaReceita: true })}
						/>
						<label className=" text-(--primary-ex-dark)"> Sim</label>
					</div>
					<div>
						<input
							type="radio"
							name="precisaReceita"
							required
							className="border-2 border-(--tertiary-dark) rounded-xl p-2 text-(--primary-ex-dark)"
							value="false"
							checked={categoria.precisaReceita === false}
							onChange={() => setCategoria({ ...categoria, precisaReceita: false })}
						/>
						<label className="text-(--primary-ex-dark)"> Não</label>
					</div>
				</div>
				<button
					className="rounded-xl text-white bg-(--tertiary) hover:bg-(--tertiary-dark) hover: w-1/2 py-2 flex justify-center transition-all ease-in font-bold mx-auto"
					type="submit">
					{isLoading ? <img src="https://i.imgur.com/BJIL20V.gif" width={35}></img> : <span> {id === undefined ? "Cadastrar" : "Atualizar"} </span>}
				</button>
			</form>
		</div>
	);
}

export default FormCategoria;
