let Anime = document.getElementById('Anime');
const boat  = document.getElementById('boat');
const outdisplay = document.querySelector('#OutDisaply h1');
console.log('Anime is position is', Anime.getBoundingClientRect())
function Animes(Anime) {
    const Timeinterval = setInterval(() => {
        let CurrentRight = parseFloat(Anime.style.right) || 15; // Extract numeric value or default to 15%
        Checkout(Anime , boat);
        CurrentRight += 25; // Increment by 5%
        if (CurrentRight >= 3800) { // Stop if it reaches or exceeds 110%
            clearInterval(Timeinterval); // Correct method to stop interval
            Anime.remove()
            return;
        }
        
        Anime.style.right = CurrentRight + '%'; // Update the right property with %
    }, 100);
}
function MakeAnimes() {
    let MinRock = 1;
    let MaxRock = 3;

    const MakeAnimeInterval = setInterval(() => {
        for (let i = 0; i < 2; i++) {
            let RockDiv = document.createElement('div');
            let Rockimg = document.createElement('img');
            Rockimg.setAttribute('src', './images/roack.webp');
            RockDiv.appendChild(Rockimg);

            // Generate random positions within the desired range
            let RandomTop = Math.floor(Math.random() * (185 + 80 ) - 80 ) + 'px';
            // let RandomTop = Math.floor(Math.random() * 180) + 'px';

            // console.log(`RandomLeft: ${RandomLeft}, RandomTop: ${RandomTop}`);

            // Set styles for the RockDiv
            RockDiv.style.position = 'absolute';
            RockDiv.style.right = 15+'%';
            RockDiv.style.top = RandomTop;
            // RockDiv.style.bottom = 250 + 'px'
            // RockDiv.style.zIndex = 5;
            RockDiv.style.width = 100 + '%'
            RockDiv.style.height = 100 + '%'

            // Append to the Anime container
            Anime.appendChild(RockDiv);

            // Optional: Add animation logic
            Animes(RockDiv);
        }
    }, 3000);
}




console.log('boat position is',boat.getBoundingClientRect())
function  MoveBoat(key)
{
    if(key=='ArrowDown')
    {  
       let curruntTop = parseFloat(boat.style.top) || 0;
       curruntTop =  curruntTop +10 + '%';
       boat.style.top = curruntTop
       console.log(curruntTop)

    }
    else
    {
        if(parseFloat(boat.style.top) >0){
        let curruntTop = parseFloat(boat.style.top) ||0;
        curruntTop = curruntTop - 10 + '%';
        boat.style.top = curruntTop
       console.log(curruntTop)
        }

    }
     
   
}


function Checkout(object, boat) {
    const objRect = object.getBoundingClientRect();
    const boatRect = boat.getBoundingClientRect();

    const overlap =
        objRect.left < boatRect.right &&
        objRect.right > boatRect.left &&
        objRect.top < boatRect.bottom &&
        objRect.bottom > boatRect.top;

    if (overlap) {
        console.log('Out');
        outdisplay.style.display='block'
        window.location.reload();
    }
}

document.body.addEventListener('keydown' ,(e)=>{MoveBoat(e.key)})

MakeAnimes()