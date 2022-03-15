import { HasFormatter } from './interfaces/HasFormatter.js';
import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('.item-list') as HTMLUListElement;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let values: [string, string, number];
  values = [tofrom.value, details.value, amount.valueAsNumber];

  let doc: HasFormatter;

  if (type.value === 'invoice') {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }

  //doc은 클래스 Invoice와 클래스 Payment를 모두 받을 수 있다.
  //(왜냐하면) let doc: HasFormatter;으로 doc은 인터페이스 타입이기 때문이다.
  //즉, HasFormatter 인터페이스를 타입이란건, 해당 타입을 사용한다는 것은 해당 인터페이스를 구현하는 모든 클래스를 지칭한다.
  //곧, doc이 HasFormatter 타입이란 의미는, 인터페이스 HasFormatter 타입를 구현하는 클래스 Invoice와 클래스 Payment 둘 다를 의미한다.
  //형태는 인터페이스, 내용은 클래스
  //인터페이스(형태)를 따르는/구현하는 클래스(내용)은 다르게 할 수 있지만 형태는 반드시 따라야 한다.
  //---------------------------------
  //(이런 구조를 만들기 위해서는)
  //1. 공통적으로 사용할 메서드/메서드 형태를 인터페이스로 정의한다.
  //2. 그 인터페이스를 구현(implements)하는 클래스를 정의한다.
  list.render(doc, type.value, 'end');
});
