const mybody = document.getElementsByTagName("body")[0]
const mydiv = document.createElement("div")
mydiv.style.display = "flex"
mydiv.style.flexWrap = "wrap";
mydiv.style.width = "100vw"
mydiv.style.height = "100vh"
mybody.appendChild(mydiv)


let currPos = 1;       //current position of the pointer
let prev = 1      //prev position of the pointer
let prevcolor = "black"


function createblock(i, j) {
    const newdiv = document.createElement("div")
    newdiv.style.height = "9vh";
    newdiv.style.width = "10vw";
    newdiv.style.display = "flex";
    newdiv.style.justifyContent = "center";
    newdiv.style.alignItems = "center";
    newdiv.style.backgroundColor = (i + j) % 2 == 1 ? "white" : "black"
    newdiv.style.color = (i + j) % 2 == 1 ? "black" : "white"
    newdiv.innerHTML = `${10 * (i - 1) + j}`
    mydiv.appendChild(newdiv)
}

for (var i = 1; i <= 10; i++) {
    for (var j = 1; j <= 10; j++) {
        createblock(i, j);
    }
}



function marker(mark) {
    const markdivs = mydiv.getElementsByTagName("div");

    markdivs[prev - 1].style.backgroundColor = prevcolor;

    prevcolor = markdivs[mark - 1].style.backgroundColor;
    prev = mark;

    markdivs[mark - 1].style.backgroundColor = "#7CFC00";
}
marker(currPos);

const rollBtn = document.createElement("button");
rollBtn.style.height = "9vh";
rollBtn.style.width = "10vw";
rollBtn.style.color = "white";
rollBtn.innerHTML = "ROLL";
rollBtn.style.backgroundColor = "#6495ED";
mydiv.appendChild(rollBtn);

const resetBtn = document.createElement("button");
resetBtn.style.height = "9vh";
resetBtn.style.width = "10vw";
resetBtn.style.color = "white";
resetBtn.innerHTML = "RESET";
resetBtn.style.backgroundColor = "#228B22";
mydiv.appendChild(resetBtn);


rollBtn.addEventListener("click", () => {

    const randomValue = Math.floor(Math.random() * 6) + 1;

    if ((randomValue + currPos) <= 100) {

        currPos += randomValue;
    }
    if (currPos == 100) {

        alert("you won the game🎉🎉")
    }
    console.log("current:", currPos, "dice value:", randomValue)

    marker(currPos);
})


resetBtn.addEventListener('click', () => {
    currPos = 1;
    console.log("reset")
    marker(1)
})


