document.addEventListener('DOMContentLoaded', function(){
    createUser()
    // drawSun()
    // drawStars()
    // drawPlanetContainers() 
})

// const BASE_URL = "http://127.0.0.1:3000"
// const navBar = document.getElementById('icon-bar')

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

ctx.fillStyle = "black"
ctx.fillRect(0, 0, canvas.width, canvas.height)

// function drawPlanetContainers(){
//     for (i = 0; i < 8; i++) {
//         ctx.beginPath()
//         ctx.arc((200 + (i * 90)), (300 - (i * 20)), 10, 0, 2 * Math.PI)
//         ctx.fillStyle = 'white'
//         ctx.fill()
//     }
// }

let arrow_left = document.getElementById('arrow-left')
arrow_left.addEventListener('click', function() {
    console.log('hello')
})

function createUser() {
    let usersForm = document.getElementById("user-form")

    usersForm.innerHTML += 

    `
    <form>
        <p>
        <input type="text" id="username"><br>
        <input class="button" type="submit" value="Embark" style="text-align: center;">
    </form>

    `

    usersForm.addEventListener("submit", userFormSubmission)
}

function userFormSubmission(){
    event.preventDefault();
    let username = document.getElementById("username").value

    let user = {
        username: username
    }

    fetch(`${BASE_URL}/users`, {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(resp => resp.json())
    .then(() => showLessons()) 
}

function showLessons() {
    navBar.classList.remove('hidden')
    formHeader.classList.add('hidden')
    backgroundImage.classList.add('hidden')
    userForm.classList.add('hidden')
    planetSelect.classList.remove('hidden')
    planetSelect.style.display = 'flex'
    planetSelect.style.width = '5000px'
}





