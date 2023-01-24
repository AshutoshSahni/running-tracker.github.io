const goal = 25
let entries = []

const entriesWrapper = document.querySelector('#entries');
document.querySelector('#target').innerText = goal;

function reducer(total, currentValue) {
    return total + currentValue;
}

function calTotal() {
    const totalValue = entries.reduce(reducer).toFixed(1);
    document.getElementById("total").innerText = totalValue;
    document.getElementById("progressTotal").innerText = totalValue;
}

function calAverage() {
    const average = (entries.reduce(reducer) / entries.length).toFixed(1);
    document.getElementById("distance").innerText = average;
}

function weeklyHigh() {
    const high = Math.max(...entries);
    document.getElementById('high').innerText = high;
}

function updateProgress() {
    const totalValue = entries.reduce(reducer).toFixed(1);
    const totalPercent = (totalValue / (goal / 100));
    console.log(totalPercent);
    //let progress = document.getElementById('progressCircle');
    //progress.style.background = "conic-gradient(`#70db70 0 ${totalPercent}, #2d3740 ${totalPercent} 100%`)";
}

function addNewEntry(entry) {
    entriesWrapper.removeChild(entriesWrapper.firstElementChild);
    const listItem = document.createElement('li');
    const itemValue = document.createTextNode(entry);
    listItem.appendChild(itemValue);

    entriesWrapper.appendChild(listItem);
}

function handleSubmit(event) {
    event.preventDefault() //prevents the default behavior such as reload
    const entry = Number(document.querySelector('#entry').value);
    if(!entry) return;
    document.querySelector('form').reset(); //clears all the form inputs
    entries.push(entry);
    addNewEntry(entry);

    calTotal();
    calAverage();
    weeklyHigh();
    updateProgress();
}

const form = document.querySelector('form').addEventListener('submit', handleSubmit);

