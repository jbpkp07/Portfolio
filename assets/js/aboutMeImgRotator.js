const aboutMeImgRotator = () => {
    // const aboutMeImgElement1 = $("#aboutMeImg1");
    // const aboutMeImgElement2 = $("#aboutMeImg2");
    
    // setInterval(async () => {
    //     aboutMeImgElement1.fadeTo(2000, 0);
    //     // await aboutMeImgElement1.attr("src", "./assets/images/meDatacenter.jpg").promise();
    //     aboutMeImgElement2.fadeTo(2000, 1);
    // }, 5000);

    var oldImg = $("#aboutMeImg");
    
    var img = new Image();
    img.id = "aboutMeImg";
    img.src = "./assets/images/meDatacenter.jpg";

    var newImg = $(img).hide();
    $("#aboutMeImgContainer").append(img);
    
    oldImg.stop(true).fadeOut(2500, function() {
        $(this).remove();
    });
    newImg.fadeIn(2500);
};

jQuery(aboutMeImgRotator);