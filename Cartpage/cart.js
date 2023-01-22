// main part
let username = localStorage.getItem("username")

document.querySelector("#username").innerText = `Hello, ${username}`


let CartData = JSON.parse(localStorage.getItem("CartData")) || [];

let emptycart = document.querySelector("#empty-cart");

let logo = document.querySelector("#logo>img");

logo.addEventListener("click", function (event) {
    event.preventDefault()
    location.href = "/Shopping Page/shopping.html";
})



let checkout = document.querySelector("#pay2");

checkout.addEventListener("click", function (event) {
    event.preventDefault()
    location.href = "/payment/payment.html";
})


displaycard(CartData);

totalbill(CartData)

function totalbill(data) {
    let total = data.reduce((acc, el) => {
        return acc += el.price * el.quantity
    }, 0)
    document.querySelector("#totalp").innerText = total;

}


function displaycard(data) {
    let container = document.querySelector("#addedData")
    container.textContent = null

    document.querySelector("#fav-total").innerText = data.length;
    document.querySelector("#prod").innerText = data.length;

    data.forEach(el => {
        let quantity = el.quantity
        let div = document.createElement("div")
        let img = document.createElement("img")
        img.setAttribute("src", el.image)
        let name = document.createElement("h2")
        name.innerText = el.title.substring(0, 20)
        let price = document.createElement("p")
        price.innerText = el.price * quantity
        price.style.fontWeight = 400


        let plus = document.createElement("button")
        plus.innerText = "+"
        plus.classList = "plus"
        plus.addEventListener("click", function () {
            quantity++
            cnt.innerText = quantity
            el.quantity = quantity
            price.innerText = el.price * quantity
            el.total = el.price * quantity
            localStorage.setItem("CartData", JSON.stringify(CartData))
            totaldata = JSON.parse(localStorage.getItem("CartData")) || [];
            totalbill(totaldata)
        })

        let cnt = document.createElement("p")
        cnt.innerText = quantity
        cnt.classList = "countnum"
        let minus = document.createElement("button")
        minus.innerText = "-"
        minus.classList = "minus"
        minus.addEventListener("click", function () {
            quantity--
            if (quantity <= 0) {
                quantity = 1
                cnt.innerText = quantity
            }
            cnt.innerText = quantity
            el.quantity = quantity
            price.innerText = el.price * quantity
            el.total = el.price * quantity
            localStorage.setItem("CartData", JSON.stringify(CartData))
            totaldata = JSON.parse(localStorage.getItem("CartData")) || [];
            totalbill(totaldata)
        })

        let qunatity_div = document.createElement("div")
        qunatity_div.classList = "quantity-div"

        qunatity_div.append(minus, cnt, plus)


        // delete function
        let cancel = document.createElement("button")
        cancel.innerText = "Delete"
        cancel.addEventListener("click", function () {
            let deleted = data.filter((element) => {
                return el.id != element.id
            })
            displaycard(deleted)
            localStorage.setItem("CartData", JSON.stringify(deleted))
            totalbill(deleted)
        })

        div.append(img, name, price, qunatity_div, cancel)

        container.append(div)
    });
}