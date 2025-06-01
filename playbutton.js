// a recreation of the roblox play button

$(document).ready(function () {
    $("#playButton").on("click", function () {
        window.location.href = "roblox://experiences/start?placeId=[GAMEID]"; //replace [GAMEID] with the ID of the roblox game
    });

    $("#playButton").css("cursor", "pointer");
}
