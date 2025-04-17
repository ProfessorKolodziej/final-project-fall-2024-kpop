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

// Defining all the K-pop group data as an object
const kpopGroups = {
	// Boy Groups
	"NCT 127": {
		name: "NCT 127",
		groupType: "Boy",
		genre: "Experimental & Edgy",
		aesthetic: "Futuristic & Edgy",
		link: "https://en.wikipedia.org/wiki/NCT_127",
		image: "images/result-nct127.jpg",
		members: [
			{ name: "Taeyong", role: "Visual", image: "images/taeyong.jpg" },
			{ name: "Yuta", role: "Dancer", image: "images/yuta.jpg" },
			{ name: "Doyoung", role: "Vocalist", image: "images/doyoung.jpg" },
			{ name: "Mark", role: "Rapper", image: "images/result-marklee" },
			{ name: "Haechan", role: "Vocalist", image: "images/haechan.jpg" }
		]
	},
	"Boynextdoor": {
		name: "Boynextdoor",
		groupType: "Boy",
		genre: "Upbeat & Happy",
		aesthetic: "Fresh & Youthful",
		link: "https://en.wikipedia.org/wiki/Boynextdoor",
		image: "images/boynextdoor.webp",
		members: [
			{ name: "Taesan", role: "Visual", image: "images/taesan.jpg" },
			{ name: "Leehan", role: "Visual", image: "images/leehan.jpg" },
			{ name: "Jaehyun", role: "Rapper", image: "images/jaehyun.jpg" },
			{ name: "Woonhak", role: "Vocalist", image: "images/woonhak.jpg" },
			{ name: "Riwoo", role: "Dancer", image: "images/riwoo.jpg" }
		]
	},
	"Riize": {
		name: "Riize",
		groupType: "Boy",
		genre: "Chill & Moody",
		aesthetic: "Vintage / Retro",
		link: "https://en.wikipedia.org/wiki/Riize",
		image: "images/result-riize.jpg",
		members: [
			{ name: "Shotaro", role: "Dancer", image: "images/Shotaro.jpg" },
			{ name: "Wonbin", role: "Visual", image: "images/Wonbin.jpg" },
			{ name: "Sohee", role: "Vocalist", image: "images/Sohee.jpg" },
			{ name: "Sungchan", role: "Rapper", image: "images/sungchan.jpg" }
		]
	},
	"Stray Kids": {
		name: "Stray Kids",
		groupType: "Boy",
		genre: "Rap & Hip-pop",
		aesthetic: "Dark & Mysterious",
		link: "https://en.wikipedia.org/wiki/Stray_Kids",
		image: "images/Straykids.webp",
		members: [
			{ name: "Seungmin", role: "Vocalist", image: "images/bangchan.jpg" },
			{ name: "Lee Know", role: "Dancer", image: "images/leenow.jpg" },
			{ name: "Changbin", role: "Rapper", image: "images/changbin.jpg" },
			{ name: "Hyunjin", role: "Visual", image: "images/hyunjin.jpg" }
		]
	},

	// Girl Groups
	"Le sserafim": {
		name: "Le sserafim",
		groupType: "Girl",
		genre: "Upbeat & Happy",
		aesthetic: "Vintage / Retro",
		link: "https://en.wikipedia.org/wiki/Le_Sserafim",
		image: "images/result-lesserafim.jpg",
		members: [
			{ name: "Sakura", role: "Visual", image: "images/sakura.jpg" },
			{ name: "Kazuha", role: "Rapper", image: "images/kazuha.jpg" },
			{ name: "Chaewon", role: "Vocalist", image: "images/chaewon.jpg" },
			{ name: "Eunchae", role: "Dancer", image: "images/eunchae.jpg" }
		]
	},
	"njz": {
		name: "njz",
		groupType: "Girl",
		genre: "Chill & Moody",
		aesthetic: "Fresh & Youthful",
		link: "https://en.wikipedia.org/wiki/NewJeans",
		image: "images/NewJeans.webp",
		members: [
			{ name: "Minji", role: "Rapper", image: "images/minji.jpg" },
			{ name: "Hanni", role: "Dancer", image: "images/hanni.jpg" },
			{ name: "Danielle", role: "Visual", image: "images/danielle.jpg" },
			{ name: "Hyein", role: "Vocalist", image: "images/hyein.jpg" }
		]
	},
	"aespa": {
		name: "aespa",
		groupType: "Girl",
		genre: "Experimental & Edgy",
		aesthetic: "Futuristic & Edgy",
		link: "https://en.wikipedia.org/wiki/Aespa",
		image: "images/aespa.jpg",
		members: [
			{ name: "Karina", role: "Dancer", image: "images/karina.jpg" },
			{ name: "Winter", role: "Visual", image: "images/winter.jpg" },
			{ name: "Giselle", role: "Rapper", image: "images/giselle.jpg" },
			{ name: "Ningning", role: "Vocalist", image: "images/ningning.jpg" }
		]
	},
	"babymonster": {
		name: "Babymonster",
		groupType: "Girl",
		genre: "Rap & Hip-pop",
		aesthetic: "Dark & Mysterious",
		link: "https://en.wikipedia.org/wiki/Babymonster",
		image: "images/babymonster.webp",
		members: [
			{ name: "Ruka", role: "Rapper", image: "images/ruka.jpg" },
			{ name: "Ahyeon", role: "Vocalist", image: "images/ahyeon.jpg" },
			{ name: "Chiquita", role: "Dancer", image: "images/chiquita.jpg" },
			{ name: "Pharita", role: "Visual", image: "images/pharita.jpg" }
		]
	}
};

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

document.addEventListener("DOMContentLoaded", () => {
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

// store user input
let userResults = {
	gender: "",
	genre: "",
	aesthetic: "",
	role: "",
	animalLook: ""
};

// collect user input
document.querySelectorAll(".quiz-1-btn").forEach(button => {
	button.addEventListener("click", () => {
		userResults.gender = button.textContent;  // Store the selected answer

		// Move to the next section
		showSection(sections[2]);
	});
});

document.querySelectorAll(".quiz-2-btn").forEach(button => {
	button.addEventListener("click", () => {
		userResults.genre = button.textContent;

		showSection(sections[3]);
	});
});

document.querySelectorAll(".quiz-3-btn").forEach(button => {
	button.addEventListener("click", () => {
		userResults.aesthetic = button.textContent;

		showSection(sections[4]);
	});
});

// match the group
