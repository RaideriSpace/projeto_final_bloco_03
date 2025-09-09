import { Link } from "react-router-dom";

function Navbar() {
  return (
		<>
			<div className="w-full flex justify-center py-4 bg-(--primary) text-white">
				<div className="container flex justify-between text-lg">
					<Link to="/">
						<h1 className="font-bold">CuraFarma</h1>
					</Link>
					<div className="flex gap-4">
						<Link to="/categorias"> Lista de Categorias </Link>
						<Link to="/categorias/cadastro"> Cadastrar Categorias </Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default Navbar