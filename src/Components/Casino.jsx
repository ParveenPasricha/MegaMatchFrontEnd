import React, { useState, useEffect } from "react";
import { GrHistory } from "react-icons/gr";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import Footer from "./Footer";

const Casino = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const handleGameClick=(category)=>{
    console.log(`Click toh aaha hai ${category}`)
  }
  const CasinoSlides = [
    {
      text: "1 One",
      subtext: "Download and play",
      image:
        "https://media.istockphoto.com/id/1324960857/vector/vegas-casino-games-background-concept-vegas-games-banner-illustration.jpg?s=1024x1024&w=is&k=20&c=Yk6O4Gg07iNvwoivdefp71bDx1usfBxtEFP41iyh278=",
    },
    {
      text: "2 Two",
      subtext: "Anywhere, Anytime",
      image:
        "https://v3.traincdn.com/genfiles/cms/designed_banners/192/image/7385d585839bf9a54d92fb4730cb2585.png",
    },
    {
      text: "3 Three",
      subtext: "Anywhere, Anytime",
      image:
        "https://v3.traincdn.com/genfiles/cms/designed_banners/192/image/eabf7727aedf813c4762029eeacc70af.png",
    },
  ];

  const Games = [
    {
      image: "https://v3.traincdn.com/genfiles/slots/games/1084/img77985.jpeg",
      category: "ALL",
    },
    {
      image: "https://v3.traincdn.com/genfiles/slots/games/1018/img98330.jpeg",
      category : "HOT GAMES"
    },
    {
      image: "https://v3.traincdn.com/genfiles/third-party-files/fd7e4733ecb3e48db7f26b995871f352/Battle-Rage.jpg",
      category : "NEW"
    },
    {
      image: "https://v3.traincdn.com/genfiles/third-party-files/a1cb073aa76774e552e676d75040b5d7/101170.jpg",
      category : "NEW"
    },
    {
      image: "https://v3.traincdn.com/genfiles/slots/games/887/img78707.jpeg",
      category: "NEW",
    },
    {
      image: "https://v3.traincdn.com/genfiles/slots/games/1380/img88601.jpeg",
      category: "POPULAR",
    },
    {
      image:
        "https://v3.traincdn.com/genfiles/third-party-files/d3968b984a1534381b5c29b86abf262b/Fruity-Diamond-2.jpg",
      category: "HOT GAMES",
    },
    {
      image:
        "https://v3.traincdn.com/genfiles/third-party-files/d683c6b8c5173333a5dd28bb4f760988/Chicken-Road.jpg",
      category: "MEGA WINS",
    },
    {
      image:
        "https://v3.traincdn.com/genfiles/third-party-files/d683c6b8c5173333a5dd28bb4f760988/Chicken-Road.jpg",
      category: "JACKPOT GAME",
    },
    {
      image: "https://v3.traincdn.com/genfiles/slots/games/1084/img77985.jpeg",
      category: "VIDEOSLOTS & MINI GAMES",
    },
    {
      image: "https://v3.traincdn.com/genfiles/slots/games/887/img78707.jpeg",
      category: "ROULETTE",
    },
    {
      image: "https://v3.traincdn.com/genfiles/slots/games/1380/img88601.jpeg",
      category: "CRASH & AVIATOR",
    },
    {
      image:
        "https://v3.traincdn.com/genfiles/third-party-files/d3968b984a1534381b5c29b86abf262b/Fruity-Diamond-2.jpg",
      category: "CARD GAMES",
    },
    {
      image: "https://v3.traincdn.com/genfiles/slots/games/38/img65731.jpeg",
      category: "NEW"
    },
    {
      image: "https://v3.traincdn.com/genfiles/slots/games/959/img66233.jpeg",
      category: "NEW"
    },
    {
      image: "https://v3.traincdn.com/genfiles/third-party-files/02076a290ae26673e3b1ef90428fae01/CosmoX.jpg",
      category: "POPULAR"
    },
    {
      image: "https://v3.traincdn.com/genfiles/third-party-files/2d73ee7c5065cee92535dd004df7b097/Savana-Fruits.jpg",
      category: "CRASH & AVIATOR"
    },
    {
      image: "https://v3.traincdn.com/genfiles/third-party-files/2181807422715546a399d646e5ca7c12/133910.jpg",
      category: "JACKPOT GAME"
    },
    {
      image: "https://v3.traincdn.com/genfiles/third-party-files/21ba1ce1dbc251e219089e16a420320f/Elephant.jpg",
      category: "NEW"
    },
    {
      image: "https://v3.traincdn.com/genfiles/slots/games/871/img64657.jpeg",
      category: "MEGA WINS"
    },
    {
      image: "https://v3.traincdn.com/genfiles/third-party-files/223497cd6c17ac9efbcce2f2fcdcbcbf/129360.jpg",
      category: "MEGA WINS"
    },
    {
      image: "https://v3.traincdn.com/genfiles/third-party-files/99d9ee73bb992d0ea652e36484b0bae3/Royalty-of-olympus.jpg",
      category: "HOT GAMES"
    },
    {
      image: "https://v3.traincdn.com/genfiles/third-party-files/2164c1f38fc3de236174fff597e5ca53/64626.jpg",
      category: "CRASH & AVIATOR"
    },
    {
      image: "https://v3.traincdn.com/genfiles/slots/games/871/img64657.jpeg",
      category: "BONUS WAGERING"
    },
    {
      image: "https://v3.traincdn.com/genfiles/slots/games/525/img38253.jpeg",
      category: ""
    },
    {
      image: "https://v3.traincdn.com/genfiles/slots/games/871/img65404.jpeg",
      category: ""
    },
    {
      image: "https://v3.traincdn.com/genfiles/slots/games/887/img76454.jpeg",
      category: ""
    },
    {
      image: "https://v3.traincdn.com/genfiles/slots/games/1093/img81137.jpeg",
      category: ""
    },
    {
      image: "https://v3.traincdn.com/genfiles/slots/games/230/img64945.jpeg",
      category: ""
    },
    {
      image: "https://v3.traincdn.com/genfiles/slots/games/871/img63437.jpeg",
      category: ""
    },
    {
      image: "https://v3.traincdn.com/genfiles/slots/games/1081/img67436.jpeg",
      category: ""
    },
    {
      image: "https://v3.traincdn.com/genfiles/slots/games/573/img66329.jpeg",
      category: "BONUS WAGERING"
    },
    {
      image: "https://v3.traincdn.com/genfiles/slots/games/958/img71251.jpeg",
      category: "POPULAR"
    },{
      image: "https://v3.traincdn.com/genfiles/slots/games/227/img49587.jpeg",
      category: "JACKPOT GAME"
    },
    {
      image: "https://v3.traincdn.com/genfiles/third-party-files/fd7e4733ecb3e48db7f26b995871f352/Battle-Rage.jpg",
      category: "BONUS WAGERING"
    },
    {
      image: "https://v3.traincdn.com/genfiles/slots/games/227/img25039.jpeg",
      category: ""
    },
    {
      image: "https://v3.traincdn.com/genfiles/third-party-files/343aad8ed11adf57b38a53fe53001afe/134111.jpg",
      category: ""
    },
    {
      image: "https://v3.traincdn.com/genfiles/third-party-files/eabac2d36554d17dd4d9e7ffccdf843d/Frame42.jpg",
      category: "JACKPOT GAME"
    },
    {
      image: "https://v3.traincdn.com/genfiles/third-party-files/25b579f2dbd134ec800ee51f39206b5b/CosmoX.jpg",
      category: ""
    },
    {
      image: "https://v3.traincdn.com/genfiles/slots/games/1082/img67578.jpeg",
      category: "BONUS WAGERING"
    },
    {
      image: "https://v3.traincdn.com/genfiles/slots/games/38/img65731.jpeg",
      category: ""
    },
    {
      image: "https://v3.traincdn.com/genfiles/third-party-files/e93d28fb9e77fac603c77480661999f5/Hit-Coins-2.jpg",
      category: "BONUS WAGERING"
    },
    {
      image: "https://v3.traincdn.com/genfiles/slots/games/1077/img106408.jpeg",
      category: "POPULAR"
    },
    {
      image: "https://v3.traincdn.com/genfiles/third-party-files/21ba1ce1dbc251e219089e16a420320f/Elephant.jpg",
      category: "BONUS WAGERING"
    },
    {
      image: "https://v3.traincdn.com/genfiles/slots/games/1102/img69076.jpeg",
      category: "POPULAR"
    },
    {
      image: "https://v3.traincdn.com/genfiles/third-party-files/61226e8f7c2d9bd8e2b18c228c2fcf61/125091.jpg",
      category: ""
    },{
      image: "https://v3.traincdn.com/genfiles/slots/games/959/img66233.jpeg",
      category: ""
    },
    {
      image: "https://v3.traincdn.com/genfiles/third-party-files/48b8667a6037f214e3eef428c0025406/PiggyTap2.jpg",
      category: "JACKPOT GAME"
    },
    {
      image: "https://v3.traincdn.com/genfiles/slots/games/736/img45401.jpeg",
      category: "POPULAR"
    },
    {
      image: "https://v3.traincdn.com/genfiles/slots/games/850/img64484.jpeg",
      category: ""
    },
    {
      image: "https://v3.traincdn.com/genfiles/slots/games/1086/img97250.jpeg",
      category: "ROULETTE"
    },
    {
      image: "https://v3.traincdn.com/genfiles/slots/games/648/img66632.jpeg",
      category: "BONUS WAGERING"
    },
    {
      image: "https://v3.traincdn.com/genfiles/slots/games/1277/img81828.jpeg",
      category: "NEW"
    },
    {
      image: "https://v3.traincdn.com/genfiles/third-party-files/ee9fb7e1b393a731207e6fcd2c5d2aa2/Magic-Pipes_301180.jpg",
      category: "JACKPOT GAME"
    },
    {
      image: "https://v3.traincdn.com/genfiles/third-party-files/908537bfd9b1e985436ede5b2225e6e4/Plinko-1000.jpg",
      category: ""
    },
    {
      image: "https://v3.traincdn.com/genfiles/third-party-files/a1cb073aa76774e552e676d75040b5d7/101170.jpg",
      category: "JACKPOT GAME"
    },
    {
      image: "https://v3.traincdn.com/genfiles/slots/games/804/img49183.jpeg",
      category: ""
    },
    {
      image: "https://v3.traincdn.com/genfiles/third-party-files/6b2138b473edee0c1ca6546b6bb2a6c7/107938.jpg",
      category: "ROULETTE"
    },
    {
      image: "https://v3.traincdn.com/genfiles/slots/games/30/img94435.jpeg",
      category: ""
    },{
      image: "https://v3.traincdn.com/genfiles/slots/games/1018/img98330.jpeg",
      category: "NEW"
    },
    {
      image: "https://v3.traincdn.com/genfiles/slots/games/871/img54434.jpeg",
      category: "ROULETTE"
    },
    {
      image: "https://v3.traincdn.com/genfiles/third-party-files/45e77a663c3ba9321307e4982ffa397b/107459.jpg",
      category: "BONUS WAGERING"
    },
    {
      image: "https://v3.traincdn.com/genfiles/slots/games/137/img92004.jpeg",
      category: "ASIAN GAMES"
    },
    {
      image: "https://v3.traincdn.com/genfiles/third-party-files/9860330e64df1e0e57a656f6e82fab08/ThunderAndLove.jpg",
      category: "ASIAN GAMES"

    },
    {
      image: "https://v3.traincdn.com/genfiles/third-party-files/5fdb61ef4381d946a732048d9588ae23/129765.jpg",
      category: "VIDEOSLOTS & MINI GAMES"
    },
    {
      image: "https://v3.traincdn.com/genfiles/third-party-files/b700df481887c28dc07829bf2e6ba3ca/Cash_Fishin.jpg",
      category: ""
    },
    {
      image: "https://v3.traincdn.com/genfiles/third-party-files/99d0311c9a19a04b2cd7b26381b38bc3/131016.jpg",
      category: "JACKPOT GAME"
    },
    {
      image: "https://v3.traincdn.com/genfiles/third-party-files/a8d9cea04b4fdf7e5e8314e3d5c7b1c1/107389.jpg",
      category: "BONUS WAGERING"
    },
    {
      image: "https://v3.traincdn.com/genfiles/third-party-files/c5e722e7ae995cf5bf719473ec7f44b2/Dr-Rock--the-Riff-Reactor.jpg",
      category: "ROULETTE"
    },
    {
      image: "https://v3.traincdn.com/genfiles/third-party-files/2181807422715546a399d646e5ca7c12/133910.jpg",
      category: "NEW"
    },
    {
      image: "https://v3.traincdn.com/genfiles/slots/games/4/img87195.jpeg",
      category: "VIDEOSLOTS & MINI GAMES"
    },
    {
      image: "https://v3.traincdn.com/genfiles/third-party-files/8ae5033990a028fe99f4ad73bb74dd96/Fruity-Diamonds.jpg",
      category: "NEW"
    },{
      image: "https://v3.traincdn.com/genfiles/slots/games/663/img47215.jpeg",
      category: "JACKPOT GAME"
    },
    {
      image: "https://v3.traincdn.com/genfiles/slots/games/1102/img69089.jpeg",
      category: "ASIAN GAMES"
    },
    {
      image: "https://v3.traincdn.com/genfiles/third-party-files/6c82e3814eaf015bd4d1506754a28397/125956.jpg",
      category: "BONUS WAGERING"
    },
    {
      image: "https://v3.traincdn.com/genfiles/slots/games/20/img65154.jpeg",
      category: "NEW"
    },
    {
      image: "https://v3.traincdn.com/genfiles/third-party-files/efebeb1f5820faf840c927091cc56fae/101185.jpg",
      category: "JACKPOT GAME"
    },
    {
      image: "https://v3.traincdn.com/genfiles/slots/games/856/img61682.jpeg",
      category: "ROULETTE"
    },
    {
      image: "https://v3.traincdn.com/genfiles/slots/games/900/img71523.jpeg",
      category: "BONUS WAGERING"
    },
    {
      image: "https://v3.traincdn.com/genfiles/slots/games/900/img70729.jpeg",
      category: "ROULETTE"
    },
    {
      image: "https://v3.traincdn.com/genfiles/slots/games/927/img56758.jpeg",
      category: "BONUS WAGERING"
    },
    {
      image: "https://v3.traincdn.com/genfiles/slots/games/648/img57617.jpeg",
      category: "BONUS WAGERING"
    },
    {
      image: "https://v3.traincdn.com/genfiles/third-party-files/4437a167ab91a4b78af952bab0f7cfc0/67551.jpg",
      category: "GAMES"
    },
    {
      image: "https://v3.traincdn.com/genfiles/slots/games/1065/img68079.jpeg",
      category: "NEW"
    },
    {
      image: "https://v3.traincdn.com/genfiles/slots/games/30/img1193.jpg",
      category: "ASIAN GAMES"
    },{
      image: "https://v3.traincdn.com/genfiles/slots/games/20/img62541.jpeg",
      category: "VIDEOSLOTS & MINI GAMES"
    },
    {
      image: "https://v3.traincdn.com/genfiles/third-party-files/6b57fcfadc725ccd0a22528407a65679/Cash-me-if-you-can.jpg",
      category: "JACKPOT GAME"
    },
    {
      image: "https://v3.traincdn.com/genfiles/third-party-files/5893cd643f276956a853dc1bb673c826/OceanLegacy.jpg",
      category: "VIDEOSLOTS & MINI GAMES"
    },
    {
      image: "https://v3.traincdn.com/genfiles/slots/games/61/img75108.jpeg",
      category: "ASIAN GAMES"
    }
  ];

  const categories = [
    "ALL",
    "HOT GAMES",
    "CRASH & AVIATOR",
    "BONUS WAGERING",
    "JACKPOT GAME",
    "ASIAN GAMES",
    "NEW",
    "VIDEOSLOTS & MINI GAMES",
    "POPULAR",
    "ROULETTE",
    "MEGA WINS",
    "CARD GAMES",
  ];

  const Provider = [
    {
      image:
        "https://v3.traincdn.com/genfiles/third-party-files/aa82886cd981528149619fabaaef3e33/BarbaraBangmono.svg",
    },
    {
      image:
        "https://v3.traincdn.com/genfiles/third-party-files/9f68aaaad208662aa3064da0cff73bd7/Evolution_mono.svg",
    },
    {
      image:
        "https://v3.traincdn.com/genfiles/third-party-files/33b5aec19fd1756a61d881a7fa055f89/SpinomenalMobule_mono.svg",
    },
    {
      image:
        "https://v3.traincdn.com/genfiles/third-party-files/03652c7da707cbed18a7713cce8ee02a/InOut_mono.svg",
    },
    {
      image:
        "https://v3.traincdn.com/genfiles/third-party-files/d5c44403d7bbd5975fe22cc31253851e/Mancala_mono.svg",
    },
    {
      image:
        "https://v3.traincdn.com/genfiles/third-party-files/0241a262250679b748488e7e11229b42/3_oaks.svg",
    },
    {
      image:
        "https://v3.traincdn.com/genfiles/third-party-files/28516950951d6a1183db345fdbd73cda/Red_Tiger_mono-01.svg",
    },
    {
      image:
        "https://v3.traincdn.com/genfiles/third-party-files/8f8af10ed164d403205c6feee8b64611/Winspinity_mono.svg",
    },
    {
      image: "https://v3.traincdn.com/genfiles/third-party-files/9fb1dacba3d0c4d93625c950b7b5df7e/Golden_Race_mono.svg"
    },
    {
      image: "https://v3.traincdn.com/genfiles/third-party-files/8fa9d1dcaec24a51d65f9f3ffd12786d/Playson_mono.svg"
    },
    {
      image: "https://v3.traincdn.com/genfiles/third-party-files/246d02ac833e33f038b4a5edf8cb0401/Mega7_mono.svg"
    },
    {
      image: "https://v3.traincdn.com/genfiles/third-party-files/8f8af10ed164d403205c6feee8b64611/Winspinity_mono.svg"
    },
    {
      image: "https://v3.traincdn.com/genfiles/third-party-files/9c598dd1305ecdae22305712f950f324/Netentmono.svg"
    },
    {
      image: "https://v3.traincdn.com/genfiles/third-party-files/7dc48ec7f4a16f0390dca879ace9eda7/Arisen_Gaming_mono.svg"
    },
    {
      image: "https://v3.traincdn.com/genfiles/third-party-files/33b5aec19fd1756a61d881a7fa055f89/SpinomenalMobule_mono.svg"
    },
    {
      image: "https://v3.traincdn.com/genfiles/third-party-files/734d7efb4e51916baf6f98ff8177edfa/Fazi_mono.svg"
    },
    {
      image: "https://v3.traincdn.com/genfiles/third-party-files/6bf3c325f8644a406f1f91cdbc1123ff/Voltent_mono.svg"
    },
    {
      image: "https://v3.traincdn.com/genfiles/third-party-files/d5c44403d7bbd5975fe22cc31253851e/Mancala_mono.svg"
    },
    {
      image: "https://v3.traincdn.com/genfiles/third-party-files/9f68aaaad208662aa3064da0cff73bd7/Evolution_mono.svg"
    },
    {
      image: "https://v3.traincdn.com/genfiles/third-party-files/78c4557477afad64c6e8678515c3388e/Endorphina_mono.svg"
    },
    ,
    {
      image: "https://v3.traincdn.com/genfiles/third-party-files/5d6874ffec12d6ff2a82de4ee1ea18f4/Octoplay_mono2.svg"
    },
    {
      image: "https://v3.traincdn.com/genfiles/third-party-files/5d6874ffec12d6ff2a82de4ee1ea18f4/Octoplay_mono2.svg"
    },
    {
      image: ""
    },
    {
      image: "https://v3.traincdn.com/genfiles/third-party-files/d3a5a469eb9e8111d50840ddfcc44105/NoLimit_City_Slots_Ireland_mono.svg"
    },
    {
      image: "https://v3.traincdn.com/genfiles/third-party-files/fddf826121f72fb7d08e1639156e7a35/NGMGame_mono.svg"
    },
    {
      image: "https://v3.traincdn.com/genfiles/third-party-files/0693acd3e1408388d4075219c6977b65/Gambit_mono.svg"
    },
    {
      image: "https://v3.traincdn.com/genfiles/third-party-files/1c99693fa93f1995e94b9c70f72c1218/Netgame_mono.svg"
    },
    {
      image: "https://v3.traincdn.com/genfiles/third-party-files/71de39b15ff52f208f2e0c3542d3d242/Smartsoft_mono.svg"
    },
    {
      image: "https://v3.traincdn.com/genfiles/third-party-files/349316591945e23f8e0e61e5f0fbeda5/Pragmatic_Play_mono.svg"
    },
    {
      image: "https://v3.traincdn.com/genfiles/third-party-files/51475265fcfd455dab2355d684186cd8/Ruby_Play_mono.svg"
    },
    {
      image: "https://v3.traincdn.com/genfiles/third-party-files/0241a262250679b748488e7e11229b42/3_oaks.svg"
    }    
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CasinoSlides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 min-h-screen text-white p-6">
      {/* Slider */}
      <div className="relative w-full h-56 sm:h-72 md:h-96 lg:h-[450px] overflow-hidden rounded-lg shadow-lg">
        <img
          src={CasinoSlides[currentSlide].image}
          alt="casino banner"
          className="w-full h-full object-cover"
        />
        <button
          onClick={() =>
            setCurrentSlide((prev) =>
              prev === 0 ? CasinoSlides.length - 1 : prev - 1
            )
          }
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-yellow-500 p-2 rounded-full"
        >
          <FaArrowLeft size={20} />
        </button>
        <button
          onClick={() =>
            setCurrentSlide((prev) => (prev + 1) % CasinoSlides.length)
          }
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-yellow-500 p-2 rounded-full"
        >
          <FaArrowRight size={20} />
        </button>
      </div>
      {/* Slider End */}

      <div className="flex flex-col md:flex-row gap-6 mt-6">
        {/* Sidebar */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md w-full md:w-1/4">
          <button className="w-full py-2 bg-yellow-500 rounded-lg text-black font-semibold">
            Clear Filter
          </button>
          <div className="flex justify-between items-center mt-4">
            <div className="text-center">
              <GrHistory className="text-4xl text-yellow-400 mx-auto" />
              <p>Recent</p>
            </div>
            <div className="text-center">
              <FaRegStar className="text-4xl text-yellow-400 mx-auto" />
              <p>Favorites</p>
            </div>
          </div>
          <h1 className="mt-8 text-center w-full py-2 bg-yellow-500 rounded-lg text-black font-semibold">
            Collection
          </h1>

          {/* Categories with radio buttons */}
          <div className="mt-6">
            <ul>
              {categories.map((category) => (
                <li
                  key={category}
                  className={`flex items-center gap-2 cursor-pointer p-2 rounded-md hover:bg-gray-800 transition-all ${
                    selectedCategory === category
                      ? "text-red-500 font-bold"
                      : ""
                  }`}
                  onClick={() => handleCategoryChange(category)}
                >
                  <input
                    type="radio"
                    name="category"
                    className="hidden"
                    checked={selectedCategory === category}
                    onChange={() => handleCategoryChange(category)}
                  />
                  <span
                    className={`w-3 h-3 rounded-full border border-gray-500 inline-block transition-all ${
                      selectedCategory === category
                        ? "bg-red-500 border-red-500"
                        : ""
                    }`}
                  ></span>
                  {category}
                </li>
              ))}
            </ul>
          </div>

          <h1 className="mt-8 text-center w-full py-2 bg-yellow-500 rounded-lg text-black font-semibold">
            Provider
          </h1>

          {/* Provider Logos */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            {Provider.map((provider, index) => (
              <div
                key={index}
                className="bg-gray-200 hover:underline hover:bg-gradient-to-t from-purple-500 to-white p-4 rounded-lg shadow-md"
              >
                <div className="relative">
                  <img
                    src={provider.image}
                    alt="provider"
                    className="transition-all duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-500 transform scale-x-0 hover:scale-x-100 transition-transform duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Game Grid */}
        <div
          style={{ height: "50%" }}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full"
        >
          {Games.filter(
            (game) =>
              selectedCategory === "ALL" || game.category === selectedCategory
          ).map((game, index) => (
            <div
              key={index}
              className="bg-gray-800 mb-4 p-4 rounded-lg shadow-md hover:shadow-xl transition-all"
            >
              <img
                src={game.image}
                alt="game"
                className="w-full h-40 object-cover rounded-md"
                onClick={()=>handleGameClick(game.category)}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Casino;
