const reviewContainer = document.getElementById("review");
const thankYou = document.getElementById("thank-you");
const number = document.getElementsByClassName("number");
const submitBtn = document.getElementById("submit");
const submitted_review = document.getElementById("submitted-review");

let reviewFinal = -1;

const toggleReview = () => {

    if (reviewFinal === -1) {
        for (let i = 0; i < number.length; i++) {
            number[i].style.backgroundColor = "red";
            number[i].style.color = "white";
        }

        // disable submit button
        submitBtn.disabled = true;
        submitBtn.innerHTML = "Please select a Rating";

        return;
    }

    submitted_review.innerHTML = `You selected ${reviewFinal} out of 5`;
    reviewContainer.classList.toggle("hidden");
    thankYou.classList.toggle("hidden");
};

const setReview = (e, review) => {

    for (let i = 0; i < number.length; i++) {
        number[i].style = "red";
    }
    
    submitBtn.disabled = false;
    submitBtn.innerHTML = "Submit";

    reviewFinal = review;
    for (let i = 0; i < number.length; i++) {
        number[i].classList.remove("selected");
    }
    e.target.classList.add("selected");
}