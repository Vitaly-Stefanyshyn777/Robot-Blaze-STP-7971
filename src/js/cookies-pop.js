const cookiesPopup = document.getElementById("cookiesPop");
const acceptBtn = document.querySelector(".cookies-accept");
const declneBtn = document.querySelector(".cookies-decline");

declneBtn.addEventListener("click", () => {
  cookiesPopup.style.display = "none";
});

acceptBtn.addEventListener("click", () => {
  cookiesPopup.style.display = "none";
  localStorage.setItem("cookies", "accepted");
});

if (!localStorage.getItem("cookies")) {
  cookiesPopup.style.display = "block";
} else {
  // cookiesPopup.style.display = "none";
}
