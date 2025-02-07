let safetyDiv = document.querySelector(".container2");
let safetyItems = safetyDiv.querySelectorAll(".safety");

for (let i = 0; i < safetyItems.length; i++) {
    let safetyDivItems = safetyItems[i].querySelector(".box4");
    let safetyBox3 = safetyItems[i].querySelector(".box3");

    safetyBox3.addEventListener("mouseover", function () {
        if (!safetyItems[i].classList.contains("active")) {
            safetyItems[i].classList.add("active");
        }
    });
    safetyItems[i].addEventListener("mouseout", function (e) {
        // Collapse only if pointer is outside the current .safety div
        if (!safetyItems[i].contains(e.relatedTarget)) {
            safetyItems[i].classList.remove("active");
        }
    });
}
