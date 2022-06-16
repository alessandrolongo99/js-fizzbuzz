const row = document.querySelector('div.row');

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i + ' fizzbuzz');
        
        const element = document.createElement('div');
        element.className = 'col bg-danger ms_box';
        element.append('fizzbuzz')
        row.append(element);

    } else if (i % 3 == 0) {
        console.log(i + ' fizz');
        
        const element = document.createElement('div');
        element.className = 'col bg-success ms_box';
        element.append('fizz')
        row.append(element);

    } else if (i % 5 == 0) {
        console.log(i + ' buzz');
        
        const element = document.createElement('div');
        element.className = 'col bg-warning ms_box';
        element.append('buzz')
        row.append(element);

    } else {
        console.log(i);
        
        const element = document.createElement('div');
        element.className = 'col bg-primary ms_box';
        element.append(i)
        row.append(element);
    }
}