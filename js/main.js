let allUsers = [];


addStudent = () => {

    let first = document.getElementById("first").value
    let email = document.getElementById("email").value
    let number = +document.getElementById("number").value
    let subject = document.getElementById("subject").value
    let password = document.getElementById("password").value
    let checkbox = document.getElementById("check").value

    if(age >= 18){

        allUsers.push({
            userFirst: first,
            userEmail: email,
            userNumber: number,
            userSubject: subject,
            userPassword: password,
            userCheckbox: checkbox,
        });

        alert("");
    } else {
        alert("");
    }

   console.log(allUsers)

    document.getElementById("studentForm").reset();


}