$('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");

});

$(document).ready(function(){
$("#login").click(function(){
var email = $("#email").val();
var password = $("#password").val();
// Checking for blank fields
if( email =='' || password ==''){
$('input[type="text"],input[type="password"]').css("border","2px solid red");
$('input[type="text"],input[type="password"]').css("box-shadow","0 0 3px red");
alert("Please fill all fields...!!!!!!");
}else {//trying to fetch json data from server
    $.ajax({
        url:"https://github.com/sohampc27/demo/blob/master/db.json",
        //url:"http://localhost:3000/users",
        type:'GET',
        data:{

            "email":email,
            //"username":username,
            "password":password,
        },
        success:(x)=>{
            alert(username+"Hello user!!...Login successfull");
            console.log(x);
            window.location="http://127.0.0.1:5500/html/login.html"
        }
    })



/*
$.post("login.php",{ email1: email, password1:password},
function(data) {
if(data=='Invalid Email.......') {
$('input[type="text"]').css({"border":"2px solid red","box-shadow":"0 0 3px red"});
$('input[type="password"]').css({"border":"2px solid #00F5FF","box-shadow":"0 0 5px #00F5FF"});
alert(data);
}else if(data=='Email or Password is wrong...!!!!'){
$('input[type="text"],input[type="password"]').css({"border":"2px solid red","box-shadow":"0 0 3px red"});
alert(data);
} else if(data=='Successfully Logged in...'){
$("form")[0].reset();
$('input[type="text"],input[type="password"]').css({"border":"2px solid #00F5FF","box-shadow":"0 0 5px #00F5FF"});
alert(data);
} else{
alert(data);
}
});
}
});
});





const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
  const myObj = JSON.parse(this.responseText);
  document.getElementById("demo").innerHTML = myObj.name;
};
xmlhttp.open("GET", "db.json");
xmlhttp.send();

*/