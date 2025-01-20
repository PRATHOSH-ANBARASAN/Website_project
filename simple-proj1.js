function menubtn(){
    var navside=document.querySelector(".navbar-sidebar")

    navside.style.display='flex'
}
function menuclose(){
    var navside=document.querySelector(".navbar-sidebar")

    navside.style.display='none'
}


// newuser

const newuser=document.querySelector("#new-user-popup");
const popupfull=document.querySelector(".popup-full");
const bodyd=document.querySelector("#body-d")

newuser.addEventListener('click',()=>{
    popupfull.style.display='contents'
    bodyd.classList.add('body-data')
})


//popup close

const popupclose=document.querySelector("#popup-close")
const popupfull2=document.querySelector(".popup-full");
const bodyd2=document.querySelector("#body-d")

popupclose.addEventListener('click',()=>{
    popupfull.style.display='none'
    bodyd.classList.remove('body-data')
    
})

//popup form
// form 
const popname=document.querySelector("#popup-name")
const popemail=document.querySelector("#popup-email")
const popmobile=document.querySelector("#popup-mobile")
const poppassword=document.querySelector("#popup-password")
const popcpassword=document.querySelector("#popup-cpassword")
const popform=document.querySelector("#popup-form")


popform.addEventListener('submit',(e)=>{
    e.preventDefault();
    popupvalidinput();
})

function setpoperror(element,message){
    const poplogform=element.parentElement;
    const poperrorelt=poplogform.querySelector('.popup-error');


    poperrorelt.innerText=message;

    poplogform.classList.add('popup-error')
    poplogform.classList.remove('popup-success')
}

function setpopsuccess(element){
    const poplogform=element.parentElement;
    const poperrorelt=poplogform.querySelector('.popup-error');

    poperrorelt.innerText = '';

    poplogform.classList.add('popup-success')
    poplogform.classList.remove('popup-error')
}
const popupvalidateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};



function popupvalidinput(){
    const popnameval=popname.value.trim();
    const popemailval=popemail.value.trim();
    const popmobileval=popmobile.value.trim();
    const poppasswordval=poppassword.value.trim();
    const popcpasswordval=popcpassword.value.trim();

    if(popnameval === '') {
        setpoperror(popname,'Name is required')
    }
    else
        setpopsuccess(popname)




    if(popemailval===''){
        setpoperror(popemail,'Email is required')
    }
    else if(!popupvalidateEmail(popemailval)){
        setpoperror(popemail,'Enter the correct format')
    }
    else{
        setpopsuccess(popemail)
    }


    if(popmobileval===''){
        setpoperror(popmobile,'Mobile is required')
    }
    else if(popmobileval.length<10){
        setpoperror(popmobile,'Number is more 10 digits')
    }
    else{
        setpopsuccess(popmobile)
    }



    if(poppasswordval===''){
        setpoperror(poppassword,'Password is required')

    }
    else{
        setpopsuccess(poppassword)
    }
    if(!popcpasswordval===poppasswordval){
        setpoperror(popcpassword ,'Not match')
    }
    else{
        setpopsuccess(popcpassword)
    }

 
}


















// form 
const namee=document.querySelector("#name-")
const emaill=document.querySelector("#email-")
const password=document.querySelector("#password-")
const loginform=document.querySelector("#login-form-")


loginform.addEventListener('submit',(e)=>{
    e.preventDefault();
    validinput();
})

function seterror(element,message){
    const logform=element.parentElement;
    const errorelt=logform.querySelector('.error');


    errorelt.innerText=message;

    logform.classList.add('error')
    logform.classList.remove('success')
}

function setsuccess(element){
    const logform=element.parentElement;
    const errorelt=logform.querySelector('.error');

    errorelt.innerText = '';

    logform.classList.add('success')
    logform.classList.remove('error')
}
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};



function validinput(){
    const nameval=namee.value.trim();
    const emailval=emaill.value.trim();
    const passwordval=password.value.trim();

    if(nameval === '') {
        seterror(namee,'Name is required')
    }
    else
        setsuccess(namee)




    if(emailval===''){
        seterror(emaill,'Email is required')
    }
    else if(!validateEmail(emailval)){
        seterror(emaill,'Enter the correct format')
    }
    else{
        setsuccess(emaill)
    }



    if(passwordval===''){
        seterror(password,'Password is required')

    }
    else
        setsuccess(password)

    
   
}


