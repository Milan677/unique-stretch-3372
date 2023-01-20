let alternate = []

let container = document.querySelector("#product-container")

let srchbtn = document.querySelector("#searchbtn>button")

srchbtn.addEventListener("click",()=>{
    let searchkey = document.querySelector("#search_item").value
    
    localStorage.setItem("searchkey", searchkey)
    filterdata(alternate)
})


fetch("/data.json")
.then((res)=>{
   return res.json()
})
.then((data)=>{
    alternate = data
    console.log(data)
    let container = document.querySelector("#product-container")
    filterdata(data)
})

function filterdata(data){
    let searchkey = localStorage.getItem("searchkey")
    let filtered = data.filter((el,i)=>{
        return el.title.toLowerCase().includes(searchkey.toLowerCase()) || el.category.toLowerCase().includes(searchkey.toLowerCase()) || el.description.toLowerCase().includes(searchkey.toLowerCase())
    })
    let container = document.querySelector("#product-container")
    displayData(filtered)
}

function displayData(data){
    container.innerHTML=null
    data.forEach(el => {
        let div = document.createElement("div")
        let img = document.createElement("img")
        img.src = el.image;
        let name = document.createElement("h3")
        name.innerText = el.title;
        let brand = document.createElement("p")
        brand.innerText = el.brand;
        let price = document.createElement("h4")
        price.innerHTML = el.price;
        let button = document.createElement("button")
        button.innerText = "Add to Cart"

        div.append(img,name,brand,price,button)
        container.append(div)

        div.addEventListener("click", function(){

            localStorage.setItem("product-description", JSON.stringify(el) )
            location.href = "/Product Page/product.html"
        })
    });

}

let username = document.querySelector("#uname")
username.innerText = localStorage.getItem("username")