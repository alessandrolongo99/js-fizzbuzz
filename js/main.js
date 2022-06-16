for (let i = 1; i <= 100; i++) {
    const row = document.querySelector('div.row');
    const col = document.createElement('div');
    const element = document.createElement('div');
    col.className = 'col';

    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i + ' fizzbuzz');

        element.className = 'ms_box bg-danger';
        element.append('fizzbuzz');

    } else if (i % 3 == 0) {
        console.log(i + ' fizz');

        element.className = 'ms_box bg-success';
        element.append('fizz');


    } else if (i % 5 == 0) {
        console.log(i + ' buzz');

        element.className = 'ms_box bg-warning';
        element.append('buzz');

    } else {
        console.log(i);

        element.className = 'ms_box bg-primary';
        element.append(i);
    }

    col.append(element);
    row.append(col);
}