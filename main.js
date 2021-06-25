const toggler =document.querySelector(".toggler");
const monthlyPrice = document.getElementById("monthly-price");
const yearlyPrice = document.getElementById("yearly-price");

toggler.addEventListener("change", ()=> {
    if(toggler.checked) {
        monthlyPrice.innerHTML = '$549<span>/ year</span>';
        yearlyPrice.innerHTML = '$999<span>/ year</span>';
    } else {
        monthlyPrice.innerHTML = '$49<span>/ year</span>';
        yearlyPrice.innerHTML = '$99<span>/ year</span>';
    }
})