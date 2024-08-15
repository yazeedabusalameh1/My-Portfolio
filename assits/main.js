/*////////////// show menu///////////*/
const navMenu=document.getElementById(`nav-menu`),
      navToggle=document.getElementById(`nav-toggle`),
      navClose=document.getElementById(`nav-close`);


/*menu show*/
if(navToggle){
    navToggle.addEventListener(`click`,()=>{
        navMenu.classList.add(`show-menu`);
    })
}
/*menu hidden*/
if(navClose){
    navClose.addEventListener(`click`,()=>{
        navMenu.classList.remove(`show-menu`);
        
    })
}

/*////////////// remove menue mopile///////////*/

const navlink=document.querySelectorAll(`.nav_link`)
const linlkAction=()=>{
    const navMenu=document.getElementById(`nav-menu`)
    navMenu.classList.remove(`show-menu`);
}
navlink.forEach(n=>n.addEventListener(`click`, linlkAction));

/*////////add blur header////////////*/
const blurHeader=()=>{
    const header=document.getElementById(`header`);
    this.scrollY >= 50? header.classList.add(`blur-header`)
                       :header.classList.remove(`blur-header`)
}
window.addEventListener('scroll',blurHeader);


/////////////////Email js /////////////////
const contactForm=document.getElementById("contact-form"),
      contactMessage=document.getElementById("contact-message");
      

const sendEmail=(e)=>{
    e.preventDefault();
    emailjs.sendForm(`service_c1wli8v`,`template_k3ra2pi`,`#contact-form`,`_Ut_cPiSpHWFN97Rc`)
    .then(()=>{
      contactMessage.textContent=`Message sent successfully ✅`
      //remove  message after 5 sec
      setTimeout(()=>{
        contactMessage.textContent=``
      },5000)
      // clear input filed
      contactForm.reset();

    },()=>{
        contactMessage.textContent=`Error ❗ Message not sent ❌ `;
    }
)
}

contactForm.addEventListener(`submit`,sendEmail);

/*////////scroll Up show//////////*/
const scrollUp=()=>{
    const scrollUp=document.getElementById("scroll-up");
    this.scrollY >= 350 ? scrollUp.classList.add(`show-scroll`)
                       : scrollUp.classList.remove(`show-scroll`);
}
window.addEventListener(`scroll`,scrollUp);


// ==============SCROLL SECTRION ACTIVE LINK===================
const section=document.querySelectorAll(`section[id]`);
const scrollAvtive=()=>{
    const scrollDown=window.scrollY;

    section.forEach(current =>{
        const sectionHeight =current.offsetHeight,
              sectionTop    = current.offsetTop -58,
              sectionId     = current.getAttribute(`id`),
              sectionsClass = document.querySelector(`.nav_menu a[href*=` + sectionId + `]`);

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add(`active-link`);
        }else{
            sectionsClass.classList.remove(`active-link`);
        }
    })
}
window.addEventListener(`scroll`,scrollAvtive);
////////////////////swiper///////////////////
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    // grabCursor:true,
    spaceBetween:30,
     autoplay: {
         delay: 5000,
     },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints:{
        0:{
            slidesPerView:1
        }, 
        620:{
            slidesPerView:2
        },
        1024:{
            slidesPerView:3
        }
    }
 });
// ============SCROLL REVEAL ANIMATION===============
const sr= ScrollReveal({
    origin: `top`,
    distance: `60px`,
    duration: 2500,
    delay: 400,
})

sr.reveal(`.home_data, .experience, .contact_container ,.footer_container`);
sr.reveal(`.home_img`,{delay:600});
sr.reveal(`.home_scroll`,{delay:800});
sr.reveal(`.work_card, .eduations_card`,{interval:100});
sr.reveal(`.about_contant`, {origin: 'right'});
sr.reveal(`.about_img`, {origin: 'left'});
sr.reveal(`.skills`, {origin: 'left'});
