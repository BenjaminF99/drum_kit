document.body.addEventListener('keydown', (e) => playSound(e));

function playSound(e) {
    console.log("test")
    console.log(document.querySelector("div"))
    const audio = document.querySelector(`audio[data-key=${e.keyCode}]`);
    const key = document.querySelector(`key[data-key="${e.keyCode}]`);
    console.log("test")
    if (!audio) return null;
    key.classList.add("effect");
    audio.currentTime = 0;
    audio.play();
    setTimeout(function() {
        key.classList.remove("effect");
    },100);
}
