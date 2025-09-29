const iframes = document.getElementsByClassName("websites__iframe-wrap");

const madjack = document.getElementById("madjack");
const muziek = document.getElementById("muziek");
const wimdriessen = document.getElementById("wimdriessen");
const space = document.getElementById("space");

function show__iframe(input){
    
    for(let i = 0; i < iframes.length; i++){
        iframes[i].style.display = "none"; 
    }
    
    switch(input){
        case 'wimdriessen':
            wimdriessen.style.display = "block";
            break;
        case 'muziek':
            muziek.style.display = "block";
            break;
        case 'madjack':
            madjack.style.display = "block";
            break;
        case 'space':
            space.style.display = "block";
            break;
        default:
            console.log("switch error");
            for(let i = 0; i < iframes.length; i++){
                iframes[i].style.display = "none"; 
            }
            break;
    }
}