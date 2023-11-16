

// gsap.registerPlugin(ScrollTrigger)
const splitTypes = document.querySelectorAll('.reveal-type')
splitTypes.forEach((char, i) => {
    const text = new SplitType(char, { types: 'chars' })
    gsap.from(text.chars, {
        opacity: 0.2,
        stagger: 0.1,
        scrollTrigger: {
            trigger: char,
            start: 'top 90%',
            end: 'top 10%',
            scrub: true,
            markers: false,

            onEnter: () => {
              console.log('Entering section');
            },
            onLeaveBack: () => {
              console.log('Leaving section');
            }
            
        }
    })
})






// gsap.registerPlugin(ScrollTrigger)
// const splitTypes = document.querySelectorAll('.reveal-type')

// splitTypes.forEach((char,i) => {
//   const text = new SplitType(char, { types: 'chars'})

//   gsap.from(text.chars, {
//     ScrollTrigger: {
//       trigger: char,
//       start: 'top 80%',
//       end: 'top 20%',
//       scrub: true,
//       markers: false
//     },
//     opacity: 0.2,
//     stagger: 0.1
//   })
// })
// splitTypes.forEach((char,i) => {
//   const bg = char.dataset.bgColor
//   const fg = char.dataset.fgColor
//   const text = new SplitType(char, {types: 'chars'})
//   gsap.fromTo(text.chars,
//     {
//       color: bg,
//     },
//     {
//       color: fg,
//       duration: 0.3,
//       stagger: 0.02,
//       ScrollTrigger: {
//         trigger: char,
//         start: 'top 80%',
//         end: 'top 20%',
//         scrub: true,
//         markers: false,
//         toggleActions: 'play play reverse reverse'
//       }
//   })
// })




// const NavLinksClose = document.querySelectorAll('#menu a')

// NavLinksClose.forEach(link => {
//   link.addEventListener('click', function() {
//     document.getElementById('menu').style.display('none');
//   });
// });



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

window.addEventListener('scroll', () => {
  const header = document.getElementById('navbar');
  if (window.scrollY > 0) {
    navbar.classList.remove('bg-transparent');
    navbar.classList.add('z-50', 'bg-black/70', 'backdrop-blur-md', 'backdrop-filter'); // Change to the desired background color
  } else {
    navbar.classList.remove('z-50 bg-black/70 backdrop-blur-md backdrop-filter');
    navbar.classList.add('bg-transparent');
  }
});


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

// btn.addEventListener('click', () => {
//   btn.classList.toggle('open')
//   nav.classList.toggle('flex')
//   nav.classList.toggle('hidden')
   
// });

// mobileNavLinks.forEach(link => {
//   link.addEventListener('click', () => {
//     nav.classList.add('hidden')
//     btn.classList.remove('open')
//   });
// });


// const NavLinksClose = document.querySelectorAll('#menu')

// NavLinksClose.forEach(link => {
//   link.addEventListener('click', function() {
//     document.getElementById('menu').style.display('none');
//   });
// });




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


// gsap.registerPlugin(ScrollTrigger)
// const splitTypes = document.querySelectorAll('.reveal-type')
// splitTypes.forEach((char,i) => {
//   const bg = char.dataset.bgColor
//   const fg = char.dataset.fgColor
//   const text = new SplitType(char, {types: 'chars'})
//   gsap.fromTo(text.chars,
//     {
//       color: bg,
//     },
//     {
//       color: fg,
//       duration: 0.3,
//       stagger: 0.02,
//       ScrollTrigger: {
//         trigger: char,
//         start: 'top 80%',
//         end: 'top 20%',
//         scrub: false,
//         markers: false,
//         toggleActions: 'play play reverse reverse'
//       }
//     })
// })

// const lenis = new Lenis()
// lenis.on('scroll', (e) => {
//   console.log(e)
// })
// function raf(time) {
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }
// requestAnimationFrame(raf)






// window.addEventListener('scroll', () => {
//     const navbar = document.getElementById('navbar');
//     if (window.scrollY > 0) {
//       navbar.classList.remove('bg-transparent');
//       navbar.classList.add('bg-black/70', 'backdrop-blur-md', 'backdrop-filter'); // Change to the desired background color
//     } else {
//       navbar.classList.remove('bg-black/70', 'backdrop-blur-md', 'backdrop-filter');
//       navbar.classList.add('bg-transparent');
//     }
// });





// var header = document.querySelector('navbar');
// window.addEventListener('scroll', function () {
//     if (window.pageYOffset > 100) {
//         header.classList.add ('bg-black/70', 'backdrop-blur-md', ' backdrop-filter');
//     } else {
//         header.classList.remove();
//     }
// });

//bg-black/70 backdrop-blur-md backdrop-filter

//bg-gradient-radial