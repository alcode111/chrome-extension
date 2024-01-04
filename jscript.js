let myLeads = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const tabBtn = document.getElementById("tab-btn")
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

// SAVE TABS button logic

tabBtn.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})

// DELETE ALL button logic

deleteBtn.addEventListener('dblclick', function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

// Function to display the leads in list items

function render(leads) {
    let listItems = ""
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