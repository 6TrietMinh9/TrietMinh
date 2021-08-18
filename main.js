let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".bx-search");
let outSidebar = document.querySelector(".home-content");

btn.onclick = function () {
  sidebar.classList.toggle("active");
};

searchBtn.onclick = function () {
  sidebar.classList.toggle("active");
};

outSidebar.onclick = function () {
  sidebar.classList.remove("active");
};
