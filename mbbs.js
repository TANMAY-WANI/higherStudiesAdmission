document.querySelector(".neet").addEventListener("click", function () {
    console.log("neet button clicked");
    var neetInfoModal = document.querySelector("#neetInfoModal");
    // update the style property of the neetInfoModal 
    neetInfoModal.style.display = "block";
    }
);
document.querySelector(".neet_close").addEventListener("click", function () {
    console.log("span clicked");
    var neetInfoModal = document.querySelector("#neetInfoModal");

    neetInfoModal.style.display = "none";

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
