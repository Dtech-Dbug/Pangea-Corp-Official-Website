import { useEffect } from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Nav from "./Components/Nav";
import Service from "./Components/Services/Service";

//animation
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "./Components/Contact/Contact";
import { Route } from "react-router-dom";

function App() {
	useEffect(() => {
		AOS.init({
			offset: 350,
			duration: 900,
		});
	}, []);

	return (
		<div className="App">
			<aside>
				<Nav />
			</aside>
			<main>
				<Home />
				<About />
				<Service />
				<Contact />
			</main>
		</div>
	);
}

export default App;
