const container = document.querySelector('.container')
const container2 = document.querySelector('.container2')

document.addEventListener("dragover", (e) => {
// document.addEventListener("mousemove", (e) => {
    rotateElement(e, container)
})

document.addEventListener("dragover", (e) => {
// document.addEventListener("mousemove", (e) => {
    rotateElement2(e, container2)
})


function rotateElement(event, element){
    // get mouse position
    const x = event.clientX;
    const y = event.clientY;

    // find the middle of the entire page
    const middleX = window.innerWidth / 2;
    const middleY = window.innerHeight / 2;

    // // find the middle of the container (I guess)
    // const middleX = container.innerWidth / 2;
    // const middleY = container.innerHeight / 2;

    // get offset from middle
    const offsetX = ((x - middleX) / middleX) * 100;
    const offsetY = ((y - middleY) / middleY) * 100;

    // console.log(offsetX, offsetY)
    console.log(element)


    element.style.setProperty("--rotateX", -1 * offsetY + "deg")
    element.style.setProperty("--rotateY", offsetX + "deg")
}

function rotateElement2(event, element){
    // get mouse position
    const x = event.clientX;
    const y = event.clientY;

    // find the middle of the entire page
    const middleX = window.innerWidth / 2;
    const middleY = window.innerHeight / 2;

    // // find the middle of the container (I guess)
    // const middleX = container.innerWidth / 2;
    // const middleY = container.innerHeight / 2;

    // get offset from middle
    const offsetX = ((x - middleX) / middleX) * 100;
    const offsetY = ((y - middleY) / middleY) * 100;

    // console.log(offsetX, offsetY)
    // console.log(element)

    element.style.setProperty("--rotateX", -1 * offsetY + "deg")
    element.style.setProperty("--rotateY", offsetX + "deg")
}









// .container{
//     padding: 2rem;
//     border-radius: 1rem;
//     position: relative;
//     transform-style: preserve-3d;
//     transform: 
//     perspective(5000px)
//     rotateY(var(--rotateY))
//     rotateX(var(--rotateX));
// }

// .container > * {
//     /* box-shadow: 0 0 3rem currentColor; */
// }

// .container:active{
//     cursor: move;

// }

// .container::before,
// .container::after{
//     content: "";
//     /* position: absolute; */
//     border-radius: inherit;
// }

// .container::before{
//     inset: 0.75rem;
//     background: black;
//     transform: translateZ(-49px);
//     filter: blur(15px);
//     opacity: 0.5;
// }

// /* gradient thingy */
// .container::after{
//     inset: -1rem;
//     background: linear-gradient(-45deg, rgba(217, 217, 147, 0.114), rgba(70, 70, 103, 0.622));
//     transform: translateZ(-50px);
// }