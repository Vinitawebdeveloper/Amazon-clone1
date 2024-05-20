const left_button=document.querySelector('.l-btn')
console.log(left_button)
if(left_button){
left_button.addEventListener('click',function(event){
    console.log('left click done')
    const conent=document.querySelector('.product-slide');
    conent.scrollLeft+=1100;
    event.preventDefault();

});
}

const right_button=document.querySelector('.r-btn')
console.log(right_button)
right_button.addEventListener('click',function(event){
    console.log('right click done')
    const conent=document.querySelector('.product-slide');
    conent.scrollLeft-=1100;
    event.preventDefault();

});

const left_button3=document.querySelector('.left3')
console.log(left_button3)
left_button3.addEventListener('click',function (event) {
    console.log("click left button")
    const conent=document.querySelector('.product-slide3');
    conent.scrollLeft+=1100;
    event.preventDefault();
    
})

const right_button3=document.querySelector('.right3')
console.log(right_button3)
right_button3.addEventListener('click',function (event) {
    console.log("click right button")
    const conent=document.querySelector('.product-slide3');
    conent.scrollLeft-=1100;
    event.preventDefault();
    
})

const left_button5=document.querySelector('.left5')
console.log(left_button5)
left_button5.addEventListener('click',function (event) {
    console.log("click left button")
    const conent=document.querySelector('.product-slide5');
    conent.scrollLeft+=1100;
    event.preventDefault();
    
})

const right_button5=document.querySelector('.right5')
console.log(right_button5)
right_button5.addEventListener('click',function (event) {
    console.log("click right button")
    const conent=document.querySelector('.product-slide5');
    conent.scrollLeft-=1100;
    event.preventDefault();
    
})

const left_button6=document.querySelector('.left6')
console.log(left_button6)
left_button6.addEventListener('click',function (event) {
    console.log("click left button")
    const conent=document.querySelector('.product-slide6');
    conent.scrollLeft+=1100;
    event.preventDefault();
    
})

const right_button6=document.querySelector('.right6')
console.log(right_button6)
right_button6.addEventListener('click',function (event) {
    console.log("click right button")
    const conent=document.querySelector('.product-slide6');
    conent.scrollLeft-=1100;
    event.preventDefault();
    
})

const left_button8=document.querySelector('.left8')
console.log(left_button8)
left_button8.addEventListener('click',function (event) {
    console.log("click left button")
    const conent=document.querySelector('.product-slide8');
    conent.scrollLeft+=1100;
    event.preventDefault();
    
})

const right_button8=document.querySelector('.right8')
console.log(right_button8)
right_button8.addEventListener('click',function (event) {
    console.log("click right button")
    const conent=document.querySelector('.product-slide8');
    conent.scrollLeft-=1100;
    event.preventDefault();
    
})

const left_button9=document.querySelector('.left9')
console.log(left_button9)
left_button9.addEventListener('click',function (event) {
    console.log("click left button")
    const conent=document.querySelector('.product-slide9');
    conent.scrollLeft+=1100;
    event.preventDefault();
    
})

const right_button9=document.querySelector('.right9')
console.log(right_button9)
right_button9.addEventListener('click',function (event) {
    console.log("click right button")
    const conent=document.querySelector('.product-slide9');
    conent.scrollLeft-=1100;
    event.preventDefault();
    
})

const left_button10=document.querySelector('.left10')
console.log(left_button10)
left_button10.addEventListener('click',function (event) {
    console.log("click left button")
    const conent=document.querySelector('.product-slide10');
    conent.scrollLeft+=1100;
    event.preventDefault();
    
})

const right_button10=document.querySelector('.right10')
console.log(right_button10)
right_button10.addEventListener('click',function (event) {
    console.log("click right button")
    const conent=document.querySelector('.product-slide10');
    conent.scrollLeft-=1100;
    event.preventDefault();
    
})

const left_button11=document.querySelector('.left11')
console.log(left_button11)
left_button11.addEventListener('click',function (event) {
    console.log("click left button")
    const conent=document.querySelector('.product-slide11');
    conent.scrollLeft+=1100;
    event.preventDefault();
    
})

const right_button11=document.querySelector('.right11')
console.log(right_button11)
right_button11.addEventListener('click',function (event) {
    console.log("click right button")
    const conent=document.querySelector('.product-slide11');
    conent.scrollLeft-=1100;
    event.preventDefault();
    
})

const backTop = document.querySelector(".backtop")
// console.log(backTop)
backTop.addEventListener('click',(event)=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})  

const sidebar = document.querySelector(".sidebar")
console.log(sidebar);

const fa_xmark = document.querySelector(".fa-xmark")
console.log(fa_xmark);

const black = document.querySelector(".black")
console.log(black);

const sidebutton = document.querySelector(".second-1")
console.log(sidebutton);

sidebutton.addEventListener("click",()=>{
    console.log("sucess")
    sidebar.classList.add("active");
    cross.classList.add("active");  
    black.classList.add("active")
    document.body.classList.add("stop-scroll");
})

cross.addEventListener("click",()=>{
    console.log("sucess")
    sidebar.classList.remove("active");
    cross.classList.remove("active");  
    black.classList.remove("active");
})

const sign = document.quarySelector(".ac");
const tri = document.quarySelector(".triangle");
const signin = document.quarySelector(".hdn-sign");

sign.addEventListener("click",()=>{
    black.classList.toggle("active-1")
    signin.classList.toggle("active")
    tri.classList.toggle("active")
})

