function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const body = document.querySelector("body");
  const hamburger = document.querySelector(".hamburger-icon");
  const overlay = document.querySelector(".overlay");

  sidebar.classList.toggle("sidebar-active");
  body.classList.toggle("no-scroll");
  hamburger.classList.toggle("active");

  if (sidebar.classList.contains("sidebar-active")) {
    overlay.style.opacity = 0.5;
  } else {
    overlay.style.opacity = 0;
  }
}
