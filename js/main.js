const row = document.querySelector('div.row');

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i + ' fizzbuzz');
        const element = '<div class="col bg-dark text-white box">fizzbuzz</div>';
        row.innerHTML += element;

    } else if (i % 3 == 0) {
        console.log(i + ' fizz');
        const element = '<div class="col bg-dark text-white box">fizz</div>';
        row.innerHTML += element;

    } else if (i % 5 == 0) {
        console.log(i + ' buzz');
        const element = '<div class="col bg-dark text-white box">buzz</div>';
        row.innerHTML += element;

    } else {
        console.log(i);
        const element = `<div class="col bg-dark text-white box">${i}</div>`;
        row.innerHTML += element;
    }
}