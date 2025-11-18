import "/css/style.css";
import JSConfetti from "js-confetti";

const init = () => {
  const $form = document.querySelector("form");
  const jsConfetti = new JSConfetti();

  $form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("submitted");
    event.target.reset();
    jsConfetti.addConfetti();
  });
};

init();
