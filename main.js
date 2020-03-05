const queryHideMeArea = document.querySelector('#hide-me-area');
const hideMeArea = function() {
    queryHideMeArea.style.display = 'none';
}

queryHideMeArea.addEventListener('mouseenter', hideMeArea);

const messWithMeQuerySpanTag = document.querySelector('span.mess-with-me');
const messWithMeQueryPtag = document.querySelector('p.mess-with-me');

const messWithMeFuncSpanTag = function() {
    if(messWithMeQuerySpanTag.style.color === ''
    && messWithMeQuerySpanTag.style.fontSize === '') {

        messWithMeQuerySpanTag.style.color = 'orange';
        messWithMeQuerySpanTag.style.fontSize = '3em';

    } else {
        messWithMeQuerySpanTag.style.color = '';
        messWithMeQuerySpanTag.style.fontSize = '';
    }
}

messWithMeQuerySpanTag.addEventListener('click', messWithMeFuncSpanTag);

const messWithMeFuncPtag = function() {
    if (messWithMeQueryPtag.style.backgroundColor === ''
    && messWithMeQueryPtag.style.fontSize === '') {

    messWithMeQueryPtag.style.backgroundColor = 'green';
    messWithMeQueryPtag.style.fontSize = '2em';
    
    } else {

        messWithMeQueryPtag.style.backgroundColor = '';
        messWithMeQueryPtag.style.fontSize = '';
    }
}

messWithMeQueryPtag.addEventListener('click', messWithMeFuncPtag);

const changeTriceratopsClassImg = document.querySelector('#triceratops');

const changeTriceratopsClassImgFunc = function() {
    if (changeTriceratopsClassImg.style.width === ''
    && changeTriceratopsClassImg.style.border === '') {
        
        changeTriceratopsClassImg.style.width = '324px';
        changeTriceratopsClassImg.style.border = '3px solid red';
    } else {

        changeTriceratopsClassImg.style.width = '';
        changeTriceratopsClassImg.style.border = '';
    }
}

changeTriceratopsClassImg.addEventListener('click', changeTriceratopsClassImgFunc);



const changeFeatheredDinoIdImg = document.querySelector('#feathers');

const changeFeatheredDinoIdImgFunc = function() {
    changeFeatheredDinoIdImg.style.opacity = '0.5';
}

changeFeatheredDinoIdImg.addEventListener('click', changeFeatheredDinoIdImgFunc);

const dinoRowBackgroundChange = document.querySelector('#row');
const changeBackgroundColorButton = document.querySelector('#toggle');

const dinoRowBackgroundChangeFunc = function() {
    if(dinoRowBackgroundChange.style.backgroundColor === '') {

        dinoRowBackgroundChange.style.backgroundColor = 'red';

    } else {
        dinoRowBackgroundChange.style.backgroundColor = '';
    }
}

changeBackgroundColorButton.addEventListener('click', dinoRowBackgroundChangeFunc);

const dinoBiggify = document.querySelector('#biggify');
const dinoBiggifyFunc = function() {
    if(dinoBiggify.style.width === '') {
    dinoBiggify.style.width = '200px';
    } else {
        dinoBiggify.style.width = '';
    }
}

dinoBiggify.addEventListener('mouseenter', dinoBiggifyFunc);

