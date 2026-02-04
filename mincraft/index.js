
const rowsNumber = 50;
const colsNumber = 50;


for (let r = 1; r <= rowsNumber; r++) {
    for (let c = 1; c <= colsNumber; c++) {
        const block = document.createElement('div');
        

         if (r >= 9 && r < 15) {
            block.id = 'stone';
        } else if( r >14) {
            block.id = 'ground';
        }
        document.body.appendChild(block);
    }
}


document.body.addEventListener('click', (event) => {
    const target = event.target;
    
    if (target.id === 'ground' || target.id === 'stone') {
        target.id = 'sky';
    }
});