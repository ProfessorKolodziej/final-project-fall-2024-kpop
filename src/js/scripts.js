// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

const startBtn = document.querySelector(".home-btn");

function goToNext(){
    const thisSection = this.closest(".homepage");
    const nextSection=document.querySelector(".quiz-1");

    thisSection.classList.toggle("show");
    nextSection.classList.toggle("show");
}

startBtn.addEventListener("click", goToNext);