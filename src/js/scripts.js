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
		answers: [
			{
				gender: "boy group",
				genre: "experimental & edgy",
				aesthetic: "futuristic & edgy"
			},
			{
				gender: "either",
				genre: "experimental & edgy",
				aesthetic: "futuristic & edgy"
			}
		],
		link: "https://en.wikipedia.org/wiki/NCT_127",
		image: "images/result-nct127.jpg",
		members: [
			{ name: "Jaehyun", role: "Visual", animalLook:"Dog", image: "images/jaehyun.jpg" },
			{ name: "Taeyong", role: "Dancer", animalLook:"Cat", image: "images/taeyong.jpg" },
			{ name: "Doyoung", role: "Vocalist",animalLook:"Rabbit", image: "images/doyoung.jpg" },
			{ name: "Mark", role: "Rapper", animalLook:"Cat", image: "images/result-marklee" },
		]
	},
	"NCT Dream": {
		name: "NCT Dream",
		groupType: "Boy",
		answers: [
			{
				gender: "boy group",
				genre: "experimental & edgy",
				aesthetic: "fresh & youthful"
			},
			{
				gender: "either",
				genre: "experimental & edgy",
				aesthetic: "fresh & youthful"
			}
		],
		link: "https://en.wikipedia.org/wiki/NCT_Dream",
		image: "images/nctdream.webp",
		backgroundImage: "images/result-nctdream.jpg",
		members: [
			{ name: "Jaemin", role: "Visual", animalLook:"Rabbit", image: "images/jaemin.jpg" },
			{ name: "Jisung", role: "Dancer", animalLook:"Hamster", image: "images/jisung.jpg" },
			{ name: "Haechan", role: "Vocalist", animalLook:"Dog", image: "images/haechan.jpg" },
			{ name: "Chenle", role: "Vocalist", animalLook:"Cat", image: "images/chenle.jpg" },
			{ name: "Jeno", role: "Rapper", animalLook:"Dog", image: "images/jeno.jpg" },
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
			{ name: "Taesan", role: "Visual", animalLook:"Cat", image: "images/taesan.jpg" },
			{ name: "Leehan", role: "Visual", animalLook:"Cat", image: "images/leehan.jpg" },
			{ name: "Jaehyun", role: "Rapper", animalLook:"Dog", image: "images/jaehyun.jpg" },
			{ name: "Woonhak", role: "Vocalist", animalLook:"Hamster", image: "images/woonhak.jpg" },
			{ name: "Riwoo", role: "Dancer", animalLook:"Dog", image: "images/riwoo.jpg" }
		]
	},
	"TWS": {
		name: "TWS",
		groupType: "Boy",
		genre: "Upbeat & Happy",
		aesthetic: "Fresh & Youthful",
		link: "https://en.wikipedia.org/wiki/TWS_(group)",
		image: "images/TWS.jpg",
		members: [
			{ name: "Shinyu", role: "Visual", animalLook:"Cat", image: "images/Shinyu.jpg" },
			{ name: "Dohoon", role: "Rapper", animalLook:"Dog", image: "images/Dohoon.jpg" },
			{ name: "Youngjae", role: "Vocalist", animalLook:"Rabbit", image: "images/Youngjae.jpg" },
			{ name: "Jihoon", role: "Dancer", animalLook:"Hamster", image: "images/Jihoon.jpg" }
		]
	},
	"Riize": {
		name: "Riize",
		groupType: "Boy",
		genre: "Chill & Moody",
		aesthetic: "Vintage / Retro",
		link: "https://en.wikipedia.org/wiki/Riize",
		image: "images/RIIZE.jpeg",
		members: [
			{ name: "Shotaro", role: "Dancer", animalLook:"Hamster", image: "images/Shotaro.jpg" },
			{ name: "Wonbin", role: "Visual", animalLook:"Cat", image: "images/Wonbin.jpg" },
			{ name: "Sohee", role: "Vocalist", animalLook:"Dog", image: "images/Sohee.jpg" },
			{ name: "Sungchan", role: "Rapper", animalLook:"Dog", image: "images/sungchan.jpg" }
		]
	},
	"TXT": {
		name: "TXT",
		groupType: "Boy",
		genre: "Chill & Moody",
		aesthetic: "Vintage / Retro",
		link: "https://en.wikipedia.org/wiki/Tomorrow_X_Together",
		image: "images/txt.wepbp",
		members: [
			{ name: "Yeonjun", role: "Dancer", animalLook:"Cat", image: "images/Shotaro.jpg" },
			{ name: "Beomgyu", role: "Visual", animalLook:"Hamster", image: "images/Wonbin.jpg" },
			{ name: "Taehyun", role: "Vocalist", animalLook:"Dog", image: "images/Sohee.jpg" },
			{ name: "Soobin", role: "Rapper", animalLook:"Rabbit", image: "images/sungchan.jpg" }
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
			{ name: "Seungmin", role: "Vocalist", animalLook:"Dog", image: "images/bangchan.jpg" },
			{ name: "Lee Know", role: "Dancer", animalLook:"Dog", image: "images/leenow.jpg" },
			{ name: "Changbin", role: "Rapper", animalLook:"Rabbit", image: "images/changbin.jpg" },
			{ name: "Hyunjin", role: "Visual", animalLook:"Cat", image: "images/hyunjin.jpg" }
		]
	},

	// Girl Groups
	"Le sserafim": {
		name: "Le sserafim",
		groupType: "Girl",
		genre: "Upbeat & Happy",
		aesthetic: "Vintage / Retro",
		link: "https://en.wikipedia.org/wiki/Le_Sserafim",
		image: "images/lesserafim.jpg",
		members: [
			{ name: "Sakura", role: "Visual", animalLook:"Rabbit", image: "images/sakura.jpg" },
			{ name: "Kazuha", role: "Rapper", animalLook:"Cat", image: "images/kazuha.jpg" },
			{ name: "Chaewon", role: "Vocalist", animalLook:"Hamster", image: "images/chaewon.jpg" },
			{ name: "Eunchae", role: "Dancer", animalLook:"Dog", image: "images/eunchae.jpg" }
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
			{ name: "Minji", role: "Rapper", animalLook:"Dog", image: "images/minji.jpg" },
			{ name: "Hanni", role: "Dancer", animalLook:"Hamster", image: "images/hanni.jpg" },
			{ name: "Danielle", role: "Visual", animalLook:"Rabbit", image: "images/danielle.jpg" },
			{ name: "Hyein", role: "Vocalist", animalLook:"Cat", image: "images/hyein.jpg" }
		]
	},
	"illit": {
		name: "illit",
		groupType: "Girl",
		genre: "Chill & Moody",
		aesthetic: "Fresh & Youthful",
		link: "https://en.wikipedia.org/wiki/Illit",
		image: "images/illit.jpg",
		members: [
			{ name: "Moka", role: "Rapper", animalLook:"Dog", image: "images/moka.jpg" },
			{ name: "Iroha", role: "Dancer", animalLook:"Hamster", image: "images/iroha.jpg" },
			{ name: "Wonhee", role: "Visual", animalLook:"Rabbit", image: "images/wonhee.jpg" },
			{ name: "Minju", role: "Vocalist", animalLook:"Cat", image: "images/minju.jpg" }
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
			{ name: "Karina", role: "Dancer", animalLook:"Cat", image: "images/karina.jpg" },
			{ name: "Winter", role: "Visual", animalLook:"Hamster", image: "images/winter.jpg" },
			{ name: "Giselle", role: "Rapper", animalLook:"Dog", image: "images/giselle.jpg" },
			{ name: "Ningning", role: "Vocalist", animalLook:"Cat",image: "images/ningning.jpg" }
		]
	},
	"nmixx": {
		name: "nmixx",
		groupType: "Girl",
		genre: "Experimental & Edgy",
		aesthetic: "Futuristic & Edgy",
		link: "https://en.wikipedia.org/wiki/Nmixx",
		image: "images/nmixx.jpg",
		members: [
			{ name: "Bae", role: "Dancer", animalLook:"Dog", image: "images/karina.jpg" },
			{ name: "Sullyoon", role: "Visual", animalLook:"Rabbit", image: "images/winter.jpg" },
			{ name: "Kyujin", role: "Rapper", animalLook:"Cat", image: "images/giselle.jpg" },
			{ name: "Haewon", role: "Vocalist", animalLook:"Hamster",image: "images/ningning.jpg" }
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
			{ name: "Ruka", role: "Rapper", animalLook:"Cat", image: "images/ruka.jpg" },
			{ name: "Ahyeon", role: "Vocalist", animalLook:"Dog", image: "images/ahyeon.jpg" },
			{ name: "Chiquita", role: "Dancer", animalLook:"Hamster", image: "images/chiquita.jpg" },
			{ name: "Pharita", role: "Visual", animalLook:"Rabbit", image: "images/pharita.jpg" }
		]
	},
	"youngposse": {
		name: "Young Posse",
		groupType: "Girl",
		genre: "Rap & Hip-pop",
		aesthetic: "Dark & Mysterious",
		link: "https://en.wikipedia.org/wiki/Young_Posse",
		image: "images/Young_Posse.jpg",
		members: [
			{ name: "Sunhye", role: "Rapper", animalLook:"Hamster", image: "images/ruka.jpg" },
			{ name: "Yeonjung", role: "Vocalist", animalLook:"Rabbit", image: "images/ahyeon.jpg" },
			{ name: "Jiana", role: "Dancer", animalLook:"Cat", image: "images/chiquita.jpg" },
			{ name: "Jieun", role: "Visual", animalLook:"Hamster", image: "images/pharita.jpg" }
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
// Helper function to standardize text formatting
function formatText(text) {
    return text.trim().toLowerCase();
}

// Match the group function
function getGroupMatch() {
    let matchedGroup = null;

    // First, filter by gender preference with standardized text
    const gender = formatText(userResults.gender);

    if (gender === "boy group") {
        matchedGroup = getBoyGroupMatch();
    } else if (gender === "girl group") {
        matchedGroup = getGirlGroupMatch();
    } else if (gender === "either") {
        matchedGroup = getAnyGroupMatch();
    }

    return matchedGroup;
}

// Logic to match Boy Groups
function getBoyGroupMatch() {
    const genre = formatText(userResults.genre);
    const aesthetic = formatText(userResults.aesthetic);
    
    if (genre === "upbeat & happy" && aesthetic === "fresh & youthful") {
        return kpopGroups["Boynextdoor"];
    } else if (genre === "experimental & edgy" && aesthetic === "futuristic & edgy") {
        return kpopGroups["NCT 127"];
    } else if (genre === "chill & moody" && aesthetic === "vintage & retro") {
        return kpopGroups["Riize"];
    } else {
        return kpopGroups["Stray Kids"]; // Default if no match
    }
}

// Logic to match Girl Groups
function getGirlGroupMatch() {
    const genre = formatText(userResults.genre);
    const aesthetic = formatText(userResults.aesthetic);
    
    if (genre === "upbeat & happy" && aesthetic === "vintage & retro") {
        return kpopGroups["Le sserafim"];
    } else if (genre === "chill & moody" && aesthetic === "fresh & youthful") {
        return kpopGroups["njz"];
    } else if (genre === "experimental & edgy" && aesthetic === "futuristic & edgy") {
        return kpopGroups["aespa"];
    } else {
        return kpopGroups["babymonster"]; // Default if no match
    }
}

// Logic to match Either group
function getAnyGroupMatch() {
    const genre = formatText(userResults.genre);
    const aesthetic = formatText(userResults.aesthetic);
    
    if (genre === "upbeat & happy" && aesthetic === "fresh & youthful") {
        return kpopGroups["TWS"];
    } else if (genre === "chill & moody" && aesthetic === "vintage & retro") {
        return kpopGroups["TXT"];
    } else if (genre === "chill & moody" && aesthetic === "fresh & youthful") {
        return kpopGroups["illit"];
    } else {
        return kpopGroups["Le sserafim"]; // Default if no match
    }
}

// Update result with background image
function showGroupResult() {
    const matchedGroup = getGroupMatch();

    if (matchedGroup) {
        // Update the result page with the matched group's data
        document.querySelector(".result-name").textContent = matchedGroup.name;
        document.querySelector(".result-images").src = matchedGroup.image;
        document.querySelector(".result-group-btn-list a").href = matchedGroup.link;
        
        // Override the background
        const resultSection = document.querySelector(".result-group");
        resultSection.style.backgroundImage = `url(${matchedGroup.image})`;
        resultSection.style.backgroundSize = "cover";
        resultSection.style.backgroundPosition = "center";
    }
}

// Don't attach to just one button - update the quiz-3-btn click handler instead
document.querySelectorAll(".quiz-3-btn").forEach(button => {
    button.addEventListener("click", () => {
        userResults.aesthetic = button.textContent;
        showGroupResult();  // Calculate and show result immediately
        showSection(sections[4]);  // Show the result group page
    });
});