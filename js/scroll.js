const coverInfo = document.querySelector(".cover__info");
const optimizationSection = document.querySelector(".optimization");

function smoothScroll(trigger, element) {
	trigger.addEventListener("click", function (e) {
		element.scrollIntoView({
			behavior: 'smooth'
		});
	});
}


smoothScroll(coverInfo, optimizationSection)