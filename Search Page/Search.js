let container = document.querySelector("#container")

fetch("/data.json").then((res)=>{
    return res.json()
})
.then((data)=>{
    console.log(data)
    displayData(data)
})

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
    });
}