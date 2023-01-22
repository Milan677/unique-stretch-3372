// main part
let username = localStorage.getItem("username")

    document.querySelector("#username").innerText = `Hello, ${username}`


let addtocartdata = JSON.parse(localStorage.getItem("CartData")) || [];

let emptycart=document.querySelector("#empty-cart");


displaycard(addtocartdata);


function displaycard(data) {


    if(data.length<=0){
        emptycart.textContent="Your Cart is Empty "
    }

    let total = 0;
    document.querySelector("#addedData").innerHTML = null;
    let count = 1;
    //catching part
    let totalprice = document.querySelector("#fav-sum");
    let checkoutsubtotal=document.querySelector("#totalp");
    let totalprodcount=document.querySelector("#fav-total");

    let checkouttotalproducts=document.querySelector("#prod");
    let finaltotalbill=document.querySelector("#ordert");
    let taxonbill=document.querySelector("#tax2");


    //let discount=document.querySelector("#discounttag");

    data.forEach(function (el, i) {

        let div1 = document.createElement("div");
        let div2=document.createElement("div")

        let imageProd = document.createElement("img");
        imageProd.setAttribute("src", el.image)
 
        
      let title = document.createElement("p")
      title.innerText = el.title.substring(0,30);

      let price = document.createElement("h3")
      price.innerText = el.price
      price.className = "price";

      let qtn = document.createElement("span");
      qtn.textContent = 1;

        let btn1 = document.createElement("p");
        btn1.textContent = "+";
        
        btn1.addEventListener("click", function () {
            count++;
            qtn.textContent = count;
            total = total + Number(el.price);

            totalprice.textContent = total;
            checkoutsubtotal.textContent = total;
            totalprodcount.textContent++;
            checkouttotalproducts.textContent=totalprodcount.textContent;
            
            let x=total*12/100;
            let y=x.toFixed(2)
            taxonbill.textContent=y;
            let a=total+x;
            let b=a.toFixed(2)
            finaltotalbill.textContent=b;
            
            // addtocartdata.push(el)

            // JSON.parse(localStorage.parse("CartData"));

            // localStorage.setItem("CartData",JSON.stringify(addtocartdata))

        })

      

        let btn2 = document.createElement("p");
        btn2.textContent = "-";
        btn2.addEventListener("click", function () {
            if (count <= 1) {
                let cartdata = JSON.parse(localStorage.getItem("CartData")) || [];
                cartdata.splice(i, 1);
                localStorage.setItem("CartData", JSON.stringify(cartdata));
                displaycard(cartdata);
            } else {
                count--;
                qtn.textContent = count;
                total = total - Number(el.price)
                totalprice.textContent = total;
                checkoutsubtotal.textContent = total;
                totalprodcount.textContent--;
                checkouttotalproducts.textContent=totalprodcount.textContent;
                let x=total*12/100;
                let y=x.toFixed(2)
                taxonbill.textContent=y;
                let a=total+x;
                let b=a.toFixed(2)
                finaltotalbill.textContent=b;
                
            }

        })


        let btn = document.createElement("button");
        btn.textContent = "Remove";
        btn.addEventListener("click", function () {

            let addtocartdata = JSON.parse(localStorage.getItem("CartData")) || [];
            addtocartdata.splice(i, 1);
            localStorage.setItem("CartData", JSON.stringify(addtocartdata));
            displaycard(addtocartdata);
        })

        total = total + Number(el.price);


        totalprice.textContent = total;
        checkoutsubtotal.textContent = total;
         totalprodcount.textContent=data.length;
         checkouttotalproducts.textContent=data.length;
        let x=total*12/100;
        let y=x.toFixed(2)
        taxonbill.textContent=y;
        let a=total+x;
        let b=a.toFixed(2)
        finaltotalbill.textContent=b;

        div2.append(btn1, qtn, btn2)
        div1.append(imageProd, title, price, div2, btn);
        
        document.querySelector("#addedData").append(div1);


    })


    let dis = document.querySelector("#discounttag");
    dis.addEventListener("submit", function (event) {

        event.preventDefault();
        let val = document.querySelector("#cupon-filled").value;
        // console.log(val)
        if (val === "combo40") {
            finaltotalbill.textContent = Math.floor(total - (total * 0.2));
            // console.log(totalprice)
            localStorage.setItem("disprice", totalprice.textContent)


        } else {
            alert("You Enter The Wrong Coupen Code")
        }


    })




}


let x=document.querySelector("#logo>img");

x.addEventListener("click",function(){
    location.href = "/Shopping Page/shopping.html";
})

// let y=document.querySelector("#menu>i");

// y.addEventListener("click",function(){
//     location.href = "/Cartpage/cart.html";
// })