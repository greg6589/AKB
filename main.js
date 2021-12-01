const moreBtn = document.querySelectorAll(".more");
const questionOne = document.querySelector(".ques1");
const questionTwo = document.querySelector(".ques2");
const answer = document.querySelector(".answer")



const displayWelcomeText = () => {
    questionOne.style.opacity = "1";
    setTimeout(function () {
        questionTwo.style.opacity = "1";
        setTimeout(function () {
            answer.style.opacity = "1";
        }, 1500);
    }, 1500);

}

setTimeout(displayWelcomeText, 700);



const showMore = (e) => {
    let activeBtn = e.target;
    let elmIndex = e.target.attributes.id.value;
    let servicesElm = document.getElementById(elmIndex);
    if (activeBtn.classList.contains("activeBtn")) {
        servicesElm.lastElementChild.classList.remove("active")
        activeBtn.classList.remove("activeBtn");
        activeBtn.classList.remove("activeArrow")
    } else {
        activeBtn.classList.add("activeBtn");
        activeBtn.classList.add("activeArrow")
        servicesElm.lastElementChild.classList.add("active")
    }
}


moreBtn.forEach(btn => {
    btn.addEventListener('click', showMore)
});