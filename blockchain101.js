//color change of pasage class//
const passageElements = document.querySelectorAll(".button");

passageElements.forEach(passage => {
    passage.addEventListener("mouseenter", function (event) {
        passage.style.color = "white";
    });

    passage.addEventListener("mouseleave", function (event) {
        passage.style.color = "#E48D0A";
    });
});

const button = document.getElementById("button1"); // Remove the # symbol
button.addEventListener("click", function() {
    // Replace the URL with the path to your reference.html file
    const referenceMaterialURL = "reference.html";
    
    // Open a new window or tab with the reference.html file
    window.open(referenceMaterialURL, "_blank");
});










