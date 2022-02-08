////////// jouer avec la page

const btn = document.querySelector('#btn');
const img = document.getElementById('img');

btn.addEventListener('click', () => {
    img.classList.toggle('show') //toggle fait l'inverse de la situation actuelle, sur clique il va enlever l'image si elle ny est pas ou vice versa
    //alert('Ca a changé !')
})

///////////////////////////////////////////////////////

// supposons quon est en haut de page

const mouseEvent = document.querySelector('.mouseEvent');
const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
 
mouseEvent.addEventListener('mousemove', (e) => { //e pour event
    horizontal.innerHTML = e.x; // ici on vient chercher la position x dans l'event
    vertical.innerHTML = e.y;
    mouseEvent.style.left = e.x / window.innerWidth * 100 + "%";

    if (e.x > 500) {
        document.body.style.filter = "blur(3px)";
    } else {
        document.body.style.filter = "none";
    }
})

////////////////////////////////////////////////////////

document.getElementById('input').addEventListener('input', (e) =>{
    vertical.innerHTML = e.target.value;
})


//////////////////////////////////////////////////////

const theme = document.querySelectorAll('.theme');


theme.forEach((item) => {
    item.addEventListener('click', (e) => {
        console.log(e.target.id);
        document.body.classList.remove("darktheme", "yellowtheme", "salmontheme");

        switch (e.target.id){
            case "dark":
                document.body.classList.add("darktheme");
                break;
            case "salmon" :
                document.body.classList.add("salmontheme");
                break;
            case "yellow":
                document.body.classList.add("yellowtheme");
                break;
            default:
                null;
            
        }
    })
})