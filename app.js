const sizes = document.querySelectorAll('.size');
const colors = document.querySelectorAll('.color');
const shoes = document.querySelectorAll('.shoe');
const gradients = document.querySelectorAll('.gradient');
const shoeBg = document.querySelector('.shoeBackground')
let prevcolor = "blue";
let animationEnd = true;
function changeSize(){
    sizes.forEach(size =>size.classList.remove('active'));
    this.classList.add('active');
}

function changColor(){
    if(!animationEnd) return ;
    let primary = this.getAttribute('primary');
    let color = this.getAttribute('color');
    let shoe = document.querySelector(`.shoe[color="${color}"]`);
    let gradient = document.querySelector(`.gradient[color="${color}"]`);
    let prevGradient = document.querySelector(`.gradient[color="${prevcolor}"]`)
    console.log(color)
    console.log(primary);
    colors.forEach(c=>c.classList.remove('active'));
    this.classList.add('active');
    document.documentElement.style.setProperty('--primary',primary);
    shoes.forEach(s =>s.classList.remove('show'));
    shoe.classList.add('show');
    gradients.forEach(g=>g.classList.remove('first'));
    gradient.classList.add('first');
    prevGradient.classList.add('second');
    prevcolor = color;
    animationEnd = false;
    gradient.addEventListener('animationend',()=>{
        animationEnd = true;
    })
}

sizes.forEach(size => size.addEventListener('click',changeSize));
colors.forEach(c=>c.addEventListener('click',changColor));

let x = window.matchMedia("(max-width:1000px)");

function changeHeight(){
    if(x.matches){
        let shoeHeight = shoes[0].offsetHight;
       shoeBg.style.height = `${shoeHeight * 0.9}px`

    }
    else{
        shoeBg.style.height ="475px";
    }
}
changeHeight();
window.addEventListener('resize',changeHeight);