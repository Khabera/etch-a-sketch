const gridsContainer = document.querySelector('.grids-container');
function createGrids(){
    let tempDiv = document.createElement("DIV");
    tempDiv.setAttribute('class', 'divvy');
    //console.log(document.getElementById('container'));
    //tempDiv.textContent = "";
    document.getElementById('container').appendChild(tempDiv);
}
let n=30;
document.querySelector('#container').setAttribute('style',  `grid-template-columns: repeat(${n}, auto)`)
for(let i=0; i<(n*n); i++){
    createGrids();
};
const grids = document.querySelectorAll('.divvy');
grids.forEach(element => {
    element.addEventListener('mouseenter', () =>{
        element.classList.add('hovered');
    });
    element.addEventListener('mouseleave', () =>{
        element.classList.replace('hovered', 'entered');
    })
})
//grids.forEach((div) => {
//    console.log('test');
 //   div.style.backgroundColor = 'red';
//    div.addEventListener('hover', div.style.backgroundColor = '//red');
//});

//play with sibling elements so that as you run through it modifies the adjacent elements too? And actually if I wanted to get really fancy with it, I could have it modify smaller elements within each grid so as not to take up the ~entire~ sibling div
