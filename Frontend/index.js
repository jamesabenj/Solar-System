document.addEventListener('DOMContentLoaded', function(){
    fetchQuestions(lessonIds)
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
const jupiterLesson = document.getElementById('jupiter-lesson')
const saturnLesson = document.getElementById('saturn-lesson')
const uranusLesson = document.getElementById('uranus-lesson')
const neptuneLesson = document.getElementById('neptune-lesson')
const grade = document.getElementById('grade')
const gradeBook = document.getElementById('grade-book')
const reset = document.getElementById('reset')
let score = 0
let lessonIds = [1,2,3,4,5,6,7,8]
const current_user = new Object


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
    .then(data => {
        current_user.username = username
        current_user.id = data.id
    })
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

function fetchQuestions(lessonIds){
    lessonIds.forEach(id => {
        if (id == 1) {
            fetch(`${BASE_URL}/lessons/${id}/questions`).then(resp => resp.json()).then(json => renderMercuryQuestions(json))
        }else if (id == 2) {
            fetch(`${BASE_URL}/lessons/${id}/questions`).then(resp => resp.json()).then(json => renderVenusQuestions(json))
        }else if (id == 3) {
            fetch(`${BASE_URL}/lessons/${id}/questions`).then(resp => resp.json()).then(json => renderEarthQuestions(json))
        }else if (id == 4) {
            fetch(`${BASE_URL}/lessons/${id}/questions`).then(resp => resp.json()).then(json => renderMarsQuestions(json))
        }else if (id == 5) {
            fetch(`${BASE_URL}/lessons/${id}/questions`).then(resp => resp.json()).then(json => renderJupiterQuestions(json))
        }else if (id == 6) {
            fetch(`${BASE_URL}/lessons/${id}/questions`).then(resp => resp.json()).then(json => renderSaturnQuestions(json))
        }else if (id == 7) {
            fetch(`${BASE_URL}/lessons/${id}/questions`).then(resp => resp.json()).then(json => renderUranusQuestions(json))
        }else if (id == 8) {
            fetch(`${BASE_URL}/lessons/${id}/questions`).then(resp => resp.json()).then(json => renderNeptuneQuestions(json))
        }
    })
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

function renderJupiterQuestions(content) {
    content.forEach(i => {
        jupiterLesson.innerHTML += 
        `
        <h3>${i.title}</h3>
        <form>
            <input type="radio" name="jupiter-${i.id}" value="${i.option1}">${i.option1}</input><br>
            <input type="radio" name="jupiter-${i.id}" value="${i.option2}">${i.option2}</input><br>
            <input type="radio" name="jupiter-${i.id}" value="${i.option3}">${i.option3}</input><br>
            <input type="radio" name="jupiter-${i.id}" value="${i.option4}">${i.option4}</input>
            <input name="jupiter-${i.id}" type="hidden" value="${i.answer}"></input>
        </form>

        `
    });
}

function renderSaturnQuestions(content) {
    content.forEach(i => {
        saturnLesson.innerHTML += 
        `
        <h3>${i.title}</h3>
        <form>
            <input type="radio" name="saturn-${i.id}" value="${i.option1}">${i.option1}</input><br>
            <input type="radio" name="saturn-${i.id}" value="${i.option2}">${i.option2}</input><br>
            <input type="radio" name="saturn-${i.id}" value="${i.option3}">${i.option3}</input><br>
            <input type="radio" name="saturn-${i.id}" value="${i.option4}">${i.option4}</input>
            <input name="saturn-${i.id}" type="hidden" value="${i.answer}"></input>
        </form>

        `
    });
}

function renderUranusQuestions(content) {
    content.forEach(i => {
        uranusLesson.innerHTML += 
        `
        <h3>${i.title}</h3>
        <form>
            <input type="radio" name="uranus-${i.id}" value="${i.option1}">${i.option1}</input><br>
            <input type="radio" name="uranus-${i.id}" value="${i.option2}">${i.option2}</input><br>
            <input type="radio" name="uranus-${i.id}" value="${i.option3}">${i.option3}</input><br>
            <input type="radio" name="uranus-${i.id}" value="${i.option4}">${i.option4}</input>
            <input name="uranus-${i.id}" type="hidden" value="${i.answer}"></input>
        </form>

        `
    });
}

function renderNeptuneQuestions(content) {
    content.forEach(i => {
        neptuneLesson.innerHTML += 
        `
        <h3>${i.title}</h3>
        <form>
            <input type="radio" name="neptune-${i.id}" value="${i.option1}">${i.option1}</input><br>
            <input type="radio" name="neptune-${i.id}" value="${i.option2}">${i.option2}</input><br>
            <input type="radio" name="neptune-${i.id}" value="${i.option3}">${i.option3}</input><br>
            <input type="radio" name="neptune-${i.id}" value="${i.option4}">${i.option4}</input>
            <input name="neptune-${i.id}" type="hidden" value="${i.answer}"></input>
        </form>

        `
    });
}

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

function gradeJupiter() {
    for(let x = 13; x < 16; x++) {
        let coll = document.querySelectorAll(`input[name="jupiter-${x}"]`)
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

function gradeSaturn() {
    for(let x = 16; x < 19; x++) {
        let coll = document.querySelectorAll(`input[name="saturn-${x}"]`)
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

function gradeUranus() {
    for(let x = 19; x < 22; x++) {
        let coll = document.querySelectorAll(`input[name="uranus-${x}"]`)
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

function gradeNeptune() {
    for(let x = 22; x < 25; x++) {
        let coll = document.querySelectorAll(`input[name="neptune-${x}"]`)
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

function setUserGrade(userId, grade) {
    fetch(`${BASE_URL}/users/${userId}`, {
    headers: { "Content-Type": "application/json;" },
    method: 'PUT',
    body: JSON.stringify({
      username: `${current_user.username}`,
      grade: `${grade}`,
    })
  })
}

grade.addEventListener('click', function(){
    event.preventDefault()
    gradeMercury()
    gradeVenus()
    gradeEarth()
    gradeMars()
    gradeJupiter()
    gradeSaturn()
    gradeUranus()
    gradeNeptune()
    setUserGrade(current_user.id, score)
    planetSelect.style.display = 'none'
    gradeBook.innerHTML =
    `
    <h2>${current_user.username} Scored ${score} / 24</h2>
    <h4>
    `
    gradeBook.classList.remove('hidden')
    reset.style.display = "inline"
})

reset.addEventListener('click', function(){
    location.reload()
})

