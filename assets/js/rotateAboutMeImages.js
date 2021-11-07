const aboutMeImageIdSelector = "#aboutMeImg";
const aboutMeImageContainerIdSelector = "#aboutMeImgContainer";

const aboutMeImageAssetPaths = {
    index: 0,
    paths: [
        "./assets/images/aboutMeDatacenter.jpg",
        "./assets/images/aboutMeDiscGolf.jpg",
        "./assets/images/aboutMeOffice2.jpg",
        "./assets/images/aboutMeJetHanger.jpg",
        "./assets/images/aboutMeDiscGolf2.jpg",
        "./assets/images/aboutMeHawaii.jpg",
        "./assets/images/aboutMeOffice.jpg",
        "./assets/images/aboutMeYosemite.jpg"
    ],
    nextPath: function() {
        this.index < this.paths.length - 1 ? this.index++ : this.index = 0;
    
        return this.paths[this.index];
    }
};

const buildNewAboutMeImage = () => {
    const imageAssetPath = aboutMeImageAssetPaths.nextPath();
    const aboutMeImage = new Image();

    aboutMeImage.id = aboutMeImageIdSelector.substr(1);
    aboutMeImage.src = imageAssetPath;
    aboutMeImage.alt = imageAssetPath.split("/").pop();
    aboutMeImage.draggable = false;
    aboutMeImage.style = "display: none;";

    return aboutMeImage;
};

const rotateNextAboutMeImage = () => {
    const newAboutMeImage = buildNewAboutMeImage();
    const imageContainerElement = $(aboutMeImageContainerIdSelector);
    const currentImageElement = $(aboutMeImageIdSelector);
    const nextImageElement = $(newAboutMeImage);

    imageContainerElement.append(nextImageElement);

    currentImageElement.fadeOut(1500, () => currentImageElement.remove());
    nextImageElement.fadeIn(1500);
};

const rotateAboutMeImages = () => {
    setInterval(rotateNextAboutMeImage, 4500);
};

jQuery(rotateAboutMeImages);
