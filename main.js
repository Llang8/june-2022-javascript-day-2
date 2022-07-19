/* let cardTextElements = document.getElementsByClassName('card-text');

cardTextElements[0].innerText = '<strong>Software Developer</strong>';
cardTextElements[1].innerHTML = '<strong>Software Developer</strong>';

let firstCardTextElement = document.querySelector('#card-1 .card-text');
console.log(firstCardTextElement)

firstCardTextElement.style.color = 'red';
firstCardTextElement.style.fontSize = '25px';

firstCardTextElement = document.querySelector('.card .card-text');
console.log(firstCardTextElement)

let allCardTextElement = document.querySelectorAll('.card .card-text');
console.log(allCardTextElement)

 */

let employeesEl = document.getElementById('employees');

/* let employees = [
    {
        name: "Lucas",
        title: "Web Developer"
    },
    {
        name: "Christopher",
        title: "Software Developer"
    },
    {
        name: "Joel",
        title: "Head of Curriculum"
    }
] */
let employees = []

for (let employee of employees) {

    let employeeHTML = `
        <div class="card" id="card-1">
            <div class="card-body">
                <h4 class="card-title">${employee.name}</h4>
                <p class="card-text"><strong>${employee.title}</strong></p>
            </div>
        </div>
    `
    employeesEl.innerHTML += employeeHTML
    console.log(employeesEl.innerHTML)
}

let formEl = document.getElementById('employeeForm');

formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    let nameInput = document.getElementById('employeeName');
    let titleInput = document.getElementById('employeeTitle');
    console.log(nameInput.value)
    console.log(titleInput.value)

    if (nameInput.value !== '' && titleInput.value !== '') {
        let employeeHTML = `
            <div class="card" id="card-1">
                <div class="card-body">
                    <h4 class="card-title">${nameInput.value}</h4>
                    <p class="card-text"><strong>${titleInput.value}</strong></p>
                </div>
            </div>
        `
        employeesEl.innerHTML += employeeHTML

        nameInput.value = ''
        titleInput.value = ''
    }
})

let clearButton = document.getElementById('clearButton');

clearButton.addEventListener('click', (event) => {
    console.log('Button clicked')
    employeesEl.innerHTML = ''
})