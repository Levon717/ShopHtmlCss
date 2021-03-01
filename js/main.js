/*=== MENU SHOW  ===*/
const showMenu = (toggLeId,navId) =>{
    const toggle = document.getElementById(toggLeId),
          nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')

/*=== REMOVE MENU MOBILE  ===*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    // Active link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    // Remove menu mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*=== COUNTDOWN  ===*/
let countDate = new Date('Oct 18, 2020 00:00:00').getTime();

function newYear(){
    let now = new Date().getTime();
        gap = countDate - now;

        let second = 1000;
        let minute = second * 60;
        let hour = minute * 60;
        let day = hour * 24;

        let d = Math.floor(gap / (day));
        let h = Math.floor((gap % (day)) / (hour));
        let m = Math.floor((gap % (hour)) / (minute));
        let s = Math.floor((gap % (minute)) / (second));

        document.getElementById('day').innerText = d;
        document.getElementById('hour').innerText = h;
        document.getElementById('minute').innerText = m;
        document.getElementById('second').innerText = s;
    }

    setInterval(function (){
        newYear();
    },1000)

/*=== Smtp.JS Contact form  ===*/
Email.send({
    Host : "smtp.yourisp.com",
    Username : "username",
    Password : "password",
    To : 'them@website.com',
    From : "you@isp.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
    message => alert(message)
);
