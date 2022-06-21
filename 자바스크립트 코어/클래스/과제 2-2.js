class Clock {
  constructor({template}) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.timer = setInterval(() => this.render(), 1000);
  }
}

let clock = new Clock('h시 m분 s초')

class ExtendedClock extends Clock {
  constructor(option){
    super(option)
    let {precision = 1000} = option
    this.precision = precision
  }

  start(){
    this.timer = setInterval(() => this.render(), this.precision)
  }
}

let clock2 = new ExtendedClock({template: 'h시 m분 s초', precision: 200})
console.log('clock2: ', clock2);

