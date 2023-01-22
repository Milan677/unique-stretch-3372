function login(){
    location.href = "/login/login.html"
}

 let arr=["https://adstocknepal.com/wp-content/uploads/2021/03/TCL-PR-IMAGE.jpeg","https://img.freepik.com/free-psd/new-collection-fashion-sale-web-banner-template_120329-1507.jpg?w=900&t=st=1674299665~exp=1674300265~hmac=9eb06eed836945961f56a751f403fd53f6b5984d030d5ebb46b92c25c8060459","https://img.freepik.com/free-vector/vaccine-medicine-corona-virus-polygonal-low-poly-wireframe-background_271628-465.jpg?w=1380&t=st=1674300248~exp=1674300848~hmac=b58f55e76e4b50e2fb4afaefcf0288286079ef282a5e7894f5733b15a22e4134","https://img.freepik.com/free-psd/summer-drinks-pure-refreshment-landing-page-web-template_23-2148833497.jpg?w=1060&t=st=1674299816~exp=1674300416~hmac=860da8874b94f265949dd59a8add725b54ddcd3967f4dd9b8c7b51db88330284","https://img.freepik.com/free-psd/horizontal-banner-template-black-friday-clearance_23-2148745446.jpg?w=1060&t=st=1674299952~exp=1674300552~hmac=50217fdcbcdf43a59384a1d8ef602397bf61643721c641bbc70770cbbee60ff5","https://img.freepik.com/free-vector/black-friday-super-sale-illustration-with-gold-lettering-gift-box-dark-background_1314-3565.jpg?w=1060&t=st=1674300045~exp=1674300645~hmac=1cac1f40b117b15d077411b92a98ac7adb8a9ab3ea9e7286990d7fbb37e9fd89"]
let div = document.getElementById("banner")
   let i =0
   let img = document.createElement("img")
    img.src = arr[i]
     div.append(img)


setInterval(()=>{
   i++;
   if(i == arr.length-1){
     i=0
   }

 img.src = arr[i]
 div.append(img)

},3000)