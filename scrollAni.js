
let windowWidth;
let windowHeight;

let scrollY = 0;
let relativeScrollY = 0;
let totalScrollHeight = 0;
let currentScene = 0;
let calAnimationVal;

let prevDuration = 0;
let pixelDuration = 0;

let animationKeyframes = [
    { //contentsA out
        animationVal:{
            opacity:[1, 0],
            textMove:[0, -100]
        }
    },
    { //contentsB in
        animationVal:{
            opacity:[0, 1],
            imgBox:[-60, 0],
            textBox:[60, 0]
        }
    },
    { //contentsB out
        animationVal:{
            opacity:[1, 0],
            imgBox:[0, -60],
            textBox:[0, 60]
        }
    },
    { //contentsC in
        animationVal:{
            opacity:[0, 1]
        }
    },
    { //contentsC out
        animationVal:{
            opacity:[1, 0]
        }
    },
    { //contentsD in
        animationVal:{
            opacity:[0, 1],
            imgBox:[-60, 0],
            textBox:[60, 0]
        }
    },
    { //contentsD out
        animationVal:{
            opacity:[1, 0],
            imgBox:[0, -60],
            textBox:[0, 60]
        }
    },
    { //contentsE in
        animationVal:{
            opacity:[0, 1]
        }
    },
    { //contentsE out
        animationVal:{
            opacity:[1, 0]
        }
    },
    { //contentsF in
        animationVal:{
            opacity:[0, 1],
            imgBox:[-60, 0],
            textBox:[60, 0]
        }
    },
    { //contentsF out
        animationVal:{
            opacity:[1, 1],
            imgBox:[0, -60],
            textBox:[0, 60]
        }
    }
  
]

let elemBody = document.body;

function init()
{
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    render();
    resizeHandler();
    window.addEventListener('scroll', scrollHandler);
    window.addEventListener('resize', resizeHandler);
}

function scrollHandler()
{
    scrollY = window.pageYOffset;

    if(scrollY < 0 || scrollY > (totalScrollHeight - windowHeight))
    {
        return;
    }

    if(scrollY > pixelDuration + prevDuration)
    {
        prevDuration += pixelDuration;
        currentScene ++;
    }

    else if (scrollY < prevDuration)
    {
        currentScene--;
        prevDuration -= pixelDuration;
    }

    relativeScrollY = scrollY - prevDuration;

    render(currentScene);
}


function resizeHandler()
{
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;

    totalScrollHeight = 0;
    pixelDuration = windowHeight * 0.5;

    for( let i  = 0; i < animationKeyframes.length; i++)
    {
        totalScrollHeight += pixelDuration;
    }
    totalScrollHeight += windowHeight;

    elemBody.style.height = totalScrollHeight + 'px';
}

function render(nowState)
{
    let targetElem = document.querySelectorAll('.container');

   switch(nowState)
   {
       case 0: {
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[0].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[0].animationVal.opacity);
            moveVal = calcAni(animationKeyframes[0].animationVal.textMove);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveVal + 'px)';
        } break;
       case 1: {
        let opacityVal, moveValA, moveValB;
        let scrollAniElem = targetElem[1].querySelectorAll('.sa');
        opacityVal = calcAni(animationKeyframes[1].animationVal.opacity);
        moveValA = calcAni(animationKeyframes[1].animationVal.imgBox);
        moveValB = calcAni(animationKeyframes[1].animationVal.textBox);
        scrollAniElem[0].style.opacity = opacityVal;
        scrollAniElem[1].style.opacity = opacityVal;
        scrollAniElem[0].style.transform = 'translateX(' + moveValA + 'px)';
        scrollAniElem[1].style.transform = 'translateX(' + moveValB + 'px)';
        }break;
        case 2: {
            let opacityVal, moveValA, moveValB;
            let scrollAniElem = targetElem[1].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[2].animationVal.opacity);
            moveValA = calcAni(animationKeyframes[2].animationVal.imgBox);
            moveValB = calcAni(animationKeyframes[2].animationVal.textBox);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateX(' + moveValA + 'px)';
            scrollAniElem[1].style.transform = 'translateX(' + moveValB + 'px)';
        }break;
        case 3: {
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[2].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[3].animationVal.opacity);
            scrollAniElem[0].style.opacity = opacityVal;
        }break;
        case 4: {
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[2].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[4].animationVal.opacity);
            scrollAniElem[0].style.opacity = opacityVal;
        }break;
        case 5: {
            let opacityVal, moveValA, moveValB;
            let scrollAniElem = targetElem[3].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[5].animationVal.opacity);
            moveValA = calcAni(animationKeyframes[5].animationVal.imgBox);
            moveValB = calcAni(animationKeyframes[5].animationVal.textBox);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateX(' + moveValA + 'px)';
            scrollAniElem[1].style.transform = 'translateX(' + moveValB + 'px)';
            }break;
      case 6: {
            let opacityVal, moveValA, moveValB;
            let scrollAniElem = targetElem[3].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[6].animationVal.opacity);
            moveValA = calcAni(animationKeyframes[6].animationVal.imgBox);
            moveValB = calcAni(animationKeyframes[6].animationVal.textBox);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateX(' + moveValA + 'px)';
            scrollAniElem[1].style.transform = 'translateX(' + moveValB + 'px)';
        }break;
        case 7: {
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[4].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[7].animationVal.opacity);
            scrollAniElem[0].style.opacity = opacityVal;
        }break;
        case 8: {
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[4].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[8].animationVal.opacity);
            scrollAniElem[0].style.opacity = opacityVal;
        }break;
        case 9: {
            let opacityVal, moveValA, moveValB;
            let scrollAniElem = targetElem[5].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[9].animationVal.opacity);
            moveValA = calcAni(animationKeyframes[9].animationVal.imgBox);
            moveValB = calcAni(animationKeyframes[9].animationVal.textBox);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateX(' + moveValA + 'px)';
            scrollAniElem[1].style.transform = 'translateX(' + moveValB + 'px)';
            }break;
   
      

   }
}

function calcAni(value)
{
    return( relativeScrollY / pixelDuration) * (value[1] - value[0]) + value[0];
}

init()