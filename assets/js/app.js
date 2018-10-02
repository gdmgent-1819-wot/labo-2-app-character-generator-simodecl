const firebaseRef= firebase.database().ref().child('arcade-characters');

     
clickableGrid = ( rows, cols, callback ) => {
    let i=0;
    const grid = document.querySelector('.grid')
    for (let r=0;r<rows;++r){
        const tr = grid.appendChild(document.createElement('tr'));
        for (let c=0;c<cols;++c){
            const cell = tr.appendChild(document.createElement('td'));
            cell.addEventListener('click',((el,r,c,i) => {
                return () => {
                    callback(el,r,c,i);
                }
            })(cell,r,c,i),false);
        }
    }
    return grid;
}

let lastClicked;
const grid = clickableGrid(8,8,(el,row,col,i) => {
    el.classList.toggle("clicked")
});

const saveButton = document.querySelector('.save');


saveButton.addEventListener('click', () => {
    let bitString = "";
    
    let cols = document.querySelector('.grid').getElementsByTagName('td'), colslen = cols.length, i = -1;
    while(++i < colslen){
        if(cols[i].classList.contains("clicked")) {
            bitString += "1"
        } else {
            bitString += "0"
        }
    }
    firebaseRef.push().set({"string": bitString})
})