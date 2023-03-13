// start JS

const gradientBox = document.querySelector(".gradient-box");
const colorInputs = document.querySelectorAll(".colors input");

const generateGradient = () =>{
    const gradient = `linear-gradient(to top left, ${colorInputs[0].value}, ${(colorInputs[1].value)})`;
    gradientBox.style.background = gradient;
    console.log(gradient);
}

colorInputs.forEach(input =>{
    input.addEventListener("input", generateGradient);
});