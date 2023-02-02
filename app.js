// console.log('app.js reporting for duty..');

// SECTION - Bindings
let paramsObj = {};

const searchBtn = document.getElementById('search-btn');
const form = document.getElementById('search-form');


// SECTION - Event Listeners
searchBtn.addEventListener('click', addParamsDropDown);


// SECTION - Function Declarations
function handleSearchClick(event) {
    event.preventDefault();
    document.querySelectorAll('[type="checkbox"]').forEach((input) => {
        if (input.checked) {
            console.log(input.value);
        }
    });
}

function addParamPairs(event) {
    event.preventDefault();
    let count = 0;
    paramsObj[count] = {key: 'type', value: document.getElementById('type').value};
    count += 1;
    document.querySelectorAll('[type="checkbox"]').forEach((input) => {
        if (input.checked) {
            paramsObj[count] = {key: input.parentNode.id, value: input.value};
            count += 1;
        }
    });
    console.log(paramsObj);
}

function addParamsDropDown(event) {
    event.preventDefault();
    let count = 0;
    document.querySelectorAll('.drop-down').forEach((input) => {
        if (input.checked) {
            paramsObj[count] = {
                key: input.parentNode.id,
                value: input.value
            }
            count += 1;
        }
    });
    console.log(paramsObj);
}