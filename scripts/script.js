document.addEventListener("DOMContentLoaded", function () {
  const shareButton = document.querySelector(".share-button");
  const sharePopup = document.querySelector(".share-popup");
  const cardProfile = document.querySelector(".card-profile");
  const isMobile = window.innerWidth < 880; // 55rem = 880px

  function toggleShare() {
    sharePopup.classList.toggle("active");
    shareButton.classList.toggle("active");
    if (isMobile) {
      cardProfile.classList.toggle("active");
    }
  }

  shareButton.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleShare();
  });

  // Menutup popup ketika mengklik di luar
  document.addEventListener("click", function (event) {
    if (
      !shareButton.contains(event.target) &&
      !sharePopup.contains(event.target)
    ) {
      sharePopup.classList.remove("active");
      shareButton.classList.remove("active");
      cardProfile.classList.remove("active");
    }
  });

  // Handle window resize
  window.addEventListener("resize", function () {
    const newIsMobile = window.innerWidth < 880;
    if (newIsMobile !== isMobile) {
      sharePopup.classList.remove("active");
      shareButton.classList.remove("active");
      cardProfile.classList.remove("active");
    }
  });
});
