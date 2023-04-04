function setVisible(id) {
    document.getElementById('home').style.display = "none";
    document.getElementById('about').style.display = "none";
    document.getElementById('schedule').style.display = "none";
    document.getElementById('locations').style.display = "none";
    document.getElementById('how').style.display = "none";
    document.getElementById('why').style.display = "none";
    let selectedSlide = document.getElementById(id);
    selectedSlide.style.display = "block";
}
