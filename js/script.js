
const typed = new Typed('#typed-strings', {
    strings: ["Hello,I'm Hussein Alaa"],
    typeSpeed: 100
  });

const typed2 = new Typed('#typed-strings2', {
    strings: [`I'm Hussein Alaa, 22 years old<br>
    Graduated from Faculty of commerce Business information systems (bis) - Helwan universty<br>
    I’m a front end developer aiming to be a fullstack developer<br >
    <br>
    Well-organised person, problem solver, Interested in the entire frontend spectrum and working on ambitious projects with positive people.
    `],
    typeSpeed: 25
  });


let aboutBtn = document.querySelector("#aboutBtn");
let servicesBtn= document.querySelector("#servicesBtn");
let skillsBtn= document.querySelector("#skillsBtn");
let workBtn= document.querySelector("#workBtn");
let contactBtn= document.querySelector("#contactBtn");
let spinner=document.querySelector('.spinner-content');



$(window).on('load',function(){
    spinner.style.display= "none";
    document.getElementById("welcomeSection").classList.remove('hidden');
});

aboutBtn.addEventListener('click',function(){
    document.getElementById("welcomeSection").classList.add('hidden');
    document.getElementById("servicesSection").classList.add('hidden');
    document.getElementById("skillsSection").classList.add('hidden');
    document.getElementById("workSection").classList.add('hidden');
    document.getElementById("contactSection").classList.add('hidden');
    document.body.style.backgroundColor= "#001114";
    document.getElementById("aboutSection").classList.remove('hidden');
    document.getElementById("collapsibleNavbar").classList.remove('show')

});

servicesBtn.addEventListener('click',function(){
    document.getElementById("welcomeSection").classList.add('hidden');
    document.getElementById("aboutSection").classList.add('hidden');
    document.getElementById("skillsSection").classList.add('hidden');
    document.getElementById("workSection").classList.add('hidden');
    document.body.style.backgroundColor= "#012327 ";

    document.getElementById("contactSection").classList.add('hidden');

    document.getElementById("servicesSection").classList.remove('hidden');
        document.getElementById("collapsibleNavbar").classList.remove('show')

});

skillsBtn.addEventListener('click',function(){
    document.getElementById("welcomeSection").classList.add('hidden');
    document.getElementById("aboutSection").classList.add('hidden');
    document.getElementById("servicesSection").classList.add('hidden');
    document.getElementById("workSection").classList.add('hidden');
    document.getElementById("contactSection").classList.add('hidden');
    document.body.style.backgroundColor= "#01272e ";

    document.getElementById("skillsSection").classList.remove('hidden');
        document.getElementById("collapsibleNavbar").classList.remove('show')

});

workBtn.addEventListener('click',function(){
    document.getElementById("welcomeSection").classList.add('hidden');
    document.getElementById("aboutSection").classList.add('hidden');
    document.getElementById("servicesSection").classList.add('hidden');
    document.getElementById("skillsSection").classList.add('hidden');
    document.getElementById("contactSection").classList.add('hidden');
    document.body.style.backgroundColor= "#012f38";

    document.getElementById("workSection").classList.remove('hidden');
        document.getElementById("collapsibleNavbar").classList.remove('show')

});

contactBtn.addEventListener('click',function(){
    document.getElementById("welcomeSection").classList.add('hidden');
    document.getElementById("aboutSection").classList.add('hidden');
    document.getElementById("servicesSection").classList.add('hidden');
    document.getElementById("skillsSection").classList.add('hidden');
    document.getElementById("workSection").classList.add('hidden');
    document.body.style.backgroundColor= "#013944";

    document.getElementById("contactSection").classList.remove('hidden');
        document.getElementById("collapsibleNavbar").classList.remove('show')

})



$(document).ready(function(){
    
        $('.owl-carousel').owlCarousel({
            stagePadding: 200,
            loop:true,
            margin:10,
            nav:false,
            items:1,
            lazyLoad: true,
            nav:true,
            responsiveClass:true,
    
            responsive:{
                0:{
                    items:1,
                    stagePadding: 0,
                    
                },
              
                600:{
                    items:1,
                    stagePadding: 100,
                },
                1000:{
                    items:1,
                    stagePadding: 200
                },
                1200:{
                    items:1,
                    stagePadding: 250
                },
                1400:{
                    items:1,
                    stagePadding: 300
                },
                1600:{
                    items:1,
                    stagePadding: 350
                },
                1800:{
                    items:1,
                    stagePadding: 400
                }
            }
        });

    
  });
 

  