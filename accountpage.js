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

const progressBar = document.getElementById("progressBar");

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
        emailValue.style.display = "none";
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


// Gamified
// Grab total # of contributions (each = 1 xp)
// dynamic leveling system, ie lv 1 = 1, lv 2 = 3, etc
let xp = 0;
let numContributionsString = document.getElementById("numContributions");
let userLevel = 1; //take user level, change html below profile pic
let numContributions = parseInt(numContributionsString.innerHTML);
const numContributionsToLevel = document.getElementById("numContributionsToLevel");
const currentLevel = document.getElementById("numLevel");

const gainXP = function(){
    for (let i = 0; i < parseInt(numContributions); i++)
    xp+= 1;
    console.log(xp);
}
gainXP();


const levelOneThresh = 1 //total contributions;
const levelTwoThresh = 5 //total contributions;
const levelThreeThresh = 10 //total contributions;
const levelFourThresh = 20 //total contributions;
const levelFiveThresh = 25 //total contributions;

function chooseLevel(){
if(numContributions <= 1){
    //level 1 is 1 or fewer contributions
    currentLevel.textContent = 1;
} else if (numContributions <= 5){
    // level 2 is 1-5
    currentLevel.textContent = 2;
} else if (numContributions <= 10){
    // level 3 is 6-10
    currentLevel.textContent = 3;
} else if (numContributions <= 20){
    // level 4 11-20
    currentLevel.textContent = 4;
} else if (numContributions <= 25){
    // level 5 21-25
    currentLevel.textContent = 5;
}
}


//Change level according to # of contributions vs level threshold
function addLevel(){
if (numContributions <= levelOneThresh){
    numContributionsToLevel.innerHTML = levelOneThresh - numContributions +1;
}  else if(numContributions <= levelTwoThresh){
    numContributionsToLevel.innerHTML = levelTwoThresh - numContributions +1;
} else if(numContributions <= levelThreeThresh){
    numContributionsToLevel.innerHTML = levelThreeThresh - numContributions +1;
} else if(numContributions <= levelFourThresh){
    numContributionsToLevel.innerHTML = levelFourThresh - numContributions +1;
} else if(numContributions <= levelFiveThresh) {
    numContributionsToLevel.innerHTML = levelFiveThresh - numContributions;
 }
}

//adds Contribution XP
function addContribution(){
    numContributions = numContributions + 1;
    numContributionsString.innerHTML = numContributions;
    addLevel();
    chooseLevel();
    if(numContributions > 25){
        const contributionsToLevelTextDiv = document.getElementById("contributionsToLevelTextDiv");
        const contributionsToLevelText = document.getElementById("contributionsToLevelText");
        numContributionsToLevel.innerHTML = "";
        contributionsToLevelText.innerHTML = "Max Level!";
        contributionsToLevelTextDiv.style.border = "none";
        contributionsToLevelTextDiv.classList = "text-center mt-3";
        contributionsToLevelTextDiv.style.color = "gold";
        progressBar.style.display = "none";

    }
    
}
//adds Contribution

chooseLevel();
addLevel();

