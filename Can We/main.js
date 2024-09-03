const container = document.getElementById("container");
const imageOne = document.querySelector(".image-1");
const imageTwo = document.querySelector(".image-2");
const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");

function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

btnNo.addEventListener("mouseover", (e) => {
    const containerRect = container.getBoundingClientRect();
    const btnRect = btnNo.getBoundingClientRect();

    let newTop, newLeft;

    // Ensure button stays within the container
    do {
        newTop = getRandomNumber(0, containerRect.height - btnRect.height);
    } while (Math.abs(newTop - btnRect.top) < containerRect.height / 3);

    do {
        newLeft = getRandomNumber(0, containerRect.width - btnRect.width);
    } while (Math.abs(newLeft - btnRect.left) < containerRect.width / 3);

    btnNo.style.top = newTop + "px";
    btnNo.style.left = newLeft + "px";
});

btnYes.addEventListener("click", (e) => {
    btnNo.classList.add("hide");
    imageOne.classList.add("hide");
    imageTwo.classList.remove("hide");
});
