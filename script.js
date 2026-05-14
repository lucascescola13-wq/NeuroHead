gsap.registerPlugin(ScrollTrigger);

const arrowsbtn = document.querySelectorAll(".arrow");
const p = document.querySelector("p");
const h1 = document.querySelector("h1");
const lBtn = document.querySelector(".left");
const rBtn = document.querySelector(".right");
const fone = document.querySelector(".fone");
const wave = document.querySelector(".wave");
const bodycolor = document.querySelector(".hero");

//#region troca de fones
let fones = false;
function trocarfones(imagem, position, rotate) {
  gsap.to(fone, {
    x: position,
    duration: 1.1,
    ease: "back.in(1.2)",
    rotate: rotate,
    onComplete: () => {
      fone.src = imagem;
      gsap.to(fone, {
        x: 0,
        duration: 1.4,
        ease: "back.out(1.4)",
        rotate: 0,
      });
    },
  });
}

//#endregion

//#region botões
lBtn.addEventListener("click", () => {
  fones = !fones;
  if (fones) {
    trocarfones("fonepreto.webp", -2100, -45);
    efectwave("#211F1D", "left");
    arrows();
  } else {
    trocarfones("fonebranco.webp", -2100, -45);
    efectwave("#FFFAF2", "left");
    arrows();
  }
});

rBtn.addEventListener("click", () => {
  fones = !fones;
  if (fones) {
    trocarfones("fonepreto.webp", 2100, 45);
    efectwave("#211F1D", "right");
    arrows();
  } else {
    trocarfones("fonebranco.webp", 2100, 45);
    efectwave("#FFFAF2", "right");
    arrows();
  }
});

//#endregion

//#region efectwave
function efectwave(cor, lado) {
  arrowsbtn.forEach((arrow) => {
    arrow.classList.toggle("pn");
  });
  wave.style.backgroundColor = cor;
  wave.style.left = "auto";
  wave.style.right = "auto";
  wave.style[lado == "left" ? "left" : "right"] = "20px";
  gsap.to(wave, {
    scale: 30,
    delay: 1.3,
    duration: 1.5,
    onComplete: () => {
      bodycolor.classList.toggle("whiteh");
      bodycolor.classList.toggle("blackh");
      gsap.set(wave, {
        scale: 0,
      });
      arrowsbtn.forEach((arrow) => {
        arrow.classList.toggle("pn");
      });
    },
  });
}
//#endregion

//#region arrow function
function arrows() {
  arrowsbtn.forEach((arrow) => {
    arrow.classList.toggle("arrow-dark");
    arrow.classList.toggle("arrow-light");
  });
}
//#endregion
