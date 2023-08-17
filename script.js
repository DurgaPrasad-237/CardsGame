let players = [
    {
        playername: 'Dhoni', img: 'images/playersimages/dhoni.png', 
        matches: 123, best: 183, Average: 50.1, Hundreds: 10, fifties: 20, wickets: 10, runs: 10000, stumpings: 100
    },
    {
        playername: 'Virat', img: 'images/playersimages/virat.png', 
        matches: 123, best: 13, Average: 50.1, Hundreds: 10, fifties: 20, wickets: 10, runs: 10000, stumpings: 100
    },
    {
        playername: 'Rohit', img: 'images/playersimages/rohit.png', 
        matches: 123, best: 18, Average: 50.1, Hundreds: 10, fifties: 20, wickets: 10, runs: 10000, stumpings: 100
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
var cdetails = document.querySelectorAll(".cmatches, .cbest, .cAverage, .cHundreds, .cfifties, .cwickets, .cruns, .cstumpings");

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
function displayClickedElement(element) {
    selectedAttribute = element.textContent;
    const outputElement = document.getElementById("output");
     outputElement.textContent = selectedAttribute;
   
    op += outputElement.textContent;

}

updateDetails(0); 

function uparrow() {
    l++;
    if (l < players.length) {
        updateDetails(l);
    } else {
        l = 0;
        updateDetails(0);
    }
}

function downarrow() {
    l--;
    if (l >= 0) {
        updateDetails(l);
    } else {
        l = players.length - 1;
        updateDetails(l);
    }
}



function start() {
    let j = 2;
    let i = 0;
     for (let x = 0; x < players.length; x++) {
        cdetails[x].innerHTML = Object.keys(players[i])[j] + ': ' + players[i][Object.keys(players[i])[j]];
        j++;
    }

    let computerIndex = 0;
    intervalId = setInterval(() => {
        cupdateDetails(computerIndex);
        computerIndex = (computerIndex + 1) % players.length;
    }, 400);
   
}
let ps = 0;
let cs = 0;
function stop() {
    clearInterval(intervalId);
    console.log("Stopped at index:", currentComputerIndex);
    let result = {};
    result = players[currentComputerIndex];
    let splitting = op.split(":");
    let value = parseInt(splitting[1]);
    let valuename = splitting[0];
    let cvalue;
    for(let i = 0; i<Object.keys(result).length; i++){
        if(valuename == Object.keys(result)[i]){
            cvalue =  result[Object.keys(result)[i]];
           const coutputElement = document.getElementById("coutput");
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
        ps++;
        won.innerHTML = "won:computer"
        pscore.innerHTML = cs;
    }
    else{
        won.innerHTML = "won:DRAW"
    }




    console.log(Object.keys(result)[1]);
     console.log(Object.keys(result).length);

    console.log(valuename);
    console.log(value);


    console.log(result);
    console.log(op);

   
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