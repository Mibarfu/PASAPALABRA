class Donut {

    constructor() {

        this.widthSpaceCircle;
        this.heightSpaceCircle;
        this.sizeSphere;
        this.letters;

        this.readSets();
    }

    adjustCircleSize() {
        this.letters.forEach(letter => {
            letter.style.width = this.sizeSphere.toString() + "px";
            letter.style.height = this.sizeSphere.toString() + "px";

            letter.style.fontSize = (this.sizeSphere * 0.7).toString() + "px";
        });
    };

    generateRosco(radiusValue) {
        let posX, posY;
        const angRad = 0.2513;
        let angl = -1.57;

        this.adjustCircleSize();

        const factorX = (this.widthSpaceCircle / 2) - (this.sizeSphere / 2);
        const factorY = (this.heightSpaceCircle / 2) - (this.sizeSphere / 2);
        const radius = factorX * radiusValue;

        this.letters.forEach(letter => {
            posX = ((Math.cos(angl) * radius) + factorX);
            posY = ((Math.sin(angl) * radius) + factorY);
            letter.style.left = posX.toString() + "px";
            letter.style.top = posY.toString() + "px";
            angl += angRad;
        });

    };

    setLetterState(letterChange, state) {
        this.letters.forEach(letter => {
            if (letter.textContent.toLowerCase() === letterChange.toLowerCase()) {
                switch (state) {
                    case 0:
                        letter.style.setProperty("background-image",
                            "radial-gradient(circle at 84.87% 25.58%, #9eb1e5 0, #6c90d8 50%, #1d71cb 100%)");
                        break;
                    case 1:
                        letter.style.setProperty("background-image",
                            "linear-gradient(40deg, #d8e3fb 0, #b5c9f2 50%, #91b0e8 100%)");
                        break;
                    case 2:
                        letter.style.setProperty("background-image",
                            "linear-gradient(245deg, #c8f67f 0, #b0f07b 16.67%, #92e675 33.33%, #6cd86c 50%, #3aca65 66.67%, #00c064 83.33%, #00b868 100%)");
                        break;
                    case 3:
                        letter.style.setProperty("background-image",
                            "linear-gradient(235deg, #ff8649 0, #ff7447 16.67%, #ff5d43 33.33%, #f23c3c 50%, #e30037 66.67%, #d80037 83.33%, #cf003a 100%)");
                        break;

                }
            }
        });
    };

    cleanRosco () {
        this.letters.forEach(letter => {
            this.setLetterState(letter.textContent, 0);
        });
    };

    readSets() {
        this.widthSpaceCircle = parseFloat(getComputedStyle(document.getElementById("space-circle")).width);
        this.heightSpaceCircle = parseFloat(getComputedStyle(document.getElementById("space-circle")).height);
        this.sizeSphere = parseFloat(getComputedStyle(document.getElementById("space-circle")).width) * 0.09;
        this.letters = document.querySelectorAll(".letter");
    }

}