let items;
let itemCount;

function resetAll() {
    document.querySelector(".container").innerHTML = `
    <div class = "item no${++items}">
        <button class="button add" onclick="addItem(this.parentNode)">+</button>
        <div class = "main-content">
            <input type="checkbox" class="checkbox" onclick="toggleStrikethrough(this.parentNode.parentNode)"></input>
            <input type="text" class="text"></input>
        </div>
        <button class="button delete" onclick="deleteItem(this.parentNode)">&#128465;</button>
    </div>`;
    items = 0;
    itemCount = 1;
}

resetAll();

function addItem(parent) {
    if (parent.childNodes[3].lastElementChild.value !== "") {
        let div = document.createElement("div");
        div.classList.add(`item`);
        div.classList.add(`no${++items}`);
        div.innerHTML = `
        <button class="button add" onclick="addItem(this.parentNode)">+</button>
        <div class = "main-content">
            <input type="checkbox" class="checkbox" onclick="toggleStrikethrough(this.parentNode.parentNode)"></input>
            <input type="text" class="text"></input>
        </div>
        <button class="button delete" onclick="deleteItem(this.parentNode)">&#128465;</button>
        `;
        parent.parentNode.insertBefore(div, parent.nextSibling);
        itemCount++;
    }
    else {
        alert("Fill this field first.");
    }
}

function deleteItem(parent) {
    if (itemCount > 1) {
        parent.remove();
        --itemCount;
    }
    else {
        alert("Maximum number of entities deleted.");
    }
}

function toggleStrikethrough(parent) {
    if (parent.childNodes[3].firstElementChild.checked) { 
        parent.childNodes[3].lastElementChild.disabled = true;
        parent.childNodes[3].lastElementChild.style.textDecoration = "line-through";
    }
    else
    {
        parent.childNodes[3].lastElementChild.disabled = false;
        parent.childNodes[3].lastElementChild.style.textDecoration = "";
    }
}