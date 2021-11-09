const crossFadeImagesDuration = 1500;
const rotateImagesDelay = crossFadeImagesDuration + 3000;

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
    nextPath: function () {
        this.index < this.paths.length - 1 ? this.index++ : this.index = 0;

        return this.paths[this.index];
    }
};

const rotateAboutMeImages = () => {
    setInterval(rotateNextAboutMeImage, rotateImagesDelay);
};

const rotateNextAboutMeImage = () => {
    const nextImage = createNextAboutMeImage();

    const imageContainerElement = $(aboutMeImageContainerIdSelector);
    const currentImageElement = $(aboutMeImageIdSelector);
    const nextImageElement = $(nextImage);

    nextImageElement.hide(0, () => { // hide() with callback seems to fix flickering bug on mobile
        imageContainerElement.append(nextImageElement);
        currentImageElement.fadeOut(crossFadeImagesDuration, () => currentImageElement.remove());
        nextImageElement.fadeIn(crossFadeImagesDuration);
    });
};

const createNextAboutMeImage = () => {
    return createAboutMeImage(aboutMeImageAssetPaths.nextPath());
};

const createAboutMeImage = (imageAssetPath) => {
    const aboutMeImage = new Image();

    aboutMeImage.id = aboutMeImageIdSelector.substr(1);
    aboutMeImage.src = imageAssetPath;
    aboutMeImage.alt = imageAssetPath.split("/").pop();
    aboutMeImage.draggable = false;

    return aboutMeImage;
};
