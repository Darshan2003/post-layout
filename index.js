/* I have link html to 'indexMinified.js' to improve performance, And also deployed it if you want to read*/
const checkVisibilty =(displayArea,more,moreInPopUp)=>{
    if(displayArea.scrollHeight>displayArea.offsetHeight)
    {
        more.style.visibility = "visible";
        moreInPopUp[0].style.visibility = "visible";
        moreInPopUp[1].style.visibility = "visible";
    }
    else
    {
        more.style.visibility = "hidden";
        moreInPopUp[0].style.visibility = "hidden";
        moreInPopUp[1].style.visibility = "hidden";
    }
}
//to change the preview with respect to the desc passed to the function
const changeDesc = (desc) =>{
    const descDevice = document.getElementById('deviceDesc');
    descDevice.innerHTML=`${desc} News Feed`;
    const rightSide = document.getElementById('right');
    const wrap = document.getElementById('wrapId');
    const leftSide = document.getElementById('left');
    const card = document.getElementById('cardId');
    const area = document.getElementById('area');
    const displayArea = document.getElementById('area');
    const more = document.getElementById('more');
    const moreInPopUp = document.querySelectorAll('.moreInPopUp');
    if(desc === 'Desktop')
    {
        wrap.style.width = '60%';
        leftSide.style.width = '40%';
        rightSide.style.width = '60%';
        card.style.marginTop = '15%';
        card.style.height = '72%';
        card.style.width = '80%';
        area.style.height = '51%';
    }
    else
    {
        wrap.style.width = '50%';
        leftSide.style.width = '45%';
        rightSide.style.width = '55%';
        card.style.margin = '25% auto';
        card.style.height = '65%';
        card.style.width = '70%';
        area.style.height = '50%';
    }
    //to check for overflow (if it is overflow then we hide the overflow and show 'more' option)
    checkVisibilty(displayArea,more,moreInPopUp);
}

// to display the text from input to textarea in layout card
const inputChange = () => {
    const displayArea = document.getElementById('area');
    const value = document.getElementsByClassName('text')[0].value;
    const more = document.getElementById('more');
    const displayAreaInPopUp = document.querySelectorAll('.areaInPopUp');
    const moreInPopUp = document.querySelectorAll('.moreInPopUp');
    //to check for overflow (if it is overflow then we hide the overflow and show 'more' option)
    checkVisibilty(displayArea,more,moreInPopUp);
    displayArea.value = value;
    displayAreaInPopUp[0].value = value;
    displayAreaInPopUp[1].value = value;
}
//to open the popup
document.getElementById('previewAll').addEventListener('click',
()=>{
    // document.querySelector('.popup').style.display ='flex';
    document.getElementsByClassName('popup')[0].classList.add('active');
}
);
//to close the popup
document.querySelector('.close').addEventListener('click',()=>{
    // document.querySelector('.popup').style.display='none';
    document.getElementsByClassName('popup')[0].classList.remove('active');
})