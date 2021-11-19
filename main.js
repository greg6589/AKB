const moreBtn = document.querySelectorAll(".more");



const showMore = (e) => {
    let activeBtn = e.target;
    let elmIndex = e.target.attributes.id.value;
    let servicesElm = document.getElementById(elmIndex);
    if (activeBtn.classList.contains("activeBtn")) {
        activeBtn.textContent = "więcej";
        servicesElm.lastElementChild.classList.remove("active")
        activeBtn.classList.remove("activeBtn");
    } else {
        activeBtn.classList.add("activeBtn");
        activeBtn.textContent = "mniej";
        servicesElm.lastElementChild.classList.add("active")
    }
}


moreBtn.forEach(btn => {
    btn.addEventListener('click', showMore)
});