// Button js
//step 1 add eventlisteners
document.getElementById('btn-submit').addEventListener("click",function(){
    //console.log('btn-submited');

    //step 2 get the get email address
    //*** always remember to use .value to get text from an input field */
    const emailField=document.getElementById('user-email');
    //const getEmail=emailField.value;
    const getEmail=emailField.value;
    //console.log(getEmail);
    
    //step 3 get password
    const passwordField=document.getElementById('user-password');
    const getPassword=passwordField.value;
    //console.log(getPassword);

//danger:::: Do not verify email password on the client side
//step:4 verify password

 if (getEmail === "naeemhossen2509@gmail.com" && getPassword ==='naeem'){
    //alert('Welcome to Eammu Bank')

    //step 5 redirect another page

    window.location.href="eammu-bank.html"
 }else{
    alert('Please Provide Valid email and password')
}
    
 

})