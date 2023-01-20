let header = document.getElementById("header")
let catagories = document.getElementById("catagories")
let dicover = document.getElementById("discover")
let ladiesData = document.getElementById("ladiesData")
let mendata = document.getElementById("mendata")
let accessories = document.getElementById("accessories")
let HomeDecor = document.getElementById("HomeDecor")
let maincontainer = document.getElementById("maincontainer")
let gridshow = document.getElementById("gridshow")



//  for ladies data on click
let LadClick = document.getElementById("LadClick")
LadClick.addEventListener("click", () => {
  maincontainer.innerHTML = null
  gridshow.innerHTML = null
  fetch("https://63c58a3fe1292e5bea25cbd2.mockapi.io/Ladieswear").then((res) => {
    return res.json()
  })
    .then((data) => {
      MClickdata(data)

    })
})

//  for mens data on click

let Mclick = document.getElementById("Mclick")
Mclick.addEventListener("click", () => {
  maincontainer.innerHTML = null
  gridshow.innerHTML = null
  fetch("https://63c58a3fe1292e5bea25cbd2.mockapi.io/Menswear").then((res) => { return res.json() })
    .then((data) => {
      MClickdata(data)
    })
})


//  for acceserios data on click

let Accesserioclick = document.getElementById("Accesserioclick")
Accesserioclick.addEventListener("click", () => {
  gridshow.innerHTML = null
  maincontainer.innerHTML = null
  fetch("https://63c64dd4dcdc478e15beb8da.mockapi.io/Accessories").then((res) => { return res.json() })
    .then((data) => {
      MClickdata(data)
    })

})

//  for homedecor data on click
let Homedecor = document.getElementById("Homedecorclick")
Homedecor.addEventListener("click", () => {
  gridshow.innerHTML = null
  maincontainer.innerHTML = null
  fetch("https://63c64dd4dcdc478e15beb8da.mockapi.io/Homedecor").then((res) => { return res.json() })
    .then((data) => {
      MClickdata(data)
    })

})


//  this function is for appendig mens data
function MClickdata(data) {

  maincontainer.innerHTML = null
  dicover.innerHTML = null;
  data.forEach((element) => {

    let card = document.createElement("div")
    let imgdiv = document.createElement("div")
    imgdiv.className = "imgdiv"

    card.className = "card"

    let image = document.createElement("img")
    image.src = element.image

    let title = document.createElement("p")
    title.innerText = element.title.substring(0, 30)
    title.className = "ladiestitle"

    let desc = document.createElement("p")
    desc.innerText = element.desc.substring(0, 25)
    desc.className = "Ldesc"

    let price = document.createElement("h3")
    price.innerText = element.price
    price.className = "price"

    let AddtoCart = document.createElement("button")
    AddtoCart.innerText = "Add To Card"
    AddtoCart.className = "addtocart"

    AddtoCart.addEventListener("click", () => {
      let CartData = JSON.parse(localStorage.getItem("CartData")) || []
      let alreday = false

      for (let i = 0; i < CartData.length; i++) {
        if (CartData[i].desc == element.desc) {
          alreday = true
          break;
        }
      }
      if (alreday == true) {
        swal("", "Product already in the cart", "info")
      }
      else {
        CartData.push(element)
        localStorage.setItem("CartData", JSON.stringify(CartData))
        swal("", "Product added to cart successfully", "success");
      }
    })

    imgdiv.append(image)
    card.append(imgdiv, title, desc, price, AddtoCart)
    gridshow.append(card)
    maincontainer.append(gridshow)
  });
}



//  this button is for showing all ladies data by fetch
let viewmoreBtn = document.getElementById("viewmore")
viewmoreBtn.addEventListener("click", () => {
  viewmoreBtn.innerHTML = null

  let ladiesData = document.getElementById("ladiesData")

  fetch("https://63c58a3fe1292e5bea25cbd2.mockapi.io/Ladieswear").then((res) => {
    return res.json()
  })
    .then((data) => {

      showData(data)
    })

})


//  this button is for showing all mens data by fetch
let viewmore2Btn = document.getElementById("viewmore2")

viewmore2Btn.addEventListener("click", () => {
  viewmore2Btn.innerHTML = null
  fetch("https://63c58a3fe1292e5bea25cbd2.mockapi.io/Menswear").then((res) => {
    return res.json()
  })
    .then((mensData) => {
      showmensData(mensData)
    })


})


//  this button is for showing all Accesserioes data by fetch
let viewmore3Btn = document.getElementById("viewmore3")
viewmore3Btn.addEventListener("click", () => {
  viewmore3Btn.innerHTML = null
  fetch("https://63c64dd4dcdc478e15beb8da.mockapi.io/Accessories").then((res) => {
    return res.json()
  })
    .then((AccessoriesData) => {
      showAcc(AccessoriesData)
    })

})


//  this button is for showing all Home decor data by fetch
let viewmore4btn = document.getElementById("viewmore4")
viewmore4btn.addEventListener("click", () => {
  viewmore4btn.innerHTML = null
  fetch("https://63c64dd4dcdc478e15beb8da.mockapi.io/Homedecor").then((res) => {
    return res.json()
  })
    .then((HomeDecor) => {
      showHomeDecc(HomeDecor)
    })
})


//  this function is for showimg  mens data in main container
function showmensData(data) {
  data.forEach((element) => {

    let card = document.createElement("div")
    let imgdiv = document.createElement("div")
    imgdiv.className = "imgdiv"

    card.className = "card"

    let image = document.createElement("img")
    image.src = element.image

    let title = document.createElement("p")
    title.innerText = element.title.substring(0, 20)
    title.className = "ladiestitle"

    let desc = document.createElement("p")
    desc.innerText = element.desc
    desc.className = "Ldesc"

    let price = document.createElement("h3")
    price.innerText = element.price
    price.className = "price"

    let AddtoCart = document.createElement("button")
    AddtoCart.innerText = "Add To Card"
    AddtoCart.className = "addtocart"

    AddtoCart.addEventListener("click", () => {
      let CartData = JSON.parse(localStorage.getItem("CartData")) || []
      let alreday = false

      for (let i = 0; i < CartData.length; i++) {
        if (CartData[i].desc == element.desc) {
          alreday = true
          break;
        }
      }
      if (alreday == true) {
        swal("", "Product already in the cart", "info")
      }
      else {
        CartData.push(element)
        localStorage.setItem("CartData", JSON.stringify(CartData))
        swal("", "Product added to cart successfully", "success");
      }
    })

    imgdiv.append(image)

    card.append(imgdiv, title, desc, price, AddtoCart)
    mendata.append(card)

  })
}

//  this function is for showimg  womens data in main container
function showData(data) {
  data.forEach((element) => {

    let card = document.createElement("div")
    let imgdiv = document.createElement("div")
    imgdiv.className = "imgdiv"

    card.className = "card"

    let image = document.createElement("img")
    image.src = element.image

    let title = document.createElement("p")
    title.innerText = element.title.substring(0, 20)
    title.className = "ladiestitle"

    let desc = document.createElement("p")
    desc.innerText = element.desc
    desc.className = "Ldesc"

    let price = document.createElement("h3")
    price.innerText = element.price
    price.className = "price"

    let AddtoCart = document.createElement("button")
    AddtoCart.innerText = "Add To Card"
    AddtoCart.className = "addtocart"

    AddtoCart.addEventListener("click", () => {
      let CartData = JSON.parse(localStorage.getItem("CartData")) || []
      let alreday = false

      for (let i = 0; i < CartData.length; i++) {
        if (CartData[i].desc == element.desc) {
          alreday = true
          break;
        }
      }
      if (alreday == true) {
        swal("", "Product already in the cart", "info")
      }
      else {
        CartData.push(element)
        localStorage.setItem("CartData", JSON.stringify(CartData))
        swal("", "Product added to cart successfully", "success");
      }
    })

    imgdiv.append(image)

    card.append(imgdiv, title, desc, price, AddtoCart)
    ladiesData.append(card)
  });
}


//  this function is for showimg Accesserios data in main container
function showAcc(data) {
  data.forEach((element) => {

    let card = document.createElement("div")
    let imgdiv = document.createElement("div")
    imgdiv.className = "imgdiv"

    card.className = "card"

    let image = document.createElement("img")
    image.src = element.image

    let title = document.createElement("p")
    title.innerText = element.title.substring(0, 20)
    title.className = "ladiestitle"

    let desc = document.createElement("p")
    desc.innerText = element.desc.substring(0, 20)
    desc.className = "Ldesc"

    let price = document.createElement("h3")
    price.innerText = element.price
    price.className = "price"

    let AddtoCart = document.createElement("button")
    AddtoCart.innerText = "Add To Card"
    AddtoCart.className = "addtocart"

    AddtoCart.addEventListener("click", () => {
      let CartData = JSON.parse(localStorage.getItem("CartData")) || []
      let alreday = false

      for (let i = 0; i < CartData.length; i++) {
        if (CartData[i].desc == element.desc) {
          alreday = true
          break;
        }
      }
      if (alreday == true) {
        swal("", "Product already in the cart", "info")
      }
      else {
        CartData.push(element)
        localStorage.setItem("CartData", JSON.stringify(CartData))
        swal("", "Product added to cart successfully", "success");
      }
    })

    imgdiv.append(image)

    card.append(imgdiv, title, desc, price, AddtoCart)
    accessories.append(card)
  });
}


//  this function is for showimg  Homedecor in main container
function showHomeDecc(data) {
  data.forEach((element) => {

    let card = document.createElement("div")
    let imgdiv = document.createElement("div")
    imgdiv.className = "imgdiv"

    card.className = "card"

    let image = document.createElement("img")
    image.src = element.image

    let title = document.createElement("p")
    title.innerText = element.title.substring(0, 20)
    title.className = "ladiestitle"

    let desc = document.createElement("p")
    desc.innerText = element.desc.substring(0, 20)
    desc.className = "Ldesc"

    let price = document.createElement("h3")
    price.innerText = element.price
    price.className = "price"

    let AddtoCart = document.createElement("button")
    AddtoCart.innerText = "Add To Card"
    AddtoCart.className = "addtocart"


    AddtoCart.addEventListener("click", () => {
      let CartData = JSON.parse(localStorage.getItem("CartData")) || []
      let alreday = false

      for (let i = 0; i < CartData.length; i++) {
        if (CartData[i].desc == element.desc) {
          alreday = true
          break;
        }
      }
      if (alreday == true) {
        swal("", "Product already in the cart", "info")
      }
      else {
        CartData.push(element)
        localStorage.setItem("CartData", JSON.stringify(CartData))
        swal("", "Product added to cart successfully", "success");
      }
    })

    imgdiv.append(image)

    card.append(imgdiv, title, desc, price, AddtoCart)
    HomeDecor.append(card)
  });
}

// search functionalty

let searchval = localStorage.getItem("searchkey")
let searchbtn = document.getElementById("searchbtn")

searchbtn.addEventListener("click", () => {
  let searchValue = document.getElementById("search_item").value
  if (searchValue == "") {
    swal("", "Product Name can't be Empty", "info")
  } else {
    localStorage.setItem("searchkey", searchValue)
    location.href = "/Search Page/Search.html"
  }

})


function searchData(data) {
  maincontainer.innerHTML = null
  dicover.innerHTML = null;
  gridshow.innerHTML = null
  data.forEach((element) => {

    let card = document.createElement("div")
    let imgdiv = document.createElement("div")
    imgdiv.className = "imgdiv"

    card.className = "card"

    let image = document.createElement("img")
    image.src = element.image

    let title = document.createElement("p")
    title.innerText = element.title.substring(0, 30)
    title.className = "ladiestitle"

    let desc = document.createElement("p")
    desc.innerText = element.desc.substring(0, 25)
    desc.className = "Ldesc"

    let price = document.createElement("h3")
    price.innerText = element.price
    price.className = "price"

    let AddtoCart = document.createElement("button")
    AddtoCart.innerText = "Add To Card"
    AddtoCart.className = "addtocart"

    AddtoCart.addEventListener("click", () => {
      let CartData = JSON.parse(localStorage.getItem("CartData")) || []
      let alreday = false

      for (let i = 0; i < CartData.length; i++) {
        if (CartData[i].desc == element.desc) {
          alreday = true
          break;
        }
      }
      if (alreday == true) {
        swal("", "Product already in the cart", "info")
      }
      else {
        CartData.push(element)
        localStorage.setItem("CartData", JSON.stringify(CartData))
        swal("", "Product added to cart successfully", "success");
      }
    })



    imgdiv.append(image)
    card.append(imgdiv, title, desc, price, AddtoCart)
    gridshow.append(card)
    maincontainer.append(gridshow)
  });
}


let username = document.querySelector("#uname")
username.innerText = localStorage.getItem("username")
