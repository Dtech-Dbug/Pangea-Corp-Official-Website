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
			delay: 100,
		});
	}, []);

	window.addEventListener("scroll", () => {
		// fetching the section
		const sections = document.querySelectorAll("section");

		//fetching the navLists
		const navLists = document.querySelectorAll(".nav .nav-container li");

		//console.log(navLists);
		let current = "";

		sections.forEach((section) => {
			//console.log("section -->", section);
			const sectionTop = section.offsetTop;
			const sectionHeight = section.clientHeight;
			const scrolHeight = section.scrollHeight;

			if (
				window.pageYOffset >= sectionTop ||
				window.pageYOffset >= sectionTop - sectionHeight / 4
			) {
				current = section.getAttribute("id");
				console.log(
					"scroll Height ->",
					scrolHeight,
					"sectionTop-->",
					sectionTop,
					"section Height ->",
					sectionHeight,
					"PageY offset",
					window.pageYOffset,
					"current",
					current
				);
			}
		});

		navLists.forEach((li) => {
			li.classList.remove("active");
			if (li.classList.contains(current)) {
				li.classList.add("active");
			}
		});
	});

	const workWithUS = () => {
		return (
			<h2 className="work-wth-us-header" data-aos="fade-up">
				<p>Have a project in mind?Work with us.</p>
			</h2>
		);
	};

	return (
		<div className="App">
			<aside>
				<Nav />
			</aside>

			<section id="home-section" data-aos="fade-up" data-aos-duration="900">
				<Home />
			</section>

			<section id="about-section">
				<About />
			</section>

			<section id="service-section">
				<Service />
			</section>

			{workWithUS()}

			<section id="contact-section">
				<Contact />
			</section>
		</div>
	);
}

export default App;
