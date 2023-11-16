


// gsap.registerPlugin(ScrollTrigger)

// const splitTypes = document.querySelectorAll('.reveal-type')
// splitTypes.forEach((char, i) => {
//   const text = new SplitType(char, { types: 'chars' })
//   gsap.from(text.chars, {
//     opacity: 0.2,
//     stagger: 0.1,
//     scrollTrigger: {
//       trigger: char,
//       start: 'top 90%',
//       end: 'top 10%',
//       scrub: true,
//       markers: false,
//       toggleActions: 'play play play play',
//     }
//   })
// })



let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav .mobile-nav a, header nav .desktop-nav a');
// let navLinks2 = document.querySelectorAll('header nav .desktop-nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav .mobile-nav a[href*=' + id + ']').classList.add('active');
                document.querySelector('header nav .desktop-nav a[href*=' + id + ']').classList.add('active');
                
            });
        }; 
        
    });
};


const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')
const mobileNavLinks = document.querySelectorAll ('.nav2-link')

btn.addEventListener('click', () => {
  
  btn.classList.toggle('open');
  nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex';
});

mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.style.display = 'none';
    btn.classList.remove('open');
  });
});


window.addEventListener('scroll', () => {
    const navbar = document.getElementById('gradline');
    if (window.scrollY > 0) {
      gradline.classList.remove('bg-transparent');
      gradline.classList.add('bg-gradient-radial'); // Change to the desired background color
    } else {
        gradline.classList.remove('bg-gradient-radial');
        gradline.classList.add('bg-transparent');
    }
});


function initGSAPAnimation() {
  gsap.registerPlugin(ScrollTrigger);
  
  const splitTypes = document.querySelectorAll('.reveal-type');
  splitTypes.forEach((char, i) => {
      const text = new SplitType(char, { types: 'chars' });
      gsap.from(text.chars, {
          opacity: 0.2,
          stagger: 0.1,
          scrollTrigger: {
              trigger: char,
              start: 'top 80%',
              end: 'top 20%',
              scrub: true,
              markers: false,
              toggleActions: 'play play play play',
          }
      });
  });
}

initGSAPAnimation();