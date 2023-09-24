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

const feedback = document.querySelectorAll(".feedback");
const url = "https://wyucfotvjkmqlbxkflsz.supabase.co/rest/v1/contact";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5dWNmb3R2amttcWxieGtmbHN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU1NDExMDEsImV4cCI6MjAxMTExNzEwMX0.tjeFWTF5mbuyZ7sNaOgyN8CUjJU9KItJk-zw1dkmOjE";

const form = document.querySelector("form");
form.addEventListener("submit", sendForm);

function sendForm(event){
    console.log("send form");
    event.preventDefault();
    
    const formData = form.elements;
    let name = formData.name.value;
    let email = formData.email.value;
    let message = formData.message.value;
    feedback.forEach(function(element) {
        element.classList.remove("hide");
    });

    setTimeout(reset, 6000);

    fetch(url, {
        method: "POST",
        headers: {
            apikey: key,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({name, email, message}),
    })
};

function reset() {
    feedback.forEach(function(element) {
        element.classList.add("hide");
    });
    form.reset();
};