import { useEffect, Suspense, lazy } from "react";
import Nav from "./Components/Nav";

//animation
import AOS from "aos";
import "aos/dist/aos.css";

// Lazy load components
const Home = lazy(() => import("./Components/Home"));
const About = lazy(() => import("./Components/About"));
const Service = lazy(() => import("./Components/Services/Service"));
const Contact = lazy(() => import("./Components/Contact/Contact"));

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

		// fetching the navLists
		const navLists = document.querySelectorAll(".nav .nav-container li");

		let current = "";

		sections.forEach((section) => {
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
				<p>Have a project in mind? </p>
				<br />
				<p style={{ textDecoration: "underline" }}>Work with us.</p>
			</h2>
		);
	};

	return (
		<div className="App">
			<aside>
				<Nav />
			</aside>

			<Suspense fallback={<div>Loading...</div>}>
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
			</Suspense>
		</div>
	);
}

export default App;
