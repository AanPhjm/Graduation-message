function toggleLetter() {
    document.querySelector(".envelope").classList.toggle("open");
}

/* ICON RƠI */
const icons = ["👩🏻‍🎓", "🍀", "💯"];

function createIcon() {
    const icon = document.createElement("div");
    icon.className = "icon";
    icon.innerText = icons[Math.floor(Math.random() * icons.length)];
    icon.style.left = Math.random() * 100 + "vw";
    icon.style.animationDuration = (3 + Math.random() * 3) + "s";

    document.body.appendChild(icon);

    setTimeout(() => icon.remove(), 6000);
}

setInterval(createIcon, 500);
function zoomImage(img) {
    const overlay = document.getElementById("overlay");

    if (img.classList.contains("zoom")) {
        img.classList.remove("zoom");
        overlay.style.opacity = "0";
        overlay.style.visibility = "hidden";
    } else {
        document.querySelectorAll(".stack-img").forEach(i => i.classList.remove("zoom"));
        img.classList.add("zoom");
        overlay.style.opacity = "1";
        overlay.style.visibility = "visible";
    }
}
document.getElementById("overlay").onclick = () => {
    document.querySelectorAll(".stack-img").forEach(i => i.classList.remove("zoom"));
    const overlay = document.getElementById("overlay");
    overlay.style.opacity = "0";
    overlay.style.visibility = "hidden";
};

