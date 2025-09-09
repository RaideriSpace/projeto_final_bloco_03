import { useState } from "react";
import ListaCategoria from "../components/categoria/listacategoria/ListaCategoria";

function Home() {

  const [limite, setLimite] = useState<number>(2);

  function handleLimite() {
    setLimite(limite + 3);
  }

  

	return (
		<>
			<div className="flex justify-center h-[55vh]">
				<div className="w-[40%] flex flex-col gap-4 items-center justify-center py-4 text-white bg-[url(../assets/woodplate.png)] bg-size-[100%] bg-no-repeat bg-center text-shadow-[1px_1px_2px_rgb(0_0_0_/_0.5)]">
					<h2 className="text-5xl font-bold text-(--tertiary-ex-dark)">CuraFarma!</h2>
					<p className="text-xl text-center text-(--primary-ex-dark)">
						Encontre as melhores poções, pomadas e <br /> misturas para a sua aventura
					</p>
					<div className="flex justify-around gap-4"></div>
				</div>
				<img src="https://i.imgur.com/InpCgWL.png"></img>
			</div>
      <ListaCategoria limite={limite}/>
      <button onClick={handleLimite} className="block m-auto p-2 bg-(--primary-ex-light) rounded-4xl w-[8rem] mb-4 font-medium text-white"> Ver Mais... </button>
		</>
	);
}

export default Home;
