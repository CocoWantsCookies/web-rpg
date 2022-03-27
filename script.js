/*CONST VARIABLES*/
const gameContainer = document.querySelector(".game");
const historyContainer = document.querySelector(".console-history");
const consoleInput = document.querySelector(".console-input");


/*CLASSES SETUP*/
/*Player*/
playerName = ""


/*LOGS*/
/*Default*/
function log(who, what, how) {
    const logElement = document.createElement("div");
    logElement.classList.add("console-log");

    logElement.style.color = `${how}`
    logElement.textContent = `${who} ${what}`;

    historyContainer.append(logElement);
}

/*Specials*/
function logConsole(what) {
    log(">>", what, "yellow")
}

function logPlayer(what) {
    log(`[${playerName}]`, what, "white")
}

function logHelp(what) {
    log("", what, "cyan")
}


/*DICTIONNARY*/



/*INPUT HANDLER*/
function handleInput(code) {
    logPlayer(code);

    const parsedCode = code.split(" ");

    if (parsedCode[0] = "open") {

    }

    if (code == "help") {
        historyContainer.removeChild(historyContainer.lastChild)
        logHelp("Try \"help\" followed by one one these for more informations");
        logHelp("\"inventory\"");
    }

    if (code == "help inventory") {
        historyContainer.removeChild(historyContainer.lastChild)
        logHelp("You can either open or close your inventory with:");
        logHelp("\"open inventory\"");
        logHelp("\"close inventory\"");
    }

    if (code == "open inventory") {
        invElement = document.getElementById("inventory");

        if (invElement != null) return logConsole("Your inventory is already oppened");

        invElement = document.createElement("div");
        invElement.classList.add("window");
        invElement.setAttribute(`id`, `inventory`);
        invElement.textContent = "your inventory is empty";
        gameContainer.prepend(invElement);
        logConsole("inventory oppened");

    }

    if (code == "close inventory") {
        invElement = document.getElementById("inventory");

        if (invElement == null) return logConsole("Your inventory is not oppened");

        invElement.parentNode.removeChild(invElement)
        logConsole("inventory closed");
    }
}


consoleInput.addEventListener("keyup", key => {
    const code = consoleInput.value
    if (code.length == 0) return;

    if (key.key == "Enter") {
        consoleInput.value = "";
        historyContainer.scrollTop = historyContainer.scrollHeight;
        if (waitInput[0] == 1) {
            eval(`${waitInput[1]} = "${code}"`);
            waitInput[0] = 0;
            logConsole(`So your name is ${playerName}`);
            logConsole("Don't hesitate to ask for help if you need it ;)");
            return;
        } else {
            handleInput(code);
        }
    } 

});

logConsole("What's your name?");
waitInput= [1, "playerName"]