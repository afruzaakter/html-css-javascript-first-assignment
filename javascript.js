// ----------- Hamburg menu Mobile Menu ----
function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)" 
}
function cancel(){
    const navbar = document.querySelector(".cancel");
    navbar.style.transform = "translateY(-500px)" ;
};

// ------- Animation Text-----------

const texts = [
    "PROGRAMMER",
    "DESIGNER",
    "DEVELOPER",
    
]

const speed = 100;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let characterIndex = 0;

function typeWriter(){
    if(characterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typeWriter,speed);
    }
    else{
        setTimeout(eraseText, 100)
    }
        
    
}

function eraseText(){
    if(textElements.innerHTML.length>0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50);
    }
    else{
        textIndex = (textIndex + 1)%texts.length;
        characterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}

window.onload = typeWriter

// ---------- Filter Gallery-----------


let filterItem = document.querySelector('.items-links');
let filterImage = document.querySelectorAll(".project-img");

window.addEventListener('load', () => {
    filterItem.addEventListener('click', (selectedItem) => {
        if (selectedItem.target.classList.contains("item-link")) {
            document.querySelector('.menu-active').classList.remove('menu-active');
            selectedItem.target.classList.add('menu-active');
            
            let filterName = selectedItem.target.getAttribute('data-name');
            
            filterImage.forEach((image) => {
                let imageName = image.getAttribute('data-name'); // renamed this variable for clarity
                if (imageName === filterName || filterName === 'all') {
                    image.style.display = 'block';
                } else {
                    image.style.display = "none";
                }
            });
        }
    });
});
