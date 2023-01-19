let header = document.getElementById("header")
let catagories = document.getElementById("catagories")
let dicover = document.getElementById("discover")
let ladiesData = document.getElementById("ladiesData")
let mendata = document.getElementById("mendata")
let accessories = document.getElementById("accessories")
let HomeDecor = document.getElementById("HomeDecor")
let maincontainer = document.getElementById("maincontainer")
let gridshow = document.getElementById("gridshow")


 catagories.innerHTML = `
<a id="LadClick">
<div id="tac">
<div id="LadiesClick"> <img src="https://shopping.imimg.com/style/ladies-wear.png" alt=""></div>
<span>Ladies Wear</span>
</div>
</a>

<a id="Mclick">
<div id="tac">
 <div> <img src="https://shopping.imimg.com/style/men-wear.png" alt=""></div>
 <span>Men Wear</span>
</div>
</a>

<div id="tac">
 <div> <img src="https://shopping.imimg.com/style/footwear.png" alt=""></div>
 <span>FootWear</span>
</div>


<div id="tac">
 <div> <img src="https://shopping.imimg.com/style/beauty-products.png" alt=""></div>
 <span>Beauty <br> Products</span>
</div>

<a id="Accesserioclick">
<div id="tac">
 <div> <img src="https://shopping.imimg.com/style/mobile-accessories.png" alt=""></div>
 <span>Mobile <br> Accessories </span>
</div>
</a>

<a id="Homedecorclick">
<div id="tac">
 <div> <img src="https://shopping.imimg.com/style/home-decor.png" alt=""></div>
 <span>Home Decor</span>
</div>
</a>

<div id="tac">
 <div> <img src="https://shopping.imimg.com/style/artificial-jewellery.png" alt=""></div>
 <span>Arificial <br> Jewellery </span>
</div>


<div id="tac">
 <div> <img src="https://shopping.imimg.com/style/fertilizer.png" alt=""></div>
 <span> Fertilizer </span>
</div>


<div id="tac">
 <div> <img src="https://shopping.imimg.com/style/light.png" alt=""></div>
 <span>Light</span>
</div>


<div id="tac">
 <div> <img src="https://shopping.imimg.com/style/industrial-chemicals.png" alt=""></div>
 <span>Industrial Chemicals</span>
</div> 
`
dicover.innerHTML = `
<div id="left">
            <div class="one">Discover</div>
            <div class="two">𝒲𝒾𝓃𝓉𝑒𝓇 𝒞𝑜𝓁𝓁𝑒𝒸𝓉𝒾𝑜𝓃</div>
            <div class="three">On UpStore</div>
         </div>

         <div id="right">
            <div id="parent">
            <div>
                <img src="https://shopping.imimg.com/style/b1.webp" alt="">
            </div>

            <div>
                <img src="https://shopping.imimg.com/style/b2.webp" alt="">
            </div>
        </div>

         </div>
`

ladiesData.innerHTML = `
<div class="card">

<div class="imgdiv">
    <img src="https://5.imimg.com/data5/ECOM/Default/2023/1/RO/GF/CQ/8344890/8084a-2-500x500.jpg" alt="">
</div>

<p class="ladiestitle">Bodycon Dress With Shoulder Cut</p>

<p class="Ldesc">Pannkh</p>

<h3 class="price">₹ 999</h3>

<button id="addtocart">Add To Cart</button>

</div>

<div class="card">

<div class="imgdiv">
    <img src="https://5.imimg.com/data5/ECOM/Default/2022/12/WN/HY/NI/90086993/sfdrss1781-1-500x500.jpg" alt="">
</div>

<p class="ladiestitle">Stripes Poly Rayon Dress R894</p>

<p class="Ldesc">lanram Traders</p>

<h3 class="price">₹ 10299</h3>

<button id="addtocart">Add To Cart</button>

</div>


<div class="card">

<div class="imgdiv">
    <img src="https://5.imimg.com/data5/ECOM/Default/2023/1/LC/YJ/LI/20345987/r894-2-500x500.jpg" alt="">
</div>

<p class="ladiestitle">Stripes Poly Rayon Dress R894</p>

<p class="Ldesc">Wama Trendz</p>

<h3 class="price">₹ 1999</h3>

<button id="addtocart">Add To Cart</button>

</div>



<div class="card">

<div class="imgdiv">
    <img src="https://5.imimg.com/data5/ECOM/Default/2023/1/ID/LK/OE/35667744/kk-8-500x500.jpg" alt="">
</div>

<p class="ladiestitle">Maroon Cotton Maxi fancy Dress</p>

<p class="Ldesc">Siabhi Studios</p>

<h3 class="price">₹ 4,050</h3>

<button id="addtocart">Add To Cart</button>

</div>



<div class="card">

<div class="imgdiv">
    <img src="https://5.imimg.com/data5/ECOM/Default/2022/10/PN/BE/HZ/8530435/wwj03i-4-500x500.jpg" alt="">
</div>

<p class="ladiestitle">Pink Women's Jumpsuit Dress</p>

<p class="Ldesc">Yelloe Designs Inc.</p>

<h3 class="price">₹ 599</h3>

<button id="addtocart">Add To Cart</button>

</div>`

mendata.innerHTML = `
<div class="card">

<div class="imgdiv">
    <img src="https://5.imimg.com/data5/ECOM/Default/2023/1/UT/AJ/YM/31299794/mens-full-sleeves-raglan-plain-849935-500x500.jpg" alt="">
</div>

<p class="ladiestitle">Mens Full Sleeves Raglan-plain Cut</p>

<p class="Ldesc">Enthopia</p>

<h3 class="price">₹ 450</h3>

<button id="addtocart">Add To Cart</button>

</div>

<div class="card">

<div class="imgdiv">
    <img src="https://5.imimg.com/data5/ECOM/Default/2022/12/ZW/DH/AS/90086993/jjko-532green-1-d7233403-471b-4fa1-a376-b156f61a3f24-500x500.jpg" alt="">
</div>

<p class="ladiestitle">Men blue & White Solid Kurta Only</p>

<p class="Ldesc">NOZ2TOZ</p>

<h3 class="price">₹ 852</h3>

<button id="addtocart">Add To Cart</button>

</div>



<div class="card">

<div class="imgdiv">
    <img src="https://5.imimg.com/data5/ECOM/Default/2023/1/OA/YL/SR/13078142/blue-strechable-denim-jeans-931549-500x500.jpg" alt="">
</div>

<p class="ladiestitle">Studio Nexx Men's Regular Fit Jeans</p>

<p class="Ldesc">Store Apt</p>

<h3 class="price">₹ 1,099</h3>

<button id="addtocart">Add To Cart</button>

</div>



<div class="card">

<div class="imgdiv">
    <img src="https://5.imimg.com/data5/ECOM/Default/2023/1/MN/ZQ/IV/10883763/1-794fbca2-3c23-4f68-b9b0-f59c646f70d9-500x500.jpg" alt="">
</div>

<p class="ladiestitle">Men Dark Blue Printed Track Pants</p>

<p class="Ldesc">AKR Industries Private Limited</p>

<h3 class="price">₹ 449</h3>

<button id="addtocart">Add To Cart</button>

</div>



<div class="card">

<div class="imgdiv">
    <img src="https://5.imimg.com/data5/ECOM/Default/2022/2/EG/LX/FD/5444595/3-13597bc1-8659-4420-86d5-79ec97d71d1d-500x500.jpg" alt="">
</div>

<p class="ladiestitle">Stylish denim fashionable men shirts</p>

<p class="Ldesc">lorenderm</p>

<h3 class="price">₹ 799</h3>

<button id="addtocart">Add To Cart</button>

</div>
`
accessories.innerHTML = `
<div class="card">

<div class="imgdiv">
    <img src="https://5.imimg.com/data5/ECOM/Default/2023/1/BX/RI/HU/26954735/41ko-gcrsxl-sl1200-1000x1000.jpg" alt="">
</div>

<p class="ladiestitle">Micro Usb Braided Cables, Portronics Konnect</p>

<p class="Ldesc">A to Z </p>

<h3 class="price">₹ 62.40</h3>

<button id="addtocart">Add To Cart</button>

</div>

<div class="card">

<div class="imgdiv">
    <img src="https://5.imimg.com/data5/ECOM/Default/2023/1/CI/AY/FT/95869149/6666-1000x1000.png" alt="">
</div>

<p class="ladiestitle">Zebronics Evolve Blue Bluetooth Headset</p>

<p class="Ldesc">The Hobby Shop</p>

<h3 class="price">₹ 725 </h3>

<button id="addtocart">Add To Cart</button>

</div>



<div class="card">

<div class="imgdiv">
    <img src="https://5.imimg.com/data5/ECOM/Default/2023/1/OV/FE/DS/38238383/newproject-89-1000x1000.jpg" alt="">
</div>

<p class="ladiestitle">Phone Converter Ipphone Xr To Iphone 13</p>

<p class="Ldesc">S.m.rottor Die Cast</p>

<h3 class="price">₹ 699</h3>

<button id="addtocart">Add To Cart</button>

</div>



<div class="card">

<div class="imgdiv">
    <img src="https://5.imimg.com/data5/ECOM/Default/2022/9/TN/XC/OI/147282547/38974876-1059399010932863-1318725976879792128-n-1000x1000.jpg" alt="">
</div>

<p class="ladiestitle">Oculus Touch Left Hand Controller</p>

<p class="Ldesc">Asnkart Global Solutions LLP</p>

<h3 class="price">₹ 3,400</h3>

<button id="addtocart">Add To Cart</button>

</div>



<div class="card">

<div class="imgdiv">
    <img src="https://5.imimg.com/data5/ECOM/Default/2022/12/BS/SD/HM/47699750/1-dd97ffd5-1b00-415e-8b7c-e11c259f9d78-1000x1000.png" alt="">
</div>

<p class="ladiestitle">TVN MXLY2ZM/A 1 m USB 2.0 to Lightning Cable</p>

<p class="Ldesc">Triveni World</p>

<h3 class="price">₹ 399</h3>

<button id="addtocart">Add To Cart</button>

</div>
`
HomeDecor.innerHTML = `
<div class="card">

<div class="imgdiv">
    <img src="https://5.imimg.com/data5/ECOM/Default/2022/11/SE/VW/KP/64575997/4-e092342f-c8b7-4985-8ec7-456a79fe1f93-1000x1000.jpg" alt="">
</div>

<p class="ladiestitle">Iron Wall Hanging Art for Home Decor</p>

<p class="Ldesc">Swasti Sales </p>

<h3 class="price">₹ 4,999</h3>

<button id="addtocart">Add To Cart</button>

</div>

<div class="card">

<div class="imgdiv">
    <img src="https://5.imimg.com/data5/ECOM/Default/2022/8/FJ/PS/GI/2462629/bnfmun88-1000x1000.jpg" alt="">
</div>

<p class="ladiestitle">Show My  & Mounted Sculptur Love</p>

<p class="Ldesc">Jaunty  Private Limited</p>

<h3 class="price">₹ 495 </h3>

<button id="addtocart">Add To Cart</button>

</div>



<div class="card">

<div class="imgdiv">
    <img src="https://5.imimg.com/data5/ECOM/Default/2023/1/VF/WD/NM/85504720/69c39bfe-7d62-4fd7-b07d-decb81d74b40-1000x1000.jpg" alt="">
</div>

<p class="ladiestitle">Navy Blue Leaf  King Size Bedsheet</p>

<p class="Ldesc">TradeUNO  Private Limited </p>

<h3 class="price">₹ 1,485</h3>

<button id="addtocart">Add To Cart</button>

</div>



<div class="card">

<div class="imgdiv">
    <img src="https://5.imimg.com/data5/ECOM/Default/2022/10/LE/QP/OL/99238720/clock13-400x-bffd6c1e-ac5a-4028-9ada-c65f87f77778-1000x1000.jpg  " alt="">
</div>

<p class="ladiestitle">Wooden designer Clock Panel</p>

<p class="Ldesc">Idekors</p>

<h3 class="price">₹ 2,000</h3>

<button id="addtocart">Add To Cart</button>

</div>



<div class="card">

<div class="imgdiv">
    <img src="https://5.imimg.com/data5/ECOM/Default/2023/1/BJ/VX/ME/2403926/whatsapp-image-2021-10-26-at-1-18-31-am-1000x1000.jpg" alt="">
</div>

<p class="ladiestitle">Symphony fancy desginer Wall Art</p>

<p class="Ldesc">Shiraz Handicrafts</p>

<h3 class="price">₹ 5,400</h3>

<button id="addtocart">Add To Cart</button>

</div>
`


//  catogries clicking
let LadClick = document.getElementById("LadClick")
LadClick.addEventListener("click", () => {
  maincontainer.innerHTML = null
  fetch("https://63c58a3fe1292e5bea25cbd2.mockapi.io/Ladieswear").then((res) => {
    return res.json()
  })
    .then((data) => {
      LadClickdata(data)

    })
})

let Mclick = document.getElementById("Mclick")
Mclick.addEventListener("click", () => {
  maincontainer.innerHTML = null
  fetch("https://63c58a3fe1292e5bea25cbd2.mockapi.io/Menswear").then((res) => { return res.json() })
    .then((data) => {
      MClickdata(data)
    })
})



let Accesserioclick = document.getElementById("Accesserioclick")
Accesserioclick.addEventListener("click", () => {
  maincontainer.innerHTML = null
  fetch("https://63c64dd4dcdc478e15beb8da.mockapi.io/Accessories").then((res) => { return res.json() })
    .then((data) => {
      MClickdata(data)
    })
})

let Homedecor = document.getElementById("Homedecorclick")
Homedecor.addEventListener("click", () => {
  maincontainer.innerHTML = null
  fetch("https://63c64dd4dcdc478e15beb8da.mockapi.io/Homedecor").then((res) => { return res.json() })
    .then((data) => {
      MClickdata(data)
    })

})

function LadClickdata(data) {
  maincontainer.innerHTML = null

  data.forEach((element) => {
    let card = document.createElement("div")
    let imgdiv = document.createElement("div")
    imgdiv.className = "imgdiv"
    card.className = "card"
    let image = document.createElement("img")
    image.src = element.image

    let title = document.createElement("p")
    title.innerText = element.tittle.substring(0, 20)
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
        alert("item already in cart")
      }
      else {
        CartData.push(element)
        localStorage.setItem("CartData", JSON.stringify(CartData))
        alert("item added to cart")
      }
    })

    imgdiv.append(image)
    card.append(imgdiv, title, desc, price, AddtoCart)
    gridshow.append(card)
    maincontainer.append(gridshow)
      if(alreday == true){
        alert("item already in cart")
      }
      else{
      CartData.push(element)
      localStorage.setItem("CartData",JSON.stringify(CartData))
      alert("item added to cart")
      }
    }) 

    imgdiv.append(image)
     card.append(imgdiv,title,desc,price,AddtoCart)
     gridshow.append(card)
     maincontainer.append(gridshow)
  });
}



function MClickdata(data) {

  maincontainer.innerHTML = null

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
        alert("item already in cart")
      }
      else {
        CartData.push(element)
        localStorage.setItem("CartData", JSON.stringify(CartData))
        alert("item added to cart")
      }
    })

    imgdiv.append(image)
    card.append(imgdiv, title, desc, price, AddtoCart)
    gridshow.append(card)
    maincontainer.append(gridshow)
  });
}

function LadClickdata(data) {
  maincontainer.innerHTML = null

  data.forEach((element) => {
    let card = document.createElement("div")
    let imgdiv = document.createElement("div")
    imgdiv.className = "imgdiv"
    card.className = "card"

    let image = document.createElement("img")
    image.src = element.image

    let title = document.createElement("p")
    title.innerText = element.tittle.substring(0, 20)
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
        alert("item already in cart")
      }
      else {
        CartData.push(element)
        localStorage.setItem("CartData", JSON.stringify(CartData))
        alert("item added to cart")
      }
    })

    imgdiv.append(image)
    card.append(imgdiv, title, desc, price, AddtoCart)
    gridshow.append(card)
    maincontainer.append(gridshow)
  });
}

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


function showmensData(data) {
  maincontainer.innerHTML = null
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
        alert("item already in cart")
      }
      else {
        CartData.push(element)
        localStorage.setItem("CartData", JSON.stringify(CartData))
        alert("item added to cart")
      }
    })

    imgdiv.append(image)

    card.append(imgdiv, title, desc, price, AddtoCart)
    mendata.append(card)
  })
}
function showData(data) {
  data.forEach((element) => {

    let card = document.createElement("div")
    let imgdiv = document.createElement("div")
    imgdiv.className = "imgdiv"
    card.className = "card"

    let image = document.createElement("img")
    image.src = element.image

    let title = document.createElement("p")
    title.innerText = element.tittle.substring(0, 20)
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
        alert("item already in cart")
      }
      else {
        CartData.push(element)
        localStorage.setItem("CartData", JSON.stringify(CartData))
        alert("item added to cart")
      }
    })

    imgdiv.append(image)

    card.append(imgdiv, title, desc, price, AddtoCart)
    ladiesData.append(card)
  });
}

function showAcc(data) {
  maincontainer.innerHTML = null
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
        alert("item already in cart")
      }
      else {
        CartData.push(element)
        localStorage.setItem("CartData", JSON.stringify(CartData))
        alert("item added to cart")
      }
    })

    imgdiv.append(image)

    card.append(imgdiv, title, desc, price, AddtoCart)
    accessories.append(card)
  });
}

function showHomeDecc(data) {
  maincontainer.innerHTML = null
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
    title.innerText = element.title.substring(0,20)
    title.className = "ladiestitle"

    let desc = document.createElement("p")
    desc.innerText = element.desc.substring(0,20)
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
        alert("item already in cart")
      }
      else {
        CartData.push(element)
        localStorage.setItem("CartData", JSON.stringify(CartData))
        alert("item added to cart")
      }
    })

    imgdiv.append(image)

    card.append(imgdiv, title, desc, price, AddtoCart)
    HomeDecor.append(card)
  });
}











