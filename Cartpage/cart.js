// main part

let addtocartdata = JSON.parse(localStorage.getItem("CartData")) || [];
 

let totalproduct=document.querySelector("#fav-total");

if (addtocartdata.length == 0) {
  document.querySelector("#empty-cart").textContent = "Your cart is Empty"
} else {

  displyaCart(addtocartdata);



  function displyaCart(data) {

    let totalCost = document.querySelector("#totalp");
    let totalofprod = document.querySelector("#fav-sum");
    let taxonbill = document.querySelector("#tax2");
    let totalorder = document.querySelector("#ordert");
    
    let sum = 0;
    document.querySelector("#addedData").textContent = null;
    data.forEach((element, index) => {

      let div1 = document.createElement("div");
      let div2 = document.createElement("div");
      let imgdiv = document.createElement("img")
      imgdiv.setAttribute("src", element.image)


      let title = document.createElement("p")
      title.innerText = element.title

      let desc = document.createElement("p")
      desc.innerText = element.desc
      desc.className = "Ldesc"

      let price = document.createElement("h3")
      price.innerText = element.price
      price.className = "price";

      let increse = document.createElement("p");
      increse.innerText = "+";


      increse.addEventListener("click", function () {
        // increment the qty (el[1]);

        let paymentdata=JSON.parse(localStorage.getItem("paymentdata"))||[];
       
        paymentdata.push(element);

        element[1]++;
        // we store the array again so that the data is present even after refreshing
        // store new qty in local storage

        // localStorage.setItem("addtocartdata", JSON.stringify(addtocartdata));
        localStorage.setItem("paymentdata",JSON.stringify(paymentdata));
        // here we are refreshing the page just to update values. You can use any other method as well.
        // window.location.reload();
        // or we can simply increase the qyt.textContent
        // here we are simply updating the DOM with new qty value.
        span.textContent++;
        sum += Number(element.price);
        totalCost.textContent = sum;
        totalofprod.textContent = sum;
        taxonbill.textContent = sum * 12 / 100;
        let a = sum + (sum * 12 / 100);
        let b = a.toFixed(2);
        totalorder.textContent = b;
        console.log(totalCost.textContent);


        totalproduct.innerText++;
      })


      let span = document.createElement("span");
      span.innerText = 1;

      let decrease = document.createElement("p");
      decrease.innerText = "-";

      decrease.addEventListener("click", function () {
        if (span.textContent <= 1) {
          // previously we wrote a delete function in student assignment
          // in this asgn we are going to  use splice.
          // splice needs two arguments index, count;
          // index of the element and count of the total elements to be deleted.
          addtocartdata.splice(index, 1);
          // update the new array in localstorage
          localStorage.setItem("addtocartdata", JSON.stringify(addtocartdata));
          // we need to update DOM for that we are refreshing the page
          window.location.reload();
        } else {
          element[1]--;
          localStorage.setItem("addtocartdata", JSON.stringify(addtocartdata));
          span.textContent--;
          totalCost.textContent -= Number(element.price);
          totalofprod.textContent = Number(totalCost.textContent);
         

          taxonbill.textContent = totalCost.textContent  * 12 / 100;

          // let a = totalCost.textContent  + (totalCost.textContent  * 12 / 100);
          // let b = a.toFixed(2);
          totalorder.textContent = Number(totalCost.textContent)+Number(totalCost.textContent*12/100);
          console.log(totalCost.textContent);

        }
      })

      let btn = document.createElement("button");
      btn.innerText = "Delete";

      btn.addEventListener("click", function () {
        let addtocartdata = JSON.parse(localStorage.getItem("CartData")) || [];

        addtocartdata.splice(index, 1);


        displyaCart(addtocartdata)

        localStorage.setItem("CartData", JSON.stringify(addtocartdata))
      })

      div2.append(increse, span, decrease)
      div1.append(imgdiv, title, desc, price, div2, btn);

      document.querySelector("#addedData").append(div1);

      sum += Number(element.price);
    });



    document.querySelector("#fav-sum").innerText = sum;
    document.querySelector("#fav-total").innerText = data.length;

    document.querySelector("#prod").innerText = data.length;


    document.querySelector("#totalp").innerText = sum;
    document.querySelector("#tax2").innerText = sum * 12 / 100;
    let n = sum + (sum * 12 / 100);
    let z = n.toFixed(2)
    document.querySelector("#ordert").innerText = z
  }


}

