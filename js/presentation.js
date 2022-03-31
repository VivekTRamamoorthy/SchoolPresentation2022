

const colors = [
        "#3182ce",
        "#805ad5",
        "#38a169",
        "#63b3ed",
        "#ed8936",
        "#38b2ac",
        "#ecc94b",
        "#f56565",
]


var currentSlide=0;
const slides = document.querySelectorAll(".slide")
const container = document.querySelector(".container")
container.addEventListener("scroll",()=>{currentSlide = Math.round(container.scrollLeft/container.clientWidth)})


const leftArrow = document.getElementById("left-arrow")
leftArrow.addEventListener('click',scrollLeft)

const rightArrow = document.getElementById("right-arrow")
rightArrow.addEventListener('click',scrollRight)


document.addEventListener("DOMContentLoaded",()=>{
    // color all slides
    slides.forEach((slide,index)=>{slide.style="background-color:"+colors[index%colors.length]})

    // Arrow buttons:


})


function scrollLeft(){
    container.scrollBy({
        left: -100,
        behavior: 'smooth'
      });

}
function scrollRight(){
    container.scrollBy({
        left: 100,
        behavior: 'smooth'
      });
}
