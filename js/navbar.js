
const mobile_open = document.querySelector('.mobile-open');
const mobile_close = document.querySelector('.mobile-close');
const ul_navlinks = document.querySelector('.ul-navlinks');
const navItems = document.querySelectorAll('.ul-navlinks a');

mobile_open.addEventListener('click', function(){
    mobile_open.style.display = 'none';
    ul_navlinks.style.display = 'flex';
    mobile_close.style.display = 'block';
});

mobile_close.addEventListener('click', function(){
    mobile_close.style.display = 'none';
    mobile_open.style.display = 'block';
    ul_navlinks.style.display = 'none';
});

navItems.forEach((items) => {
    items.addEventListener('click', function(){
        mobile_close.style.display = 'none';
        mobile_open.style.display = 'block';
        ul_navlinks.style.display = 'none';
    });
});