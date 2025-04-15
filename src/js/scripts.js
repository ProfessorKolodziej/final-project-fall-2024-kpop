// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)


/* const startBtn = document.querySelector(".home-btn");

function goToNext() {
	const thisSection = this.closest(".homepage");
	const nextSection = document.querySelector(".quiz-1");

	thisSection.classList.toggle("show");
	nextSection.classList.toggle("show");
}

startBtn.addEventListener("click", goToNext);*/

document.addEventListener("DOMContentLoaded", () => {
	const sections = [
		document.querySelector(".homepage"),
		document.querySelector(".quiz-1"),
		document.querySelector(".quiz-2"),
		document.querySelector(".quiz-3"),
		document.querySelector(".result-group"),
		document.querySelector(".quiz-4"),
		document.querySelector(".quiz-5"),
		document.querySelector(".result-bias"),
	];

	function showSection(sectionToShow) {
		sections.forEach(section => {
			section.classList.remove("show");
			section.style.display = "none";
		});
		sectionToShow.classList.add("show");
		sectionToShow.style.display = "flex";

		const homeButton = document.querySelector(".home-icon-btn");
		if (sectionToShow.classList.contains("homepage")) {
			homeButton.style.display = "none";
		} else {
			homeButton.style.display = "block";
		}
	}

	showSection(sections[0]);

	document.querySelector(".home-btn").addEventListener("click", () => {
		showSection(sections[1]);
	});

	const quizFlow = [
		[".quiz-1-btn", sections[2]],
		[".quiz-2-btn", sections[3]],
		[".quiz-3-btn", sections[4]],
		[".quiz-4-btn", sections[6]],
		[".quiz-5-btn", sections[7]],
	];

	quizFlow.forEach(([btnClass, nextSection]) => {
		document.querySelectorAll(btnClass).forEach(btn => {
			btn.addEventListener("click", () => {
				showSection(nextSection);
			});
		});
	});

	document.querySelector(".home-icon-btn").addEventListener("click", () => {
		const homepage = document.querySelector(".homepage");
		showSection(homepage);
	});

	document.querySelectorAll(".result-btn").forEach(btn => {
		if (btn.textContent.toLowerCase().includes("match your bias")) {
			btn.addEventListener("click", () => {
				showSection(sections[5]);
			});
		}
	});

	document.querySelectorAll(".result-btn").forEach(btn => {
		if (btn.textContent.toLowerCase().includes("match group again")) {
			btn.addEventListener("click", () => {
				showSection(sections[1]);
			});
		}
	});

	document.querySelectorAll(".result-btn").forEach(btn => {
		if (btn.textContent.toLowerCase().includes("match bias again")) {
			btn.addEventListener("click", () => {
				showSection(sections[5]);
			});
		}
	});
});