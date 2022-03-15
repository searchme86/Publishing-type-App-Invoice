import { Invoice } from './classes/Invoice.js';

const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('mario', 'work on the mario website', 250);

invOne.client = 'me';
invTwo.amount = 2;

console.log(invOne, invTwo);

const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amout = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  console.log(type.value, tofrom.value, details.value, amout.valueAsNumber);
});
