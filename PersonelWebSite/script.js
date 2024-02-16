function scrollToElement(elementSelector, instance = 0){
    const elements = document.querySelectorAll (elementSelector);
    if(elements.length > instance){
        elements[instance].scrollIntoView({ behavior: 'smooth'});
    }
}

const link1 = document.getElementById("link1"); 
const link2 = document.getElementById("link2"); 
const link3 = document.getElementById("link3"); 
const link4 = document.getElementById("link4"); 

link1.addEventListener('click', () =>{
    scrollToElement('.header');
});

link2.addEventListener('click', () =>{
    scrollToElement('.sertfika');
});

/*link1.addEventListener('click', () =>{
    scrollToElement('.header');
});*/

link4.addEventListener('click', () =>{
    scrollToElement('.column');
});

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100){
        toTop.classList.add("active");
    } else{
        toTop.classList.remove("active")
    }
})  
    
