const buttonPrimary = document.querySelectorAll(".button");

buttonPrimary.forEach((button) => {
  button.addEventListener("mousedown", () => {
    button.classList.remove("rebound", "relax");
    button.classList.add("clicked");
  });

  button.addEventListener("mouseup", () => {
    button.classList.remove("clicked");
    button.classList.add("rebound");

    setTimeout(() => {
      button.classList.remove("rebound");
      button.classList.add("relax");
    }, 150); // slightly shorter than rebound transition

    setTimeout(() => {
      button.classList.remove("relax");
    }, 600); // matches relax duration
  });

  button.addEventListener("mouseleave", () => {
    button.classList.remove("clicked", "rebound", "relax");
  });
});
