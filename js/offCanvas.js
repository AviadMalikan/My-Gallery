'use strict'

$('.offcanvas-btn').click(openCanvas)
$('a[href="#contact"]').click(() => setTimeout(openCanvas, 1000))

function openCanvas() {
    document.querySelector('.offcanvas-btn').classList.toggle('offcanvas-btn-open');
    document.querySelector('.offcanvas-aside').classList.toggle('offcanvas-aside-open');
}