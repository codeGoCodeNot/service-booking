import { themeToggle } from "./helper.js";
import { popUp } from "./helper.js";
import { showAd, closeAds } from "./ads.js";

document.querySelector(".theme-toggle").addEventListener("click", themeToggle);
popUp();
closeAds();
showAd();
