let counterID = 0;

function addCounter() {
    const container = document.getElementById('counterContainer');
    const counterCard = document.createElement('div');
    counterCard.className = 'counter added';
    counterCard.setAttribute('id', `counter-${counterID}`);

    counterCard.innerHTML = `
    <h2>Counter ${counterID + 1}</h2>
    <div class="counter-value" id="value-${counterID}">0</div>
    <div class="actions">
        <button class="btn btn-primary" onclick="increment(${counterID})">+</button>
        <button class="btn btn-primary" onclick="decrement(${counterID})">-</button>
        <button class="btn btn-primary" onclick="reset(${counterID})">Reset</button>
    </div>
    <button class="btn btn-danger" style="margin-top: 10px;" onclick="removeCounter(${counterID})">Remove Counter</button>
    `;

    container.appendChild(counterCard);
    counterID++;
}

function increment(id) {
    updatedValue(id, 1);
}

function decrement(id) {
    updatedValue(id, -1);
}

function updatedValue(id, change) {
    const value = document.getElementById(`value-${id}`);
    let current = parseInt(value.textContent);
    current += change;
    value.textContent = current;

    applyColorClass(value, current);
    triggerPopAnimation(value);
}

function applyColorClass(element, value) {
    element.classList.remove('positive', 'negative', 'zero');
    if (value > 0) {
        element.classList.add('positive');
    } else if (value < 0) {
        element.classList.add('negative');
    } else {
        element.classList.add('zero');
    }
}

function triggerPopAnimation(element) {
    element.style.animation = 'none';
    void element.offsetWidth;
    element.style.animation = 'pop 0.3s';
}

function reset(id) {
    const value = document.getElementById(`value-${id}`);
    value.textContent = 0;

    applyColorClass(value, 0);
    triggerPopAnimation(value);
}

function removeCounter(id) {
    const counter = document.getElementById(`counter-${id}`);
    counter.classList.add('removed');
    setTimeout(() => {
        counter.remove();
    }, 500);
}

// Without Animation Code

// let counterID = 0;

// function addCounter() {
//     const container = document.getElementById('counterContainer');
//     const counterCard = document.createElement('div');
//     counterCard.className = 'counter';
//     counterCard.setAttribute('id', `counter-${counterID}`);

//     counterCard.innerHTML = `
//     <h2>Counter ${counterID + 1}</h2>
//     <div class="counter-value" id="value-${counterID}">0</div>
//     <div class="actions">
//         <button class="btn btn-primary" onclick="increment(${counterID})">+</button>
//         <button class="btn btn-primary" onclick="decrement(${counterID})">-</button>
//         <button class="btn btn-primary" onclick="reset(${counterID})">Reset</button>
//     </div>
//     <button class="btn btn-danger" style="margin-top: 10px;" onclick="removeCounter(${counterID})">Remove Counter</button>
//     `;

//     container.appendChild(counterCard);
//     counterID++;
// }

// function increment(id) {
//     const value = document.getElementById(value-${id});
//     let current = parseInt(value.textContent);
//     value.textContent = current + 1;
// }

// function decrement(id) {
//     const value = document.getElementById(value-${id});
//     let current = parseInt(value.textContent);
//     value.textContent = current - 1;
// }

// function reset(id) {
//     const value = document.getElementById(value-${id});
//     value.textContent = 0;
// }

// function removeCounter(id) {
//     const counter = document.getElementById(counter-${id});
//     counter.remove();
// }