//API
const apiUrl = "./statements.json";

// References
const statementContainer = document.getElementById("statement-container");
const errorMessage = document.getElementById("error-message");
const herbZone = document.getElementById("true-zone");
const spiceZone = document.getElementById("false-zone");

function randomizeArray(array) {
    array.sort(() => Math.random() - 0.5);
}

function processStatements(data) {
    randomizeArray(data.statements)
    data.statements.forEach(statement => {
        const div = document.createElement("div");
        div.draggable = true;
        div.className = "draggable"
        div.textContent = statement.name;

        div.dataset.category = statement.category;

        div.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("text/plain", JSON.stringify({
                name: statement.name,
                category: statement.category
            }));
        });

        statementContainer.appendChild(div);
    });
}

// HTML script "defer" like DOMContentLoaded
fetch(apiUrl)
    .then(res => res.json())
    .then(data => processStatements(data))
    .catch(error => console.error("Fetch error:", error));

// DROP ZONES
const zones = [herbZone, spiceZone];

zones.forEach(zone => {
    zone.addEventListener("drop", (e) => {
        e.preventDefault();

        const data = JSON.parse(e.dataTransfer.getData("text/plain"));
        let expectedType;
        if (zone.id === "true-zone")
        {
            expectedType = "true";
        }
        else
        {
            expectedType = "false";
        }

        if (data.category !== expectedType) {
            // Template literal
            errorMessage.textContent = `${data.name} is ${data.category}.`;
            return;
        }
        else
        {
            errorMessage.textContent = ""
        }

        // Remove original from middle
        const original = Array.from(statementContainer.children).find(
            el => el.textContent === data.name && el.dataset.category === data.category
        );
        original.remove();

        // Add to drop zone
        const div = document.createElement("div");
        div.textContent = data.name;
        div.draggable = true;
        div.className = "draggable"
        zone.appendChild(div);
    });

    zone.addEventListener("dragover", e => e.preventDefault());
});