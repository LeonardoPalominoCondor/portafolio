/*===MOSTRAR BARRA LATERAL=====*/
const navMenu = document.getElementById('sidebar'),
      navToggle=document.getElementById('nav-toggle'),
      navClose=document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener("click", ()=>{
        navMenu.classList.add('show-sidebar')
    })
}

if(navClose){
    navClose.addEventListener("click", ()=>{
        navMenu.classList.remove('show-sidebar')
    })
}

/*FILTRO MIXITUP PORTFOLIO*/
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    },
    load:{
        filter:'.sem01'
    }
});

/*Link Active Work*/
const linkWork = document.querySelectorAll('.work__item');

function activeWork(){
    linkWork.forEach(l=>l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l=>l.addEventListener("click", activeWork))

/*Popup Trabajos*/
document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("work__button")){
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
})

function togglePortfolioPopup(){
    document.querySelector(".portfolio__popup").classList.toggle("open");
}

document.querySelector(".portfolio__popup-close").addEventListener("click", togglePortfolioPopup)

function portfolioItemDetails(portfolioItem){
    document.querySelector(".pp__thumbnail img").src=portfolioItem.querySelector(".work__img").src;
    document.querySelector(".portfolio__popup-subtitle span").innerHTML=portfolioItem.querySelector(".work__title").innerHTML;
    document.querySelector(".portfolio__popup-body").innerHTML=portfolioItem.querySelector(".portfolio__item-details").innerHTML;
    
}

/*--CONCLUSION MODAL-- */
const modalViews=document.querySelectorAll('.conclusion__modal'),
        modelBtns=document.querySelectorAll('.conclusion__button'),
        modalCloses= document.querySelectorAll('.conclusion__modal-close')

let modal=function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modelBtns.forEach((modelBtn, i)=>{
    modelBtn.addEventListener('click',()=>{
        modal(i)  
    })
}
)

modalCloses.forEach((modalClose)=>{
    modalClose.addEventListener("click",()=>{
        modalViews.forEach((modalView)=>{
            modalView.classList.remove('active-modal')
        })
    })
})

/*=====SCROLL SECTIONS ACTIVE LINK======*/
const sections =document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter()
{
    let scrollY=window.pageYOffset;

    sections.forEach(current=>{
        const sectionHeight=current.offsetHeight;
        const sectionTop=current.offsetTop-50,
        sectionId=current.getAttribute("id");

        if(scrollY>sectionTop&&scrollY<=sectionTop+sectionHeight)
        {
            document.querySelector('.nav__menu a[href*='+sectionId+']').classList.add("active-link")
        }
        else
        {
            document.querySelector('.nav__menu a[href*='+sectionId+']').classList.remove("active-link")
        }
    })
}