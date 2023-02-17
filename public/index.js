const container2 = document.querySelector('.container2')

const heroImage = document.querySelector('.front-image') 

document.addEventListener("dragover", (e) => {
    rotateElement(e, container2)
})

document.addEventListener('keydown', (event) => {
    applyCommand(event.key.toUpperCase())
})


const animations = {
    'green_lantern-image': 'animate__bounceInUp',
    'green_lantern-image2': 'animate__bounceOutUp',
    
    'superman-image': 'animate__bounceInUp',
    'superman-image2': 'animate__bounceOutUp',

    'batman-image': 'animate__fadeIn',
    'batman-image2': 'animate__fadeOut',

    'flash-image': 'animate__zoomInRight',
    'flash-image2': 'animate__zoomOutLeft',

    'aquaman-image': 'animate__zoomIn',
    'aquaman-image2': 'animate__zoomOut',

    'wonder_woman-image': 'animate__slideInDown',
    'wonder_woman-image2': 'animate__slideOutUp',



    /* MARVEL */

    'spiderman-image': 'animate__zoomInUp',
    'spiderman-image2': 'animate__zoomOutUp',

    'thor-image': 'animate__zoomIn',
    'thor-image2': 'animate__zoomOut',

    'ironman-image': 'animate__zoomInDown',
    'ironman-image2': 'animate__zoomOutUp',

    'hulk-image': 'animate__zoomInDown',
    'hulk-image2': 'animate__zoomOutUp',

    'black_widow-image': 'animate__fadeIn',
    'black_widow-image2': 'animate__fadeOut',

    'antman-image': 'animate__zoomIn',
    'antman-image2': 'animate__zoomOut',
}


function applyCommand(key){
    const audio = document.getElementById('audio')
    const effect = document.getElementById('effect')
    switch(key){
        case 'A':
            heroImage.classList.add(heroImage.classList[1] + '-animation');
            audio.play()
            setTimeout(() => {
                heroImage.classList.remove(heroImage.classList[1] + '-animation');
            }, 12000)
        break;

        case 'S':   
            heroImage.classList.add(heroImage.classList[1] + '-animation');
            if (heroImage.classList[5] === animations[`${heroImage.classList[1] + '2'}`]) {
                
                setTimeout(() => {
                    heroImage.classList.remove(animations[`${heroImage.classList[1] + '2'}`]);
                    heroImage.classList.remove(animations[`${heroImage.classList[1]}`]);
                    heroImage.classList.add(animations[`${heroImage.classList[1]}`]);
                    effect.play()
                }, 2000)    
            }
            if (heroImage.classList[5] !== animations[`${heroImage.classList[1] + '2'}`]) {
                heroImage.classList.add(animations[`${heroImage.classList[1] + '2'}`]);
                heroImage.classList.remove(animations[`${heroImage.classList[1]}`]);
                effect.play()
                setTimeout(() => {
                    heroImage.classList.remove(animations[`${heroImage.classList[1] + '2'}`]);
                    heroImage.classList.add(animations[`${heroImage.classList[1]}`]);
                }, 1000)
                setTimeout(() => {
                    effect.play()
                }, 1050)
            }
            
            setTimeout(() => {
                heroImage.classList.remove(heroImage.classList[1] + '-animation');
            }, 7000)
        break;

        case 'D':
            heroImage.classList.remove(animations[`${heroImage.classList[1] + '2'}`]);
            heroImage.classList.add(heroImage.classList[1] + '-animation');
            
            setTimeout(() => {
                effect.play()
                heroImage.classList.add(animations[`${heroImage.classList[1] + '2'}`]);
            }, 7000)
        break;
    }
}

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
    // console.log(element)


    element.style.setProperty("--rotateX", -1 * offsetY + "deg")
    element.style.setProperty("--rotateY", offsetX + "deg")
}



