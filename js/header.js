const header = document.querySelector(".header");
const burger = document.querySelector(".burger");
const body = document.querySelector("body");
const html = document.querySelector("html");
const close = document.querySelector(".header__close");


if (window.scrollY > 66) {
	header.classList.add("fixed");
} else {
	header.classList.remove("fixed");
}

document.addEventListener("scroll", () => {
	if (window.scrollY > 66) {
		header.classList.add("fixed");
	} else if (window.scrollY === 0) {
		header.classList.remove("fixed");
	}
});

burger.addEventListener("click", () => {
	header.classList.toggle("menu-open");
	body.classList.toggle("lock");
})

close.addEventListener("click", () => {
	header.classList.remove("menu-open");
	body.classList.remove("lock");
})