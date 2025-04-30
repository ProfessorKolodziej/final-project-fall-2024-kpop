
//Claude AI, "How to add an event listener for the share button that opens X’s share link or allows copying a link?"
//Claude AI, "How to replace context with different results?"

const kpopGroups = {
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
					name: "Haechan", role: "Vocalist", animalLook: "Dog", image: "images/haechan.jpg",
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
			{
				name: "Taesan", role: "Visual", animalLook: "Cat", image: "images/taesan.jpeg",
				link: "https://en.wikipedia.org/wiki/Boynextdoor",
				socials: {
					instagram: "https://www.instagram.com/boynextdoor_official/?hl=en",
					youtube: "https://www.youtube.com/hashtag/taesan",
					spotify: "https://open.spotify.com/artist/2Zz9U4J4t6H3G0HdYVX0uY"
				},
			},
			{
				name: "Leehan", role: "Visual", animalLook: "Dog", image: "images/leehan.jpg",
				link: "https://en.wikipedia.org/wiki/Boynextdoor",
				socials: {
					instagram: "https://www.instagram.com/boynextdoor_official/?hl=en",
					youtube: "https://www.youtube.com/@boynextdoor_official",
					spotify: "https://open.spotify.com/artist/4hnHLgMSOiqERWBL4jINP1"
				},
			},
			{
				name: "Jaehyun", role: "Rapper", animalLook: "Dog", image: "images/jaehyunm.jpeg",
				link: "https://en.wikipedia.org/wiki/Boynextdoor",
				socials: {
					instagram: "https://www.instagram.com/boynextdoor_official/?hl=en",
					youtube: "https://www.youtube.com/@boynextdoor_official",
					spotify: "https://open.spotify.com/artist/4hnHLgMSOiqERWBL4jINP1"
				},
			},
			{
				name: "Woonhak", role: "Vocalist", animalLook: "Hamster", image: "images/woonhak.jpg",
				link: "https://en.wikipedia.org/wiki/Boynextdoor",
				socials: {
					instagram: "https://www.instagram.com/boynextdoor_official/?hl=en",
					youtube: "https://www.youtube.com/@boynextdoor_official",
					spotify: "https://open.spotify.com/artist/4hnHLgMSOiqERWBL4jINP1"
				},
			},
			{
				name: "Riwoo", role: "Dancer", animalLook: "Dog", image: "images/riwoo.jpg",
				link: "https://en.wikipedia.org/wiki/Boynextdoor",
				socials: {
					instagram: "https://www.instagram.com/boynextdoor_official/?hl=en",
					youtube: "https://www.youtube.com/@boynextdoor_official",
					spotify: "https://open.spotify.com/artist/4hnHLgMSOiqERWBL4jINP1"
				},
			}
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
			{
				name: "Shinyu", role: "Visual", animalLook: "Cat", image: "images/Shinyu.jpg",
				link: "https://en.wikipedia.org/wiki/TWS_(group)",
				socials: {
					instagram: "https://www.instagram.com/tws_pledis/?hl=en",
					youtube: "https://www.youtube.com/@TWS_PLEDIS",
					spotify: "https://open.spotify.com/artist/4GgBKgxhc649frZDHcXIEz"
				},
			},
			{
				name: "Dohoon", role: "Rapper", animalLook: "Dog", image: "images/Dohoon.jpg",
				link: "https://en.wikipedia.org/wiki/TWS_(group)",
				socials: {
					instagram: "https://www.instagram.com/tws_pledis/?hl=en",
					youtube: "https://www.youtube.com/@TWS_PLEDIS",
					spotify: "https://open.spotify.com/artist/4GgBKgxhc649frZDHcXIEz"
				},
			},
			{
				name: "Youngjae", role: "Vocalist", animalLook: "Rabbit", image: "images/Youngjae.jpg",
				link: "https://en.wikipedia.org/wiki/TWS_(group)",
				socials: {
					instagram: "https://www.instagram.com/tws_pledis/?hl=en",
					youtube: "https://www.youtube.com/@TWS_PLEDIS",
					spotify: "https://open.spotify.com/artist/4GgBKgxhc649frZDHcXIEz"
				},
			},
			{
				name: "Jihoon", role: "Dancer", animalLook: "Hamster", image: "images/Jihoon.jpg",
				link: "https://en.wikipedia.org/wiki/TWS_(group)",
				socials: {
					instagram: "https://www.instagram.com/tws_pledis/?hl=en",
					youtube: "https://www.youtube.com/@TWS_PLEDIS",
					spotify: "https://open.spotify.com/artist/4GgBKgxhc649frZDHcXIEz"
				},
			}
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
			{
				name: "Shotaro", role: "Dancer", animalLook: "Hamster", image: "images/Shotaro.jpg",
				link: "https://en.wikipedia.org/wiki/Riize",
				socials: {
					instagram: "https://www.instagram.com/riize_official/?hl=en",
					youtube: "https://www.youtube.com/@RIIZE_official",
					spotify: "https://open.spotify.com/artist/2jOm3cYujQx6o1dxuiuqaX"
				},
			},
			{
				name: "Wonbin", role: "Visual", animalLook: "Cat", image: "images/Wonbin.jpg",
				link: "https://en.wikipedia.org/wiki/Riize",
				socials: {
					instagram: "https://www.instagram.com/riize_official/?hl=en",
					youtube: "https://www.youtube.com/@RIIZE_official",
					spotify: "https://open.spotify.com/artist/2jOm3cYujQx6o1dxuiuqaX"
				},
			},
			{
				name: "Sohee", role: "Vocalist", animalLook: "Dog", image: "images/sohee.jpeg",
				link: "https://en.wikipedia.org/wiki/Riize",
				socials: {
					instagram: "https://www.instagram.com/riize_official/?hl=en",
					youtube: "https://www.youtube.com/@RIIZE_official",
					spotify: "https://open.spotify.com/artist/2jOm3cYujQx6o1dxuiuqaX"
				},
			},
			{
				name: "Sungchan", role: "Rapper", animalLook: "Dog", image: "images/sungchan.jpg",
				link: "https://en.wikipedia.org/wiki/Riize",
				socials: {
					instagram: "https://www.instagram.com/riize_official/?hl=en",
					youtube: "https://www.youtube.com/@RIIZE_official",
					spotify: "https://open.spotify.com/artist/2jOm3cYujQx6o1dxuiuqaX"
				},
			}
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
			{
				name: "Yeonjun", role: "Dancer", animalLook: "Cat", image: "images/yeonjun.jpg",
				link: "https://en.wikipedia.org/wiki/Yeonjun",
				socials: {
					instagram: "https://www.instagram.com/yawnzzn/?hl=en",
					youtube: "https://www.youtube.com/watch?v=1T9tLMh99Wo",
					spotify: "https://open.spotify.com/artist/2Mo2yHjmrDRZW7yRuJwR2w"
				},
			},
			{
				name: "Beomgyu", role: "Visual", animalLook: "Hamster", image: "images/beomgyu.jpg",
				link: "https://en.wikipedia.org/wiki/Beomgyu",
				socials: {
					instagram: "https://www.instagram.com/bamgyuuuu/?hl=en",
					youtube: "https://www.youtube.com/watch?v=9hTpDHJmjC0",
					spotify: "https://open.spotify.com/artist/69vfchlzopPm72nD2elXCH"
				},
			},
			{
				name: "Taehyun", role: "Vocalist", animalLook: "Dog", image: "images/taehyun.jpg",
				link: "https://es.wikipedia.org/wiki/Taehyun",
				socials: {
					instagram: "https://www.instagram.com/txt_bighit/?hl=en",
					youtube: "https://www.youtube.com/watch?v=b7zvnLaF5XM",
					spotify: "https://open.spotify.com/artist/0ghlgldX5Dd6720Q3qFyQB"
				},
			},
			{
				name: "Soobin", role: "Rapper", animalLook: "Rabbit", image: "images/soobin.jpg",
				link: "https://en.wikipedia.org/wiki/Tomorrow_X_Together",
				socials: {
					instagram: "https://www.instagram.com/page.soobin/?hl=en",
					youtube: "https://www.youtube.com/watch?v=lomg3JLjIQc",
					spotify: "https://open.spotify.com/artist/0ghlgldX5Dd6720Q3qFyQB"
				},
			}
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
			{
				name: "Seungmin", role: "Vocalist", animalLook: "Dog", image: "images/bangchan.jpg",
				link: "https://en.wikipedia.org/wiki/Seungmin",
				socials: {
					instagram: "https://www.instagram.com/miniverse.___/?hl=en",
					youtube: "https://www.youtube.com/watch?v=kAzmhLHePqU",
					spotify: "https://open.spotify.com/artist/2nTtulf6WM0raQcIbzYJuf"
				},
			},
			{
				name: "Lee Know", role: "Dancer", animalLook: "Dog", image: "images/leeknow.webp",
				link: "https://en.wikipedia.org/wiki/Lee_Know",
				socials: {
					instagram: "https://www.instagram.com/t.leeknowsaurus/?hl=en",
					youtube: "https://www.youtube.com/watch?v=NI2NBjZGYfM",
					spotify: "https://open.spotify.com/artist/2dIgFjalVxs4ThymZ67YCE"
				},
			},
			{
				name: "Changbin", role: "Rapper", animalLook: "Rabbit", image: "images/changbin.jpg",
				link: "https://en.wikipedia.org/wiki/Changbin",
				socials: {
					instagram: "https://www.instagram.com/realstraykids/?hl=en",
					youtube: "https://www.youtube.com/watch?v=t4YJEekL1f8&vl=en",
					spotify: "https://open.spotify.com/artist/3XSid6KaiKoMAVZs2ug3yw"
				},
			},
			{
				name: "Hyunjin", role: "Visual", animalLook: "Cat", image: "images/hyunjin.jpg",
				link: "https://en.wikipedia.org/wiki/Hyunjin",
				socials: {
					instagram: "https://www.instagram.com/hynjinnnn/",
					youtube: "https://www.youtube.com/watch?v=3yp17XEP5ck&vl=en",
					spotify: "https://open.spotify.com/artist/2dIgFjalVxs4ThymZ67YCE"
				},
			}
		]
	},

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
			{
				name: "Sakura", role: "Visual", animalLook: "Rabbit", image: "images/sakura.jpg",
				link: "https://en.wikipedia.org/wiki/Sakura_Miyawaki",
				socials: {
					instagram: "https://www.instagram.com/39saku_chan/?hl=en",
					youtube: "https://www.youtube.com/channel/UCs-QBT4qkj_YiQw1ZntDO3g",
					spotify: "https://open.spotify.com/artist/4SpbR6yFEvexJuaBpgAU5p"
				},
			},
			{
				name: "Yunjin", role: "Rapper", animalLook: "Cat", image: "images/yunjin.jpg",
				link: "https://en.wikipedia.org/wiki/Huh_Yunjin",
				socials: {
					instagram: "https://www.instagram.com/jenaissante/?hl=en",
					youtube: "https://www.youtube.com/watch?v=9trNIRzbPMc&pp=0gcJCdgAo7VqN5tD",
					spotify: "https://open.spotify.com/artist/13yWtUnz63q5VIs5SwoMhy"
				},
			},
			{
				name: "Chaewon", role: "Vocalist", animalLook: "Hamster", image: "images/chaewon.jpg",
				link: "https://en.wikipedia.org/wiki/Kim_Chaewon",
				socials: {
					instagram: "https://www.instagram.com/_chaechae_1/?hl=en",
					youtube: "https://www.youtube.com/playlist?list=PL2JKfPn9guiJuvIKuiTheSRwJB_-8Y1J6",
					spotify: "https://open.spotify.com/artist/4AY12WVwnTpIobXjwJkYDQ"
				},
			},
			{
				name: "Eunchae", role: "Dancer", animalLook: "Dog", image: "images/eunchae.jpg",
				link: "https://en.wikipedia.org/wiki/Le_Sserafim",
				socials: {
					instagram: "https://www.instagram.com/hhh.e_c.v/?hl=en",
					youtube: "https://www.youtube.com/watch?v=JyS-JQryzcA",
					spotify: "https://open.spotify.com/artist/4SpbR6yFEvexJuaBpgAU5p"
				},
			}
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
			{
				name: "Minji", role: "Rapper", animalLook: "Dog", image: "images/minji.jpg",
				link: "https://en.wikipedia.org/wiki/Minji_(singer)",
				socials: {
					instagram: "https://www.instagram.com/newjeans_official/?hl=en",
					youtube: "https://www.youtube.com/watch?v=f9cViIsTarw",
					spotify: "https://open.spotify.com/artist/6HvZYsbFfjnjFrWF950C9d"
				},
			},
			{
				name: "Haerin", role: "Dancer", animalLook: "Hamster", image: "images/haerin.jpg",
				link: "https://en.wikipedia.org/wiki/Haerin",
				socials: {
					instagram: "https://www.instagram.com/njzhaerinn/",
					youtube: "https://www.youtube.com/channel/UCMki_UkHb4qSc0qyEcOHHJw",
					spotify: "https://open.spotify.com/artist/6HvZYsbFfjnjFrWF950C9d"
				},
			},
			{
				name: "Danielle", role: "Visual", animalLook: "Rabbit", image: "images/danielle.jpg",
				link: "https://en.wikipedia.org/wiki/Danielle_Marsh",
				socials: {
					instagram: "https://www.instagram.com/newjeans_official/?hl=en",
					youtube: "https://www.youtube.com/channel/UCMki_UkHb4qSc0qyEcOHHJw",
					spotify: "https://open.spotify.com/artist/6HvZYsbFfjnjFrWF950C9d"
				},
			},
			{
				name: "Hyein", role: "Vocalist", animalLook: "Cat", image: "images/hyein.jpg",
				link: "https://en.wikipedia.org/wiki/Hyein",
				socials: {
					instagram: "https://www.instagram.com/newjeans_official/?hl=en",
					youtube: "https://www.youtube.com/channel/UCMki_UkHb4qSc0qyEcOHHJw",
					spotify: "https://open.spotify.com/artist/6HvZYsbFfjnjFrWF950C9d"
				},
			}
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
			{
				name: "Moka", role: "Rapper", animalLook: "Dog", image: "images/moka.jpg",
				link: "https://en.wikipedia.org/wiki/Illit",
				socials: {
					instagram: "https://www.instagram.com/illit_official/?hl=en",
					youtube: "https://www.youtube.com/@ILLIT_official",
					spotify: "https://open.spotify.com/artist/36cgvBn0aadzOijnjjwqMN"
				},
			},
			{
				name: "Iroha", role: "Dancer", animalLook: "Hamster", image: "images/iroha.jpeg",
				link: "https://en.wikipedia.org/wiki/Illit",
				socials: {
					instagram: "https://www.instagram.com/illit_official/?hl=en",
					youtube: "https://www.youtube.com/@ILLIT_official",
					spotify: "https://open.spotify.com/artist/36cgvBn0aadzOijnjjwqMN"
				},
			},
			{
				name: "Wonhee", role: "Visual", animalLook: "Rabbit", image: "images/wonhee.jpeg",
				link: "https://en.wikipedia.org/wiki/Illit",
				socials: {
					instagram: "https://www.instagram.com/illit_official/?hl=en",
					youtube: "https://www.youtube.com/@ILLIT_official",
					spotify: "https://open.spotify.com/artist/36cgvBn0aadzOijnjjwqMN"
				},
			},
			{
				name: "Minju", role: "Vocalist", animalLook: "Cat", image: "images/minju.jpeg",
				link: "https://en.wikipedia.org/wiki/Illit",
				socials: {
					instagram: "https://www.instagram.com/illit_official/?hl=en",
					youtube: "https://www.youtube.com/@ILLIT_official",
					spotify: "https://open.spotify.com/artist/36cgvBn0aadzOijnjjwqMN"
				},
			}
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
			{
				name: "Karina", role: "Dancer", animalLook: "Cat", image: "images/karina.webp",
				link: "https://en.wikipedia.org/wiki/Karina_(South_Korean_singer)",
				socials: {
					instagram: "https://www.instagram.com/katarinabluu/?hl=en",
					youtube: "https://www.youtube.com/watch?v=pjMYA2UMF_M",
					spotify: "https://open.spotify.com/artist/2qwDjeSYANOOBFU8jwtBXx"
				},
			},
			{
				name: "Winter", role: "Visual", animalLook: "Hamster", image: "images/winter.jpg",
				link: "https://en.wikipedia.org/wiki/Winter_(singer)",
				socials: {
					instagram: "https://www.instagram.com/imwinter/?hl=en",
					youtube: "https://www.youtube.com/watch?v=vGv73cfMcTs",
					spotify: "https://open.spotify.com/artist/3mPquBmMu97Iq9TpzQ6ayI"
				},
			},
			{
				name: "Giselle", role: "Rapper", animalLook: "Dog", image: "images/giselle.jpg",
				link: "https://en.wikipedia.org/wiki/Giselle_(singer)",
				socials: {
					instagram: "https://www.instagram.com/aerichandesu/?hl=en",
					youtube: "https://www.youtube.com/watch?v=HwDxuWPFHsc",
					spotify: "https://open.spotify.com/artist/6YVMFz59CuY7ngCxTxjpxE"
				},
			},
			{
				name: "Ningning", role: "Vocalist", animalLook: "Cat", image: "images/ningning.jpg",
				link: "https://en.wikipedia.org/wiki/Ningning",
				socials: {
					instagram: "https://www.instagram.com/imnotningning/?hl=en",
					youtube: "https://www.youtube.com/watch?v=3eAOnazUdkM",
					spotify: "https://open.spotify.com/artist/5t1uryofgueHrjrryqX8vM"
				},
			}
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
			{
				name: "Bae", role: "Dancer", animalLook: "Dog", image: "images/bae.jpg",
				link: "https://en.wikipedia.org/wiki/Nmixx",
				socials: {
					instagram: "https://www.instagram.com/nmixx_official/",
					youtube: "https://www.youtube.com/channel/UCnUAyD4t2LkvW68YrDh7fDg",
					spotify: "https://open.spotify.com/artist/28ot3wh4oNmoFOdVajibBl"
				},
			},
			{
				name: "Sullyoon", role: "Visual", animalLook: "Rabbit", image: "images/sullyoon.jpg",
				link: "https://en.wikipedia.org/wiki/Nmixx",
				socials: {
					instagram: "https://www.instagram.com/nmixx_official/",
					youtube: "https://www.youtube.com/channel/UCnUAyD4t2LkvW68YrDh7fDg",
					spotify: "https://open.spotify.com/artist/28ot3wh4oNmoFOdVajibBl"
				},
			},
			{
				name: "Kyujin", role: "Rapper", animalLook: "Cat", image: "images/kyujin.jpg",
				link: "https://en.wikipedia.org/wiki/Nmixx",
				socials: {
					instagram: "https://www.instagram.com/nmixx_official/",
					youtube: "https://www.youtube.com/channel/UCnUAyD4t2LkvW68YrDh7fDg",
					spotify: "https://open.spotify.com/artist/28ot3wh4oNmoFOdVajibBl"
				},
			},
			{
				name: "Haewon", role: "Vocalist", animalLook: "Hamster", image: "images/haewon.jpg",
				link: "https://en.wikipedia.org/wiki/Nmixx",
				socials: {
					instagram: "https://www.instagram.com/nmixx_official/",
					youtube: "https://www.youtube.com/channel/UCnUAyD4t2LkvW68YrDh7fDg",
					spotify: "https://open.spotify.com/artist/28ot3wh4oNmoFOdVajibBl"
				},
			}
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
			{
				name: "Ruka", role: "Rapper", animalLook: "Cat", image: "images/ruka.jpeg",
				link: "https://en.wikipedia.org/wiki/Babymonster",
				socials: {
					instagram: "https://www.instagram.com/babymonster_ygofficial/",
					youtube: "https://www.youtube.com/channel/UCqwUnggBBct-AY2lAdI88jQ",
					spotify: "https://open.spotify.com/artist/1SIocsqdEefUTE6XKGUiVS"
				},
			},
			{
				name: "Ahyeon", role: "Vocalist", animalLook: "Dog", image: "images/ahyeon.jpeg",
				link: "https://en.wikipedia.org/wiki/Babymonster",
				socials: {
					instagram: "https://www.instagram.com/babymonster_ygofficial/",
					youtube: "https://www.youtube.com/channel/UCqwUnggBBct-AY2lAdI88jQ",
					spotify: "https://open.spotify.com/artist/1SIocsqdEefUTE6XKGUiVS"
				},
			},
			{
				name: "Chiquita", role: "Dancer", animalLook: "Hamster", image: "images/chiquita.jpg",
				link: "https://en.wikipedia.org/wiki/Babymonster",
				socials: {
					instagram: "https://www.instagram.com/babymonster_ygofficial/",
					youtube: "https://www.youtube.com/channel/UCqwUnggBBct-AY2lAdI88jQ",
					spotify: "https://open.spotify.com/artist/1SIocsqdEefUTE6XKGUiVS"
				},
			},
			{
				name: "Pharita", role: "Visual", animalLook: "Rabbit", image: "images/pharita.jpg",
				link: "https://en.wikipedia.org/wiki/Babymonster",
				socials: {
					instagram: "https://www.instagram.com/babymonster_ygofficial/",
					youtube: "https://www.youtube.com/channel/UCqwUnggBBct-AY2lAdI88jQ",
					spotify: "https://open.spotify.com/artist/1SIocsqdEefUTE6XKGUiVS"
				},
			}
		]
	},
	"youngposse": {
		name: "Young Posse",
		groupType: "Girl",
		genre: "Rap & Hip-pop",
		aesthetic: "Dark & Mysterious",
		link: "https://en.wikipedia.org/wiki/Young_Posse",
		image: "images/youngposse.jpeg",
		socials: {
			instagram: "https://www.instagram.com/youngposseup/?hl=en",
			youtube: "https://www.youtube.com/@YOUNGPOSSEUP",
			spotify: "https://open.spotify.com/artist/5bxwvIM9PX0CkpS6f1L2Ff"
		},
		members: [
			{
				name: "Sunhye", role: "Rapper", animalLook: "Hamster", image: "images/sunhye.jpg",
				link: "https://en.wikipedia.org/wiki/Young_Posse",
				socials: {
					instagram: "https://www.instagram.com/youngposseup/?hl=en",
					youtube: "https://www.youtube.com/@YOUNGPOSSEUP",
					spotify: "https://open.spotify.com/artist/5bxwvIM9PX0CkpS6f1L2Ff"
				},
			},
			{
				name: "Yeonjung", role: "Vocalist", animalLook: "Rabbit", image: "images/yeonjung.jpg",
				link: "https://en.wikipedia.org/wiki/Young_Posse",
				socials: {
					instagram: "https://www.instagram.com/youngposseup/?hl=en",
					youtube: "https://www.youtube.com/@YOUNGPOSSEUP",
					spotify: "https://open.spotify.com/artist/5bxwvIM9PX0CkpS6f1L2Ff"
				},
			},
			{
				name: "Jiana", role: "Dancer", animalLook: "Cat", image: "images/jiana.jpg",
				link: "https://en.wikipedia.org/wiki/Young_Posse",
				socials: {
					instagram: "https://www.instagram.com/youngposseup/?hl=en",
					youtube: "https://www.youtube.com/@YOUNGPOSSEUP",
					spotify: "https://open.spotify.com/artist/5bxwvIM9PX0CkpS6f1L2Ff"
				},
			},
			{
				name: "Jieun", role: "Visual", animalLook: "Hamster", image: "images/jieun.jpg",
				link: "https://en.wikipedia.org/wiki/Young_Posse",
				socials: {
					instagram: "https://www.instagram.com/youngposseup/?hl=en",
					youtube: "https://www.youtube.com/@YOUNGPOSSEUP",
					spotify: "https://open.spotify.com/artist/5bxwvIM9PX0CkpS6f1L2Ff"
				},
			}
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

	document.querySelector('.about-group-btn')?.addEventListener('click', openGroupAboutPage);
	document.querySelector('.about-bias-btn')?.addEventListener('click', openBiasAboutPage);

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

let userResults = {
	gender: "",
	genre: "",
	aesthetic: "",
	role: "",
	animalLook: ""
};

document.querySelectorAll(".quiz-1-btn").forEach(button => {
	button.addEventListener("click", () => {
		userResults.gender = button.textContent;

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


function formatText(text) {
	return text.trim().toLowerCase();
}

function getGroupMatch() {
	let matchedGroup = null;

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

function getBoyGroupMatch() {
	const genre = formatText(userResults.genre);
	const aesthetic = formatText(userResults.aesthetic);

	if (genre === "upbeat & happy" && aesthetic === "fresh & youthful") {
		return kpopGroups["Boynextdoor"];
	} else if (genre === "upbeat & happy" && aesthetic === "futuristic & edgy") {
		return kpopGroups["NCT Dream"];
	} else if (genre === "upbeat & happy" && aesthetic === "vintage & retro") {
		return kpopGroups["TXT"];
	} else if (genre === "upbeat & happy" && aesthetic === "dark & mysterious") {
		return kpopGroups["TXT"];
	} else if (genre === "chill & moody" && aesthetic === "vintage & retro") {
		return kpopGroups["Riize"];
	} else if (genre === "chill & moody" && aesthetic === "fresh & youthful") {
		return kpopGroups["Boynextdoor"];
	} else if (genre === "chill & moody" && aesthetic === "futuristic & edgy") {
		return kpopGroups["NCT 127"];
	} else if (genre === "chill & moody" && aesthetic === "dark & mysterious") {
		return kpopGroups["TXT"];
	} else if (genre === "experimental & edgy" && aesthetic === "futuristic & edgy") {
		return kpopGroups["NCT 127"];
	} else if (genre === "experimental & edgy" && aesthetic === "fresh & youthful") {
		return kpopGroups["NCT Dream"];
	} else if (genre === "experimental & edgy" && aesthetic === "vintage & retro") {
		return kpopGroups["Riize"];
	} else if (genre === "experimental & edgy" && aesthetic === "dark & mysterious") {
		return kpopGroups["Stray Kids"];
	} else if (genre === "rap & hip-pop" && aesthetic === "dark & mysterious") {
		return kpopGroups["Stray Kids"];
	} else if (genre === "rap & hip-pop" && aesthetic === "fresh & youthful") {
		return kpopGroups["Boynextdoor"];
	} else if (genre === "rap & hip-pop" && aesthetic === "vintage & retro") {
		return kpopGroups["Riize"];
	} else if (genre === "rap & hip-pop" && aesthetic === "futuristic & edgy") {
		return kpopGroups["NCT 127"];
	} else {
		return kpopGroups["TXT"];
	}
}

function getGirlGroupMatch() {
	const genre = formatText(userResults.genre);
	const aesthetic = formatText(userResults.aesthetic);

	if (genre === "upbeat & happy" && aesthetic === "vintage & retro") {
		return kpopGroups["Le sserafim"];
	} else if (genre === "upbeat & happy" && aesthetic === "futuristic & edgy") {
		return kpopGroups["nmixx"];
	} else if (genre === "upbeat & happy" && aesthetic === "dark & mysterious") {
		return kpopGroups["aespa"];
	} else if (genre === "upbeat & happy" && aesthetic === "fresh & youthful") {
		return kpopGroups["illit"];
	} else if (genre === "chill & moody" && aesthetic === "vintage & retro") {
		return kpopGroups["njz"];
	} else if (genre === "chill & moody" && aesthetic === "fresh & youthful") {
		return kpopGroups["illit"];
	} else if (genre === "chill & moody" && aesthetic === "futuristic & edgy") {
		return kpopGroups["nmixx"];
	} else if (genre === "chill & moody" && aesthetic === "dark & mysterious") {
		return kpopGroups["babymonster"];
	} else if (genre === "experimental & edgy" && aesthetic === "futuristic & edgy") {
		return kpopGroups["aespa"];
	} else if (genre === "experimental & edgy" && aesthetic === "fresh & youthful") {
		return kpopGroups["Le sserafim"];
	} else if (genre === "experimental & edgy" && aesthetic === "vintage & retro") {
		return kpopGroups["njz"];
	} else if (genre === "experimental & edgy" && aesthetic === "dark & mysterious") {
		return kpopGroups["nmixx"];
	} else if (genre === "rap & hip-pop" && aesthetic === "dark & mysterious") {
		return kpopGroups["babymonster"];
	} else if (genre === "rap & hip-pop" && aesthetic === "fresh & youthful") {
		return kpopGroups["Le sserafim"];
	} else if (genre === "rap & hip-pop" && aesthetic === "vintage & retro") {
		return kpopGroups["youngposse"];
	} else if (genre === "rap & hip-pop" && aesthetic === "futuristic & edgy") {
		return kpopGroups["aespa"];
	} else {
		return kpopGroups["aespa"];
	}
}

function getAnyGroupMatch() {
	const genre = formatText(userResults.genre);
	const aesthetic = formatText(userResults.aesthetic);

	if (genre === "upbeat & happy" && aesthetic === "fresh & youthful") {
		return kpopGroups["TWS"];
	} else if (genre === "upbeat & happy" && aesthetic === "futuristic & edgy") {
		return kpopGroups["NCT Dream"];
	} else if (genre === "upbeat & happy" && aesthetic === "dark & mysterious") {
		return kpopGroups["aespa"];
	} else if (genre === "upbeat & happy" && aesthetic === "vintage & retro") {
		return kpopGroups["aespa"];
	} else if (genre === "chill & moody" && aesthetic === "vintage & retro") {
		return kpopGroups["TXT"];
	} else if (genre === "chill & moody" && aesthetic === "fresh & youthful") {
		return kpopGroups["illit"];
	} else if (genre === "chill & moody" && aesthetic === "dark & mysterious") {
		return kpopGroups["babymonster"];
	} else if (genre === "chill & moody" && aesthetic === "futuristic & edgy") {
		return kpopGroups["NCT 127"];
	} else if (genre === "rap & hip-pop" && aesthetic === "vintage & retro") {
		return kpopGroups["youngposse"];
	} else if (genre === "rap & hip-pop" && aesthetic === "fresh & youthful") {
		return kpopGroups["Boynextdoor"];
	} else if (genre === "rap & hip-pop" && aesthetic === "dark & mysterious") {
		return kpopGroups["Stray Kids"];
	} else if (genre === "rap & hip-pop" && aesthetic === "futuristic & edgy") {
		return kpopGroups["aespa"];
	} else if (genre === "experimental & edgy" && aesthetic === "vintage & retro") {
		return kpopGroups["njz"];
	} else if (genre === "experimental & edgy" && aesthetic === "dark & mysterious") {
		return kpopGroups["nmixx"];
	} else if (genre === "experimental & edgy" && aesthetic === "fresh & youthful") {
		return kpopGroups["NCT Dream"];
	} else if (genre === "experimental & edgy" && aesthetic === "futuristic & edgy") {
		return kpopGroups["NCT 127"];
	} else {
		return kpopGroups["njz"];
	}
}

function showGroupResult() {
	const matchedGroup = getGroupMatch();

	if (matchedGroup) {
		document.querySelector(".result-name").textContent = matchedGroup.name;
		document.querySelector(".result-images").src = matchedGroup.image;
		document.querySelector(".result-group-btn-list a").href = matchedGroup.link;

		const resultSection = document.querySelector(".result-group");
		resultSection.style.backgroundImage = `url(${matchedGroup.image})`;
		resultSection.style.backgroundSize = "cover";
		resultSection.style.backgroundPosition = "center";
	}
}

document.querySelectorAll(".quiz-3-btn").forEach(button => {
	button.addEventListener("click", () => {
		userResults.aesthetic = button.textContent;
		showGroupResult();
		showSection(sections[4]);
	});
});

let currentMatchedGroup = null;

function showGroupResult() {
	currentMatchedGroup = getGroupMatch();

	if (currentMatchedGroup) {
		document.querySelector(".result-name").textContent = currentMatchedGroup.name;
		document.querySelector(".result-images").src = currentMatchedGroup.image;
	}

	const socialLinks = document.querySelectorAll('.result-group .social-btn a');
	if (currentMatchedGroup.socials) {
		socialLinks[0].href = currentMatchedGroup.socials.instagram;
		socialLinks[1].href = currentMatchedGroup.socials.youtube;
		socialLinks[2].href = currentMatchedGroup.socials.spotify;
	}
}

function openGroupAboutPage() {
	if (currentMatchedGroup && currentMatchedGroup.link) {
		window.open(currentMatchedGroup.link, "_blank");
	}
}

function openBiasAboutPage() {
	if (currentMatchedBias && currentMatchedBias.link) {
		window.open(currentMatchedBias.link, "_blank");
	}
}

function getBiasMatch() {
	if (!currentMatchedGroup) return null;

	const role = formatText(userResults.role);
	const animalLook = formatText(userResults.animalLook);

	let bestMatch = null;

	for (const member of currentMatchedGroup.members) {
		if (formatText(member.role) === role && formatText(member.animalLook) === animalLook) {
			return member;
		}
	}

	for (const member of currentMatchedGroup.members) {
		if (formatText(member.role) === role) {
			return member;
		}
	}

	for (const member of currentMatchedGroup.members) {
		if (formatText(member.animalLook) === animalLook) {
			return member;
		}
	}

	return currentMatchedGroup.members[0];
}

let currentMatchedBias = null;

function showBiasResult() {
	currentMatchedBias = getBiasMatch();

	if (currentMatchedBias) {
		document.querySelector(".result-bias .result-name").textContent = currentMatchedBias.name;

		document.querySelector(".bias-result-image").src = currentMatchedBias.image;

		const biasSection = document.querySelector(".result-bias");
		biasSection.style.backgroundSize = "cover";
		biasSection.style.backgroundPosition = "center";

		const socialLinks = document.querySelectorAll('.result-bias .social-btn a');
		if (currentMatchedBias.socials) {
			socialLinks[0].href = currentMatchedBias.socials.instagram;
			socialLinks[1].href = currentMatchedBias.socials.youtube;
			socialLinks[2].href = currentMatchedBias.socials.spotify;
		}
	}
}

document.querySelectorAll(".quiz-4-btn").forEach(button => {
	button.addEventListener("click", () => {
		userResults.role = button.textContent;
		showSection(sections[5]);
	});
});

document.querySelectorAll(".quiz-5-btn").forEach(button => {
	button.addEventListener("click", () => {
		userResults.animalLook = button.textContent;
		showBiasResult();
		showSection(sections[7]);
	});
});

document.addEventListener("DOMContentLoaded", () => {
	document.querySelectorAll(".share-btn-twitter").forEach(button => {
		button.addEventListener("click", () => {
			const shareText = "Check out my perfect K-pop match!";
			const shareUrl = window.location.href;

			const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
			window.open(twitterUrl, "_blank");
		});
	});
});

