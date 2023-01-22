let alternate = []

let CartData = JSON.parse(localStorage.getItem("CartData")) || []

let container = document.querySelector("#product-container")

let srchbtn = document.querySelector("#searchbtn>button")

srchbtn.addEventListener("click", () => {
  let searchkey = document.querySelector("#search_item").value

  localStorage.setItem("searchkey", searchkey)
  filterdata(alternate)
})

let sort = document.querySelector("#sort")

sort.addEventListener("click", function (event) {
  let selected = event.target.value
  let newdata;
  if (selected == "LTH") {
    newdata = alternate2.sort(function (a, b) {
      document.querySelector("#HTL").checked = false
      return a.price - b.price
    })
  } else {
    newdata = alternate2.sort(function (a, b) {
      document.querySelector("#LTH").checked = false
      return b.price - a.price
    })
  }
  displayData(newdata)
})


let filter_category = document.querySelector("#category")

filter_category.addEventListener("click", function (event) {
  let selected = event.target.value
  console.log(selected)
  let newdata;
  if(selected == "men"){
    document.querySelector("#women").checked = false
    newdata = alternate2.filter(el =>{
      return el.category.toLowerCase() == "men"
    })
  }else{
    document.querySelector("#men").checked = false
    newdata = alternate2.filter(el =>{
      return el.category.toLowerCase() == "women"
  })
}
if(newdata.length == 0){
  let notavailable = document.querySelector("#notavailable")
  notavailable.style.display = "block"
  let available = document.querySelector("#container")
  available.style.display = "none" 
}else{
  displayData(newdata)
}
  

})





fetch("/data.json")
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    alternate = data
    console.log(data)
    let container = document.querySelector("#product-container")

    filterdata(data)
  })

let alternate2;

function filterdata(data) {
  let searchkey = localStorage.getItem("searchkey")
  let filtered = data.filter((el, i) => {
    return el.title.toLowerCase().includes(searchkey.toLowerCase()) || el.category.toLowerCase().includes(searchkey.toLowerCase()) || el.description.toLowerCase().includes(searchkey.toLowerCase())
  })
  alternate2 = filtered
  let container = document.querySelector("#product-container")
  if(filtered.length == 0){
    let notavailable = document.querySelector("#notavailable")
    notavailable.style.display = "block"
    let available = document.querySelector("#container")
    available.style.display = "none" 
  }else{
    displayData(filtered)
  }
}

function displayData(data) {
  container.innerHTML = null
  data.forEach(el => {
    let div = document.createElement("div")
    let img = document.createElement("img")
    img.src = el.image;
    let name = document.createElement("h3")
    name.innerText = el.title.substring(0,30) +"...";
    let brand = document.createElement("p")
    brand.innerText = el.brand;
    let price = document.createElement("h4")
    price.innerHTML = el.price;
    let button = document.createElement("button")
    button.innerText = "Add to Cart"

    div.append(img, name, brand, price, button)
    container.append(div)

    div.addEventListener("click", function () {
      localStorage.setItem("product-description", JSON.stringify(el))
      location.href = "/Product Page/product.html"
    })

    button.addEventListener("click", (event) => {
      event.stopPropagation()
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
        CartData.push(el)
        localStorage.setItem("CartData", JSON.stringify(CartData))
        swal("", "Product added to cart successfully", "success");
      }
    })
  })

}

let username = document.querySelector("#uname")
username.innerText = localStorage.getItem("username")


function gotocart(){
  location.href = "/Cartpage/cart.html"
}