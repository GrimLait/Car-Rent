
document.getElementById("main-action").onclick = function () {
    document.getElementById("cars").scrollIntoView({ behavior: "smooth" });
};
  
let buttons = document.getElementsByClassName("car-button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
    document.getElementById("price").scrollIntoView({ behavior: "smooth" });
    };
}
  

document.getElementById("price-action").onclick = function () {
    if (document.getElementById("name").value === "") {
      alert("Заповніть поле ім'я!");
    } else if (document.getElementById("phone").value === "") {
      alert("Заповніть поле телефон!");
    } else if (document.getElementById("car").value === "") {
      alert("Заповніть поле автомобіль!");
    } else {
      alert("Спасибі за заявку. Ми зв'яжемося з Вами незабаром.");
    }
};
  

document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector(".price-image");
    document.addEventListener("mousemove", (event) => {
      layer.style.transform =
        "translate3d(" +
        (event.clientX * 0.5) / "цифра/число" +
        "px," +
        (event.clientY * 0.8) / "цифра/число" +
        "px,0px)";
    });
  
    const elem = document.querySelector(".main");
    document.addEventListener("scroll", () => {
      elem.style.backgroundPositionX =
        "0" + "цифра/число" * window.pageYOffset + "px";
    });
});  