// Name Validation
var nameInput = document.getElementById("nameInput");

nameInput.addEventListener('keyup' , function(e){

    var result =document.getElementById("invalidName");

    if(e.target.value.length <= 3 || !(isNaN(e.target.value)) ){
        nameInput.style.border = '2px solid #b93939'; 
        result.style.display = 'block';
    }
    else{
        nameInput.style.border = '2px solid rgb(95, 170, 80)'; 
        result.style.display = 'none';
    }
})


// Email Validation 
var emailInput = document.getElementById("emailInput");

emailInput.addEventListener('keyup' , function(e){

    var emailRegExp =/^[a-z]{3,15}[0-9]{3,15}@[a-z]{4,7}.com$/;
    var result =document.getElementById("invalidEmail");

    if(!(e.target.value.match(emailRegExp)) ){
        emailInput.style.border = '2px solid #b93939'; 
        result.style.display = 'block';
    }
    else{
        emailInput.style.border = '2px solid rgb(95, 170, 80)'; 
        result.style.display = 'none';
    }
})

// Password Validation
var passInput = document.getElementById("passInput");

passInput.addEventListener('keyup' , function(e){

    var result =document.getElementById("invalidPassword");

    if(e.target.value.length < 8 ){
        passInput.style.border = '2px solid #b93939'; 
        result.style.display = 'block';
    }
    else{
        passInput.style.border = '2px solid rgb(95, 170, 80)'; 
        result.style.display = 'none';
    }
})

// Age Validation 
var ageInput = document.getElementById("ageInput");

ageInput.addEventListener('keyup' , function(e){

    var ageRegExp =/^(?!20|21)([2-9][0-9]{1})$/;
    var result =document.getElementById("invalidAge");

    if(!(e.target.value.match(ageRegExp)) ){
        ageInput.style.border = '2px solid #b93939'; 
        result.style.display = 'block';
    }
    else{
        ageInput.style.border = '2px solid rgb(95, 170, 80)'; 
        result.style.display = 'none';
    }
})

//Submit Button
// var submit = document.getElementById("submitBtn");

// submit.addEventListener('click' , function(e){
//     // e.preventDefault();

// } )