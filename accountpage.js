const emailText = document.getElementById("emailText");
const emailEditBtn = document.getElementById("emailEdit");
const emailDiv = document.getElementById("emailDiv");
const saveEmailBtn = document.createElement("button");

const locationText = document.getElementById("locationText");
const locationEditBtn = document.getElementById("locationEdit");
const locationDiv = document.getElementById("locationDiv");
const saveLocationBtn = document.createElement("button");

const linkedInText = document.getElementById("linkedInText");
const linkedInEditBtn = document.getElementById("linkedInEdit");
const linkedInDiv = document.getElementById("linkedInDiv");
const saveLinkedInBtn = document.createElement("button");

function changeEmail(){
    
    emailText.innerHTML = "<input type='text' id='newEmailValue'></input>";
    emailEditBtn.style.display = "none";
    saveEmailBtn.setAttribute("class", "btn btn-success btn-sm");
    saveEmailBtn.setAttribute("id", "saveEmailBtn");
    saveEmailBtn.setAttribute("onclick", "saveEmail()");
    saveEmailBtn.innerHTML = "Save";
    emailDiv.appendChild(saveEmailBtn);
        if(saveEmailBtn.style.display === "none" ){
            saveEmailBtn.style.display = "block";
        }
        
}

function saveEmail(){
    const emailValue = document.getElementById("newEmailValue");
    
    saveEmailBtn.style.display = "none";
    emailEditBtn.style.display = "block";
    if(!emailValue.value.includes("@")
    ){
        alert("Please input valid email address");
    } else {
        emailText.innerHTML = `<a mailto="${emailValue.value}">${emailValue.value}</a>`;
    }
}

function changeLocation(){
    
    locationText.innerHTML = "<input type='text' id='newLocationValue'></input>";
    locationEditBtn.style.display = "none";
    saveLocationBtn.setAttribute("class", "btn btn-success btn-sm");
    saveLocationBtn.setAttribute("id", "saveLocationBtn");
    saveLocationBtn.setAttribute("onclick", "saveLocation()");
    saveLocationBtn.innerHTML = "Save";
    locationDiv.appendChild(saveLocationBtn);
        if(saveLocationBtn.style.display === "none" ){
            saveLocationBtn.style.display = "block";
        }
}

function saveLocation(){
    const locationValue = document.getElementById("newLocationValue");
    locationText.innerHTML = locationValue.value;
    saveLocationBtn.style.display = "none";
    locationEditBtn.style.display = "block";
}

function changeLinkedIn(){
    const linkedInTextDiv = document.getElementById("linkedInTextDiv");
    const newText = document.createElement("a");
    linkedInTextDiv.innerHTML = "<input type='text' id='newLinkedInValue' value='https://'></input>";
    linkedInEditBtn.style.display = "none";
    saveLinkedInBtn.setAttribute("class", "btn btn-success btn-sm");
    saveLinkedInBtn.setAttribute("id", "saveLinkedInBtn");
    saveLinkedInBtn.setAttribute("onclick", "saveLinkedIn()");
    saveLinkedInBtn.innerHTML = "Save";
    
    linkedInText.setAttribute("href", "");
    linkedInDiv.appendChild(saveLinkedInBtn);
        if(saveLinkedInBtn.style.display === "none" ){
            saveLinkedInBtn.style.display = "block";
        }
}

function saveLinkedIn(){
    const linkedInValue = document.getElementById("newLinkedInValue");
    saveLinkedInBtn.style.display = "none";
    linkedInEditBtn.style.display = "block";
    if(!linkedInValue.value.includes("www.linkedin.com") ){
        alert(`Please include "www.linked.com"`);
        linkedInTextDiv.innerHTML = "https://";
    }else {
        linkedInTextDiv.innerHTML = `<a href="${linkedInValue.value}">My Profile</a>`;
    }
}


