const submit = document.getElementById("submit");
submit.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if( email == "admin@gmail.com" && password =="admin")
    {
        window.location.href="/";
    }else{
        alert("Wrong id password!")
    }
});