const optimizationTrigger = document.querySelector(".cover__info");
const optimizationSection = document.querySelector(".optimization__body");

const coverTrigger = document.getElementById("scroll_to_cover");
const coverSection = document.querySelector(".cover");

const serviceTrigger = document.getElementById("scroll_to_service");
const serviceSection = document.querySelector(".service__body");

const tariffTrigger = document.getElementById("scroll_to_tariff");
const tariffSection = document.querySelector(".tariff__body");

const teamTrigger = document.getElementById("scroll_to_team");
const teamSection = document.querySelector(".team__body");

const documentsTrigger = document.getElementById("scroll_to_documents");
const documentsSection = document.querySelector(".documents__body");

const questionsTrigger = document.getElementById("scroll_to_questions");
const questionsSection = document.querySelector(".questions__body");

const footerTrigger = document.getElementById("scroll_to_footer");
const footerSection = document.querySelector(".footer");

const nav = document.querySelector(".header__nav");

function smoothScroll(trigger, element) {
	trigger.addEventListener("click", function (e) {
		element.scrollIntoView();
	});
};


smoothScroll(optimizationTrigger, optimizationSection);
smoothScroll(coverTrigger, coverSection);
smoothScroll(serviceTrigger, serviceSection);
smoothScroll(tariffTrigger, tariffSection);
smoothScroll(teamTrigger, teamSection);
smoothScroll(documentsTrigger, documentsSection);
smoothScroll(questionsTrigger, questionsSection);
smoothScroll(footerTrigger, footerSection);

nav.addEventListener("click", function (e) {
	let clickedLink = e.target.closest(".header__link");
	if (clickedLink) {
		header.classList.remove("menu-open");
		body.classList.remove("lock");
	}
});