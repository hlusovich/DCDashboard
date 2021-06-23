const container = document.querySelector(".container");
const SQUARES_NUMBER =450;
const colors = ["#FF69B4", '#00FA9A', '#20B2AA', '#FFD700','#8A2BE2','#F4A460', 'darkblue']
for(let i=0; i<SQUARES_NUMBER;i++){
    const square = document.createElement("div");
    square.classList.add('square');
    square.addEventListener("mouseover", ()=>{
        const index = Math.floor(Math.random()*colors.length);
        square.style.background= colors[index];
        square.style.boxShadow = `0 0 2px ${colors[index]},0 0 10px ${colors[index]}`;
    });
    square.addEventListener("mouseleave", ()=>{
        square.style.background='#1d1d1d';
        square.style.boxShadow = `0 0 2px #0000 `;
    });
    container.append(square);
}
