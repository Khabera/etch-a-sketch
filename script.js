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
let brushToggle = true;

window.addEventListener('keypress', function(event){
    if(event.code=='Space'){
        brushToggle = !brushToggle;
    }
});

function addGrid(){
    container.setAttribute('style',  `grid-template-columns: repeat(${resolution}, auto)`);
    for(let i=0; i<(resolution*resolution); i++){
        let tempDiv = document.createElement("DIV");
        tempDiv.setAttribute('class', 'divvy');
        document.getElementById('container').appendChild(tempDiv);
    };
    const grids = document.querySelectorAll('.divvy');
    grids.forEach(element => {
        element.addEventListener('mouseenter', () =>{
            if(brushToggle==true){
            element.style.backgroundColor = paletteColors[0];}}
        );});
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
        switch(button.getAttribute('id')){
            case 'grey': 
                paletteColors=['dimgrey', 'dimgrey', 'dimgrey', 'dimgrey', 'dimgrey'];
                console.log(paletteColors);
                break;
            case 'ocean-psychedelic':
                paletteColors=['#7343D9', '#0B8AD9', '#0B9ED9', '#0CF2F2', '#F2EB80'];
                console.log(paletteColors);
                break;
            case 'palette': 
                paletteColors=['#8C030E', '#D9042B', '#EF4BF2', '#F07EF2', '#F24405'];
                console.log(paletteColors);
                break;
            case 'lilac-rose': 
                paletteColors=['#8C030E', '#D9042B', '#EF4BF2', '#F07EF2', '#F24405'];
                console.log(paletteColors);
                break;
            case 'autumn': 
                paletteColors=['#252E40', '#F2A922', '#F28322', '#D95525', '#A62C21'];
                console.log(paletteColors);
                break;
            case 'pastel': 
                paletteColors=['#FF99EB', '#8EFADA', '#B281E3', '#9BA4FA', '#81C4E3'];
                console.log(paletteColors);
                break;   
            case 'forrest': 
                paletteColors=['#39402C', '#4F592C', '#647330', '#D9D2C5', '#F2F2F2'];
                console.log(paletteColors);
                break; 
            case 'winter': 
                paletteColors=['#020E26', '#223240', '#54728C', '#A7BDD9', '#595515'];
                console.log(paletteColors);
                break;   
            case 'strawberry': 
                paletteColors=['#F25E95', '#F2808A', '#F29F80', '#F2CA80', '#F2EA79'];
                console.log(paletteColors);
                break;             
            default:
                paletteColors=['blue','blue','blue','blue','blue'];
        }
        setPaletteButtonBackgroundColor(paletteColors);
        setSelectedPalette(paletteColors[0]);
        if(previouslySelectedPalette[2]!=paletteColors[2]){
            clearGrid();}
    });
});
setPaletteButtonBackgroundColor(['dimgrey', 'dimgrey', 'dimgrey', 'dimgrey', 'dimgrey']);
function setPaletteButtonBackgroundColor(array){
    for(let i=0; i<palettes.length; i++){
        palettes[i].style.backgroundColor= array[i] ;
        //id like to add a slight gradient to give the buttons some texture, but it kinda fucks up setBrushColor()
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
            if(brushToggle==true){
            element.style.backgroundColor = color;}}
        );});
    setSelectedPalette(color);
}

function setSelectedPalette(color){
    console.log(color);
    palettes.forEach((button) => {
    if(button.style.backgroundColor == color){
        button.setAttribute('class', 'palette-button highlighted');
    }else
    button.setAttribute('class', 'palette-button');
});
}

//}
//1. function to change background color that is drawn

//note on github *project concept by The Odin Project*
//add a "pressing this will clear the palette, are you sure you want to do that?" prompt and make it so that if they are already on that palette, not to wipe it
//play with sibling elements so that as you run through it modifies the adjacent elements too? And actually if I wanted to get really fancy with it, I could have it modify smaller elements within each grid so as not to take up the ~entire~ sibling div
