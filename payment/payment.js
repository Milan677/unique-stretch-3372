let shoppingData = JSON.parse(localStorage.getItem("CartData")) || [];
let productCards = document.querySelector(".productCards");
let clothesTotalPrize = document.querySelector("#clothesTotalPrize");
const totalPrizeShow = document.querySelector("#totalPrizeShow");

let userData = "";
let sum = 0;
shoppingData.forEach((data) => {
  sum += data.price * data.quantity;
  userData += `<div class ="imageCard">
        <img src="${data.image}" alt="">
        <p id="productName">${data.title}</p><p id="price">₹ ${data.price*data.quantity}</p>    
        </div>`;
});
productCards.innerHTML = userData;
clothesTotalPrize.innerText = `₹ ${sum}`;
if (sum > 0) {
  sum += 70
}

totalPrizeShow.innerText = `₹ ${sum}`


let cartpage = document.querySelector(".return-btn");

cartpage.addEventListener("click", function (event) {
  event.preventDefault()
  location.href = "/Cartpage/cart.html";
})


let forBtn = document.querySelector("form");

forBtn.addEventListener("submit", (e) => {
  e.preventDefault();
  const countryInfo = document.querySelector("#countrySelect");
  const firstName = document.querySelector("#firstName");
  const lastName = document.querySelector("#lastName");
  const company = document.querySelector("#company");
  const address = document.querySelector("#address");
  const city = document.querySelector("#city");
  const pincode = document.querySelector("#pincode");
  const phone = document.querySelector("#phone");

  location.href = "/credit cart/credit.html";
});