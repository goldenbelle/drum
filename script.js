function handleKey(event) {
    const audio = document.querySelector(`audio[key="${event.key}"]`);

    if (!audio) return; // if audio is null, stop function
    audio.currentTime = 0; // rewind audio
    audio.play(); // if audio is not null, excute function once.
}



window.addEventListener('keydown', handleKey);