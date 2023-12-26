let myLeads = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener('click', function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    render(myLeads)
})

deleteBtn.addEventListener('dblclick', function() {
    myLeads = []
    render(myLeads)
})

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

