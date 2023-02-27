/*const h1 = document.querySelector('h1');
const p = document.querySelectorAll('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value);
console.log({
  h1,
  p,
  parrafito,
  pid,
  input,
});
//h1.innerHTML = 'patito loco <br> feo';
//h1.innerText = 'patito loco <br> feo';
//console.log(h1.getAttribute('class'));
//h1.setAttribute('class', 'azul');
//h1.classList.add('azul');
//h1.classList.remove('verde');
//h1.classList.toggle("verde")
//h1.classList.contains("verde")

//input.value = '456';
const img = document.createElement('img');
img.setAttribute(
  'src',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBBGm7wGv20535Vg5L_6u4ArFovwSr7B3bAQ&usqp=CAU'
);
console.log(img);
pid.innerHTML = '';
pid.append(img);*/
const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

form.addEventListener('submit', sumarInputValues);
function sumarInputValues(event) {
  //console.log({ event });
  event.preventDefault();
  const result = Number(input1.value) + Number(input2.value);
  pResult.innerText = 'resultado: ' + result;
}

// function btnOnClick() {
//   const result = Number(input1.value) + Number(input2.value);
//   pResult.innerText = 'resultado: ' + result;
// }
// function inputOnChange() {
//   console.log('cambió el input');
// }
