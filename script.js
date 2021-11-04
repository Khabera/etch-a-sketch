const gridsContainer = document.querySelector('.grids-container');
const resolutionButtons = document.querySelectorAll('.resolution-button');
const container = document.querySelector('#container');
const palettes = document.querySelectorAll('.palette-button');
const paletteSelections = document.querySelectorAll('.palette-selector');
const sketchPad = gridsContainer.querySelectorAll('div');
//const grids = container.querySelectorAll('div'); --Defined Later--

//Grid Construction
let resolution = 16;
addGrid();
function addGrid(){
    container.setAttribute('style',  `grid-template-columns: repeat(${resolution}, auto)`);
    for(let i=0; i<(resolution*resolution); i++){
        let tempDiv = document.createElement("DIV");
        tempDiv.setAttribute('class', 'divvy');
        document.getElementById('container').appendChild(tempDiv);
    };
    const grids = document.querySelectorAll('.divvy');
   // grids.forEach(element => {
 //   element.addEventListener('mouseenter', () =>{
  //      element.classList.add('hovered');
  //  });
  //  element.addEventListener('mouseleave', () =>{
  //      element.classList.replace('hovered', 'entered');
  //  })
  //});
}
function  clearGrid(){
    while(container.hasChildNodes()==true){
        container.removeChild(container.childNodes[0]);}
    addGrid();
}
const grids = container.querySelectorAll('div');
//End Grid Construction

//Resolution Selection
resolutionButtons.forEach((button) => {
    button.addEventListener('click', () => {
        resolution=button.getAttribute('resolution');
        clearGrid();
    })
});
//Resolution Selection

//Palette Selection
let paletteColors= new Array('dimgrey', 'dimgrey', 'dimgrey', 'dimgrey', 'dimgrey');
paletteSelections.forEach((button) => {
    button.addEventListener('click', () => {
        let previouslySelectedPalette = paletteColors;
        switch(button.getAttribute('color')){
            case 'retro': 
                paletteColors=['dimgrey', 'dimgrey', 'dimgrey', 'dimgrey', 'dimgrey'];
                console.log(paletteColors);
                break;
            case 'psychedelic':
                paletteColors=['#7343D9', '#0B8AD9', '#0B9ED9', '#0CF2F2', '#F2EB80'];
                console.log(paletteColors);
                break;
            case 'palette': 
                paletteColors=['red', 'red', 'red', 'red', 'red'];
                console.log(paletteColors);
                break;
            default:
                paletteColors=['blue','blue','blue','blue','blue'];
        }
        setPaletteButtonBackgroundColor(paletteColors);
        if(previouslySelectedPalette[2]!=paletteColors[2]){
            clearGrid();}
    });
});
setPaletteButtonBackgroundColor(['dimgrey', 'dimgrey', 'dimgrey', 'dimgrey', 'dimgrey']);
function setPaletteButtonBackgroundColor(array){
    for(let i=0; i<palettes.length; i++){
        palettes[i].style.backgroundColor = array[i];
    }
};
palettes.forEach((button) => {
    button.addEventListener('click', setBrushColor);
})
function setBrushColor(){
    let color = (this.getAttribute('style', 'background-color').slice(18).replace(';',''));
    //slice and replace to format 'background-color' return
    const grids = document.querySelectorAll('.divvy');
    grids.forEach(element => {
        element.addEventListener('mouseenter', () =>{
            element.style.backgroundColor = color;}
        );});
}
//}
//1. function to change background color that is drawn

//note on github *project concept by The Odin Project*
//add a "pressing this will clear the palette, are you sure you want to do that?" prompt and make it so that if they are already on that palette, not to wipe it
//play with sibling elements so that as you run through it modifies the adjacent elements too? And actually if I wanted to get really fancy with it, I could have it modify smaller elements within each grid so as not to take up the ~entire~ sibling div
