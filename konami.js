// script created by enews (i think)
// Easter egg to play audio upon komani code entry.
$(document).ready(function () {
    var audioElement = document.createElement('audio');
    audioElement.src = '(audiotrack.mp3)'; //audio track goes here, must be a wikitide.net link
    audioElement.preload = 'auto';
    document.body.appendChild(audioElement);
    
    // Konami Codekey values
    var konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    var userInput = [];
    
    $(document).keydown(function (e) {
        userInput.push(e.keyCode);

        // Keep the input array trimmed to the length of the Konami Code
        if (userInput.length > konamiCode.length) {
            userInput.shift();
        }

        if (JSON.stringify(userInput) === JSON.stringify(konamiCode)) {
            e.preventDefault();
            audioElement.currentTime = 0;
            console.log("KonamiCodeActivated");
            audioElement.play().catch(function (error) {
                console.log("Audio playback failed:", error);
            });

            userInput = [];
        }
    });
});
