$(document).ready(function() {
$("#register").click(function() {
var name = $("#name").val();
var email = $("#email").val();
var password = $("#password").val();
var cpassword = $("#cpassword").val();
if (name == '' || email == '' || password == '' || cpassword == '') {
alert("Please fill all fields...!!!!!!");
} else if ((password.length) < 8) {
alert("Password should atleast 8 character in length...!!!!!!");
} else if (!(password).match(cpassword)) {
alert("Your passwords don't match. Try again?");
} else {
$.ajax({
        url:"http://localhost:3000/users",
        type:'GET',
        data:{
            "username":username,
            "password":password,
        },
        success:(x)=>{
            alert(username+"Hello user!!...Login successfull");
            console.log(x);
            window.location="http://127.0.0.1:5500/html/registration.html"
        }
    })

}
