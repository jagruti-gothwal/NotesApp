const submit = document.getElementById("submit");


submit.addEventListener("click", () =>{
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const nameArray = [];
    const emailArray = [];
    const passwordArray = [];
    console.log(name);
    nameArray.push(name);
    emailArray.push(email);
    passwordArray.push(password);
    console.log(nameArray);
});