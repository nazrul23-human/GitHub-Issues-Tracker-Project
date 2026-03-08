function login() {

    let username = document.getElementById("username").value
    let password = document.getElementById("password").value

    if (username === "admin" && password === "admin123") {

        window.location.href = "dashboard.html"

    } else {

        alert("Invalid username or password")

    }

}

const API = "https://phi-lab-server.vercel.app/api/v1/lab/issues"

let allIssues = []
async function loadIssues() {
    showLoader()
    let res = await fetch(API)
    let data = await res.json()
    allIssues = data.data
    displayIssues(allIssues)
    hideLoader()

}

function displayIssues(issues) {
    let container = document.getElementById("issuesContainer")
    container.innerHTML = ""
    document.getElementById("issueCount").innerText = issues.length
    issues.forEach(issue => {
        let border = issue.status === "open"
            ? "border-green-500"
            : "border-purple-500"

        container.innerHTML += `
        <div onclick="openModal('${issue._id}')"
            class="bg-white rounded shadow p-4 border-t-4 ${border} cursor-pointer">
            <h3 class="font-semibold text-sm">${issue.title}</h3>
            <p class="text-xs text-gray-500 mt-1">${issue.description}</p>
            <div class="flex gap-2 mt-3"><span class="text-xs bg-red-100 text-red-600 px-2 rounded">
            ${issue.category}</span>
            <span class="text-xs bg-yellow-100 text-yellow-600 px-2 rounded">${issue.label}</span>
            </div>
            <p class="text-xs text-gray-400 mt-3">by ${issue.author}</p>
            <p class="text-xs text-gray-400">${issue.createdAt}</p>
        </div>
        `
    })
}

function filterIssues(status) {
    setActive(status)
    let filtered = allIssues.filter(issue => issue.status === status)
    displayIssues(filtered)
}

function showAll() {
    setActive("all")
    displayIssues(allIssues)
}

function setActive(tab) {
    document.querySelectorAll(".tab").forEach(btn => {
        btn.classList.remove("bg-purple-600", "text-white")
        btn.classList.add("border")
    })
    document.getElementById(tab + "Tab").classList.add("bg-purple-600", "text-white")
}

async function searchIssues() {
    let text = document.getElementById("searchInput").value
    showLoader()
    let res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${text}`)
    let data = await res.json()
    displayIssues(data.data)
    hideLoader()

}
function showLoader() {
    document.getElementById("loader").classList.remove("hidden")

}

function hideLoader() {
    document.getElementById("loader").classList.add("hidden")

}


function openModal(id) {
    let issue = allIssues.find(i => i._id === id)
    document.getElementById("modalTitle").innerText = issue.title
    document.getElementById("modalDesc").innerText = issue.description
    document.getElementById("modalAuthor").innerText = "Author: " + issue.author
    document.getElementById("modalPriority").innerText = "Priority: " + issue.priority
    document.getElementById("modalStatus").innerText = "Status: " + issue.status
    
    document.getElementById("modal").classList.remove("hidden")

}

function closeModal() {
    document.getElementById("modal").classList.add("hidden")

}

loadIssues()