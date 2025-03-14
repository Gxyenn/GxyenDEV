function toggleMenu() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex";
}

function animateProfile() {
    const profilePic = document.getElementById("profile-pic");
    profilePic.style.transform = "scale(1.1)";
    setTimeout(() => {
        profilePic.style.transform = "scale(1)";
    }, 300);
}
