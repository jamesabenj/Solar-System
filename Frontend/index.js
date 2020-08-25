document.addEventListener('DOMContentLoaded', function(){
    fetchQuestions(1)
    fetchQuestions(2)
    fetchQuestions(3)
    fetchQuestions(4)
    createUser()
    dropdown()
})

const BASE_URL = "http://127.0.0.1:3000"
const mercury = document.getElementById('mercury')
const venus = document.getElementById('venus')
const mercuryLesson = document.getElementById('mercury-lesson')
const venusLesson = document.getElementById('venus-lesson')
const earthLesson = document.getElementById('earth-lesson')
const marsLesson = document.getElementById('mars-lesson')
const grade = document.getElementById('grade')
const gradeBook = document.getElementById('grade-book')
const reset = document.getElementById('reset')
let score = 0

function createUser() {
    let usersForm = document.getElementById("user-form")

    usersForm.innerHTML += 

    `
    <form>
        <p>
        <input type="text" id="username"><br>
        <input class="button" type="submit" value="Lift Off" style="text-align: center;">
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

function dropdown() {
    let coll = document.getElementsByClassName("collapsible");
    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active")
            let content = this.nextElementSibling
            if (content.style.display === "block") {
                this.innerText = "+"
                content.style.display = "none"
            } else {
                content.style.display = "block"
                this.innerText = "-"
            }
        })
    }
}

function showLessons() {
    navBar.classList.remove('hidden')
    formHeader.classList.add('hidden')
    userForm.classList.add('hidden')
    planetSelect.classList.toggle('show')
    // planetSelect.style.display = 'flex'
    // planetSelect.style.width = '5000px'
}

function renderMercuryQuestions(content) {
    content.forEach(i => {
        mercuryLesson.innerHTML += 
        `
        <h3>${i.title}</h3>
        <form>
            <input type="radio" name="mercury-${i.id}" value="${i.option1}">${i.option1}</input><br>
            <input type="radio" name="mercury-${i.id}" value="${i.option2}">${i.option2}</input><br>
            <input type="radio" name="mercury-${i.id}" value="${i.option3}">${i.option3}</input><br>
            <input type="radio" name="mercury-${i.id}" value="${i.option4}">${i.option4}</input>
            <input type="hidden" name="mercury-${i.id}" value="${i.answer}"></input>
        </form>
        `
    });
}

function renderVenusQuestions(content) {
    content.forEach(i => {
        venusLesson.innerHTML += 
        `
        <h3>${i.title}</h3>
        <form>
            <input type="radio" name="venus-${i.id}" value="${i.option1}">${i.option1}</input><br>
            <input type="radio" name="venus-${i.id}" value="${i.option2}">${i.option2}</input><br>
            <input type="radio" name="venus-${i.id}" value="${i.option3}">${i.option3}</input><br>
            <input type="radio" name="venus-${i.id}" value="${i.option4}">${i.option4}</input>
            <input type="hidden" name="venus-${i.id}" value="${i.answer}"></input>
        </form>

        `
    });
}

function renderEarthQuestions(content) {
    content.forEach(i => {
        earthLesson.innerHTML += 
        `
        <h3>${i.title}</h3>
        <form>
            <input type="radio" name="earth-${i.id}" value="${i.option1}">${i.option1}</input><br>
            <input type="radio" name="earth-${i.id}" value="${i.option2}">${i.option2}</input><br>
            <input type="radio" name="earth-${i.id}" value="${i.option3}">${i.option3}</input><br>
            <input type="radio" name="earth-${i.id}" value="${i.option4}">${i.option4}</input>
            <input name="earth-${i.id}" type="hidden" value="${i.answer}"></input>
        </form>

        `
    });
}

function renderMarsQuestions(content) {
    content.forEach(i => {
        marsLesson.innerHTML += 
        `
        <h3>${i.title}</h3>
        <form>
            <input type="radio" name="mars-${i.id}" value="${i.option1}">${i.option1}</input><br>
            <input type="radio" name="mars-${i.id}" value="${i.option2}">${i.option2}</input><br>
            <input type="radio" name="mars-${i.id}" value="${i.option3}">${i.option3}</input><br>
            <input type="radio" name="mars-${i.id}" value="${i.option4}">${i.option4}</input>
            <input name="mars-${i.id}" type="hidden" value="${i.answer}"></input>
        </form>

        `
    });
}

function fetchQuestions(lesson_id){
    fetch(`${BASE_URL}/lessons/${lesson_id}/questions`).then(resp => resp.json()).then(function(json) {
        if (lesson_id == 1) {
            renderMercuryQuestions(json)
        }else if (lesson_id == 2) {
            renderVenusQuestions(json)
        }else if (lesson_id == 3) {
            renderEarthQuestions(json)
        }else if (lesson_id == 4) {
            renderMarsQuestions(json)
        }
        // }else if (lesson_id == 5) {
        //     renderJupiterQuestions(json)
        // }else if (lesson_id == 6) {
        //     renderSaturnQuestions(json)
        // }else if (lesson_id == 7) {
        //     renderUranusQuestions(json)
        // }else if (lesson_id == 8) {
        //     renderNeptuneQuestions(json)
        // }
    })
}


grade.addEventListener('click', function(){
    event.preventDefault()
    gradeMercury()
    gradeVenus()
    gradeEarth()
    gradeMars()
    planetSelect.style.display = 'none'
    gradeBook.innerHTML =
    `
    <h2>You Scored ${score} / 24</h2>

    `
    gradeBook.classList.remove('hidden')
    reset.style.display = "inline"
})

function gradeMercury() {
    for(let x = 1; x < 4; x++) {
        let coll = document.querySelectorAll(`input[name="mercury-${x}"]`)
        let selectedValue
        coll.forEach(i => {
            if (i.checked) {
                selectedValue = i.value
            }
        })
        if (selectedValue == coll[4].value) {
            score++ 
        }    
    }
}

function gradeVenus() {
    for(let x = 4; x < 7; x++) {
        let coll = document.querySelectorAll(`input[name="venus-${x}"]`)
        let selectedValue
        coll.forEach(i => {
            if (i.checked) {
                selectedValue = i.value
            }
        })
        if (selectedValue == coll[4].value) {
            score++ 
        }    
    }
}

function gradeEarth() {
    for(let x = 7; x < 10; x++) {
        let coll = document.querySelectorAll(`input[name="earth-${x}"]`)
        let selectedValue
        coll.forEach(i => {
            if (i.checked) {
                selectedValue = i.value
            }
        })
        if (selectedValue == coll[4].value) {
            score++ 
        }    
    }
}

function gradeMars() {
    for(let x = 10; x < 13; x++) {
        let coll = document.querySelectorAll(`input[name="mars-${x}"]`)
        let selectedValue
        coll.forEach(i => {
            if (i.checked) {
                selectedValue = i.value
            }
        })
        if (selectedValue == coll[4].value) {
            score++ 
        }    
    }
}

reset.addEventListener('click', function(){
    location.reload()
})

