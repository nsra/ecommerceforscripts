import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import '@fortawesome/fontawesome-free/js/all.min';
window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');

document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(item => new bootstrap.Tooltip(item))

document.querySelectorAll('.add-to-cart-btn').forEach(item => {
    item.addEventListener('click', () => {
        alert('أضيف المُنتج إلى عربة الشراء')
    })
})
document.getElementById('copyright').innerHTML= "جميع الحقوق محفوظة للمتجر سنة " + new Date().getFullYear()

document.querySelectorAll(['.color-option input[type="radio"]']).forEach(item => {
    item.addEventListener('change', () => {
        document.querySelectorAll('.color-option').forEach(i => {
            i.classList.remove("active")
        })
        item.parentNode.parentNode.classList.add("active")
    })
})

document.querySelectorAll(['.size-option input[type="radio"]']).forEach(item => {
    item.addEventListener('change', () => {
        document.querySelectorAll('.size-option').forEach(i => {
            i.classList.remove("active")
        })
        item.parentNode.parentNode.classList.add("active")
    })
})