let players = [
    {
        playername: 'Dhoni', img: 'images/playersimages/dhoni.png', 
        matches: 350, best: 183, Average: 50.51, Hundreds: 10, fifties: 73, wickets: 1, runs: 10773, stumpings: 123
    },
    {
        playername: 'Virat', img: 'images/playersimages/virat.png', 
        matches: 275, best: 183, Average: 50.1, Hundreds: 46, fifties: 65, wickets: 4, runs: 12898, stumpings: 0
    },
    {
        playername: 'Rohit', img: 'images/playersimages/rohit.png', 
        matches: 244, best: 264, Average: 48.7, Hundreds: 30, fifties: 48, wickets: 8, runs: 9837, stumpings: 0
    },
    {
        playername: 'Sachin', img: 'images/playersimages/sachin.png', 
        matches: 463, best: 200, Average: 44.8, Hundreds: 49, fifties: 96, wickets: 154, runs: 18426, stumpings: 0
    },
    {
        playername: 'Yuvraj', img: 'images/playersimages/yuvraj.png', 
        matches: 304, best: 150, Average: 36.56, Hundreds: 14, fifties: 52, wickets: 111, runs: 8701, stumpings: 0
    },
    {
        playername: 'Ghambir', img: 'images/playersimages/Ghambir.png', 
        matches: 147, best: 150, Average: 39.68, Hundreds: 11, fifties: 34, wickets: 0, runs: 5238, stumpings: 0
    },
    {
        playername: 'Sehwag', img: 'images/playersimages/sehwag.png', 
        matches: 251, best: 219, Average: 35.06, Hundreds: 15, fifties: 38, wickets: 96, runs: 8273, stumpings: 0
    },
    {
        playername: 'zaheer', img: 'images/playersimages/zaheer.png', 
        matches: 200, best: 34, Average: 12.06, Hundreds: 0, fifties: 0, wickets: 282, runs: 792, stumpings: 0
    },
    {
        playername: 'Ashwin', img: 'images/playersimages/ashwin.png', 
        matches: 133, best: 65, Average: 16.44, Hundreds: 0, fifties: 1, wickets: 151, runs: 707, stumpings: 0
    },
    {
        playername: 'Jadeja', img: 'images/playersimages/jadeja.png', 
        matches: 177, best: 87, Average: 32.82, Hundreds: 0, fifties: 13, wickets: 194, runs: 2560, stumpings: 0
    },
    {
        playername: 'Dhawan', img: 'images/playersimages/dhawan.png', 
        matches: 167, best: 143, Average: 44.11, Hundreds: 17, fifties: 39, wickets: 0, runs: 6793, stumpings: 0
    },
    {
        playername: 'Raina', img: 'images/playersimages/raina.png', 
        matches: 226, best: 116, Average: 35.31, Hundreds: 5, fifties: 36, wickets: 8, runs: 5615, stumpings: 0
    },
];

// Get references to the form and output element
const nameForm = document.getElementById('name');
const outputElement = document.getElementById('noutput');


// Add event listener to form submit event
nameForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get the input value and update the output element
    const nameInput = document.getElementById('nameInput').value;
    outputElement.textContent = nameInput;
});


let currentComputerIndex = 0;

var img = document.getElementById('image');
var cimg = document.getElementById('cimage');
img.style.backgroundImage = 'url(' + players[0].img + ')';
cimg.style.backgroundImage = 'url(' + players[0].img + ')';

var playerNameElement = document.querySelector('.playername');
var cplayerNameElement = document.querySelector('.cplayername');

var details = document.querySelectorAll(".matches, .best, .Average, .Hundreds, .fifties, .wickets, .runs, .stumpings");
const cdetails = document.querySelectorAll(".cmatches, .cbest, .cAverage, .cHundreds, .cfifties, .cwickets, .cruns, .cstumpings");


let l = 0;

function updateDetails(playerIndex) {
    img.style.backgroundImage = 'url(' + players[playerIndex].img + ')';
    playerNameElement.textContent = players[playerIndex].playername;
    let j = 2;
    for (let i = 0; i < details.length; i++) {
        details[i].innerHTML = Object.keys(players[playerIndex])[j] + ': ' + players[playerIndex][Object.keys(players[playerIndex])[j]];
        j++;
    }
}
var op = "";
let selectedElement = null;
function displayClickedElement(element) {
    if (selectedElement) {
        selectedElement.style.backgroundColor = "";
      
    }
   
    selectedElement = element;
    selectedAttribute = element.textContent;
    const outputElement = document.getElementById("output");
    outputElement.textContent = selectedAttribute;
    op = "";
   
    op += outputElement.textContent;
    element.style.backgroundColor = "#f79a5a";
    
}

updateDetails(0); 
let clickable = false;
function uparrow() {
    if(clickable === true){
        window.alert('you not suppose to do now')
    }
    else{
        op = "";
    l++;
    if (l < players.length) {
        updateDetails(l);
    } else {
        l = 0;
        updateDetails(0);
    }
}
}

function downarrow() {
    if(clickable === true){
        window.alert('you not suppose to do now')
    }
    else{
        op="";
    l--;
    if (l >= 0) {
        updateDetails(l);
    } else {
        l = players.length - 1;
        updateDetails(l);
    }
}
}


let xxxx = 0;
function start() {
    clickable = true;
    if(op.length === 0){
        window.alert("select any one(best,mathch,average,hundered,fifties,stumpings,wickets,runs)");
    }
    else{
        let j = 2;
        let i = 0;
let computerIndex = 0;
    for (let x = 0; x < players.length; x++) {
        if (i !== 0) {
            console.log(computerIndex);
            console.log("x--"+x);
            console.log("j---"+j)
            cdetails[x].innerHTML = Object.keys(players[computerIndex-1])[j] + ': ' + players[computerIndex-1][Object.keys(players[computerIndex-1])[j]];
            j++;
        } else {
            j = (j + 1) % Object.keys(players[i]).length;
        }
    }

    
 
    intervalId = setInterval(() => {
        cupdateDetails(computerIndex);
        computerIndex = (computerIndex + 1) % players.length;
    }, 120);
}
   
}

let ps = 0;
let cs = 0;
function stop() {
    clickable = false;
       const coutputElement = document.getElementById("coutput");
        coutputElement.innerHTML = "";
    clearInterval(intervalId);
    console.log("Stopped at index:", currentComputerIndex);
    let result = {};
    result = players[currentComputerIndex];
    let splitting = op.split(":");
    let value = parseInt(splitting[1]);
    console.log("value"+value);
    let valuename = splitting[0];
    let cvalue;

    for(let i = 0; i<Object.keys(result).length; i++){
        if(valuename == Object.keys(result)[i]){
            cvalue =  result[Object.keys(result)[i]];
        
           coutputElement.innerHTML = Object.keys(result)[i] + ":" + cvalue;
        }
    }
    const won = document.getElementById("won");
    const pscore = document.getElementById("pscore");
    const cscore = document.getElementById("cscore");
    if(value > cvalue){
        ps++;
        won.innerHTML = "won:player"
        pscore.innerHTML = ps;
       

    }
    else if(value < cvalue){
        cs++;
        won.innerHTML = "won:computer"
        cscore.innerHTML = cs;
        
    }
    else if(value == cvalue){
        won.innerHTML = "won:DRAW"  
    }
}

function cupdateDetails(computerIndex) {
    currentComputerIndex = computerIndex;
    cimg.style.backgroundImage = 'url(' + players[computerIndex].img + ')';
    cplayerNameElement.textContent = players[computerIndex].playername;

    let j = 2;
    for (let i = 0; i < details.length; i++) {
        cdetails[i].innerHTML = Object.keys(players[computerIndex])[j] + ': ' + players[computerIndex][Object.keys(players[computerIndex])[j]];
        j++;
    }
}
cupdateDetails(0); 
let result = {};
result = players[currentComputerIndex];
let cut = op.split(":");
let value = parseInt(cut[1]);
let xx = value[0];
let yy = (Object.keys(currentComputerIndex)[1]);
for(let i = 0; i<Object.keys(currentComputerIndex).length; i++){
    if(y[0] === Object.keys(currentComputerIndex)[i]){
        yyy = parseInt((currentComputerIndex[yy]));
    }
}