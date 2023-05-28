console.log("Hello World!")




let allUsers = [];


addUsers = () => {

    let first = document.getElementById("first").value;
    let email = document.getElementById("email").value;
    let number = +document.getElementById("number").value;
    let subject = document.getElementById("subject").value;
    let password = +document.getElementById("password").value;
    let checkbox = document.getElementById("check").checked;

    allUsers.push({
        userFirst: first,
        userEmail: email,
        userNumber: number,
        userSubject: subject,
        userPassword: password,
        userCheckbox: checkbox,
    });

    if(checkbox){
        alert("Welcome " + first + "! Thank you for you interest in " + subject + "! We will contact you via the email provided: " + email + ", or alternatively on the phone number: " + number + ". ");
    } else {
        alert("Well, well, well... why don't you want to sign up for our newsletter... you don't seem to be that interested Name & Surname!  If you want to sign up, you better CHECK that newsletter box! ");
    }


    

   console.log(allUsers)

    document.getElementById("signupForm").reset();


}