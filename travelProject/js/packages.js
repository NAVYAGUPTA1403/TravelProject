'use strict';
let loadmoreBtn = document.querySelector('.packages-pages .load-more .btn');

let currentItem = 3;

loadmoreBtn.onclick = () => {
    let boxes = [...document.querySelectorAll('.packages-pages .box-container .box')];
    for(var i = currentItem; i < currentItem+3; i++)
    {
        boxes[i].style.display = 'inline-block';
    }

    currentItem += 3;
    if(currentItem >= boxes.length)
        loadmoreBtn.style.display = 'none';
}