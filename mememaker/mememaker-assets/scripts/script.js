const bodyList = document.getElementById('body-list');
const headList = document.getElementById('head-list');
const eyesList = document.getElementById('eyes-list');
const mouthList = document.getElementById('mouth-list');
const bgList = document.getElementById('bg-list');
const clothesList = document.getElementById('clothes-list');
const necklaceList = document.getElementById('necklace-list');

var current_body = undefined;
var current_head = undefined;
var current_eyes = undefined;
var current_mouth = undefined;
var current_bg = undefined;
var current_clothes = undefined;
var current_necklace = undefined;

var selected_body = 0;
var selected_head = 0;
var selected_eyes = 0;
var selected_mouth = 0;
var selected_bg = 1;
var selected_clothes = 0;
var selected_necklace = 0;

function setImage(type, image) {
    switch(type) {
        case 'body':
            current_body = image;
            break;
        case 'head':
            current_head = image;
            break;
        case 'eyes':
            current_eyes = image;
            break;
        case 'mouth':
            current_mouth = image;
            break;
        case 'bg':
            current_bg = image;
            break;
        case 'clothes':
            current_clothes = image;
            break;
        case 'necklace':
            current_necklace = image;
            break;
    }
}

function loadImage(type, imgURL) {
    if(imgURL == undefined) {
        setImage(type, undefined);
    }

    var newImage = new Image();
    newImage.src = imgURL;
    newImage.crossOrigin = 'Anonymous';
    newImage.onload = () => {
        setImage(type, newImage);
    }
}

function getSelectedIdx(type) {
    switch(type) {
        case 'head':
            return selected_head;
        case 'eyes':
            return selected_eyes;
        case 'mouth':
            return selected_mouth;
        case 'bg':
            return selected_bg;
        case 'clothes':
            return selected_clothes;
        case 'necklace':
            return selected_necklace;
    }
}

function setSelectedIdx(type,idx) {
    switch(type) {
        case 'body':
            selected_body = idx;
            break;
        case 'head':
            selected_head = idx;
            break;
        case 'eyes':
            selected_eyes = idx;
            break;
        case 'mouth':
            selected_mouth = idx;
            break;
        case 'bg':
            selected_bg = idx;
            break;
        case 'clothes':
            selected_clothes = idx;
            break;
        case 'necklace':
            selected_necklace = idx;
            break;
    }
}

function AddParts(listElem, type, idx, iconURL, imgURL, selected=false) {
    let parts = document.createElement('div');
    parts.className = 'parts';
    parts.id = `${type}-${idx}`;
    if(selected == true) {
        parts.classList.add('parts-selected');
        loadImage(type, imgURL);
    }
    
    let iconImg = document.createElement('img');
    iconImg.src = iconURL;

    parts.onclick = () => {
        const prevIdx = getSelectedIdx(type);
        let prevParts = document.getElementById(`${type}-${prevIdx}`);
        if(prevParts) {
            prevParts.classList.remove('parts-selected');
        }

        setSelectedIdx(type, idx);
        parts.classList.add('parts-selected');
        loadImage(type, imgURL);
    }

    parts.appendChild(iconImg);
    listElem.appendChild(parts);

    return parts;
}

function selectParts(type, idx) {
    let parts = document.getElementById(`${type}-${idx}`);
    if(parts == undefined) {
        console.log(`${type} ${idx}`)
    }
    parts.click();
    setSelectedIdx(type, idx);
}

AddParts(bodyList, 'body',0, undefined, 'mememaker-assets/img/base.png', true);

AddParts(headList, 'head',0, 'mememaker-assets/img/none.png', undefined, true);
AddParts(headList, 'head',1, 'mememaker-assets/img/icons/head/1.png', 'mememaker-assets/img/head/1.png');
AddParts(headList, 'head',2, 'mememaker-assets/img/icons/head/2.png', 'mememaker-assets/img/head/2.png');
AddParts(headList, 'head',3, 'mememaker-assets/img/icons/head/3.png', 'mememaker-assets/img/head/3.png');
AddParts(headList, 'head',4, 'mememaker-assets/img/icons/head/4.png', 'mememaker-assets/img/head/4.png');
AddParts(headList, 'head',5, 'mememaker-assets/img/icons/head/5.png', 'mememaker-assets/img/head/5.png');
AddParts(headList, 'head',6, 'mememaker-assets/img/icons/head/6.png', 'mememaker-assets/img/head/6.png');
AddParts(headList, 'head',7, 'mememaker-assets/img/icons/head/7.png', 'mememaker-assets/img/head/7.png');
AddParts(headList, 'head',8, 'mememaker-assets/img/icons/head/8.png', 'mememaker-assets/img/head/8.png');
AddParts(headList, 'head',9, 'mememaker-assets/img/icons/head/9.png', 'mememaker-assets/img/head/9.png');
AddParts(headList, 'head',10, 'mememaker-assets/img/icons/head/10.png', 'mememaker-assets/img/head/10.png');
// AddParts(headList, 'head',11, 'mememaker-assets/img/icons/head/011.png', 'mememaker-assets/img/head/011.png');
// AddParts(headList, 'head',12, 'mememaker-assets/img/icons/head/012.png', 'mememaker-assets/img/head/012.png');

AddParts(eyesList, 'eyes',0, 'mememaker-assets/img/none.png', undefined, true);
AddParts(eyesList, 'eyes',1, 'mememaker-assets/img/icons/eyes/1.png', 'mememaker-assets/img/eyes/1.png');
AddParts(eyesList, 'eyes',2, 'mememaker-assets/img/icons/eyes/2.png', 'mememaker-assets/img/eyes/2.png');
AddParts(eyesList, 'eyes',3, 'mememaker-assets/img/icons/eyes/3.png', 'mememaker-assets/img/eyes/3.png');
AddParts(eyesList, 'eyes',4, 'mememaker-assets/img/icons/eyes/4.png', 'mememaker-assets/img/eyes/4.png');
AddParts(eyesList, 'eyes',5, 'mememaker-assets/img/icons/eyes/5.png', 'mememaker-assets/img/eyes/5.png');
// AddParts(eyesList, 'eyes',6, 'mememaker-assets/img/icons/eyes/006.png', 'mememaker-assets/img/eyes/006.png');
// AddParts(eyesList, 'eyes',7, 'mememaker-assets/img/icons/eyes/007.png', 'mememaker-assets/img/eyes/007.png');
// AddParts(eyesList, 'eyes',8, 'mememaker-assets/img/icons/eyes/008.png', 'mememaker-assets/img/eyes/008.png');

AddParts(mouthList, 'mouth',0, 'mememaker-assets/img/none.png', undefined, true);
AddParts(mouthList, 'mouth',1, 'mememaker-assets/img/icons/mouth/1.png', 'mememaker-assets/img/mouth/1.png');
AddParts(mouthList, 'mouth',2, 'mememaker-assets/img/icons/mouth/2.png', 'mememaker-assets/img/mouth/2.png');
AddParts(mouthList, 'mouth',3, 'mememaker-assets/img/icons/mouth/3.png', 'mememaker-assets/img/mouth/3.png');
AddParts(mouthList, 'mouth',4, 'mememaker-assets/img/icons/mouth/4.png', 'mememaker-assets/img/mouth/4.png');
AddParts(mouthList, 'mouth',5, 'mememaker-assets/img/icons/mouth/5.png', 'mememaker-assets/img/mouth/5.png');
AddParts(mouthList, 'mouth',6, 'mememaker-assets/img/icons/mouth/6.png', 'mememaker-assets/img/mouth/6.png');
AddParts(mouthList, 'mouth',7, 'mememaker-assets/img/icons/mouth/7.png', 'mememaker-assets/img/mouth/7.png');

AddParts(necklaceList, 'necklace',0, 'mememaker-assets/img/none.png', undefined, true);
AddParts(necklaceList, 'necklace',1, 'mememaker-assets/img/icons/necklace/1.png', 'mememaker-assets/img/necklace/1.png');
AddParts(necklaceList, 'necklace',2, 'mememaker-assets/img/icons/necklace/2.png', 'mememaker-assets/img/necklace/2.png');
AddParts(necklaceList, 'necklace',3, 'mememaker-assets/img/icons/necklace/3.png', 'mememaker-assets/img/necklace/3.png');
AddParts(necklaceList, 'necklace',4, 'mememaker-assets/img/icons/necklace/4.png', 'mememaker-assets/img/necklace/4.png');
AddParts(necklaceList, 'necklace',5, 'mememaker-assets/img/icons/necklace/5.png', 'mememaker-assets/img/necklace/5.png');
AddParts(necklaceList, 'necklace',6, 'mememaker-assets/img/icons/necklace/6.png', 'mememaker-assets/img/necklace/6.png');
AddParts(necklaceList, 'necklace',7, 'mememaker-assets/img/icons/necklace/7.png', 'mememaker-assets/img/necklace/7.png');

AddParts(clothesList, 'clothes', 0, 'mememaker-assets/img/none.png', undefined, true);
AddParts(clothesList, 'clothes', 1, 'mememaker-assets/img/icons/clothes/1.png', 'mememaker-assets/img/clothes/1.png');
AddParts(clothesList, 'clothes', 2, 'mememaker-assets/img/icons/clothes/2.png', 'mememaker-assets/img/clothes/2.png');
AddParts(clothesList, 'clothes', 3, 'mememaker-assets/img/icons/clothes/3.png', 'mememaker-assets/img/clothes/3.png');
AddParts(clothesList, 'clothes', 4, 'mememaker-assets/img/icons/clothes/4.png', 'mememaker-assets/img/clothes/4.png');
AddParts(clothesList, 'clothes', 5, 'mememaker-assets/img/icons/clothes/5.png', 'mememaker-assets/img/clothes/5.png');
AddParts(clothesList, 'clothes', 6, 'mememaker-assets/img/icons/clothes/6.png', 'mememaker-assets/img/clothes/6.png');
AddParts(clothesList, 'clothes', 7, 'mememaker-assets/img/icons/clothes/7.png', 'mememaker-assets/img/clothes/7.png');
AddParts(clothesList, 'clothes', 8, 'mememaker-assets/img/icons/clothes/8.png', 'mememaker-assets/img/clothes/8.png');
AddParts(clothesList, 'clothes', 9, 'mememaker-assets/img/icons/clothes/9.png', 'mememaker-assets/img/clothes/9.png');
AddParts(clothesList, 'clothes', 10, 'mememaker-assets/img/icons/clothes/10.png', 'mememaker-assets/img/clothes/10.png');
AddParts(clothesList, 'clothes', 11, 'mememaker-assets/img/icons/clothes/11.png', 'mememaker-assets/img/clothes/11.png');

AddParts(bgList, 'bg', 1, 'mememaker-assets/img/icons/background/1.png', 'mememaker-assets/img/background/1.png', true);
AddParts(bgList, 'bg', 2, 'mememaker-assets/img/icons/background/2.png', 'mememaker-assets/img/background/2.png');
AddParts(bgList, 'bg', 3, 'mememaker-assets/img/icons/background/3.png', 'mememaker-assets/img/background/3.png');
AddParts(bgList, 'bg', 4, 'mememaker-assets/img/icons/background/4.png', 'mememaker-assets/img/background/4.png');
AddParts(bgList, 'bg', 5, 'mememaker-assets/img/icons/background/5.png', 'mememaker-assets/img/background/5.png');
AddParts(bgList, 'bg', 6, 'mememaker-assets/img/icons/background/6.png', 'mememaker-assets/img/background/6.png');
AddParts(bgList, 'bg', 7, 'mememaker-assets/img/icons/background/7.png', 'mememaker-assets/img/background/7.png');
AddParts(bgList, 'bg', 8, 'mememaker-assets/img/icons/background/8.png', 'mememaker-assets/img/background/8.png');
AddParts(bgList, 'bg', 9, 'mememaker-assets/img/icons/background/9.png', 'mememaker-assets/img/background/9.png');
AddParts(bgList, 'bg', 10, 'mememaker-assets/img/icons/background/10.png', 'mememaker-assets/img/background/10.png');



const canvas = document.getElementById('mainCanvas');
canvas.width = 400;
canvas.height = 400;
const context = canvas.getContext('2d');

setInterval(() => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, 400, 400);

    if(current_bg != undefined) {
        context.drawImage(current_bg, 0, 0, 400, 400 );
    }

    if(current_body != undefined) {
        context.drawImage(current_body, 0, 0, 400, 400 );
    }

    if(current_head != undefined) {
        context.drawImage(current_head, 0, 0, 400, 400 );
    }

    if(current_mouth != undefined) {
        context.drawImage(current_mouth, 0, 0, 400, 400 );
    }

    if(current_eyes != undefined) {
        context.drawImage(current_eyes, 0, 0, 400, 400 );
    }
    
    if(current_clothes != undefined) {
        context.drawImage(current_clothes, 0, 0, 400, 400 );
    }

    if(current_necklace != undefined) {
        context.drawImage(current_necklace, 0, 0, 400, 400 );
    }
}, 100);

function randRange(min, max) {
    return Math.floor((Math.random() * (max - min)) + min);
}

const resetBtn = document.getElementById('reset-btn');
resetBtn.onclick = () => {
    selectParts('head', 0);
    selectParts('eyes', 0);
    selectParts('mouth', 0);
    selectParts('bg', 1);
    selectParts('clothes', 0);
    selectParts('necklace', 0);
}

const randomBtn = document.getElementById('random-btn');

randomBtn.onclick = () => {
    const randHead = randRange(0, 10);
    const randEyes = randRange(0, 5);
    const randMouth = randRange(0, 7);
    const randBg = randRange(1, 10);
    const randClothes = randRange(0, 11);
    const randNecklace = randRange(0, 7);

    selectParts('head', randHead);
    selectParts('eyes', randEyes);
    selectParts('mouth', randMouth);
    selectParts('bg', randBg);
    selectParts('clothes', randClothes);
    selectParts('necklace', randNecklace);
}

const downloadBtn = document.getElementById('download-btn');
downloadBtn.onclick = () => {
    var link = document.createElement('a');
    link.download = 'sealy.png';
    link.href = canvas.toDataURL()
    link.click();
}

// Define object to store maxTranslateX values for each type
const maxTranslateXValues = {
    head: {
        small: -970,
        medium: -730,
        large: -580
    },
    eyes: {
        small: -520,
        medium: -280,
        large: -110
    },
    mouth: {
        small: -520,
        medium: -280,
        large: -290
    },
    clothes: {
        small: -850,
        medium: -800,
        large: -670
    },
    necklace: {
        small: -580,
        medium: -560,
        large: -300
    },
    bg: {
        small: -700,
        medium: -700,
        large: -470
    }
};

// Function to calculate maxTranslateX value based on the device width and media query conditions
function calculateMaxTranslateX(type) {
    const screenWidth = window.innerWidth;
    let maxTranslateX;

    if (screenWidth <= 600) {
        maxTranslateX = maxTranslateXValues[type].small;
    } else if (screenWidth <= 828) {
        maxTranslateX = maxTranslateXValues[type].medium;
    } else {
        maxTranslateX = maxTranslateXValues[type].large;
    }

    return maxTranslateX;
}

// Function to update maxTranslateX values for right buttons based on screen size
function updateMaxTranslateX() {
    // Update maxTranslateX values for head list
    headRightmaxTranslateX = calculateMaxTranslateX('head');
    // Update maxTranslateX values for eyes list
    eyesRightmaxTranslateX = calculateMaxTranslateX('eyes');
    // Update maxTranslateX values for mouth list
    mouthRightmaxTranslateX = calculateMaxTranslateX('mouth');
    // Update maxTranslateX values for clothes list
    clothesRightmaxTranslateX = calculateMaxTranslateX('clothes');
    // Update maxTranslateX values for necklace list
    necklaceRightmaxTranslateX = calculateMaxTranslateX('necklace');
    // Update maxTranslateX values for bg list
    bgRightmaxTranslateX = calculateMaxTranslateX('bg');
}

// Call updateMaxTranslateX function on page load
updateMaxTranslateX();

// Call updateMaxTranslateX function when the window resizes
window.addEventListener('resize', updateMaxTranslateX);


//head left and right buttons
const headLeftBtn = document.getElementById('head-left');
const headLeftmaxTranslateX = 0; // Adjust the maximum translation as needed
const headLefttranslateStep = -200; // Adjust the step size as needed

headLeftBtn.onclick = () => {
    let headLeftcurrentTranslateX = parseInt(headList.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
    headLeftcurrentTranslateX -= headLefttranslateStep;
    if (headLeftcurrentTranslateX > headLeftmaxTranslateX) {
        headLeftcurrentTranslateX = headLeftmaxTranslateX;
    }
    headList.style.transform = `translateX(${headLeftcurrentTranslateX}px)`;
}

const headRightBtn = document.getElementById('head-right');
// const headRightmaxTranslateX = -670; 
const headRighttranslateStep = 200; // Adjust the step size as needed

headRightBtn.onclick = () => {
    let headRightcurrentTranslateX = parseInt(headList.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
    headRightcurrentTranslateX -= headRighttranslateStep;
    if (headRightcurrentTranslateX < headRightmaxTranslateX) {
        headRightcurrentTranslateX = headRightmaxTranslateX;
    }
    headList.style.transform = `translateX(${headRightcurrentTranslateX}px)`;
}

//head left and right buttons
const eyesLeftBtn = document.getElementById('eyes-left');
const eyesLeftmaxTranslateX = 0; // Adjust the maximum translation as needed
const eyesLefttranslateStep = -200; // Adjust the step size as needed

eyesLeftBtn.onclick = () => {
    let eyesLeftcurrentTranslateX = parseInt(eyesList.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
    eyesLeftcurrentTranslateX -= eyesLefttranslateStep;
    if (eyesLeftcurrentTranslateX > eyesLeftmaxTranslateX) {
        eyesLeftcurrentTranslateX = eyesLeftmaxTranslateX;
    }
    eyesList.style.transform = `translateX(${eyesLeftcurrentTranslateX}px)`;
}

const eyesRightBtn = document.getElementById('eyes-right');
// const eyesRightmaxTranslateX = -220;
const eyesRighttranslateStep = 200; // Adjust the step size as needed

eyesRightBtn.onclick = () => {
    let eyesRightcurrentTranslateX = parseInt(eyesList.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
    eyesRightcurrentTranslateX -= eyesRighttranslateStep;
    if (eyesRightcurrentTranslateX < eyesRightmaxTranslateX) {
        eyesRightcurrentTranslateX = eyesRightmaxTranslateX;
    }
    eyesList.style.transform = `translateX(${eyesRightcurrentTranslateX}px)`;
}


//mouth left and right buttons

const mouthLeftBtn = document.getElementById('mouth-left');
const mouthLeftmaxTranslateX = 0; // Adjust the maximum translation as needed
const mouthLefttranslateStep = -200; // Adjust the step size as needed

mouthLeftBtn.onclick = () => {
    let mouthLeftcurrentTranslateX = parseInt(mouthList.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
    mouthLeftcurrentTranslateX -= mouthLefttranslateStep;
    if (mouthLeftcurrentTranslateX > mouthLeftmaxTranslateX) {
        mouthLeftcurrentTranslateX = mouthLeftmaxTranslateX;
    }
    mouthList.style.transform = `translateX(${mouthLeftcurrentTranslateX}px)`;
}

const mouthRightBtn = document.getElementById('mouth-right');
// const mouthRightmaxTranslateX = -220;
const mouthRighttranslateStep = 200; // Adjust the step size as needed

mouthRightBtn.onclick = () => {
    let mouthRightcurrentTranslateX = parseInt(mouthList.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
    mouthRightcurrentTranslateX -= mouthRighttranslateStep;
    if (mouthRightcurrentTranslateX < mouthRightmaxTranslateX) {
        mouthRightcurrentTranslateX = mouthRightmaxTranslateX;
    }
    mouthList.style.transform = `translateX(${mouthRightcurrentTranslateX}px)`;
}

//clothes left and right buttons

const clothesLeftBtn = document.getElementById('clothes-left');
const clothesLeftmaxTranslateX = 0; // Adjust the maximum translation as needed
const clothesLefttranslateStep = -200; // Adjust the step size as needed

clothesLeftBtn.onclick = () => {
    let clothesLeftcurrentTranslateX = parseInt(clothesList.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
    clothesLeftcurrentTranslateX -= clothesLefttranslateStep;
    if (clothesLeftcurrentTranslateX > clothesLeftmaxTranslateX) {
        clothesLeftcurrentTranslateX = clothesLeftmaxTranslateX;
    }
    clothesList.style.transform = `translateX(${clothesLeftcurrentTranslateX}px)`;
}

const clothesRightBtn = document.getElementById('clothes-right');
// const clothesRightmaxTranslateX = -1210;
const clothesRighttranslateStep = 200; // Adjust the step size as needed

clothesRightBtn.onclick = () => {
    let clothesRightcurrentTranslateX = parseInt(clothesList.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
    clothesRightcurrentTranslateX -= clothesRighttranslateStep;
    if (clothesRightcurrentTranslateX < clothesRightmaxTranslateX) {
        clothesRightcurrentTranslateX = clothesRightmaxTranslateX;
    }
    clothesList.style.transform = `translateX(${clothesRightcurrentTranslateX}px)`
}

//necklace left and right buttons

const necklaceLeftBtn = document.getElementById('necklace-left');
const necklaceLeftmaxTranslateX = 0; // Adjust the maximum translation as needed
const necklaceLefttranslateStep = -200; // Adjust the step size as needed

necklaceLeftBtn.onclick = () => {
    let necklaceLeftcurrentTranslateX = parseInt(necklaceList.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
    necklaceLeftcurrentTranslateX -= necklaceLefttranslateStep;
    if (necklaceLeftcurrentTranslateX > necklaceLeftmaxTranslateX) {
        necklaceLeftcurrentTranslateX = necklaceLeftmaxTranslateX;
    }
    necklaceList.style.transform = `translateX(${necklaceLeftcurrentTranslateX}px)`;
}

const necklaceRightBtn = document.getElementById('necklace-right');
// const necklaceRightmaxTranslateX = -1300;
const necklaceRighttranslateStep = 200; // Adjust the step size as needed

necklaceRightBtn.onclick = () => {
    let necklaceRightcurrentTranslateX = parseInt(necklaceList.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
    necklaceRightcurrentTranslateX -= necklaceRighttranslateStep;
    if (necklaceRightcurrentTranslateX < necklaceRightmaxTranslateX) {
        necklaceRightcurrentTranslateX = necklaceRightmaxTranslateX;
    }
    necklaceList.style.transform = `translateX(${necklaceRightcurrentTranslateX}px)`;
}

//bg left and right buttons

const bgLeftBtn = document.getElementById('bg-left');
const bgLeftmaxTranslateX = 0; // Adjust the maximum translation as needed
const bgLefttranslateStep = -200; // Adjust the step size as needed

bgLeftBtn.onclick = () => {
    let bgLeftcurrentTranslateX = parseInt(bgList.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
    bgLeftcurrentTranslateX -= bgLefttranslateStep;
    if (bgLeftcurrentTranslateX > bgLeftmaxTranslateX) {
        bgLeftcurrentTranslateX = bgLeftmaxTranslateX;
    }
    bgList.style.transform = `translateX(${bgLeftcurrentTranslateX}px)`;
}

const bgRightBtn = document.getElementById('bg-right');
// const bgRightmaxTranslateX = -1300;
const bgRighttranslateStep = 200; // Adjust the step size as needed

bgRightBtn.onclick = () => {
    let bgRightcurrentTranslateX = parseInt(bgList.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
    bgRightcurrentTranslateX -= bgRighttranslateStep;
    if (bgRightcurrentTranslateX < bgRightmaxTranslateX) {
        bgRightcurrentTranslateX = bgRightmaxTranslateX;
    }
    bgList.style.transform = `translateX(${bgRightcurrentTranslateX}px)`;
}



