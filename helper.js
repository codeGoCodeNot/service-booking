export const themeToggle = () => {
  const root = document.documentElement;
  const newTheme = root.className === "dark" ? "light" : "dark";
  root.className = newTheme;

  document.querySelector(".theme-toggle span").textContent =
    newTheme === "dark" ? "Light Theme" : "Dark Theme";
};
