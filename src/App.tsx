import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<div className="min-h-[80vh] bg-(--secondary-ex-light)">
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
				</div>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
