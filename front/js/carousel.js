document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel-track");
    setInterval(() => {
        const firstImage = track.firstElementChild;
        track.style.transition = "transform 0.7s ease-in-out";
        track.style.transform = "translateX(-300px)";
        setTimeout(() => {
            track.appendChild(firstImage);
            track.style.transition = "none";
            track.style.transform = "translateX(0)";
        }, 700);
    }, 3000);
});