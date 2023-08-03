$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


document.getElementById('BREAKFAST').addEventListener('click' , breakfast)
document.getElementById('STARTER').addEventListener('click' , starter)
document.getElementById('VEG').addEventListener('click' , veg)
document.getElementById('NON-VEG').addEventListener('click' , nonVeg)



function breakfast (){
    document.querySelector('.breakfast__container').classList.toggle('hidden')
    document.querySelector('.starter__container').classList.add('hidden')
    document.querySelector('.veg__container').classList.add('hidden')
    document.querySelector('.non-veg__container').classList.add('hidden')
}
function starter (){
    document.querySelector('.breakfast__container').classList.add('hidden')
    document.querySelector('.starter__container').classList.toggle('hidden')
    document.querySelector('.veg__container').classList.add('hidden')
    document.querySelector('.non-veg__container').classList.add('hidden')
}
function veg (){
    document.querySelector('.breakfast__container').classList.add('hidden')
    document.querySelector('.starter__container').classList.add('hidden')
    document.querySelector('.veg__container').classList.toggle('hidden')
    document.querySelector('.non-veg__container').classList.add('hidden')
}
function nonVeg (){
    document.querySelector('.breakfast__container').classList.add('hidden')
    document.querySelector('.starter__container').classList.add('hidden')
    document.querySelector('.veg__container').classList.add('hidden')
    document.querySelector('.non-veg__container').classList.toggle('hidden')
}