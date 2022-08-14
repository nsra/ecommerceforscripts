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


document.querySelectorAll('[data-product-quantity]').forEach(item => {
    item.addEventListener('change', () => {
        const newQuantity = item.value
        const parent = item.closest('[data-product-info]')
        const pricePerUnit = parent.getAttribute('data-product-price')
        const totalPriceForProduct = newQuantity * pricePerUnit
        parent.querySelector('.total-price-for-product').innerHTML = totalPriceForProduct + '$'
        calculateTotalPrice()
    })
})

document.querySelectorAll('[data-remove-from-cart]').forEach(item => {
    item.addEventListener('click', () => {
        item.closest('[data-product-info]').remove()
        calculateTotalPrice()
    })
})

function calculateTotalPrice() {
    // أنشئ متغيّرًا جديدًا لحفظ السعر الإجمالي    
    let totalPriceForAllProducts = 0;
    // لكل سطر يمثل معلومات المُنتج في الصّفحة    
    document.querySelectorAll('[data-product-info]').forEach(product => {
        // اجلب سعر القطعة الواحدة من الخاصّية الموافقة        
        const pricePerUnit = product.getAttribute("data-product-price");
        // اجلب كمية المنتج من حقل اختيار الكمية 
        const quantity = product.querySelector('[data-product-quantity]').value;
        // اجلب السعر الإجمالي للمنتج بناء على الكمية المشتراه منه
        const totalPriceForProduct = pricePerUnit * quantity;
        // أضف السعر الإجمالي لهذا المنتج إلى السعر الإجمالي لكل المُنتجات، واحفظ القيمة في المتغير نفسه        
        totalPriceForAllProducts = totalPriceForAllProducts + totalPriceForProduct;
    });
    // حدث السعر الإجمالي لكل المُنتجات في الصفحة    
    document.getElementById("total-price-for-all-products").innerHTML = totalPriceForAllProducts + '$';
}
