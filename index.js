const themeToggle = () => {
  const root = document.documentElement;
  const newTheme = root.className === "dark" ? "light" : "dark";
  root.className = newTheme;

  document.querySelector(".theme-toggle span").textContent =
    newTheme === "dark" ? "Light Theme" : "Dark Theme";
};

document.querySelector(".theme-toggle").addEventListener("click", themeToggle);
