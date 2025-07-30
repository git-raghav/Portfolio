document.getElementById("sendMail").addEventListener("click", function () {
	const name = document.getElementById("name").value;
	const email = document.getElementById("email").value;
	const message = document.getElementById("message").value;

	const mailtoLink = `mailto:raghavagarwal3618@gmail.com?subject=Contact from ${name}&body=Name: ${name}%0AEmail: ${email}%0A%0A${message}`;
	window.location.href = mailtoLink;
});

// MENU SHOW
const showMenu = (toggleId, navId) => {
	const toggle = document.getElementById(toggleId),
		nav = document.getElementById(navId);

	if (toggle && nav) {
		toggle.addEventListener("click", () => {
			nav.classList.toggle("show");
		});
	}
};
showMenu("nav-toggle", "nav-menu");

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
	const navMenu = document.getElementById("nav-menu");
	// When we click on each nav__link, we remove the show-menu class
	navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
	const scrollDown = window.scrollY;

	sections.forEach((current) => {
		const sectionHeight = current.offsetHeight,
			sectionTop = current.offsetTop - 58,
			sectionId = current.getAttribute("id"),
			sectionsClass = document.querySelector(".nav__menu a[href*=" + sectionId + "]");

		if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
			sectionsClass.classList.add("active-link");
		} else {
			sectionsClass.classList.remove("active-link");
		}
	});
};
window.addEventListener("scroll", scrollActive);

// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
	origin: "top",
	distance: "60px",
	duration: 1500,
	delay: 200,
	reset: true,
});

// Home and About sections
sr.reveal(".home__data, .about__img", {});
sr.reveal(".home__img, .about__subtitle, .about__text", { delay: 400 });
sr.reveal(".home__social-icon", { interval: 200 });

// Skills section
sr.reveal(".skills__subtitle, .skills__text, .skills__data", {
	origin: "top",
	distance: "60px",
	duration: 1300,
});

//work section
sr.reveal(".work__card", {
	interval: 200,
	distance: "20px",
	origin: "bottom",
});

// Contact section
sr.reveal(".contact__input", { interval: 200 });

// Add a typing effect to your name in the header
function typeEffect() {
	const text = "Raghav Agarwal";
	const nameElement = document.querySelector(".nav__logo");
	nameElement.textContent = "";

	let i = 0;
	const typing = setInterval(() => {
		if (i < text.length) {
			nameElement.textContent = text.substring(0, i + 1);
			i++;
		} else {
			clearInterval(typing);
			setTimeout(() => {
				nameElement.style.borderRight = "none";
			}, 1000);
		}
	}, 100);
}

// Add typing effect CSS
const typingStyle = document.createElement("style");
typingStyle.textContent = `
	.nav__logo {
		border-right: 2px solid var(--first-color);
		animation: blink 0.7s infinite;
		white-space: nowrap;
		overflow: hidden;
	}

	@keyframes blink {
		0%, 100% { border-color: transparent }
		50% { border-color: var(--first-color) }
	}
`;
document.head.appendChild(typingStyle);

// Initialize typing effect when page loads
window.addEventListener("load", typeEffect);

// Theme toggle functionality
function setupThemeToggle() {
	const body = document.body;
	// Set light theme as default (remove dark-theme by default)
	// body.classList.add("dark-theme");

	// Create theme toggle button
	const themeToggle = document.createElement("div");
	themeToggle.className = "theme-toggle";
	themeToggle.innerHTML = '<i class="bx bx-sun"></i>';
	document.body.appendChild(themeToggle);

	// Toggle theme
	themeToggle.addEventListener("click", () => {
		body.classList.toggle("dark-theme");
		const icon = themeToggle.querySelector("i");
		if (body.classList.contains("dark-theme")) {
			icon.classList.remove("bx-moon");
			icon.classList.add("bx-sun");
			// Update particles color for dark theme
			pJS.particles.color.value = "#3e6ff4";
			pJS.particles.line_linked.color = "#3e6ff4";
			pJS.fn.particlesRefresh();
		} else {
			icon.classList.remove("bx-sun");
			icon.classList.add("bx-moon");
			// Update particles color for light theme
			pJS.particles.color.value = "#4070F4";
			pJS.particles.line_linked.color = "#4070F4";
			pJS.fn.particlesRefresh();
		}
	});
}
// Initialize Particles.js
function initParticles() {
	particlesJS("particles-js", {
		particles: {
			number: {
				value: 80,
				density: {
					enable: true,
					value_area: 800,
				},
			},
			color: {
				value: ["#4070F4", "#3e6ff4"],
			},
			shape: {
				type: "circle",
			},
			opacity: {
				value: 0.2,
				random: false,
				anim: {
					enable: false,
				},
			},
			size: {
				value: 3,
				random: true,
			},
			line_linked: {
				enable: true,
				distance: 150,
				color: "#4070F4",
				opacity: 0.2,
				width: 1,
			},
			move: {
				enable: true,
				speed: 1,
				direction: "none",
				random: true,
				straight: false,
				out_mode: "out",
				bounce: false,
			},
		},
		interactivity: {
			detect_on: "canvas",
			events: {
				onhover: {
					enable: true,
					mode: "grab",
				},
				onclick: {
					enable: true,
					mode: "push",
				},
				resize: true,
			},
			modes: {
				grab: {
					distance: 140,
					line_linked: {
						opacity: 0.5,
					},
				},
				push: {
					particles_nb: 3,
				},
			},
		},
		retina_detect: true,
	});
}

// Parallax Effect
function initParallax() {
	const parallaxSections = document.querySelectorAll(".parallax-section");

	window.addEventListener("scroll", () => {
		parallaxSections.forEach((section) => {
			const speed = section.dataset.speed || 0.5;
			const yPos = -(window.pageYOffset * speed);
			section.querySelector(".parallax-bg").style.transform = `translateY(${yPos}px)`;
		});
	});
}

// Enhanced Scroll Reveal
function enhancedScrollReveal() {
	const sections = document.querySelectorAll(".section");
	const skillsData = document.querySelectorAll(".skills__data");

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("visible");

					// Animate skills data with delay
					if (entry.target.id === "skills") {
						skillsData.forEach((skill, index) => {
							setTimeout(() => {
								skill.classList.add("visible");
							}, index * 100);
						});
					}
				}
			});
		},
		{
			threshold: 0.1,
		}
	);

	sections.forEach((section) => observer.observe(section));
}

// 3D Card Effect with increased sensitivity
function init3DCards() {
	const cards = document.querySelectorAll(".work__card");

	cards.forEach((card) => {
		card.addEventListener("mousemove", (e) => {
			const rect = card.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;

			const centerX = rect.width / 2;
			const centerY = rect.height / 2;

			const rotateX = (y - centerY) / 10; // Increased sensitivity
			const rotateY = (centerX - x) / 10; // Increased sensitivity

			card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
		});

		card.addEventListener("mouseleave", () => {
			card.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
		});
	});
}

// Magnetic Effect for Buttons (excluding work section)
function initMagneticEffect() {
	const buttons = document.querySelectorAll(".button, .contact__button, .nav__link");

	buttons.forEach((button) => {
		// Skip buttons in work section
		if (button.closest(".work__card")) return;

		button.addEventListener("mousemove", (e) => {
			const rect = button.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;

			const centerX = rect.width / 2;
			const centerY = rect.height / 2;

			const deltaX = (x - centerX) / centerX;
			const deltaY = (y - centerY) / centerY;

			button.style.transform = `translate(${deltaX * 20}px, ${deltaY * 20}px)`;
		});

		button.addEventListener("mouseleave", () => {
			button.style.transform = "translate(0, 0)";
		});
	});
}

// Animated Character with Following Eyes
function initAnimatedCharacter() {
	const canvas = document.getElementById("aboutCharacter");
	const ctx = canvas.getContext("2d");
	let mouseX = window.innerWidth / 2;
	let mouseY = window.innerHeight / 2;

	// Character properties
	const character = {
		x: canvas.width / 2,
		y: canvas.height / 2,
		width: 200,
		height: 180,
		eyeSize: 20,
		eyeOffset: 35,
		color: "#4070F4",
	};

	// Track mouse movement globally
	document.addEventListener("mousemove", (e) => {
		mouseX = e.clientX;
		mouseY = e.clientY;
	});

	// Draw character
	function drawCharacter() {
		// Clear canvas
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		// Draw the blob shape
		ctx.beginPath();
		const scale = 0.4; // Scale factor for the SVG path

		// Starting point
		ctx.moveTo(character.x - character.width / 2, character.y);

		// Recreate the SVG path but scaled down
		ctx.bezierCurveTo(
			character.x - character.width * 0.4,
			character.y - character.height * 0.4,
			character.x - character.width * 0.1,
			character.y - character.height * 0.45,
			character.x + character.width * 0.2,
			character.y - character.height * 0.4
		);

		ctx.bezierCurveTo(
			character.x + character.width * 0.4,
			character.y - character.height * 0.3,
			character.x + character.width * 0.5,
			character.y - character.height * 0.1,
			character.x + character.width * 0.5,
			character.y + character.height * 0.1
		);

		ctx.bezierCurveTo(
			character.x + character.width * 0.5,
			character.y + character.height * 0.3,
			character.x + character.width * 0.3,
			character.y + character.height * 0.4,
			character.x,
			character.y + character.height * 0.4
		);

		ctx.bezierCurveTo(
			character.x - character.width * 0.3,
			character.y + character.height * 0.4,
			character.x - character.width * 0.5,
			character.y + character.height * 0.3,
			character.x - character.width / 2,
			character.y
		);

		// Fill the blob
		ctx.fillStyle = character.color;
		ctx.fill();

		// Calculate eye positions
		const leftEyeX = character.x - character.eyeOffset;
		const rightEyeX = character.x + character.eyeOffset;
		const eyeY = character.y - character.height * 0.05;

		// Draw eyes (white part)
		ctx.beginPath();
		ctx.arc(leftEyeX, eyeY, character.eyeSize, 0, Math.PI * 2);
		ctx.fillStyle = "#fff";
		ctx.fill();

		ctx.beginPath();
		ctx.arc(rightEyeX, eyeY, character.eyeSize, 0, Math.PI * 2);
		ctx.fill();

		// Calculate pupil positions with constraints
		const maxPupilOffset = 5;

		// Get canvas position for accurate mouse tracking
		const rect = canvas.getBoundingClientRect();
		const canvasX = mouseX - rect.left;
		const canvasY = mouseY - rect.top;

		// Calculate pupil positions with constraints
		function calculatePupilPosition(eyeX, eyeY) {
			const dx = canvasX - eyeX;
			const dy = canvasY - eyeY;
			const angle = Math.atan2(dy, dx);
			const distance = Math.min(maxPupilOffset, Math.sqrt(dx * dx + dy * dy) / 10);

			return {
				x: eyeX + Math.cos(angle) * distance,
				y: eyeY + Math.sin(angle) * distance,
			};
		}

		const leftPupil = calculatePupilPosition(leftEyeX, eyeY);
		const rightPupil = calculatePupilPosition(rightEyeX, eyeY);

		// Draw pupils
		const pupilSize = 12;

		ctx.beginPath();
		ctx.arc(leftPupil.x, leftPupil.y, pupilSize, 0, Math.PI * 2);
		ctx.fillStyle = "#000";
		ctx.fill();

		ctx.beginPath();
		ctx.arc(rightPupil.x, rightPupil.y, pupilSize, 0, Math.PI * 2);
		ctx.fill();

		// Draw smile
		ctx.beginPath();
		ctx.arc(character.x, character.y + character.height * 0.1, 30, 0, Math.PI);
		ctx.strokeStyle = "#fff";
		ctx.lineWidth = 3;
		ctx.stroke();

		requestAnimationFrame(drawCharacter);
	}

	// Start animation
	drawCharacter();
}

/*==================== EYE MOVEMENT ====================*/
function initEyeMovement() {
	const leftPupil = document.getElementById("leftPupil");
	const rightPupil = document.getElementById("rightPupil");
	const maxMovement = 10; // Maximum pixel movement for pupils

	document.addEventListener("mousemove", (e) => {
		const mouseX = e.clientX;
		const mouseY = e.clientY;

		// Get the position of each eye
		const leftEyeRect = leftPupil.getBoundingClientRect();
		const rightEyeRect = rightPupil.getBoundingClientRect();

		// Calculate the center of each eye
		const leftEyeX = leftEyeRect.left + leftEyeRect.width / 2;
		const leftEyeY = leftEyeRect.top + leftEyeRect.height / 2;
		const rightEyeX = rightEyeRect.left + rightEyeRect.width / 2;
		const rightEyeY = rightEyeRect.top + rightEyeRect.height / 2;

		// Calculate angle between mouse and eyes
		const leftAngle = Math.atan2(mouseY - leftEyeY, mouseX - leftEyeX);
		const rightAngle = Math.atan2(mouseY - rightEyeY, mouseX - rightEyeX);

		// Calculate new positions with limited movement
		const leftPupilX = Math.cos(leftAngle) * maxMovement;
		const leftPupilY = Math.sin(leftAngle) * maxMovement;
		const rightPupilX = Math.cos(rightAngle) * maxMovement;
		const rightPupilY = Math.sin(rightAngle) * maxMovement;

		// Apply the transforms
		leftPupil.style.transform = `translate(${leftPupilX}px, ${leftPupilY}px)`;
		rightPupil.style.transform = `translate(${rightPupilX}px, ${rightPupilY}px)`;
	});
}

/*==================== WHEN LOAD ====================*/
window.addEventListener("load", () => {
	initEyeMovement();
	typeEffect();
	setupThemeToggle();
	initParticles();
	initParallax();
	enhancedScrollReveal();
	init3DCards();
	initMagneticEffect();
	initAnimatedCharacter();
});

// Add required styles
const styles = document.createElement("style");
styles.textContent = `
	.theme-toggle {
		cursor: pointer;
		font-size: 1.5rem;
		color: var(--second-color);
		transition: transform 0.3s ease;
	}

	.theme-toggle:hover {
		transform: rotate(360deg);
	}

	.dark-theme {
		--first-color: #3e6ff4;
		--second-color: #E4E6EB;
		background-color: #18191A;
		color: #E4E6EB;
	}

	.dark-theme .l-header {
		background-color: #242526;
		box-shadow: 0 1px 4px rgba(0,0,0,0.3);
	}

	.dark-theme .nav {
		background-color: #242526;
	}

	.dark-theme .nav__logo,
	.dark-theme .nav__link,
	.dark-theme .nav__toggle {
		color: #E4E6EB;
	}

	.dark-theme .section-title {
		color: #3e6ff4;
	}

	.dark-theme .home__title-color {
		color: #3e6ff4;
	}

	.dark-theme .button {
		background-color: #3e6ff4;
	}

	.dark-theme .about__subtitle,
	.dark-theme .skills__subtitle,
	.dark-theme .work__title {
		color: #E4E6EB;
	}

	.dark-theme .about__text,
	.dark-theme .skills__text,
	.dark-theme .work__description {
		color: #B0B3B8;
	}

	.dark-theme .skills__data {
		background-color: #242526;
		box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.3);
	}

	.dark-theme .skills__names {
		color: #E4E6EB;
	}

	.dark-theme .skills__bar {
		background-color: #3e6ff4;
	}

	.dark-theme .work__card {
		background-color: #242526;
		box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.3);
	}

	.dark-theme .work__btn {
		background-color: #3e6ff4;
		color: #E4E6EB;
	}

	.dark-theme .contact__input {
		background-color: #3A3B3C;
		color: #E4E6EB;
		border-color: #3A3B3C;
	}

	.dark-theme .footer {
		background-color: #242526;
	}

	.dark-theme .footer__social {
		color: #E4E6EB;
	}

	.dark-theme .footer__copy {
		color: #B0B3B8;
	}

	#particles-js {
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: -1;
		pointer-events: none;
	}
`;
document.head.appendChild(styles);
