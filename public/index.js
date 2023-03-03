const container2 = document.querySelector('.container2')

const heroImage = document.querySelector('.front-image') 
const heroLogo = document.querySelector('.logo-image')

document.addEventListener("dragover", (e) => {
    rotateElement(e, container2)
})

document.addEventListener('keydown', (event) => {
    applyCommand(event.key.toUpperCase())
})


const animations = {
    'green_lantern-image': 'animate__zoomInUp',
    'green_lantern-image2': 'animate__bounceOutUp',
    
    'superman-image': 'animate__zoomInUp',
    'superman-image2': 'animate__bounceOutUp',

    'batman-image': 'animate__fadeIn',
    'batman-image2': 'animate__fadeOut',

    'flash-image': 'animate__zoomInRight',
    'flash-image2': 'animate__zoomOutLeft',

    'aquaman-image': 'animate__zoomIn',
    'aquaman-image2': 'animate__zoomOut',

    'wonder_woman-image': 'animate__zoomIn',
    'wonder_woman-image2': 'animate__slideOutUp',

    'shazam-image': 'animate__zoomInUp',
    'shazam-image2': 'animate__bounceOutUp',
    
    'martian_manhunter-image': 'animate__zoomInUp',
    'martian_manhunter-image2': 'animate__bounceOutUp',


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

    'doctor_strange-image': 'animate__zoomIn',
    'doctor_strange-image2': 'animate__fadeOutDown',

    'wolverine-image': 'animate__zoomInDown',
    'wolverine-image2': 'animate__bounceOutUp',
}

function applyCommand(key){
    const audio = document.getElementById('audio')
    const effect = document.getElementById('effect')
    switch(key){
        case 'A':
            const buttonA = document.getElementById('A')     
            buttonA.style.color = 'yellow'
            heroImage.classList.add(heroImage.classList[1] + '-animation');
            audio.play()
            window.navigator.vibrate(200)
            setTimeout(() => {
                heroImage.classList.remove(heroImage.classList[1] + '-animation');
                buttonA.style.color = 'white'
                window.navigator.vibrate(0)
            }, 12000)
        break;

        case 'S':   
            const buttonS = document.getElementById('S')     
            buttonS.style.color = 'yellow'
            heroImage.classList.add(heroImage.classList[1] + '-animation');
            if (heroImage.classList[5] === animations[`${heroImage.classList[1] + '2'}`]) {
                
                setTimeout(() => {
                    heroImage.classList.remove(animations[`${heroImage.classList[1] + '2'}`]);
                    heroImage.classList.remove(animations[`${heroImage.classList[1]}`]);
                    heroImage.classList.add(animations[`${heroImage.classList[1]}`]);
                    effect.play()
                    // windows.navigator.vibrate([200,50,200])
                }, 1000)    
            }
            if (heroImage.classList[5] !== animations[`${heroImage.classList[1] + '2'}`]) {
                heroImage.classList.add(animations[`${heroImage.classList[1] + '2'}`]);
                heroImage.classList.remove(animations[`${heroImage.classList[1]}`]);
                effect.play()
                setTimeout(() => {
                    heroImage.classList.remove(animations[`${heroImage.classList[1] + '2'}`]);
                    heroImage.classList.add(animations[`${heroImage.classList[1]}`]);
                    // windows.navigator.vibrate([200,50,200])
                }, 1000)
                setTimeout(() => {
                    effect.play()
                }, 1050)
            }
            
            setTimeout(() => {
                heroImage.classList.remove(heroImage.classList[1] + '-animation');
                buttonS.style.color ='white'
            }, 7000)
        break;

        case 'D':
            const buttonD = document.getElementById('D')     
            buttonD.style.color = 'yellow'
            heroImage.classList.add(heroImage.classList[1] + '-animation');
            if (heroImage.classList[5] === animations[`${heroImage.classList[1] + '2'}`]) {
                
                setTimeout(() => {
                    heroImage.classList.remove(animations[`${heroImage.classList[1] + '2'}`]);
                    heroImage.classList.add(animations[`${heroImage.classList[1]}`]);
                    heroImage.classList.remove(animations[`${heroImage.classList[1]}`]);
                    effect.play()
                    // windows.navigator.vibrate([200,50,200])
                }, 1000)    
            }
            if (heroImage.classList[5] !== animations[`${heroImage.classList[1] + '2'}`]) {
                heroImage.classList.remove(animations[`${heroImage.classList[1] + '2'}`]);
                heroImage.classList.add(animations[`${heroImage.classList[1]}`]);
                
                setTimeout(() => {
                    effect.play()
                    heroImage.classList.add(animations[`${heroImage.classList[1] + '2'}`]);
                    heroImage.classList.remove(animations[`${heroImage.classList[1]}`]);
                    // windows.navigator.vibrate([200,50,200])
                }, 1000)
                setTimeout(() => {
                    effect.play()
                }, 1050)
            }
            
            setTimeout(() => {
                heroImage.classList.remove(heroImage.classList[1] + '-animation');
                buttonD.style.color ='white'
            }, 7000)
        break;

        case 'W':
            const buttonW = document.getElementById('W')     
            buttonW.style.color = 'yellow'
            heroImage.classList.add(heroImage.classList[1] + '-animation');
            heroLogo.classList.remove(animations[`${heroImage.classList[1]}`]);
            setTimeout(() => {
                heroLogo.classList.add(animations[`${heroImage.classList[1]}`]);
                // windows.navigator.vibrate([200,50,200])
            }, 200)

            setTimeout(() => {
                heroImage.classList.remove(heroImage.classList[1] + '-animation');
                buttonW.style.color = 'white'
            }, 4000)
        break;

        case 'E':
            const buttonE = document.getElementById('E')     
            buttonE.style.color = 'yellow'
            heroImage.classList.add(heroImage.classList[1] + '-animation');
            heroLogo.style.visibility = heroLogo.style.visibility === 'hidden' ? "visible" : "hidden";

            heroLogo.classList.remove(heroImage.classList[1] + '-animation');

            setTimeout(() => {
                heroLogo.classList.remove(heroImage.classList[1] + '-animation');
                // windows.navigator.vibrate([200,50,200])
            }, 1000)

            setTimeout(() => {
                heroImage.classList.remove(heroImage.classList[1] + '-animation');
                buttonE.style.color = 'white'
            }, 2000)
        break;

        default:
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
    const offsetX = ((x - middleX) / middleX) * 45;
    const offsetY = ((y - middleY) / middleY) * 45;

    // console.log(offsetX, offsetY)
    // console.log(element)


    element.style.setProperty("--rotateX", -1 * offsetY + "deg")
    element.style.setProperty("--rotateY", offsetX + "deg")
}



