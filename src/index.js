const chess = [
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0]
];

draw()

function draw (){
  let out='';
  let m=0;
  for (let i = 0; i < chess.length; i++) {
      let str = chess[i];
      for (let k = 0; k < str.length; k++) {
        if(m % 2==0){
        out += `<div class='chess-block' data-x='${k}' data-y='${i}'></div>`;}
        else {
          out += `<div class='chess-block block-black' data-x='${k}' data-y='${i}'></div>`;
        }
        m++;
      }
      m++
    }
  document.getElementById('field').innerHTML=out;
  document.querySelectorAll('.chess-block').forEach(function (el){
    el.onclick = horse;
  })
}

function horse(){
document.querySelectorAll('.chess-block').forEach(function (elem) {
  elem.classList.remove('horse-start');
  elem.classList.remove('horse-go');
})
let x=this.dataset.x;
let y=this.dataset.y;
// console.log(x + ' ' + y);
this.classList.add('horse-start')

if (+x +2 < 8 && +y + 1 <8){
  document.querySelector(`.chess-block[data-x="${+x +2}"][data-y="${+y +1}"]`).classList.add('horse-go');
}

if (+x + 2 < 8 && +y - 1 >=0){
  document.querySelector(`.chess-block[data-x="${+x +2}"][data-y="${+y -1}"]`).classList.add('horse-go');
}

if (+x - 2 >=0 && +y + 1 <8){
  document.querySelector(`.chess-block[data-x="${+x -2}"][data-y="${+y +1}"]`).classList.add('horse-go');
}

if (+x - 2 >=0 && +y - 1 >=0){
  document.querySelector(`.chess-block[data-x="${+x -2}"][data-y="${+y -1}"]`).classList.add('horse-go');
}

if (+x +1 < 8 && +y + 2 <8){
  document.querySelector(`.chess-block[data-x="${+x +1}"][data-y="${+y +2}"]`).classList.add('horse-go');
}

if (+x - 1 >=0 && +y +2 <8){
  document.querySelector(`.chess-block[data-x="${+x -1}"][data-y="${+y +2}"]`).classList.add('horse-go');
}

if (+x +1 < 8 && +y - 2 >=0){
  document.querySelector(`.chess-block[data-x="${+x +1}"][data-y="${+y -2}"]`).classList.add('horse-go');
}

if (+x - 1 >=0 && +y -2 >=0){
  document.querySelector(`.chess-block[data-x="${+x -1}"][data-y="${+y -2}"]`).classList.add('horse-go');
}

}



