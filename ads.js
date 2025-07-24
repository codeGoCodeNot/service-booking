const adImg = document.querySelector(".ad-img");
const adsPopup = document.querySelector(".ads-popup");
const ads = [
  {
    img: "https://s7d1.scene7.com/is/image/mcdonalds/1PUBHERSHEYSmoresMcFlurry:1-column-desktop?resmode=sharp2",
    link: "https://spankbank.com/",
  },
  {
    img: "https://www.shutterstock.com/image-photo/bangi-malaysia-november-16-2019-600nw-1565709685.jpg",
    link: "https://www.pornhub.com/",
  },
  {
    img: "https://c0.wallpaperflare.com/preview/28/600/957/pair-of-black-white-and-red-air-jordan-1-shoes.jpg",
    link: "https://www.bestjavporn.com/",
  },
  {
    img: "https://c1.wallpaperflare.com/preview/659/106/422/casino-arcade-slot-machines-machines-gambling-risk.jpg",
    link: "https://www.casinoplus.com.ph/",
  },
  {
    img: "https://s7d1.scene7.com/is/image/mcdonalds/SnackWrap_COM_1Pub:1-column-desktop?resmode=sharp2",
    link: "https://www.mcdonalds.com/us/en-us.html",
  },
];

let adVisible = false;
let currentAd = null;

export const showAd = () => {
  if (adVisible) return;
  adVisible = true;

  if (!currentAd) {
    const randomIndex = Math.floor(Math.random() * ads.length);
    currentAd = ads[randomIndex];
  }

  adImg.src = currentAd.img;
  adImg.onclick = () => window.open(selectAd.link, "_blank");

  adsPopup.style.display = "block";
};

export const closeAds = () => {
  const closeBtn = document.querySelector(".close-ad");

  closeBtn.addEventListener("click", (event) => {
    const chance = Math.floor(Math.random() * 3);
    if (chance <= 1) {
      const randomIndex = Math.floor(Math.random() * ads.length);
      window.open(ads[randomIndex].link, "_blank");
    } else {
      adsPopup.style.display = "none";
    }

    adVisible = false;
    currentAd = null;
    event.preventDefault();
  });
};
