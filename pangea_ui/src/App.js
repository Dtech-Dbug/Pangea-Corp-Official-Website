import Home from "./Components/Home";
import About from "./Components/About";
import Nav from "./Components/Nav";

import Service from "./Components/Services/Service";
function App() {
	return (
		<div className="App">
			<aside>
				<Nav />
			</aside>
			<main>
				<Home />
				<About />
				<Service />
			</main>
		</div>
	);
}

export default App;
