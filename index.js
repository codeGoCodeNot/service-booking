const themeToggle = () => {
  const root = document.documentElement;
  const newTheme = root.className === "dark" ? "light" : "dark";
  root.className = newTheme;

  document.querySelector(".theme-toggle span").textContent =
    newTheme.charAt(0).toUpperCase() + newTheme.substring(1);
};

document.querySelector(".theme-toggle").addEventListener("click", themeToggle);
