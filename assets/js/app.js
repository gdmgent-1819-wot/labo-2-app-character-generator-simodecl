

     
clickableGrid = ( rows, cols, callback ) => {
    let i=0;
    const grid = document.querySelector('.grid')
    for (let r=0;r<rows;++r){
        const tr = grid.appendChild(document.createElement('tr'));
        for (var c=0;c<cols;++c){
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
    console.log("You clicked on element:",el);
    console.log("You clicked on row:",row);
    console.log("You clicked on col:",col);
    console.log("You clicked on item #:",i);

    el.classList.toggle("clicked")
});