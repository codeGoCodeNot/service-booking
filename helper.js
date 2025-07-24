export const themeToggle = () => {
  const root = document.documentElement;
  const newTheme = root.className === "dark" ? "light" : "dark";
  root.className = newTheme;

  document.querySelector(".theme-toggle span").textContent =
    newTheme === "dark" ? "Light Theme" : "Dark Theme";
};

export const popUp = () => {
  const bookBtns = document.querySelectorAll(".bookbtn");
  const content = document.querySelectorAll(".content-container");

  bookBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      const popup = document.createElement("div");
      popup.classList.add("popup");
      popup.innerHTML = `
      <h3 class="popup-title">Book Now!</h3>
        <p><strong>No cancellations</strong> once booked — secure your spot confidently.</p>
        <p>Enjoy <strong>easy installment plans</strong> for your convenience!</p>
        <p class="innerPara"><strong>⚡ Get 10% OFF</strong> for early reservations. Don’t miss out! 💦💦💦</p>
        `;

      const closeBtn = document.createElement("button");
      closeBtn.classList.add("close-btn");
      closeBtn.textContent = "x";
      closeBtn.addEventListener("click", () => {
        popup.remove();
      });

      const payBtn = document.createElement("button");
      payBtn.classList.add("pay-btn");
      payBtn.textContent = "Pay";
      payBtn.style.width = "100px";

      popup.append(payBtn);
      popup.append(closeBtn);
      content[index].append(popup);
    });
  });
};
