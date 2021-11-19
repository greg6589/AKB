const moreBtn = document.querySelectorAll(".more");



const showMore = (e) => {
    let activeBtn = e.target;
    let elmIndex = e.target.attributes.id.value;
    let servicesElm = document.getElementById(elmIndex);

    if (activeBtn.classList.contains("activeBtn")) {
        activeBtn.textContent = "więcej";
        activeBtn.classList.remove("activeBtn");
        servicesElm.classList.toggle("active");
    } else {
        activeBtn.classList.add("activeBtn");
        activeBtn.textContent = "mniej";
        servicesElm.classList.toggle("active");
    }

}



moreBtn.forEach(btn => {
    btn.addEventListener('click', showMore)
});