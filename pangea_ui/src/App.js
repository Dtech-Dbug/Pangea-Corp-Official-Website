import { useEffect } from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Nav from "./Components/Nav";
import Service from "./Components/Services/Service";

//animation
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "./Components/Contact/Contact";

function App() {
	useEffect(() => {
		AOS.init({
			offset: 630,
			duration: 900,
		});
	}, []);

	window.addEventListener("scroll", () => {
		// fetching the section
		const sections = document.querySelectorAll("section");

		//fetching the navLists
		const navLists = document.querySelectorAll(".nav .nav-container li");

		console.log(navLists);
		let current = "";

		sections.forEach((section) => {
			//console.log("section -->", section);
			const sectionTop = section.offsetTop;
			const sectionHeight = section.clientHeight;

			if (window.pageYOffset >= sectionTop - sectionHeight / 4) {
				current = section.getAttribute("id");
			}
			//console.log("currrent", current);
		});

		navLists.forEach((li) => {
			li.classList.remove("active");
			if (li.classList.contains(current)) {
				li.classList.add("active");
			}
		});
	});

	return (
		<div className="App">
			<aside>
				<Nav />
			</aside>

			<section id="home">
				<Home />
			</section>

			<section id="about">
				<About />
			</section>

			<section id="service">
				<Service />
			</section>

			<section id="contact">
				<Contact />
			</section>
		</div>
	);
}

export default App;
