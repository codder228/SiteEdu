document.addEventListener("DOMContentLoaded", () => {
  const profileBtn = document.getElementById("profileBtn");
  const profileMenu = document.getElementById("profileMenu");
  const closeBtn = document.getElementById("closeProfile");

  profileBtn.addEventListener("click", () => {
    profileBtn.classList.add("hide-profileBtn");
    profileMenu.classList.toggle("hide-profile-menu");
    profileMenu.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    profileMenu.classList.add("hide-profile-menu");
    profileMenu.classList.remove("active");
    setTimeout(profileBtn.classList.remove("hide-profileBtn"), 200);
  });
});
