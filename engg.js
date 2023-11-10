// Add event listener to the button with class : jee and remove the class myStyle from the div with id jeeInfoModal
console.log("index.js loaded");
var jeeButton = document.querySelector(".jee");

jeeButton.addEventListener("click", function () {
    console.log("jee button clicked");
    var jeeInfoModal = document.querySelector("#jeeInfoModal");
    // update the style property of the jeeInfoModal 
    jeeInfoModal.style.display = "block";
    } 
);

var gujcetButton = document.querySelector(".gujcet");
gujcetButton.addEventListener("click", function () {
    console.log("gujcet button clicked");
    var gujcetInfoModal = document.querySelector("#gujcetInfoModal");
    // update the style property of the gujcetInfoModal 
    gujcetInfoModal.style.display = "block";
    }
);

document.querySelector("span").addEventListener("click", function () {
    console.log("span clicked");
    var jeeInfoModal = document.querySelector("#jeeInfoModal");

    jeeInfoModal.style.display = "none";

    }
);

document.querySelector(".gujcet_close").addEventListener("click", function () {
    console.log("span clicked");
    var gujcetInfoModal = document.querySelector("#gujcetInfoModal");

    gujcetInfoModal.style.display = "none";

    }
);