import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

function App() {
	return (
		<>
				<Navbar />
				<div className="min-h-[80vh] bg-(--secondary-ex-light)">
						<Home />
				</div>
				<Footer />
		</>
	);
}

export default App;
