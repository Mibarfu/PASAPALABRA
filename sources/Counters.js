class Counters {

    constructor() {
        this.totalSecons;
        this.time;
        this.idTimer;
        this.isTimerOn = false;
        
        this.isBlinking = false;
        this.idTimerBlinking;

        this.timerExt;
        this.timerArcExt;
        this.timerArc;
        this.timer;
        this.hits;

        this.readSets();
    }

    timerBlinking(timer) {

        if (getComputedStyle(this.timer).getPropertyValue('color') === 'rgb(255, 255, 255)')
            timer.style.color = "rgba(0,255,255, 0)";
        else
            timer.style.color = "white";
    };

    startTimer () {
            this.isTimerOn = true;
            this.idTimer = setInterval(() => {
                this.time--;
                this.setTimerGame(this.totalSecons, this.time);
            },
                1000);
    };

    stopTimer () {
            this.isTimerOn = false;
            clearInterval(this.idTimer);
    };

    blinking (state) {
            if (state && !this.isBlinking) {
                this.idTimerBlinking = setInterval(() => {
                    this.timerBlinking(this.timer);
                }, 700);
                this.isBlinking = true;
            }   
            else if (!state && this.isBlinking) {
                    clearInterval(this.idTimerBlinking);
                    this.timer.style.color = "white";
                    this.isBlinking = false;
            }
            
    };

    setHits = function (hit) {
            this.hits.textContent = hit;
    };

    restartColor = function () {
            this.timer.style.backgroundImage = "radial-gradient(circle at 80% 40%, #6c90d8 50%, #1d71cb 100%)";
    };

    resetTimeGame(time) {
        this.totalSecons = time;
        this.time = time;

        if (this.isTimerOn) this.stopTimer();
        if (this.isBlinking) this.blinking(false);
        this.restartColor()
    }

    setTimerGame () {
        const arc = this.timerArc.getContext("2d");

        this.timerArc.width = this.timerArcExt;
        this.timerArc.height = this.timerArcExt;

        arc.width = arc.offsetWidth;
        arc.height = arc.offsetHeight;

        this.timer.textContent = this.time;

        arc.beginPath();
        arc.strokeStyle = "white";
        arc.lineWidth = this.timerArc.width * 0.07;

        arc.arc(
            this.timerArc.width / 2,
            this.timerArc.height / 2,
            ((this.timerArc.width) / 2) - (arc.lineWidth / 2),
            0 - (Math.PI / 2),
            (0 - (Math.PI / 2)) + (((Math.PI * 2) / this.totalSecons) * (this.totalSecons - this.time))
        );
        arc.stroke();

        if (this.time === 15)
            this.timer.style.backgroundImage = "linear-gradient(225deg, #ffe16e 0, #ffcd57 25%, #f2b53c 50%, #e59d1f 75%, #da8800 100%)";
        if (this.time <= 5 && this.isBlinking === false) {
            this.blinking(true);
            this.timer.style.backgroundImage = "linear-gradient(240deg, #ff7d49 0, #ff6d46 16.67%, #fe5842 33.33%, #f23c3c 50%, #e60f37 66.67%, #db0036 83.33%, #d30038 100%)";
        }
            

        if (this.time === 0) {
            this.blinking(false);
            clearInterval(this.idTimer);
            endGame();
        }

    };

    readSets() {
        this.timerExt = document.getElementById("timer-ext");
        this.timerArcExt = parseInt(getComputedStyle(document.getElementById("timer-ext")).width) + 4;
        this.timerArc = document.getElementById("timer-arc");
    
        this.timer = document.getElementById("timer");
        this.hits = document.getElementById("hits");
    }
}