document.querySelector(".gpat").addEventListener("click", function () {
    console.log("gpat button clicked");
    var gpatInfoModal = document.querySelector("#gpatInfoModal");
    // update the style property of the gpatInfoModal 
    gpatInfoModal.style.display = "block";
    }
);
document.querySelector(".gpat_close").addEventListener("click", function () {
    console.log("span clicked");
    var gpatInfoModal = document.querySelector("#gpatInfoModal");

    gpatInfoModal.style.display = "none";

    }
);

document.querySelector(".gujcet").addEventListener("click", function () {
    console.log("gujcet button clicked");
    var gujcetInfoModal = document.querySelector("#gujcetInfoModal");
    // update the style property of the gujcetInfoModal 
    gujcetInfoModal.style.display = "block";
    }
);
document.querySelector(".gujcet_close").addEventListener("click", function () {
    console.log("span clicked");
    var gujcetInfoModal = document.querySelector("#gujcetInfoModal");

    gujcetInfoModal.style.display = "none";

    }
);
