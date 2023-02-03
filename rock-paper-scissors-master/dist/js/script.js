

function checkIsOnline(val) {
    if (val === "true") {
        return true;
    } else {
        return false;
    }
}

function toggleSwitchBtn(isOnline, test) {
    console.log(test);

    switchBtn.forEach((btn) => {
        if (isOnline === "online") {
            btn.classList.remove('offline');
            btn.classList.add('online');
        } else {
            btn.classList.remove('online');
            btn.classList.add('offline');
        }
    });
}

function change() {
    isOnline = !isOnline;
    setToLocalStorage('isOnline', isOnline);
    toggleSwitchBtn(isOnline ? "online" : "offline", "change");
}



window.onload = init = () => {
    modeBtn.addEventListener('click', changeGame);

    totalScore.innerHTML = getFromLocalStorage('score');

    isOnline = getFromLocalStorage('isOnline');
    onaoffline.forEach((btn) => {
        const isSetOnline = getFromLocalStorage('isOnline');
        const check = checkIsOnline(isSetOnline);
        if (check) {
            btn.checked = check;
            toggleSwitchBtn("online", "init");
        } else {
            btn.checked = check;
            toggleSwitchBtn("offline", "init");
        }
    });

    mode = getFromLocalStorage('mode');

    if (mode === "bonus") {

        // triangle.classList.add("hidden");
        // pentagon.classList.remove("hidden");

        choicesBtns.forEach((container) => {
            container.classList.add("bonus-mode");
        });

        choicesBtns.forEach((container) => {
            if (!container.classList.contains("RPS")) {

                if (container.classList.contains("hidden")) {
                    container.classList.toggle('hidden');
                    container.classList.toggle('flex');
                    setTimeout(() => {
                        container.classList.toggle("show");
                    }, 300);
                } else {
                    container.classList.toggle("show");
                    setTimeout(() => {
                        container.classList.toggle('hidden');
                        container.classList.toggle('flex');
                    }, 300);
                }
            }
        });

        bonusLogos.forEach((logo) => {
            logo.classList.toggle('hidden');
            logo.classList.toggle('block');
        });

        basicLogos.forEach((logo) => {
            logo.classList.toggle('hidden');
            logo.classList.toggle('block');
        });

    }else{
        choicesBtns.forEach((container) => {
            container.classList.remove("bonus-mode");
            container.classList.add("basic-mode");
        });

    }


    window.onresize = () => {
        const isSetOnline = getFromLocalStorage('isOnline');
        if (window.innerWidth > 1023) {
            onaoffline.forEach((btn) => {
                const check = checkIsOnline(isSetOnline);
                if (check) {
                    btn.checked = check;
                    toggleSwitchBtn("online", "dresize");
                } else {
                    btn.checked = check;

                    toggleSwitchBtn("offline", "dresize");
                }
            });
        } else {
            onaoffline.forEach((btn) => {
                const check = checkIsOnline(isSetOnline);
                if (check) {
                    btn.checked = check;
                    toggleSwitchBtn("online", "mresize");
                } else {
                    btn.checked = check;
                    toggleSwitchBtn("offline", "mresize");
                }
            });
        }
    };

    function changeGame() {

        choicesBtns.forEach((container) => {
            if (!container.classList.contains("RPS")) {

                if (container.classList.contains("hidden")) {
                    container.classList.toggle('hidden');
                    container.classList.toggle('flex');
                    setTimeout(() => {
                        container.classList.toggle("show");
                    }, 300);
                } else {
                    container.classList.toggle("show");
                    setTimeout(() => {
                        container.classList.toggle('hidden');
                        container.classList.toggle('flex');
                    }, 300);
                }
            }
        });


        mode = mode === "bonus" ? "basic" : "bonus";
        setToLocalStorage('mode', mode);

        if(mode==="basic"){
            choicesBtns.forEach((container) => {
                container.classList.remove("bonus-mode");
                container.classList.add("basic-mode");
            });
        }else{
            choicesBtns.forEach((container) => {
                container.classList.remove("basic-mode");
                container.classList.add("bonus-mode");
            });
        }

        bonusLogos.forEach((logo) => {
            logo.classList.toggle('hidden');
            logo.classList.toggle('block');
        });

        basicLogos.forEach((logo) => {
            logo.classList.toggle('hidden');
            logo.classList.toggle('block');
        });
    }

    rulesBtn.addEventListener('click', () => {
        rules.classList.add('open');
    });

    closeBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
            rules.classList.remove('open');
        });
    });
};