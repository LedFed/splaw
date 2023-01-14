document.addEventListener("DOMContentLoaded", () => {
    "use strict"
    let lastScroll = 0;
    const header = document.querySelector('.hed2');
    let all = document.querySelector('.all');

    let burger = document.querySelector('.menu');
    let navigation = document.querySelector('.header_list');
    let checker = burger.querySelector('input[type=checkbox]');

    burger.addEventListener('change', () => {
        event.preventDefault();
        navigation.classList.toggle('active');
        burger.classList.toggle('active');
        navigation.childNodes.forEach(e => {
            e.addEventListener('click', () => {
                navigation.classList.remove('active');
                burger.classList.remove('active');
                checker.checked = false;
            })    
        });
    })

    all.addEventListener('scroll', () => {

        let scrollDistance = parseInt(all.scrollTop);
        if (scrollDistance <= lastScroll && !header.classList.contains('fixed')) {
            header.classList.add('fixed');

        } else if (scrollDistance > lastScroll && header.classList.contains('fixed')) {
            header.classList.remove('fixed')
        }

        (scrollDistance >= 350) ?
            lastScroll = scrollDistance
            : lastScroll = -1;
    })

    $(window).ready(function () {
        $("[data-slider]").slick({
            isFinite: false,
            fade: true,
            infinite: false,
            slideToShow: 1,
            slideToScroll: 1,
            arrows: true,
            dots: true,
            autoplay: false,
            appendDots: '.route',
            appendArrows: '.arrows_block',
            dotsClass: 'progress',
        });
        $("[data-price]").slick({
            isFinite: false,
            fade: false,
            infinite: false,
            slideToShow: 1,
            slideToScroll: 1,
            arrows: false,
            dots: false,
            autoplay: false,
        });
    });

    // const track = document.getElementById(".price_item");
    let track = document.querySelector('.price_item');

    const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

    const handleOnUp = () => {
        track.dataset.mouseDownAt = "0";
        track.dataset.prevPercentage = track.dataset.percentage;
    }

    const handleOnMove = e => {
        if (track.dataset.mouseDownAt === "0") return;

        const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
            maxDelta = window.innerWidth;

        const percentage = (mouseDelta / maxDelta) * -100,
            nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
            nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

        track.dataset.percentage = nextPercentage;

        track.animate({
            transform: `translate(${nextPercentage}%, 0%)`
        }, { duration: 1200, fill: "forwards" });

        for (const image of track.getElementsByClassName("price_items")) {
            image.animate({
                backgroundPosition: `${100 + nextPercentage}% center`
            }, { duration: 1200, fill: "forwards" });
        }
    }

    /* -- Had to add extra lines for touch events -- */

    track.onmousedown = e => handleOnDown(e);

    track.ontouchstart = e => handleOnDown(e.touches[0]);

    track.onmouseup = e => handleOnUp(e);

    track.ontouchend = e => handleOnUp(e.touches[0]);

    track.onmousemove = e => handleOnMove(e);

    track.ontouchmove = e => handleOnMove(e.touches[0]);

    // window.onload = function () {
    //     const parallax = document.querySelector('.parallax');

    //     const moution = document.querySelector('.moution img');

    //     console.log(moution);

    //     const Formain = 40
    //     const speed = 0.05;

    // }

    // const bgTree = document.getElementById("parallax");

    // //При движении мышью вызываем функцию, которая меняет положение фона
    // document.addEventListener("mousemove", function (e) { MoveBackground(e); });

    // function MoveBackground(e)
    // {
    //    //Рассчитываем, насколько далеко от начала оси находится курсор: 0 - 0, 0.5 - середина экрана, 1 - ширина экрана (например, 1920)
    //    //Затем умножаем получившееся число на 30 - настолько будет сдвигаться фон
    //    //Например, если курсор находится посередине страницы (0.5), то при умножении получится 15
    //    //Далее отнимаем половину от 30, чтобы фон мог двигаться как влево, так и вправо
    //    let offsetX = (e.clientX / window.innerWidth * 30) - 15;
    //    let offsetY = (e.clientY / window.innerHeight * 10) - 5;

    //    //Меняем положение фона
    //    bgTree.setAttribute("style", "background-position: " + offsetX + "px " + offsetY + "px;");


    let list = document.querySelectorAll('ul.progress li'),
        next = document.getElementById('next'),
        content = document.querySelectorAll('.mode'),
        completed = 0;

    // let vedro = (b) => {
    //     for (let i = 0; i < 15; i++) {
    //         list[i].children[0].classList.add('grey');
    //         list[i].children[0].classList.remove('green');
    //         list[i].children[0].classList.remove('activated');
    //     }
    //     b = (b === 1) ? 1 : b;
    //     if (b > list.length) return;
    //     for (var i = 0; i < b; i++) {
    //         list[i].children[0].classList.remove('grey');
    //         list[i].children[0].classList.add('green');
    //         if (i % 2 === 0) {
    //             list[i].children[0].classList.add('activated');
    //         }
    //     }
    // }

    // content.forEach((e, b) => {
    //     e.addEventListener('click', function () {
    //         console.log(b);
    //         switch (b) {
    //             case 0:
    //                 vedro(1);
    //                 break;
    //             case 1:
    //                 vedro(3);
    //                 break;
    //             case 2:
    //                 vedro(5);
    //                 break;
    //             case 3:
    //                 vedro(7);
    //                 break;
    //             case 4:
    //                 vedro(9);
    //                 break;
    //             case 5:
    //                 vedro(11);
    //                 break;
    //             case 6:
    //                 vedro(13);
    //                 break;
    //             case 7:
    //                 vedro(15);
    //                 break;
    //         }
    //     });
    // }, false);

    // next.addEventListener('click', function () {
    //     if (document.querySelector('.activated') == null) {
    //         vedro(2);
    //     } else {
    //         switch (document.querySelectorAll('.activated').length) {
    //             case 0:
    //                 vedro(1);
    //                 break;
    //             case 1:
    //                 vedro(3);
    //                 break;
    //             case 2:
    //                 vedro(5);
    //                 break;
    //             case 3:
    //                 vedro(7);
    //                 break;
    //             case 4:
    //                 vedro(9);
    //                 break;
    //             case 4:
    //                 vedro(11);
    //                 break;
    //             case 4:
    //                 vedro(13);
    //                 break;
    //             case 4:
    //                 vedro(15);
    //                 break;

    //         }
    //     }
    // }, false);

    //Принимает два параметра функцию и опцию '0,7'
    const observer = new IntersectionObserver((entry) => {
        entry.forEach((entryes) => {
            // Если элемент пересекает
            if (entryes.isIntersecting) {
                //Находим все ссылки в QS и сравниваем с переданой секцией(entryes) если ок то выдаем класс active
                document.querySelectorAll('.smart_link').forEach((link) => {
                    link.classList.toggle('active',
                        link.getAttribute('href').replace('#', '') === entryes.target.id)
                })
            }
        })
    }, {
        threshold: .7,
        rootMargin: '70px',
    });

    // Тут мы нашли все наши секции и перебираем их вызывая для каждого элемента observer
    document.querySelectorAll('.section').forEach((section) => {
        observer.observe(section);
    })

    // Вешаем обработчик на все ссылки 
    // document.querySelector('.header_item').addEventListener('click', (event) => {
    //     // Если ссылка есть по клику то получаем ее href без "#" 
    //     if (event.target.classList.contains('smart_link')) {
    //         // event.preventDefault();
    //         // const id = getId(event.target)
    //         const id = event.target.getAttribute('href').replace('#', '');
    //         console.log(document.getElementById(id).offsetTop);
    //         console.log(event);
    //         // Скролимся к блоку 
    //         window.scrollTo({
    //             top: document.getElementById(id).offsetTop - 30,
    //             behavior: 'smooth',

    //         })
    //     }
    // })

})

// let burger = document.querySelector('.menu [type="checkbox"]')

