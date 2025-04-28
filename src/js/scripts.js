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
		link: "https://en.wikipedia.org/wiki/NCT_127",
		image: "images/result-nct127.jpg",
		members: [
			{
				name: "Jaehyun", role: "Visual", animalLook: "Dog", image: "images/jaehyun.jpeg",
				link: "https://en.wikipedia.org/wiki/Jaehyun",
				socials: {
					instagram: "https://www.instagram.com/_jeongjaehyun/?hl=en",
					youtube: "https://www.youtube.com/watch?v=lJGCD3H9xcg",
					spotify: "https://open.spotify.com/artist/0qQI2kmsvSe2ex9k94T5vu"
				}
			},
			{
				name: "Taeyong", role: "Dancer", animalLook: "Cat", image: "images/taeyong.jpg",
				link: "https://en.wikipedia.org/wiki/Taeyong",
				socials: {
					instagram: "https://www.instagram.com/taeoxo_nct/?hl=en",
					youtube: "https://www.youtube.com/c/TAEYONG_TYTRACK",
					spotify: "https://open.spotify.com/artist/6SKusTjOAPsTZ6kareKQdm"
				}
			},
			{
				name: "Doyoung", role: "Vocalist", animalLook: "Rabbit", image: "images/doyoung.jpg",
				link: "https://en.wikipedia.org/wiki/Doyoung",
				socials: {
					instagram: "https://www.instagram.com/do0_nct/?hl=en",
					youtube: "https://www.youtube.com/watch?v=UZjGcAjd8Ok",
					spotify: "https://open.spotify.com/artist/5IMXUzbeAyevQmvtOhXQGi"
				}
			},
			{
				name: "Mark", role: "Rapper", animalLook: "Cat", image: "images/result-marklee.jpg",
				link: "https://en.wikipedia.org/wiki/Mark_(rapper)",
				socials: {
					instagram: "https://www.instagram.com/onyourm__ark/?hl=en",
					youtube: "https://youtu.be/c6PeWqj-moU?feature=shared",
					spotify: "https://open.spotify.com/artist/70DFixYAFPv4Pf9kgSfR9O"
				}
			},
		]
	},
	"NCT Dream": {
		name: "NCT Dream",
		groupType: "Boy",
		link: "https://en.wikipedia.org/wiki/NCT_Dream",
		image: "images/nctdream.webp",
		socials: {
			instagram: "https://www.instagram.com/nct_dream/?hl=en",
			youtube: "https://www.youtube.com/channel/UCXURHJRGr4-EB3l87kcbElw",
			spotify: "https://open.spotify.com/artist/1gBUSTR3TyDdTVFIaQnc02"
		},
		members:
			[
				{
					name: "Jaemin", role: "Visual", animalLook: "Rabbit", image: "images/jaemin.jpg",
					link: "https://en.wikipedia.org/wiki/Jaemin",
					socials: {
						instagram: "https://www.instagram.com/na.jaemin0813/?hl=en",
						youtube: "https://www.youtube.com/channel/UCXURHJRGr4-EB3l87kcbElw",
						spotify: "https://open.spotify.com/artist/1gBUSTR3TyDdTVFIaQnc02"
					}
				},
				{
					name: "Jisung", role: "Dancer", animalLook: "Hamster", image: "images/jisung.jpg",
					link: "https://en.wikipedia.org/wiki/Jisung",
					socials: {
						instagram: "https://www.instagram.com/the__and.y/?hl=en",
						youtube: "https://www.youtube.com/watch?v=KEaHI-_H_6Q&pp=ygUGI3JtbnRj",
						spotify: "https://open.spotify.com/artist/1gBUSTR3TyDdTVFIaQnc02"
					}
				},
				{
					name: "Haechan", role: "Vocalist", animalLook: "Dog", image: "images/haechan.webp",
					link: "https://en.wikipedia.org/wiki/Haechan",
					socials: {
						instagram: "https://www.instagram.com/haechanahceah/?hl=en",
						youtube: "https://www.youtube.com/watch?v=0yzxJz-hHcc",
						spotify: "https://open.spotify.com/artist/1pHMYguhayIoXmPjoOUyu3"
					}
				},
				{
					name: "Chenle", role: "Vocalist", animalLook: "Cat", image: "images/chenle.jpg",
					link: "https://en.wikipedia.org/wiki/Chenle",
					socials: {
						instagram: "https://www.instagram.com/kh1000le/?hl=en",
						youtube: "https://www.youtube.com/watch?v=KEaHI-_H_6Q&pp=ygUGI3JtbnRj",
						spotify: "https://open.spotify.com/artist/6mt12wGFaBAJPjK076GOJz"
					}
				},
				{
					name: "Jeno", role: "Rapper", animalLook: "Dog", image: "images/jeno.jpg",
					link: "https://en.wikipedia.org/wiki/Jeno_(singer)",
					socials: {
						instagram: "https://www.instagram.com/leejen_o_423/?hl=en",
						youtube: "https://www.youtube.com/channel/UCXURHJRGr4-EB3l87kcbElw",
						spotify: "https://open.spotify.com/artist/1gBUSTR3TyDdTVFIaQnc02"
					},
				}
			]
	},
	"Boynextdoor": {
		name: "Boynextdoor",
		groupType: "Boy",
		link: "https://en.wikipedia.org/wiki/Boynextdoor",
		image: "images/boynextdoor.webp",
		socials: {
			instagram: "https://www.instagram.com/boynextdoor_official/?hl=en",
			youtube: "https://www.youtube.com/@boynextdoor_official",
			spotify: "https://open.spotify.com/artist/4hnHLgMSOiqERWBL4jINP1"
		},
		members: [
			{ name: "Taesan", role: "Visual", animalLook: "Cat", image: "images/taesan.jpg" },
			{ name: "Leehan", role: "Visual", animalLook: "Cat", image: "images/leehan.jpg" },
			{ name: "Jaehyun", role: "Rapper", animalLook: "Dog", image: "images/jaehyun.jpg" },
			{ name: "Woonhak", role: "Vocalist", animalLook: "Hamster", image: "images/woonhak.jpg" },
			{ name: "Riwoo", role: "Dancer", animalLook: "Dog", image: "images/riwoo.jpg" }
		]
	},
	"TWS": {
		name: "TWS",
		groupType: "Boy",
		link: "https://en.wikipedia.org/wiki/TWS_(group)",
		image: "images/TWS.jpg",
		socials: {
			instagram: "https://www.instagram.com/tws_pledis/?hl=en",
			youtube: "https://www.youtube.com/@TWS_PLEDIS",
			spotify: "https://open.spotify.com/artist/4GgBKgxhc649frZDHcXIEz"
		},
		members: [
			{ name: "Shinyu", role: "Visual", animalLook: "Cat", image: "images/Shinyu.jpg" },
			{ name: "Dohoon", role: "Rapper", animalLook: "Dog", image: "images/Dohoon.jpg" },
			{ name: "Youngjae", role: "Vocalist", animalLook: "Rabbit", image: "images/Youngjae.jpg" },
			{ name: "Jihoon", role: "Dancer", animalLook: "Hamster", image: "images/Jihoon.jpg" }
		]
	},
	"Riize": {
		name: "Riize",
		groupType: "Boy",
		link: "https://en.wikipedia.org/wiki/Riize",
		image: "images/RIIZE.jpeg",
		socials: {
			instagram: "https://www.instagram.com/riize_official/?hl=en",
			youtube: "https://www.youtube.com/@RIIZE_official",
			spotify: "https://open.spotify.com/artist/2jOm3cYujQx6o1dxuiuqaX"
		},
		members: [
			{ name: "Shotaro", role: "Dancer", animalLook: "Hamster", image: "images/Shotaro.jpeg" },
			{ name: "Wonbin", role: "Visual", animalLook: "Cat", image: "images/Wonbin.jpeg" },
			{ name: "Sohee", role: "Vocalist", animalLook: "Dog", image: "images/Sohee.jpeg" },
			{ name: "Sungchan", role: "Rapper", animalLook: "Dog", image: "images/sungchan.jpeg" }
		]
	},
	"TXT": {
		name: "TXT",
		groupType: "Boy",
		link: "https://en.wikipedia.org/wiki/Tomorrow_X_Together",
		image: "images/txt.jpg",
		socials: {
			instagram: "https://www.instagram.com/txt_bighit/?hl=en",
			youtube: "https://www.youtube.com/channel/UCtiObj3CsEAdNU6ZPWDsddQ",
			spotify: "https://open.spotify.com/artist/0ghlgldX5Dd6720Q3qFyQB"
		},
		members: [
			{ name: "Yeonjun", role: "Dancer", animalLook: "Cat", image: "images/yeonjun.jpg" },
			{ name: "Beomgyu", role: "Visual", animalLook: "Hamster", image: "images/beomgyu.jpg" },
			{ name: "Taehyun", role: "Vocalist", animalLook: "Dog", image: "images/taehyun.jpg" },
			{ name: "Soobin", role: "Rapper", animalLook: "Rabbit", image: "images/soobin.jpg" }
		]
	},
	"Stray Kids": {
		name: "Stray Kids",
		groupType: "Boy",
		link: "https://en.wikipedia.org/wiki/Stray_Kids",
		image: "images/straykids.jpg",
		socials: {
			instagram: "https://www.instagram.com/realstraykids/?hl=en",
			youtube: "https://www.youtube.com/channel/UC9rMiEjNaCSsebs31MRDCRA",
			spotify: "https://open.spotify.com/artist/2dIgFjalVxs4ThymZ67YCE"
		},
		members: [
			{ name: "Seungmin", role: "Vocalist", animalLook: "Dog", image: "images/bangchan.jpg" },
			{ name: "Lee Know", role: "Dancer", animalLook: "Dog", image: "images/leeknow.webp" },
			{ name: "Changbin", role: "Rapper", animalLook: "Rabbit", image: "images/changbin.jpg" },
			{ name: "Hyunjin", role: "Visual", animalLook: "Cat", image: "images/hyunjin.jpg" }
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
		socials: {
			instagram: "https://www.instagram.com/le_sserafim/?hl=en",
			youtube: "https://www.youtube.com/channel/UCs-QBT4qkj_YiQw1ZntDO3g",
			spotify: "https://open.spotify.com/artist/4SpbR6yFEvexJuaBpgAU5p"
		},
		members: [
			{ name: "Sakura", role: "Visual", animalLook: "Rabbit", image: "images/sakura.jpg" },
			{ name: "Yunjin", role: "Rapper", animalLook: "Cat", image: "images/yunjin.jpg" },
			{ name: "Chaewon", role: "Vocalist", animalLook: "Hamster", image: "images/chaewon.jpg" },
			{ name: "Eunchae", role: "Dancer", animalLook: "Dog", image: "images/eunchae.jpg" }
		]
	},
	"njz": {
		name: "njz",
		groupType: "Girl",
		genre: "Chill & Moody",
		aesthetic: "Fresh & Youthful",
		link: "https://en.wikipedia.org/wiki/NewJeans",
		image: "images/NewJeans.webp",
		socials: {
			instagram: "https://www.instagram.com/newjeans_official/?hl=en",
			youtube: "https://www.youtube.com/channel/UCMki_UkHb4qSc0qyEcOHHJw",
			spotify: "https://open.spotify.com/artist/6HvZYsbFfjnjFrWF950C9d"
		},
		members: [
			{ name: "Minji", role: "Rapper", animalLook: "Dog", image: "images/minji.jpg" },
			{ name: "Haerin", role: "Dancer", animalLook: "Hamster", image: "images/haerin.jpg" },
			{ name: "Danielle", role: "Visual", animalLook: "Rabbit", image: "images/danielle.jpg" },
			{ name: "Hyein", role: "Vocalist", animalLook: "Cat", image: "images/hyein.jpg" }
		]
	},
	"illit": {
		name: "illit",
		groupType: "Girl",
		genre: "Chill & Moody",
		aesthetic: "Fresh & Youthful",
		link: "https://en.wikipedia.org/wiki/Illit",
		image: "images/illit.webp",
		socials: {
			instagram: "https://www.instagram.com/illit_official/?hl=en",
			youtube: "https://www.youtube.com/@ILLIT_official",
			spotify: "https://open.spotify.com/artist/36cgvBn0aadzOijnjjwqMN"
		},
		members: [
			{ name: "Moka", role: "Rapper", animalLook: "Dog", image: "images/moka.jpg" },
			{ name: "Iroha", role: "Dancer", animalLook: "Hamster", image: "images/iroha.jpeg" },
			{ name: "Wonhee", role: "Visual", animalLook: "Rabbit", image: "images/wonhee.jpeg" },
			{ name: "Minju", role: "Vocalist", animalLook: "Cat", image: "images/minju.jpeg" }
		]
	},
	"aespa": {
		name: "aespa",
		groupType: "Girl",
		genre: "Experimental & Edgy",
		aesthetic: "Futuristic & Edgy",
		link: "https://en.wikipedia.org/wiki/Aespa",
		image: "images/aespa.jpg",
		socials: {
			instagram: "https://www.instagram.com/aespa_official/?hl=en",
			youtube: "https://www.youtube.com/channel/UC9GtSLeksfK4yuJ_g1lgQbg",
			spotify: "https://open.spotify.com/artist/6YVMFz59CuY7ngCxTxjpxE"
		},
		members: [
			{ name: "Karina", role: "Dancer", animalLook: "Cat", image: "images/karina.webp" },
			{ name: "Winter", role: "Visual", animalLook: "Hamster", image: "images/winter.jpg" },
			{ name: "Giselle", role: "Rapper", animalLook: "Dog", image: "images/giselle.jpg" },
			{ name: "Ningning", role: "Vocalist", animalLook: "Cat", image: "images/ningning.jpg" }
		]
	},
	"nmixx": {
		name: "nmixx",
		groupType: "Girl",
		genre: "Experimental & Edgy",
		aesthetic: "Futuristic & Edgy",
		link: "https://en.wikipedia.org/wiki/Nmixx",
		image: "images/nmixx.jpg",
		socials: {
			instagram: "https://www.instagram.com/nmixx_official/",
			youtube: "https://www.youtube.com/channel/UCnUAyD4t2LkvW68YrDh7fDg",
			spotify: "https://open.spotify.com/artist/28ot3wh4oNmoFOdVajibBl"
		},
		members: [
			{ name: "Bae", role: "Dancer", animalLook: "Dog", image: "images/bae.jpg" },
			{ name: "Sullyoon", role: "Visual", animalLook: "Rabbit", image: "images/sullyoon.jpg" },
			{ name: "Kyujin", role: "Rapper", animalLook: "Cat", image: "images/kyujin.jpg" },
			{ name: "Haewon", role: "Vocalist", animalLook: "Hamster", image: "images/haewon.jpg" }
		]
	},
	"babymonster": {
		name: "Babymonster",
		groupType: "Girl",
		genre: "Rap & Hip-pop",
		aesthetic: "Dark & Mysterious",
		link: "https://en.wikipedia.org/wiki/Babymonster",
		image: "images/babymonster.webp",
		socials: {
			instagram: "https://www.instagram.com/babymonster_ygofficial/",
			youtube: "https://www.youtube.com/channel/UCqwUnggBBct-AY2lAdI88jQ",
			spotify: "https://open.spotify.com/artist/1SIocsqdEefUTE6XKGUiVS"
		},
		members: [
			{ name: "Ruka", role: "Rapper", animalLook: "Cat", image: "images/ruka.jpeg" },
			{ name: "Ahyeon", role: "Vocalist", animalLook: "Dog", image: "images/ahyeon.jpeg" },
			{ name: "Chiquita", role: "Dancer", animalLook: "Hamster", image: "images/chiquita.jpg" },
			{ name: "Pharita", role: "Visual", animalLook: "Rabbit", image: "images/pharita.jpg" }
		]
	},
	"youngposse": {
		name: "Young Posse",
		groupType: "Girl",
		genre: "Rap & Hip-pop",
		aesthetic: "Dark & Mysterious",
		link: "https://en.wikipedia.org/wiki/Young_Posse",
		image: "images/Young_Posse.jpg",
		socials: {
			instagram: "https://www.instagram.com/youngposseup/?hl=en",
			youtube: "https://www.youtube.com/@YOUNGPOSSEUP",
			spotify: "https://open.spotify.com/artist/5bxwvIM9PX0CkpS6f1L2Ff"
		},
		members: [
			{ name: "Sunhye", role: "Rapper", animalLook: "Hamster", image: "images/sunhye.jpg" },
			{ name: "Yeonjung", role: "Vocalist", animalLook: "Rabbit", image: "images/yeonjung.jpg" },
			{ name: "Jiana", role: "Dancer", animalLook: "Cat", image: "images/jiana.jpg" },
			{ name: "Jieun", role: "Visual", animalLook: "Hamster", image: "images/jieun.jpg" }
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
		if (btn.textContent.toLowerCase().includes("match again")) {
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
	} else if (genre === "upbeat & happy" && aesthetic === "futuristic & edgy") {
		return kpopGroups["NCT Dream"];
	} else if (genre === "chill & moody" && aesthetic === "vintage & retro") {
		return kpopGroups["Riize"];
	} else if (genre === "rap & hip-pop" && aesthetic === "dark & mysterious") {
		return kpopGroups["Stray Kids"];
	} else {
		return kpopGroups["TXT"]; // Default if no match
	}
}

// Logic to match Girl Groups
function getGirlGroupMatch() {
	const genre = formatText(userResults.genre);
	const aesthetic = formatText(userResults.aesthetic);

	if (genre === "upbeat & happy" && aesthetic === "vintage & retro") {
		return kpopGroups["Le sserafim"];
	} else if (genre === "chill & moody" && aesthetic === "vintage & retro") {
		return kpopGroups["njz"];
	} else if (genre === "upbeat & happy" && aesthetic === "fresh & youthful") {
		return kpopGroups["illit"];
	} else if (genre === "experimental & edgy" && aesthetic === "futuristic & edgy") {
		return kpopGroups["aespa"];
	} else if (genre === "rap & hip-pop" && aesthetic === "dark & mysterious") {
		return kpopGroups["babymonster"];
	} else {
		return kpopGroups["aespa"]; // Default if no match
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
	} else if (genre === "upbeat & happy" && aesthetic === "futuristic & edgy") {
		return kpopGroups["NCT Dream"];
	} else if (genre === "chill & moody" && aesthetic === "fresh & youthful") {
		return kpopGroups["illit"];
	} else if (genre === "rap & hip-pop" && aesthetic === "vintage & retro") {
		return kpopGroups["youngposse"];
	} else if (genre === "rap & hip-pop" && aesthetic === "dark & mysterious") {
		return kpopGroups["Stray Kids"];
	} else {
		return kpopGroups["njz"]; // Default if no match
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

// Store the matched group
let currentMatchedGroup = null;

function showGroupResult() {
	currentMatchedGroup = getGroupMatch();

	if (currentMatchedGroup) {
		// Update the result page with the matched group's data
		document.querySelector(".result-name").textContent = currentMatchedGroup.name;
		document.querySelector(".result-images").src = currentMatchedGroup.image;
		document.querySelector(".result-group-btn-list a").href = currentMatchedGroup.link;
	}

	const socialLinks = document.querySelectorAll('.result-group .social-btn a');
	if (currentMatchedGroup.socials) {
		socialLinks[0].href = currentMatchedGroup.socials.instagram;
		socialLinks[1].href = currentMatchedGroup.socials.youtube;
		socialLinks[2].href = currentMatchedGroup.socials.spotify;
	}
}

function getBiasMatch() {
	if (!currentMatchedGroup) return null;

	const role = formatText(userResults.role);
	const animalLook = formatText(userResults.animalLook);

	let bestMatch = null;

	// 先精准匹配 role + animalLook
	for (const member of currentMatchedGroup.members) {
		if (formatText(member.role) === role && formatText(member.animalLook) === animalLook) {
			return member;
		}
	}

	// 如果没有精准 match，就只按 role 匹配
	for (const member of currentMatchedGroup.members) {
		if (formatText(member.role) === role) {
			return member;
		}
	}

	// 如果还没有，就按 animal look 匹配
	for (const member of currentMatchedGroup.members) {
		if (formatText(member.animalLook) === animalLook) {
			return member;
		}
	}

	// 如果都没有，就默认第一个成员
	return currentMatchedGroup.members[0];
}

function showBiasResult() {
	const matchedBias = getBiasMatch();
	console.log('Matched Bias:', matchedBias); // Debug 看看有没有拿到正确成员！

	if (matchedBias) {
		// 更新名字
		document.querySelector(".result-bias .result-name").textContent = matchedBias.name;

		// 更新小图
		document.querySelector(".bias-result-image").src = matchedBias.image;

		// 更新背景（这里可以用 member 的图片，或者独立 backgroundImage）
		const biasSection = document.querySelector(".result-bias");
		biasSection.style.backgroundSize = "cover";
		biasSection.style.backgroundPosition = "center";

		// 更新 about 链接（如果你在 member 里面加了 link 字段）
		const aboutBiasBtn = document.querySelector('.result-bias .result-bias-btn-list a');
		if (aboutBiasBtn && matchedBias.link) {
			aboutBiasBtn.href = matchedBias.link;
		}

		// 更新 social buttons
		const socialLinks = document.querySelectorAll('.result-bias .social-btn a');
		if (matchedBias.socials) {
			socialLinks[0].href = matchedBias.socials.instagram;
			socialLinks[1].href = matchedBias.socials.youtube;
			socialLinks[2].href = matchedBias.socials.spotify;
		}
	}
}

// Add these event listeners to capture role and animal look choices
document.querySelectorAll(".quiz-4-btn").forEach(button => {
	button.addEventListener("click", () => {
		userResults.role = button.textContent;
		showSection(sections[5]); // Go to animal look question
	});
});

document.querySelectorAll(".quiz-5-btn").forEach(button => {
	button.addEventListener("click", () => {
		userResults.animalLook = button.textContent;
		showBiasResult(); // Show the bias result
		showSection(sections[7]); // Show the bias result page
	});
});
