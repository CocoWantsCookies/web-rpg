const consoleInput = document.querySelector(".console-input");
const historyContainer = document.querySelector(".console-history");
const gameContainer = document.querySelector(".game");

function addResult(input, output) {
    const inLogElement = document.createElement("div");
    const outLogElement = document.createElement("div");

    inLogElement .classList.add("console-in-log");
    outLogElement .classList.add("console-out-log");

    inLogElement.textContent = input;
    outLogElement.textContent = `> ${output}`;
    
    historyContainer.append(inLogElement, outLogElement);
}

function playerAddResult(output) {
    const inLogElement = document.createElement("div");
    inLogElement .classList.add("console-in-log");
    inLogElement.textContent = output;
    historyContainer.append(inLogElement);
}

function consoleAddResult(output) {
    const outLogElement = document.createElement("div");
    outLogElement .classList.add("console-out-log");
    outLogElement.textContent = `>>> ${output}`;
    historyContainer.append(outLogElement);
}

consoleInput.addEventListener("keyup", key => {
    const code = consoleInput.value.trim();

    if (code.length == 0) {
        return;
    }

    if (key.key == "Enter") {

        if (code == "open inv") {
            const invElement = document.getElementById("inventory");
            if (invElement == null) {
                const invElement = document.createElement("div");
                invElement .classList.add("window");
                invElement.setAttribute(`id`, `inventory`);
                invElement.textContent = "This is your inventory";
                gameContainer.prepend(invElement);
                addResult(code, "inventory oppened");
            } else {
                addResult (code, "Your inventory is already oppened")
            }
            

        } else if (code == "close inv") {
            const invElement = document.getElementById("inventory");
            if (invElement != null) {
                invElement.parentNode.removeChild(invElement)
                addResult(code, "inventory closed");
            } else {
                addResult (code, "Your inventory is not oppened")
            }
            

        } else {

            playerAddResult(code, "");

        }

        consoleInput.value = "";
        historyContainer.scrollTop = historyContainer.scrollHeight;
    }
});

consoleAddResult("Hello World!");
consoleAddResult("Type \"open inv\" to open your inventory and \"close inv\" to close it");