
const herosEl= document.querySelector('.heros');


for(let i = 0 ; i < 32; i++){
  herosEl.innerHTML += `
          <div class="hero">
              <div class="image"></div>
          </div>
          `
}