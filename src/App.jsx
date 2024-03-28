import Navbar from "./Navbar";
import Home from "./Home";
function App() {
	return (
		<>
			<div className="bg-[url('/bg.jpeg')] bg-cover  bg-repeat h-screen">
				<Navbar />
				<div className="content">
					<Home />
				</div>
			</div>
		</>
	);
}

export default App;
