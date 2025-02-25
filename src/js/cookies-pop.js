document.addEventListener("DOMContentLoaded", () => {
  const cookiesPopup = document.getElementById("cookiesPop");
  const acceptBtn = document.querySelector(".cookies-accept");
  const declineBtn = document.querySelector(".cookies-decline");

  const hideCookiesPopup = (status) => {
    cookiesPopup.style.display = "none";
    localStorage.setItem("cookies", status);
  };

  if (localStorage.getItem("cookies")) {
    cookiesPopup.style.display = "none";
  } else {
    cookiesPopup.style.display = "block";
  }

  acceptBtn.addEventListener("click", () => hideCookiesPopup("accepted"));
  declineBtn.addEventListener("click", () => hideCookiesPopup("declined"));
});
