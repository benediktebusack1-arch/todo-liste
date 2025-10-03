

const toDoList = []

function add(){
    let value = document.getElementById("input").value.trim()

    if (value == "") {
        alert("Skriv en to-do for at tilføje til listen <3")
        return;
    }

    value = value.charAt(0).toUpperCase() + value.slice(1)

    toDoList.push(value)

    const ikkeTjekket = document.getElementById("ikkeTjekket")
    const tjekket = document.getElementById("tjekket")

    const divlist = document.getElementById("divList")

    let itemDiv = document.createElement("div")
    itemDiv.className = "todoItem"

    let checkbox = document.createElement("input")
    checkbox.type = "checkbox";

    let label = document.createElement("span")
    label.textContent = value;   
    label.className = "textTodo"

    let close = document.createElement("span")
    close.textContent = "\u00D7"
    close.className = "close"
    close.style.cursor = "pointer"

    checkbox.addEventListener("change", function() {
            if (checkbox.checked){
                itemDiv.classList.add("done")
            } else {
                itemDiv.classList.remove("done")
            }
        });

    close.addEventListener("click", function(){
        if (itemDiv.parentElement){
            itemDiv.parentElement.removeChild(itemDiv)
        }
        const index = toDoList.indexOf(value)
        if (index > -1) toDoList.splice(index, 1)
    })


        itemDiv.appendChild(checkbox);
        itemDiv.appendChild(label);
        itemDiv.appendChild(close);

        divlist.appendChild(itemDiv);
    
    document.getElementById("input").value = "";

    }
    













