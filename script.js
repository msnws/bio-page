console.log("✅ script.js has loaded");

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const color = `rgba(${r}, ${g}, ${b}, 0.5)`;
  console.log("Generated Transparent Color:", color);
  return color;
}

function removeTransparency(rgba) {
  const match = rgba.match(/rgba?\((\d+), (\d+), (\d+), [\d.]+\)/);
  if (!match) return rgba;

  const [_, r, g, b] = match;
  const solidColor = `rgb(${r}, ${g}, ${b})`;
  console.log("Solid Color (No Transparency):", solidColor);
  return solidColor;
}

function darkenColor(rgb, percent) {
  const match = rgb.match(/rgb\((\d+), (\d+), (\d+)\)/); // Ensure it only matches RGB format
  if (!match) {
    console.error("⚠️ darkenColor() received an invalid color:", rgb);
    return rgb; // Return original color if regex fails
  }

  let r = parseInt(match[1], 10);
  let g = parseInt(match[2], 10);
  let b = parseInt(match[3], 10);

  // Apply darkening effect
  r = Math.max(0, Math.floor(r * (1 - percent / 100)));
  g = Math.max(0, Math.floor(g * (1 - percent / 100)));
  b = Math.max(0, Math.floor(b * (1 - percent / 100)));

  const darkenedColor = `rgb(${r}, ${g}, ${b})`;
  console.log("✅ darkenColor() output:", darkenedColor);
  return darkenedColor;
}

function setOverlayColor() {
  const randomColor = getRandomColor();
  const solidColor = removeTransparency(randomColor);
  const darkerColor = darkenColor(solidColor, 15);

  console.log("🔹 Setting Overlay Color:", randomColor);
  console.log("🔹 Setting Solid Color:", solidColor);
  console.log("🔹 Setting Darker Color:", darkerColor);

  document.documentElement.style.setProperty("--overlay-color", randomColor);
  document.documentElement.style.setProperty("--ovsolid", solidColor);
  document.documentElement.style.setProperty("--ovdark", darkerColor);
}
// Run the function once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", setOverlayColor);
//document.getElementById("profpic").addEventListener("click", setOverlayColor);//

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("year").textContent = new Date().getFullYear();
});

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("dark-toggle");
  const html = document.documentElement;

  toggle.addEventListener("click", () => {
    html.classList.toggle("dark");
    console.log("🌗 Dark mode toggled:", html.classList.contains("dark"));
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const colorChange = document.getElementById("color-change");
  colorChange.addEventListener("click", () => {
    setOverlayColor();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const shareLink = document.getElementById("shareLink");
  shareLink.addEventListener("click", () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
  });
});

const menuBtn = document.querySelector("#hamburger-toggle");
const overlay = document.querySelector(".mobileOverlay");

menuBtn.addEventListener("click", () => {
  overlay.classList.toggle("active");

  if (overlay.classList.contains("active")) {
    menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  } else {
    menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("dark-toggleMobile");
  const html = document.documentElement;

  toggle.addEventListener("click", () => {
    html.classList.toggle("dark");
    console.log("🌗 Dark mode toggled:", html.classList.contains("dark"));
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const colorChange = document.getElementById("color-changeMobile");
  colorChange.addEventListener("click", () => {
    setOverlayColor();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const shareLink = document.getElementById("shareLinkMobile");
  shareLink.addEventListener("click", () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
  });
});
