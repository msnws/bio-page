const html = document.querySelector("html");
const mobileThemeName = document.querySelector(".mobileThemeName");
const themeName = document.querySelector(".themeName");
const hamburger = document.getElementById("hamburger-toggle");
const overlay = document.querySelector(".mobileOverlay");
const menuIcon = document.querySelector(".menuIcon");
const themeIcon = document.querySelector(".themeIcon");

// Dark Mode Init
document.addEventListener("DOMContentLoaded", () => {
  const userTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

  if (userTheme === "dark") {
    html.classList.add("dark");
    mobileThemeName.innerText = "Light";
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  } else if (userTheme === "light") {
    html.classList.remove("dark");
    mobileThemeName.innerText = "Dark";
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  } else {
    if (prefersDark.matches) {
      html.classList.add("dark");
      mobileThemeName.innerText = "Light";
      themeIcon.classList.remove("fa-moon");
      themeIcon.classList.add("fa-sun");
    } else {
      html.classList.remove("dark");
      mobileThemeName.innerText = "Dark";
      themeIcon.classList.add("fa-sun");
      themeIcon.classList.remove("fa-moon");
    }
  }
});

// Hamburger Menu Toggle
const hamburgerToggle = () => {
  if (overlay.classList.contains("active")) {
    overlay.classList.remove("active");
    menuIcon.classList.remove("fa-times");
    menuIcon.classList.add("fa-bars");
  } else {
    overlay.classList.add("active");
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-times");
  }
};

// Theme Function

const toggleTheme = () => {
  const toggleMessage = document.querySelector(".themeToggled");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
    themeName.innerText = "light";
    mobileThemeName.innerText = "Dark";
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
    toggleMessage.classList.add("show");
    console.log(toggleMessage.classList);
    setTimeout(() => {
      toggleMessage.classList.remove("show");
    }, 1500);
  } else {
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
    themeName.innerText = "dark";
    mobileThemeName.innerText = "Light";
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
    toggleMessage.classList.add("show");
    setTimeout(() => {
      toggleMessage.classList.remove("show");
    }, 1500);
  }
};

// Share Link Function
const sharing = () => {
  const linkPopup = document.querySelector(".linkCopy");
  const url = window.location.href;
  navigator.clipboard.writeText(url);
  linkPopup.classList.add("show");
  setTimeout(() => {
    linkPopup.classList.remove("show");
  }, 1500);
};

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

// Dark Mode Button Toggle

const darkModeToggle = document.getElementById("dark-toggle");
darkModeToggle.addEventListener("click", () => {
  toggleTheme();
});

// Sharing Button
const shareLink = document.getElementById("shareLink");
shareLink.addEventListener("click", () => {
  sharing();
});

// Mobile Overlay
hamburger.addEventListener("click", () => {
  hamburgerToggle();
});

// Mobile Overlay Dark Mode
const mobileToggler = document.getElementById("dark-toggleMobile");
mobileToggler.addEventListener("click", () => {
  toggleTheme();
  hamburgerToggle();
});

// Mobile Overlay Sharing Button
const mobileShareLink = document.getElementById("shareLinkMobile");
mobileShareLink.addEventListener("click", () => {
  sharing();
  hamburgerToggle();
});
