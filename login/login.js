
const wrapper = document.querySelector('.wrapper');
const signUpLink = document.querySelector('.signUp-link');
const signInLink = document.querySelector('.signIn-link');
//forms
let form1 = document.getElementById("form1");
let form2 = document.getElementById("form2")
//signup inputs
let s_name = document.getElementById("name1");
let s_email = document.getElementById("email1");
let s_pass = document.getElementById("pass1");

//signin inputs
let l_name = document.getElementById("email2");
let l_pass = document.getElementById("pass2")


//form animation(rotate)
signUpLink.addEventListener('click', () => {

  wrapper.classList.add('animate-signIn');
  wrapper.classList.remove('animate-signUp');
});

signInLink.addEventListener('click', () => {
  wrapper.classList.add('animate-signUp');
  wrapper.classList.remove('animate-signIn');
});

//sign-up

form1.addEventListener("submit", (e) => {
  e.preventDefault()
  let obj = {
    username: form1.name1.value,
    email: form1.email1.value,
    password: form1.pass1.value,
    cpassword: form1.pass12.value
  }

  if (obj.password !== obj.cpassword) {
    alert("Password Mismatch")
  } else {
    let LSdata = JSON.parse(localStorage.getItem("account-data"))
    if (LSdata == null) {
      LSdata = []

    }
    LSdata.push(obj)
    localStorage.setItem("account-data", JSON.stringify(LSdata))

    wrapper.classList.add('animate-signUp');
    wrapper.classList.remove('animate-signIn');
  }

})

//sign-in
let LSdata = JSON.parse(localStorage.getItem("account-data"))

form2.addEventListener("submit", (e) => {
  e.preventDefault();
  LSdata.forEach((element, index) => {
    if (form2.email2.value == element.email) {
      if (form2.pass2.value == element.password) {
        let btn = document.getElementById("btn")
        btn.style.display = "inline"
        setTimeout(() => {
          window.open("home.html")
        }, 2000)

      }
      else {
        alert("email & password did not match")
      }
    } else {

      alert("email & password did not match")
    }
  })
})

// eyeicons work
let eyeIcons = document.querySelectorAll(".fa-eye-slash")
eyeIcons.forEach(eyeIcon => {
  eyeIcon.addEventListener("click", () => {
    const pInput = eyeIcon.parentElement.querySelector("input")
    if (pInput.type === "password") {
      eyeIcon.classList.replace("fa-eye-slash", "fa-eye")
      return pInput.type = "text"
    }
    eyeIcon.classList.replace("fa-eye", "fa-eye-slash")
    pInput.type = "password"
  })
})



