"use strict";

window.addEventListener("DOMContentLoaded", function() {
    console.log("DOM load");
    document.querySelectorAll(".volume").forEach(function(element) {
        element.addEventListener("click", audio);
    });
});

function audio() {
    var video = document.querySelector("#video");
    video.muted = !video.muted;

    document.querySelectorAll(".volume").forEach(function(element) {
        element.classList.toggle("hide");
    });
}