function toggleButtonClick() {
    const nav = document.getElementById('nav');
    const closeIcon = document.getElementById('close');
    const openIcon = document.getElementById('open');
    const lightLogo = document.getElementById('light-logo');
    const darkLogo = document.getElementById('dark-logo');

    // opening the toggle
    if (!(nav.style.backgroundColor === "white")) {
        nav.style.backgroundColor = "white";

        closeIcon.style.display = "block";
        openIcon.style.display = "none";

        lightLogo.style.display = "none";
        darkLogo.style.display = "block";

    // closing the toggle
    } else {
        nav.style.backgroundColor = "rgba(255, 255, 255, 0.15)";

        closeIcon.style.display = "none";
        openIcon.style.display = "block";
        
        lightLogo.style.display = "block";
        darkLogo.style.display = "none";

    }
}

// on scroll check here
// https://stackoverflow.com/a/39575616/11935485