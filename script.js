const html = document.querySelector("html");

// Dark Mode Init
document.addEventListener("DOMContentLoaded", () => {
  const userTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

  if (userTheme === "dark") {
    html.classList.add("dark");
  } else if (userTheme === "light") {
    html.classList.remove("dark");
  } else {
    if (prefersDark.matches) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }
});

// Primary Button Animation

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
    }, 150);

    setTimeout(() => {
      button.classList.remove("relax");
    }, 600);
  });

  button.addEventListener("mouseleave", () => {
    button.classList.remove("clicked", "rebound", "relax");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("year").textContent = new Date().getFullYear();
});

// Dark Mode Toggle

const darkModeToggle = document.getElementById("dark-toggle");
darkModeToggle.addEventListener("click", () => {
  const toggleMessage = document.querySelector(".themeToggled");
  const themeName = document.querySelector(".themeName");

  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
    themeName.innerText = "light";
    toggleMessage.classList.add("show");
    console.log(toggleMessage.classList);
    setTimeout(() => {
      toggleMessage.classList.remove("show");
    }, 1500);
  } else {
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
    themeName.innerText = "dark";
    toggleMessage.classList.add("show");
    setTimeout(() => {
      toggleMessage.classList.remove("show");
    }, 1500);
  }
});

// Link Copy
const shareLink = document.getElementById("shareLink");
shareLink.addEventListener("click", () => {
  const linkPopup = document.querySelector(".linkCopy");
  const url = window.location.href;
  navigator.clipboard.writeText(url);
  linkPopup.classList.add("show");
  setTimeout(() => {
    linkPopup.classList.remove("show");
  }, 1500);
});
