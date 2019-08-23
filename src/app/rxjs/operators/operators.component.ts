import { Component, OnInit } from '@angular/core';
import { timer, combineLatest, fromEvent, interval, pipe, zip } from 'rxjs';
import * as Rx from 'rxjs/Rx';
import { debounceTime, distinct, distinctUntilKeyChanged, distinctUntilChanged, scan, switchMap, takeUntil, tap, endWith } from 'rxjs/operators';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('hello');
  }

}
//------------COMBINE LATEST
// timerOne emits first value at 1s, then once every 4s
const timerOne$ = timer(1000, 4000);
const timer2 = timerOne$.pipe(take(2));

// timerTwo emits first value at 2s, then once every 4s
const timerTwo$ = timer(2000, 4000);
const timer3 = timerTwo$.pipe(take(2));

// timerThree emits first value at 3s, then once every 4s
const timerThree$ = timer(3000, 4000);
const timer4 = timerThree$.pipe(take(2));

// when one timer emits, emit the latest values from each timer as an array
combineLatest(timer2, timer3, timer4).subscribe(
  ([timerValOne, timerValTwo, timerValThree]) => {
    /*
      Example:
    timerOne first tick: 'Timer One Latest: 1, Timer Two Latest:0, Timer Three Latest: 0
    timerTwo first tick: 'Timer One Latest: 1, Timer Two Latest:1, Timer Three Latest: 0
    timerThree first tick: 'Timer One Latest: 1, Timer Two Latest:1, Timer Three Latest: 1
  */
    console.log(
      `Timer One Latest: ${timerValOne},
     Timer Two Latest: ${timerValTwo},
     Timer Three Latest: ${timerValThree}`
    );
  }
);
//-----------------CONCAT

import { of, concat } from 'rxjs';
import { delay, take, concatMap, count, first, last, startWith } from 'rxjs/operators';
concat(
  of(1, 2, 3).pipe(delay(3000)),
  // after 3s, the first observable will complete and subsquent observable subscribed with values emitted
  of(4, 5, 6).pipe(delay(3000)),
  of(7, 8, 9)
)
  // log: 1,2,3,4,5,6,7,8,9
  .subscribe(console.log);
//--------------------MAP
import { map } from 'rxjs/operators';

const nums = of(1, 2, 3);

const squareValues = map((val: number) => val * val);
const squaredNums = squareValues(nums);

squaredNums.subscribe(x => console.log(x));

//------------------CONCATMAP
const clicks = fromEvent(document, 'click');
const result = clicks.pipe(
  concatMap(ev => interval(1000).pipe(take(4)))
);
result.subscribe(x => console.log(x));
//----------------COUNT
const num = of(75, 3, 46, 67, 8, 45, 54, 88, 0, 23, 67);
const res = num.pipe(count());
res.subscribe(x => console.log('count', x));
//----------------FROM
import { from } from 'rxjs';

const source = from('Hello Jyothsna');
const sub = source.subscribe(val => console.log(val));
//----------------FIRST ,LAST ,STARTWITH ,DISTINCT, DISTINCTUNTILCHANGED, SCAN
const nu = from([33, 45, 5, 6, 33, 34, 45, 5, 45, 33, 43]);
const re = nu.pipe(first());
const su = re.subscribe(val => console.log((`First value: ${val}`)));
const resu = nu.pipe(last());
const subs = resu.subscribe(val => console.log((`last value: ${val}`)));
const sta = nu.pipe(startWith(4244));
const ress = sta.subscribe(val => console.log((` Start with value is: ${val}`)));
const dis = nu.pipe(distinct());
const resd = dis.subscribe(val => console.log((`distinct value: ${val}`)));
const dist = nu.pipe(distinctUntilChanged());
const r = dist.subscribe(val => console.log("distinctuntilchanged", val));
const sca = nu.pipe(scan((acc, curr) => acc + curr, 0));
const s = sca.subscribe(val => console.log('scan', val));
//-------------------------SWITCHMAP
fromEvent(document, 'click')
  .pipe(
    // restart counter on every click
    switchMap(() => interval(1000))
  )
  .subscribe(console.log);
//------------------TAKEUTIL
const sou = interval(1000);
const timer$ = timer(5000);
const example = sou.pipe(takeUntil(timer$));
//output: 0,1,2,3
const subscribe = example.subscribe(val => console.log(val));
//-----------------------zip
const sourceOne = of('Hello');
const sourceTwo = of('World!');
const sourceThree = of('Goodbye');
const sourceFour = of('World!');
//wait until all observables have emitted a value then emit all as an array
const example1 = zip(
  sourceOne,
  sourceTwo.pipe(delay(1000)),
  sourceThree.pipe(delay(2000)),
  sourceFour.pipe(delay(3000))
);
//output: ["Hello", "World!", "Goodbye", "World!"]
const subscribe1 = example1.subscribe(val => console.log(val));
//-----------------------TAP
const source2 = of(1, 2, 3, 4, 5);
// transparently log values from source with 'tap'
const example2 = source2.pipe(
  tap(val => console.log(`BEFORE MAP: ${val}`)),
  map(val => val + 10),
  tap(val => console.log(`AFTER MAP: ${val}`))
);

//'tap' does not transform values
//output: 11...12...13...14...15
const subsc = example2.subscribe(val => console.log(val));
//-------------MAP
const source3 = from([10, 20, 30, 40, 50]);
//add 10 to each value
const example3 = source3.pipe(map(val => val + 10));
//output: 11,12,13,14,15
const subscribe3 = example3.subscribe(val => console.log(val));
//-----------------WITHLATESTFORM
// RxJS v6+
import { withLatestFrom } from 'rxjs/operators';

//emit every 5s
const source4 = interval(5000);
//emit every 1s
const secondSource = interval(1000);
const example4 = source4.pipe(
  withLatestFrom(secondSource),
  map(([first, second]) => {
    return `First Source (5s): ${first} Second Source (1s): ${second}`;
  })
);
/*
  "First Source (5s): 0 Second Source (1s): 4"
  "First Source (5s): 1 Second Source (1s): 9"
  "First Source (5s): 2 Second Source (1s): 14"
  ...
*/
const subscribe4 = example4.subscribe(val => console.log(val));
subscribe4.unsubscribe();
//-----------ENDWITH

const source5 = of('Hello', 'Friend', 'Goodbye');
const exm5 = source5.pipe(endWith('Friend'));
const sub5 = exm5.subscribe(val => console.log(val))

