const aboutMeImgRotator = () => {

    var oldImg = $("#aboutMeImg");

    var img = new Image();
    img.id = "aboutMeImg";
    img.src = "./assets/images/aboutMeDiscGolf.jpg";

    var newImg = $(img).hide();
    $("#aboutMeImgContainer").append(img);

    oldImg.stop(true).fadeOut(2500, function () {
        $(this).remove();
    });
    newImg.fadeIn(2500);
};

const imgAssetPaths = [

];

jQuery(aboutMeImgRotator);
