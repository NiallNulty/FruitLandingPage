let title = document.getElementById('fruitName');
let paragraph = document.getElementById('fruitParagraph');
let toggleMenu = document.querySelector('.toggleMenu');
let navigation = document.querySelector('.navigation');

let bananaTitle = "Banana";
let bananaParagraph = "A banana is an elongated, edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa. In some countries, bananas used for cooking may be called plantains, distinguishing them from dessert bananas.";

let appleTitle = "Apple";
let appleParagraph = "An apple is an edible fruit produced by an apple tree. Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found today.";

let orangeTitle = "Orange";
let orangeParagraph = "The orange is the fruit of various citrus species in the family Rutaceae (see list of plants known as orange); it primarily refers to Citrus × sinensis, which is also called sweet orange, to distinguish it from the related Citrus × aurantium, referred to as bitter orange.";

function imgSlider(anything){
    document.querySelector('.banana').src = anything
}

function changeBackGroundColour(color){
    const sec = document.querySelector('.sec');
    sec.style.background = color;
} 

function ChangeText(text){
    title.textContent = text;
    ChangeParagraph(text);
}

function ChangeParagraph(text){
    if(text == bananaTitle)
    {
        paragraph.textContent = bananaParagraph;
    }

    if(text == appleTitle)
    {
        paragraph.textContent = appleParagraph;
    }

    if(text == orangeTitle)
    {
        paragraph.textContent = orangeParagraph;
    }
}

function MenuToggle(){
    toggleMenu.classList.toggle('active');
    navigation.classList.toggle('active');
}

ChangeText(bananaTitle);
toggleMenu.addEventListener('click', MenuToggle);

