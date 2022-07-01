let penDown = false;

let body = document.querySelector('body');
body.addEventListener('mousedown', function(e){
    e.preventDefault();
    penDown = true;
});
body.addEventListener('mouseup', function(e){
    e.preventDefault();
    penDown = false;
})


function range(start, end){
    let arr = [];
    for(let i = start; i <= end; i++){
        arr.push(i);
    }
    return arr;
}

let pixels = range(0, 9838);
let numOfPixels = pixels.length;
let temp;

for(i = 0; i <= numOfPixels; i++){
    let grid = document.querySelector('.grid');
    temp = document.createElement('div');
    temp.setAttribute('class', 'pixel');
    grid.appendChild(temp);
}

let blocks = document.querySelectorAll('.pixel');

blocks.forEach(block => {block.addEventListener('mousedown', detail)})
blocks.forEach(block => {block.addEventListener('mouseover', stroke)});
blocks.forEach(block => {block.addEventListener('contextmenu', erase)});

function detail(e){
    e.preventDefault();
    let color = document.querySelector('.colorPicked').value;
    let pixel = e.target;
    if(pixel.classList.contains('pixel')){
        pixel.style.backgroundColor = color;
    }
}

function stroke(e){
    e.preventDefault();
    let color = document.querySelector('.colorPicked').value;
    let pixel = e.target;
    if(pixel.classList.contains('pixel') && penDown === true){
        pixel.style.backgroundColor = color;
    }
}  

function erase(e){
    e.preventDefault();
    let pixel = e.target;
    if(pixel.classList.contains('pixel')){
        pixel.classList.add('white');
        pixel.style.backgroundColor = pixel.classList[1];
    }
}
    
let clear = document.querySelector('.clear');

clear.addEventListener('click', clearGrid);

function clearGrid(e){
    e.preventDefault();
    if(e.target.classList.contains('clear')){
        let pixelGrid = document.querySelectorAll('.pixel');
        pixelGrid.forEach(pixel => {pixel.style.backgroundColor = 'white'});
    }
}