document.getElementById('sendMail').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const mailtoLink = `mailto:raghavagarwal3618@gmail.com?subject=Contact from ${name}&body=Name: ${name}%0AEmail: ${email}%0A%0A${message}`;
    window.location.href = mailtoLink;
});

// MENU SHOW
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
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
const typingStyle = document.createElement('style');
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
window.addEventListener('load', typeEffect);

// Theme toggle functionality
function setupThemeToggle() {
	const body = document.body;
	const nav = document.querySelector(".nav");

	// Add theme toggle button to nav
	const themeToggle = document.createElement("div");
	themeToggle.className = "theme-toggle";
	themeToggle.innerHTML = '<i class="bx bx-moon"></i>';
	nav.appendChild(themeToggle);

	// Toggle theme
	themeToggle.addEventListener("click", () => {
		body.classList.toggle("dark-theme");
		const icon = themeToggle.querySelector("i");
		if (body.classList.contains("dark-theme")) {
			icon.classList.remove("bx-moon");
			icon.classList.add("bx-sun");
			// Update particles color for dark theme
			pJS.particles.color.value = "#6D9EEB";
			pJS.particles.line_linked.color = "#6D9EEB";
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
				value: ["#4070F4", "#6D9EEB"],
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

// Initialize everything
window.addEventListener("load", () => {
	typeEffect();
	setupThemeToggle();
	initParticles();
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
		--first-color: #6D9EEB;
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
		color: #6D9EEB;
	}

	.dark-theme .home__title-color {
		color: #6D9EEB;
	}

	.dark-theme .button {
		background-color: #6D9EEB;
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
		background-color: #6D9EEB;
	}

	.dark-theme .work__card {
		background-color: #242526;
		box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.3);
	}

	.dark-theme .work__btn {
		background-color: #6D9EEB;
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
