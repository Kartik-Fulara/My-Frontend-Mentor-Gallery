// BTP = Back This Project
const BTP = document.getElementById("back-this-project");
const body = document.getElementById("body");
const btp_btn = document.getElementById("thank_you");
const model = document.getElementById("pledge_dialog");
const bookmark = document.getElementsByClassName("bookmarked");
const un_bookmarked = document.getElementsByClassName("un_bookmarked");


const arr = [0, 1, 2];

const init = () => {
    const navbar = document.getElementById('navbar');

    // scroll event listener
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        // console.log(scrollPosition);
        if (scrollPosition > 100) {
            navbar.classList.add('bgclr-trans-black');
        } else {
            navbar.classList.remove('bgclr-trans-black');
        }
    });





};

window.onload = init();


const back_this_project = (option = -1, btn = "btp") => {

    if (btn === "btp") {

        BTP.classList.toggle("d-none");
        body.classList.toggle("overflow-hidden");
    }
    else if (btn === "got_it") {
        btp_btn.classList.toggle("d-none");
        btp_btn.classList.toggle("d-flex");
        model.classList.toggle("d-none");
    } else if (btn === "thank_you") {
        btp_btn.classList.toggle("d-none");
        btp_btn.classList.toggle("d-flex");
        BTP.classList.toggle("d-none");
        body.classList.toggle("overflow-hidden");
        model.classList.toggle("d-none");
    }
    select_reward(option);
};

const select_reward = (pledge) => {
    arr.forEach((item) => {
        if (item != pledge) {
            const box1 = document.getElementById(`btp-card-${item}`);
            const radio1 = document.getElementById(`radio-${item}`);
            const pledge_counter = document.getElementById(`submit-pledge-${item}`);
            box1.classList.remove("border-color-dark-cyan");
            box1.classList.add("border-color-dark-gray");
            radio1.classList.add("d-none");
            radio1.classList.remove("d-block");
            pledge_counter.classList.add("d-none");
        }
    });
    if (pledge < 0) return;
    const box = document.getElementById(`btp-card-${pledge}`);
    const radio = document.getElementById(`radio-${pledge}`);
    const pledge_counter = document.getElementById(`submit-pledge-${pledge}`);
    box.classList.add("border-color-dark-cyan");
    box.classList.remove("border-color-dark-gray");
    radio.classList.remove("d-none");
    radio.classList.add("d-block");
    pledge_counter.classList.remove("d-none");
};


function book_mark() {

    for (let i = 0; i < bookmark.length; i++) {
        bookmark[i].classList.toggle("d-none");
        bookmark[i].classList.toggle("d-flex");
    }


    for (let i = 0; i < un_bookmarked.length; i++) {
        un_bookmarked[i].classList.toggle("d-none");
        un_bookmarked[i].classList.toggle("d-flex");
    }



}
