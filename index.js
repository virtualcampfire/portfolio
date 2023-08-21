const profileImg = document.getElementById('profile-img');

profileImg.addEventListener('mouseover', () => {
    profileImg.style.animation = 'setImg 0.5s ease-in-out forwards';
});

profileImg.addEventListener('mouseleave', () => {
    profileImg.style.animation = 'setImgBack 0.5s ease-in-out forwards';
});

let tempText;
let text = document.getElementById('welcome-text');
tempText = text.innerText.split('');
text.innerText = '\u2009\u2009';

let arrayCounter = 0
function typing() {
    if(tempText[arrayCounter] == ' ') {
        text.innerText += "\u2009\u2009"
    }
    else{
        text.innerText += tempText[arrayCounter];
    }
    arrayCounter++;
    if(arrayCounter == tempText.length){
        clearInterval(interval);
    }
}
let interval = setInterval(typing, 160);


function setInfoToActive(){
    const info = document.getElementsByClassName('siteInfoActive')[0];
    const infoElements = document.getElementsByClassName('siteInfoItem')
    for (let i = 0; i < infoElements.length; i++) {
        infoElements[i].style.animation = 'changeOpacity 0.7s ease-in-out forwards';
    }
    info.style.opacity = 1;
    info.style.pointerEvents = 'all';
    info.style.animation = 'siteInfoActive 1s ease-in-out forwards';
}
function siteInfoActiveBack(){
    const infoElements = document.getElementsByClassName('siteInfoItem')
    for (let i = 0; i < infoElements.length; i++) {
        infoElements[i].style.animation = 'changeOpacityBack 0.7s ease-in-out forwards';
    }
    const info = document.getElementsByClassName('siteInfoActive')[0];  
    info.style.pointerEvents = 'none';
    info.style.animation = 'siteInfoActiveBack 1s ease-in-out forwards';
}

const infoActive = document.getElementsByClassName('siteInfo')[0];
const infoActiveBack = document.getElementsByClassName('siteInfoActive')[0];

infoActive.addEventListener('mouseover', () => {
    setInfoToActive()
});

infoActiveBack.addEventListener('mouseleave', () => {
    siteInfoActiveBack()
    setTimeout(siteInfoActiveBackOpacity, 1000);
});

function siteInfoActiveBackOpacity(){
    const info = document.getElementsByClassName('siteInfoActive')[0];
    info.style.opacity = 0;
}



