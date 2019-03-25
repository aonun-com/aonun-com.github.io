class Counter {
  constructor(){
    this._value = 0;
  }
  get value() {
    return this._value;
  }
  increment() {
    return ++this._value;
  }
}


let x


x=new Counter()

x.increment()
console.log(x.value)
console.log(x.increment());
