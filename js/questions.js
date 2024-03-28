const questions = document.querySelector(".questions__items");
const allQuestions = document.querySelectorAll(".questions__item");

allQuestions.forEach(el => {
	el.querySelector(".questions__answer").style.height = "0px";
})

questions.addEventListener("click", (e) => {
	let clicked = e.target.closest(".questions__item");
	
	if (!clicked) {
		return;
	}

	let accordeon = clicked.querySelector(".questions__answer");

	if (accordeon.style.height === "0px") {
		accordeon.style.height = `${accordeon.scrollHeight}px`;
		clicked.classList.add("open");
	} else {
		accordeon.style.height = `${ accordeon.scrollHeight }px`;
		window.getComputedStyle(accordeon, null).getPropertyValue("height");
		accordeon.style.height = "0";
		clicked.classList.remove("open");
	}

	accordeon.addEventListener("transitionend", () => {
		if (accordeon.style.height !== "0px") {
			accordeon.style.height = "auto"
		}
	});
})


// Это все для анимации height с 0 до auto