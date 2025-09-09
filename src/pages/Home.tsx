function Home() {
	return (
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
	);
}

export default Home;
