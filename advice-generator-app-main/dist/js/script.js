

const adviceId = document.getElementById("advice_id");
const adviceData = document.getElementById("advice_data");
const dice = document.getElementById("dice");
const loading = document.getElementById("loading");

const gettingAdvice = async () => {

    console.log("Getting Advice...");

        dice.classList.add("hidden");
        loading.classList.remove("hidden");
    
    const rand = Math.floor(Math.random() * 224) + 1;

    const api = `https://api.adviceslip.com/advice/${rand}`;

    const response = await fetch(api);
    const data = await response.json();
    const adviceResult = data.slip;

    console.log(adviceResult);

    setTimeout(() => {
        adviceId.innerHTML = adviceResult.id;
        adviceData.innerHTML = `"${adviceResult.advice}"`;
        dice.classList.remove("hidden");
        loading.classList.add("hidden");
    }, 500);

};

gettingAdvice();