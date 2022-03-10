const animItems = document.querySelectorAll('.anim-items');

const menuBtn = document.getElementById('menu__btn');
const menu = document.getElementById('menu');
menuBtn.addEventListener('click', function(){
	menu.classList.toggle('active');
});


// анімація елементів //
if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            // фіксація висоти об'єкта
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
                animItem.classList.add('active');
            } else {
                // якщо ми не хочемо, щоб при піднятті вгору повторювалась анімація//
                if (!animItem.classList.contains('anim-no-hide')) {
                    animItem.classList.remove('active');
                }
            }
        }
    }

    function offset(el) {
        var rect = el.getBoundingClientRect(),
        scrollLeft = window.scrollX || document.documentElement.scrollLeft,
        scrollTop = window.scrollY || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    // функція для затримки її використання
    setTimeout(() => {
        animOnScroll();
    }, 300);
}

// слайдер //
const swiper = new Swiper('.swiper', {
    loop: true,
    sliderPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 5000,
    },
});



