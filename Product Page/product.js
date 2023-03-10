let details = JSON.parse(localStorage.getItem("product-description"))
let CartData = JSON.parse(localStorage.getItem("CartData")) || []
let username = document.querySelector("#uname")
username.innerHTML = localStorage.getItem("username")
showdata(details)

function showdata(data) {
    let main = document.querySelector("#description")
    main.innerHTML = null
    main.innerHTML = `
    <div class="imgdiv">
            <img src=${data.image} alt="">
        </div>

        <div class="product_desc">
            <div>
                <h2 class="title">${data.title}</h2>
                <p class="brand">${data.brand}</p>
                <br>
                <div class="price">
                    <h3> ₹ <span> ${data.price}</span></h3>
                    <h4> <i class="material-icons" style="text-decoration:none;">local_offer</i> Shop Now</h4>
                </div>
                <div class="buttondiv">
                    <button class="buy">Buy Now</button>
                    <button class="cart">Add to Cart</button>
                </div>
            </div>
            <div class="details">
                <h3>Details</h3>
                <div class="block">
                    <p>Size</p>
                    <p>${data.size}</p>
                </div>
                <div class="block">
                    <p>Color</p>
                    <p>${data.color}</p>
                </div>
                <div class="block">
                    <p>Category</p>
                    <p>${data.category}</p>
                </div>
                <div>
                    <p>${data.description}</p>
                </div>
            </div>
        </div>
        `
    let cartbtn = document.querySelector(".cart")

    cartbtn.addEventListener("click", () => {
        let alreday = false

        for (let i = 0; i < CartData.length; i++) {
            if (CartData[i].id == data.id) {
                alreday = true
                break;
            }
        }
        if (alreday == true) {
            swal("", "Product already in the cart", "info")
        }
        else {
            details.quantity = 1
            CartData.push(details)
            localStorage.setItem("CartData", JSON.stringify(CartData))
            swal("", "Product added to cart successfully", "success");
        }
    })
}

function gotocart() {
    location.href = "/Cartpage/cart.html"
}

