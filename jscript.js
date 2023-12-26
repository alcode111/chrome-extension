let myLeads = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")

// Keeping the data after refreshes

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

// SAVE INPUT button logic

inputBtn.addEventListener('click', function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    render(myLeads)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
})

// DELETE ALL button logic

deleteBtn.addEventListener('dblclick', function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

// Function to display the leads in list items

function render(leads) {
    listItems = ""
    for(let i = 0; i < leads.length; i++) {
        listItems += 
        `<li>
        <a href="${leads[i]}" target="_blank">
        ${leads[i]}
        </a>
        </li>`
    }
    ulEl.innerHTML = listItems
}