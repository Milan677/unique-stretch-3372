// main part
// let username = localStorage.getItem("username")

// document.querySelector("#username").innerText = `Hello, ${username}`


// let addtocartdata = JSON.parse(localStorage.getItem("CartData")) || [];

// let emptycart = document.querySelector("#empty-cart");


// displaycard(addtocartdata);


// function displaycard(data) {


//     if(data.length<=0){
//         emptycart.textContent="Your Cart is Empty "
//     }

//     let total = 0;
//     document.querySelector("#addedData").innerHTML = null;
//     let count = 1;
//     //catching part
//     let totalprice = document.querySelector("#fav-sum");
//     let checkoutsubtotal=document.querySelector("#totalp");
//     let totalprodcount=document.querySelector("#fav-total");

//     let checkouttotalproducts=document.querySelector("#prod");
//     let finaltotalbill=document.querySelector("#ordert");
//     let taxonbill=document.querySelector("#tax2");

//     let a=document.querySelector("#changetext");

//     //let discount=document.querySelector("#discounttag");

//     data.forEach(function (el, i) {

//         let div1 = document.createElement("div");
//         let div2=document.createElement("div")

//         let imageProd = document.createElement("img");
//         imageProd.setAttribute("src", el.image)


//       let title = document.createElement("p")
//       title.innerText = el.title.substring(0,30);

//       let price = document.createElement("h3")
//       price.innerText = el.price
//       price.className = "price";

//       let qtn = document.createElement("span");
//       qtn.textContent = 1;

//         let btn1 = document.createElement("p");
//         btn1.textContent = "+";

//         btn1.addEventListener("click", function () {
//             count++;
//             qtn.textContent = count;

//             total = total + Number(el.price);

//             totalprice.textContent = total;
//             checkoutsubtotal.textContent = total;
//             totalprodcount.textContent++;
//             checkouttotalproducts.textContent=totalprodcount.textContent;

//             let x=total*12/100;
//             let y=x.toFixed(2);
//             taxonbill.textContent=y;
//             let a=total+x;
//             let b=a.toFixed(2)
//             finaltotalbill.textContent=b;

//         })



//         let btn2 = document.createElement("p");
//         btn2.textContent = "-";
//         btn2.addEventListener("click", function () {
//             if (count <= 1) {

//                 let addtocartdata = JSON.parse(localStorage.getItem("CartData")) || [];
//                 addtocartdata.splice(i, 1);
//                 localStorage.setItem("CartData", JSON.stringify(addtocartdata));
//                 displaycard(addtocartdata);

//             } else {
//                 count--;
//                 qtn.textContent = count;

//                 total = total - Number(el.price)
//                 totalprice.textContent = total;
//                 checkoutsubtotal.textContent = total;
//                 totalprodcount.textContent--;
//                 checkouttotalproducts.textContent=totalprodcount.textContent;
//                 let x=total*12/100;
//                 let y=x.toFixed(2)
//                 taxonbill.textContent=y;
//                 let a=total+x;
//                 let b=a.toFixed(2)
//                 finaltotalbill.textContent=b;

//             }

//         })


//         let btn = document.createElement("button");
//         btn.textContent = "Remove";

//         btn.addEventListener("click", function () {

//             let addtocartdata = JSON.parse(localStorage.getItem("CartData")) || [];
//             addtocartdata.splice(i, 1);
//             localStorage.setItem("CartData", JSON.stringify(addtocartdata));
//             displaycard(addtocartdata);
//         })

//          total = total + Number(el.price);


//         totalprice.textContent = total;
//         checkoutsubtotal.textContent = total;
//          totalprodcount.textContent=data.length;
//          checkouttotalproducts.textContent=data.length;
//         let x=total*12/100;
//         let y=x.toFixed(2)
//         taxonbill.textContent=y;
//         let a=total+x;
//         let b=a.toFixed(2)
//         finaltotalbill.textContent=b;

//         div2.append(btn1, qtn, btn2)
//         div1.append(imageProd, title, price, div2, btn);

//         document.querySelector("#addedData").append(div1);


//     })


//     let dis = document.querySelector("#discounttag");
//     dis.addEventListener("submit", function (event) {

//         event.preventDefault();
//         let val = document.querySelector("#cupon-filled").value;
//         // console.log(val)
//         if (val === "BOH232") {
//             finaltotalbill.textContent = Math.floor(total - (total * 0.2));
//             // console.log(totalprice)
//             localStorage.setItem("disprice", totalprice.textContent)

//             a.textContent="Applied";

//         } else {
//             alert("You Enter The Wrong Coupen Code")
//         }


//     })

// }


// displaycard(addtocartdata);

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